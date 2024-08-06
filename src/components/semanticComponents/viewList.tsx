import { Image } from "tamagui";
import { XStack, YStack } from "@tamagui/stacks";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "tamagui";

//import breakFastImage from "src\components\semanticComponents\breakfast.jpg";

export default function ViewList() {
    return (
        <XStack style={styles.container}>
            <YStack style={styles.textContainer}>
                    <Text style={styles.h1}>
                        Rogerio Ceni
                    </Text>
                    <Text>
                        Obstetra
                    </Text>
                    <Text>
                        (71) 99999-9999
                    </Text>
            </YStack>
            <YStack style={styles.image}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "../../../assets/imgs/happy-young-doctor-looking-time.jpg",
                        width: 100,
                        height: 119
                    }}
                />                
            </YStack>
        </XStack>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 24,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        height: 120,

        borderWidth: 1,
        borderColor: "#C5C6CC",
        borderRadius: 12
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        gap: 4,
        
    },
    image: {        
        borderTopEndRadius: 12,
        borderBottomEndRadius: 12
    },
    h1: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        color: "#1D1B20"
    },
    info: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        color: "#1D1B20"
    }
})