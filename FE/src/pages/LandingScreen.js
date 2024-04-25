import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const LandingScreen = () => {
  const [isZoom, setIsZoom] = useState(false);
  const mainRef = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(mainRef, {
      toValue: 35,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsZoom(true);
    });
  }, [mainRef]);

  return (
    <View style={styles.container}>
      <View style={[styles.intro]}>
        {isZoom ? (
          <>
            <View style={styles.bar1}></View>
            <View style={styles.bar2}></View>
            <View style={styles.bar3}></View>
            <View style={styles.bar4}></View>
            <View style={styles.bar5}></View>
            <View style={styles.bar6}></View>
            <View style={styles.bar7}></View>
            <View style={styles.bar8}></View>
            <View style={styles.bar9}></View>
            <View style={styles.bar10}></View>
            <View style={styles.bar11}></View>
            <View style={styles.bar12}></View>
            <View style={styles.bar13}></View>
            <View style={styles.bar14}></View>
            <View style={styles.bar15}></View>
            <View style={styles.bar16}></View>
            <View style={styles.bar17}></View>
            <View style={styles.bar18}></View>
            <View style={styles.bar19}></View>
            <View style={styles.bar20}></View>
            <View style={styles.bar21}></View>
            <View style={styles.bar22}></View>
            <View style={styles.bar23}></View>
            <View style={styles.bar24}></View>
            <View style={styles.bar25}></View>
          </>
        ) : (
          <Animated.View
            style={[
              styles.helper,
              styles.helper1,
              { transform: [{ scale: mainRef }] },
            ]}
          >
            <View style={styles.effectBrush}>
              <Text style={styles.title}>STEP</Text>
              <Text>TO</Text>
              <Text>DANCE</Text>
            </View>
          </Animated.View>
        )}
      </View>
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
    position: "relative",
  },
  intro: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
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
    height: "100%",
    top: 0,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  bar1: {
    position: "absolute",
    backgroundColor: "#0C163F",
    width: "1%",
    height: "100%",
    left: "0.7%",
    zIndex: 2,
  },
  bar2: {
    position: "absolute",
    backgroundColor: "#266AC3",
    left: "2.2%",
    width: "1.4%",
    height: "100%",
    zIndex: 2,
  },
  bar3: {
    position: "absolute",
    backgroundColor: "#123458",
    left: "5.8%",
    width: "2.1%",
    height: "100%",
  },
  bar4: {
    position: "absolute",
    backgroundColor: "#66B9FE",
    left: "10.1%",
    width: "2%",
    height: "100%",
  },
  bar5: {
    position: "absolute",
    backgroundColor: "#194571",
    left: "12.9%",
    width: "1.4%",
    height: "100%",
  },
  bar6: {
    position: "absolute",
    backgroundColor: "#5CB0FE",
    left: "15.3%",
    width: "2.8%",
    height: "100%",
  },
  bar7: {
    position: "absolute",
    backgroundColor: "#1F5C8A",
    left: "21.2%",
    width: "1.9%",
    height: "100%",
  },
  bar8: {
    position: "absolute",
    backgroundColor: "#53A7FE",
    left: "25%",
    width: "2.5%",
    height: "100%",
  },
  bar9: {
    position: "absolute",
    backgroundColor: "#2664A3",
    left: "30.5%",
    width: "2.4%",
    height: "100%",
  },
  bar10: {
    position: "absolute",
    backgroundColor: "#4A9EFE",
    left: "36%",
    width: "3%",
    height: "100%",
  },
  bar11: {
    position: "absolute",
    backgroundColor: "#2C7CBD",
    left: "41%",
    width: "2.2%",
    height: "100%",
  },
  bar12: {
    position: "absolute",
    backgroundColor: "#4195F7",
    left: "44%",
    width: "2.6%",
    height: "100%",
  },
  bar13: {
    position: "absolute",
    backgroundColor: "#3384D6",
    left: "49%",
    width: ".5%",
    height: "100%",
  },
  bar14: {
    position: "absolute",
    backgroundColor: "#3A8CF0",
    left: "55%",
    width: "1.5%",
    height: "100%",
  },
  bar15: {
    position: "absolute",
    backgroundColor: "#3A8CF0",
    left: "60.3%",
    width: "1.7%",
    height: "100%",
  },
  bar16: {
    position: "absolute",
    backgroundColor: "#3384D6",
    left: "66%",
    width: "2.5%",
    height: "100%",
  },
  bar17: {
    position: "absolute",
    backgroundColor: "#4A9EFE",
    left: "70%",
    width: ".9%",
    height: "100%",
  },
  bar18: {
    position: "absolute",
    backgroundColor: "#2C7CBD",
    left: "74%",
    width: "1.3%",
    height: "100%",
  },
  bar19: {
    position: "absolute",
    backgroundColor: "#53A7FE",
    left: "78.9%",
    width: "1.8%",
    height: "100%",
  },
  bar20: {
    position: "absolute",
    backgroundColor: "#2664A3",
    left: "83%",
    width: "2.6%",
    height: "100%",
  },
  bar21: {
    position: "absolute",
    backgroundColor: "#5CB0FE",
    left: "87%",
    width: "1.5%",
    height: "100%",
  },
  bar22: {
    position: "absolute",
    backgroundColor: "#1F5C8A",
    left: "91.2%",
    width: "1.2%",
    height: "100%",
  },
  bar23: {
    position: "absolute",
    backgroundColor: "#66B9FE",
    left: "94.7%",
    width: "1.9%",
    height: "100%",
  },
  bar24: {
    position: "absolute",
    backgroundColor: "#194571",
    left: "97.7%",
    width: ".9%",
    height: "100%",
  },
  bar25: {
    position: "absolute",
    backgroundColor: "#266AC3",
    left: "98%",
    width: "2.9%",
    height: "100%",
  },
});

export default LandingScreen;
