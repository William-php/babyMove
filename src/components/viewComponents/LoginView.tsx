import { YStack, XStack, Paragraph, Text, H1, H3, Button, View, Separator, Avatar } from 'tamagui'
import LoginForm from '../semanticComponents/LoginForm';
import { StyleSheet } from 'react-native';

export default function LoginView() {
    const style = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%"
        },
        h1: {
            fontFamily: "Pacifico",
            color: "#F5F3FF",
            fontSize: 40,
            fontWeight: "400",        
        }
    })
    return (
        <>
            <XStack w={"100 %"} h={312} ai={'center'} jc={'center'} bg={'#A78BFA'}>
                <H1 style = {style.h1}>Baby Move</H1>
            </XStack>
            <YStack 
                style = {style.container}
                bg="$purple0" f={1} 
            >
                <H3 pl="$5" pt="$5" fontWeight='bold' >
                    Seja bem-vindo(a)!
                </H3>

                {<LoginForm />}

                <Text ml="$7" mt="$3" fontWeight="bold">
                    Esqueceu sua senha?
                </Text>

                <YStack width="100%" ai="center" mt="$5" gap="$3">
                    <Button width="85%" h="$4.5" bg="$purple10" color={'$purple1'}>
                        Entrar
                    </Button>

                    <Text> Nao tem uma conta? Cadastre-se agora.</Text>

                    <Separator marginVertical={15} width={"85%"} />

                    <YStack gap="$5">
                        <Paragraph > Ou continue com</Paragraph>
                        <XStack alignItems="center" gap="$3">
                            <Avatar circular size="$5">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://greenfinchwebsitestorage.blob.core.windows.net/media/2018/10/Red-Google-Icon.png"
                                />
                                <Avatar.Fallback backgroundColor="$gray10" />
                            </Avatar>

                            <Avatar circular size="$5">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src= {require("../../../assets/imgs/apple.png")}
                                />
                                <Avatar.Fallback backgroundColor="$blue10" />
                            </Avatar>
                        </XStack>
                    </YStack>
                </YStack>
            </YStack>
        </>

    )
}