import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getAllResponsesHelper() {
    try {
        const responses = await prisma.response.findMany();
        if (responses) return responses;
    
    } catch (error) {
        console.log("Error at getAllResponsesHelper: ", error);
        throw new Error("Error at getAllResponsesHelper");
        
    } finally {
        await prisma.$disconnect();
    }
}