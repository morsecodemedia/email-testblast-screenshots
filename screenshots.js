import launchScreenshotsRunner from 'screenshot-helper';

const httpCredentials = {
  username: 'leo',
  password: 'leopharma',
};

// LEO CRM - ShowerThinking Emails
const baseURL = 'https://view.email.leo-pharma.com'



const scenarioData = [
  // MAT-83526
  { name: 'here-it-is-info-for-your-anzupgo-treatment', route: '/?qs=14a716fbba1953c1f9b27e7dfcbc92c03f322338ea5c43b780a8acf6493e5629c3c3a46753cf19c65a9d7ce435844369434258bb8c346182f1020c3971caf6fa9da8b7fd4952ad68', full: true },

  // MAT-83528
  { name: 'get-to-know-a-daily-routine-with-anzupgo', route: '/?qs=14a716fbba1953c1200abdba2c6833718deddc7f7ad8afacb31f214dc75a5284aa7e8077fcb2fe0cbbd2c9019ddb28f3de2764460f8ab950c141ec7d1ffafe23a2f750db440e5e7e', full: true },

  // MAT-83531
  { name: 'heres-the-anzupgo-info-you-need', route: '/?qs=14a716fbba1953c183a8e735c402c2b4e3b2806d361d82aefa4f1d30a8507ccb9e9756e193771be215b8d2f8875420754722e913e38be98cf5517c91f472b960083e170c30cb05c9', full: true },
];

const devices = {
  mobile: { ignoreHTTPSErrors: true, deviceScaleFactor: 2, viewport: { width: 430, height: 932 } },
  desktop: { ignoreHTTPSErrors: true, deviceScaleFactor: 2, viewport: { width: 600, height: 800 } }
};

const filter = process.argv[2];

launchScreenshotsRunner({ scenarioData, baseURL, devices, filter, httpCredentials });
