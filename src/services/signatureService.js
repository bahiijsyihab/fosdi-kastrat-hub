import { apiClient } from './apiClient';

export const signatureService = {
  /**
   * Menandatangani mosi petisi publik
   */
  async submitSignature(publicationId, data) {
    return apiClient.post(`/api/v1/publications/${publicationId}/signatures`, data);
  },

  /**
   * Mengambil feed realtime penandatangan terbaru
   */
  async getSignatures(publicationId, limit = 20) {
    return apiClient.get(`/api/v1/publications/${publicationId}/signatures?limit=${limit}`);
  },

  /**
   * Verifikasi tanda tangan via KTA santri
   */
  async verifySignature(signatureId) {
    return apiClient.patch(`/api/v1/signatures/${signatureId}/verify`);
  },
};
