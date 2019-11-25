import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { space, color, layout, flexbox, typography } from 'styled-system'

export interface BoxProps {
    children: ReactNode
}

export const Box: React.FC<BoxProps> = (props) => {
    return (
        <BoxWrapper {...props}>{props.children}</BoxWrapper>
    )
}

const BoxWrapper = styled.div(
    space,
    color,
    layout,
    flexbox,
    typography
)
