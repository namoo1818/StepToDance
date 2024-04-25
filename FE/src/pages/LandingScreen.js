import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const LandingScreen = () => {
  const [isZoom, setIsZoom] = useState(false);
  const mainRef = useRef(new Animated.Value(1)).current;
  const bar1Ref = useRef(new Animated.Value(0)).current;
  const bar2Ref = useRef(new Animated.Value(0)).current;
  const bar3Ref = useRef(new Animated.Value(0)).current;
  const bar4Ref = useRef(new Animated.Value(0)).current;
  const bar5Ref = useRef(new Animated.Value(0)).current;
  const bar6Ref = useRef(new Animated.Value(0)).current;
  const bar7Ref = useRef(new Animated.Value(0)).current;
  const bar8Ref = useRef(new Animated.Value(0)).current;
  const bar9Ref = useRef(new Animated.Value(0)).current;
  const bar10Ref = useRef(new Animated.Value(0)).current;
  const bar11Ref = useRef(new Animated.Value(0)).current;
  const bar12Ref = useRef(new Animated.Value(0)).current;
  const bar13Ref = useRef(new Animated.Value(0)).current;
  const bar14Ref = useRef(new Animated.Value(0)).current;
  const bar15Ref = useRef(new Animated.Value(0)).current;
  const bar16Ref = useRef(new Animated.Value(0)).current;
  const bar17Ref = useRef(new Animated.Value(0)).current;
  const bar18Ref = useRef(new Animated.Value(0)).current;
  const bar19Ref = useRef(new Animated.Value(0)).current;
  const bar20Ref = useRef(new Animated.Value(0)).current;
  const bar21Ref = useRef(new Animated.Value(0)).current;
  const bar22Ref = useRef(new Animated.Value(0)).current;
  const bar23Ref = useRef(new Animated.Value(0)).current;
  const bar24Ref = useRef(new Animated.Value(0)).current;
  const bar25Ref = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(mainRef, {
        toValue: 35,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setIsZoom(true);
      });
    }, 1000);
  }, [mainRef]);
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(bar1Ref, {
        toValue: -100,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar2Ref, {
        toValue: -100,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar3Ref, {
        toValue: -100,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar4Ref, {
        toValue: -100,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar5Ref, {
        toValue: -100,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar6Ref, {
        toValue: -100,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar7Ref, {
        toValue: -200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar8Ref, {
        toValue: -200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar9Ref, {
        toValue: -200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar10Ref, {
        toValue: -200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar11Ref, {
        toValue: -200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar12Ref, {
        toValue: -200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar13Ref, {
        toValue: -250,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar14Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar15Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar16Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar17Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar18Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar19Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar20Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar21Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar22Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar23Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar24Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
      Animated.timing(bar25Ref, {
        toValue: 200,
        duration: Math.random() * 1000 + 2000,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }, [isZoom]);
  return (
    <View style={styles.container}>
      <View style={[styles.intro]}>
        {isZoom ? (
          <>
            <Animated.View
              ref={bar1Ref}
              style={[styles.bar1, { transform: [{ translateX: bar1Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar2Ref}
              style={[styles.bar2, { transform: [{ translateX: bar2Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar3Ref}
              style={[styles.bar3, { transform: [{ translateX: bar3Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar4Ref}
              style={[styles.bar4, { transform: [{ translateX: bar4Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar5Ref}
              style={[styles.bar5, { transform: [{ translateX: bar5Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar6Ref}
              style={[styles.bar6, { transform: [{ translateX: bar6Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar7Ref}
              style={[styles.bar7, { transform: [{ translateX: bar7Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar8Ref}
              style={[styles.bar8, { transform: [{ translateX: bar8Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar9Ref}
              style={[styles.bar9, { transform: [{ translateX: bar9Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar10Ref}
              style={[styles.bar10, { transform: [{ translateX: bar10Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar11Ref}
              style={[styles.bar11, { transform: [{ translateX: bar11Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar12Ref}
              style={[styles.bar12, { transform: [{ translateX: bar12Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar13Ref}
              style={[styles.bar13, { transform: [{ translateX: bar13Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar14Ref}
              style={[styles.bar14, { transform: [{ translateX: bar14Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar15Ref}
              style={[styles.bar15, { transform: [{ translateX: bar15Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar16Ref}
              style={[styles.bar16, { transform: [{ translateX: bar16Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar17Ref}
              style={[styles.bar17, { transform: [{ translateX: bar17Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar18Ref}
              style={[styles.bar18, { transform: [{ translateX: bar18Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar19Ref}
              style={[styles.bar19, { transform: [{ translateX: bar19Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar20Ref}
              style={[styles.bar20, { transform: [{ translateX: bar20Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar21Ref}
              style={[styles.bar21, { transform: [{ translateX: bar21Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar22Ref}
              style={[styles.bar22, { transform: [{ translateX: bar22Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar23Ref}
              style={[styles.bar23, { transform: [{ translateX: bar23Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar24Ref}
              style={[styles.bar24, { transform: [{ translateX: bar24Ref }] }]}
            ></Animated.View>
            <Animated.View
              ref={bar25Ref}
              style={[styles.bar25, { transform: [{ translateX: bar25Ref }] }]}
            ></Animated.View>
          </>
        ) : (
          <Animated.View
            style={[styles.helper1, { transform: [{ scale: mainRef }] }]}
          >
            <View style={styles.effectBrush}>
              <Text>STEP</Text>
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
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  helper1: {
    position: "absolute",
    width: "20%",
    height: "20%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
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
