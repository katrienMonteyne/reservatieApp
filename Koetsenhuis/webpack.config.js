const webpack               = require("webpack"),
      path                  = require("path"),
      cleanWebpackPlugin    = require("clean-webpack-plugin"),
      extractPlugin         = require("extract-text-webpack-plugin"),
      fileWatcherPlugin     = require("file-watcher-webpack-plugin");;

module.exports = {

    entry: ['./src/js/app.js', './src/scss/app.scss'],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new cleanWebpackPlugin('[public/js]'),
        new extractPlugin({
            filename: '../css/app.css',
            allChunks: true
        }),
        new fileWatcherPlugin({
            root: __dirname,
            files: ['**/**/*.scss', '**/**/*.js']
        })
    
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
                }
            },
            {
                test: /\.scss$/,
                loader: extractPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../images/[name].[ext]'
                        }  
                    }
                ]
            }
        ]
    }

}