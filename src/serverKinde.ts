import {createKindeServerClient, GrantType} from "@kinde-oss/kinde-typescript-sdk";

// Client for authorization code flow
const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
    authDomain: "https://pruthvirajjadhav1.kinde.com",
    clientId: "810b617321514b02973d39e14c986095",
    clientSecret: "<your_kinde_client_secret>",
    redirectURL: "http://localhost:4321",
    logoutRedirectURL: "http://localhost:4321"
});

// Client for client credentials flow
const kindeApiClient = createKindeServerClient(GrantType.CLIENT_CREDENTIALS, {
    authDomain: "https://pruthvirajjadhav1.kinde.com",
    clientId: "810b617321514b02973d39e14c986095",
    clientSecret: "<your_kinde_client_secret>",
    logoutRedirectURL: "http://localhost:4321"
});

export default kindeClient;
