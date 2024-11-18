const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : {
        main:[path.join(__dirname,"./src/index.js"),path.join(__dirname,"./src/sass/style.scss")]
    },
    watch : true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: '> 0.25%, not dead',
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "style.css"
        })
    ]
};
