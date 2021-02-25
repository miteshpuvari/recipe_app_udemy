import React from 'react';
import {View, 
        Text, 
        FlatList, 
        StyleSheet, 
        Button,
        TouchableOpacity,
        } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
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

CategoriesScreen.navigationOptions = {
    headerTitle: 'MEAL CATEGORIES',
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