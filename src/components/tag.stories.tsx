import React from 'react';
import { Tag } from './tag';

//@ts-ignore
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Components | Tag',
    component: Tag,
    decorators: [withInfo]
};

export const tags = () => (
    <>
        <Tag as="span" color="primary" size={1}>Retail</Tag>
        <Tag as="span" color="secondary">Restaurant</Tag>
    </>
);
