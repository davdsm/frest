import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Entrance from "../Entrance";

const windowWidth = Dimensions.get("window").width - 90;

export const RandomMeal = ({ meals }) => {
  return (
    <View style={styles.main}>
      <Entrance>
        <Text style={styles.title}>As tuas refeições de hoje. 🍱</Text>
      </Entrance>

      <View style={styles.row}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ overflow: "visible" }}
        >
          {meals.length > 0 &&
            meals.map((item, i) => (
              <TouchableOpacity key={i} style={styles.meal}>
                <ImageBackground
                  source={{ uri: item.strMealThumb }}
                  imageStyle={{ borderRadius: 6 }}
                  resizeMode="cover"
                  style={styles.background}
                >
                  <Text>Ola</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 45,
    marginBottom: 25,
    marginLeft: 45,
    marginRight: 45,
  },
  background: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  row: {
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 45,
  },
  meal: {
    width: windowWidth,
    height: 280,
    borderRadius: 6,
    position: "relative",
    marginBottom: 100,
    marginRight: 30
  },
});

export default RandomMeal;
