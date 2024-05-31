import {z} from 'zod';


export const RegisterSchema= z.object({
    username: z.string().max(100).min(3),
    email: z.string().max(100).min(15).email(),
    password: z.string().max(100).min(4),
    
})