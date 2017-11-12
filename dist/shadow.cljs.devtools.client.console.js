var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./clojure.string.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.cljs.devtools.client.console.js"] = true;

goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__5457 = cljs.core.seq(item);
var chunk__5458 = null;
var count__5459 = (0);
var i__5460 = (0);
while(true){
if((i__5460 < count__5459)){
var it = chunk__5458.cljs$core$IIndexed$_nth$arity$2(null,i__5460);
arr.push(it);

var G__5464 = seq__5457;
var G__5465 = chunk__5458;
var G__5466 = count__5459;
var G__5467 = (i__5460 + (1));
seq__5457 = G__5464;
chunk__5458 = G__5465;
count__5459 = G__5466;
i__5460 = G__5467;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5457);
if(temp__5457__auto__){
var seq__5457__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5457__$1)){
var c__18333__auto__ = cljs.core.chunk_first(seq__5457__$1);
var G__5470 = cljs.core.chunk_rest(seq__5457__$1);
var G__5472 = c__18333__auto__;
var G__5473 = cljs.core.count(c__18333__auto__);
var G__5474 = (0);
seq__5457 = G__5470;
chunk__5458 = G__5472;
count__5459 = G__5473;
i__5460 = G__5474;
continue;
} else {
var it = cljs.core.first(seq__5457__$1);
arr.push(it);

var G__5475 = cljs.core.next(seq__5457__$1);
var G__5476 = null;
var G__5477 = (0);
var G__5478 = (0);
seq__5457 = G__5475;
chunk__5458 = G__5476;
count__5459 = G__5477;
i__5460 = G__5478;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5479){
var vec__5480 = p__5479;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5480,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__5483 = struct;
var seq__5484 = cljs.core.seq(vec__5483);
var first__5485 = cljs.core.first(seq__5484);
var seq__5484__$1 = cljs.core.next(seq__5484);
var tag = first__5485;
var first__5485__$1 = cljs.core.first(seq__5484__$1);
var seq__5484__$2 = cljs.core.next(seq__5484__$1);
var attrs = first__5485__$1;
var children = seq__5484__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__5486_5490 = cljs.core.seq(children);
var chunk__5487_5491 = null;
var count__5488_5492 = (0);
var i__5489_5493 = (0);
while(true){
if((i__5489_5493 < count__5488_5492)){
var child_5494 = chunk__5487_5491.cljs$core$IIndexed$_nth$arity$2(null,i__5489_5493);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_5494) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_5494)));

var G__5495 = seq__5486_5490;
var G__5496 = chunk__5487_5491;
var G__5497 = count__5488_5492;
var G__5498 = (i__5489_5493 + (1));
seq__5486_5490 = G__5495;
chunk__5487_5491 = G__5496;
count__5488_5492 = G__5497;
i__5489_5493 = G__5498;
continue;
} else {
var temp__5457__auto___5499 = cljs.core.seq(seq__5486_5490);
if(temp__5457__auto___5499){
var seq__5486_5500__$1 = temp__5457__auto___5499;
if(cljs.core.chunked_seq_QMARK_(seq__5486_5500__$1)){
var c__18333__auto___5501 = cljs.core.chunk_first(seq__5486_5500__$1);
var G__5502 = cljs.core.chunk_rest(seq__5486_5500__$1);
var G__5503 = c__18333__auto___5501;
var G__5504 = cljs.core.count(c__18333__auto___5501);
var G__5505 = (0);
seq__5486_5490 = G__5502;
chunk__5487_5491 = G__5503;
count__5488_5492 = G__5504;
i__5489_5493 = G__5505;
continue;
} else {
var child_5506 = cljs.core.first(seq__5486_5500__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_5506) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_5506)));

var G__5507 = cljs.core.next(seq__5486_5500__$1);
var G__5508 = null;
var G__5509 = (0);
var G__5510 = (0);
seq__5486_5490 = G__5507;
chunk__5487_5491 = G__5508;
count__5488_5492 = G__5509;
i__5489_5493 = G__5510;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__18288__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__5520(s__5521){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__5521__$1 = s__5521;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5521__$1);
if(temp__5457__auto__){
var s__5521__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5521__$2)){
var c__18286__auto__ = cljs.core.chunk_first(s__5521__$2);
var size__18287__auto__ = cljs.core.count(c__18286__auto__);
var b__5523 = cljs.core.chunk_buffer(size__18287__auto__);
if((function (){var i__5522 = (0);
while(true){
if((i__5522 < size__18287__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18286__auto__,i__5522);
cljs.core.chunk_append(b__5523,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__5539 = (i__5522 + (1));
i__5522 = G__5539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5523),shadow$cljs$devtools$client$console$iter__5520(cljs.core.chunk_rest(s__5521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5523),null);
}
} else {
var value = cljs.core.first(s__5521__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__5520(cljs.core.rest(s__5521__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__18288__auto__(s);
})()], null));
});

shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter";

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
});

shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__18288__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__5544(s__5545){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__5545__$1 = s__5545;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5545__$1);
if(temp__5457__auto__){
var s__5545__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5545__$2)){
var c__18286__auto__ = cljs.core.chunk_first(s__5545__$2);
var size__18287__auto__ = cljs.core.count(c__18286__auto__);
var b__5547 = cljs.core.chunk_buffer(size__18287__auto__);
if((function (){var i__5546 = (0);
while(true){
if((i__5546 < size__18287__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18286__auto__,i__5546);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__5547,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__5552 = (i__5546 + (1));
i__5546 = G__5552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5547),shadow$cljs$devtools$client$console$iter__5544(cljs.core.chunk_rest(s__5545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5547),null);
}
} else {
var key = cljs.core.first(s__5545__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__5544(cljs.core.rest(s__5545__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__18288__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e5549){var e = e5549;
return k;
}})());
})()], null));
});

shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter";

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
});

shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter";

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
});

shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter";

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
});

shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
});

shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter";

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
});

shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5457__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
var G__5560 = f;
G__5560.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__5560.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__5560.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__5560.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__5560.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__5560;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__5561_SHARP_){
return goog.object.get(p1__5561_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__17846__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

module.exports = shadow.cljs.devtools.client.console;
