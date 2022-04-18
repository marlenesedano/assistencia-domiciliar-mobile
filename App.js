/* eslint-disable camelcase */
import React from "react";

import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, MuktaVaani_400Regular } from "@expo-google-fonts/mukta-vaani";
import { Archivo_600SemiBold } from "@expo-google-fonts/archivo";
import { IBMPlexSans_400Regular } from "@expo-google-fonts/ibm-plex-sans";
import { ThemeProvider } from "styled-components";
import { theme, navigationTheme } from "./src/styles/theme";
import { Login } from "./src/views/Login";
import { Register } from "./src/views/Register";
import { RegisterPatient } from "./src/views/RegisterPatient";
import { RegisterProfessional } from "./src/views/RegisterProfessional";
import { ProfessionalSearch } from "./src/views/ProfessionalSearch";
import { RegisterProfessionalNext } from "./src/views/RegisterProfessionalNext";
import { ServiceModality } from "./src/views/ServiceModality";
import { RemoteService } from "./src/views/RemoteService";
import { PresencialService } from "./src/views/PresencialService";
import { NewSchedule } from "./src/views/NewSchedule";
import { SearchProfessionalProfile } from "./src/views/SearchProfessionalProfile";

const { Navigator, Screen } = createNativeStackNavigator();

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
      <NavigationContainer theme={navigationTheme}>
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Screen name="Login" component={Login} />
          <Screen name="Register" component={Register} />
          <Screen name="RegisterPatient" component={RegisterPatient} />
          <Screen name="RegisterProfessional" component={RegisterProfessional} />
          <Screen name="PresencialService" component={PresencialService} />
          <Screen name="ProfessionalSearch" component={ProfessionalSearch} />
          <Screen name="RemoteService" component={RemoteService} />
          <Screen
            name="RegisterProfessionalNext"
            component={RegisterProfessionalNext}
          />
          <Screen name="ServiceModality" component={ServiceModality} />
          <Screen name="NewSchedule" component={NewSchedule} />
          <Screen
            name="SearchProfessionalProfile"
            component={SearchProfessionalProfile}
          />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
