const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: '0oa251uetdfBb9Ii25d7',
  issuer: 'https://dev-8842083.okta.com/oauth2/default'
});
/*
const oidc = new ExpressOIDC({
    issuer: 'https://dev-8842083.okta.com/oauth2/default',
    clientId: '0oa251uetdfBb9Ii25d7',
    client_secret: secret,
    appBaseUrl: '',

})
*/

async function oktaAuth(req, res, next) {
  try {
    const token = req.token;
    if (!token) {
      return res.status(401).send('You are not Authorized');
    }
    const jwt = await oktaJwtVerifier.verifyAccessToken(token, ['api://default']);
    res.status(201).json({
        message:'patient recorded',
        redirectUrl: 'http://localhost:8080/callback'
    });
    req.user = {
      uid: jwt.claims.uid,
      email: jwt.claims.sub
    };
    next();
  }
  catch (err) {
    console.log('AUTH ERROR: ', err);
    return res.status(401).send(err.message);
  }
}

module.exports = oktaAuth;