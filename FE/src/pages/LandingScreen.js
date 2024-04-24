import React, { useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const LandingScreen = ({ letter }) => {
  const [isZoom, setIsZoom] = useState(false);
  const value = new Animated.Value(0);
  const zoomIn = () => {
    Animated.timing(value, {
      toValue: 35,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      setIsZoom(true);
    });
  };

  setTimeout(() => {
    zoomIn();
  }, 0);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.intro, { transform: [{ scale: value }] }]}>
        {isZoom ? (
          <Text>hi</Text>
        ) : (
          <View style={[styles.helper, styles.helper1]}>
            <View style={styles.effectBrush}></View>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    overflow: "hidden",
  },
  intro: {
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  helper: {
    position: "absolute",
  },
  helper1: {
    width: "19.5%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    left: "50%",
    top: 0,
    transform: [{ translateX: "-50%" }],
  },
  effectBrush: {
    position: "absolute",
    width: "100%",
    height: "300%",
    top: 0,
    overflow: "hidden",
  },
});

export default LandingScreen;
