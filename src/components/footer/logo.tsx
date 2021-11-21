import { HTMLChakraProps, useColorModeValue, Text } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>) => {
    // const [white, black] = useToken('colors', ['white', 'gray.800'])
    return (
        <Text as="b" color={(useColorModeValue('blue.500', 'blue.300'))}>Anmol Chauhan</Text>
    )
}