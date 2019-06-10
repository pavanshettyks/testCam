/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Alert} from 'react-native';
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
export default class App extends Component<Props> {
  state = {
    id: '0'
  }
  click = async () => {
  //Alert.alert("te1t");
//  const { memoStore } = this.props.store;
  try {
    //memoStore.loaderTrue();
    //console.log('try', memoStore.loader);
    const options = {
      quality: 0.8,
      base64: true,
      skipProcessing: true,
    };
    const { uri } = await this.camera.takePictureAsync(options);
  //  const visionResp = await RNTextDetector.detectFromUri(uri);
  //  this.props.store.memoStore.addItem(visionResp);
    console.log('visionResp', uri);
    const dirs = RNFetchBlob.fs.dirs
console.log(dirs.DocumentDir)
console.log(dirs.CacheDir)
    const data = await this.camera.takePictureAsync(options);
    let id = String(Number(this.state.id)+1);
    this.setState({id:id});
    let fileName = 'VID_currentDate'+id+'.jpg';
    console.log(RNFS.PicturesDirectoryPath);
    RNFS.copyFile(data.uri, RNFS.PicturesDirectoryPath + '/' + fileName).then(() => {
    console.log("Photo copied locally!!");
    Alert.alert(fileName+' saved');
}, (error) => {
    console.log("CopyFile fail for video: " + error);
});

  } catch (e) {
    console.warn(e);
  }

  //memoStore.loaderFalse();
  //console.log('try outside', memoStore.loader);
  }
/*  <RNCamera
    ref={ref => {
      this.camera = ref;
    }}
    autoFocus={RNCamera.Constants.AutoFocus.on}
    style={{
      flex: 1,
      width: '100%',
    }}
  <Button onPress ={this.click} title="click"/>
  </RNCamera>

  */

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <RNCamera
  ref={ref => {
    this.camera = ref;
  }}
  autoFocus={RNCamera.Constants.AutoFocus.on}
  style={{
    flex: 1,
    width: '100%',
  }}
      >
        <Button onPress ={this.click} title="click"/>
        </RNCamera>

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
