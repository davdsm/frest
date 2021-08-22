import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WelcomeImage from "../../../../assets/images/fridge-success.png";

import WelcomeText from "../../WelcomeText";
import Entrance from "../../Entrance";

export const Step3 = ({ setStep }) => {
  const [Name, setName] = useState("");

  const getName = async () => {
    const user = await AsyncStorage.getItem("user_name");
    setName(user);
  };

  useEffect(() => {
    getName();
  }, [Name]);

  return (
    <View style={styles.container}>
      {Name.length > 2 && (
        <>
          <Image source={WelcomeImage} style={styles.image} />
          <Entrance>
            <WelcomeText
              buttonText="Continuar"
              buttonAction={setStep}
              // text
              title={`Olá ${Name}. 👋`}
              text="Vamos preencher uma lista de coisas que tens no frigorífico, esta lista pode ser alterada a qualquer momento."
            />
          </Entrance>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: 340,
    height: 275,
    position: "absolute",
    top: 250,
  },
});

export default Step3;
