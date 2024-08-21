import { YStack } from "tamagui";
import React from "react";
import CardMeal from "../semanticComponents/CardMeal";
import ConfirmButton from "../semanticComponents/ModifiedButton";
import { StyleSheet } from "react-native";
import ModifiedButton from "../semanticComponents/ModifiedButton";

export default function MealModalView() {
function listCardMeal(): Array<React.JSX.Element> {
    const list: Array<React.JSX.Element> = [];
    for (let i = 0; i < 5; i++) list
        .push(
            <CardMeal
                type = "Café da manhã"
                date = {new Date()}
                hour = {9}
                minutes = {30}
                icon = {
                    {url: require("../../../assets/imgs/breakfast.jpg")}
                }
                color = "#FFF4E4"
            />);
    return list;
}
    const style = StyleSheet.create({
        container: {
            gap: 20,
            justifyContent: "center"
        }
    })
    return (
        <YStack style = {style.container}>
            {listCardMeal()}
            <ModifiedButton
                label = "Adicionar"
            />
        </YStack>
    );
}