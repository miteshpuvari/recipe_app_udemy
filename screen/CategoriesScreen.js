import React from 'react';
import {View, 
        Text, 
        FlatList, 
        StyleSheet, 
        Button,
        TouchableOpacity,
        } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGrideTile from '../components/CategoryGrideTile';

const CategoriesScreen = props => {
        // console.log(props);
        const renderGridItem = (itemData) => {

            return <CategoryGrideTile 
                        title={itemData.item.title}
                        color={itemData.item.color} 
                        onSelect={() => {
                            props.navigation.navigate({routeName: 'CategoryMeals', 
                            params: {
                                categoryId: itemData.item.id
                            } 
                        });
                    }} 
                />;
        };

    return(
            <FlatList keyExtractor={(item, index) => item.id} 
                      data={CATEGORIES} 
                      renderItem={renderGridItem} 
                      numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'MEAL CATEGORIES',
    headerLeft: (   <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item   title="Menu" 
                            iconName='ios-menu' 
                            onPress={() => {
                            navData.navigation.toggleDrawer(); // using toggledrawer open drawer close and close drawer open
                    }} />
                    </HeaderButtons>
    )};
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

export default CategoriesScreen;