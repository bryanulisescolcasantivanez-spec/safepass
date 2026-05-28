import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function StrengthMeter({ result }) {

  if (!result) return null;

  return (
    <View style={styles.container}>

      <Progress.Bar
        progress={result.score / 100}
        width={300}
        height={12}
        color={result.color}
        borderRadius={10}
      />

      <Text
        style={[
          styles.level,
          { color: result.color }
        ]}
      >
        {result.level}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    marginTop: 20
  },

  level: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold"
  }

});