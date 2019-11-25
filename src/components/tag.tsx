import React, { FC } from 'react'
import { Box } from './box'
import styled from 'styled-components'
import { variant } from 'styled-system'

interface TagProps {
    children?: React.ReactNode
    color?: string
    mr?: number
    as?: any
    size?: 0 | 1
}


export const Tag: FC<TagProps> = (props) => {
    return (
        <BaseTag {...props} as={props.as} mr={props.mr} color={props.color} size={props.size}>{props.children}</BaseTag>
    )
}

const BaseTag = styled(Box)<TagProps>(
    {
        fontSize: '10px',
        fontFamily: 'PT Mono, monospace',
        fontWeight: 700,
        borderRadius: '24px',
    },
    variant({
        prop: 'color',
        variants: {
            primary: {
                color: 'primary',
                border: '1px solid',
                borderColor: 'primary',
                pl: 1,
                pr: 1,
                pt: 0,
                pb: 0,
            },
            secondary: {
                color: 'red',
                border: '1px solid',
                borderColor: 'red',
                pl: 1,
                pr: 1,
                pt: 0,
                pb: 0,
            },
        }
    }),
    variant({
        prop: 'size',
        variants: {
            0: {
                pl: 1,
                pr: 1,
                pt: 0,
                pb: 0,
            },
            1: {
                fontSize: '12px',
                pl: 2,
                pr: 2,
                pt: 1,
                pb: 1,
            },
        }
    })
)


