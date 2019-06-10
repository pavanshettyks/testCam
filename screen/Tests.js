import React, {Component} from 'react';
import {AsyncStorage,Alert, Platform, StyleSheet, Text,TextInput, View, Button} from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Tests extends React.Component {
  state = {
    name :'',
    id: '1'
  }
  save = async () => {
    console.log('retrieve',this.state.name);
  //  Alert.alert('ffff');
   AsyncStorage.setItem('name', this.state.name+1);
   AsyncStorage.setItem('id', String(Number(this.state.id)+1));
   this.setState({id:String(Number(this.state.id)+1)});

  }

  get  = async () =>{
    let name = '..';
    console.log('retrieve',name);
    try {
    name = await AsyncStorage.getItem('id');
    //console.log('retrieved name',id);
    name = 'VID_currentDate1'+name+'.jpg';
    this.setState({name:name});
    } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcomddde to React Native!</Text>
        <TextInput placeholder = 'Type anything'  value={this.state.name} onChangeText={(text) => this.setState({name:text})} type='text' />
        <Text  style = {{ color:'red'} }> {this.state.name}</Text>
        <Button title='Save' onPress = {this.save}/>
        <Button title='get' onPress = {this.get}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container1: {
    flex: 1,
    height:'60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
