import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: AppButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: AppButtonTheme.OUTLINE,
};

export const OutlineM = Template.bind({});
OutlineM.args = {
    children: 'Text',
    size: AppButtonSize.M,
    theme: AppButtonTheme.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Text',
    size: AppButtonSize.L,
    theme: AppButtonTheme.OUTLINE,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Text',
    size: AppButtonSize.XL,
    theme: AppButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: AppButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND,
};

export const BackgroundThemeM = Template.bind({});
BackgroundThemeM.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND,
    square: true,
    size: AppButtonSize.M,
};

export const BackgroundThemeL = Template.bind({});
BackgroundThemeL.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND,
    square: true,
    size: AppButtonSize.L,
};

export const BackgroundThemeXL = Template.bind({});
BackgroundThemeXL.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND,
    square: true,
    size: AppButtonSize.XL,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedThemeM = Template.bind({});
BackgroundInvertedThemeM.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: AppButtonSize.M,
};

export const BackgroundInvertedThemeL = Template.bind({});
BackgroundInvertedThemeL.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: AppButtonSize.L,
};

export const BackgroundInvertedThemeXL = Template.bind({});
BackgroundInvertedThemeXL.args = {
    children: '<',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: AppButtonSize.XL,
};
