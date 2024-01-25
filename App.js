import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { mystore } from "./src/redux/MyStore";
import Main from "./src/Main";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
let persistor = persistStore(mystore);

const App = () => {
  return (
    <Provider store={mystore}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
