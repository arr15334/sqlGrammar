
var path = require('path');

module.exports = {

	// module: {
 //    	rules: [
 //      		{ test: /\.g4/, loader: 'antlr4-webpack-loader' }
 //    	]
 //  	},
	entry: './src/index.js',
	node: {
		fs: "empty"
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};