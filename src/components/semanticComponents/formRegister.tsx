import React from "react";
import { StyleSheet } from "react-native";
import { Checkbox, Input, Text, XStack, YStack } from "tamagui";
export default function FormRegister() {
    return (
        <YStack style={style.container}>
            <YStack style={style.inputContainer}>
                <Text>Nome completo</Text>
                <Input
                    style={style.input}
                    placeholder="Seu nome"
                    inputMode="text"
                    placeholderTextColor={"#8F9098"}
                />
            </YStack>
            <YStack style={style.inputContainer}>
                <Text>Email</Text>
                <Input 
                    style={style.input}
                    placeholder="seuemail@email.com"
                    inputMode="email"
                    placeholderTextColor={"#8F9098"}
                />
            </YStack>
            <YStack style={style.inputContainer}>
                <Text>Senha</Text>
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
                <Text>Endereço</Text>
                <Input
                    style={style.input}
                    placeholder="Seu endereço"
                    placeholderTextColor={"#8F9098"}
                />
            </YStack>
            <XStack style={style.row}>
                <YStack style={style.inputContainerX}>
                    <Text>Data de Nascimento</Text>
                    <Input 
                        style={style.input}
                        placeholder="dd/MM/yyyy"
                        placeholderTextColor={"#8F9098"}                        
                    />
                </YStack>
                <YStack style={style.inputContainerX}>
                    <Text>Telefone</Text>
                    <Input
                        style={style.input}
                        placeholder="71 999999999"
                        placeholderTextColor={"#8F9098"}
                    />
                </YStack>
            </XStack>
            
        </YStack>
        
        
    )
}
const style = StyleSheet.create({
    container: {
        width: "100%",
        gap: 16
    },
    inputContainer: {
        gap: 8,
    },
    label: {
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "700"
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
})

  // Accepts size and style properties directly

  

