var $CLJS = require("./cljs_env");
require("./cljs.core.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.spec.gen.alpha.js"] = true;

goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5356 = arguments.length;
var i__18530__auto___5357 = (0);
while(true){
if((i__18530__auto___5357 < len__18529__auto___5356)){
args__18532__auto__.push((arguments[i__18530__auto___5357]));

var G__5358 = (i__18530__auto___5357 + (1));
i__18530__auto___5357 = G__5358;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq5355){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5355));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5361 = arguments.length;
var i__18530__auto___5362 = (0);
while(true){
if((i__18530__auto___5362 < len__18529__auto___5361)){
args__18532__auto__.push((arguments[i__18530__auto___5362]));

var G__5363 = (i__18530__auto___5362 + (1));
i__18530__auto___5362 = G__5363;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq5359){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5359));
});

var g_QMARK__5367 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_5368 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__5367){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__5367))
,null));
var mkg_5369 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__5367,g_5368){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__5367,g_5368))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__5367,g_5368,mkg_5369){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__5364 = cljs.core.deref(g_QMARK__5367);
return (fexpr__5364.cljs$core$IFn$_invoke$arity$1 ? fexpr__5364.cljs$core$IFn$_invoke$arity$1(x) : fexpr__5364.call(null,x));
});})(g_QMARK__5367,g_5368,mkg_5369))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__5367,g_5368,mkg_5369){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__5365 = cljs.core.deref(mkg_5369);
return (fexpr__5365.cljs$core$IFn$_invoke$arity$1 ? fexpr__5365.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__5365.call(null,gfn));
});})(g_QMARK__5367,g_5368,mkg_5369))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__5367,g_5368,mkg_5369){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__5366 = cljs.core.deref(g_5368);
return (fexpr__5366.cljs$core$IFn$_invoke$arity$1 ? fexpr__5366.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__5366.call(null,generator));
});})(g_QMARK__5367,g_5368,mkg_5369))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__5370 = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__5370.cljs$core$IFn$_invoke$arity$2 ? fexpr__5370.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__5370.call(null,rnd,size));
}));
});
var g__21264__auto___5415 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__21264__auto___5415){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5416 = arguments.length;
var i__18530__auto___5417 = (0);
while(true){
if((i__18530__auto___5417 < len__18529__auto___5416)){
args__18532__auto__.push((arguments[i__18530__auto___5417]));

var G__5418 = (i__18530__auto___5417 + (1));
i__18530__auto___5417 = G__5418;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5415))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5415){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5415),args);
});})(g__21264__auto___5415))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21264__auto___5415){
return (function (seq5371){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5371));
});})(g__21264__auto___5415))
;


var g__21264__auto___5419 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__21264__auto___5419){
return (function cljs$spec$gen$alpha$list(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5420 = arguments.length;
var i__18530__auto___5421 = (0);
while(true){
if((i__18530__auto___5421 < len__18529__auto___5420)){
args__18532__auto__.push((arguments[i__18530__auto___5421]));

var G__5422 = (i__18530__auto___5421 + (1));
i__18530__auto___5421 = G__5422;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5419))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5419){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5419),args);
});})(g__21264__auto___5419))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21264__auto___5419){
return (function (seq5372){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5372));
});})(g__21264__auto___5419))
;


var g__21264__auto___5423 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__21264__auto___5423){
return (function cljs$spec$gen$alpha$map(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5424 = arguments.length;
var i__18530__auto___5425 = (0);
while(true){
if((i__18530__auto___5425 < len__18529__auto___5424)){
args__18532__auto__.push((arguments[i__18530__auto___5425]));

var G__5426 = (i__18530__auto___5425 + (1));
i__18530__auto___5425 = G__5426;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5423))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5423){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5423),args);
});})(g__21264__auto___5423))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21264__auto___5423){
return (function (seq5381){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5381));
});})(g__21264__auto___5423))
;


var g__21264__auto___5427 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__21264__auto___5427){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5428 = arguments.length;
var i__18530__auto___5429 = (0);
while(true){
if((i__18530__auto___5429 < len__18529__auto___5428)){
args__18532__auto__.push((arguments[i__18530__auto___5429]));

var G__5430 = (i__18530__auto___5429 + (1));
i__18530__auto___5429 = G__5430;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5427))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5427){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5427),args);
});})(g__21264__auto___5427))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21264__auto___5427){
return (function (seq5385){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5385));
});})(g__21264__auto___5427))
;


var g__21264__auto___5431 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__21264__auto___5431){
return (function cljs$spec$gen$alpha$set(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5432 = arguments.length;
var i__18530__auto___5433 = (0);
while(true){
if((i__18530__auto___5433 < len__18529__auto___5432)){
args__18532__auto__.push((arguments[i__18530__auto___5433]));

var G__5434 = (i__18530__auto___5433 + (1));
i__18530__auto___5433 = G__5434;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5431))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5431){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5431),args);
});})(g__21264__auto___5431))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21264__auto___5431){
return (function (seq5386){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5386));
});})(g__21264__auto___5431))
;


var g__21264__auto___5435 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__21264__auto___5435){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5436 = arguments.length;
var i__18530__auto___5437 = (0);
while(true){
if((i__18530__auto___5437 < len__18529__auto___5436)){
args__18532__auto__.push((arguments[i__18530__auto___5437]));

var G__5438 = (i__18530__auto___5437 + (1));
i__18530__auto___5437 = G__5438;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5435))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5435){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5435),args);
});})(g__21264__auto___5435))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21264__auto___5435){
return (function (seq5389){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5389));
});})(g__21264__auto___5435))
;


var g__21264__auto___5439 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__21264__auto___5439){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5440 = arguments.length;
var i__18530__auto___5441 = (0);
while(true){
if((i__18530__auto___5441 < len__18529__auto___5440)){
args__18532__auto__.push((arguments[i__18530__auto___5441]));

var G__5442 = (i__18530__auto___5441 + (1));
i__18530__auto___5441 = G__5442;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5439))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5439){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5439),args);
});})(g__21264__auto___5439))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21264__auto___5439){
return (function (seq5394){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5394));
});})(g__21264__auto___5439))
;


var g__21264__auto___5443 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__21264__auto___5443){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5444 = arguments.length;
var i__18530__auto___5445 = (0);
while(true){
if((i__18530__auto___5445 < len__18529__auto___5444)){
args__18532__auto__.push((arguments[i__18530__auto___5445]));

var G__5446 = (i__18530__auto___5445 + (1));
i__18530__auto___5445 = G__5446;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5443))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5443){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5443),args);
});})(g__21264__auto___5443))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21264__auto___5443){
return (function (seq5395){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5395));
});})(g__21264__auto___5443))
;


var g__21264__auto___5447 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__21264__auto___5447){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5448 = arguments.length;
var i__18530__auto___5449 = (0);
while(true){
if((i__18530__auto___5449 < len__18529__auto___5448)){
args__18532__auto__.push((arguments[i__18530__auto___5449]));

var G__5450 = (i__18530__auto___5449 + (1));
i__18530__auto___5449 = G__5450;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5447))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5447){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5447),args);
});})(g__21264__auto___5447))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21264__auto___5447){
return (function (seq5397){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5397));
});})(g__21264__auto___5447))
;


var g__21264__auto___5451 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__21264__auto___5451){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5452 = arguments.length;
var i__18530__auto___5453 = (0);
while(true){
if((i__18530__auto___5453 < len__18529__auto___5452)){
args__18532__auto__.push((arguments[i__18530__auto___5453]));

var G__5454 = (i__18530__auto___5453 + (1));
i__18530__auto___5453 = G__5454;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5451))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5451){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5451),args);
});})(g__21264__auto___5451))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21264__auto___5451){
return (function (seq5400){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5400));
});})(g__21264__auto___5451))
;


var g__21264__auto___5455 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__21264__auto___5455){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5456 = arguments.length;
var i__18530__auto___5461 = (0);
while(true){
if((i__18530__auto___5461 < len__18529__auto___5456)){
args__18532__auto__.push((arguments[i__18530__auto___5461]));

var G__5462 = (i__18530__auto___5461 + (1));
i__18530__auto___5461 = G__5462;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5455))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5455){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5455),args);
});})(g__21264__auto___5455))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21264__auto___5455){
return (function (seq5403){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5403));
});})(g__21264__auto___5455))
;


var g__21264__auto___5463 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__21264__auto___5463){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5468 = arguments.length;
var i__18530__auto___5469 = (0);
while(true){
if((i__18530__auto___5469 < len__18529__auto___5468)){
args__18532__auto__.push((arguments[i__18530__auto___5469]));

var G__5471 = (i__18530__auto___5469 + (1));
i__18530__auto___5469 = G__5471;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5463))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5463){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5463),args);
});})(g__21264__auto___5463))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21264__auto___5463){
return (function (seq5406){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5406));
});})(g__21264__auto___5463))
;


var g__21264__auto___5511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__21264__auto___5511){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5512 = arguments.length;
var i__18530__auto___5513 = (0);
while(true){
if((i__18530__auto___5513 < len__18529__auto___5512)){
args__18532__auto__.push((arguments[i__18530__auto___5513]));

var G__5514 = (i__18530__auto___5513 + (1));
i__18530__auto___5513 = G__5514;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5511))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5511){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5511),args);
});})(g__21264__auto___5511))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21264__auto___5511){
return (function (seq5408){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5408));
});})(g__21264__auto___5511))
;


var g__21264__auto___5515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__21264__auto___5515){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5516 = arguments.length;
var i__18530__auto___5517 = (0);
while(true){
if((i__18530__auto___5517 < len__18529__auto___5516)){
args__18532__auto__.push((arguments[i__18530__auto___5517]));

var G__5518 = (i__18530__auto___5517 + (1));
i__18530__auto___5517 = G__5518;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5515))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5515){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5515),args);
});})(g__21264__auto___5515))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21264__auto___5515){
return (function (seq5409){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5409));
});})(g__21264__auto___5515))
;


var g__21264__auto___5519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__21264__auto___5519){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5524 = arguments.length;
var i__18530__auto___5525 = (0);
while(true){
if((i__18530__auto___5525 < len__18529__auto___5524)){
args__18532__auto__.push((arguments[i__18530__auto___5525]));

var G__5526 = (i__18530__auto___5525 + (1));
i__18530__auto___5525 = G__5526;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5519))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5519){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5519),args);
});})(g__21264__auto___5519))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21264__auto___5519){
return (function (seq5410){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5410));
});})(g__21264__auto___5519))
;


var g__21264__auto___5527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__21264__auto___5527){
return (function cljs$spec$gen$alpha$return(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5528 = arguments.length;
var i__18530__auto___5529 = (0);
while(true){
if((i__18530__auto___5529 < len__18529__auto___5528)){
args__18532__auto__.push((arguments[i__18530__auto___5529]));

var G__5530 = (i__18530__auto___5529 + (1));
i__18530__auto___5529 = G__5530;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5527))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5527){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5527),args);
});})(g__21264__auto___5527))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21264__auto___5527){
return (function (seq5411){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5411));
});})(g__21264__auto___5527))
;


var g__21264__auto___5531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21264__auto___5531){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5532 = arguments.length;
var i__18530__auto___5533 = (0);
while(true){
if((i__18530__auto___5533 < len__18529__auto___5532)){
args__18532__auto__.push((arguments[i__18530__auto___5533]));

var G__5534 = (i__18530__auto___5533 + (1));
i__18530__auto___5533 = G__5534;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5531))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5531){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5531),args);
});})(g__21264__auto___5531))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21264__auto___5531){
return (function (seq5412){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5412));
});})(g__21264__auto___5531))
;


var g__21264__auto___5535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21264__auto___5535){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5536 = arguments.length;
var i__18530__auto___5537 = (0);
while(true){
if((i__18530__auto___5537 < len__18529__auto___5536)){
args__18532__auto__.push((arguments[i__18530__auto___5537]));

var G__5538 = (i__18530__auto___5537 + (1));
i__18530__auto___5537 = G__5538;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5535))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5535){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5535),args);
});})(g__21264__auto___5535))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21264__auto___5535){
return (function (seq5413){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5413));
});})(g__21264__auto___5535))
;


var g__21264__auto___5540 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__21264__auto___5540){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5541 = arguments.length;
var i__18530__auto___5542 = (0);
while(true){
if((i__18530__auto___5542 < len__18529__auto___5541)){
args__18532__auto__.push((arguments[i__18530__auto___5542]));

var G__5543 = (i__18530__auto___5542 + (1));
i__18530__auto___5542 = G__5543;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21264__auto___5540))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21264__auto___5540){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21264__auto___5540),args);
});})(g__21264__auto___5540))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21264__auto___5540){
return (function (seq5414){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5414));
});})(g__21264__auto___5540))
;

var g__21269__auto___5573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__21269__auto___5573){
return (function cljs$spec$gen$alpha$any(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5574 = arguments.length;
var i__18530__auto___5575 = (0);
while(true){
if((i__18530__auto___5575 < len__18529__auto___5574)){
args__18532__auto__.push((arguments[i__18530__auto___5575]));

var G__5576 = (i__18530__auto___5575 + (1));
i__18530__auto___5575 = G__5576;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5573))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5573){
return (function (args){
return cljs.core.deref(g__21269__auto___5573);
});})(g__21269__auto___5573))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21269__auto___5573){
return (function (seq5548){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5548));
});})(g__21269__auto___5573))
;


var g__21269__auto___5577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__21269__auto___5577){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5578 = arguments.length;
var i__18530__auto___5579 = (0);
while(true){
if((i__18530__auto___5579 < len__18529__auto___5578)){
args__18532__auto__.push((arguments[i__18530__auto___5579]));

var G__5580 = (i__18530__auto___5579 + (1));
i__18530__auto___5579 = G__5580;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5577))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5577){
return (function (args){
return cljs.core.deref(g__21269__auto___5577);
});})(g__21269__auto___5577))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21269__auto___5577){
return (function (seq5550){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5550));
});})(g__21269__auto___5577))
;


var g__21269__auto___5581 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__21269__auto___5581){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5582 = arguments.length;
var i__18530__auto___5583 = (0);
while(true){
if((i__18530__auto___5583 < len__18529__auto___5582)){
args__18532__auto__.push((arguments[i__18530__auto___5583]));

var G__5584 = (i__18530__auto___5583 + (1));
i__18530__auto___5583 = G__5584;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5581))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5581){
return (function (args){
return cljs.core.deref(g__21269__auto___5581);
});})(g__21269__auto___5581))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21269__auto___5581){
return (function (seq5551){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5551));
});})(g__21269__auto___5581))
;


var g__21269__auto___5585 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__21269__auto___5585){
return (function cljs$spec$gen$alpha$char(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5586 = arguments.length;
var i__18530__auto___5587 = (0);
while(true){
if((i__18530__auto___5587 < len__18529__auto___5586)){
args__18532__auto__.push((arguments[i__18530__auto___5587]));

var G__5588 = (i__18530__auto___5587 + (1));
i__18530__auto___5587 = G__5588;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5585))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5585){
return (function (args){
return cljs.core.deref(g__21269__auto___5585);
});})(g__21269__auto___5585))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21269__auto___5585){
return (function (seq5553){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5553));
});})(g__21269__auto___5585))
;


var g__21269__auto___5589 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__21269__auto___5589){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5590 = arguments.length;
var i__18530__auto___5591 = (0);
while(true){
if((i__18530__auto___5591 < len__18529__auto___5590)){
args__18532__auto__.push((arguments[i__18530__auto___5591]));

var G__5592 = (i__18530__auto___5591 + (1));
i__18530__auto___5591 = G__5592;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5589))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5589){
return (function (args){
return cljs.core.deref(g__21269__auto___5589);
});})(g__21269__auto___5589))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21269__auto___5589){
return (function (seq5554){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5554));
});})(g__21269__auto___5589))
;


var g__21269__auto___5593 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21269__auto___5593){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5594 = arguments.length;
var i__18530__auto___5595 = (0);
while(true){
if((i__18530__auto___5595 < len__18529__auto___5594)){
args__18532__auto__.push((arguments[i__18530__auto___5595]));

var G__5596 = (i__18530__auto___5595 + (1));
i__18530__auto___5595 = G__5596;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5593))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5593){
return (function (args){
return cljs.core.deref(g__21269__auto___5593);
});})(g__21269__auto___5593))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21269__auto___5593){
return (function (seq5555){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5555));
});})(g__21269__auto___5593))
;


var g__21269__auto___5597 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__21269__auto___5597){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5598 = arguments.length;
var i__18530__auto___5599 = (0);
while(true){
if((i__18530__auto___5599 < len__18529__auto___5598)){
args__18532__auto__.push((arguments[i__18530__auto___5599]));

var G__5600 = (i__18530__auto___5599 + (1));
i__18530__auto___5599 = G__5600;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5597))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5597){
return (function (args){
return cljs.core.deref(g__21269__auto___5597);
});})(g__21269__auto___5597))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21269__auto___5597){
return (function (seq5556){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5556));
});})(g__21269__auto___5597))
;


var g__21269__auto___5601 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__21269__auto___5601){
return (function cljs$spec$gen$alpha$double(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5602 = arguments.length;
var i__18530__auto___5603 = (0);
while(true){
if((i__18530__auto___5603 < len__18529__auto___5602)){
args__18532__auto__.push((arguments[i__18530__auto___5603]));

var G__5604 = (i__18530__auto___5603 + (1));
i__18530__auto___5603 = G__5604;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5601))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5601){
return (function (args){
return cljs.core.deref(g__21269__auto___5601);
});})(g__21269__auto___5601))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21269__auto___5601){
return (function (seq5557){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5557));
});})(g__21269__auto___5601))
;


var g__21269__auto___5605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__21269__auto___5605){
return (function cljs$spec$gen$alpha$int(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5606 = arguments.length;
var i__18530__auto___5607 = (0);
while(true){
if((i__18530__auto___5607 < len__18529__auto___5606)){
args__18532__auto__.push((arguments[i__18530__auto___5607]));

var G__5608 = (i__18530__auto___5607 + (1));
i__18530__auto___5607 = G__5608;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5605))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5605){
return (function (args){
return cljs.core.deref(g__21269__auto___5605);
});})(g__21269__auto___5605))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21269__auto___5605){
return (function (seq5558){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5558));
});})(g__21269__auto___5605))
;


var g__21269__auto___5609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__21269__auto___5609){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5610 = arguments.length;
var i__18530__auto___5611 = (0);
while(true){
if((i__18530__auto___5611 < len__18529__auto___5610)){
args__18532__auto__.push((arguments[i__18530__auto___5611]));

var G__5612 = (i__18530__auto___5611 + (1));
i__18530__auto___5611 = G__5612;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5609))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5609){
return (function (args){
return cljs.core.deref(g__21269__auto___5609);
});})(g__21269__auto___5609))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21269__auto___5609){
return (function (seq5559){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5559));
});})(g__21269__auto___5609))
;


var g__21269__auto___5613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__21269__auto___5613){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5614 = arguments.length;
var i__18530__auto___5615 = (0);
while(true){
if((i__18530__auto___5615 < len__18529__auto___5614)){
args__18532__auto__.push((arguments[i__18530__auto___5615]));

var G__5616 = (i__18530__auto___5615 + (1));
i__18530__auto___5615 = G__5616;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5613))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5613){
return (function (args){
return cljs.core.deref(g__21269__auto___5613);
});})(g__21269__auto___5613))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21269__auto___5613){
return (function (seq5562){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5562));
});})(g__21269__auto___5613))
;


var g__21269__auto___5617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__21269__auto___5617){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5618 = arguments.length;
var i__18530__auto___5619 = (0);
while(true){
if((i__18530__auto___5619 < len__18529__auto___5618)){
args__18532__auto__.push((arguments[i__18530__auto___5619]));

var G__5620 = (i__18530__auto___5619 + (1));
i__18530__auto___5619 = G__5620;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5617))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5617){
return (function (args){
return cljs.core.deref(g__21269__auto___5617);
});})(g__21269__auto___5617))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21269__auto___5617){
return (function (seq5563){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5563));
});})(g__21269__auto___5617))
;


var g__21269__auto___5621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__21269__auto___5621){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5622 = arguments.length;
var i__18530__auto___5623 = (0);
while(true){
if((i__18530__auto___5623 < len__18529__auto___5622)){
args__18532__auto__.push((arguments[i__18530__auto___5623]));

var G__5624 = (i__18530__auto___5623 + (1));
i__18530__auto___5623 = G__5624;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5621))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5621){
return (function (args){
return cljs.core.deref(g__21269__auto___5621);
});})(g__21269__auto___5621))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21269__auto___5621){
return (function (seq5564){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5564));
});})(g__21269__auto___5621))
;


var g__21269__auto___5625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__21269__auto___5625){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5626 = arguments.length;
var i__18530__auto___5627 = (0);
while(true){
if((i__18530__auto___5627 < len__18529__auto___5626)){
args__18532__auto__.push((arguments[i__18530__auto___5627]));

var G__5628 = (i__18530__auto___5627 + (1));
i__18530__auto___5627 = G__5628;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5625))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5625){
return (function (args){
return cljs.core.deref(g__21269__auto___5625);
});})(g__21269__auto___5625))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21269__auto___5625){
return (function (seq5565){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5565));
});})(g__21269__auto___5625))
;


var g__21269__auto___5629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21269__auto___5629){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5630 = arguments.length;
var i__18530__auto___5631 = (0);
while(true){
if((i__18530__auto___5631 < len__18529__auto___5630)){
args__18532__auto__.push((arguments[i__18530__auto___5631]));

var G__5632 = (i__18530__auto___5631 + (1));
i__18530__auto___5631 = G__5632;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5629))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5629){
return (function (args){
return cljs.core.deref(g__21269__auto___5629);
});})(g__21269__auto___5629))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21269__auto___5629){
return (function (seq5566){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5566));
});})(g__21269__auto___5629))
;


var g__21269__auto___5633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__21269__auto___5633){
return (function cljs$spec$gen$alpha$string(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5634 = arguments.length;
var i__18530__auto___5635 = (0);
while(true){
if((i__18530__auto___5635 < len__18529__auto___5634)){
args__18532__auto__.push((arguments[i__18530__auto___5635]));

var G__5636 = (i__18530__auto___5635 + (1));
i__18530__auto___5635 = G__5636;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5633))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5633){
return (function (args){
return cljs.core.deref(g__21269__auto___5633);
});})(g__21269__auto___5633))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21269__auto___5633){
return (function (seq5567){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5567));
});})(g__21269__auto___5633))
;


var g__21269__auto___5637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__21269__auto___5637){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5638 = arguments.length;
var i__18530__auto___5639 = (0);
while(true){
if((i__18530__auto___5639 < len__18529__auto___5638)){
args__18532__auto__.push((arguments[i__18530__auto___5639]));

var G__5640 = (i__18530__auto___5639 + (1));
i__18530__auto___5639 = G__5640;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5637))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5637){
return (function (args){
return cljs.core.deref(g__21269__auto___5637);
});})(g__21269__auto___5637))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21269__auto___5637){
return (function (seq5568){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5568));
});})(g__21269__auto___5637))
;


var g__21269__auto___5641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21269__auto___5641){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5642 = arguments.length;
var i__18530__auto___5643 = (0);
while(true){
if((i__18530__auto___5643 < len__18529__auto___5642)){
args__18532__auto__.push((arguments[i__18530__auto___5643]));

var G__5644 = (i__18530__auto___5643 + (1));
i__18530__auto___5643 = G__5644;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5641))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5641){
return (function (args){
return cljs.core.deref(g__21269__auto___5641);
});})(g__21269__auto___5641))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21269__auto___5641){
return (function (seq5569){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5569));
});})(g__21269__auto___5641))
;


var g__21269__auto___5645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__21269__auto___5645){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5646 = arguments.length;
var i__18530__auto___5647 = (0);
while(true){
if((i__18530__auto___5647 < len__18529__auto___5646)){
args__18532__auto__.push((arguments[i__18530__auto___5647]));

var G__5648 = (i__18530__auto___5647 + (1));
i__18530__auto___5647 = G__5648;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5645))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5645){
return (function (args){
return cljs.core.deref(g__21269__auto___5645);
});})(g__21269__auto___5645))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21269__auto___5645){
return (function (seq5570){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5570));
});})(g__21269__auto___5645))
;


var g__21269__auto___5649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__21269__auto___5649){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5650 = arguments.length;
var i__18530__auto___5651 = (0);
while(true){
if((i__18530__auto___5651 < len__18529__auto___5650)){
args__18532__auto__.push((arguments[i__18530__auto___5651]));

var G__5652 = (i__18530__auto___5651 + (1));
i__18530__auto___5651 = G__5652;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5649))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5649){
return (function (args){
return cljs.core.deref(g__21269__auto___5649);
});})(g__21269__auto___5649))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21269__auto___5649){
return (function (seq5571){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5571));
});})(g__21269__auto___5649))
;


var g__21269__auto___5653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__21269__auto___5653){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5654 = arguments.length;
var i__18530__auto___5655 = (0);
while(true){
if((i__18530__auto___5655 < len__18529__auto___5654)){
args__18532__auto__.push((arguments[i__18530__auto___5655]));

var G__5656 = (i__18530__auto___5655 + (1));
i__18530__auto___5655 = G__5656;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});})(g__21269__auto___5653))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21269__auto___5653){
return (function (args){
return cljs.core.deref(g__21269__auto___5653);
});})(g__21269__auto___5653))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21269__auto___5653){
return (function (seq5572){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5572));
});})(g__21269__auto___5653))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__18532__auto__ = [];
var len__18529__auto___5659 = arguments.length;
var i__18530__auto___5660 = (0);
while(true){
if((i__18530__auto___5660 < len__18529__auto___5659)){
args__18532__auto__.push((arguments[i__18530__auto___5660]));

var G__5661 = (i__18530__auto___5660 + (1));
i__18530__auto___5660 = G__5661;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__5657_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__5657_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq5658){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5658));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__5662_SHARP_){
return (new Date(p1__5662_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});

module.exports = cljs.spec.gen.alpha;
