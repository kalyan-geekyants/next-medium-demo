import type { Meta, StoryObj } from "@storybook/react";
import WhoToFollowCard from "./WhoToFollowCard";

const meta = {
  title: "WhoToFollow",
  component: WhoToFollowCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof WhoToFollowCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAvatarImage: Story = {
  args: {
    uri: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Kevin James",
    about:
      "Heyy I'm Kevin James, nice to meet you, I'm from so and so country and willing to be there also",
  },
};

export const WithoutAvatarButton: Story = {
  args: {
    name: "kanike_541",
    about:
      "Heyy I'm Kalyan Kumar, nice to meet you, I'm from so and so country and willing to be there also",
  },
};
