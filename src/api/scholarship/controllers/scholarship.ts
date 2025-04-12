import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::scholarship.scholarship', ({ strapi }) => ({
  async find(ctx) {
    // Get published scholarships only
    const entities = await strapi.entityService.findMany('api::scholarship.scholarship', {
      filters: { isPublished: true },
    });

    // If you want to sanitize and format response:
    const sanitized = await this.sanitizeOutput(entities, ctx);

    return this.transformResponse(sanitized);
  },
}));
