//import liraries
import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import {switchTheme} from '../redux/actions';
import {connect} from 'react-redux';
import {darkTheme, lightTheme} from '../styles/theme';

class HomeScreen extends Component {
  render() {
    console.log("HomeScreen.js------------",this.props.theme)
    return ( //the theme in this.props.theme is coming from the theme inside the mapStateToProps method
      <ThemeProvider theme={this.props.theme}>   
        <Container>
          <TextContainer>
            <Title>Change App Theme</Title>
          </TextContainer>
          {
            this.props.theme.mode === "light" ?
            <Button onPress={() => this.props.switchTheme(darkTheme)}>
              <ButtonText>Switch to Dark Theme</ButtonText>
            </Button>
            : 
            <Button onPress={() => this.props.switchTheme(lightTheme)}>
              <ButtonText>Switch to Light Theme</ButtonText>
            </Button>
          }
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
const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content:center;
  align-items:center
`

const TextContainer = styled.View`
  padding:15px;
  border-radius:5px;
  border:1px solid ${props => props.theme.PRIMARY_TEXT_COLOR}
`

const Title = styled.Text`
  padding:20px;
  font-size:24px;
  font-weight:bold;
  color:${props => props.theme.PRIMARY_TEXT_COLOR}
`

const Button = styled.TouchableOpacity`
  margin-top:20px;
  background-color: ${props => props.theme.SECONDARY_BUTTON_COLOR};
  border-radius:5px;
  padding:10px
`

const ButtonText = styled.Text`
  font-size:20px;
  background-color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`