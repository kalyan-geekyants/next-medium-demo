import type { Meta, StoryObj } from "@storybook/react";
import StaffPick from './StaffPick';

const meta = {
  title: "StaffPick",
  component: StaffPick,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof StaffPick>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStaffPick: Story = {
  args: {
    uri: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Kevin James",
    tagLine: "Trying to Innovate? Put down your hammer.",
  },
};
