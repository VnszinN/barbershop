import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@/generated/prisma/client"
import { Pool } from "pg"

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

// garantia que não haverá multiplas conexões com o db
declare global {
  var cachedPrisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter })
} else {
  global.cachedPrisma ??= new PrismaClient({ adapter })
  prisma = global.cachedPrisma // Esta linha precisa estar dentro do bloco 'else'
}
export const db = prisma
