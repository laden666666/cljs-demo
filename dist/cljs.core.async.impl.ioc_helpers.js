var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.core.async.impl.ioc_helpers.js"] = true;

goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294 = (function (f,meta10295){
this.f = f;
this.meta10295 = meta10295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10296,meta10295__$1){
var self__ = this;
var _10296__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294(self__.f,meta10295__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10296){
var self__ = this;
var _10296__$1 = this;
return self__.meta10295;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta10295","meta10295",-156631952,null)], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers10294";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers10294");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers10294 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers10294(f__$1,meta10295){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294(f__$1,meta10295));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers10294(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__10297 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__10297.cljs$core$IFn$_invoke$arity$1 ? fexpr__10297.cljs$core$IFn$_invoke$arity$1(state) : fexpr__10297.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e10298){if((e10298 instanceof Object)){
var ex = e10298;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e10298;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5455__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_10302_10304 = state;
(statearr_10302_10304[(2)] = x);

(statearr_10302_10304[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5455__auto__)){
var cb = temp__5455__auto__;
var statearr_10303_10305 = state;
(statearr_10303_10305[(2)] = cljs.core.deref(cb));

(statearr_10303_10305[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5455__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_10306_10308 = state;
(statearr_10306_10308[(2)] = ret_val);

(statearr_10306_10308[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5455__auto__)){
var cb = temp__5455__auto__;
var statearr_10307_10309 = state;
(statearr_10307_10309[(2)] = cljs.core.deref(cb));

(statearr_10307_10309[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19488__auto__,k__19489__auto__){
var self__ = this;
var this__19488__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__19488__auto____$1,k__19489__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19490__auto__,k10311,else__19491__auto__){
var self__ = this;
var this__19490__auto____$1 = this;
var G__10315 = k10311;
var G__10315__$1 = (((G__10315 instanceof cljs.core.Keyword))?G__10315.fqn:null);
switch (G__10315__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10311,else__19491__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19502__auto__,writer__19503__auto__,opts__19504__auto__){
var self__ = this;
var this__19502__auto____$1 = this;
var pr_pair__19505__auto__ = ((function (this__19502__auto____$1){
return (function (keyval__19506__auto__){
return cljs.core.pr_sequential_writer(writer__19503__auto__,cljs.core.pr_writer,""," ","",opts__19504__auto__,keyval__19506__auto__);
});})(this__19502__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__19503__auto__,pr_pair__19505__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__19504__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10310){
var self__ = this;
var G__10310__$1 = this;
return (new cljs.core.RecordIter((0),G__10310__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19486__auto__){
var self__ = this;
var this__19486__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19483__auto__){
var self__ = this;
var this__19483__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19492__auto__){
var self__ = this;
var this__19492__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19484__auto__){
var self__ = this;
var this__19484__auto____$1 = this;
var h__17954__auto__ = self__.__hash;
if(!((h__17954__auto__ == null))){
return h__17954__auto__;
} else {
var h__17954__auto____$1 = (function (){var fexpr__10316 = ((function (h__17954__auto__,this__19484__auto____$1){
return (function (coll__19485__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll(coll__19485__auto__));
});})(h__17954__auto__,this__19484__auto____$1))
;
return fexpr__10316(this__19484__auto____$1);
})();
self__.__hash = h__17954__auto____$1;

return h__17954__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10312,other10313){
var self__ = this;
var this10312__$1 = this;
return (!((other10313 == null))) && ((this10312__$1.constructor === other10313.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10312__$1.catch_block,other10313.catch_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10312__$1.catch_exception,other10313.catch_exception)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10312__$1.finally_block,other10313.finally_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10312__$1.continue_block,other10313.continue_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10312__$1.prev,other10313.prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10312__$1.__extmap,other10313.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19497__auto__,k__19498__auto__){
var self__ = this;
var this__19497__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__19498__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__19497__auto____$1),self__.__meta),k__19498__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__19498__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19495__auto__,k__19496__auto__,G__10310){
var self__ = this;
var this__19495__auto____$1 = this;
var pred__10321 = cljs.core.keyword_identical_QMARK_;
var expr__10322 = k__19496__auto__;
if(cljs.core.truth_((function (){var G__10324 = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748);
var G__10325 = expr__10322;
return (pred__10321.cljs$core$IFn$_invoke$arity$2 ? pred__10321.cljs$core$IFn$_invoke$arity$2(G__10324,G__10325) : pred__10321.call(null,G__10324,G__10325));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__10310,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10326 = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795);
var G__10327 = expr__10322;
return (pred__10321.cljs$core$IFn$_invoke$arity$2 ? pred__10321.cljs$core$IFn$_invoke$arity$2(G__10326,G__10327) : pred__10321.call(null,G__10326,G__10327));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__10310,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10328 = new cljs.core.Keyword(null,"finally-block","finally-block",832982472);
var G__10329 = expr__10322;
return (pred__10321.cljs$core$IFn$_invoke$arity$2 ? pred__10321.cljs$core$IFn$_invoke$arity$2(G__10328,G__10329) : pred__10321.call(null,G__10328,G__10329));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__10310,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10330 = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850);
var G__10331 = expr__10322;
return (pred__10321.cljs$core$IFn$_invoke$arity$2 ? pred__10321.cljs$core$IFn$_invoke$arity$2(G__10330,G__10331) : pred__10321.call(null,G__10330,G__10331));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__10310,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10332 = new cljs.core.Keyword(null,"prev","prev",-1597069226);
var G__10333 = expr__10322;
return (pred__10321.cljs$core$IFn$_invoke$arity$2 ? pred__10321.cljs$core$IFn$_invoke$arity$2(G__10332,G__10333) : pred__10321.call(null,G__10332,G__10333));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__10310,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__19496__auto__,G__10310),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19500__auto__){
var self__ = this;
var this__19500__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19487__auto__,G__10310){
var self__ = this;
var this__19487__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__10310,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19493__auto__,entry__19494__auto__){
var self__ = this;
var this__19493__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__19494__auto__)){
return cljs.core._assoc(this__19493__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19494__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__19494__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__19493__auto____$1,entry__19494__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__18180__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__18180__auto__,writer__18181__auto__){
return cljs.core._write(writer__18181__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__10314){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__10314),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__10314),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__10314),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__10314),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__10314),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10314,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], 0))),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_10375 = state;
(statearr_10375[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,(4))));

return statearr_10375;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,(4));
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,(5));
if(cljs.core.truth_((function (){var and__17838__auto__ = exception;
if(cljs.core.truth_(and__17838__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__17838__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = exception;
if(cljs.core.truth_(and__17838__auto__)){
var and__17838__auto____$1 = catch_block;
if(cljs.core.truth_(and__17838__auto____$1)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__17838__auto____$1;
}
} else {
return and__17838__auto__;
}
})())){
var statearr_10376 = state;
(statearr_10376[(1)] = catch_block);

(statearr_10376[(2)] = exception);

(statearr_10376[(5)] = null);

(statearr_10376[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null], 0)));

return statearr_10376;
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = exception;
if(cljs.core.truth_(and__17838__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__17838__auto__;
}
})())){
var statearr_10377_10381 = state;
(statearr_10377_10381[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__10382 = state;
state = G__10382;
continue;
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = exception;
if(cljs.core.truth_(and__17838__auto__)){
var and__17838__auto____$1 = cljs.core.not(catch_block);
if(and__17838__auto____$1){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__17838__auto____$1;
}
} else {
return and__17838__auto__;
}
})())){
var statearr_10378 = state;
(statearr_10378[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_10378[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_10378;
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = cljs.core.not(exception);
if(and__17838__auto__){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__17838__auto__;
}
})())){
var statearr_10379 = state;
(statearr_10379[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_10379[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_10379;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_10380 = state;
(statearr_10380[(1)] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_10380[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_10380;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

module.exports = cljs.core.async.impl.ioc_helpers;
