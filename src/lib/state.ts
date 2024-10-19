const localStorageAvailable = hasStorageCapability(window.localStorage);
const sessionStorageAvailable = hasStorageCapability(window.sessionStorage);

let storage: "session" | "local" | "cookie" = sessionStorageAvailable
    ? "session"
    : localStorageAvailable
    ? "local"
    : "cookie";

function hasStorageCapability(storage: Storage): boolean {
    try {
        const testKey = 'test';
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

export function getSessionValue(key: string): string | null {
    if (storage === "cookie") {
        return readCookie(key);
    } else if (storage === "session") {
        return window.sessionStorage.getItem(key);
    } else {
        return window.localStorage.getItem(key);
    }
}

export function setSessionValue(key: string, value: string): void {
    if (storage === "cookie") {
        writeCookie(key, value, 365);
    } else if (storage === "session") {
        window.sessionStorage.setItem(key, value);
    } else {
        window.localStorage.setItem(key, value);
    }
}

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

function writeCookie(name: string, value: string, days: number): void {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
}
