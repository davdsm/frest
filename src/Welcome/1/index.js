import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WelcomeText from "../../components/WelcomeText";

export const Welcome = ({ setStep }) => {
  return (
    <View style={styles.container}>
      <WelcomeText
        buttonText="Continuar"
        buttonAction={setStep}
        // text
        title="Ainda não sabes o que vais fazer agora?"
        text="Vais descobrir o que cozinhar em menos de 3 minutos com o que já tens no teu frigorifico. Preenche o formulário e deixa a magia acontecer."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default Welcome;
