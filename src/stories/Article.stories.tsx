import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Article from '../components/articles/article/Article';
import PlaceholderImg from '../components/articles/article/placeholder.png';

export default {
    title: 'Articles',
    component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    category: 'business',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, minima.',
    publishedAt: new Date(),
    title: 'Lorem ipsum dolor sit amet.',
    urlToImage: PlaceholderImg,
};
