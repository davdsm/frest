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

export const RandomMeal = ({ meals, navigation }) => {
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
              <TouchableOpacity
                key={i}
                style={styles.meal}
                onPress={() =>
                  navigation.navigate(`Meal`, {
                    mealId: item.idMeal,
                  })
                }
              >
                <Entrance>
                  <ImageBackground
                    source={{ uri: item.strMealThumb }}
                    imageStyle={{ borderRadius: 6 }}
                    resizeMode="cover"
                    style={styles.background}
                  >
                    <View style={styles.shade}></View>
                    <Text style={styles.mealTitle}>{item.strMeal}</Text>
                  </ImageBackground>
                </Entrance>
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
  shade: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: 280,
    borderRadius: 6,
    marginBottom: 100,
    marginRight: 30,
    backgroundColor: "#0A0032",
    opacity: 0.4,
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
    marginRight: 30,
  },
  mealTitle: {
    position: "absolute",
    color: "white",
    padding: 30,
    fontSize: 20,
    bottom: 0,
  },
});

export default RandomMeal;
