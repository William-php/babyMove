import { XStack } from "tamagui";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
interface ImageInterface {
    url: any
}
interface Profile {
    name: string,
    image: ImageInterface
}
export default function Profile(props: Profile) {
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            gap: 12,
        },
        circle: {
            width: 64,
            height: 64,        
            borderRadius: 100
        },
        image: {
            width: "100%",
            height: "100%",
            borderRadius: 100
        }
    });
    return (
        <XStack style = {styles.container}>
                <View style = {styles.circle}>
                    <Image
                        source = {props.image.url}
                        style = {styles.image}
                    />
                </View>
                <Text>Oi, {props.name}</Text>
            </XStack>
    );
}

