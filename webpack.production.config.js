var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders.concat([{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css')
		}])
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: './index.html'
		}]),
	]
};
