import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build', 'client')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'  
    })
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'  
    }  
  }
};
