const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const development = process.env.NODE_ENV === 'development';
function getDevTool() {
    if (development) {
        return 'source-map'; // enables source map
    }
    return false;
}

function getProductionPlugins() {
    if (development) {
        return [];
    }
    return [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        })
    ];
}


module.exports = {
    devtool: getDevTool(),
    entry: [
        './app/index.js'
    ],
    output: {
        path: `${__dirname}/scripts`,
        publicPath: '/scripts',
        filename: 'main.js',
    },
    // externals: {
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //     redux: 'Redux',
    //     'react-redux': 'ReactRedux',
    //     tooltip: 'Tooltip',
    //     tether: 'Tether',
    //     drop: 'Drop',
    //     lodash: '_'
    // },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [ 'react', 'es2015', 'stage-1'],
            },
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 8081,
    },
    plugins: [
        // for production
        new webpack.DefinePlugin({
            // 'process.env': {
            //     NODE_ENV: JSON.stringify('development'),
            // },
            __DEV__: development,
        }),
        ...getProductionPlugins()
    ],
};
