import { Button, ButtonGroup, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const Component = styled(ButtonGroup)`
    margin-top: 30px;
`

const StyledButton = styled(Button)`
    border-radius: 50%;
`

export const GroupedButton = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <Button disabled>1</Button>
        <StyledButton>+</StyledButton>
    </Component>
  )
}
