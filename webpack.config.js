// acceder en remoto o local a las carpetas
import { resolve as _resolve } from 'path'
// trabajar con archivos html
import HtmlWebpackPlugin from 'html-webpack-plugin'
//trabajar con archivos css
import CopyWebpackPlugin from 'copy-webpack-plugin'

// modulo con toda la configuracion
export const entry = './src/index.js'
export const output = {
    path: _resolve(__dirname, 'dist'),
    // nombre del archivo
    filename: 'main.js'
}
export const resolve = {
    // extensiones que vamos a trabajar
    extensions: ['.js']
}
export const module = {
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
}
export const plugins = [
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
            to: ' '
        }],
    })
]