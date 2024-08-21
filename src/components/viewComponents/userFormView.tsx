import React, { useState } from "react";
import { StyleSheet } from "react-native";
import type { CheckboxProps, FontSizeTokens, SelectProps } from "tamagui";
import { Checkbox, Input, Label, Text, XStack, YStack, Select, Adapt, Sheet, getFontSize } from "tamagui";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import ConfirmButton from "../semanticComponents/ModifiedButton";
import ModifiedButton from "../semanticComponents/ModifiedButton";


let checkboxProps: CheckboxProps;
let selectProps: SelectProps;
export default function UserFormView(props: any) {
    const style = StyleSheet.create({
        container: {
            width: "100%",
            gap: 16
        },
        inputContainer: {
            gap: 8,
        },
        titlesContainer: {
            gap: 8,
        },
        h1: {
            fontSize: 24,
            fontWeight: "900",
            color: "#1F2024"
        },
        h2: {
            fontSize: 18,
            fontWeight: "400",
            color: "#71727A"
        },
        labelInput: {
            fontSize: 12,
            fontWeight: 700,
            color: "#2F3036"
        },
        labelCheck: {
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "400",
            textAlign: "justify",
            lineHeight: 16,
            letterSpacing: 0.12
        },
        labelCheckColored: {
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "justify",
            color: "#5B21B6"
        },
        input: {
            height: 48,
            paddingHorizontal: 16,
            paddingVertical: 12,
            alignItems: "center",
    
            borderRadius: 12,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#C5C6CC"
        },
        inputContainerX: {
            width: "45%",
            gap: 8
        },
        row: {
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16
        }
    });
    const [val, setValue] = useState("Feminino");

    return (
        <YStack style={style.container}>
            <YStack style = {style.titlesContainer}>
                <Text style = {style.h1}>Faça seu cadastro</Text>
                <Text style = {style.h2}>Crie uma conta para aproveitar nossos serviços</Text>
            </YStack>
            <YStack style={style.inputContainer}>
                <Text style = {style.labelInput}>Nome completo</Text>
                <Input
                    style={style.input}
                    placeholder="Seu nome"
                    inputMode="text"
                    placeholderTextColor={"#8F9098"}
                />
            </YStack>
            <YStack style={style.inputContainer}>
                <Text style = {style.labelInput}>Email</Text>
                <Input 
                    style={style.input}
                    placeholder="seuemail@email.com"
                    inputMode="email"
                    placeholderTextColor={"#8F9098"}
                />
            </YStack>
            <YStack style={style.inputContainer}>
                <Text style = {style.labelInput}>Senha</Text>
                <Input 
                    style={style.input}
                    placeholder="Crie uma senha segura"
                    placeholderTextColor={"#8F9098"}
                    secureTextEntry={true}
                />
            </YStack>
            <YStack>
                <Input 
                    style={style.input}
                    placeholder="Crie uma senha segura"
                    placeholderTextColor={"#8F9098"}
                    secureTextEntry={true}
                />
            </YStack>
            <YStack style={style.inputContainer}>
                <Text style = {style.labelInput}>Endereço</Text>
                <Input
                    style={style.input}
                    placeholder="Seu endereço"
                    placeholderTextColor={"#8F9098"}
                />
            </YStack>
            <XStack style={style.row}>
                <YStack style={style.inputContainerX}>
                    <Text style = {style.labelInput}>Data de Nascimento</Text>
                    <Input 
                        style={style.input}
                        placeholder="dd/MM/yyyy"
                        placeholderTextColor={"#8F9098"}                        
                    />
                </YStack>
                <YStack style={style.inputContainerX}>
                    <Text style = {style.labelInput}>Telefone</Text>
                    <Input
                        style={style.input}
                        placeholder="71 999999999"
                        placeholderTextColor={"#8F9098"}
                    />
                </YStack>
            </XStack>
            <YStack style = {style.inputContainer}>
                <Text style = {style.labelInput}>Gênero</Text>
                {
                 <Select value={val} onValueChange={setValue} disablePreventBodyScroll {...props}>
                 <Select.Trigger width={220} iconAfter={ChevronDown}>
                     <Select.Value placeholder="Something" />
                 </Select.Trigger>
                 <Adapt when="sm" platform="touch">
                     <Sheet
                         native={!!props.native}
                         modal
                         dismissOnSnapToBottom
                         animationConfig={{
                             type: 'spring',
                             damping: 20,
                             mass: 1.2,
                             stiffness: 250,
                         }}
                     >
                         <Sheet.Frame>
                             <Sheet.ScrollView>
                                 <Adapt.Contents />
                             </Sheet.ScrollView>
                         </Sheet.Frame>
                         <Sheet.Overlay
                             animation="lazy"
                             enterStyle={{ opacity: 0 }}
                             exitStyle={{ opacity: 0 }}
                         />
                     </Sheet>
                 </Adapt>
     
                 <Select.Content zIndex={200000}>
                     <Select.ScrollUpButton
                         alignItems="center"
                         justifyContent="center"
                         position="relative"
                         width="100%"
                         height="$3"
                     >
                         <YStack zIndex={10}>
                             <ChevronUp size={20} />
                         </YStack>
                     </Select.ScrollUpButton>
     
                     <Select.Viewport
                         minWidth={200}
                     >
     
                         <Select.Group>
                             <Select.Label>Gênero</Select.Label>
                             {React.useMemo(
                                 () =>
                                     props.items.map((item: any, i: number) => {
                                         return (
                                             <Select.Item
                                                 index={i}
                                                 key={item.name}
                                                 value={item.name.toLowerCase()}
                                             >
                                                 <Select.ItemText>{item.name}</Select.ItemText>
                                                 <Select.ItemIndicator marginLeft="auto">
                                                     <Check size={16} />
                                                 </Select.ItemIndicator>
                                             </Select.Item>
                                         )
     
                                     }),
                                 [props.items]
                             )}
                         </Select.Group>
     
                         {/* Native gets an extra icon */}
                         {props.native && (
                             <YStack
                                 position="absolute"
                                 right={0}
                                 top={0}
                                 bottom={0}
                                 alignItems="center"
                                 justifyContent="center"
                                 width={'$4'}
                                 pointerEvents="none"
                             >
                                 <ChevronDown
                                     size={getFontSize((props.size as FontSizeTokens) ?? '$true')}
                                 />
                             </YStack>
                         )}
                     </Select.Viewport>
                     <Select.ScrollDownButton
                         alignItems="center"
                         justifyContent="center"
                         position="relative"
                         width="100%"
                         height="$3"
                     >
                         <YStack zIndex={10}>
                             <ChevronDown size={20} />
                         </YStack>
                     </Select.ScrollDownButton>
                 </Select.Content>
             </Select>
                }
            </YStack>
            <XStack
                width = "100%"
                alignItems = "center"
                gap = "$4"                
            >

                <Checkbox
                    id= "checkbox"
                    size = {24}
                    {...checkboxProps}
                    height = {24}
                    width = {24}
                    borderRadius = {6}
                >
                    <Checkbox.Indicator>
                        <Check/>
                    </Checkbox.Indicator>
                </Checkbox>

                <Text style = {style.labelCheck} htmlFor = "checkbox">
                    Eu declaro que lí e aceito os <Text style = {style.labelCheckColored}>Termos de Serviço</Text> e <Text style = {style.labelCheckColored}>a Política de Privacidade.</Text>
                </Text>
            </XStack>
            <ModifiedButton
                label = "Continuar"
            />
        </YStack>
        
        
    )
}


  // Accepts size and style properties directly

  

