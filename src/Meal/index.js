import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Entrance from "../components/Entrance";
import Layout from "../components/Layout";
import { getMeal } from "../redux/actions";

const windowWidth = Dimensions.get("window").width - 90;

export const Meal = ({ navigation, route }) => {
  const { mealId } = route.params;
  const [MealInfo, setMealInfo] = useState(false);

  useEffect(() => {
    if (!MealInfo) {
      getMeal(mealId, (v) => setMealInfo(v));
    }
  }, [MealInfo]);

  console.log(MealInfo);

  return (
    <>
      {MealInfo && (
        <Layout navigation={navigation} layout="minimal" mealId={mealId}>
          <View style={styles.meal}>
            <View style={styles.tags}>
              <Entrance>
                <View style={styles.tag}>
                  <Text style={styles.tagTitle}>#{MealInfo.strArea}</Text>
                </View>
              </Entrance>
              <Entrance>
                <View style={styles.tag}>
                  <Text style={styles.tagTitle}>#{MealInfo.strCategory}</Text>
                </View>
              </Entrance>
            </View>
            <Text style={styles.title}>🍽 {MealInfo.strMeal}</Text>
            <View style={styles.video}>
              <TouchableOpacity onPress={() => alert("go to youtube video")}>
                <Entrance>
                  <ImageBackground
                    source={{ uri: MealInfo.strMealThumb }}
                    imageStyle={{ borderRadius: 6 }}
                    resizeMode="cover"
                    style={styles.videoThumb}
                  >
                    <View style={styles.blur}></View>

                    <Icon
                      name="play-circle-outline"
                      color="#fff"
                      size={30}
                      style={styles.playIcon}
                    />
                  </ImageBackground>
                </Entrance>
              </TouchableOpacity>
            </View>
            <View style={styles.intro}>
              <Text style={styles.mealTitle}>Ingredientes</Text>
              <Text style={styles.mealItems}>10 items</Text>
            </View>

            <View style={styles.ingredients}></View>
          </View>
        </Layout>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  meal: {
    padding: 45,
    marginTop: -40,
  },
  tags: {
    display: "flex",
    flexDirection: "row",
  },
  tag: {
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FEF5ED",
    borderRadius: 6,
  },
  tagTitle: {
    color: "#F49151",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 25,
    marginBottom: 45,
    fontWeight: "700",
    color: "#272727",
  },
  videoThumb: {
    width: windowWidth,
    height: 200,
    borderRadius: 10,
    position: "relative",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: 200,
    borderRadius: 10,
    marginBottom: 100,
    marginRight: 30,
    backgroundColor: "#0A0032",
    opacity: 0.4,
  },
  intro: {
    marginTop: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mealTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#272727",
  },
  mealItems: {
    fontSize: 20,
    fontWeight: "700",
    color: "#D1C9C9",
  },
});

export default Meal;
