import getAllResponsesHelper from "../helpers/getAllResponsesHelper";

export default async function getAllResponsesController() {
    const responses = await getAllResponsesHelper();
    if (responses) return responses;
}