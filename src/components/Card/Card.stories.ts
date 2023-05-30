import Card from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
    title: 'Reusable components/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `Card of order on the battlefield`,
            },
        },
    },
    argTypes: {
        order: {
            description: 'Initial state of order',
        },
        onOrderChanged: {
            description: 'Callback to get order',
        },
    },
    args: {
        order: 0,
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const StoryCard: Story = {};