import { View } from '@tamagui/core';
import React from 'react';
import { Text } from '@tamagui/core';
import FormRegister from '../semanticComponents/formRegister';
import { StyleSheet } from 'react-native';
import TitleRegister from '../semanticComponents/titleRegister';
import CheckBoxRegister from '../semanticComponents/checkBoxRegister';
import ConfirmButton from '../semanticComponents/confirmButton';
import { ScrollView } from 'tamagui';
export default function ViewRegister() {
    return (
        <View style={styles.container}>            
            <TitleRegister/>
            <FormRegister/>
            <CheckBoxRegister/>
            <ConfirmButton/>                
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
})