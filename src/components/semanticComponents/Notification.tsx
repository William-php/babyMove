import { Button, Circle, Text, YStack } from "tamagui";
import { Bell } from "@tamagui/lucide-icons";
import { StyleSheet, View } from "react-native";
interface Notification {
    icon: any
    count: number
}
export default function Notification(props: Notification) {
    
    const styles = StyleSheet.create({
        container: {

        },
        icon: {
            width: 64,
            height: 64
        },
        circleNotification: {
            position: "absolute",
            zIndex: 1,
            bottom: "40%",
            left: "48%",
            backgroundColor: "#F6A6A9",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: 16,
            height: 16
            
        },
        circleText: {
            textAlign: "center",
            fontFamily: "normal",
            fontWeight: "500",
            color: "#000",
            fontSize: 11
        }

    });
    return (
        <YStack>
            <View>
                {<props.icon size = {"$3"}/>}
            </View>
            {props.count ? 
                <Circle
                    size = {16}
                    style = {styles.circleNotification}
                >
                    <Text style = {styles.circleText}>{props.count}</Text>
                </Circle> : null}
        </YStack>
    );
}