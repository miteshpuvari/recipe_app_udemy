import React from 'react';
import { TouchableOpacity, 
         View, 
         Text, 
         StyleSheet,
         Platform,
         TouchableNativeFeedback } from 'react-native';

const CategoryGrideTile = props => {

    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return(
        <View style={style.gridItem} >
        <TouchableComponent style={{ flex: 1 }}
            style={style.gridItem} 
            onPress={props.onSelect} >

            <View style={{...style.container, ...{backgroundColor: props.color}}}>
                <Text style={style.title_cat_name} numberOfLines={2} > {props.title} </Text>
            </View>
        </TouchableComponent>
        </View>
    );
};

const style = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5,  // using elivation effect on android without elivation shado dosent effect on android
        
    },
    container: {
        flex: 1,
        borderRadius: 10,      
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 10,
    },
    title_cat_name: {
        fontFamily: 'open-sans-bold',
        fontSize: 17,
        textAlign: 'right'
    }
    
});

export default CategoryGrideTile;