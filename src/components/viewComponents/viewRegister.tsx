import { View } from '@tamagui/core';
import React from 'react';
import { Text } from '@tamagui/core';
import FormRegister from './userFormView';
import { StyleSheet } from 'react-native';
import TitleRegister from '../semanticComponents/titleRegister';
import CheckBoxRegister from '../semanticComponents/checkBoxRegister';
import ConfirmButton from '../semanticComponents/ModifiedButton';
import { ScrollView } from 'tamagui';
import CardTypeMeal from '../semanticComponents/CardTypeMeal';
import UserFormView from './userFormView';
export default function ViewRegister() {
    return (
        <View style={styles.container}>            
            <TitleRegister/>
            <UserFormView/>
            <CheckBoxRegister/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "auto",
        width: "100%",

        justifyContent: "center",
        alignItems: "center",

        paddingVertical: 24,
        paddingHorizontal: 24,
        
    }
});