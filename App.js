import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { CATEGORIES } from "./data/dummy-data";
import { Provider } from "react-redux";

import FavouritesContextProvider from "./store/context/favourties-context";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
import MealDetails from "./screens/MealDetailsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import {store} from './store/redux/store';

const Stack = createNativeStackNavigator();
// Stack is an object with 2 properties where every property holds an object that acts as a component

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        // headerTitleAlign: "center",
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerStyle: { backgroundColor: "#e2b497" },
        drawerInactiveTintColor: "#351401",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#351401",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "catamaran-black": require("./assets/fonts/Catamaran-Black.ttf"),
    "catamaran-bold": require("./assets/fonts/Catamaran-Bold.ttf"),
    "catamaran-ExtraBold": require("./assets/fonts/Catamaran-ExtraBold.ttf"),
    "catamaran-ExtraLight": require("./assets/fonts/Catamaran-ExtraLight.ttf"),
    "catamaran-Light": require("./assets/fonts/Catamaran-Light.ttf"),
    "catamaran-Medium": require("./assets/fonts/Catamaran-Medium.ttf"),
    "catamaran-Regular": require("./assets/fonts/Catamaran-Regular.ttf"),
    "catamaran-SemiBold": require("./assets/fonts/Catamaran-SemiBold.ttf"),
    "catamaran-Thin": require("./assets/fonts/Catamaran-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTitleAlign: "center",
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverViewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                title: "Meal Details",
                headerRight: () => {
                  return <Text>In the header</Text>;
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

// ! If needed
// npm install react-native-reanimated@1 --save --save-exact
// used 2.2.3 in this project
