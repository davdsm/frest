import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const Entrance = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const moveAnim = useRef(new Animated.Value(10)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false, // Add This line
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false, // Add This line
    }).start();
  }, [moveAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
        marginTop: moveAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default Entrance;
