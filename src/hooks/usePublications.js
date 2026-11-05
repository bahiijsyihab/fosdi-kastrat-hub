import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { publicationService } from '../services/publicationService';

export const PUBLICATION_KEYS = {
  all: ['publications'],
  lists: () => [...PUBLICATION_KEYS.all, 'list'],
  list: (params) => [...PUBLICATION_KEYS.lists(), params],
  details: () => [...PUBLICATION_KEYS.all, 'detail'],
  detail: (slug) => [...PUBLICATION_KEYS.details(), slug],
};

/**
 * Hook untuk mengambil daftar publikasi dengan caching & filter otomatis
 */
export function usePublications(params = {}, options = {}) {
  return useQuery({
    queryKey: PUBLICATION_KEYS.list(params),
    queryFn: () => publicationService.getPublications(params),
    staleTime: 1000 * 60 * 2, // 2 menit
    ...options,
  });
}

/**
 * Hook untuk detail naskah kajian berdasarkan slug
 */
export function usePublication(slug, options = {}) {
  return useQuery({
    queryKey: PUBLICATION_KEYS.detail(slug),
    queryFn: () => publicationService.getPublicationBySlug(slug),
    enabled: Boolean(slug),
    ...options,
  });
}

/**
 * Hook mutasi untuk membuat naskah kajian baru
 */
export function useCreatePublication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => publicationService.createPublication(data),
    onSuccess: () => {
      // Invalidate list publikasi agar data terbaru langsung dimuat
      queryClient.invalidateQueries({ queryKey: PUBLICATION_KEYS.lists() });
    },
  });
}

/**
 * Hook mutasi untuk mempublikasikan naskah
 */
export function usePublishPublication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => publicationService.publishPublication(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PUBLICATION_KEYS.all });
    },
  });
}
