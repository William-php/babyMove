import React from "react";
import { StyleSheet } from "react-native";
import { Image, XStack, YStack } from "tamagui";
import { Text } from "react-native";

interface ImageInterface {
    url: any
}
interface CardTypeMeal {
    image: ImageInterface
    typeMeal: string
    color: string
}
export default function CardTypeMeal(props: CardTypeMeal) {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: 120,
            gap: 24,
            borderRadius: 12,
        },
        textContainer: {
            textAlign: "center",
            justifyContent: "center",
            paddingHorizontal: 24
        },
        image: {
            borderRadius: 12,
            width: 100,
            height: "100%"
        },
        p: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "900",
            color: "#000"
        }
    });
    return (
        <XStack 
            style = {styles.container}
            backgroundColor = {props.color}
        >
            <YStack >    
                <Image
                    style = {styles.image}
                    source = {props.image.url}
                />
            </YStack>
            <YStack 
                
                style = {styles.textContainer}
            >
                <Text
                    style={styles.p}
                >
                    {props.typeMeal}
                </Text>
            </YStack>
        </XStack>
    );
}

