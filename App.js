import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import getEnvVars from "./config";
import Screen from "./app/components/Screen";

const { API_URI } = getEnvVars();
const uri = API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
});

export default App = () => {
  return (
    <ApolloProvider client={client}>
      <Screen>
        <NavigationContainer>
          {/* <AuthNavigator /> */}
          <AppNavigator />
        </NavigationContainer>
      </Screen>
    </ApolloProvider>
  );
};
