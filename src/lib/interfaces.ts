export type CashuToken = string;

export type AuthToken = string;

export type TollBoothRequest = {
    cashuToken: CashuToken;
    authToken: AuthToken;
}

export type MeltSuccess = {
    paid: boolean;
    preimage: string;
    change: any[]
    total_amount: number;
}

export type MeltError = {
    default: string; 
    code: number;
    total_amount: number;
}