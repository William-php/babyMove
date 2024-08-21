import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Spinner, YStack } from "tamagui";
import { ActiveRouteInterface } from "../../interfaces/ActiveRouteInterface";

interface ModifiedButton {
    label: string
}
export default function ModifiedButton(props: ModifiedButton) {
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
            
            
        },
        label: {
            color: "#FAFAFA",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "600"
        }
    });

    const [isSpinner, setSpinner] = useState(false);
    return (
        <YStack style={style.container}>
            <Button 
                style={style.button}
                //onPress={ () => sendDataToParent(!props.isActive) }
                
            >
                <Text style = {style.label}>{props.label}</Text>
            </Button>
            {/*<Spinner
                display={isSpinner ? "unset" : "none"} 
                size="large" 
                color="#5B21B6"
                
            />*/}
        </YStack>
    );
}
