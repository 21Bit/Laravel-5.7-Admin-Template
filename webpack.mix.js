const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/back-end.js', 'public/js')
   .sass('resources/sass/back-end.scss', 'public/css').options({
      processCssUrls: false
   }).version();

mix.autoload({
   jQuery: 'jquery',
   $: 'jquery',
   jquery: 'jquery'
});