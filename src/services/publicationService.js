import { apiClient } from './apiClient';

export const publicationService = {
  /**
   * Mengambil daftar publikasi dengan filter, pencarian, & paginasi
   */
  async getPublications(params = {}) {
    const query = new URLSearchParams();
    if (params.search) query.append('search', params.search);
    if (params.type && params.type !== 'all') query.append('type', params.type);
    if (params.categorySlug && params.categorySlug !== 'all') query.append('categorySlug', params.categorySlug);
    if (params.page) query.append('page', params.page);
    if (params.limit) query.append('limit', params.limit);

    const queryString = query.toString();
    const endpoint = `/api/v1/publications${queryString ? `?${queryString}` : ''}`;
    return apiClient.get(endpoint);
  },

  /**
   * Mengambil detail publikasi berdasarkan slug unik
   */
  async getPublicationBySlug(slug) {
    return apiClient.get(`/api/v1/publications/${slug}`);
  },

  /**
   * Membuat draf publikasi baru
   */
  async createPublication(data) {
    return apiClient.post('/api/v1/publications', data);
  },

  /**
   * Mempublikasikan naskah kajian ke repositori publik
   */
  async publishPublication(id) {
    return apiClient.patch(`/api/v1/publications/${id}/publish`);
  },

  /**
   * Memperbarui publikasi
   */
  async updatePublication(id, data) {
    return apiClient.put(`/api/v1/publications/${id}`, data);
  },

  /**
   * Menghapus publikasi
   */
  async deletePublication(id) {
    return apiClient.delete(`/api/v1/publications/${id}`);
  },
};
