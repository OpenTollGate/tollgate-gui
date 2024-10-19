export interface MeltSuccess {
    paid: boolean;
    preimage: string;
    change: any[]
    total_amount: number;
}

export interface MeltError {
    default: string; 
    code: number;
    total_amount: number;
}