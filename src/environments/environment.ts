// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	showWarning: true,
	host: 'http://172.18.50.35:84',
	eiamSelfAdmin: 'http://172.18.50.35:84',
	oidc: {
		// The clientID as used in keycloak or mock server
		clientId: 'ha-ui-web-client',
		// Site to open after successful login
		afterLoginPath: 'generate-code',
		// Path to the login server
		stsServer: 'http://172.18.50.35:84:8180',
		// The URL of this application, used e.g. for redirect URLs
		applicationUrl: 'http://172.18.50.35:4200/auth/login-feedback/',
		// The URL to go to after a logout, e.g, e-portal
		post_logout_redirect_uri: 'http://172.18.50.35:4200/',
		// Use silent-renew. In prod this should be used, but with mock server it does not work
		silentRenew: true,
		// Is the user always required to log in?
		useAutoLogin: false,
		// Enable debug output of the oidc library
		debug: true,
		// URL that will get the JWT.
		// NOTE: NEVER send this token to other backends than your own!
		token_aware_url_patterns: ['/v1/(authcode).*']
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
