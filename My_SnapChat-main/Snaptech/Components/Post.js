import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import { Camera, CameraType, setCameraType } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { shareAsync } from 'expo-sharing';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";


export default function Post() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const logout = async () => {
    global.token == undefined;
    navigation.navigate("Index");
  };

  const liste = async () => {
    const response = await fetch("http://snapi.epitech.eu:8000/all", {
      method: "GET",
      headers: {
        token: "Gyf9qkUTfsNLBvmXE8F7fo3D",
      },
    });
    const list = await response.json();
    // global.listemail = list.data.email;
    global.liste = list.data;
    navigation.navigate("List");
  };

  let cameraRef = useRef();

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [photo, setPhoto] = useState();
  const [CameraType, setCameraType] = React.useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);


  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>No acces to camera yet...</Text>
  }else if (!hasCameraPermission) {
    return <Text>No acces to camera</Text>
  }

  let switchCamera = async() => {
    if(CameraType === 'back'){
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

  let takePic = async() => {
    let options = {
      quality:1,
      base64: true,
      exif:false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    };

    let pickImage = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,3],
        quality:1,
      });
      console.log(result);

      if(console.log(result)){
        setImage(result.uri)
        return liste
      }
    }

    if (photo) {
      let sharePic = () => {
        shareAsync(photo.uri).then(() => {
          setPhoto(undefined);
        })
      };

      let savePhoto = () => {
        MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
          setPhoto(undefined);
        })
      }

      return (
        
        <SafeAreaView style={styles.container}>
          <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
          <View style={styles.topContainer}>
            <Text></Text>
          </View>
          <View style={styles.previewContainer}>
          <Icon.Button title="Share" onPress={liste} 
          name="send" 
          backgroundColor="#000"
          size={40}
          />
          <Icon.Button title="Discard" onPress={() => setPhoto(undefined)} 
          name="delete" 
          backgroundColor="#000"
          size={40}
          />
          </View>
        </SafeAreaView>
      );
    }


  return(
  <Camera style ={styles.container} ref={cameraRef} type={CameraType}>
    <View style={styles.topContainer}>
      <Icon.Button
        title='Déconnexion'
        name='logout'
        onPress={logout}
        style={styles.logout_button}
        backgroundColor='#000'
        size={40}
      />
    </View>
    <View style={styles.buttonContainer}>
    <Icon.Button onPress={switchCamera}
      title='flip'
      name="flip-camera-android"
      backgroundColor="#000"
      size={40}
      />
      <Icon.Button style={styles.button} title='takePicture' onPress={takePic}
      name="camera"
      backgroundColor="#000"
      size={60}
      />
      <Icon.Button title='gallery' onPress={pickImage}
      name="drive-folder-upload"
      backgroundColor="#000"
      size={40}
      />
    </View>
  </Camera>
  );
  
  //take image from Gallery


}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      /* flexDirection: 'row' */
  },
  buttonContainer:{
    backgroundColor:'#000',
    position:'absolute',
    bottom:0,
    width:'100%',
    flex:1,
    paddingTop:25,
    paddingBottom:25,
    justifyContent:'center',
    flexDirection:'row'

  },
  topContainer:{
    position: "absolute",
    top: 0,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: "#000",
    padding: 20,
    margin: 0,
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 1,
  },
  preview:{
    alignSelf:'stretch',
    flex:1,
  },
  previewContainer:{
    backgroundColor:'#000',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:25,
  },
  button:{
    paddingHorizontal: 50,
  }

})
