import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";

import * as Progress from "react-native-progress";

import { extractFeatures } from "../ai/featureExtractor";
import { calculateEntropy } from "../utils/entropy";
import { classifyPassword } from "../ai/classifier";

import StrengthMeter from "../components/StrengthMeter";
import FeedbackText from "../components/FeedbackText";

import { generatePassword }
from "../ai/passwordGenerator";

export default function HomeScreen() {

  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  function analyzePassword(text) {

    setPassword(text);

    const features = extractFeatures(text);

    const entropy =
      calculateEntropy(text);

    const classification =
      classifyPassword(features, entropy);

    setResult(classification);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        SafePass
      </Text>

      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Escribe tu contraseña"
        value={password}
        onChangeText={analyzePassword}
      />

      {result && (
        <>
          <Progress.Bar
            progress={result.score / 100}
            width={300}
            color={result.color}
          />

          <Text
            style={{
              color: result.color,
              marginTop: 10,
              fontSize: 20
            }}
          >
            {result.level}
          </Text>

          <Text style={styles.feedback}>
            {result.message}
          </Text>
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#121212"
  },

  title: {
    fontSize: 32,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold"
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },

  feedback: {
    color: "white",
    marginTop: 10
  }

});