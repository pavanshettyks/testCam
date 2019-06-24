# testCam
React Native camera to click and save photos to gallery



###Install and React Native camera:

 ` npm install --save react-native-camera

  react-native link react-native-camera `

###Installl and link React Native FS
  ` npm install react-native-fs --save

  react-native link react-native-fs `

###Installl and link React Native text detector
`npm install react-native-text-detector --save
react-native link react-native-text-detector `

permissions: AndroidManifest.xml

issues with new google library update fix:. -> has to be done till library owner provides fix

Goto node files ` react-native-text-detector \andrid\build.graddle `

``` 
  dependencies {
    implementation 'com.google.firebase:firebase-core:16.0.1'
    implementation 'com.google.firebase:firebase-ml-vision:19.0.3'
    implementation 'com.facebook.react:react-native:+'

   android {
   
    compileSdkVersion 28
    buildToolsVersion "28.0.3"

    defaultConfig {
        minSdkVersion 16
        targetSdkVersion 28
        versionCode 1
        versionName "1.0"
    }
    lintOptions {
        abortOnError false
    }
} 

```