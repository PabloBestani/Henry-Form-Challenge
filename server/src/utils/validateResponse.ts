
export default function validateResponse(data: {
    full_name: string,
    phone_number: string,
    // start_date?: Date,
    // preferred_language: Preferred_language,
    // how_found: How_found,
    // newsletter_subscription: boolean
}) {
    // Destructuring de los datos (solo se necesita validar los que no pueden ser nulos ni fueron validados automaticamente por TS)
    const {
        full_name,
        phone_number,
    } = data;

    // Validaciones
    if (!full_name) throw Error(`full_name value recieved is ${full_name} (at utils/validateResponse)`);
    if (!phone_number) throw Error(`phone_number value recieved is ${phone_number} (at utils/validateResponse)`);
}