import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const PostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});




// import React, {useState, useEffect} from 'react';
// import { Dimensions, StyleSheet, View, Text } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import * as Location from 'expo-location';

// export const PostsScreen = () => {
// const [location, setLocation] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const coords = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       };
//       setLocation(coords);
//     })();
//   }, []);

//     return (
//         <>
//         <Text>Posts</Text>
//         <View style={styles.container}>
//             {location ? (
//             <MapView
//                 style={styles.mapStyle}
//                 provider={PROVIDER_GOOGLE}
//                 region={{
//                     ...location,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                   }}
//                 showsUserLocation={true}
//                 zoomControlEnabled={true}
//                 mapType="standard"
//                 minZoomLevel={15}
//                 onMapReady={() => console.log("Map is ready")}
//                 onRegionChange={() => console.log("Region change", Date.now())}
//             >
//                 <Marker title="I am here" coordinate={location} description="This is my Home" />
//             </MapView>
//             ) : <Text>Loading</Text>}
//         </View>
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     mapStyle: {
//         width: Dimensions.get("window").width,
//         height: Dimensions.get("window").height,
//       },
// });
