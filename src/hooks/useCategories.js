import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { categoryService } from '../services/categoryService';

export const CATEGORY_KEYS = {
  all: ['categories'],
};

export function useCategories(options = {}) {
  return useQuery({
    queryKey: CATEGORY_KEYS.all,
    queryFn: () => categoryService.getCategories(),
    staleTime: 1000 * 60 * 10, // 10 menit
    ...options,
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => categoryService.createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CATEGORY_KEYS.all });
    },
  });
}
