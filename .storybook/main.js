module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
        '@storybook/preset-create-react-app',
        '@storybook/addon-storysource',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};
