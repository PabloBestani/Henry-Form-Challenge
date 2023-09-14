import { PrismaClient } from "@prisma/client";
import { Preferred_language, How_found } from "@prisma/client";

const prisma = new PrismaClient();

export default async function updateResponseHelper(data: {
    id: number,
    full_name: string,
    phone_number: string,
    start_date?: Date,
    preferred_language: Preferred_language,
    how_found: How_found,
    newsletter_subscription: boolean
}) {

    try {
        const updatedResponse = await prisma.response.update({
            where: {id: data.id},
            data: data
        })
        if (updatedResponse) return updatedResponse;

    } catch (error) {
        console.log("Error at updateResponseHelper: ", error);
        throw Error("Error at updateResponseHelper");

    } finally {
        prisma.$disconnect();
    }
}