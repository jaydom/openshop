module.exports = {
    entry: [
        './bundles/entry.js'
    ],
    output: {
        path: __dirname + '/public/javascripts/',
        publicPath: "/public/javascripts/",
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['jsx-loader?harmony'] }
        ]
    }
};