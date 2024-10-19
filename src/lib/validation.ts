import type { CashuToken } from "./interfaces";

const cashu$ =  new RegExp(/(cashu(?:A|B)[A-Za-z0-9_-]{100,10000}={0,3})/gi);''

export const validateToken = (token: CashuToken): boolean  => {
    return cashu$.test(token)
}