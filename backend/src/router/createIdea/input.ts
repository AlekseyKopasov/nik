import { z } from 'zod'

export const zCreateIdeaTrpcInput = z.object({
  name: z.string().min(1, 'Field is required'),
  nick: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, 'Nick may contain only lowercase letters, numbers and dashes'),
  description: z.string().min(1, 'Field is required'),
  text: z.string().min(3, 'Text should be at least 3 characters long'),
})
