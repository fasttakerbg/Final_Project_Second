SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js',
        'systemjs-babel-build': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js',

        // app scripts 
        'main': './scripts/main.js',
        'router': './configs/router-config.js',
        'requester': './scripts/helpers/requester.js',
        'handlebarsHandler': './scripts/helpers/handlebars-handler.js',
        'dataService': './scripts/data-service.js',
        'controller': './scripts/controller.js',
    },
});