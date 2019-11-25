import React, { FC } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import css from '@styled-system/css';


export interface PopoverProps {
    open?: boolean
    children?: React.ReactNode
    content?: any
    handleClickOutside?: any
}




export const PopOver: FC<PopoverProps> = (props) => {
    const [open, setOpen] = React.useState(false)
    const toggle = () => setOpen(!open)

   
    return (
        <BasePopOver onTap={toggle}>
            <>
                {props.children}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 1, y: -20 }}
                            animate={{ opacity: 1, y: 5 }}
                            exit={{ opacity: 0 }}>
                            <Content>
                                {props.content}
                            </Content>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        </BasePopOver>
    )
}

const BasePopOver = styled(motion.div)<PopoverProps>(
    css({
        position: 'relative',
    }),
)

const Content = styled(motion.div)`
    position: absolute;
    z-Index: 10000;
`



