import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton as="a" href="https://www.linkedin.com/in/anmol-chauhan-13a899157/" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
        <IconButton as="a" href="https://github.com/anmol977" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    </ButtonGroup>
)