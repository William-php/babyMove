import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Image, Input, XStack, YStack } from 'tamagui';

interface CardEvent {
    event: string
    label: string
    listEvents: Array<string>
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

    return (
        <YStack style = {styles.container}>
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
                    <Button onPress = { () => onlyInput()}
                        backgroundColor={"#fff"}
                        style = {styles.btnPlus}
                    >+</Button>
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
                        style = {{color: "#5B21B6"}}
                    >Save</Button>
                </XStack> : null}            
        </YStack>
        
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 12,
        width: "100%",

        padding: 16
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
        backgroundColor: "#fff",
        color: "#5B21B6",
        fontSize: 24
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
})