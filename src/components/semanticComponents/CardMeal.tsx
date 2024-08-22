import React  from "react";
import { StyleSheet } from "react-native";
import { Image, XStack, YStack } from "tamagui";
import { Text } from "react-native";

/*this is interface must replace in other folder because it's used in other file's*/
interface ImageInterface {
    url: any
}
interface CardMealInterface {
    type: string,
    date: Date,
    hour: number,
    minutes: number,
    icon: ImageInterface,
    color: string
}
function convertDate(date: Date): string {
    const DAY = date.getDay();
    const MONTH = date.getMonth();
    const YEAR = date.getFullYear();
    const FULLDATE = `${DAY}/${MONTH}/${YEAR}`;
    return FULLDATE ? FULLDATE : "Date is not found";
}
export default function CardMeal(props: CardMealInterface) {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: 84,
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
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: "900",
            color: "#000"
        },
        p2: {
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "400",
            color: "#1D1B20",
            lineHeight: 20,
            letterSpacing: 0.25
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
                    source = {props.icon.url}
                />
            </YStack>
            <YStack 
                
                style = {styles.textContainer}
            >
                <Text
                    style = {styles.p}
                >
                    {props.type}
                </Text>
                <Text
                    style = {styles.p2}
                >
                    {convertDate(props.date)} às {props.hour}:{props.minutes}AM
                </Text>
            </YStack>
        </XStack>
    );
}