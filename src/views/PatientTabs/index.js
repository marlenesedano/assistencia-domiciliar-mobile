import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { ProfessionalSearch } from "../ProfessionalSearch";
import { Schedule } from "../Schedule";
import { theme } from "../../styles/theme";

const Tab = createBottomTabNavigator();
const icons = {
  Search({ size, focused }) {
    return (
      <Fontisto
        name="doctor"
        size={size - 2}
        color={theme.colors[focused ? "primary" : "dark"]}
        style={{ marginLeft: 8, textShadowRadius: focused ? 2 : 0 }}
      />
    );
  },
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
};

export function PatientTabs() {
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
        name="Profissionais"
        component={ProfessionalSearch}
        options={{ tabBarIcon: icons.Search }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={Schedule}
        options={{ tabBarIcon: icons.Schedule }}
      />
    </Tab.Navigator>
  );
}
