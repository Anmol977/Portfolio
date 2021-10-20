import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();
    const button = useColorModeValue('purple', 'orange');
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
    return (
        <IconButton aria-label="toggle theme" colorScheme={button} icon={icon} onClick={toggleColorMode}>
        </IconButton>
    )
}

export default ThemeToggleButton