import {BuildOptions} from "../../../../config/build/types/config";
import webpack from "webpack";
import {buildPlugin} from "../../../../config/build/buildPlugins";
import {buildLoaders} from "../../../../config/build/buildLoaders";
import {buildResolvers} from "../../../../config/build/buildResolvers";
import {buildDevServer} from "../../../../config/build/buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugin(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options): undefined,
    }
}