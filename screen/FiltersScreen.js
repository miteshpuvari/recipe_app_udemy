import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, Switch, Platform } from 'react-native';
import {useDispatch} from 'react-redux';

import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
                <Text>{props.label}</Text> 
                <Switch 
                        trackColor={Platform.OS === 'ios' ? {true: Colors.accentColor} : ''}
                        thumbColor={Platform.OS === 'ios' ? Colors.primaryColor : ''}
                        value={props.state} 
                        onValueChange={props.onChange} 
                />

            </View>
    );
};

const FiltersScreen = props => {
    const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactosFree, setisLactosFree] = useState(false);
    const [isVegen, setIsVegen] = useState(false);
    const [isVegitarian, setIsVegitarian] = useState(false);

    const dispatch = useDispatch();
    
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactosFree,
            Vegen: isVegen,
            vegetarian: isVegitarian
        };
        
        dispatch( setFilters(appliedFilters) );
    }, [isGlutenFree, isLactosFree, isVegen, isVegitarian, dispatch]); 

    useEffect(() =>{
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return(
        <View style={styles.screen} >
            <Text style={styles.title} >Available Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-free' 
                            state={isGlutenFree} 
                            onChange={newValue => 
                                setIsGlutenFree(newValue)} 
            />
            <FilterSwitch label='Lactos-free' 
                            state={isLactosFree} 
                            onChange={newValue => 
                                setisLactosFree(newValue)} 
            />
            <FilterSwitch label='Vegen' 
                            state={isVegen} 
                            onChange={newValue => 
                                setIsVegen(newValue)} 
            />
            <FilterSwitch label='Vegitarian' 
                            state={isVegitarian} 
                            onChange={newValue => 
                                setIsVegitarian(newValue)} 
            />
           
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: ( 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} 
                />
            </HeaderButtons>
        ),
        headerRight: 
        ( 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam('save') } 
                />
            </HeaderButtons>
        ),
    }
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default FiltersScreen;