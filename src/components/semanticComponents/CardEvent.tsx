
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Image, Input, XStack, YStack } from 'tamagui';
import { Plus } from "@tamagui/lucide-icons"

interface CardEvent {
    event: string
    label: string
    listEvents: Array<string>,
    color: string,
}
function generateListView(listEvents: Array<string>): any {
    console.log(listEvents);
    const listView = listEvents.map( (value: string, index: number) => <Text>{index + 1} - {value}</Text>);
    return listView;
}

export default function CardEvent(props: CardEvent) {
const [isActiveList, setActiveList] = useState(false);
const [isActiveInput, setActiveInput] = useState(false);
const [inputValue, setInputValue] = useState("");
function onlyInput(): void {
    setActiveList(false);
    if (!isActiveList) setActiveInput(!isActiveInput);
}

const styles = StyleSheet.create({
    container: {        
        borderRadius: 12,
        width: "100%",
        padding: 16,

    },
    containerX: {
        width: "100%",
        
        
        alignItems: "center",
        justifyContent: "space-between"
    },
    textContainers: {
        gap: 4
    },
    h2: {
        color: "#1D1B20",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",

    },
    p: {
        color: "#1D1B20",
        fontSize: 14,
        fontWeight: "400"
    },
    btnPlus: {
        backgroundColor: props.color,
        color: "#1D1B20",
        fontSize: 24,
        
    },
    containerActiveInput: {
        width: "100%",
        marginTop: 8,
        justifyContent: "space-between"
    },
    viewList: {
        marginTop: 8,
        gap: 4,
        marginLeft: 16
    }
});

    return (
        <YStack style = {styles.container}
            backgroundColor = {props.color}
        >
            <XStack style = {styles.containerX}
                onPress = { () => setActiveList(!isActiveList)}
            >
                <YStack style = {styles.textContainers}>
                    <Text style = {styles.h2}>
                        {props.event}
                    </Text>
                    <Text style = {styles.p}>
                        {props.label}
                    </Text>
                </YStack>

                <YStack
                >
                    <Plus onPress = { () => onlyInput()}
                        backgroundColor = {props.color}
                        style = {styles.btnPlus}                        
                    />
                </YStack>
            </XStack>
            {isActiveList ? 
                <YStack onPress = {() => setActiveList(false)}
                    style = {styles.viewList}
                >
                    {generateListView(props.listEvents)}
                    
                </YStack> : null}

            {isActiveInput ? 
                <XStack style = {styles.containerActiveInput}>
                    
                    <Input
                        value = {inputValue}
                        onChangeText={(text: string) => setInputValue(text)}
                        placeholder= 'Digite um sintoma'
                        style = {{width: "75%"}}
                    />
                    <Button onPress = {() => {
                        props.listEvents.push(inputValue);
                        setInputValue("");
                        setActiveInput(false);
                    }}
                        style = {{backgroundColor: props.color}}
                    >Save</Button>
                </XStack> : null}            
        </YStack>
        
    );
}
