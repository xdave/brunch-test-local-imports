module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        },
        stylesheets: { joinTo: 'app.css' }
    },
    plugins: {
        stylus: {
            // modules: true
        },
        babel: require('./babelrc.json'),
        browserSync: {
            notify: false,
            ghostMode: false
        }
    }
};
