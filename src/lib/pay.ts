import type { TollBoothRequest } from "./interfaces";
import { getSessionValue, setSessionValue } from "./state";

export default async ( request: TollBoothRequest ) => {
    const response = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    });

    if (!response.ok) {
        throw new Error('Fetch error: ' + response.statusText);
    }

    const { status, error, authToken } = await response.json();

    if (status === 'accepted') {
        setSessionValue("authToken", authToken)
    } else if (status === 'denied') {
        console.error(error);
    } else {
        console.error('An unexpected error occurred.');
    }
}