import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#121212",
          },

          headerTintColor: "#fff",

          contentStyle: {
            backgroundColor: "#121212",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "SafePass",
          }}
        />

        <Stack.Screen
          name="explore"
          options={{
            title: "Explorar",
          }}
        />
      </Stack>
    </>
  );
}