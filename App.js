/* eslint-disable camelcase */
import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts, MuktaVaani_400Regular } from "@expo-google-fonts/mukta-vaani";
import { Archivo_600SemiBold } from "@expo-google-fonts/archivo";
import { IBMPlexSans_400Regular } from "@expo-google-fonts/ibm-plex-sans";
import { theme } from "./src/styles/theme";

import * as S from "./styles";
// import { Login } from "./src/views/Login";
import { Register } from "./src/views/Register";

export default function App() {
  const [fontsLoaded] = useFonts({
    MuktaVaani_400Regular,
    Archivo_600SemiBold,
    IBMPlexSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Register />
      </S.Container>
    </ThemeProvider>
  );
}
