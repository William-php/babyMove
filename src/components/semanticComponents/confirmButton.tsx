import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Spinner, YStack } from "tamagui";

export default function ConfirmButton() {
    const [isSpinner, setSpinner] = useState(false);
    return (
        <YStack style={style.container}>
            <Button 
                style={style.button}
                onPress={ (value: any) => setSpinner(true)}
                
            >
                Continuar
            </Button>
            <Spinner
                display={isSpinner ? "unset" : "none"} 
                size="large" 
                color="#5B21B6"
                
            />
        </YStack>
    );
}
const style = StyleSheet.create({
    container: {
        width: "100%"
    },
    button: {
        backgroundColor: "#5B21B6",
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        
        color: "#FAFAFA",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "600"
    }
})