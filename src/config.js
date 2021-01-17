const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-maxritter",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "idb24829y2.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_GDx5bWwYZ",
      APP_CLIENT_ID: "us-east-1:266ae36a-ecdc-4696-83bb-f7ff18b05292",
      IDENTITY_POOL_ID: "us-east-1:266ae36a-ecdc-4696-83bb-f7ff18b05292",
    },
  };
  
  export default config;