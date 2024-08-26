import { XStack, YStack } from "tamagui";
import React from "react";
import CardMeal from "../semanticComponents/CardMeal";
import ConfirmButton from "../semanticComponents/ModifiedButton";
import { StyleSheet, Text, View } from "react-native";
import ModifiedButton from "../semanticComponents/ModifiedButton";
import { ArrowLeft } from "@tamagui/lucide-icons";

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
const cardsMeal: Array<CardMealInterface> = [
    {
      type: "Café da manhã",
      date: new Date(),
      hour: 9,
      minutes: 30,
      icon: { url: require("../../../assets/imgs/breakfast.jpg") },
      color: "#FFF4E4"
    },
    {
      type: "Almoço",
      date: new Date(),
      hour: 12,
      minutes: 30,
      icon: { url: require("../../../assets/imgs/front-view-man-having-lunch-restaurant.jpg") },
      color: "#E7F4E8"
    },
    {
      type: "Jantar",
      date: new Date(),
      hour: 20,
      minutes: 40,
      icon: { url: require("../../../assets/imgs/christmas-dinner-with-family.jpg") },
      color: "#FFF4E4"
    },
    {
      type: "Lanche",
      date: new Date(),
      hour: 16,
      minutes: 20,
      icon: { url: require("../../../assets/imgs/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table.jpg") },
      color: "#FECACA"
    }
  ];
export default function MealRegisterView() {
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
            padding: 8
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
                        {<ArrowLeft/>}
                    </View> 
                    <Text style = {style.title}>
                        Refeições realizadas
                    </Text>
            </XStack>
            <YStack style = {style.list}>
                {listCardMeal(cardsMeal)}
            </YStack>
            <ModifiedButton
                label = "Adicionar"
            />
        </YStack>
    );
}