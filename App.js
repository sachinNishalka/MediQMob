import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DevToolsBubble } from "react-native-react-query-devtools";

import { Colors } from "./constants/Colors";

import AppointmentDetails from "./screens/AppointmentDetails";
import BookAnAppointment from "./screens/BookAnAppointment";
import DoctorDetails from "./screens/DoctorDetails";
import Login from "./screens/Login";
import MyAppointments from "./screens/MyAppointments";
import Records from "./screens/Records";
import Register from "./screens/Register";
import Reports from "./screens/Reports";

import Loader from "./components/Loader";
import useUser from "./hooks/useUser";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

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

function AppNavigator() {
  const { user, isPending, isAuthenticated } = useUser();

  if (isPending) return <Loader />;
  if (!user || !isAuthenticated) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginScreen" component={Login} />
        <Stack.Screen name="registerScreen" component={Register} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: Colors.primaryColor,
      }}
    >
      <Stack.Screen name="homeScreen" component={StackScreen} />
      <Stack.Screen
        name="doctorDetails"
        component={DoctorDetails}
        options={{
          headerShown: true,
          headerTitle: "Make a channel",
        }}
      />
      <Stack.Screen
        name="appointmentDetails"
        component={AppointmentDetails}
        options={{
          headerShown: true,
          headerTitle: "Appointment",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: Colors.themeBackground,
          },
        }}
      >
        <AppNavigator></AppNavigator>
        <DevToolsBubble />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
