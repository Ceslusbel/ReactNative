import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import React from "react";
import awsconfig from "./src/aws-exports";
import MainNavigator from "./src/components/Navigator";
import { GlobalProvider } from "./src/context/global/global.context";




Amplify.configure({
  ...awsconfig,
  Auth: {
    identityPoolId: "us-east-1:87475c14-82be-4820-abbf-ec6fef0a9a23", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "us-east-1", // REQUIRED - Amazon Cognito Region
    userPoolId: "us-east-1_DHiVgPqc1", //OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: "1q8eh4eeuf6p9vmpdeccf6qba1", //OPTIONAL - Amazon Cognito Web Client ID
  },
  Storage: {
    AWSS3: {
      bucket: "amplify-proyecto181340-dev-124031-deployment",
      region: "us-east-1",
    },
  },
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <GlobalProvider>
      <MainNavigator />
    </GlobalProvider>
  );
}
export default withAuthenticator(App);
