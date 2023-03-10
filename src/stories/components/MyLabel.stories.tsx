import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  AllCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  AllCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary", //primary | secondary | tertiary por defecto primary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  fontColor: "#5517ac",
};

//CustomFontColor
//fontColor: #5517ac
//size: h1
