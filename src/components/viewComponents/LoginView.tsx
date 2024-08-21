import { YStack, XStack, Paragraph, Text, H1, H3, Button, View, Separator, Avatar } from 'tamagui'
import LoginForm from '../semanticComponents/LoginForm';

export default function LoginView() {

    return (
        <>
            <XStack w={"100 %"} h={312} ai={'center'} jc={'center'} bg={'#A78BFA'}>
                <H1>Baby Move</H1>
            </XStack>
            <YStack bg="$purple0" f={1} >
                <H3 pl="$5" pt="$5" fontWeight='bold'>
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
                                    src="https://static-00.iconduck.com/assets.00/apple-square-icon-512x512-ueysp2dm.png"
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