import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import StrengthMeter from "../components/StrengthMeter";
import FeedbackText from "../components/FeedbackText";

import {
  extractFeatures,
} from "../ai/featureExtractor";

import {
  calculateEntropy,
} from "../utils/entropy";

import {
  classifyPassword,
} from "../ai/classifier";

import {
  generatePassword,
} from "../ai/passwordGenerator";


export default function HomeScreen() {

  const [password, setPassword] =
    useState("");
  
  const [showPassword, setShowPassword] =
  useState(false);  

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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu contraseña"
          placeholderTextColor="#777"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={analyzePassword}
        />

        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

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
  flex: 1,
  color: "#fff",
  padding: 15,
  fontSize: 16,
  },

  passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#1E1E1E",
  borderRadius: 12,
},

eyeIcon: {
  paddingHorizontal: 15,
},

  buttonContainer: {
    marginTop: 30,
  },

});