import { StatusBar } from "expo-status-bar";
import { Dimensions, ImageBackground, StyleSheet, View, Text } from "react-native";
import useCustomFonts from "./hooks/useFonts";

const backgrounImg = require('./assets/PhotoBG.png')
const { width, height } = Dimensions.get('window');

export const CommonLayout = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useCustomFonts();

  return (
    fontsLoaded ?
      (<View style={styles.container}>
        <ImageBackground source={backgrounImg} style={styles.image}>
          <View style={styles.innerContainer}>
            {children}
          </View>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>)
      : <Text>Loading...</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    fontFamily: 'Roboto-Medium',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: "#FFF",
    width: "100%",
    bottom: -150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 16,
  }
}) 