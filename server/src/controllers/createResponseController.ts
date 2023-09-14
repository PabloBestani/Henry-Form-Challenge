import createResponseHelper from "../helpers/createResponseHelper";
import { Preferred_language, How_found } from "@prisma/client";
import validateResponse from "../utils/validateResponse";

export default async function createResponseController(data: {
    full_name: string,
    phone_number: string,
    start_date?: Date,
    preferred_language: Preferred_language,
    how_found: How_found,
    newsletter_subscription: boolean
}) {
    validateResponse(data);
    const newResponse = await createResponseHelper(data);
    if (newResponse) return newResponse;
}