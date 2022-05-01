import express from "express";
// const path = require('path');
// import path from "path";



let configViewEngine = (app) => {
    // app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static('./src/public'));
    app.set('view engine', 'ejs');  //Template engine: ejs (<=> jsp of Java)
    app.set('views', './src/views');
};

module.exports = configViewEngine;