import auth0 from 'auth0-js';

import {
  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_RESUME_SERVICE_AUD
} from '../parameters';

export const authPrompt = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: AUTH0_CALLBACK_URL,
  audience: `${AUTH0_RESUME_SERVICE_AUD}`,
  // audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid',
  nonce: '1234567890123456'
});
