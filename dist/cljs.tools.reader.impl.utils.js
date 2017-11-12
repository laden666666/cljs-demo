var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./clojure.string.js");
require("./goog.string.string.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.tools.reader.impl.utils.js"] = true;

goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19488__auto__,k__19489__auto__){
var self__ = this;
var this__19488__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__19488__auto____$1,k__19489__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19490__auto__,k5666,else__19491__auto__){
var self__ = this;
var this__19490__auto____$1 = this;
var G__5670 = k5666;
var G__5670__$1 = (((G__5670 instanceof cljs.core.Keyword))?G__5670.fqn:null);
switch (G__5670__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5666,else__19491__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19502__auto__,writer__19503__auto__,opts__19504__auto__){
var self__ = this;
var this__19502__auto____$1 = this;
var pr_pair__19505__auto__ = ((function (this__19502__auto____$1){
return (function (keyval__19506__auto__){
return cljs.core.pr_sequential_writer(writer__19503__auto__,cljs.core.pr_writer,""," ","",opts__19504__auto__,keyval__19506__auto__);
});})(this__19502__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__19503__auto__,pr_pair__19505__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__19504__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5665){
var self__ = this;
var G__5665__$1 = this;
return (new cljs.core.RecordIter((0),G__5665__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19486__auto__){
var self__ = this;
var this__19486__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19483__auto__){
var self__ = this;
var this__19483__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19492__auto__){
var self__ = this;
var this__19492__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19484__auto__){
var self__ = this;
var this__19484__auto____$1 = this;
var h__17954__auto__ = self__.__hash;
if(!((h__17954__auto__ == null))){
return h__17954__auto__;
} else {
var h__17954__auto____$1 = (function (){var fexpr__5671 = ((function (h__17954__auto__,this__19484__auto____$1){
return (function (coll__19485__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll(coll__19485__auto__));
});})(h__17954__auto__,this__19484__auto____$1))
;
return fexpr__5671(this__19484__auto____$1);
})();
self__.__hash = h__17954__auto____$1;

return h__17954__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5667,other5668){
var self__ = this;
var this5667__$1 = this;
return (!((other5668 == null))) && ((this5667__$1.constructor === other5668.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5667__$1.splicing_QMARK_,other5668.splicing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5667__$1.form,other5668.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5667__$1.__extmap,other5668.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19497__auto__,k__19498__auto__){
var self__ = this;
var this__19497__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__19498__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__19497__auto____$1),self__.__meta),k__19498__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__19498__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19495__auto__,k__19496__auto__,G__5665){
var self__ = this;
var this__19495__auto____$1 = this;
var pred__5672 = cljs.core.keyword_identical_QMARK_;
var expr__5673 = k__19496__auto__;
if(cljs.core.truth_((function (){var G__5675 = new cljs.core.Keyword(null,"splicing?","splicing?",-428596366);
var G__5676 = expr__5673;
return (pred__5672.cljs$core$IFn$_invoke$arity$2 ? pred__5672.cljs$core$IFn$_invoke$arity$2(G__5675,G__5676) : pred__5672.call(null,G__5675,G__5676));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__5665,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5677 = new cljs.core.Keyword(null,"form","form",-1624062471);
var G__5678 = expr__5673;
return (pred__5672.cljs$core$IFn$_invoke$arity$2 ? pred__5672.cljs$core$IFn$_invoke$arity$2(G__5677,G__5678) : pred__5672.call(null,G__5677,G__5678));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__5665,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__19496__auto__,G__5665),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19500__auto__){
var self__ = this;
var this__19500__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19487__auto__,G__5665){
var self__ = this;
var this__19487__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__5665,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19493__auto__,entry__19494__auto__){
var self__ = this;
var this__19493__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__19494__auto__)){
return cljs.core._assoc(this__19493__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19494__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19494__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__19493__auto____$1,entry__19494__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__18180__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__18180__auto__,writer__18181__auto__){
return cljs.core._write(writer__18181__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__5669){
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__5669),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__5669),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5669,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471)], 0))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__18288__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__5684(s__5685){
return (new cljs.core.LazySeq(null,(function (){
var s__5685__$1 = s__5685;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5685__$1);
if(temp__5457__auto__){
var s__5685__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5685__$2)){
var c__18286__auto__ = cljs.core.chunk_first(s__5685__$2);
var size__18287__auto__ = cljs.core.count(c__18286__auto__);
var b__5687 = cljs.core.chunk_buffer(size__18287__auto__);
if((function (){var i__5686 = (0);
while(true){
if((i__5686 < size__18287__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18286__auto__,i__5686);
cljs.core.chunk_append(b__5687,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__5690 = (function (){var fexpr__5693 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__5693.cljs$core$IFn$_invoke$arity$1 ? fexpr__5693.cljs$core$IFn$_invoke$arity$1(key) : fexpr__5693.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5690,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5690,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key));

var G__5699 = (i__5686 + (1));
i__5686 = G__5699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5687),cljs$tools$reader$impl$utils$namespace_keys_$_iter__5684(cljs.core.chunk_rest(s__5685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5687),null);
}
} else {
var key = cljs.core.first(s__5685__$2);
return cljs.core.cons(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__5694 = (function (){var fexpr__5697 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__5697.cljs$core$IFn$_invoke$arity$1 ? fexpr__5697.cljs$core$IFn$_invoke$arity$1(key) : fexpr__5697.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5694,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5694,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__5684(cljs.core.rest(s__5685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18288__auto__(keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__5700){
var vec__5701 = p__5700;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5701,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5701,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});

module.exports = cljs.tools.reader.impl.utils;
