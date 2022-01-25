import React from 'react';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';

import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [withKnobs],
};

export const Sample1 = () => (
    <Button label={text('label', 'button')} onClick={() => {}} />
);

const textLabel = { label: 'apple', banana: 'banana' };
const colors = { tomato: 'tomato', lime: 'limegreen' };
export const Sample2 = () => (
    <Button
        label={radios('label', textLabel, 'button')}
        bgColor={select('background-color', colors, 'tomato')}
        onClick={() => {}}
    />
);
