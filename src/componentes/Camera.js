import { withNavigation } from 'react-navigation';

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, CameraRoll, ToastAndroid} from 'react-native';
import { RNCamera } from 'react-native-camera';

// import RNFetchBlob from 'react-native-fetch-blob';

class Camera extends Component {
  
  _takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5 };
      const data = await this.camera.takePictureAsync(options)
      ToastAndroid.show(data.uri, ToastAndroid.SHORT);
      CameraRoll.saveToCameraRoll( data.uri )
    }
  }
  // _handleButtonPress = () => {

  //   CameraRoll.getPhotos({
  //       first: 20,
  //       assetType: 'Photos',
  //     })
  //     .then(r => {
        
  //       this.setState({ photos: data.uri });
  //     })
  //     .catch((err) => {
  //        //Error Loading Images
  //     });
  //   };

    render() {
      return (
        <View style={styles.container}>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
          />
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this._takePicture.bind(this)}
              style = {styles.capture}
         >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          </View>
          <View>
            {/* <TouchableOpacity> */}
              <Text style={{ fontSize:14, color: 'red' }}>Foto</Text>
              {/* <Image source={require('data')} /> */}
            {/* </TouchableOpacity> */}
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  });
  export default withNavigation(Camera)