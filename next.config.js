module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/
            },
            use: ['@svgr/webpack']
        });

        return config;
    },
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/shaiqkar/image/upload/'
    }
};
