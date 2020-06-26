const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('dotenv').config();


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

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/src'),
                '@assets': path.resolve(__dirname, 'resources/assets'),
                '@sass': path.resolve(__dirname, 'resources/sass')
            }
        }
    })
    .sass('resources/sass/app.scss', 'public/css').options({
        postCss:[require('autoprefixer'), require('postcss-rtl')]
    })
    .postCss('resources/assets/css/main.css', 'public/css', [
        tailwindcss('tailwind.js'), require('postcss-rtl')()
    ])
    .copy('node_modules/vuesax/dist/vuesax.css', 'public/css/vuesax.css') // Vuesax framework css
    .copy('resources/assets/css/iconfont.css', 'public/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/assets/fonts', 'public/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/css/prism-tomorrow.css') // Prism Tomorrow theme css
    .copyDirectory('resources/assets/images', 'public/images') // Copy all images from resources to public folder


    .copy('resources/assets/css/website/bootstrap.css', 'public/css/website/bootstrap.css') // website bootstrap css
    .copy('resources/assets/css/website/bootstrap-select.css', 'public/css/website/bootstrap-select.css') // website bootstrap css
    .copy('resources/assets/css/website/bootstrap-datetimepicker.min.css', 'public/css/website/bootstrap-datetimepicker.min.css') // website bootstrap css
    .copy('resources/assets/css/website/responsive.css', 'public/css/website/responsive.css') // website responsive css
    .copy('resources/assets/css/website/style.css', 'public/css/website/style.css') // website style css
    .copy('resources/assets/css/website/_button.css', 'public/css/website/_button.css') // website style css
    .copy('resources/assets/css/website/_feature.css', 'public/css/website/_feature.css') // website style css
    .copy('resources/assets/css/website/_footer.css', 'public/css/website/_footer.css') // website style css
    .copy('resources/assets/css/website/_team.css', 'public/css/website/_team.css') // website style css
    .copy('resources/assets/css/website/_testimonials.css', 'public/css/website/_testimonials.css') // website style css
    .copy('resources/assets/css/website/breadcrumb.css', 'public/css/website/breadcrumb.css') // website style css
    .copy('resources/assets/css/website/animate.css', 'public/css/website/animate.css') // website style css
    .copy('resources/assets/css/website/animated.css', 'public/css/website/animated.css') // website style css
    .copy('resources/assets/css/website/font-awesome.min.css', 'public/css/website/font-awesome.min.css') // website style css
    .copy('resources/assets/css/website/jquery-ui.css', 'public/css/website/jquery-ui.css') // website style css
    .copy('resources/assets/css/website/nice-select.css', 'public/css/website/nice-select.css') // website style css
    .copy('resources/assets/css/website/owl.carousel.css', 'public/css/website/owl.carousel.css') // website style css
    .copy('resources/assets/css/website/owl-carousel.min.css', 'public/css/website/owl-carousel.min.css') // website style css
    .copy('resources/assets/css/website/simpleLightbox.css', 'public/css/website/simpleLightbox.css') // website style css




    .copy('resources/assets/js/website/bootstrap.min.js', 'public/js/website/bootstrap.min.js') // website jquery js
    .copy('resources/assets/js/website/bootstrap-datetimepicker.min.js', 'public/js/website/bootstrap-datetimepicker.min.js') // website jquery js
    .copy('resources/assets/js/website/bootstrap-select.js', 'public/js/website/bootstrap-select.js') // website jquery js
    .copy('resources/assets/js/website/contact.js', 'public/js/website/contact.js') // website jquery js
    .copy('resources/assets/js/website/custom.js', 'public/js/website/custom.js') // website jquery js
    .copy('resources/assets/js/website/gmaps.min.js', 'public/js/website/gmaps.min.js') // website jquery js
    .copy('resources/assets/js/website/imagesloaded.pkgd.min.js', 'public/js/website/imagesloaded.pkgd.min.js') // website jquery js
    .copy('resources/assets/js/website/jquery.ajaxchimp.min.js', 'public/js/website/jquery.ajaxchimp.min.js') // website jquery js
    .copy('resources/assets/js/website/jquery.form.js', 'public/js/website/jquery.form.js') // website jquery js
    .copy('resources/assets/js/website/jquery.nice-select.js', 'public/js/website/jquery.nice-select.js') // website jquery js
    .copy('resources/assets/js/website/jquery.nice-select.min.js', 'public/js/website/jquery.nice-select.min.js') // website jquery js
    .copy('resources/assets/js/website/jquery.validate.min.js', 'public/js/website/jquery.validate.min.js') // website jquery js
    .copy('resources/assets/js/website/jquery-3.2.1.min.js', 'public/js/website/jquery-3.2.1.min.js') // website jquery js
    .copy('resources/assets/js/website/jquery-ui.js', 'public/js/website/jquery-ui.js') // website jquery js
    .copy('resources/assets/js/website/owl.carousel.min.js', 'public/js/website/owl.carousel.min.js') // website jquery js
    .copy('resources/assets/js/website/mail-script.js', 'public/js/website/mail-script.js') // website jquery js
    .copy('resources/assets/js/website/popper.js', 'public/js/website/popper.js') // website jquery js
    .copy('resources/assets/js/website/stellar.js', 'public/js/website/stellar.js') // website jquery js
    .copy('resources/assets/js/website/theme.js', 'public/js/website/theme.js') // website main js
    .copy('resources/assets/js/website/stellar.js', 'public/js/website/stellar.js') // website main js
    .copy('resources/assets/js/website/wow.min.js', 'public/js/website/wow.min.js') // website main js
    .copy('resources/assets/js/website/isotope-min.js', 'public/js/website/isotope-min.js') // website main js
    .copy('resources/assets/js/website/simpleLightbox.min.js', 'public/js/website/simpleLightbox.min.js'); // website main js

// Change below options according to your requirement
// if (mix.inProduction()) {
//     mix.version();
//     mix.webpackConfig({
//         output: {
//             publicPath: '/demo/vuexy-vuejs-laravel-admin-template/demo-1/',
//             chunkFilename: 'js/chunks/[name].[chunkhash].js',
//         }
//     });
//     mix.setResourceRoot("/demo/vuexy-vuejs-laravel-admin-template/demo-1/");
// }
// else{
//     mix.webpackConfig({
//         output: {
//             chunkFilename: 'js/chunks/[name].js',
//         }
//     });
// }

mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].js',
    }
});

mix.options({ processCssUrls: false });

mix.version();

