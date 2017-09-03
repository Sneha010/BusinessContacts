// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD4H5Okps2ozntRCNStOAGx0jC5pJljOTg',
    authDomain: 'fir-demo-e8ff2.firebaseapp.com',
    databaseURL: 'https://fir-demo-e8ff2.firebaseio.com',
    projectId: "fir-demo-e8ff2",
    storageBucket: "fir-demo-e8ff2.appspot.com",
    messagingSenderId: "175223121393"
  }
};