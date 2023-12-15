import Blog from "./Blog";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Blog> = {
  title: "Blog",
  component: Blog,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Blog>;

export default meta;

type Story = StoryObj<typeof Blog>;

export const WithoutAvatarImage: Story = {
  args: {
    userID: "kanike_541",
    title: "Game Dev Diaries: The Hidden World of Audio",
    description:
      "Before we get into it, this was a blog post I wrote over at Bungie.net when I was working as a Destiny 2 CM. For some reason, as of two weeks ago, this has been removed from the website. I’m proud of this piece and what the team had to…",
    tag: "AI",
    name: "kanike_541",
    slug: "game-dev-diaries-the-hidden-world-of-audio",
  },
};

export const WithAvatarImage: Story = {
  args: {
    userID: "kevin_james",
    title: "Game Dev Diaries: The Hidden World of Audio",
    description:
      "Before we get into it, this was a blog post I wrote over at Bungie.net when I was working as a Destiny 2 CM. For some reason, as of two weeks ago, this has been removed from the website. I’m proud of this piece and what the team had to…",
    tag: "AI",
    uri: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Kevin James",
    slug: "game-dev-diaries-the-hidden-world-of-audio",
  },
};
