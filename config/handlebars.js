/**
 * 
 */
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var hbs = exphbs.create({
    defaultLayout: 'layout',
    layoutsDir: app.get('views') + '/layouts',
    partialsDir: app.get('views') + '/partials',
    helpers: {
        css: function (str, option) {
            var cssList = this.cssList || [];
            str = str.split(/[,，;；]/);
            // console.log('css: ', str);
            str.forEach(function (item) {
                if (cssList.indexOf(item) < 0) {
                    cssList.push(item);
                }
            });
            this.cssList = cssList.concat();
        },
        js: function (str, option) {
            var jsList = this.jsList || [];
            str = str.split(/[,，;；]/);
            // console.log('css: ', str);
            str.forEach(function (item) {
                if (jsList.indexOf(item) < 0) {
                    jsList.push(item);
                }
            });
            this.jsList = jsList.concat();
        }
    }
});

module.exports = hbs;