const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./source/main.js",
	output: {
		path: path.join(__dirname, "/release"),
		filename: "release.js",
		publicPath: "/"
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js|\.jsx$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader?sourceMap" ]
			},
			{
				test: /\.scss$/,
				use: [ "style-loader", "css-loader?sourceMap", "sass-loader?sourceMap" ]
			}
		]
	},
	resolve: {
		extensions: [ ".js", ".jsx"],
		alias: {
			"@assets": path.resolve( __dirname, "assets" ),
			"@styles": path.resolve( __dirname, "assets", "styles" ),
			"@components": path.resolve( __dirname, "source", "components" ),
			"@modules": path.resolve( __dirname, "source", "modules" ),
			"@utility": path.resolve( __dirname, "source", "utility" )
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		})
	],
	devServer: {
		port: 9000,
		hot: false,
		inline: false,
		historyApiFallback: true
	}
};