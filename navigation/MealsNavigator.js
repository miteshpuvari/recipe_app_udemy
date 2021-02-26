import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer} from "react-navigation";
import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import FavoriteScreen from '../screen/FavoriteScreen'; 
import FiltersScreen from '../screen/FiltersScreen';
import {Ionicons} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import Colors from '../constants/Colors';
import { color } from 'react-native-reanimated';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: 
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
};

const MealsNavigator =  createStackNavigator({
    Categories: {
        screen: CategoriesScreen, 
    
},
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
    
}, {
    
    defaultNavigationOptions: defaultStackNavOptions 
});

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarLabel: 'All Recipes',
        tabBarIcon: (tabInfo) => {
            return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            );
            
        },
        tabBarColor: Colors.primaryColor
    }},
    Favorites: {screen: FavNavigator, navigationOptions: {
        tabBarLabel: 'My Favorites',
        tabBarIcon: (tabInfo) => {
            return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            );
        },
        tabBarColor: Colors.accentColor
    }},
};

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true,
    barStyle: {
        backgroundColor: Colors.primaryColor
    },

}) : createBottomTabNavigator(
    tabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans'
        },
        activeTintColor: Colors.accentColor
    }
});

const FiltersNavigator = createStackNavigator(
{
    Filters: FiltersScreen
},
{ 
//     navigationOptions: {
//         drawerLabel: 'Fillters!!!!'
//     }, 
    defaultNavigationOptions: defaultStackNavOptions
}
);

const MainNavigator = createDrawerNavigator({
    MealFavs: {screen: MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'Meals'
    }},
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);