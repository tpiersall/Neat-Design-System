import React, { FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css';
import { Text } from './text'
import { variant, typography, color, space } from 'styled-system'

interface InputProps {
    value?: any
    size?: 0 | 1
    placeholder?: string
    mb?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
    mt?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
    ml?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
    mr?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
    error?: boolean
    errorMessage?: string
    label?: string
    clearable?: boolean
}

export const Input: FC<InputProps> = (props) => {
    return (
        <>
            <label><Text mt={2} mb={2} size={1} fontWeight={600} color="#000">{props.label}</Text></label>
            <BaseInput
                {...props}
                value={props.value}
                size={props.size}
                placeholder={props.placeholder}
                errorMessage={props.errorMessage}
            />
            {props.error ? <Text size={0} fontWeight={600} color="reds.0">{props.errorMessage}</Text> : null
            }
        </>
    )
}


const BaseInput = styled('input')<InputProps>(
    space,
    typography,
    color,
    css({
        outline: 'none',
        p: 3,
        fontSize: 2,
        width: "100%",
        border: '1px solid',
        borderColor: 'grays.3',
        borderRadius: "4px",
        '&:focus': {
            borderColor: 'primary',
        }
    }),
    variant({
        prop: 'size',
        variants: {
            0: {
                p: 2,
            },
            1: {
                p: 6,
                fontSize: 3
            }
        }
    }),
    variant({
        prop: 'error',
        variants: {
            true: {
                borderColor: 'red',
                '&:focus': {
                    borderColor: 'reds.0',
                }
            }
        }
    })
)
