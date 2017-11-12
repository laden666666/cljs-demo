var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./goog.object.object.js");
require("./cljs.tools.reader.js");
require("./cljs.tools.reader.edn.js");
require("./goog.string.stringbuffer.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.reader.js"] = true;

goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__8855 = b.append("0");
b = G__8855;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__17838__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__17838__auto__)){
var or__17846__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__17838__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__8923 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8923,(10),null);
var v = vec__8923;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__17846__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__8926 = months__$1;
var G__8927 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__8926,G__8927) : cljs.reader.days_in_month.call(null,G__8926,G__8927));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5455__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__8928 = temp__5455__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__8947_8969 = cljs.core.seq(form);
var chunk__8948_8970 = null;
var count__8949_8971 = (0);
var i__8950_8972 = (0);
while(true){
if((i__8950_8972 < count__8949_8971)){
var x_8973 = chunk__8948_8970.cljs$core$IIndexed$_nth$arity$2(null,i__8950_8972);
arr.push(x_8973);

var G__8974 = seq__8947_8969;
var G__8975 = chunk__8948_8970;
var G__8976 = count__8949_8971;
var G__8977 = (i__8950_8972 + (1));
seq__8947_8969 = G__8974;
chunk__8948_8970 = G__8975;
count__8949_8971 = G__8976;
i__8950_8972 = G__8977;
continue;
} else {
var temp__5457__auto___8981 = cljs.core.seq(seq__8947_8969);
if(temp__5457__auto___8981){
var seq__8947_8982__$1 = temp__5457__auto___8981;
if(cljs.core.chunked_seq_QMARK_(seq__8947_8982__$1)){
var c__18333__auto___8983 = cljs.core.chunk_first(seq__8947_8982__$1);
var G__8984 = cljs.core.chunk_rest(seq__8947_8982__$1);
var G__8985 = c__18333__auto___8983;
var G__8986 = cljs.core.count(c__18333__auto___8983);
var G__8987 = (0);
seq__8947_8969 = G__8984;
chunk__8948_8970 = G__8985;
count__8949_8971 = G__8986;
i__8950_8972 = G__8987;
continue;
} else {
var x_8988 = cljs.core.first(seq__8947_8982__$1);
arr.push(x_8988);

var G__8989 = cljs.core.next(seq__8947_8982__$1);
var G__8990 = null;
var G__8991 = (0);
var G__8992 = (0);
seq__8947_8969 = G__8989;
chunk__8948_8970 = G__8990;
count__8949_8971 = G__8991;
i__8950_8972 = G__8992;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = {};
var seq__8953_8993 = cljs.core.seq(form);
var chunk__8954_8994 = null;
var count__8955_8995 = (0);
var i__8956_8996 = (0);
while(true){
if((i__8956_8996 < count__8955_8995)){
var vec__8957_8997 = chunk__8954_8994.cljs$core$IIndexed$_nth$arity$2(null,i__8956_8996);
var k_8998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8957_8997,(0),null);
var v_8999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8957_8997,(1),null);
var G__8960_9000 = obj;
var G__8961_9001 = cljs.core.name(k_8998);
var G__8962_9002 = v_8999;
goog.object.set(G__8960_9000,G__8961_9001,G__8962_9002);

var G__9003 = seq__8953_8993;
var G__9004 = chunk__8954_8994;
var G__9005 = count__8955_8995;
var G__9006 = (i__8956_8996 + (1));
seq__8953_8993 = G__9003;
chunk__8954_8994 = G__9004;
count__8955_8995 = G__9005;
i__8956_8996 = G__9006;
continue;
} else {
var temp__5457__auto___9007 = cljs.core.seq(seq__8953_8993);
if(temp__5457__auto___9007){
var seq__8953_9008__$1 = temp__5457__auto___9007;
if(cljs.core.chunked_seq_QMARK_(seq__8953_9008__$1)){
var c__18333__auto___9009 = cljs.core.chunk_first(seq__8953_9008__$1);
var G__9010 = cljs.core.chunk_rest(seq__8953_9008__$1);
var G__9011 = c__18333__auto___9009;
var G__9012 = cljs.core.count(c__18333__auto___9009);
var G__9013 = (0);
seq__8953_8993 = G__9010;
chunk__8954_8994 = G__9011;
count__8955_8995 = G__9012;
i__8956_8996 = G__9013;
continue;
} else {
var vec__8963_9014 = cljs.core.first(seq__8953_9008__$1);
var k_9015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8963_9014,(0),null);
var v_9016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8963_9014,(1),null);
var G__8966_9017 = obj;
var G__8967_9018 = cljs.core.name(k_9015);
var G__8968_9019 = v_9016;
goog.object.set(G__8966_9017,G__8967_9018,G__8968_9019);

var G__9020 = cljs.core.next(seq__8953_9008__$1);
var G__9021 = null;
var G__9022 = (0);
var G__9023 = (0);
seq__8953_8993 = G__9020;
chunk__8954_8994 = G__9021;
count__8955_8995 = G__9022;
i__8956_8996 = G__9023;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__9025 = arguments.length;
switch (G__9025) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__9026,reader){
var map__9027 = p__9026;
var map__9027__$1 = ((((!((map__9027 == null)))?((((map__9027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9027):map__9027);
var opts = map__9027__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9027__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__9027,map__9027__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__9027,map__9027__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__9031 = arguments.length;
switch (G__9031) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

module.exports = cljs.reader;
