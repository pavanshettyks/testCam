/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {PermissionsAndroid,Platform, StyleSheet, Text, View, Button,Alert} from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import RNTextDetector from 'react-native-text-detector';


type Props = {};
export default class App extends Component<Props> {
  state = {
    id: '0'
  }
// Constructor(){
  // this.requestStoragePermission();
  // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
 //}

 /* requestStoragePermission =  async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
} */

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
    const visionResp = await RNTextDetector.detectFromUri(uri);
  //  this.props.store.memoStore.addItem(visionResp);
    console.log('visionResp', visionResp);
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
