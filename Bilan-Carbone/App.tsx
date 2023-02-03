import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigator } from "./navigation/MainNavigator";
import React from "react";

const client = new ApolloClient({
  uri: "http://192.168.1.64:5002/graphql",
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
