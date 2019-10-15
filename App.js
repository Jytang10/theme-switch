//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './redux/themeReducer';

import HomeScreen from './screens/HomeScreen';

const store = createStore(combineReducers({themeReducer}), applyMiddleware(thunk))
//the themeReducer is used in HomeScreen.js
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen></HomeScreen>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
