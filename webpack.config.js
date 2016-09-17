module.exports = {
	devtool: 'eval-source-map',
	entry: [
	'./client/src/index.js'
	],
	output: {
		filename: 'client/bundle.js',
		path: __dirname,
		publicPath: '/'
	},
	module: {
		loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-1'] 
				}
			}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};

