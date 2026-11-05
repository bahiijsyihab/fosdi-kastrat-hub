import { useQuery, useMutation } from '@tanstack/react-query';
import { reportService } from '../services/reportService';

export const REPORT_KEYS = {
  kpi: ['reports', 'kpi'],
};

/**
 * Hook untuk KPI Capaian Advokasi Parlemen
 */
export function useAdvocacyKPI(options = {}) {
  return useQuery({
    queryKey: REPORT_KEYS.kpi,
    queryFn: () => reportService.getKPISummary(),
    staleTime: 1000 * 60 * 5, // 5 menit
    ...options,
  });
}

/**
 * Hook mutasi untuk mengunduh rekap CSV
 */
export function useExportSignaturesCSV() {
  return useMutation({
    mutationFn: (publicationId) => reportService.downloadSignaturesCSV(publicationId),
  });
}
