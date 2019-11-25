import React from 'react';
import { PopOver } from './popover';
import { Button } from './buttons'
import { Menu } from './menu'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Components | PopOver',
    component: PopOver,
    decorators: [withInfo]
};

export const popover = () => (
    <>
        <PopOver content={<Menu items={items} />}><Button kind="primary">Click Me</Button></PopOver>
    </>
);

const items = [
    { label: 'Item One' },
    { label: 'Item Two' },
    { label: 'Item Three' },
    { label: 'Item Four' },
    { label: 'Item Five' },
    { label: 'Item Six' },
    { label: 'Item Seven' },
    { label: 'Item Eight' },
    { label: 'Item Nine' },
    { label: 'Item Ten' },
    { label: 'Item Eleven' },
    { label: 'Item Twelve' },
];