// Check if localStorage and sessionStorage are available
const localStorageAvailable = supportsHtml5Storage(window.localStorage);
const sessionStorageAvailable = supportsHtml5Storage(window.sessionStorage);
let storage: "session" | "local" | "cookie" = sessionStorageAvailable
    ? "session"
    : localStorageAvailable
    ? "local"
    : "cookie";

// Function to check if storage (localStorage or sessionStorage) is supported
function supportsHtml5Storage(storage: Storage): boolean {
    try {
        const testKey = 'test';
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

// Function to get a value from the appropriate storage (sessionStorage, localStorage, or cookie)
export function getValue(key: string): string | null {
    if (storage === "cookie") {
        return readCookie(key);
    } else if (storage === "session") {
        return window.sessionStorage.getItem(key);
    } else {
        return window.localStorage.getItem(key);
    }
}

// Function to set a value in the appropriate storage (sessionStorage, localStorage, or cookie)
export function setValue(key: string, value: string): void {
    if (storage === "cookie") {
        writeCookie(key, value, 365);
    } else if (storage === "session") {
        window.sessionStorage.setItem(key, value);
    } else {
        window.localStorage.setItem(key, value);
    }
}

// Helper function to read a cookie by name
function readCookie(name: string): string | null {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

// Helper function to write a cookie
function writeCookie(name: string, value: string, days: number): void {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
}
