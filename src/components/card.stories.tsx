import React from 'react';
import { Card } from './card';
//@ts-ignore
import { withInfo } from '@storybook/addon-info';
import { Button } from './buttons'
import { Text } from './text'
import { Heading } from './heading'
import { Tag } from './tag'

export default {
    title: 'Components | Card',
    component: Card,
    decorators: [withInfo]
};

export const cards = () => (
    <>
        <Card kind="border" width={256}>
            <img width="100%" alt="Image" src="https://images.unsplash.com/photo-1574281103163-0ee74230eb1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
            <div>
                <Tag as="span" size={1}>Retail</Tag>
                <Tag as="span" size={1}>Restaurant</Tag>
            </div>
            <Heading mb={2} as='h1' size={5} truncate>2112 Bonnie Brae Ave.</Heading>
            <Text mb={2} as="p" size={2}>Fort Worth Tx, 76111</Text>
            <Button endEnhancer={() => null} size="small">View</Button>
        </Card>

    </>
);

export const Shadow = () => (
    <>
        <Card kind="shadow" width={256}>
            <Heading as='h1' mb={2} size={8}>1.2K</Heading>
            <Text as="p" size={2}>Total Population</Text>
            <Button fullWidth kind="primary" size="large">Submit</Button>
        </Card>
    </>
);



