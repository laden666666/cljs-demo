var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.repl.js"] = true;

goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__8826){
var map__8827 = p__8826;
var map__8827__$1 = ((((!((map__8827 == null)))?((((map__8827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8827):map__8827);
var m = map__8827__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8827__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8827__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8831_8870 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8832_8871 = null;
var count__8833_8872 = (0);
var i__8834_8873 = (0);
while(true){
if((i__8834_8873 < count__8833_8872)){
var f_8874 = chunk__8832_8871.cljs$core$IIndexed$_nth$arity$2(null,i__8834_8873);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_8874], 0));

var G__8875 = seq__8831_8870;
var G__8876 = chunk__8832_8871;
var G__8877 = count__8833_8872;
var G__8878 = (i__8834_8873 + (1));
seq__8831_8870 = G__8875;
chunk__8832_8871 = G__8876;
count__8833_8872 = G__8877;
i__8834_8873 = G__8878;
continue;
} else {
var temp__5457__auto___8879 = cljs.core.seq(seq__8831_8870);
if(temp__5457__auto___8879){
var seq__8831_8880__$1 = temp__5457__auto___8879;
if(cljs.core.chunked_seq_QMARK_(seq__8831_8880__$1)){
var c__18333__auto___8881 = cljs.core.chunk_first(seq__8831_8880__$1);
var G__8882 = cljs.core.chunk_rest(seq__8831_8880__$1);
var G__8883 = c__18333__auto___8881;
var G__8884 = cljs.core.count(c__18333__auto___8881);
var G__8885 = (0);
seq__8831_8870 = G__8882;
chunk__8832_8871 = G__8883;
count__8833_8872 = G__8884;
i__8834_8873 = G__8885;
continue;
} else {
var f_8886 = cljs.core.first(seq__8831_8880__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_8886], 0));

var G__8887 = cljs.core.next(seq__8831_8880__$1);
var G__8888 = null;
var G__8889 = (0);
var G__8890 = (0);
seq__8831_8870 = G__8887;
chunk__8832_8871 = G__8888;
count__8833_8872 = G__8889;
i__8834_8873 = G__8890;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8891 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17846__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_8891], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_8891)))?cljs.core.second(arglists_8891):arglists_8891)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8846_8892 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8847_8893 = null;
var count__8848_8894 = (0);
var i__8849_8895 = (0);
while(true){
if((i__8849_8895 < count__8848_8894)){
var vec__8856_8896 = chunk__8847_8893.cljs$core$IIndexed$_nth$arity$2(null,i__8849_8895);
var name_8897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856_8896,(0),null);
var map__8859_8898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856_8896,(1),null);
var map__8859_8899__$1 = ((((!((map__8859_8898 == null)))?((((map__8859_8898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8859_8898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8859_8898):map__8859_8898);
var doc_8900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8859_8899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8859_8899__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_8897], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_8901], 0));

if(cljs.core.truth_(doc_8900)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_8900], 0));
} else {
}

var G__8902 = seq__8846_8892;
var G__8903 = chunk__8847_8893;
var G__8904 = count__8848_8894;
var G__8905 = (i__8849_8895 + (1));
seq__8846_8892 = G__8902;
chunk__8847_8893 = G__8903;
count__8848_8894 = G__8904;
i__8849_8895 = G__8905;
continue;
} else {
var temp__5457__auto___8906 = cljs.core.seq(seq__8846_8892);
if(temp__5457__auto___8906){
var seq__8846_8907__$1 = temp__5457__auto___8906;
if(cljs.core.chunked_seq_QMARK_(seq__8846_8907__$1)){
var c__18333__auto___8908 = cljs.core.chunk_first(seq__8846_8907__$1);
var G__8909 = cljs.core.chunk_rest(seq__8846_8907__$1);
var G__8910 = c__18333__auto___8908;
var G__8911 = cljs.core.count(c__18333__auto___8908);
var G__8912 = (0);
seq__8846_8892 = G__8909;
chunk__8847_8893 = G__8910;
count__8848_8894 = G__8911;
i__8849_8895 = G__8912;
continue;
} else {
var vec__8861_8913 = cljs.core.first(seq__8846_8907__$1);
var name_8914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8861_8913,(0),null);
var map__8864_8915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8861_8913,(1),null);
var map__8864_8916__$1 = ((((!((map__8864_8915 == null)))?((((map__8864_8915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8864_8915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8864_8915):map__8864_8915);
var doc_8917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8864_8916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8864_8916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_8914], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_8918], 0));

if(cljs.core.truth_(doc_8917)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_8917], 0));
} else {
}

var G__8919 = cljs.core.next(seq__8846_8907__$1);
var G__8920 = null;
var G__8921 = (0);
var G__8922 = (0);
seq__8846_8892 = G__8919;
chunk__8847_8893 = G__8920;
count__8848_8894 = G__8921;
i__8849_8895 = G__8922;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__8866 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__8867 = null;
var count__8868 = (0);
var i__8869 = (0);
while(true){
if((i__8869 < count__8868)){
var role = chunk__8867.cljs$core$IIndexed$_nth$arity$2(null,i__8869);
var temp__5457__auto___8931__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___8931__$1)){
var spec_8932 = temp__5457__auto___8931__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_8932)], 0));
} else {
}

var G__8933 = seq__8866;
var G__8934 = chunk__8867;
var G__8935 = count__8868;
var G__8936 = (i__8869 + (1));
seq__8866 = G__8933;
chunk__8867 = G__8934;
count__8868 = G__8935;
i__8869 = G__8936;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__8866);
if(temp__5457__auto____$1){
var seq__8866__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__8866__$1)){
var c__18333__auto__ = cljs.core.chunk_first(seq__8866__$1);
var G__8937 = cljs.core.chunk_rest(seq__8866__$1);
var G__8938 = c__18333__auto__;
var G__8939 = cljs.core.count(c__18333__auto__);
var G__8940 = (0);
seq__8866 = G__8937;
chunk__8867 = G__8938;
count__8868 = G__8939;
i__8869 = G__8940;
continue;
} else {
var role = cljs.core.first(seq__8866__$1);
var temp__5457__auto___8941__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___8941__$2)){
var spec_8942 = temp__5457__auto___8941__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_8942)], 0));
} else {
}

var G__8943 = cljs.core.next(seq__8866__$1);
var G__8944 = null;
var G__8945 = (0);
var G__8946 = (0);
seq__8866 = G__8943;
chunk__8867 = G__8944;
count__8868 = G__8945;
i__8869 = G__8946;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

module.exports = cljs.repl;
