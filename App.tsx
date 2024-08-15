import { TamaguiProvider, createTamagui } from '@tamagui/core'

import { config } from '@tamagui/config/v3'
import ViewRegister from './src/components/viewComponents/viewRegister'
import { StyleSheet, View } from "react-native";
import ViewList from './src/components/semanticComponents/viewList';
import Header from './src/components/containerComponents/Header';
import CardTypeMeal from './src/components/semanticComponents/CardTypeMeal';
import CardEvent from './src/components/semanticComponents/CardEvent';
import { ScrollView } from 'tamagui';

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
          <CardEvent
            event = "Sintomas"
            label = "Teste"
            listEvents = {[]}
          />
          {/* <CardTypeMeal
                image = "assets/imgs/breakfast.jpg"
                typeMeal = "Café da manhã"
                color = "#FFF4E4"
            />
          <ViewList
            name="William Ferreira"
            func="Obstreta"
            phoneNumber="71 99999-9999"
          />
          <ViewRegister/> */}
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