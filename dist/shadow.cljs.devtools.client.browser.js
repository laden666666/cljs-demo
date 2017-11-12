var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./cljs.reader.js");
require("./cljs.core.async.js");
require("./clojure.string.js");
require("./goog.dom.dom.js");
require("./goog.object.object.js");
require("./goog.net.jsloader.js");
require("./goog.useragent.product.js");
require("./goog.uri.uri.js");
require("./goog.net.xhrio.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var shadow=$CLJS.shadow;
var goog=$CLJS.goog;

goog.dependencies_.written["shadow.cljs.devtools.client.browser.js"] = true;

goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__18532__auto__ = [];
var len__18529__auto___12384 = arguments.length;
var i__18530__auto___12385 = (0);
while(true){
if((i__18530__auto___12385 < len__18529__auto___12384)){
args__18532__auto__.push((arguments[i__18530__auto___12385]));

var G__12386 = (i__18530__auto___12385 + (1));
i__18530__auto___12385 = G__12386;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((1) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18533__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cDEVTOOLS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq12382){
var G__12383 = cljs.core.first(seq12382);
var seq12382__$1 = cljs.core.next(seq12382);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic(G__12383,seq12382__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
var G__12387 = "WEBSOCKET NOT CONNECTED";
var G__12388 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
return console.warn(G__12387,G__12388);
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.dependencies_.written,name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__12389){
var map__12390 = p__12389;
var map__12390__$1 = ((((!((map__12390 == null)))?((((map__12390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12390):map__12390);
var src = map__12390__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12390__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12390__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__17846__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__12392 = cljs.core.seq(sources);
var chunk__12393 = null;
var count__12394 = (0);
var i__12395 = (0);
while(true){
if((i__12395 < count__12394)){
var map__12396 = chunk__12393.cljs$core$IIndexed$_nth$arity$2(null,i__12395);
var map__12396__$1 = ((((!((map__12396 == null)))?((((map__12396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12396):map__12396);
var src = map__12396__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12396__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12396__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12396__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));

var G__12400 = seq__12392;
var G__12401 = chunk__12393;
var G__12402 = count__12394;
var G__12403 = (i__12395 + (1));
seq__12392 = G__12400;
chunk__12393 = G__12401;
count__12394 = G__12402;
i__12395 = G__12403;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12392);
if(temp__5457__auto__){
var seq__12392__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12392__$1)){
var c__18333__auto__ = cljs.core.chunk_first(seq__12392__$1);
var G__12404 = cljs.core.chunk_rest(seq__12392__$1);
var G__12405 = c__18333__auto__;
var G__12406 = cljs.core.count(c__18333__auto__);
var G__12407 = (0);
seq__12392 = G__12404;
chunk__12393 = G__12405;
count__12394 = G__12406;
i__12395 = G__12407;
continue;
} else {
var map__12398 = cljs.core.first(seq__12392__$1);
var map__12398__$1 = ((((!((map__12398 == null)))?((((map__12398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12398):map__12398);
var src = map__12398__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12398__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12398__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12398__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));

var G__12408 = cljs.core.next(seq__12392__$1);
var G__12409 = null;
var G__12410 = (0);
var G__12411 = (0);
seq__12392 = G__12408;
chunk__12393 = G__12409;
count__12394 = G__12410;
i__12395 = G__12411;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * stops the running app, loads sources, starts app
 * stop might be async as several node APIs are async
 * start is sync since we don't need to do anything after startup finishes
 */
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(sources){
var vec__12412 = ((cljs.core.seq(shadow.cljs.devtools.client.env.before_load))?(function (){var stop_fn = goog.getObjectByName(shadow.cljs.devtools.client.env.before_load,$CLJS);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (stop_fn){
return (function (done){
(stop_fn.cljs$core$IFn$_invoke$arity$0 ? stop_fn.cljs$core$IFn$_invoke$arity$0() : stop_fn.call(null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(stop_fn))
,shadow.cljs.devtools.client.env.before_load], null);
})():((cljs.core.seq(shadow.cljs.devtools.client.env.before_load_async))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.getObjectByName(shadow.cljs.devtools.client.env.before_load_async,$CLJS),shadow.cljs.devtools.client.env.before_load_async], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (done){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),null], null)
));
var stop_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(0),null);
var stop_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(1),null);
if(cljs.core.truth_(stop_label)){
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("app shutdown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_label], 0));
} else {
}

var G__12415 = ((function (vec__12412,stop_fn,stop_label){
return (function (state){
shadow.cljs.devtools.client.browser.do_js_load(sources);

if(cljs.core.seq(shadow.cljs.devtools.client.env.after_load)){
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("app start",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.env.after_load], 0));
} else {
}

var temp__5457__auto__ = ((cljs.core.seq(shadow.cljs.devtools.client.env.after_load))?goog.getObjectByName(shadow.cljs.devtools.client.env.after_load,$CLJS):null);
if(cljs.core.truth_(temp__5457__auto__)){
var start_fn = temp__5457__auto__;
return (start_fn.cljs$core$IFn$_invoke$arity$1 ? start_fn.cljs$core$IFn$_invoke$arity$1(state) : start_fn.call(null,state));
} else {
return null;
}
});})(vec__12412,stop_fn,stop_label))
;
return (stop_fn.cljs$core$IFn$_invoke$arity$1 ? stop_fn.cljs$core$IFn$_invoke$arity$1(G__12415) : stop_fn.call(null,G__12415));
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__12416 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__12416) : callback.call(null,G__12416));
} else {
var G__12417 = shadow.cljs.devtools.client.env.files_url();
var G__12418 = ((function (G__12417){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__12417))
;
var G__12419 = "POST";
var G__12420 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__12421 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__12417,G__12418,G__12419,G__12420,G__12421);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__12422){
var map__12423 = p__12422;
var map__12423__$1 = ((((!((map__12423 == null)))?((((map__12423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12423):map__12423);
var msg = map__12423__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__12425 = info;
var map__12425__$1 = ((((!((map__12425 == null)))?((((map__12425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12425):map__12425);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__18288__auto__ = ((function (map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12427(s__12428){
return (new cljs.core.LazySeq(null,((function (map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info){
return (function (){
var s__12428__$1 = s__12428;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12428__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__12433 = cljs.core.first(xs__6012__auto__);
var map__12433__$1 = ((((!((map__12433 == null)))?((((map__12433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12433):map__12433);
var src = map__12433__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12433__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12433__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__18284__auto__ = ((function (s__12428__$1,map__12433,map__12433__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12427_$_iter__12429(s__12430){
return (new cljs.core.LazySeq(null,((function (s__12428__$1,map__12433,map__12433__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info){
return (function (){
var s__12430__$1 = s__12430;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__12430__$1);
if(temp__5457__auto____$1){
var s__12430__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12430__$2)){
var c__18286__auto__ = cljs.core.chunk_first(s__12430__$2);
var size__18287__auto__ = cljs.core.count(c__18286__auto__);
var b__12432 = cljs.core.chunk_buffer(size__18287__auto__);
if((function (){var i__12431 = (0);
while(true){
if((i__12431 < size__18287__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18286__auto__,i__12431);
cljs.core.chunk_append(b__12432,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__12451 = (i__12431 + (1));
i__12431 = G__12451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12432),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12427_$_iter__12429(cljs.core.chunk_rest(s__12430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12432),null);
}
} else {
var warning = cljs.core.first(s__12430__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12427_$_iter__12429(cljs.core.rest(s__12430__$2)));
}
} else {
return null;
}
break;
}
});})(s__12428__$1,map__12433,map__12433__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info))
,null,null));
});})(s__12428__$1,map__12433,map__12433__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info))
;
var fs__18285__auto__ = cljs.core.seq(iterys__18284__auto__(warnings));
if(fs__18285__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18285__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12427(cljs.core.rest(s__12428__$1)));
} else {
var G__12452 = cljs.core.rest(s__12428__$1);
s__12428__$1 = G__12452;
continue;
}
} else {
var G__12453 = cljs.core.rest(s__12428__$1);
s__12428__$1 = G__12453;
continue;
}
} else {
return null;
}
break;
}
});})(map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info))
,null,null));
});})(map__12425,map__12425__$1,sources,compiled,map__12423,map__12423__$1,msg,info))
;
return iter__18288__auto__(sources);
})()));
var seq__12435_12454 = cljs.core.seq(warnings);
var chunk__12436_12455 = null;
var count__12437_12456 = (0);
var i__12438_12457 = (0);
while(true){
if((i__12438_12457 < count__12437_12456)){
var map__12439_12458 = chunk__12436_12455.cljs$core$IIndexed$_nth$arity$2(null,i__12438_12457);
var map__12439_12459__$1 = ((((!((map__12439_12458 == null)))?((((map__12439_12458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12439_12458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12439_12458):map__12439_12458);
var w_12460 = map__12439_12459__$1;
var msg_12461__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12439_12459__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_12462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12439_12459__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12439_12459__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_12464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12439_12459__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var G__12441_12465 = ["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_12464)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12462),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_12463),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_12461__$1)].join('');
console.warn(G__12441_12465);

var G__12466 = seq__12435_12454;
var G__12467 = chunk__12436_12455;
var G__12468 = count__12437_12456;
var G__12469 = (i__12438_12457 + (1));
seq__12435_12454 = G__12466;
chunk__12436_12455 = G__12467;
count__12437_12456 = G__12468;
i__12438_12457 = G__12469;
continue;
} else {
var temp__5457__auto___12470 = cljs.core.seq(seq__12435_12454);
if(temp__5457__auto___12470){
var seq__12435_12471__$1 = temp__5457__auto___12470;
if(cljs.core.chunked_seq_QMARK_(seq__12435_12471__$1)){
var c__18333__auto___12472 = cljs.core.chunk_first(seq__12435_12471__$1);
var G__12473 = cljs.core.chunk_rest(seq__12435_12471__$1);
var G__12474 = c__18333__auto___12472;
var G__12475 = cljs.core.count(c__18333__auto___12472);
var G__12476 = (0);
seq__12435_12454 = G__12473;
chunk__12436_12455 = G__12474;
count__12437_12456 = G__12475;
i__12438_12457 = G__12476;
continue;
} else {
var map__12442_12477 = cljs.core.first(seq__12435_12471__$1);
var map__12442_12478__$1 = ((((!((map__12442_12477 == null)))?((((map__12442_12477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12442_12477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12442_12477):map__12442_12477);
var w_12479 = map__12442_12478__$1;
var msg_12480__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442_12478__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_12481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442_12478__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442_12478__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_12483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442_12478__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var G__12444_12484 = ["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_12483)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12481),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_12482),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_12480__$1)].join('');
console.warn(G__12444_12484);

var G__12485 = cljs.core.next(seq__12435_12471__$1);
var G__12486 = null;
var G__12487 = (0);
var G__12488 = (0);
seq__12435_12454 = G__12485;
chunk__12436_12455 = G__12486;
count__12437_12456 = G__12487;
i__12438_12457 = G__12488;
continue;
}
} else {
}
}
break;
}

if(shadow.cljs.devtools.client.env.autoload){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__12425,map__12425__$1,sources,compiled,warnings,map__12423,map__12423__$1,msg,info){
return (function (p__12445){
var map__12446 = p__12445;
var map__12446__$1 = ((((!((map__12446 == null)))?((((map__12446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12446):map__12446);
var src = map__12446__$1;
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12446__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12446__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || ((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))));
});})(map__12425,map__12425__$1,sources,compiled,warnings,map__12423,map__12423__$1,msg,info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__12425,map__12425__$1,sources,compiled,warnings,map__12423,map__12423__$1,msg,info){
return (function (p__12448){
var map__12449 = p__12448;
var map__12449__$1 = ((((!((map__12449 == null)))?((((map__12449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12449):map__12449);
var rc = map__12449__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12449__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__17846__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__12425,map__12425__$1,sources,compiled,warnings,map__12423,map__12423__$1,msg,info))
,sources)));
if((cljs.core.empty_QMARK_(warnings)) && (cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,shadow.cljs.devtools.client.browser.do_js_reload);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__12489){
var map__12490 = p__12489;
var map__12490__$1 = ((((!((map__12490 == null)))?((((map__12490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12490):map__12490);
var msg = map__12490__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12490__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__12492 = cljs.core.seq(updates);
var chunk__12494 = null;
var count__12495 = (0);
var i__12496 = (0);
while(true){
if((i__12496 < count__12495)){
var path = chunk__12494.cljs$core$IIndexed$_nth$arity$2(null,i__12496);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___12502 = (function (){var G__12498 = ["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join('');
return document.querySelector(G__12498);
})();
if(cljs.core.truth_(temp__5457__auto___12502)){
var node_12503 = temp__5457__auto___12502;
var new_link_12504 = (function (){var G__12499 = document.createElement("link");
G__12499.setAttribute("rel","stylesheet");

G__12499.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__12499;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_12504,node_12503);

goog.dom.removeNode(node_12503);
} else {
}

var G__12505 = seq__12492;
var G__12506 = chunk__12494;
var G__12507 = count__12495;
var G__12508 = (i__12496 + (1));
seq__12492 = G__12505;
chunk__12494 = G__12506;
count__12495 = G__12507;
i__12496 = G__12508;
continue;
} else {
var G__12509 = seq__12492;
var G__12510 = chunk__12494;
var G__12511 = count__12495;
var G__12512 = (i__12496 + (1));
seq__12492 = G__12509;
chunk__12494 = G__12510;
count__12495 = G__12511;
i__12496 = G__12512;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12492);
if(temp__5457__auto__){
var seq__12492__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12492__$1)){
var c__18333__auto__ = cljs.core.chunk_first(seq__12492__$1);
var G__12513 = cljs.core.chunk_rest(seq__12492__$1);
var G__12514 = c__18333__auto__;
var G__12515 = cljs.core.count(c__18333__auto__);
var G__12516 = (0);
seq__12492 = G__12513;
chunk__12494 = G__12514;
count__12495 = G__12515;
i__12496 = G__12516;
continue;
} else {
var path = cljs.core.first(seq__12492__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___12517__$1 = (function (){var G__12500 = ["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join('');
return document.querySelector(G__12500);
})();
if(cljs.core.truth_(temp__5457__auto___12517__$1)){
var node_12518 = temp__5457__auto___12517__$1;
var new_link_12519 = (function (){var G__12501 = document.createElement("link");
G__12501.setAttribute("rel","stylesheet");

G__12501.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__12501;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_12519,node_12518);

goog.dom.removeNode(node_12518);
} else {
}

var G__12520 = cljs.core.next(seq__12492__$1);
var G__12521 = null;
var G__12522 = (0);
var G__12523 = (0);
seq__12492 = G__12520;
chunk__12494 = G__12521;
count__12495 = G__12522;
i__12496 = G__12523;
continue;
} else {
var G__12524 = cljs.core.next(seq__12492__$1);
var G__12525 = null;
var G__12526 = (0);
var G__12527 = (0);
seq__12492 = G__12524;
chunk__12494 = G__12525;
count__12495 = G__12526;
i__12496 = G__12527;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(result,e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root(),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__12528){
var map__12529 = p__12528;
var map__12529__$1 = ((((!((map__12529 == null)))?((((map__12529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12529):map__12529);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12529__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12529__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__12529,map__12529__$1,id,js){
return (function (){
return eval(js);
});})(map__12529,map__12529__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__12531){
var map__12532 = p__12531;
var map__12532__$1 = ((((!((map__12532 == null)))?((((map__12532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12532):map__12532);
var msg = map__12532__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12532__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12532__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12532__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var sources_to_load = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload))?(function (){var all = cljs.core.butlast(sources);
var self = cljs.core.last(sources);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_),all),self);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload))?sources:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,sources)
));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__12532,map__12532__$1,msg,id,sources,reload){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__12532,map__12532__$1,msg,id,sources,reload))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__12534){
var map__12535 = p__12534;
var map__12535__$1 = ((((!((map__12535 == null)))?((((map__12535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12535):map__12535);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12535__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12535__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__12535,map__12535__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__12535,map__12535__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__12537){
var map__12538 = p__12537;
var map__12538__$1 = ((((!((map__12538 == null)))?((((map__12538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12538):map__12538);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12538__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12538__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__12540){
var map__12541 = p__12540;
var map__12541__$1 = ((((!((map__12541 == null)))?((((map__12541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12541):map__12541);
var msg = map__12541__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__12543 = type;
var G__12543__$1 = (((G__12543 instanceof cljs.core.Keyword))?G__12543.fqn:null);
switch (G__12543__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url.cljs$core$IFn$_invoke$arity$2(document.location.hostname,new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

return shadow.cljs.devtools.client.browser.devtools_msg("connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("disconnected!");

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
return null;
});})(print_fn,ws_url,socket))
;
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___12545 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___12545)){
var s_12546 = temp__5457__auto___12545;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_12546.onclose = ((function (s_12546,temp__5457__auto___12545){
return (function (e){
return null;
});})(s_12546,temp__5457__auto___12545))
;

s_12546.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

module.exports = shadow.cljs.devtools.client.browser;
