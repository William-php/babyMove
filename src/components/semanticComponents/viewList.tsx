import { Image } from "expo-image";
import { XStack, YStack } from "@tamagui/stacks";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "tamagui";

//import breakFastImage from "src\components\semanticComponents\breakfast.jpg";

export default function ViewList() {
    return (
        <XStack style={styles.container}>
            <YStack>

            </YStack>
            <YStack>
                <Text>
                    Testesssss
                </Text>
            </YStack>
            <YStack>
                <Image
                    source={{ 
                        width: 200,
                        height: 200,
                        uri: 'assets/imgs/breakfast.jpg' 
                    }}                    
                />
                
            </YStack>
        </XStack>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        height: "auto",

        borderWidth: 1,
        borderColor: "#C5C6CC"
    },
    image: {
        maxWidth: "100%",
        height: 100
    }
})