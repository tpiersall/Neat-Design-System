import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { theme } from '../src/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/globalStyle';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage } from '@storybook/addon-docs/blocks';
import '@storybook/addon-console';

// automatically import all files ending in *.stories.js

addDecorator(withA11y)
addDecorator(story => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
    </ThemeProvider>
));

configure(
    [
        require.context('../src', true, /\.stories\.mdx$/),
        require.context('../src', true, /\.stories\.tsx$/),
    ],
    module
);
