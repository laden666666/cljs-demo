var $CLJS = require("./cljs_env");
require("./cljs.core.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var app=$CLJS.app || ($CLJS.app = {});
goog.dependencies_.written["app.main.js"] = true;

goog.provide('app.main');
goog.require('cljs.core');
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello world"], 0));

module.exports = app.main;
