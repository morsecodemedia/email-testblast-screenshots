import launchScreenshotsRunner from 'screenshot-helper';

const httpCredentials = {
  username: 'leo',
  password: 'leopharma',
};

// LEO CRM - ShowerThinking Emails
// const baseURL = 'https://view.email.leo-pharma.com'

// LOCAL LEO EMAIL DEV
const baseURL = 'http://[::]:8000'

const scenarioData = [
  // // MAT-83526
  // { name: 'here-it-is-info-for-your-anzupgo-treatment', route: '/?qs=14a716fbba1953c1f9b27e7dfcbc92c03f322338ea5c43b780a8acf6493e5629c3c3a46753cf19c65a9d7ce435844369434258bb8c346182f1020c3971caf6fa9da8b7fd4952ad68', full: true },

  // // MAT-83528
  // { name: 'get-to-know-a-daily-routine-with-anzupgo', route: '/?qs=14a716fbba1953c1200abdba2c6833718deddc7f7ad8afacb31f214dc75a5284aa7e8077fcb2fe0cbbd2c9019ddb28f3de2764460f8ab950c141ec7d1ffafe23a2f750db440e5e7e', full: true },

  // // MAT-83531
  // { name: 'heres-the-anzupgo-info-you-need', route: '/?qs=14a716fbba1953c183a8e735c402c2b4e3b2806d361d82aefa4f1d30a8507ccb9e9756e193771be215b8d2f8875420754722e913e38be98cf5517c91f472b960083e170c30cb05c9', full: true },

  // // MAT-85102
  // { name: 'mat-85102', route: '/?qs=7069d919d3ab21d15de091c0c4e3522c1ef57be2e493746b57585341d6571496024304fce57c336e9d926827db61f00e88ba1b180a35afe42d44b108b17858dab556b05ddf64bf3d', full: true },

  // // MAT-85103
  // { name: 'mat-85103', route: '/?qs=abe3fc6ecf473fe479a5aa5e2c80421591491c7e43609ccdcaf7408fec820f84ebb26389027293be6778f4515a67090b7b016508b9ecc714fb11e153f0132bb0e1b6a0da27411a91', full: true },

  // // MAT-85104
  // { name: 'mat-85104', route: '/?qs=abe3fc6ecf473fe40343441efbcf5f5abc37556ace502fac5de5fb73fe79a3ff74d1735b6acebc6529a10a9c69eb44a0de72379d746f66cf6b31d0a8d17cbe38ea58a83ce5fa4240', full: true },

  // // MAT-85105
  // { name: 'mat-85105', route: '/?qs=abe3fc6ecf473fe44ebe4d9fa9659b1859ba64b21acba7b816815e8ab0095de20cda9313c921cfabf7f9d864cea2dc59f4741940b30dde756a09dc186693c70e3864e8f6991b293e', full: true },

  // // MAT-85105
  // { name: 'mat-85105', route: '/?qs=8831097ef3d54972faa8ad65e904e7743481aa0e198f4c3bd56d95fc63528f20799901c285c9bd847f2b6e6e571a76433fef13bd7ce10265ffc94c1d18f6cdaa079cfcee63e4e8a2', full: true },

  // MAT-83538
  { name: 'mat-83538', route: '/Anzupgo%20MAT-83538/', full: true }
];

const devices = {
  mobile: { ignoreHTTPSErrors: true, deviceScaleFactor: 2, viewport: { width: 430, height: 932 } },
  desktop: { ignoreHTTPSErrors: true, deviceScaleFactor: 2, viewport: { width: 600, height: 800 } }
};

const filter = process.argv[2];

launchScreenshotsRunner({ scenarioData, baseURL, devices, filter, httpCredentials });
