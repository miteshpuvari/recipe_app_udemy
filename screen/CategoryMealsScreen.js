import React from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const  displayedMeals =  MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);   

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
        return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,   // using that set the title of which we click
    };
};

export default CategoryMealsScreen;