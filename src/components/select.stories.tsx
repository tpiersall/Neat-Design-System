import React, { FC, useState, useCallback, useEffect } from 'react';
import { SelectInput } from './select';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import { theme } from '../theme'


export default {
    title: 'Components | Select',
    component: SelectInput,
    decorators: [withInfo]
};


const options = [
    { label: "AliceBlue", id: "#F0F8FF" },
    { label: "AntiqueWhite", id: "#FAEBD7" },
    { label: "Aqua", id: "#00FFFF" },
    { label: "Aquamarine", id: "#7FFFD4" },
    { label: "Azure", id: "#F0FFFF" },
    { label: "Beige", id: "#F5F5DC" },
    { label: "AliceBlue", id: "#F0F8FF" },
    { label: "AntiqueWhite", id: "#FAEBD7" },
    { label: "Aqua", id: "#00FFFF" },
    { label: "Aquamarine", id: "#7FFFD4" },
    { label: "Azure", id: "#F0FFFF" },
    { label: "Beige", id: "#F5F5DC" },
    { label: "AliceBlue", id: "#F0F8FF" },
    { label: "AntiqueWhite", id: "#FAEBD7" },
    { label: "Aqua", id: "#00FFFF" },
    { label: "Aquamarine", id: "#7FFFD4" },
    { label: "Azure", id: "#F0FFFF" },
    { label: "Beige", id: "#F5F5DC" },
    { label: "AliceBlue", id: "#F0F8FF" },
    { label: "AntiqueWhite", id: "#FAEBD7" },
    { label: "Aqua", id: "#00FFFF" },
    { label: "Aquamarine", id: "#7FFFD4" },
    { label: "Azure", id: "#F0FFFF" },
    { label: "Beige", id: "#F5F5DC" },
    { label: "AliceBlue", id: "#F0F8FF" },
    { label: "AntiqueWhite", id: "#FAEBD7" },
    { label: "Aqua", id: "#00FFFF" },
    { label: "Aquamarine", id: "#7FFFD4" },
    { label: "Azure", id: "#F0FFFF" },
    { label: "Beige", id: "#F5F5DC" },

];

const BasicProps: React.FC = () => {

    return (
            <SelectInput
            label="Let's Get Started"
            options={options}
            placeholder="Choose a city..."
        />
    );
};

export const Input = () => (
    <BasicProps />
);