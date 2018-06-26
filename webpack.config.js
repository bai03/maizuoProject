module.exports = {
	entry:'./src/main.js',
	output:{
		path:__dirname,
		filename:'dist/app.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(gif|jpg|png|jpeg)$/,
				loader:'url-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/
			},
		]
	}
}
