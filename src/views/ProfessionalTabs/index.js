import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { AttendanceList } from "../AttendanceList";
import { PatientEvaluation } from "../PatientEvaluation";
import { ProfessionalProfile } from "../ProfessionalProfile";
import { theme } from "../../styles/theme";

const Tab = createBottomTabNavigator();

const icons = {
  Schedule({ size, focused }) {
    return (
      <Ionicons
        name="ios-calendar"
        size={size - 1}
        color={theme.colors[focused ? "primary" : "dark"]}
        style={{
          marginLeft: 16,
          marginTop: 1,
          textShadowRadius: focused ? 2 : 0,
        }}
      />
    );
  },
  Evaluation({ size, focused }) {
    return (
      <FontAwesome5
        name="grin-stars"
        size={size - 1}
        color={theme.colors[focused ? "primary" : "dark"]}
        style={{
          marginLeft: 16,
          marginTop: 1,
          textShadowRadius: focused ? 2 : 0,
        }}
      />
    );
  },
  Profile({ size, focused }) {
    return (
      <AntDesign
        name="user"
        size={size - 1}
        color={theme.colors[focused ? "primary" : "dark"]}
        style={{
          marginLeft: 16,
          marginTop: 1,
          textShadowRadius: focused ? 2 : 0,
        }}
      />
    );
  },
};

export function ProfessionalTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIconStyle: {
          flex: 0,
          height: 36,
          marginBottom: -4,
        },
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          height: 54,
        },
        tabBarLabelStyle: {
          fontFamily: "Archivo_600SemiBold",
          fontSize: 13,
          marginLeft: 16,
        },
        tabBarInactiveBackgroundColor: "#F8F8F8",
        tabBarActiveBackgroundColor: "#F8F8F8",
        tabBarInactiveTintColor: theme.colors.dark,
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="Atendimentos"
        component={AttendanceList}
        options={{ tabBarIcon: icons.Schedule }}
      />
      <Tab.Screen
        name="Avaliações"
        component={PatientEvaluation}
        options={{ tabBarIcon: icons.Evaluation }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfessionalProfile}
        options={{ tabBarIcon: icons.Profile }}
      />
    </Tab.Navigator>
  );
}
