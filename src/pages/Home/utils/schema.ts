import { z } from 'zod';

export const searchSchema = z.object({
  username: z
    .string({ required_error: 'O campo de busca é obrigatório.' })
    .min(3, 'Digite pelo menos 3 caracteres.'),
});

export type SearchFormData = z.infer<typeof searchSchema>;
