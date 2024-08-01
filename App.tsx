import { TamaguiProvider, createTamagui } from '@tamagui/core'

import { config } from '@tamagui/config/v3'
import ViewRegister from './src/components/viewComponents/viewRegister'
import { View } from "react-native";
import ViewList from './src/components/semanticComponents/viewList';
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
      <View>
        <ViewList/>
      </View>
    </TamaguiProvider>

  )

}