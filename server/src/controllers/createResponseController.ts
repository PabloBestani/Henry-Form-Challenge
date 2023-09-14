import createResponseHelper from "../helpers/createResponseHelper";
import { Preferred_language, How_found } from "@prisma/client";

export default async function createResponseController(data: {
    full_name: string,
    phone_number: string,
    start_date?: Date,
    preferred_language: Preferred_language,
    how_found: How_found,
    newsletter_subscription: boolean
}) {

    // Destructuring de los datos
    const {
        full_name,
        phone_number,
        start_date,
        preferred_language,
        how_found,
        newsletter_subscription
    } = data;
    const availableLanguages = ['ENGLISH', 'SPANISH', 'FRENCH', 'GERMAN'];
    const availableHowFounds = ['FRIENDS', 'ONLINE_SEARCH', 'ADVERTISEMENT'];
    console.log("lleguye al controller con::: ", data);
    // Validaciones
    if (!full_name) throw Error(`full_name value recieved is ${full_name} (at controller)`);
    if (!phone_number) throw Error(`phone_number value recieved is ${phone_number} (at controller)`);
    if (!preferred_language) throw Error(`preferred_language value recieved is ${preferred_language} (at controller)`);
    if (!availableLanguages.includes(preferred_language)) {
        throw Error(`invalid preferred_language value recieved. Reading: ${preferred_language} (at controller)`);
    }
    if (!availableHowFounds.includes(how_found)) {
        throw Error(`invalid how_found value recieved. Reading: ${how_found} (at controller)`);
    }

    const newResponse = await createResponseHelper(data);
    console.log("ESTO ME VOLVIO AL CONTROLLER:::", newResponse);

    if (newResponse) return newResponse;

}