import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    subject: z.string().min(4).max(255),
    message: z.string().min(5).max(10000),
})

export type FormSchema = typeof formSchema