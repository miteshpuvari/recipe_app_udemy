import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

import { State } from 'react-native-gesture-handler';
import { StylesProvider } from '@material-ui/core';


const FavoriteScreen = props => {

    const favMeals = useSelector(state => state.meals.availableMeals);

    if(favMeals === 0 || !favMeals) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text>No favorite meals found. Start adding some favorite meals</Text>
            </View>
        );
    }

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