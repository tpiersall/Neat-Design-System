import React from 'react';
import { Input } from './input';
import { SelectInput } from './select'
//@ts-ignore
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Components | Inputs',
    component: Input,
    decorators: [withInfo]
};

export const input = () => (
    <form>
        <Input label="First Name" placeholder="Please Enter a name..." />
    </form>
);

export const sizes = () => (
    <>
        <Input mb={4} size={0} placeholder="input" />
        <Input mb={4} placeholder="input" />
        <Input mb={4} size={1} placeholder="input" />
    </>
);


export const Error = () => (
    <>
        <Input label="Name" error placeholder="input" errorMessage="Well that broke" />
    </>
);