import React from 'react';
import { Menu } from './menu';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Components | Menu',
    component: Menu,
    decorators: [withInfo]
};

export const menu = () => (
    <>
        <Menu items={items} />
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