import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';
import { BuildOptions } from './types/config';

export function buildPlugin({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    let plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.assets, 'favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        new ReactRefreshPlugin(),
    ];

    if (isDev) {
        plugins = [
            ...plugins,
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        ];
    }

    return plugins;
}
