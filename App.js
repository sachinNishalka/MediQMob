import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "./constants/Colors";

import Login from "./screens/Login";
import Register from "./screens/Register";
import MyAppointments from "./screens/MyAppointments";
import BookAnAppointment from "./screens/BookAnAppointment";
import Reports from "./screens/Reports";
import Records from "./screens/Records";
import DoctorDetails from "./screens/DoctorDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "myAppointments") {
            iconName = "document-text-outline";
          } else if (route.name === "bookAnAppointment") {
            iconName = "duplicate-outline";
          } else if (route.name === "reports") {
            iconName = "newspaper-outline";
          } else if (route.name === "records") {
            iconName = "file-tray-stacked-outline";
          }

          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
        tabBarInactiveTintColor: Colors.inactiveMenuColor,
        tabBarActiveTintColor: Colors.primaryColor,
        headerTintColor: Colors.primaryColor,
      })}
    >
      <Tab.Screen
        name="myAppointments"
        component={MyAppointments}
        options={{
          tabBarLabel: "Appointments",
          headerTitle: "Appointments",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="bookAnAppointment"
        component={BookAnAppointment}
        options={{
          tabBarLabel: "Make a channel",
          headerTitle: "Make a channel",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="reports"
        component={Reports}
        options={{
          tabBarLabel: "Reports",
          headerTitle: "Reports",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="records"
        component={Records}
        options={{
          tabBarLabel: "Records",
          headerTitle: "Records",
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: Colors.themeBackground },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: Colors.primaryColor,
        }}
      >
        <Stack.Screen name="loginScreen" component={Login}></Stack.Screen>
        <Stack.Screen name="registerScreen" component={Register}></Stack.Screen>
        <Stack.Screen name="tabScreen" component={StackScreen}></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: "Make a channel",
          }}
          name="doctorDetails"
          component={DoctorDetails}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
