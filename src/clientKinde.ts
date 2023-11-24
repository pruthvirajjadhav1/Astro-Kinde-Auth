import {createKindeBrowserClient} from "@kinde-oss/kinde-typescript-sdk";

const kindeClient = createKindeBrowserClient({
    authDomain: "https://pruthvirajjadhav1.kinde.com",
    clientId: "810b617321514b02973d39e14c986095",
    logoutRedirectURL: "http://localhost:4321",
    redirectURL: "http://localhost:4321"
});

export default kindeClient;