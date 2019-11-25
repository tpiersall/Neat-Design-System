import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, space, color } from 'styled-system'
import { Box } from './box'
import css from '@styled-system/css';
import { action } from '@storybook/addon-actions'

interface MenuProps {
    numbers?: any
}


export function Menu(props) {
    const listItem = (
        <>
            {props.items.map((item) =>
                <ListItemWrapper onClick={() => console.log(item)}>
                    {item.label}
                </ListItemWrapper>
            )}
        </>
    )
    return (
        <BaseMenu>
            {listItem}
        </BaseMenu>
    );
}



const BaseMenu = styled(Box)<MenuProps>(
    css({
        boxShadow: '0px 6px 9px 0px #0000001f',
        maxHeight: '200px',
        overflow: 'scroll',
        position: 'relative',
        border: '1px solid',
        borderColor: 'grays.3',
        borderRadius: '4px'
    }),
)

const ListItemWrapper = styled.div(
    space,
    typography,
    color,
    css({
        fontSize: 2,
        p: 4,
        cursor: 'pointer',
        '&:hover': {
            bg: 'grays.4',
        },
    })
)
