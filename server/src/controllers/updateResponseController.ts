import updateResponseHelper from "../helpers/updateResponseHelper";
import { Preferred_language, How_found } from "@prisma/client";
import validateResponse from "../utils/validateResponse";

export default async function updateResponseController(data: {
    id: number,
    full_name: string,
    phone_number: string,
    start_date?: Date,
    preferred_language: Preferred_language,
    how_found: How_found,
    newsletter_subscription: boolean
}) {
    validateResponse(data);
    const updatedResponse = await updateResponseHelper(data);
    if (updatedResponse) return updatedResponse;
}
