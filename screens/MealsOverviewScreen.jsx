import { MEALS, CATEGORIES } from "../data/dummy-data";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";

// useEffect only executes after the component has loaded for the first time
// useLayoutEffect is used when we want an effect to execute/run simultaneously with the component function
// or where we have an ongoing animation/side-effect and we want to set it whilst this is still happening
// and before the component is loaded
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverViewScreen({ route, navigation }) {
  // const route = useRoute();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />
}

export default MealsOverViewScreen;
