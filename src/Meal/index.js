import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import Entrance from "../components/Entrance";
import Layout from "../components/Layout";
import { getMeal } from "../redux/actions";

const windowWidth = Dimensions.get("window").width - 90;

export const Meal = ({ navigation, route }) => {
  const { mealId } = route.params;
  const [MealInfo, setMealInfo] = useState(false);
  const [ModalImage, setModalImage] = useState(false);

  useEffect(() => {
    if (!MealInfo) {
      getMeal(mealId, (v) => setMealInfo(v));
    }
  }, [MealInfo]);

  const getIngredients = (type) => {
    let v = 0;
    let _ingredients = [];
    switch (type) {
      case "number":
        for (let index = 1; index < 21; index++) {
          const element = MealInfo[`strIngredient${index}`];
          if (element) {
            _ingredients.push(element);
          }
        }
        v = _ingredients.length;
        break;
      case "info":
        for (let index = 1; index < 21; index++) {
          const element = MealInfo[`strIngredient${index}`];
          if (element) {
            _ingredients.push({
              id: index,
              ing: MealInfo[`strIngredient${index}`],
              dose: MealInfo[`strMeasure${index}`],
            });
          }
        }

        v = _ingredients;

        break;

      default:
        break;
    }
    return v;
  };

  return (
    <>
      {MealInfo && (
        <Layout navigation={navigation} layout="minimal" mealId={mealId}>
          {ModalImage && (
            <View style={styles.modal}>
              <TouchableOpacity
                style={styles.cortin}
                onPress={() => setModalImage(false)}
              ></TouchableOpacity>
              <Entrance>
                <View style={styles.whiteSquare}>
                  <Image
                    style={styles.modalImage}
                    imageStyle={{ borderRadius: 6 }}
                    source={{
                      uri: ModalImage,
                    }}
                  />
                </View>
              </Entrance>
            </View>
          )}

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
              <TouchableOpacity onPress={() => alert(MealInfo.strYoutube)}>
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
              <Text style={styles.mealItems}>
                {getIngredients("number")} items
              </Text>
            </View>

            <View style={styles.ingredients}>
              <ScrollView horizontal={true} style={styles.ingredients}>
                <FlatList
                  contentContainerStyle={{ width: "100%" }}
                  data={getIngredients("info")}
                  keyExtractor={(item) => item.id.toString()}
                  style={styles.ingList}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() =>
                        setModalImage(
                          `https://www.themealdb.com/images/ingredients/${item.ing}.png`
                        )
                      }
                    >
                      <View style={styles.item} key={`${item.id}`}>
                        <Image
                          style={styles.ingImage}
                          source={{
                            uri: `https://www.themealdb.com/images/ingredients/${item.ing}-Small.png`,
                          }}
                        />

                        <Text style={styles.ingInfo}>
                          <Text style={styles.ingName}>{item.ing}</Text>
                          <Text style={styles.qty}>{item.dose}</Text>
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
            </View>

            <View style={styles.doIt}>
              <Text style={styles.mealTitle}>Vamos fazer 🔥</Text>
              <Text style={styles.mealItems}>
                <Icon name="play-circle-outline" color="#00a0df" size={30} />
              </Text>
            </View>
            <Text style={styles.mainMealInfo}>{MealInfo.strInstructions}</Text>
          </View>
        </Layout>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cortin: {
    width: "100%",
    height: "100%",
    top: 0,
    zIndex: 1,
    position: "absolute",
  },
  modalImage: {
    width: 300,
    height: 300,
    zIndex: 2,
  },
  whiteSquare: {
    width: 400,
    height: 400,
    zIndex: 9999,
    backgroundColor: "#ffffff",
    opacity: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 370,
  },
  mainMealInfo: {
    marginTop: 20,
    fontSize: 14,
    marginBottom: 95,
  },
  ingredients: {
    width: "100%",
    flexDirection: "column",
  },
  doIt: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ingList: {
    marginTop: 35,
    marginBottom: 25,
    width: "100%",
  },
  ingName: {
    fontWeight: "bold",
    marginLeft: 40,
    fontSize: 15,
    textTransform: "capitalize",
    marginRight: 40,
    flexGrow: 1,
  },
  ingInfo: {
    width: "100%",
    flexDirection: "column",
    flex: 1,
  },
  qty: {
    fontWeight: "bold",
    fontSize: 13,
    color: "rgb(209, 201, 201)",
    paddingLeft: 50,
    flexGrow: 2,
  },
  ingImage: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    width: "100%",
    position: "relative",
  },
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
