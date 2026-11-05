import { apiClient } from './apiClient';

export const reportService = {
  /**
   * Mengambil ringkasan metrik KPI advokasi publik
   */
  async getKPISummary() {
    return apiClient.get('/api/v1/reports/kpi');
  },

  /**
   * Mengunduh berkas rekapitulasi CSV tanda tangan untuk audiensi DPR RI
   */
  async downloadSignaturesCSV(publicationId) {
    const blob = await apiClient.get(`/api/v1/reports/signatures/export-csv?publicationId=${publicationId}`);
    
    // Trigger download di browser
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Rekap_Tanda_Tangan_Parlemen_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  },
};
