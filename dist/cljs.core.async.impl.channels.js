var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.buffers.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.core.async.impl.channels.js"] = true;

goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299 = (function (val,meta10300){
this.val = val;
this.meta10300 = meta10300;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10301,meta10300__$1){
var self__ = this;
var _10301__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299(self__.val,meta10300__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10301){
var self__ = this;
var _10301__$1 = this;
return self__.meta10300;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta10300","meta10300",1446226600,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels10299";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels10299");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels10299 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels10299(val__$1,meta10300){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299(val__$1,meta10300));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels10299(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__18183__auto__ = (((this$ == null))?null:this$);
var m__18184__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__18184__auto__.call(null,this$));
} else {
var m__18184__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__18184__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_10342 = self__.puts.pop();
if((putter_10342 == null)){
} else {
var put_handler_10343 = putter_10342.handler;
var val_10344 = putter_10342.val;
if(put_handler_10343.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_10345 = put_handler_10343.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_10345,put_handler_10343,val_10344,putter_10342,this$__$1){
return (function (){
return (put_cb_10345.cljs$core$IFn$_invoke$arity$1 ? put_cb_10345.cljs$core$IFn$_invoke$arity$1(true) : put_cb_10345.call(null,true));
});})(put_cb_10345,put_handler_10343,val_10344,putter_10342,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = self__.buf;
if(cljs.core.truth_(and__17838__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__17838__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__10346 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__10346;
continue;
} else {
var G__10347 = takers;
takers = G__10347;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__10317_10348 = cljs.core.seq(take_cbs);
var chunk__10318_10349 = null;
var count__10319_10350 = (0);
var i__10320_10351 = (0);
while(true){
if((i__10320_10351 < count__10319_10350)){
var f_10352 = chunk__10318_10349.cljs$core$IIndexed$_nth$arity$2(null,i__10320_10351);
cljs.core.async.impl.dispatch.run(f_10352);

var G__10353 = seq__10317_10348;
var G__10354 = chunk__10318_10349;
var G__10355 = count__10319_10350;
var G__10356 = (i__10320_10351 + (1));
seq__10317_10348 = G__10353;
chunk__10318_10349 = G__10354;
count__10319_10350 = G__10355;
i__10320_10351 = G__10356;
continue;
} else {
var temp__5457__auto___10357 = cljs.core.seq(seq__10317_10348);
if(temp__5457__auto___10357){
var seq__10317_10358__$1 = temp__5457__auto___10357;
if(cljs.core.chunked_seq_QMARK_(seq__10317_10358__$1)){
var c__18333__auto___10359 = cljs.core.chunk_first(seq__10317_10358__$1);
var G__10360 = cljs.core.chunk_rest(seq__10317_10358__$1);
var G__10361 = c__18333__auto___10359;
var G__10362 = cljs.core.count(c__18333__auto___10359);
var G__10363 = (0);
seq__10317_10348 = G__10360;
chunk__10318_10349 = G__10361;
count__10319_10350 = G__10362;
i__10320_10351 = G__10363;
continue;
} else {
var f_10364 = cljs.core.first(seq__10317_10358__$1);
cljs.core.async.impl.dispatch.run(f_10364);

var G__10365 = cljs.core.next(seq__10317_10358__$1);
var G__10366 = null;
var G__10367 = (0);
var G__10368 = (0);
seq__10317_10348 = G__10365;
chunk__10318_10349 = G__10366;
count__10319_10350 = G__10367;
i__10320_10351 = G__10368;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__5455__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__10334 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__17838__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__17838__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__17838__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__10369 = cbs__$1;
cbs = G__10369;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10334,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10334,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

var seq__10337_10370 = cljs.core.seq(cbs);
var chunk__10338_10371 = null;
var count__10339_10372 = (0);
var i__10340_10373 = (0);
while(true){
if((i__10340_10373 < count__10339_10372)){
var cb_10374 = chunk__10338_10371.cljs$core$IIndexed$_nth$arity$2(null,i__10340_10373);
cljs.core.async.impl.dispatch.run(((function (seq__10337_10370,chunk__10338_10371,count__10339_10372,i__10340_10373,cb_10374,val,vec__10334,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_10374.cljs$core$IFn$_invoke$arity$1 ? cb_10374.cljs$core$IFn$_invoke$arity$1(true) : cb_10374.call(null,true));
});})(seq__10337_10370,chunk__10338_10371,count__10339_10372,i__10340_10373,cb_10374,val,vec__10334,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__10383 = seq__10337_10370;
var G__10384 = chunk__10338_10371;
var G__10385 = count__10339_10372;
var G__10386 = (i__10340_10373 + (1));
seq__10337_10370 = G__10383;
chunk__10338_10371 = G__10384;
count__10339_10372 = G__10385;
i__10340_10373 = G__10386;
continue;
} else {
var temp__5457__auto___10387 = cljs.core.seq(seq__10337_10370);
if(temp__5457__auto___10387){
var seq__10337_10388__$1 = temp__5457__auto___10387;
if(cljs.core.chunked_seq_QMARK_(seq__10337_10388__$1)){
var c__18333__auto___10389 = cljs.core.chunk_first(seq__10337_10388__$1);
var G__10390 = cljs.core.chunk_rest(seq__10337_10388__$1);
var G__10391 = c__18333__auto___10389;
var G__10392 = cljs.core.count(c__18333__auto___10389);
var G__10393 = (0);
seq__10337_10370 = G__10390;
chunk__10338_10371 = G__10391;
count__10339_10372 = G__10392;
i__10340_10373 = G__10393;
continue;
} else {
var cb_10394 = cljs.core.first(seq__10337_10388__$1);
cljs.core.async.impl.dispatch.run(((function (seq__10337_10370,chunk__10338_10371,count__10339_10372,i__10340_10373,cb_10394,seq__10337_10388__$1,temp__5457__auto___10387,val,vec__10334,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_10394.cljs$core$IFn$_invoke$arity$1 ? cb_10394.cljs$core$IFn$_invoke$arity$1(true) : cb_10394.call(null,true));
});})(seq__10337_10370,chunk__10338_10371,count__10339_10372,i__10340_10373,cb_10394,seq__10337_10388__$1,temp__5457__auto___10387,val,vec__10334,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__10395 = cljs.core.next(seq__10337_10388__$1);
var G__10396 = null;
var G__10397 = (0);
var G__10398 = (0);
seq__10337_10370 = G__10395;
chunk__10338_10371 = G__10396;
count__10339_10372 = G__10397;
i__10340_10373 = G__10398;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__17838__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__17838__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__17838__auto__;
}
})())){
var has_val = (function (){var and__17838__auto__ = self__.buf;
if(cljs.core.truth_(and__17838__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__17838__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__17838__auto__ = self__.buf;
if(cljs.core.truth_(and__17838__auto__)){
return (self__.puts.length === (0));
} else {
return and__17838__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_10399 = self__.takes.pop();
if((taker_10399 == null)){
} else {
if(taker_10399.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_10400 = taker_10399.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_10401 = (cljs.core.truth_((function (){var and__17838__auto__ = self__.buf;
if(cljs.core.truth_(and__17838__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__17838__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_10400,val_10401,taker_10399,this$__$1){
return (function (){
return (take_cb_10400.cljs$core$IFn$_invoke$arity$1 ? take_cb_10400.cljs$core$IFn$_invoke$arity$1(val_10401) : take_cb_10400.call(null,val_10401));
});})(take_cb_10400,val_10401,taker_10399,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__10402 = (function (){var or__17846__auto__ = exh;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__10402.cljs$core$IFn$_invoke$arity$1 ? fexpr__10402.cljs$core$IFn$_invoke$arity$1(t) : fexpr__10402.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__10404 = arguments.length;
switch (G__10404) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__10408 = null;
var G__10408__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e10405){var t = e10405;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__10408__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e10406){var t = e10406;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__10408 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__10408__1.call(this,buf__$1);
case 2:
return G__10408__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10408.cljs$core$IFn$_invoke$arity$1 = G__10408__1;
G__10408.cljs$core$IFn$_invoke$arity$2 = G__10408__2;
return G__10408;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


module.exports = cljs.core.async.impl.channels;
