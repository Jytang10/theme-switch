//import liraries
import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import {switchTheme} from '../redux/actions';
import {connect} from 'react-redux';

class HomeScreen extends Component {
  render() {
    console.log("HomeScreen.js------------",this.props.theme)
    return ( //the theme in this.props.theme is coming from the theme inside the mapStateToProps method
      <ThemeProvider theme={this.props.theme}>   
        <Container>
          <TextContainer>

          </TextContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state){
  return {
    theme: state.themeReducer.theme    //themeReducer comes from App.js.   the last theme comes from the theme inside newState inside themedReducer.js
  }
}

export default connect(mapStateToProps, {switchTheme})(HomeScreen);

//the theme in props.theme.PRI.. is coming from the theme in mapStateToProps method
const Container = styles.SafeAreaView`
  flex:1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content:center;
  align-items:center
`

const TextContainer = styles.SafeAreaView`
  padding:15px;
  border-radius:5px;
  border:1px solid ${props => props.theme.PRIMARY_TEXT_COLOR}
`