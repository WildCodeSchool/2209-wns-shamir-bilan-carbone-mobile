import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigator } from "./navigation/MainNavigator";
import React from "react";

const client = new ApolloClient({
  uri: "http://172.20.10.4:5002/graphql",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainNavigator />
    </ApolloProvider>
  );
}
