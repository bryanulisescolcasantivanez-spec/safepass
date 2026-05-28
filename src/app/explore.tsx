import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ExploreScreen() {

  return (
    <ScrollView
      style={styles.container}
    >

      <Text style={styles.title}>
        🛡️ Sobre SafePass
      </Text>

      <Text style={styles.text}>
        SafePass es una aplicación
        móvil de ciberseguridad que
        analiza contraseñas usando
        Machine Learning local.
      </Text>

      <Text style={styles.section}>
        🔒 Privacidad
      </Text>

      <Text style={styles.text}>
        Todas las contraseñas se
        procesan directamente en
        el dispositivo.
      </Text>

      <Text style={styles.text}>
        No se envían datos a
        servidores externos.
      </Text>

      <Text style={styles.section}>
        ⚡ Características
      </Text>

      <Text style={styles.text}>
        • Clasificación en tiempo real
      </Text>

      <Text style={styles.text}>
        • Medición de entropía
      </Text>

      <Text style={styles.text}>
        • Detección de patrones inseguros
      </Text>

      <Text style={styles.text}>
        • Generador seguro de contraseñas
      </Text>

      <Text style={styles.section}>
        🤖 Tecnologías
      </Text>

      <Text style={styles.text}>
        • React Native
      </Text>

      <Text style={styles.text}>
        • Expo Router
      </Text>

      <Text style={styles.text}>
        • TensorFlow.js
      </Text>

      <Text style={styles.text}>
        • JavaScript / TypeScript
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  section: {
    color: "#00FF99",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },

  text: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 28,
  },

});