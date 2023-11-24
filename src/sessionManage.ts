import type { SessionManager } from "@kinde-oss/kinde-typescript-sdk";

interface CustomSessionManager extends SessionManager {
    // Extend SessionManager if necessary with additional methods or overrides
}

let store: Record<string, unknown> = {};

const sessionManager: CustomSessionManager = {
    async getSessionItem(key: string) {
        return store[key];
    },
    async setSessionItem(key: string, value: unknown) {
        store[key] = value;
    },
    async removeSessionItem(key: string) {
        delete store[key];
    },
    async destroySession() {
        store = {};
    }
};

export default sessionManager as SessionManager;
