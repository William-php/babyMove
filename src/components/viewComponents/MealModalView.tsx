import React from "react";
import { Checkbox, CheckboxProps, Input, Text, XStack, YStack } from "tamagui";
import ModifiedButton from "../semanticComponents/ModifiedButton";
import { Check } from "@tamagui/lucide-icons";
import CardMeal from "../semanticComponents/CardMeal";
import CardTypeMeal from "../semanticComponents/CardTypeMeal";
import { StyleSheet, View } from "react-native";

let checkboxProps: CheckboxProps;
export default function MealModalView(props: any): React.JSX.Element {
    function listMealRegister(cardsTypeMeal: Array<any>): Array<React.JSX.Element> {
        const LIST: Array<React.JSX.Element> = cardsTypeMeal.map((cardTypeMeal: any) => {
            return <XStack
            width = "100%"
            alignItems = "center"
            gap = "$4"
            height = {120}
        >
            <Checkbox
                id = "checkbox"
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
            <YStack
                width= "88%"
            >
                
                <CardTypeMeal                                
                    image = {cardTypeMeal.image}
                    typeMeal = {cardTypeMeal.typeMeal}
                    color = {cardTypeMeal.color}
                />
            </YStack>                                            
        </XStack>
        });
        return LIST;
    }    
    const style = StyleSheet.create({
        container: {
            width: "100%",
            justifyContent: "center",
            gap: 16
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
        inputContainer: {
            gap: 8
        },
        inputContainerX: {
            width: "45%",
            gap: 8
        },
        labelInput: {
            fontSize: 12,
            fontWeight: 700,
            color: "#2F3036"
        },
        row: {
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16
        },
        listTitle: {
            marginBottom: 24,
            textAlign: "center",
            fontSize: 16,
            color: "#2F3036"
        },    
        listContainer: {
            justifyContent: "center",
            textAlign: "center",
            gap: 8,
            marginBottom: 16,
            
        },
        icon: {
            alignItems: "center",
            marginTop: 20,
            gap: 8
        },
        title: {
            fontSize: 18,
            fontWeight: "400",
            color: "#71727A",            
        }
    });
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
            <YStack style={style.inputContainer}>
                <Text style = {style.labelInput}>
                    Descrição
                </Text>
                <Input
                    focusStyle = {
                        {outlineColor: '#A78BFA',
                        outlineWidth: 1,
                        outlineStyle: 'solid',}
                    }
                    style = {style.input}
                    placeholder = "Ovos, café, pão"
                    inputMode = "text"
                    placeholderTextColor = {"#8F9098"}
                />
            </YStack>
            <XStack style = {style.row}>
                <YStack style = {style.inputContainerX}>
                    <Text style = {style.labelInput}>
                        Data da Refeição
                    </Text>
                    <Input
                        focusStyle = {
                            {outlineColor: '#A78BFA',
                            outlineWidth: 1,
                            outlineStyle: 'solid',}
                        }
                        style = {style.input}
                        placeholder = "25/03/2024"
                        inputMode = "text"
                        placeholderTextColor = {"#8F9098"}
                        
                    >
                        
                    </Input>
                </YStack>
                <YStack style = {style.inputContainerX}>
                    <Text style = {style.labelInput}>
                        Hora da Refeição
                    </Text>
                    <Input
                        focusStyle = {
                            {outlineColor: '#A78BFA',
                            outlineWidth: 1,
                            outlineStyle: 'solid',}
                        }
                        style = {style.input}
                        placeholder = "08:00"
                        inputMode = "numeric"
                        placeholderTextColor = {"#8F9098"}
                    />
                </YStack>
            </XStack>
            <YStack >
                <Text style = {style.listTitle}>Selecione o tipo de refeição</Text>
                <YStack style = {style.listContainer}> 
                    {listMealRegister(props.cards)}               
                </YStack>
                
                <ModifiedButton
                    label = "Inserir"
                />
            </YStack>
        </YStack>
    );
}