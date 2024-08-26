/*react native*/
import { SafeAreaView, StyleSheet, View } from "react-native";

/*tamagui*/
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { H1, PortalProvider, ScrollView, XStack } from 'tamagui';
import { Bell } from '@tamagui/lucide-icons';
import { ArrowLeft } from "@tamagui/lucide-icons";

/*container components*/
import Header from './src/components/containerComponents/Header';

/*semantic components*/

import CardTypeMeal from './src/components/semanticComponents/CardTypeMeal';
import CardEvent from './src/components/semanticComponents/CardEvent';
import Profile from './src/components/semanticComponents/Profile';
import CardMeal from './src/components/semanticComponents/CardMeal';
import Notification from './src/components/semanticComponents/Notification';

/*view components*/
import UserFormView from './src/components/viewComponents/userFormView';
import ViewRegister from './src/components/viewComponents/viewRegister'
import MealModalView from "./src/components/viewComponents/MealModalView";
import MealRegisterView from "./src/components/viewComponents/MealRegisterView";
import LoginView from "./src/components/viewComponents/LoginView";

// you usually export this from a tamagui.config.ts file

const tamaguiConfig = createTamagui(config);
// TypeScript types across all Tamagui APIs

type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {

  interface TamaguiCustomConfig extends Conf {}

}
const items = [
  {name: "Masculino"},
  {name: "Feminino"},
]
const cardsMeal = [
  {
    type: "Café da manhã",
    date: new Date(),
    hour: 9,
    minutes: 30,
    icon: { url: require("./assets/imgs/breakfast.jpg") },
    color: "#FFF4E4"
  },
  {
    type: "Almoço",
    date: new Date(),
    hour: 12,
    minutes: 30,
    icon: { url: require("./assets/imgs/front-view-man-having-lunch-restaurant.jpg") },
    color: "#E7F4E8"
  },
  {
    type: "Jantar",
    date: new Date(),
    hour: 20,
    minutes: 40,
    icon: { url: require("./assets/imgs/christmas-dinner-with-family.jpg") },
    color: "#FFF4E4"
  },
  {
    type: "Lanche",
    date: new Date(),
    hour: 16,
    minutes: 20,
    icon: { url: require("./assets/imgs/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table.jpg") },
    color: "#FECACA"
  }
];

export default function App() {
  const isActive: boolean = true;
  return (
    
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView>
        <View style={styles.container}>
              <ScrollView
              width="100%"
              padding="$3"
              maxHeight={"auto"}
              >
            
            
              {/* <Header isActive={isActive}/>
              <XStack w={"100 %"} h={312} ai={'center'} jc={'center'} bg={'#A78BFA'}>
              <H1 style = {{color: "#fff"}}>Baby Move</H1>
              </XStack>
              <LoginView/>
              <CardTypeMeal
              image = {
                {url: require("./assets/imgs/breakfast.jpg")}
                }
                typeMeal = "Café da manhã"
                        color = "#FFF4E4"
                        />
                        <CardMeal
                        type = "Café da manhã"
                        date = {new Date()}
                        hour = {9}
                        minutes = {30}
                        icon = {
                          {url: require("./assets/imgs/breakfast.jpg")}
                          }
                          color = "#FFF4E4"
                          />
                          */}
                {/*
                <ViewList
                name="William Ferreira"
                func="Obstreta"
                phoneNumber="71 99999-9999"
                />
                <ViewRegister/>
                <CardEvent
                event = "Sintomas"
                label = "Clique no + para adicionar sintomas. Clique em qualquer outra área dessa caixa para visualizar a listagem de sintomas"
                listEvents = {[]}
                color = '#C9BFFE'
                />
                <UserFormView/>
                
                
                <MealModalView/>
                */}
                <MealRegisterView/>
                </ScrollView>
            </View>
      </SafeAreaView>
    </TamaguiProvider>

  );

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: 16
  }
});