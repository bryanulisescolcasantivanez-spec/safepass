import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";

import StrengthMeter from "../src/components/StrengthMeter";
import FeedbackText from "../src/components/FeedbackText";

import {
  extractFeatures,
} from "../src/ai/featureExtractor";

import {
  calculateEntropy,
} from "../src/utils/entropy";

import {
  classifyPassword,
} from "../src/ai/classifier";

import {
  generatePassword,
} from "../src/ai/passwordGenerator";

export default function HomeScreen() {

  const [password, setPassword] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  function analyzePassword(text: string) {

    setPassword(text);

    const features =
      extractFeatures(text);

    const entropy =
      calculateEntropy(text);

    const classification =
      classifyPassword(
        features,
        entropy
      );

    setResult(classification);
  }

  function handleGeneratePassword() {

    const newPassword =
      generatePassword(16);

    analyzePassword(newPassword);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🔐 SafePass
      </Text>

      <Text style={styles.subtitle}>
        Analizador Inteligente
        de Contraseñas
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        placeholderTextColor="#777"
        secureTextEntry
        value={password}
        onChangeText={analyzePassword}
      />

      <StrengthMeter result={result} />

      <FeedbackText result={result} />

      <View style={styles.buttonContainer}>
        <Button
          title="Generar Contraseña Segura"
          onPress={handleGeneratePassword}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#121212",
  },

  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
  },

  buttonContainer: {
    marginTop: 30,
  },

});