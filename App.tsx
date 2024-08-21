/*react native*/
import { StyleSheet, View } from "react-native";

/*tamagui*/
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { ScrollView } from 'tamagui';
import { Bell } from '@tamagui/lucide-icons';

/*container components*/
import Header from './src/components/containerComponents/Header';

/*semantic components*/
import ViewList from './src/components/semanticComponents/viewList';
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

const tamaguiConfig = createTamagui(config)
// TypeScript types across all Tamagui APIs

type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {

  interface TamaguiCustomConfig extends Conf {}

}
export default function App() {
  const isActive: boolean = true;
  return (

    <TamaguiProvider config={tamaguiConfig}>
      <View style={styles.container}>
        <ScrollView
                width="100%"
                padding="$3"
                maxHeight={"auto"}
        >
          <Header isActive={isActive}/>
          {/* 
          <CardEvent
            event = "Sintomas"
            label = "Clique no + para adicionar sintomas. Clique em qualquer outra área dessa caixa para visualizar a listagem de sintomas"
            listEvents = {[]}
            color = '#C9BFFE'
          />
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
          <UserFormView/>
          <MealModalView/>
          <MealRegisterView/>
          */}
          <LoginView/>
        </ScrollView>
      </View>
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