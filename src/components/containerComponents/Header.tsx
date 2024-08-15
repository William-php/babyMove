import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Circle, Image, Text, XStack, YStack } from "tamagui";
import { ActiveRouteInterface } from "../../interfaces/ActiveRouteInterface";



export default function Header(props: ActiveRouteInterface) {
    const [route, setRoute] = useState(props.isActive)
    return (
        route ?
        < XStack style={styles.container} >
            <XStack style={styles.containerAvatar}>
                <Avatar circular size="$6">
                    <Avatar.Image
                        accessibilityLabel="cam"
                        src="../../../assets/imgs/avatarimg.jpeg"
                    />
                </Avatar>
                <Text>Hi, Sara</Text>
            </XStack>
            <YStack>
                <Image
                    source={{
                        uri:"../../../assets/imgs/notification.svg",
                        width: 24,
                        height: 24
                    }}
                />
                <Circle 
                    size={16}
                    backgroundColor="#F6A6A9" 
                    style={styles.circleNotification}
                    
                > 
                    <Text style={styles.circleText}>3</Text>
                </Circle>
            </YStack>
            
        </XStack> : 
        <YStack>
                    <Text>Teste</Text>
        </YStack>
    ) 
}

const styles = StyleSheet.create({
    container: {
        
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        
        // paddingLeft: 24,
        // paddingRight: 24,
        // paddingTop: 32,

        marginBottom: 16
    },
    containerAvatar: {
        alignItems: "center",
        gap: 12,
    },
    circleNotification: {
        position: "absolute",
        zIndex: 1,
        bottom: 8,
        left: 12
    },
    circleText: {
        textAlign: "center",
        fontFamily: "normal",
        fontWeight: "500",
        color: "#000"
    }
});