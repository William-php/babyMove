import { TamaguiProvider, createTamagui } from '@tamagui/core'

import { config } from '@tamagui/config/v3'
import ViewRegister from './src/components/viewComponents/viewRegister'
import { StyleSheet, View } from "react-native";
import ViewList from './src/components/semanticComponents/viewList';
import Header from './src/components/containerComponents/Header';
import { ScrollView } from 'tamagui';
// you usually export this from a tamagui.config.ts file

const tamaguiConfig = createTamagui(config)
// TypeScript types across all Tamagui APIs

type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {

  interface TamaguiCustomConfig extends Conf {}

}
export default function App() {

  return (

    <TamaguiProvider config={tamaguiConfig}>
      <View style={styles.container}>
        <ScrollView
                width="100%"
                padding="$3"
                maxHeight={"auto"}
        >
          <Header/>
          <ViewList/>
          <ViewRegister/>
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