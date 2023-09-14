import { PrismaClient, Preferred_language, How_found } from "@prisma/client"

const prisma = new PrismaClient();

export default async function createResponseHelper(data: {
    full_name: string,
    phone_number: string,
    start_date?: Date,
    preferred_language: Preferred_language,
    how_found: How_found,
    newsletter_subscription: boolean
}) {
    try {
        console.log("llege al helper):");
        const newResponse = await prisma.response.create({
            data: data
        });
        console.log("Nuevo entry: ", newResponse);
        if (newResponse) return newResponse;

    } catch (error) {
        console.log("Error at createResponseHelper: ", error);
        throw new Error("Error at createResponseHelper");

    } finally {
        await prisma.$disconnect();
    }

}