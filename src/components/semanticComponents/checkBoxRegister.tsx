import { Checkbox, Label, Text, XStack, YStack } from "tamagui";
import React from "react";
import { StyleSheet } from "react-native";

export default function CheckBoxRegister() {
    return (
        <XStack style={style.container}>
            <YStack style={style.container}>
                <Checkbox 
                    size="$6"
                    id={"checkbox"}
                    style={style.check}>
                    <Checkbox.Indicator onPress={(event: any) => console.log(event)}>
                                    
                    </Checkbox.Indicator>
                </Checkbox>
            </YStack>
            <YStack>
                <Text htmlFor={"checkbox"} >
                    Eu declaro que lí e aceito os Termos de Serviço e a Política de Privacidade.
                </Text>
            </YStack>
        </XStack>
    );
}

const style = StyleSheet.create({
    container: {
        maxWidth: "90%",
        alignItems: "center",
        marginTop: 24,
        marginBottom: 24,
        justifyContent: "center",
        alignContent: "center",
        gap: 12
        
        
    },
    check: {
        
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#C5C6CC"
    },
    label: {
        justifyContent: "center",
        alignContent: "center",

        paddingVertical: 4
    }
})