import React from "react";
import { StyleSheet } from "react-native";
import { Text, YStack } from "tamagui";
export default function TitleRegister() {
    return (
        <YStack style={style.container}>
            <YStack >
                <Text style={style.h1}>Faça seu cadastro</Text>
            </YStack>
            <YStack >
                <Text style={style.h2}>Crie uma conta para aproveitar nossos serviços</Text>
            </YStack>
        </YStack>
        
    );
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        gap: 8,
        marginBottom: 24    
    },
    h1: {
        fontSize: 24,
        fontWeight: "900",
        fontStyle: "normal",
              
        color: "#1F2024"
    },
    h2: {
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "400",
        
        color: "#71727A"
    }
})