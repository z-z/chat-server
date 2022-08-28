const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {reportFiles: ['src/**/*.{ts,tsx}']}
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
	},
	externalsPresets: { node: true },
    externals: [nodeExternals()],
    plugins: [
    	new NodemonPlugin({script: './dist/index.js'}),
		new ForkTsCheckerWebpackPlugin({async: false})
    ]
};
