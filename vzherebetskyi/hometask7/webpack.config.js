const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'script.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js/,
            exclude: /node_modules/
        }, {
            test: /\.s?css/,
            use: [
                'style-loader',
                "css-loader",
                "resolve-url-loader",
                {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                      plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                          require('precss'),
                          require('autoprefixer')
                        ];
                      }
                    }
                  },
                "sass-loader"
                // {loader: "css-loader",
                //     options: {
                //       importLoaders: 1,
                //       sourceMap: true
                //     }
                //   },
                //   { loader: "resolve-url-loader", options: { sourceMap: true } },
                //   { loader: "adjust-sourcemap-loader", options: { debug: true } },
                //   { loader: "sass-loader", options: { sourceMap: true, linefeed: "crlf" } }
            ]
        }, 
        {
            test: /\.(png|jpg)$/,
            use: { loader: "file-loader" }
        }
    ]
    }
    // devtool: 'cheap-module-eval-source-map',
    // devServer: {
    //     contentBase: path.join(__dirname, 'public')        
    // }
};