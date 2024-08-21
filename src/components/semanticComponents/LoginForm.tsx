import { Input, YStack, Text, View } from 'tamagui'


export default function LoginForm() {
    return (
        <YStack ai="center" gap="$3" mt="$5">
            <Input h="$5" width="85%" placeholder='Seu email' />
            <Input h="$5" width="85%" placeholder="Sua senha" secureTextEntry />
        </ YStack>

    )

}