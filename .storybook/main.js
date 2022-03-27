module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
        {
            name: '@storybook/preset-scss',
            options: {
                cssLoaderOptions: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                },
            },
        },
        // You can add other presets/addons by using the string declaration
        '@storybook/preset-typescript',
        '@storybook/addon-actions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    staticDirs: ['../public'],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
};
