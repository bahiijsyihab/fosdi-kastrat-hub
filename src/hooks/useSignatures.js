import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { signatureService } from '../services/signatureService';
import { PUBLICATION_KEYS } from './usePublications';

export const SIGNATURE_KEYS = {
  all: ['signatures'],
  byPublication: (publicationId) => [...SIGNATURE_KEYS.all, 'publication', publicationId],
};

/**
 * Hook untuk memuat live feed tanda tangan mosi sikap (dengan polling otomatis)
 */
export function useRecentSignatures(publicationId, limit = 20, options = {}) {
  return useQuery({
    queryKey: SIGNATURE_KEYS.byPublication(publicationId),
    queryFn: () => signatureService.getSignatures(publicationId, limit),
    enabled: Boolean(publicationId),
    refetchInterval: 1000 * 30, // Polling setiap 30 detik untuk sync live stream
    ...options,
  });
}

/**
 * Hook mutasi untuk pengesahan tanda tangan petisi publik
 */
export function useSubmitSignature() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ publicationId, data }) => signatureService.submitSignature(publicationId, data),
    onSuccess: (_, variables) => {
      // Invalidate feed tanda tangan & counter pada naskah terkait
      queryClient.invalidateQueries({
        queryKey: SIGNATURE_KEYS.byPublication(variables.publicationId),
      });
      queryClient.invalidateQueries({
        queryKey: PUBLICATION_KEYS.all,
      });
    },
  });
}

/**
 * Hook mutasi untuk verifikasi tanda tangan KTA santri
 */
export function useVerifySignature() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (signatureId) => signatureService.verifySignature(signatureId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SIGNATURE_KEYS.all });
    },
  });
}
