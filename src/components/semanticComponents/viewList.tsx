import { Image } from "tamagui";
import { XStack, YStack } from "@tamagui/stacks";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "tamagui";

//import breakFastImage from "src\components\semanticComponents\breakfast.jpg";
interface Doctor {
    name: string,
    func: string,
    phoneNumber: string
} 
export default function ViewList(props: Doctor) {
    return (
        <XStack style={styles.container}>
            <YStack style={styles.textContainer}>
                    <Text style={styles.h1}>
                        {props.name}
                    </Text>
                    <Text style={styles.info}>
                        {props.func}
                    </Text>
                    <Text style={styles.info}>
                        {props.phoneNumber}
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
        
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        height: 120,

        borderWidth: 1,
        borderColor: "#C5C6CC",
        borderRadius: 12
    },
    textContainer: {
        textAlign: "left",
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
        color: "#1D1B20",
        
    }
})