import { apiClient } from './apiClient';

export const categoryService = {
  /**
   * Mengambil semua kategori (Kampus, Daerah, Nasional)
   */
  async getCategories() {
    return apiClient.get('/api/v1/categories');
  },

  /**
   * Membuat kategori baru
   */
  async createCategory(data) {
    return apiClient.post('/api/v1/categories', data);
  },

  /**
   * Memperbarui kategori
   */
  async updateCategory(id, data) {
    return apiClient.put(`/api/v1/categories/${id}`, data);
  },

  /**
   * Menghapus kategori
   */
  async deleteCategory(id) {
    return apiClient.delete(`/api/v1/categories/${id}`);
  },
};
