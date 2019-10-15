//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './redux/themeReducer';

const store = createStore(combineReducers({themeReducer}), applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Text>I am App</Text>
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
