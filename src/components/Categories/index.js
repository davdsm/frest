import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Entrance from "../Entrance";

export const Categories = ({ obj }) => {
  const getStyle = (i) => {
    if (i === 0) {
      return styles.first;
    } else {
      return styles.category;
    }
  };

  return (
    <View style={styles.slide}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {obj &&
          obj.map((item, i) => (
            <TouchableOpacity key={i}>
              <Entrance>
                <View style={getStyle(i)}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.strCategoryThumb,
                    }}
                  />
                  <Text style={styles.name}>{item.strCategory}</Text>
                </View>
              </Entrance>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    marginTop: 25,
    marginBottom: 25,
  },
  category: {
    width: 154,
    height: 177,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 16,
  },
  first: {
    width: 154,
    height: 177,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 16,
    marginLeft: 45,
  },
  image: {
    width: 120,
    height: 74,
  },
  name: {
    fontSize: 17,
    marginTop: 20,
  },
});

export default Categories;
