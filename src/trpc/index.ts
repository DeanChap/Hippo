import AppRouter from "next/dist/client/components/app-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    auth: authRouter
})

export type AppRouter = typeof appRouter