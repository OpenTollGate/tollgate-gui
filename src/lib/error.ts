import { type MeltError } from "./interfaces"

export const alreadySpent = ( message: MeltError ) => "Cashu token already melted"
export const tokenInvalid = ( message: MeltError ) => "Cashu token invalid"
export const serverError = "Server Error"
export const sessionExpired = ""

export default {
    alreadySpent,
    tokenInvalid,
    serverError,
    sessionExpired
}