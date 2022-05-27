/* eslint-disable camelcase */
import React from "react";
import { LogBox } from "react-native";

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
import { NewSchedule } from "./src/views/NewSchedule";
import { SearchProfessionalProfile } from "./src/views/SearchProfessionalProfile";
import { AttendanceList } from "./src/views/AttendanceList";
import { Schedule } from "./src/views/Schedule";
import { PatientEvaluation } from "./src/views/PatientEvaluation";
import { PatientTabs } from "./src/views/PatientTabs";
import { ProfessionalTabs } from "./src/views/ProfessionalTabs";
import { ProfileProvider } from "./src/context/ProfileContext";
import { PatientProfile } from "./src/views/PatientProfile";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

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
      <ProfileProvider>
        <NavigationContainer theme={navigationTheme}>
          <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="RegisterPatient" component={RegisterPatient} />
            <Screen name="RegisterProfessional" component={RegisterProfessional} />
            <Screen name="ProfessionalSearch" component={ProfessionalSearch} />
            <Screen name="PatientEvaluation" component={PatientEvaluation} />
            <Screen
              name="RegisterProfessionalNext"
              component={RegisterProfessionalNext}
            />
            <Screen name="NewSchedule" component={NewSchedule} />
            <Screen name="AttendanceList" component={AttendanceList} />
            <Screen name="Schedule" component={Schedule} />
            <Screen name="PatientTabs" component={PatientTabs} />
            <Screen name="ProfessionalTabs" component={ProfessionalTabs} />
            <Screen name="PatientProfile" component={PatientProfile} />
            <Screen
              name="SearchProfessionalProfile"
              component={SearchProfessionalProfile}
            />
          </Navigator>
        </NavigationContainer>
      </ProfileProvider>
    </ThemeProvider>
  );
}
