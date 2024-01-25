import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {mystore} from './src/redux/MyStore';
import Main from './src/Main';

const App = () => {
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};
      
export default App;

const styles = StyleSheet.create({});
