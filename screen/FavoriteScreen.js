import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) =>  {
    return {
    headerTitle: 'YOUR FAV RECIPES',
    headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" 
                    iconName='ios-menu' 
                    onPress={() => {
                    navData.navigation.toggleDrawer(); // using toggledrawer open drawer close and close drawer open
                }} />
                </HeaderButtons>
)
}};

export default FavoriteScreen;