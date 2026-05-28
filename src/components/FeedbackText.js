import React from "react";
import { Text, StyleSheet } from "react-native";

export default function FeedbackText({ result }) {

  if (!result) return null;

  return (
    <Text style={styles.feedback}>
      {result.message}
    </Text>
  );
}

const styles = StyleSheet.create({

  feedback: {
    color: "white",
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10
  }

});