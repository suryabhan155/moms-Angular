export const environment = {
    production: true,

    // Identity Server
    authority: 'https://' + window.location.hostname + ':5006',
    clientId: 'spa',
    redirectUri: 'https://' + window.location.hostname,
    responseType: 'id_token token',
    scope: 'openid profile apiApp',

    // API'S
    UserManagementUri: 'https://' + window.location.hostname + ':5007',
    REGISTRATION_API: 'https://' + window.location.hostname + ':5001/api/',
    LOOKUP_API: 'https://' + window.location.hostname + ':5003/api/',
    CLINIC_MANAGEMENT_API: 'https://' + window.location.hostname + ':5005/api/',
    BILLING_MANAGEMENT_API: 'https://' + window.location.hostname + ':5011/api/',
    SUPPLYCHAIN_MANAGEMENT_API: 'https://' + window.location.hostname + ':5001/api/',
};
