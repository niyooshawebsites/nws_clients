// import { PrismaClient } from "./generated/prisma/client";
// import { PrismaPostgresAdapter } from "@prisma/adapter-ppg";

// const connectionString = `${process.env.DATABASE_URL}`;
// const adapter = new PrismaPostgresAdapter({
//   connectionString,
// });

// const prismaClientSingleton = () => {
//   return new PrismaClient({ adapter });
// };

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// export default prisma;
// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
