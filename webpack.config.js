// acceder en remoto o local a las carpetas
const path = require('path')
// trabajar con archivos html
const HtmlWebpackPlugin = require('html-webpack-plugin')
//trabajar con archivos css
const CopyWebpackPlugin = require('copy-webpack-plugin')

// modulo con toda la configuracion
module.exports = {
    // punto de entrada
    entry: './src/index.js',
    // donde se aloja
    output: {
        path: path.resolve(__dirname, 'dist'),
        // nombre del archivo
        filename: 'main.js'
    },
    resolve: {
        // extensiones que vamos a trabajar
        extensions: ['.js']
    },
    // donde irán las reglas 
    module: {
        rules: [
            {
                // identificar archivos que están en nuestro entorno
                test: /\,js?$/,
                // gitignore
                exclude: /node_modules/,
                use: {
                    // utilizar el loader como preestablecido
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // como injectar valores a html
            inject: true,
            // donde está el template main
            template: './public/index.html',
            // nombre del archivo
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
                patterns: [{
                // donde está
                from: './src/styles/styles.css',
                // a donde va 
                to: '' }],
        })
    ]
}