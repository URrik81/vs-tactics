import { ArmyOrder } from "@src/services/models/api/army.api";
import Card from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Reusable components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Card of order on the battlefield`,
      },
    },
  },
  argTypes: {
    providedOrder: {
      description: "Initial state of order",
    },
    isRunaway: {
      description: "Shows whether this order runaway already",
    },
    onOrderChanged: {
      description: "Callback to get order",
    },
  },
  args: {
    providedOrder: ArmyOrder.None,
    isRunaway: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const StoryCard: Story = {};
