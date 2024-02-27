import { heavyInfantry } from "@src/services/models/api/army.api";
import BattleUnit from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BattleUnit> = {
  title: "Reusable components/BattleUnit",
  component: BattleUnit,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Set of cards of Army on the battlefield`,
      },
    },
  },
  argTypes: {
    army: {
      description: "Army which is represented by BattleUnit",
    },
    isManaged: {
      description: "Shows whether unit is managed by user",
    },
    isStraight: {
      description:
        "Shows whether unit is placed in straight or opposite direction. In general Straight - Allies, Opposite - Enemies",
    },
    startPosition: {
      description:
        "Index of the first card position, to shift armies according to battle order. Min: 0, Max: frontWidth - 1",
    },
    frontWidth: {
      description: "Width of the front. Min: 1, Max: 3",
    },
    ordersUpdated: {
      description: "Callback to handle updated ArmyOrder",
    },
  },
  args: {
    army: heavyInfantry,
    isManaged: true,
    isStraight: true,
    startPosition: 0,
    frontWidth: 3,
  },
};

export default meta;
type Story = StoryObj<typeof BattleUnit>;

export const StoryBattleUnit: Story = {};
