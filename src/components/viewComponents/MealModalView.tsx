import { XStack, YStack } from "tamagui";
import React from "react";
import CardMeal from "../semanticComponents/CardMeal";
import ConfirmButton from "../semanticComponents/ModifiedButton";
import { StyleSheet, Text, View } from "react-native";
import ModifiedButton from "../semanticComponents/ModifiedButton";

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
export default function MealModalView(props: any) {
function listCardMeal(cardMeal: Array<CardMealInterface>): Array<React.JSX.Element> {
    const LIST: Array<React.JSX.Element> = cardMeal.map((cardMeal: CardMealInterface) => {
        return <CardMeal
            type = {cardMeal.type}
            date = {cardMeal.date}
            hour = {cardMeal.hour}
            minutes = {cardMeal.minutes}
            icon = {cardMeal.icon}
            color = {cardMeal.color}
        />
    });
    return LIST;
}
    const style = StyleSheet.create({
        container: {
            gap: 20,
            alignContent: "center",
            justifyContent: "space-evenly",
        },
        title: {
            fontSize: 18,
            fontWeight: "400",
            color: "#71727A",            
        },
        icon: {
            alignItems: "center",
            marginTop: 20,
            gap: 8
        },
        list: {
            marginTop: 128,
            width: "100%",
            justifyContent: "center",
            gap: 20
        }
    })
    return (

        <YStack style = {style.container}>
            <XStack style = {style.icon}>
                   <View>
                        {<props.icon/>}
                    </View> 
                    <Text style = {style.title}>
                        Refeições realizadas
                    </Text>
            </XStack>
            <YStack style = {style.list}>
                {listCardMeal(props.cards)}
            </YStack>
            <ModifiedButton
                label = "Adicionar"
            />
        </YStack>
    );
}