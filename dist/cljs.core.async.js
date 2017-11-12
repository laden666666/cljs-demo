var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.core.async.js"] = true;

goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10517 = arguments.length;
switch (G__10517) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10518 = (function (f,blockable,meta10519){
this.f = f;
this.blockable = blockable;
this.meta10519 = meta10519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10520,meta10519__$1){
var self__ = this;
var _10520__$1 = this;
return (new cljs.core.async.t_cljs$core$async10518(self__.f,self__.blockable,meta10519__$1));
});

cljs.core.async.t_cljs$core$async10518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10520){
var self__ = this;
var _10520__$1 = this;
return self__.meta10519;
});

cljs.core.async.t_cljs$core$async10518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10519","meta10519",-748216782,null)], null);
});

cljs.core.async.t_cljs$core$async10518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10518";

cljs.core.async.t_cljs$core$async10518.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async10518");
});

cljs.core.async.__GT_t_cljs$core$async10518 = (function cljs$core$async$__GT_t_cljs$core$async10518(f__$1,blockable__$1,meta10519){
return (new cljs.core.async.t_cljs$core$async10518(f__$1,blockable__$1,meta10519));
});

}

return (new cljs.core.async.t_cljs$core$async10518(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10524 = arguments.length;
switch (G__10524) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10527 = arguments.length;
switch (G__10527) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10530 = arguments.length;
switch (G__10530) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_10532 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10532) : fn1.call(null,val_10532));
} else {
cljs.core.async.impl.dispatch.run(((function (val_10532,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10532) : fn1.call(null,val_10532));
});})(val_10532,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10534 = arguments.length;
switch (G__10534) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18399__auto___10536 = n;
var x_10537 = (0);
while(true){
if((x_10537 < n__18399__auto___10536)){
(a[x_10537] = (0));

var G__10538 = (x_10537 + (1));
x_10537 = G__10538;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__10539 = (i + (1));
i = G__10539;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async10540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10540 = (function (flag,meta10541){
this.flag = flag;
this.meta10541 = meta10541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10542,meta10541__$1){
var self__ = this;
var _10542__$1 = this;
return (new cljs.core.async.t_cljs$core$async10540(self__.flag,meta10541__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10542){
var self__ = this;
var _10542__$1 = this;
return self__.meta10541;
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10541","meta10541",-1475444388,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10540";

cljs.core.async.t_cljs$core$async10540.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async10540");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10540 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10540(flag__$1,meta10541){
return (new cljs.core.async.t_cljs$core$async10540(flag__$1,meta10541));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10540(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10543 = (function (flag,cb,meta10544){
this.flag = flag;
this.cb = cb;
this.meta10544 = meta10544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10545,meta10544__$1){
var self__ = this;
var _10545__$1 = this;
return (new cljs.core.async.t_cljs$core$async10543(self__.flag,self__.cb,meta10544__$1));
});

cljs.core.async.t_cljs$core$async10543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10545){
var self__ = this;
var _10545__$1 = this;
return self__.meta10544;
});

cljs.core.async.t_cljs$core$async10543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async10543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10544","meta10544",-1255975082,null)], null);
});

cljs.core.async.t_cljs$core$async10543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10543";

cljs.core.async.t_cljs$core$async10543.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async10543");
});

cljs.core.async.__GT_t_cljs$core$async10543 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10543(flag__$1,cb__$1,meta10544){
return (new cljs.core.async.t_cljs$core$async10543(flag__$1,cb__$1,meta10544));
});

}

return (new cljs.core.async.t_cljs$core$async10543(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10546_SHARP_){
var G__10548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10546_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10548) : fret.call(null,G__10548));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10547_SHARP_){
var G__10549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10547_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10549) : fret.call(null,G__10549));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__17846__auto__ = wport;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10550 = (i + (1));
i = G__10550;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17846__auto__ = ret;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__17838__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__17838__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__17838__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__18532__auto__ = [];
var len__18529__auto___10556 = arguments.length;
var i__18530__auto___10557 = (0);
while(true){
if((i__18530__auto___10557 < len__18529__auto___10556)){
args__18532__auto__.push((arguments[i__18530__auto___10557]));

var G__10558 = (i__18530__auto___10557 + (1));
i__18530__auto___10557 = G__10558;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((1) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18533__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10553){
var map__10554 = p__10553;
var map__10554__$1 = ((((!((map__10554 == null)))?((((map__10554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10554):map__10554);
var opts = map__10554__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10551){
var G__10552 = cljs.core.first(seq10551);
var seq10551__$1 = cljs.core.next(seq10551);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10552,seq10551__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10560 = arguments.length;
switch (G__10560) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10459__auto___10606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___10606){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___10606){
return (function (state_10584){
var state_val_10585 = (state_10584[(1)]);
if((state_val_10585 === (7))){
var inst_10580 = (state_10584[(2)]);
var state_10584__$1 = state_10584;
var statearr_10586_10607 = state_10584__$1;
(statearr_10586_10607[(2)] = inst_10580);

(statearr_10586_10607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (1))){
var state_10584__$1 = state_10584;
var statearr_10587_10608 = state_10584__$1;
(statearr_10587_10608[(2)] = null);

(statearr_10587_10608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (4))){
var inst_10563 = (state_10584[(7)]);
var inst_10563__$1 = (state_10584[(2)]);
var inst_10564 = (inst_10563__$1 == null);
var state_10584__$1 = (function (){var statearr_10588 = state_10584;
(statearr_10588[(7)] = inst_10563__$1);

return statearr_10588;
})();
if(cljs.core.truth_(inst_10564)){
var statearr_10589_10609 = state_10584__$1;
(statearr_10589_10609[(1)] = (5));

} else {
var statearr_10590_10610 = state_10584__$1;
(statearr_10590_10610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (13))){
var state_10584__$1 = state_10584;
var statearr_10591_10611 = state_10584__$1;
(statearr_10591_10611[(2)] = null);

(statearr_10591_10611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (6))){
var inst_10563 = (state_10584[(7)]);
var state_10584__$1 = state_10584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10584__$1,(11),to,inst_10563);
} else {
if((state_val_10585 === (3))){
var inst_10582 = (state_10584[(2)]);
var state_10584__$1 = state_10584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10584__$1,inst_10582);
} else {
if((state_val_10585 === (12))){
var state_10584__$1 = state_10584;
var statearr_10592_10612 = state_10584__$1;
(statearr_10592_10612[(2)] = null);

(statearr_10592_10612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (2))){
var state_10584__$1 = state_10584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10584__$1,(4),from);
} else {
if((state_val_10585 === (11))){
var inst_10573 = (state_10584[(2)]);
var state_10584__$1 = state_10584;
if(cljs.core.truth_(inst_10573)){
var statearr_10593_10613 = state_10584__$1;
(statearr_10593_10613[(1)] = (12));

} else {
var statearr_10594_10614 = state_10584__$1;
(statearr_10594_10614[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (9))){
var state_10584__$1 = state_10584;
var statearr_10595_10615 = state_10584__$1;
(statearr_10595_10615[(2)] = null);

(statearr_10595_10615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (5))){
var state_10584__$1 = state_10584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10596_10616 = state_10584__$1;
(statearr_10596_10616[(1)] = (8));

} else {
var statearr_10597_10617 = state_10584__$1;
(statearr_10597_10617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (14))){
var inst_10578 = (state_10584[(2)]);
var state_10584__$1 = state_10584;
var statearr_10598_10618 = state_10584__$1;
(statearr_10598_10618[(2)] = inst_10578);

(statearr_10598_10618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (10))){
var inst_10570 = (state_10584[(2)]);
var state_10584__$1 = state_10584;
var statearr_10599_10619 = state_10584__$1;
(statearr_10599_10619[(2)] = inst_10570);

(statearr_10599_10619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10585 === (8))){
var inst_10567 = cljs.core.async.close_BANG_(to);
var state_10584__$1 = state_10584;
var statearr_10600_10620 = state_10584__$1;
(statearr_10600_10620[(2)] = inst_10567);

(statearr_10600_10620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___10606))
;
return ((function (switch__10278__auto__,c__10459__auto___10606){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_10601 = [null,null,null,null,null,null,null,null];
(statearr_10601[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_10601[(1)] = (1));

return statearr_10601;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_10584){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10584);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10602){if((e10602 instanceof Object)){
var ex__10282__auto__ = e10602;
var statearr_10603_10621 = state_10584;
(statearr_10603_10621[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10622 = state_10584;
state_10584 = G__10622;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_10584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_10584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___10606))
})();
var state__10461__auto__ = (function (){var statearr_10604 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10604[(6)] = c__10459__auto___10606);

return statearr_10604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___10606))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__10623){
var vec__10624 = p__10623;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10624,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10624,(1),null);
var job = vec__10624;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10459__auto___10795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___10795,res,vec__10624,v,p,job,jobs,results){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___10795,res,vec__10624,v,p,job,jobs,results){
return (function (state_10631){
var state_val_10632 = (state_10631[(1)]);
if((state_val_10632 === (1))){
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10631__$1,(2),res,v);
} else {
if((state_val_10632 === (2))){
var inst_10628 = (state_10631[(2)]);
var inst_10629 = cljs.core.async.close_BANG_(res);
var state_10631__$1 = (function (){var statearr_10633 = state_10631;
(statearr_10633[(7)] = inst_10628);

return statearr_10633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10631__$1,inst_10629);
} else {
return null;
}
}
});})(c__10459__auto___10795,res,vec__10624,v,p,job,jobs,results))
;
return ((function (switch__10278__auto__,c__10459__auto___10795,res,vec__10624,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0 = (function (){
var statearr_10634 = [null,null,null,null,null,null,null,null];
(statearr_10634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__);

(statearr_10634[(1)] = (1));

return statearr_10634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1 = (function (state_10631){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10631);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10635){if((e10635 instanceof Object)){
var ex__10282__auto__ = e10635;
var statearr_10636_10796 = state_10631;
(statearr_10636_10796[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10797 = state_10631;
state_10631 = G__10797;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = function(state_10631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1.call(this,state_10631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___10795,res,vec__10624,v,p,job,jobs,results))
})();
var state__10461__auto__ = (function (){var statearr_10637 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10637[(6)] = c__10459__auto___10795);

return statearr_10637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___10795,res,vec__10624,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10638){
var vec__10639 = p__10638;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10639,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10639,(1),null);
var job = vec__10639;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__18399__auto___10798 = n;
var __10799 = (0);
while(true){
if((__10799 < n__18399__auto___10798)){
var G__10642_10800 = type;
var G__10642_10801__$1 = (((G__10642_10800 instanceof cljs.core.Keyword))?G__10642_10800.fqn:null);
switch (G__10642_10801__$1) {
case "compute":
var c__10459__auto___10803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10799,c__10459__auto___10803,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (__10799,c__10459__auto___10803,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async){
return (function (state_10655){
var state_val_10656 = (state_10655[(1)]);
if((state_val_10656 === (1))){
var state_10655__$1 = state_10655;
var statearr_10657_10804 = state_10655__$1;
(statearr_10657_10804[(2)] = null);

(statearr_10657_10804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10656 === (2))){
var state_10655__$1 = state_10655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10655__$1,(4),jobs);
} else {
if((state_val_10656 === (3))){
var inst_10653 = (state_10655[(2)]);
var state_10655__$1 = state_10655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10655__$1,inst_10653);
} else {
if((state_val_10656 === (4))){
var inst_10645 = (state_10655[(2)]);
var inst_10646 = process(inst_10645);
var state_10655__$1 = state_10655;
if(cljs.core.truth_(inst_10646)){
var statearr_10658_10805 = state_10655__$1;
(statearr_10658_10805[(1)] = (5));

} else {
var statearr_10659_10806 = state_10655__$1;
(statearr_10659_10806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10656 === (5))){
var state_10655__$1 = state_10655;
var statearr_10660_10807 = state_10655__$1;
(statearr_10660_10807[(2)] = null);

(statearr_10660_10807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10656 === (6))){
var state_10655__$1 = state_10655;
var statearr_10661_10808 = state_10655__$1;
(statearr_10661_10808[(2)] = null);

(statearr_10661_10808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10656 === (7))){
var inst_10651 = (state_10655[(2)]);
var state_10655__$1 = state_10655;
var statearr_10662_10809 = state_10655__$1;
(statearr_10662_10809[(2)] = inst_10651);

(statearr_10662_10809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10799,c__10459__auto___10803,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async))
;
return ((function (__10799,switch__10278__auto__,c__10459__auto___10803,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0 = (function (){
var statearr_10663 = [null,null,null,null,null,null,null];
(statearr_10663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__);

(statearr_10663[(1)] = (1));

return statearr_10663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1 = (function (state_10655){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10655);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10664){if((e10664 instanceof Object)){
var ex__10282__auto__ = e10664;
var statearr_10665_10810 = state_10655;
(statearr_10665_10810[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10811 = state_10655;
state_10655 = G__10811;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = function(state_10655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1.call(this,state_10655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__;
})()
;})(__10799,switch__10278__auto__,c__10459__auto___10803,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async))
})();
var state__10461__auto__ = (function (){var statearr_10666 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10666[(6)] = c__10459__auto___10803);

return statearr_10666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(__10799,c__10459__auto___10803,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async))
);


break;
case "async":
var c__10459__auto___10812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10799,c__10459__auto___10812,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (__10799,c__10459__auto___10812,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async){
return (function (state_10679){
var state_val_10680 = (state_10679[(1)]);
if((state_val_10680 === (1))){
var state_10679__$1 = state_10679;
var statearr_10681_10813 = state_10679__$1;
(statearr_10681_10813[(2)] = null);

(statearr_10681_10813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10680 === (2))){
var state_10679__$1 = state_10679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10679__$1,(4),jobs);
} else {
if((state_val_10680 === (3))){
var inst_10677 = (state_10679[(2)]);
var state_10679__$1 = state_10679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10679__$1,inst_10677);
} else {
if((state_val_10680 === (4))){
var inst_10669 = (state_10679[(2)]);
var inst_10670 = async(inst_10669);
var state_10679__$1 = state_10679;
if(cljs.core.truth_(inst_10670)){
var statearr_10682_10814 = state_10679__$1;
(statearr_10682_10814[(1)] = (5));

} else {
var statearr_10683_10815 = state_10679__$1;
(statearr_10683_10815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10680 === (5))){
var state_10679__$1 = state_10679;
var statearr_10684_10816 = state_10679__$1;
(statearr_10684_10816[(2)] = null);

(statearr_10684_10816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10680 === (6))){
var state_10679__$1 = state_10679;
var statearr_10685_10817 = state_10679__$1;
(statearr_10685_10817[(2)] = null);

(statearr_10685_10817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10680 === (7))){
var inst_10675 = (state_10679[(2)]);
var state_10679__$1 = state_10679;
var statearr_10686_10818 = state_10679__$1;
(statearr_10686_10818[(2)] = inst_10675);

(statearr_10686_10818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10799,c__10459__auto___10812,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async))
;
return ((function (__10799,switch__10278__auto__,c__10459__auto___10812,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0 = (function (){
var statearr_10687 = [null,null,null,null,null,null,null];
(statearr_10687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__);

(statearr_10687[(1)] = (1));

return statearr_10687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1 = (function (state_10679){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10679);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10688){if((e10688 instanceof Object)){
var ex__10282__auto__ = e10688;
var statearr_10689_10819 = state_10679;
(statearr_10689_10819[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10820 = state_10679;
state_10679 = G__10820;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = function(state_10679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1.call(this,state_10679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__;
})()
;})(__10799,switch__10278__auto__,c__10459__auto___10812,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async))
})();
var state__10461__auto__ = (function (){var statearr_10690 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10690[(6)] = c__10459__auto___10812);

return statearr_10690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(__10799,c__10459__auto___10812,G__10642_10800,G__10642_10801__$1,n__18399__auto___10798,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10642_10801__$1)].join('')));

}

var G__10821 = (__10799 + (1));
__10799 = G__10821;
continue;
} else {
}
break;
}

var c__10459__auto___10822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___10822,jobs,results,process,async){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___10822,jobs,results,process,async){
return (function (state_10712){
var state_val_10713 = (state_10712[(1)]);
if((state_val_10713 === (1))){
var state_10712__$1 = state_10712;
var statearr_10714_10823 = state_10712__$1;
(statearr_10714_10823[(2)] = null);

(statearr_10714_10823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10713 === (2))){
var state_10712__$1 = state_10712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10712__$1,(4),from);
} else {
if((state_val_10713 === (3))){
var inst_10710 = (state_10712[(2)]);
var state_10712__$1 = state_10712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10712__$1,inst_10710);
} else {
if((state_val_10713 === (4))){
var inst_10693 = (state_10712[(7)]);
var inst_10693__$1 = (state_10712[(2)]);
var inst_10694 = (inst_10693__$1 == null);
var state_10712__$1 = (function (){var statearr_10715 = state_10712;
(statearr_10715[(7)] = inst_10693__$1);

return statearr_10715;
})();
if(cljs.core.truth_(inst_10694)){
var statearr_10716_10824 = state_10712__$1;
(statearr_10716_10824[(1)] = (5));

} else {
var statearr_10717_10825 = state_10712__$1;
(statearr_10717_10825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10713 === (5))){
var inst_10696 = cljs.core.async.close_BANG_(jobs);
var state_10712__$1 = state_10712;
var statearr_10718_10826 = state_10712__$1;
(statearr_10718_10826[(2)] = inst_10696);

(statearr_10718_10826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10713 === (6))){
var inst_10693 = (state_10712[(7)]);
var inst_10698 = (state_10712[(8)]);
var inst_10698__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10700 = [inst_10693,inst_10698__$1];
var inst_10701 = (new cljs.core.PersistentVector(null,2,(5),inst_10699,inst_10700,null));
var state_10712__$1 = (function (){var statearr_10719 = state_10712;
(statearr_10719[(8)] = inst_10698__$1);

return statearr_10719;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10712__$1,(8),jobs,inst_10701);
} else {
if((state_val_10713 === (7))){
var inst_10708 = (state_10712[(2)]);
var state_10712__$1 = state_10712;
var statearr_10720_10827 = state_10712__$1;
(statearr_10720_10827[(2)] = inst_10708);

(statearr_10720_10827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10713 === (8))){
var inst_10698 = (state_10712[(8)]);
var inst_10703 = (state_10712[(2)]);
var state_10712__$1 = (function (){var statearr_10721 = state_10712;
(statearr_10721[(9)] = inst_10703);

return statearr_10721;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10712__$1,(9),results,inst_10698);
} else {
if((state_val_10713 === (9))){
var inst_10705 = (state_10712[(2)]);
var state_10712__$1 = (function (){var statearr_10722 = state_10712;
(statearr_10722[(10)] = inst_10705);

return statearr_10722;
})();
var statearr_10723_10828 = state_10712__$1;
(statearr_10723_10828[(2)] = null);

(statearr_10723_10828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___10822,jobs,results,process,async))
;
return ((function (switch__10278__auto__,c__10459__auto___10822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0 = (function (){
var statearr_10724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__);

(statearr_10724[(1)] = (1));

return statearr_10724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1 = (function (state_10712){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10712);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10725){if((e10725 instanceof Object)){
var ex__10282__auto__ = e10725;
var statearr_10726_10829 = state_10712;
(statearr_10726_10829[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10830 = state_10712;
state_10712 = G__10830;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = function(state_10712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1.call(this,state_10712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___10822,jobs,results,process,async))
})();
var state__10461__auto__ = (function (){var statearr_10727 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10727[(6)] = c__10459__auto___10822);

return statearr_10727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___10822,jobs,results,process,async))
);


var c__10459__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto__,jobs,results,process,async){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto__,jobs,results,process,async){
return (function (state_10765){
var state_val_10766 = (state_10765[(1)]);
if((state_val_10766 === (7))){
var inst_10761 = (state_10765[(2)]);
var state_10765__$1 = state_10765;
var statearr_10767_10831 = state_10765__$1;
(statearr_10767_10831[(2)] = inst_10761);

(statearr_10767_10831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (20))){
var state_10765__$1 = state_10765;
var statearr_10768_10832 = state_10765__$1;
(statearr_10768_10832[(2)] = null);

(statearr_10768_10832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (1))){
var state_10765__$1 = state_10765;
var statearr_10769_10833 = state_10765__$1;
(statearr_10769_10833[(2)] = null);

(statearr_10769_10833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (4))){
var inst_10730 = (state_10765[(7)]);
var inst_10730__$1 = (state_10765[(2)]);
var inst_10731 = (inst_10730__$1 == null);
var state_10765__$1 = (function (){var statearr_10770 = state_10765;
(statearr_10770[(7)] = inst_10730__$1);

return statearr_10770;
})();
if(cljs.core.truth_(inst_10731)){
var statearr_10771_10834 = state_10765__$1;
(statearr_10771_10834[(1)] = (5));

} else {
var statearr_10772_10835 = state_10765__$1;
(statearr_10772_10835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (15))){
var inst_10743 = (state_10765[(8)]);
var state_10765__$1 = state_10765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10765__$1,(18),to,inst_10743);
} else {
if((state_val_10766 === (21))){
var inst_10756 = (state_10765[(2)]);
var state_10765__$1 = state_10765;
var statearr_10773_10836 = state_10765__$1;
(statearr_10773_10836[(2)] = inst_10756);

(statearr_10773_10836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (13))){
var inst_10758 = (state_10765[(2)]);
var state_10765__$1 = (function (){var statearr_10774 = state_10765;
(statearr_10774[(9)] = inst_10758);

return statearr_10774;
})();
var statearr_10775_10837 = state_10765__$1;
(statearr_10775_10837[(2)] = null);

(statearr_10775_10837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (6))){
var inst_10730 = (state_10765[(7)]);
var state_10765__$1 = state_10765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10765__$1,(11),inst_10730);
} else {
if((state_val_10766 === (17))){
var inst_10751 = (state_10765[(2)]);
var state_10765__$1 = state_10765;
if(cljs.core.truth_(inst_10751)){
var statearr_10776_10838 = state_10765__$1;
(statearr_10776_10838[(1)] = (19));

} else {
var statearr_10777_10839 = state_10765__$1;
(statearr_10777_10839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (3))){
var inst_10763 = (state_10765[(2)]);
var state_10765__$1 = state_10765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10765__$1,inst_10763);
} else {
if((state_val_10766 === (12))){
var inst_10740 = (state_10765[(10)]);
var state_10765__$1 = state_10765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10765__$1,(14),inst_10740);
} else {
if((state_val_10766 === (2))){
var state_10765__$1 = state_10765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10765__$1,(4),results);
} else {
if((state_val_10766 === (19))){
var state_10765__$1 = state_10765;
var statearr_10778_10840 = state_10765__$1;
(statearr_10778_10840[(2)] = null);

(statearr_10778_10840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (11))){
var inst_10740 = (state_10765[(2)]);
var state_10765__$1 = (function (){var statearr_10779 = state_10765;
(statearr_10779[(10)] = inst_10740);

return statearr_10779;
})();
var statearr_10780_10841 = state_10765__$1;
(statearr_10780_10841[(2)] = null);

(statearr_10780_10841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (9))){
var state_10765__$1 = state_10765;
var statearr_10781_10842 = state_10765__$1;
(statearr_10781_10842[(2)] = null);

(statearr_10781_10842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (5))){
var state_10765__$1 = state_10765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10782_10843 = state_10765__$1;
(statearr_10782_10843[(1)] = (8));

} else {
var statearr_10783_10844 = state_10765__$1;
(statearr_10783_10844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (14))){
var inst_10743 = (state_10765[(8)]);
var inst_10745 = (state_10765[(11)]);
var inst_10743__$1 = (state_10765[(2)]);
var inst_10744 = (inst_10743__$1 == null);
var inst_10745__$1 = cljs.core.not(inst_10744);
var state_10765__$1 = (function (){var statearr_10784 = state_10765;
(statearr_10784[(8)] = inst_10743__$1);

(statearr_10784[(11)] = inst_10745__$1);

return statearr_10784;
})();
if(inst_10745__$1){
var statearr_10785_10845 = state_10765__$1;
(statearr_10785_10845[(1)] = (15));

} else {
var statearr_10786_10846 = state_10765__$1;
(statearr_10786_10846[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (16))){
var inst_10745 = (state_10765[(11)]);
var state_10765__$1 = state_10765;
var statearr_10787_10847 = state_10765__$1;
(statearr_10787_10847[(2)] = inst_10745);

(statearr_10787_10847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (10))){
var inst_10737 = (state_10765[(2)]);
var state_10765__$1 = state_10765;
var statearr_10788_10848 = state_10765__$1;
(statearr_10788_10848[(2)] = inst_10737);

(statearr_10788_10848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (18))){
var inst_10748 = (state_10765[(2)]);
var state_10765__$1 = state_10765;
var statearr_10789_10849 = state_10765__$1;
(statearr_10789_10849[(2)] = inst_10748);

(statearr_10789_10849[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10766 === (8))){
var inst_10734 = cljs.core.async.close_BANG_(to);
var state_10765__$1 = state_10765;
var statearr_10790_10850 = state_10765__$1;
(statearr_10790_10850[(2)] = inst_10734);

(statearr_10790_10850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto__,jobs,results,process,async))
;
return ((function (switch__10278__auto__,c__10459__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0 = (function (){
var statearr_10791 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__);

(statearr_10791[(1)] = (1));

return statearr_10791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1 = (function (state_10765){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10765);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10792){if((e10792 instanceof Object)){
var ex__10282__auto__ = e10792;
var statearr_10793_10851 = state_10765;
(statearr_10793_10851[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10852 = state_10765;
state_10765 = G__10852;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__ = function(state_10765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1.call(this,state_10765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10279__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto__,jobs,results,process,async))
})();
var state__10461__auto__ = (function (){var statearr_10794 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10794[(6)] = c__10459__auto__);

return statearr_10794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto__,jobs,results,process,async))
);

return c__10459__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__10854 = arguments.length;
switch (G__10854) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__10857 = arguments.length;
switch (G__10857) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__10860 = arguments.length;
switch (G__10860) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10459__auto___10909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___10909,tc,fc){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___10909,tc,fc){
return (function (state_10886){
var state_val_10887 = (state_10886[(1)]);
if((state_val_10887 === (7))){
var inst_10882 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
var statearr_10888_10910 = state_10886__$1;
(statearr_10888_10910[(2)] = inst_10882);

(statearr_10888_10910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (1))){
var state_10886__$1 = state_10886;
var statearr_10889_10911 = state_10886__$1;
(statearr_10889_10911[(2)] = null);

(statearr_10889_10911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (4))){
var inst_10863 = (state_10886[(7)]);
var inst_10863__$1 = (state_10886[(2)]);
var inst_10864 = (inst_10863__$1 == null);
var state_10886__$1 = (function (){var statearr_10890 = state_10886;
(statearr_10890[(7)] = inst_10863__$1);

return statearr_10890;
})();
if(cljs.core.truth_(inst_10864)){
var statearr_10891_10912 = state_10886__$1;
(statearr_10891_10912[(1)] = (5));

} else {
var statearr_10892_10913 = state_10886__$1;
(statearr_10892_10913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (13))){
var state_10886__$1 = state_10886;
var statearr_10893_10914 = state_10886__$1;
(statearr_10893_10914[(2)] = null);

(statearr_10893_10914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (6))){
var inst_10863 = (state_10886[(7)]);
var inst_10869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10863) : p.call(null,inst_10863));
var state_10886__$1 = state_10886;
if(cljs.core.truth_(inst_10869)){
var statearr_10894_10915 = state_10886__$1;
(statearr_10894_10915[(1)] = (9));

} else {
var statearr_10895_10916 = state_10886__$1;
(statearr_10895_10916[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (3))){
var inst_10884 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10886__$1,inst_10884);
} else {
if((state_val_10887 === (12))){
var state_10886__$1 = state_10886;
var statearr_10896_10917 = state_10886__$1;
(statearr_10896_10917[(2)] = null);

(statearr_10896_10917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (2))){
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10886__$1,(4),ch);
} else {
if((state_val_10887 === (11))){
var inst_10863 = (state_10886[(7)]);
var inst_10873 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10886__$1,(8),inst_10873,inst_10863);
} else {
if((state_val_10887 === (9))){
var state_10886__$1 = state_10886;
var statearr_10897_10918 = state_10886__$1;
(statearr_10897_10918[(2)] = tc);

(statearr_10897_10918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (5))){
var inst_10866 = cljs.core.async.close_BANG_(tc);
var inst_10867 = cljs.core.async.close_BANG_(fc);
var state_10886__$1 = (function (){var statearr_10898 = state_10886;
(statearr_10898[(8)] = inst_10866);

return statearr_10898;
})();
var statearr_10899_10919 = state_10886__$1;
(statearr_10899_10919[(2)] = inst_10867);

(statearr_10899_10919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (14))){
var inst_10880 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
var statearr_10900_10920 = state_10886__$1;
(statearr_10900_10920[(2)] = inst_10880);

(statearr_10900_10920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (10))){
var state_10886__$1 = state_10886;
var statearr_10901_10921 = state_10886__$1;
(statearr_10901_10921[(2)] = fc);

(statearr_10901_10921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10887 === (8))){
var inst_10875 = (state_10886[(2)]);
var state_10886__$1 = state_10886;
if(cljs.core.truth_(inst_10875)){
var statearr_10902_10922 = state_10886__$1;
(statearr_10902_10922[(1)] = (12));

} else {
var statearr_10903_10923 = state_10886__$1;
(statearr_10903_10923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___10909,tc,fc))
;
return ((function (switch__10278__auto__,c__10459__auto___10909,tc,fc){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_10904 = [null,null,null,null,null,null,null,null,null];
(statearr_10904[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_10904[(1)] = (1));

return statearr_10904;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_10886){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10886);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10905){if((e10905 instanceof Object)){
var ex__10282__auto__ = e10905;
var statearr_10906_10924 = state_10886;
(statearr_10906_10924[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10925 = state_10886;
state_10886 = G__10925;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_10886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_10886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___10909,tc,fc))
})();
var state__10461__auto__ = (function (){var statearr_10907 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10907[(6)] = c__10459__auto___10909);

return statearr_10907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___10909,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10459__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto__){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto__){
return (function (state_10946){
var state_val_10947 = (state_10946[(1)]);
if((state_val_10947 === (7))){
var inst_10942 = (state_10946[(2)]);
var state_10946__$1 = state_10946;
var statearr_10948_10966 = state_10946__$1;
(statearr_10948_10966[(2)] = inst_10942);

(statearr_10948_10966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10947 === (1))){
var inst_10926 = init;
var state_10946__$1 = (function (){var statearr_10949 = state_10946;
(statearr_10949[(7)] = inst_10926);

return statearr_10949;
})();
var statearr_10950_10967 = state_10946__$1;
(statearr_10950_10967[(2)] = null);

(statearr_10950_10967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10947 === (4))){
var inst_10929 = (state_10946[(8)]);
var inst_10929__$1 = (state_10946[(2)]);
var inst_10930 = (inst_10929__$1 == null);
var state_10946__$1 = (function (){var statearr_10951 = state_10946;
(statearr_10951[(8)] = inst_10929__$1);

return statearr_10951;
})();
if(cljs.core.truth_(inst_10930)){
var statearr_10952_10968 = state_10946__$1;
(statearr_10952_10968[(1)] = (5));

} else {
var statearr_10953_10969 = state_10946__$1;
(statearr_10953_10969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10947 === (6))){
var inst_10926 = (state_10946[(7)]);
var inst_10929 = (state_10946[(8)]);
var inst_10933 = (state_10946[(9)]);
var inst_10933__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10926,inst_10929) : f.call(null,inst_10926,inst_10929));
var inst_10934 = cljs.core.reduced_QMARK_(inst_10933__$1);
var state_10946__$1 = (function (){var statearr_10954 = state_10946;
(statearr_10954[(9)] = inst_10933__$1);

return statearr_10954;
})();
if(inst_10934){
var statearr_10955_10970 = state_10946__$1;
(statearr_10955_10970[(1)] = (8));

} else {
var statearr_10956_10971 = state_10946__$1;
(statearr_10956_10971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10947 === (3))){
var inst_10944 = (state_10946[(2)]);
var state_10946__$1 = state_10946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10946__$1,inst_10944);
} else {
if((state_val_10947 === (2))){
var state_10946__$1 = state_10946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10946__$1,(4),ch);
} else {
if((state_val_10947 === (9))){
var inst_10933 = (state_10946[(9)]);
var inst_10926 = inst_10933;
var state_10946__$1 = (function (){var statearr_10957 = state_10946;
(statearr_10957[(7)] = inst_10926);

return statearr_10957;
})();
var statearr_10958_10972 = state_10946__$1;
(statearr_10958_10972[(2)] = null);

(statearr_10958_10972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10947 === (5))){
var inst_10926 = (state_10946[(7)]);
var state_10946__$1 = state_10946;
var statearr_10959_10973 = state_10946__$1;
(statearr_10959_10973[(2)] = inst_10926);

(statearr_10959_10973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10947 === (10))){
var inst_10940 = (state_10946[(2)]);
var state_10946__$1 = state_10946;
var statearr_10960_10974 = state_10946__$1;
(statearr_10960_10974[(2)] = inst_10940);

(statearr_10960_10974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10947 === (8))){
var inst_10933 = (state_10946[(9)]);
var inst_10936 = cljs.core.deref(inst_10933);
var state_10946__$1 = state_10946;
var statearr_10961_10975 = state_10946__$1;
(statearr_10961_10975[(2)] = inst_10936);

(statearr_10961_10975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto__))
;
return ((function (switch__10278__auto__,c__10459__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10279__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10279__auto____0 = (function (){
var statearr_10962 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10962[(0)] = cljs$core$async$reduce_$_state_machine__10279__auto__);

(statearr_10962[(1)] = (1));

return statearr_10962;
});
var cljs$core$async$reduce_$_state_machine__10279__auto____1 = (function (state_10946){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10946);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10963){if((e10963 instanceof Object)){
var ex__10282__auto__ = e10963;
var statearr_10964_10976 = state_10946;
(statearr_10964_10976[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10977 = state_10946;
state_10946 = G__10977;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10279__auto__ = function(state_10946){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10279__auto____1.call(this,state_10946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10279__auto____0;
cljs$core$async$reduce_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10279__auto____1;
return cljs$core$async$reduce_$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto__))
})();
var state__10461__auto__ = (function (){var statearr_10965 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10965[(6)] = c__10459__auto__);

return statearr_10965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto__))
);

return c__10459__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10459__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto__,f__$1){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto__,f__$1){
return (function (state_10983){
var state_val_10984 = (state_10983[(1)]);
if((state_val_10984 === (1))){
var inst_10978 = cljs.core.async.reduce(f__$1,init,ch);
var state_10983__$1 = state_10983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10983__$1,(2),inst_10978);
} else {
if((state_val_10984 === (2))){
var inst_10980 = (state_10983[(2)]);
var inst_10981 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_10980) : f__$1.call(null,inst_10980));
var state_10983__$1 = state_10983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10983__$1,inst_10981);
} else {
return null;
}
}
});})(c__10459__auto__,f__$1))
;
return ((function (switch__10278__auto__,c__10459__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10279__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10279__auto____0 = (function (){
var statearr_10985 = [null,null,null,null,null,null,null];
(statearr_10985[(0)] = cljs$core$async$transduce_$_state_machine__10279__auto__);

(statearr_10985[(1)] = (1));

return statearr_10985;
});
var cljs$core$async$transduce_$_state_machine__10279__auto____1 = (function (state_10983){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_10983);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e10986){if((e10986 instanceof Object)){
var ex__10282__auto__ = e10986;
var statearr_10987_10989 = state_10983;
(statearr_10987_10989[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10986;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10990 = state_10983;
state_10983 = G__10990;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10279__auto__ = function(state_10983){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10279__auto____1.call(this,state_10983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10279__auto____0;
cljs$core$async$transduce_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10279__auto____1;
return cljs$core$async$transduce_$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto__,f__$1))
})();
var state__10461__auto__ = (function (){var statearr_10988 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_10988[(6)] = c__10459__auto__);

return statearr_10988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto__,f__$1))
);

return c__10459__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10992 = arguments.length;
switch (G__10992) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10459__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto__){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto__){
return (function (state_11017){
var state_val_11018 = (state_11017[(1)]);
if((state_val_11018 === (7))){
var inst_10999 = (state_11017[(2)]);
var state_11017__$1 = state_11017;
var statearr_11019_11040 = state_11017__$1;
(statearr_11019_11040[(2)] = inst_10999);

(statearr_11019_11040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (1))){
var inst_10993 = cljs.core.seq(coll);
var inst_10994 = inst_10993;
var state_11017__$1 = (function (){var statearr_11020 = state_11017;
(statearr_11020[(7)] = inst_10994);

return statearr_11020;
})();
var statearr_11021_11041 = state_11017__$1;
(statearr_11021_11041[(2)] = null);

(statearr_11021_11041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (4))){
var inst_10994 = (state_11017[(7)]);
var inst_10997 = cljs.core.first(inst_10994);
var state_11017__$1 = state_11017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11017__$1,(7),ch,inst_10997);
} else {
if((state_val_11018 === (13))){
var inst_11011 = (state_11017[(2)]);
var state_11017__$1 = state_11017;
var statearr_11022_11042 = state_11017__$1;
(statearr_11022_11042[(2)] = inst_11011);

(statearr_11022_11042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (6))){
var inst_11002 = (state_11017[(2)]);
var state_11017__$1 = state_11017;
if(cljs.core.truth_(inst_11002)){
var statearr_11023_11043 = state_11017__$1;
(statearr_11023_11043[(1)] = (8));

} else {
var statearr_11024_11044 = state_11017__$1;
(statearr_11024_11044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (3))){
var inst_11015 = (state_11017[(2)]);
var state_11017__$1 = state_11017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11017__$1,inst_11015);
} else {
if((state_val_11018 === (12))){
var state_11017__$1 = state_11017;
var statearr_11025_11045 = state_11017__$1;
(statearr_11025_11045[(2)] = null);

(statearr_11025_11045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (2))){
var inst_10994 = (state_11017[(7)]);
var state_11017__$1 = state_11017;
if(cljs.core.truth_(inst_10994)){
var statearr_11026_11046 = state_11017__$1;
(statearr_11026_11046[(1)] = (4));

} else {
var statearr_11027_11047 = state_11017__$1;
(statearr_11027_11047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (11))){
var inst_11008 = cljs.core.async.close_BANG_(ch);
var state_11017__$1 = state_11017;
var statearr_11028_11048 = state_11017__$1;
(statearr_11028_11048[(2)] = inst_11008);

(statearr_11028_11048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (9))){
var state_11017__$1 = state_11017;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11029_11049 = state_11017__$1;
(statearr_11029_11049[(1)] = (11));

} else {
var statearr_11030_11050 = state_11017__$1;
(statearr_11030_11050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (5))){
var inst_10994 = (state_11017[(7)]);
var state_11017__$1 = state_11017;
var statearr_11031_11051 = state_11017__$1;
(statearr_11031_11051[(2)] = inst_10994);

(statearr_11031_11051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (10))){
var inst_11013 = (state_11017[(2)]);
var state_11017__$1 = state_11017;
var statearr_11032_11052 = state_11017__$1;
(statearr_11032_11052[(2)] = inst_11013);

(statearr_11032_11052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11018 === (8))){
var inst_10994 = (state_11017[(7)]);
var inst_11004 = cljs.core.next(inst_10994);
var inst_10994__$1 = inst_11004;
var state_11017__$1 = (function (){var statearr_11033 = state_11017;
(statearr_11033[(7)] = inst_10994__$1);

return statearr_11033;
})();
var statearr_11034_11053 = state_11017__$1;
(statearr_11034_11053[(2)] = null);

(statearr_11034_11053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto__))
;
return ((function (switch__10278__auto__,c__10459__auto__){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_11035 = [null,null,null,null,null,null,null,null];
(statearr_11035[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_11035[(1)] = (1));

return statearr_11035;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_11017){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11017);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11036){if((e11036 instanceof Object)){
var ex__10282__auto__ = e11036;
var statearr_11037_11054 = state_11017;
(statearr_11037_11054[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11055 = state_11017;
state_11017 = G__11055;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_11017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_11017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto__))
})();
var state__10461__auto__ = (function (){var statearr_11038 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11038[(6)] = c__10459__auto__);

return statearr_11038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto__))
);

return c__10459__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18183__auto__ = (((_ == null))?null:_);
var m__18184__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__18184__auto__.call(null,_));
} else {
var m__18184__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__18184__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$3 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__18184__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__18184__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__18184__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18184__auto__.call(null,m,ch));
} else {
var m__18184__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18184__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__18184__auto__.call(null,m));
} else {
var m__18184__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__18184__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11056 = (function (ch,cs,meta11057){
this.ch = ch;
this.cs = cs;
this.meta11057 = meta11057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11058,meta11057__$1){
var self__ = this;
var _11058__$1 = this;
return (new cljs.core.async.t_cljs$core$async11056(self__.ch,self__.cs,meta11057__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11058){
var self__ = this;
var _11058__$1 = this;
return self__.meta11057;
});})(cs))
;

cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11056.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11056.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11057","meta11057",1813686823,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11056";

cljs.core.async.t_cljs$core$async11056.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async11056");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11056 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11056(ch__$1,cs__$1,meta11057){
return (new cljs.core.async.t_cljs$core$async11056(ch__$1,cs__$1,meta11057));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11056(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10459__auto___11278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___11278,cs,m,dchan,dctr,done){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___11278,cs,m,dchan,dctr,done){
return (function (state_11193){
var state_val_11194 = (state_11193[(1)]);
if((state_val_11194 === (7))){
var inst_11189 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11195_11279 = state_11193__$1;
(statearr_11195_11279[(2)] = inst_11189);

(statearr_11195_11279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (20))){
var inst_11092 = (state_11193[(7)]);
var inst_11104 = cljs.core.first(inst_11092);
var inst_11105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11104,(0),null);
var inst_11106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11104,(1),null);
var state_11193__$1 = (function (){var statearr_11196 = state_11193;
(statearr_11196[(8)] = inst_11105);

return statearr_11196;
})();
if(cljs.core.truth_(inst_11106)){
var statearr_11197_11280 = state_11193__$1;
(statearr_11197_11280[(1)] = (22));

} else {
var statearr_11198_11281 = state_11193__$1;
(statearr_11198_11281[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (27))){
var inst_11134 = (state_11193[(9)]);
var inst_11141 = (state_11193[(10)]);
var inst_11136 = (state_11193[(11)]);
var inst_11061 = (state_11193[(12)]);
var inst_11141__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11134,inst_11136);
var inst_11142 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11141__$1,inst_11061,done);
var state_11193__$1 = (function (){var statearr_11199 = state_11193;
(statearr_11199[(10)] = inst_11141__$1);

return statearr_11199;
})();
if(cljs.core.truth_(inst_11142)){
var statearr_11200_11282 = state_11193__$1;
(statearr_11200_11282[(1)] = (30));

} else {
var statearr_11201_11283 = state_11193__$1;
(statearr_11201_11283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (1))){
var state_11193__$1 = state_11193;
var statearr_11202_11284 = state_11193__$1;
(statearr_11202_11284[(2)] = null);

(statearr_11202_11284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (24))){
var inst_11092 = (state_11193[(7)]);
var inst_11111 = (state_11193[(2)]);
var inst_11112 = cljs.core.next(inst_11092);
var inst_11070 = inst_11112;
var inst_11071 = null;
var inst_11072 = (0);
var inst_11073 = (0);
var state_11193__$1 = (function (){var statearr_11203 = state_11193;
(statearr_11203[(13)] = inst_11111);

(statearr_11203[(14)] = inst_11071);

(statearr_11203[(15)] = inst_11070);

(statearr_11203[(16)] = inst_11072);

(statearr_11203[(17)] = inst_11073);

return statearr_11203;
})();
var statearr_11204_11285 = state_11193__$1;
(statearr_11204_11285[(2)] = null);

(statearr_11204_11285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (39))){
var state_11193__$1 = state_11193;
var statearr_11208_11286 = state_11193__$1;
(statearr_11208_11286[(2)] = null);

(statearr_11208_11286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (4))){
var inst_11061 = (state_11193[(12)]);
var inst_11061__$1 = (state_11193[(2)]);
var inst_11062 = (inst_11061__$1 == null);
var state_11193__$1 = (function (){var statearr_11209 = state_11193;
(statearr_11209[(12)] = inst_11061__$1);

return statearr_11209;
})();
if(cljs.core.truth_(inst_11062)){
var statearr_11210_11287 = state_11193__$1;
(statearr_11210_11287[(1)] = (5));

} else {
var statearr_11211_11288 = state_11193__$1;
(statearr_11211_11288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (15))){
var inst_11071 = (state_11193[(14)]);
var inst_11070 = (state_11193[(15)]);
var inst_11072 = (state_11193[(16)]);
var inst_11073 = (state_11193[(17)]);
var inst_11088 = (state_11193[(2)]);
var inst_11089 = (inst_11073 + (1));
var tmp11205 = inst_11071;
var tmp11206 = inst_11070;
var tmp11207 = inst_11072;
var inst_11070__$1 = tmp11206;
var inst_11071__$1 = tmp11205;
var inst_11072__$1 = tmp11207;
var inst_11073__$1 = inst_11089;
var state_11193__$1 = (function (){var statearr_11212 = state_11193;
(statearr_11212[(14)] = inst_11071__$1);

(statearr_11212[(15)] = inst_11070__$1);

(statearr_11212[(18)] = inst_11088);

(statearr_11212[(16)] = inst_11072__$1);

(statearr_11212[(17)] = inst_11073__$1);

return statearr_11212;
})();
var statearr_11213_11289 = state_11193__$1;
(statearr_11213_11289[(2)] = null);

(statearr_11213_11289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (21))){
var inst_11115 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11217_11290 = state_11193__$1;
(statearr_11217_11290[(2)] = inst_11115);

(statearr_11217_11290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (31))){
var inst_11141 = (state_11193[(10)]);
var inst_11145 = done(null);
var inst_11146 = cljs.core.async.untap_STAR_(m,inst_11141);
var state_11193__$1 = (function (){var statearr_11218 = state_11193;
(statearr_11218[(19)] = inst_11145);

return statearr_11218;
})();
var statearr_11219_11291 = state_11193__$1;
(statearr_11219_11291[(2)] = inst_11146);

(statearr_11219_11291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (32))){
var inst_11134 = (state_11193[(9)]);
var inst_11135 = (state_11193[(20)]);
var inst_11133 = (state_11193[(21)]);
var inst_11136 = (state_11193[(11)]);
var inst_11148 = (state_11193[(2)]);
var inst_11149 = (inst_11136 + (1));
var tmp11214 = inst_11134;
var tmp11215 = inst_11135;
var tmp11216 = inst_11133;
var inst_11133__$1 = tmp11216;
var inst_11134__$1 = tmp11214;
var inst_11135__$1 = tmp11215;
var inst_11136__$1 = inst_11149;
var state_11193__$1 = (function (){var statearr_11220 = state_11193;
(statearr_11220[(9)] = inst_11134__$1);

(statearr_11220[(20)] = inst_11135__$1);

(statearr_11220[(21)] = inst_11133__$1);

(statearr_11220[(22)] = inst_11148);

(statearr_11220[(11)] = inst_11136__$1);

return statearr_11220;
})();
var statearr_11221_11292 = state_11193__$1;
(statearr_11221_11292[(2)] = null);

(statearr_11221_11292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (40))){
var inst_11161 = (state_11193[(23)]);
var inst_11165 = done(null);
var inst_11166 = cljs.core.async.untap_STAR_(m,inst_11161);
var state_11193__$1 = (function (){var statearr_11222 = state_11193;
(statearr_11222[(24)] = inst_11165);

return statearr_11222;
})();
var statearr_11223_11293 = state_11193__$1;
(statearr_11223_11293[(2)] = inst_11166);

(statearr_11223_11293[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (33))){
var inst_11152 = (state_11193[(25)]);
var inst_11154 = cljs.core.chunked_seq_QMARK_(inst_11152);
var state_11193__$1 = state_11193;
if(inst_11154){
var statearr_11224_11294 = state_11193__$1;
(statearr_11224_11294[(1)] = (36));

} else {
var statearr_11225_11295 = state_11193__$1;
(statearr_11225_11295[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (13))){
var inst_11082 = (state_11193[(26)]);
var inst_11085 = cljs.core.async.close_BANG_(inst_11082);
var state_11193__$1 = state_11193;
var statearr_11226_11296 = state_11193__$1;
(statearr_11226_11296[(2)] = inst_11085);

(statearr_11226_11296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (22))){
var inst_11105 = (state_11193[(8)]);
var inst_11108 = cljs.core.async.close_BANG_(inst_11105);
var state_11193__$1 = state_11193;
var statearr_11227_11297 = state_11193__$1;
(statearr_11227_11297[(2)] = inst_11108);

(statearr_11227_11297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (36))){
var inst_11152 = (state_11193[(25)]);
var inst_11156 = cljs.core.chunk_first(inst_11152);
var inst_11157 = cljs.core.chunk_rest(inst_11152);
var inst_11158 = cljs.core.count(inst_11156);
var inst_11133 = inst_11157;
var inst_11134 = inst_11156;
var inst_11135 = inst_11158;
var inst_11136 = (0);
var state_11193__$1 = (function (){var statearr_11228 = state_11193;
(statearr_11228[(9)] = inst_11134);

(statearr_11228[(20)] = inst_11135);

(statearr_11228[(21)] = inst_11133);

(statearr_11228[(11)] = inst_11136);

return statearr_11228;
})();
var statearr_11229_11298 = state_11193__$1;
(statearr_11229_11298[(2)] = null);

(statearr_11229_11298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (41))){
var inst_11152 = (state_11193[(25)]);
var inst_11168 = (state_11193[(2)]);
var inst_11169 = cljs.core.next(inst_11152);
var inst_11133 = inst_11169;
var inst_11134 = null;
var inst_11135 = (0);
var inst_11136 = (0);
var state_11193__$1 = (function (){var statearr_11230 = state_11193;
(statearr_11230[(9)] = inst_11134);

(statearr_11230[(20)] = inst_11135);

(statearr_11230[(21)] = inst_11133);

(statearr_11230[(27)] = inst_11168);

(statearr_11230[(11)] = inst_11136);

return statearr_11230;
})();
var statearr_11231_11299 = state_11193__$1;
(statearr_11231_11299[(2)] = null);

(statearr_11231_11299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (43))){
var state_11193__$1 = state_11193;
var statearr_11232_11300 = state_11193__$1;
(statearr_11232_11300[(2)] = null);

(statearr_11232_11300[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (29))){
var inst_11177 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11233_11301 = state_11193__$1;
(statearr_11233_11301[(2)] = inst_11177);

(statearr_11233_11301[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (44))){
var inst_11186 = (state_11193[(2)]);
var state_11193__$1 = (function (){var statearr_11234 = state_11193;
(statearr_11234[(28)] = inst_11186);

return statearr_11234;
})();
var statearr_11235_11302 = state_11193__$1;
(statearr_11235_11302[(2)] = null);

(statearr_11235_11302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (6))){
var inst_11125 = (state_11193[(29)]);
var inst_11124 = cljs.core.deref(cs);
var inst_11125__$1 = cljs.core.keys(inst_11124);
var inst_11126 = cljs.core.count(inst_11125__$1);
var inst_11127 = cljs.core.reset_BANG_(dctr,inst_11126);
var inst_11132 = cljs.core.seq(inst_11125__$1);
var inst_11133 = inst_11132;
var inst_11134 = null;
var inst_11135 = (0);
var inst_11136 = (0);
var state_11193__$1 = (function (){var statearr_11236 = state_11193;
(statearr_11236[(29)] = inst_11125__$1);

(statearr_11236[(9)] = inst_11134);

(statearr_11236[(20)] = inst_11135);

(statearr_11236[(30)] = inst_11127);

(statearr_11236[(21)] = inst_11133);

(statearr_11236[(11)] = inst_11136);

return statearr_11236;
})();
var statearr_11237_11303 = state_11193__$1;
(statearr_11237_11303[(2)] = null);

(statearr_11237_11303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (28))){
var inst_11152 = (state_11193[(25)]);
var inst_11133 = (state_11193[(21)]);
var inst_11152__$1 = cljs.core.seq(inst_11133);
var state_11193__$1 = (function (){var statearr_11238 = state_11193;
(statearr_11238[(25)] = inst_11152__$1);

return statearr_11238;
})();
if(inst_11152__$1){
var statearr_11239_11304 = state_11193__$1;
(statearr_11239_11304[(1)] = (33));

} else {
var statearr_11240_11305 = state_11193__$1;
(statearr_11240_11305[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (25))){
var inst_11135 = (state_11193[(20)]);
var inst_11136 = (state_11193[(11)]);
var inst_11138 = (inst_11136 < inst_11135);
var inst_11139 = inst_11138;
var state_11193__$1 = state_11193;
if(cljs.core.truth_(inst_11139)){
var statearr_11241_11306 = state_11193__$1;
(statearr_11241_11306[(1)] = (27));

} else {
var statearr_11242_11307 = state_11193__$1;
(statearr_11242_11307[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (34))){
var state_11193__$1 = state_11193;
var statearr_11243_11308 = state_11193__$1;
(statearr_11243_11308[(2)] = null);

(statearr_11243_11308[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (17))){
var state_11193__$1 = state_11193;
var statearr_11244_11309 = state_11193__$1;
(statearr_11244_11309[(2)] = null);

(statearr_11244_11309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (3))){
var inst_11191 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11193__$1,inst_11191);
} else {
if((state_val_11194 === (12))){
var inst_11120 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11245_11310 = state_11193__$1;
(statearr_11245_11310[(2)] = inst_11120);

(statearr_11245_11310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (2))){
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11193__$1,(4),ch);
} else {
if((state_val_11194 === (23))){
var state_11193__$1 = state_11193;
var statearr_11246_11311 = state_11193__$1;
(statearr_11246_11311[(2)] = null);

(statearr_11246_11311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (35))){
var inst_11175 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11247_11312 = state_11193__$1;
(statearr_11247_11312[(2)] = inst_11175);

(statearr_11247_11312[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (19))){
var inst_11092 = (state_11193[(7)]);
var inst_11096 = cljs.core.chunk_first(inst_11092);
var inst_11097 = cljs.core.chunk_rest(inst_11092);
var inst_11098 = cljs.core.count(inst_11096);
var inst_11070 = inst_11097;
var inst_11071 = inst_11096;
var inst_11072 = inst_11098;
var inst_11073 = (0);
var state_11193__$1 = (function (){var statearr_11248 = state_11193;
(statearr_11248[(14)] = inst_11071);

(statearr_11248[(15)] = inst_11070);

(statearr_11248[(16)] = inst_11072);

(statearr_11248[(17)] = inst_11073);

return statearr_11248;
})();
var statearr_11249_11313 = state_11193__$1;
(statearr_11249_11313[(2)] = null);

(statearr_11249_11313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (11))){
var inst_11070 = (state_11193[(15)]);
var inst_11092 = (state_11193[(7)]);
var inst_11092__$1 = cljs.core.seq(inst_11070);
var state_11193__$1 = (function (){var statearr_11250 = state_11193;
(statearr_11250[(7)] = inst_11092__$1);

return statearr_11250;
})();
if(inst_11092__$1){
var statearr_11251_11314 = state_11193__$1;
(statearr_11251_11314[(1)] = (16));

} else {
var statearr_11252_11315 = state_11193__$1;
(statearr_11252_11315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (9))){
var inst_11122 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11253_11316 = state_11193__$1;
(statearr_11253_11316[(2)] = inst_11122);

(statearr_11253_11316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (5))){
var inst_11068 = cljs.core.deref(cs);
var inst_11069 = cljs.core.seq(inst_11068);
var inst_11070 = inst_11069;
var inst_11071 = null;
var inst_11072 = (0);
var inst_11073 = (0);
var state_11193__$1 = (function (){var statearr_11254 = state_11193;
(statearr_11254[(14)] = inst_11071);

(statearr_11254[(15)] = inst_11070);

(statearr_11254[(16)] = inst_11072);

(statearr_11254[(17)] = inst_11073);

return statearr_11254;
})();
var statearr_11255_11317 = state_11193__$1;
(statearr_11255_11317[(2)] = null);

(statearr_11255_11317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (14))){
var state_11193__$1 = state_11193;
var statearr_11256_11318 = state_11193__$1;
(statearr_11256_11318[(2)] = null);

(statearr_11256_11318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (45))){
var inst_11183 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11257_11319 = state_11193__$1;
(statearr_11257_11319[(2)] = inst_11183);

(statearr_11257_11319[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (26))){
var inst_11125 = (state_11193[(29)]);
var inst_11179 = (state_11193[(2)]);
var inst_11180 = cljs.core.seq(inst_11125);
var state_11193__$1 = (function (){var statearr_11258 = state_11193;
(statearr_11258[(31)] = inst_11179);

return statearr_11258;
})();
if(inst_11180){
var statearr_11259_11320 = state_11193__$1;
(statearr_11259_11320[(1)] = (42));

} else {
var statearr_11260_11321 = state_11193__$1;
(statearr_11260_11321[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (16))){
var inst_11092 = (state_11193[(7)]);
var inst_11094 = cljs.core.chunked_seq_QMARK_(inst_11092);
var state_11193__$1 = state_11193;
if(inst_11094){
var statearr_11261_11322 = state_11193__$1;
(statearr_11261_11322[(1)] = (19));

} else {
var statearr_11262_11323 = state_11193__$1;
(statearr_11262_11323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (38))){
var inst_11172 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11263_11324 = state_11193__$1;
(statearr_11263_11324[(2)] = inst_11172);

(statearr_11263_11324[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (30))){
var state_11193__$1 = state_11193;
var statearr_11264_11325 = state_11193__$1;
(statearr_11264_11325[(2)] = null);

(statearr_11264_11325[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (10))){
var inst_11071 = (state_11193[(14)]);
var inst_11073 = (state_11193[(17)]);
var inst_11081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11071,inst_11073);
var inst_11082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11081,(0),null);
var inst_11083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11081,(1),null);
var state_11193__$1 = (function (){var statearr_11265 = state_11193;
(statearr_11265[(26)] = inst_11082);

return statearr_11265;
})();
if(cljs.core.truth_(inst_11083)){
var statearr_11266_11326 = state_11193__$1;
(statearr_11266_11326[(1)] = (13));

} else {
var statearr_11267_11327 = state_11193__$1;
(statearr_11267_11327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (18))){
var inst_11118 = (state_11193[(2)]);
var state_11193__$1 = state_11193;
var statearr_11268_11328 = state_11193__$1;
(statearr_11268_11328[(2)] = inst_11118);

(statearr_11268_11328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (42))){
var state_11193__$1 = state_11193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11193__$1,(45),dchan);
} else {
if((state_val_11194 === (37))){
var inst_11152 = (state_11193[(25)]);
var inst_11161 = (state_11193[(23)]);
var inst_11061 = (state_11193[(12)]);
var inst_11161__$1 = cljs.core.first(inst_11152);
var inst_11162 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11161__$1,inst_11061,done);
var state_11193__$1 = (function (){var statearr_11269 = state_11193;
(statearr_11269[(23)] = inst_11161__$1);

return statearr_11269;
})();
if(cljs.core.truth_(inst_11162)){
var statearr_11270_11329 = state_11193__$1;
(statearr_11270_11329[(1)] = (39));

} else {
var statearr_11271_11330 = state_11193__$1;
(statearr_11271_11330[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11194 === (8))){
var inst_11072 = (state_11193[(16)]);
var inst_11073 = (state_11193[(17)]);
var inst_11075 = (inst_11073 < inst_11072);
var inst_11076 = inst_11075;
var state_11193__$1 = state_11193;
if(cljs.core.truth_(inst_11076)){
var statearr_11272_11331 = state_11193__$1;
(statearr_11272_11331[(1)] = (10));

} else {
var statearr_11273_11332 = state_11193__$1;
(statearr_11273_11332[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___11278,cs,m,dchan,dctr,done))
;
return ((function (switch__10278__auto__,c__10459__auto___11278,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10279__auto__ = null;
var cljs$core$async$mult_$_state_machine__10279__auto____0 = (function (){
var statearr_11274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11274[(0)] = cljs$core$async$mult_$_state_machine__10279__auto__);

(statearr_11274[(1)] = (1));

return statearr_11274;
});
var cljs$core$async$mult_$_state_machine__10279__auto____1 = (function (state_11193){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11193);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11275){if((e11275 instanceof Object)){
var ex__10282__auto__ = e11275;
var statearr_11276_11333 = state_11193;
(statearr_11276_11333[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11334 = state_11193;
state_11193 = G__11334;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10279__auto__ = function(state_11193){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10279__auto____1.call(this,state_11193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10279__auto____0;
cljs$core$async$mult_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10279__auto____1;
return cljs$core$async$mult_$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___11278,cs,m,dchan,dctr,done))
})();
var state__10461__auto__ = (function (){var statearr_11277 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11277[(6)] = c__10459__auto___11278);

return statearr_11277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___11278,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11336 = arguments.length;
switch (G__11336) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18184__auto__.call(null,m,ch));
} else {
var m__18184__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18184__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18184__auto__.call(null,m,ch));
} else {
var m__18184__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__18184__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__18184__auto__.call(null,m));
} else {
var m__18184__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__18184__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__18184__auto__.call(null,m,state_map));
} else {
var m__18184__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__18184__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18183__auto__ = (((m == null))?null:m);
var m__18184__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__18184__auto__.call(null,m,mode));
} else {
var m__18184__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__18184__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18532__auto__ = [];
var len__18529__auto___11348 = arguments.length;
var i__18530__auto___11349 = (0);
while(true){
if((i__18530__auto___11349 < len__18529__auto___11348)){
args__18532__auto__.push((arguments[i__18530__auto___11349]));

var G__11350 = (i__18530__auto___11349 + (1));
i__18530__auto___11349 = G__11350;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((3) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18533__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11342){
var map__11343 = p__11342;
var map__11343__$1 = ((((!((map__11343 == null)))?((((map__11343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11343):map__11343);
var opts = map__11343__$1;
var statearr_11345_11351 = state;
(statearr_11345_11351[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__11343,map__11343__$1,opts){
return (function (val){
var statearr_11346_11352 = state;
(statearr_11346_11352[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__11343,map__11343__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_11347_11353 = state;
(statearr_11347_11353[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11338){
var G__11339 = cljs.core.first(seq11338);
var seq11338__$1 = cljs.core.next(seq11338);
var G__11340 = cljs.core.first(seq11338__$1);
var seq11338__$2 = cljs.core.next(seq11338__$1);
var G__11341 = cljs.core.first(seq11338__$2);
var seq11338__$3 = cljs.core.next(seq11338__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11339,G__11340,G__11341,seq11338__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11354 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11355){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11355 = meta11355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11356,meta11355__$1){
var self__ = this;
var _11356__$1 = this;
return (new cljs.core.async.t_cljs$core$async11354(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11355__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11356){
var self__ = this;
var _11356__$1 = this;
return self__.meta11355;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11355","meta11355",-1592599262,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11354";

cljs.core.async.t_cljs$core$async11354.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async11354");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11354 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11354(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11355){
return (new cljs.core.async.t_cljs$core$async11354(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11355));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11354(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10459__auto___11518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___11518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___11518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11458){
var state_val_11459 = (state_11458[(1)]);
if((state_val_11459 === (7))){
var inst_11373 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11460_11519 = state_11458__$1;
(statearr_11460_11519[(2)] = inst_11373);

(statearr_11460_11519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (20))){
var inst_11385 = (state_11458[(7)]);
var state_11458__$1 = state_11458;
var statearr_11461_11520 = state_11458__$1;
(statearr_11461_11520[(2)] = inst_11385);

(statearr_11461_11520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (27))){
var state_11458__$1 = state_11458;
var statearr_11462_11521 = state_11458__$1;
(statearr_11462_11521[(2)] = null);

(statearr_11462_11521[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (1))){
var inst_11360 = (state_11458[(8)]);
var inst_11360__$1 = calc_state();
var inst_11362 = (inst_11360__$1 == null);
var inst_11363 = cljs.core.not(inst_11362);
var state_11458__$1 = (function (){var statearr_11463 = state_11458;
(statearr_11463[(8)] = inst_11360__$1);

return statearr_11463;
})();
if(inst_11363){
var statearr_11464_11522 = state_11458__$1;
(statearr_11464_11522[(1)] = (2));

} else {
var statearr_11465_11523 = state_11458__$1;
(statearr_11465_11523[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (24))){
var inst_11418 = (state_11458[(9)]);
var inst_11432 = (state_11458[(10)]);
var inst_11409 = (state_11458[(11)]);
var inst_11432__$1 = (inst_11409.cljs$core$IFn$_invoke$arity$1 ? inst_11409.cljs$core$IFn$_invoke$arity$1(inst_11418) : inst_11409.call(null,inst_11418));
var state_11458__$1 = (function (){var statearr_11466 = state_11458;
(statearr_11466[(10)] = inst_11432__$1);

return statearr_11466;
})();
if(cljs.core.truth_(inst_11432__$1)){
var statearr_11467_11524 = state_11458__$1;
(statearr_11467_11524[(1)] = (29));

} else {
var statearr_11468_11525 = state_11458__$1;
(statearr_11468_11525[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (4))){
var inst_11376 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11376)){
var statearr_11469_11526 = state_11458__$1;
(statearr_11469_11526[(1)] = (8));

} else {
var statearr_11470_11527 = state_11458__$1;
(statearr_11470_11527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (15))){
var inst_11403 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11403)){
var statearr_11471_11528 = state_11458__$1;
(statearr_11471_11528[(1)] = (19));

} else {
var statearr_11472_11529 = state_11458__$1;
(statearr_11472_11529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (21))){
var inst_11408 = (state_11458[(12)]);
var inst_11408__$1 = (state_11458[(2)]);
var inst_11409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11408__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11408__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11408__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11458__$1 = (function (){var statearr_11473 = state_11458;
(statearr_11473[(13)] = inst_11410);

(statearr_11473[(12)] = inst_11408__$1);

(statearr_11473[(11)] = inst_11409);

return statearr_11473;
})();
return cljs.core.async.ioc_alts_BANG_(state_11458__$1,(22),inst_11411);
} else {
if((state_val_11459 === (31))){
var inst_11440 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11440)){
var statearr_11474_11530 = state_11458__$1;
(statearr_11474_11530[(1)] = (32));

} else {
var statearr_11475_11531 = state_11458__$1;
(statearr_11475_11531[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (32))){
var inst_11417 = (state_11458[(14)]);
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11458__$1,(35),out,inst_11417);
} else {
if((state_val_11459 === (33))){
var inst_11408 = (state_11458[(12)]);
var inst_11385 = inst_11408;
var state_11458__$1 = (function (){var statearr_11476 = state_11458;
(statearr_11476[(7)] = inst_11385);

return statearr_11476;
})();
var statearr_11477_11532 = state_11458__$1;
(statearr_11477_11532[(2)] = null);

(statearr_11477_11532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (13))){
var inst_11385 = (state_11458[(7)]);
var inst_11392 = inst_11385.cljs$lang$protocol_mask$partition0$;
var inst_11393 = (inst_11392 & (64));
var inst_11394 = inst_11385.cljs$core$ISeq$;
var inst_11395 = (cljs.core.PROTOCOL_SENTINEL === inst_11394);
var inst_11396 = (inst_11393) || (inst_11395);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11396)){
var statearr_11478_11533 = state_11458__$1;
(statearr_11478_11533[(1)] = (16));

} else {
var statearr_11479_11534 = state_11458__$1;
(statearr_11479_11534[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (22))){
var inst_11418 = (state_11458[(9)]);
var inst_11417 = (state_11458[(14)]);
var inst_11416 = (state_11458[(2)]);
var inst_11417__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11416,(0),null);
var inst_11418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11416,(1),null);
var inst_11419 = (inst_11417__$1 == null);
var inst_11420 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11418__$1,change);
var inst_11421 = (inst_11419) || (inst_11420);
var state_11458__$1 = (function (){var statearr_11480 = state_11458;
(statearr_11480[(9)] = inst_11418__$1);

(statearr_11480[(14)] = inst_11417__$1);

return statearr_11480;
})();
if(cljs.core.truth_(inst_11421)){
var statearr_11481_11535 = state_11458__$1;
(statearr_11481_11535[(1)] = (23));

} else {
var statearr_11482_11536 = state_11458__$1;
(statearr_11482_11536[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (36))){
var inst_11408 = (state_11458[(12)]);
var inst_11385 = inst_11408;
var state_11458__$1 = (function (){var statearr_11483 = state_11458;
(statearr_11483[(7)] = inst_11385);

return statearr_11483;
})();
var statearr_11484_11537 = state_11458__$1;
(statearr_11484_11537[(2)] = null);

(statearr_11484_11537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (29))){
var inst_11432 = (state_11458[(10)]);
var state_11458__$1 = state_11458;
var statearr_11485_11538 = state_11458__$1;
(statearr_11485_11538[(2)] = inst_11432);

(statearr_11485_11538[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (6))){
var state_11458__$1 = state_11458;
var statearr_11486_11539 = state_11458__$1;
(statearr_11486_11539[(2)] = false);

(statearr_11486_11539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (28))){
var inst_11428 = (state_11458[(2)]);
var inst_11429 = calc_state();
var inst_11385 = inst_11429;
var state_11458__$1 = (function (){var statearr_11487 = state_11458;
(statearr_11487[(7)] = inst_11385);

(statearr_11487[(15)] = inst_11428);

return statearr_11487;
})();
var statearr_11488_11540 = state_11458__$1;
(statearr_11488_11540[(2)] = null);

(statearr_11488_11540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (25))){
var inst_11454 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11489_11541 = state_11458__$1;
(statearr_11489_11541[(2)] = inst_11454);

(statearr_11489_11541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (34))){
var inst_11452 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11490_11542 = state_11458__$1;
(statearr_11490_11542[(2)] = inst_11452);

(statearr_11490_11542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (17))){
var state_11458__$1 = state_11458;
var statearr_11491_11543 = state_11458__$1;
(statearr_11491_11543[(2)] = false);

(statearr_11491_11543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (3))){
var state_11458__$1 = state_11458;
var statearr_11492_11544 = state_11458__$1;
(statearr_11492_11544[(2)] = false);

(statearr_11492_11544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (12))){
var inst_11456 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11458__$1,inst_11456);
} else {
if((state_val_11459 === (2))){
var inst_11360 = (state_11458[(8)]);
var inst_11365 = inst_11360.cljs$lang$protocol_mask$partition0$;
var inst_11366 = (inst_11365 & (64));
var inst_11367 = inst_11360.cljs$core$ISeq$;
var inst_11368 = (cljs.core.PROTOCOL_SENTINEL === inst_11367);
var inst_11369 = (inst_11366) || (inst_11368);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11369)){
var statearr_11493_11545 = state_11458__$1;
(statearr_11493_11545[(1)] = (5));

} else {
var statearr_11494_11546 = state_11458__$1;
(statearr_11494_11546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (23))){
var inst_11417 = (state_11458[(14)]);
var inst_11423 = (inst_11417 == null);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11423)){
var statearr_11495_11547 = state_11458__$1;
(statearr_11495_11547[(1)] = (26));

} else {
var statearr_11496_11548 = state_11458__$1;
(statearr_11496_11548[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (35))){
var inst_11443 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11443)){
var statearr_11497_11549 = state_11458__$1;
(statearr_11497_11549[(1)] = (36));

} else {
var statearr_11498_11550 = state_11458__$1;
(statearr_11498_11550[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (19))){
var inst_11385 = (state_11458[(7)]);
var inst_11405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11385);
var state_11458__$1 = state_11458;
var statearr_11499_11551 = state_11458__$1;
(statearr_11499_11551[(2)] = inst_11405);

(statearr_11499_11551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (11))){
var inst_11385 = (state_11458[(7)]);
var inst_11389 = (inst_11385 == null);
var inst_11390 = cljs.core.not(inst_11389);
var state_11458__$1 = state_11458;
if(inst_11390){
var statearr_11500_11552 = state_11458__$1;
(statearr_11500_11552[(1)] = (13));

} else {
var statearr_11501_11553 = state_11458__$1;
(statearr_11501_11553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (9))){
var inst_11360 = (state_11458[(8)]);
var state_11458__$1 = state_11458;
var statearr_11502_11554 = state_11458__$1;
(statearr_11502_11554[(2)] = inst_11360);

(statearr_11502_11554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (5))){
var state_11458__$1 = state_11458;
var statearr_11503_11555 = state_11458__$1;
(statearr_11503_11555[(2)] = true);

(statearr_11503_11555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (14))){
var state_11458__$1 = state_11458;
var statearr_11504_11556 = state_11458__$1;
(statearr_11504_11556[(2)] = false);

(statearr_11504_11556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (26))){
var inst_11418 = (state_11458[(9)]);
var inst_11425 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11418);
var state_11458__$1 = state_11458;
var statearr_11505_11557 = state_11458__$1;
(statearr_11505_11557[(2)] = inst_11425);

(statearr_11505_11557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (16))){
var state_11458__$1 = state_11458;
var statearr_11506_11558 = state_11458__$1;
(statearr_11506_11558[(2)] = true);

(statearr_11506_11558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (38))){
var inst_11448 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11507_11559 = state_11458__$1;
(statearr_11507_11559[(2)] = inst_11448);

(statearr_11507_11559[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (30))){
var inst_11418 = (state_11458[(9)]);
var inst_11410 = (state_11458[(13)]);
var inst_11409 = (state_11458[(11)]);
var inst_11435 = cljs.core.empty_QMARK_(inst_11409);
var inst_11436 = (inst_11410.cljs$core$IFn$_invoke$arity$1 ? inst_11410.cljs$core$IFn$_invoke$arity$1(inst_11418) : inst_11410.call(null,inst_11418));
var inst_11437 = cljs.core.not(inst_11436);
var inst_11438 = (inst_11435) && (inst_11437);
var state_11458__$1 = state_11458;
var statearr_11508_11560 = state_11458__$1;
(statearr_11508_11560[(2)] = inst_11438);

(statearr_11508_11560[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (10))){
var inst_11360 = (state_11458[(8)]);
var inst_11381 = (state_11458[(2)]);
var inst_11382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11381,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11381,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11381,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11385 = inst_11360;
var state_11458__$1 = (function (){var statearr_11509 = state_11458;
(statearr_11509[(7)] = inst_11385);

(statearr_11509[(16)] = inst_11383);

(statearr_11509[(17)] = inst_11382);

(statearr_11509[(18)] = inst_11384);

return statearr_11509;
})();
var statearr_11510_11561 = state_11458__$1;
(statearr_11510_11561[(2)] = null);

(statearr_11510_11561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (18))){
var inst_11400 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11511_11562 = state_11458__$1;
(statearr_11511_11562[(2)] = inst_11400);

(statearr_11511_11562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (37))){
var state_11458__$1 = state_11458;
var statearr_11512_11563 = state_11458__$1;
(statearr_11512_11563[(2)] = null);

(statearr_11512_11563[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (8))){
var inst_11360 = (state_11458[(8)]);
var inst_11378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11360);
var state_11458__$1 = state_11458;
var statearr_11513_11564 = state_11458__$1;
(statearr_11513_11564[(2)] = inst_11378);

(statearr_11513_11564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___11518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10278__auto__,c__10459__auto___11518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10279__auto__ = null;
var cljs$core$async$mix_$_state_machine__10279__auto____0 = (function (){
var statearr_11514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11514[(0)] = cljs$core$async$mix_$_state_machine__10279__auto__);

(statearr_11514[(1)] = (1));

return statearr_11514;
});
var cljs$core$async$mix_$_state_machine__10279__auto____1 = (function (state_11458){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11458);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11515){if((e11515 instanceof Object)){
var ex__10282__auto__ = e11515;
var statearr_11516_11565 = state_11458;
(statearr_11516_11565[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11566 = state_11458;
state_11458 = G__11566;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10279__auto__ = function(state_11458){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10279__auto____1.call(this,state_11458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10279__auto____0;
cljs$core$async$mix_$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10279__auto____1;
return cljs$core$async$mix_$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___11518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10461__auto__ = (function (){var statearr_11517 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11517[(6)] = c__10459__auto___11518);

return statearr_11517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___11518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18183__auto__ = (((p == null))?null:p);
var m__18184__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$4 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__18184__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__18184__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__18184__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18183__auto__ = (((p == null))?null:p);
var m__18184__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$3 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__18184__auto__.call(null,p,v,ch));
} else {
var m__18184__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__18184__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11568 = arguments.length;
switch (G__11568) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18183__auto__ = (((p == null))?null:p);
var m__18184__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__18184__auto__.call(null,p));
} else {
var m__18184__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__18184__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18183__auto__ = (((p == null))?null:p);
var m__18184__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__18184__auto__.call(null,p,v));
} else {
var m__18184__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__18184__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11572 = arguments.length;
switch (G__11572) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17846__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__17846__auto__,mults){
return (function (p1__11570_SHARP_){
if(cljs.core.truth_((p1__11570_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11570_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11570_SHARP_.call(null,topic)))){
return p1__11570_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11570_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__17846__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11573 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11574){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11574 = meta11574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11575,meta11574__$1){
var self__ = this;
var _11575__$1 = this;
return (new cljs.core.async.t_cljs$core$async11573(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11574__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11575){
var self__ = this;
var _11575__$1 = this;
return self__.meta11574;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11574","meta11574",144828616,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11573";

cljs.core.async.t_cljs$core$async11573.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async11573");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11573 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11573(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11574){
return (new cljs.core.async.t_cljs$core$async11573(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11574));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11573(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10459__auto___11693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___11693,mults,ensure_mult,p){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___11693,mults,ensure_mult,p){
return (function (state_11647){
var state_val_11648 = (state_11647[(1)]);
if((state_val_11648 === (7))){
var inst_11643 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11649_11694 = state_11647__$1;
(statearr_11649_11694[(2)] = inst_11643);

(statearr_11649_11694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (20))){
var state_11647__$1 = state_11647;
var statearr_11650_11695 = state_11647__$1;
(statearr_11650_11695[(2)] = null);

(statearr_11650_11695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (1))){
var state_11647__$1 = state_11647;
var statearr_11651_11696 = state_11647__$1;
(statearr_11651_11696[(2)] = null);

(statearr_11651_11696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (24))){
var inst_11626 = (state_11647[(7)]);
var inst_11635 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11626);
var state_11647__$1 = state_11647;
var statearr_11652_11697 = state_11647__$1;
(statearr_11652_11697[(2)] = inst_11635);

(statearr_11652_11697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (4))){
var inst_11578 = (state_11647[(8)]);
var inst_11578__$1 = (state_11647[(2)]);
var inst_11579 = (inst_11578__$1 == null);
var state_11647__$1 = (function (){var statearr_11653 = state_11647;
(statearr_11653[(8)] = inst_11578__$1);

return statearr_11653;
})();
if(cljs.core.truth_(inst_11579)){
var statearr_11654_11698 = state_11647__$1;
(statearr_11654_11698[(1)] = (5));

} else {
var statearr_11655_11699 = state_11647__$1;
(statearr_11655_11699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (15))){
var inst_11620 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11656_11700 = state_11647__$1;
(statearr_11656_11700[(2)] = inst_11620);

(statearr_11656_11700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (21))){
var inst_11640 = (state_11647[(2)]);
var state_11647__$1 = (function (){var statearr_11657 = state_11647;
(statearr_11657[(9)] = inst_11640);

return statearr_11657;
})();
var statearr_11658_11701 = state_11647__$1;
(statearr_11658_11701[(2)] = null);

(statearr_11658_11701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (13))){
var inst_11602 = (state_11647[(10)]);
var inst_11604 = cljs.core.chunked_seq_QMARK_(inst_11602);
var state_11647__$1 = state_11647;
if(inst_11604){
var statearr_11659_11702 = state_11647__$1;
(statearr_11659_11702[(1)] = (16));

} else {
var statearr_11660_11703 = state_11647__$1;
(statearr_11660_11703[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (22))){
var inst_11632 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
if(cljs.core.truth_(inst_11632)){
var statearr_11661_11704 = state_11647__$1;
(statearr_11661_11704[(1)] = (23));

} else {
var statearr_11662_11705 = state_11647__$1;
(statearr_11662_11705[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (6))){
var inst_11628 = (state_11647[(11)]);
var inst_11578 = (state_11647[(8)]);
var inst_11626 = (state_11647[(7)]);
var inst_11626__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11578) : topic_fn.call(null,inst_11578));
var inst_11627 = cljs.core.deref(mults);
var inst_11628__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11627,inst_11626__$1);
var state_11647__$1 = (function (){var statearr_11663 = state_11647;
(statearr_11663[(11)] = inst_11628__$1);

(statearr_11663[(7)] = inst_11626__$1);

return statearr_11663;
})();
if(cljs.core.truth_(inst_11628__$1)){
var statearr_11664_11706 = state_11647__$1;
(statearr_11664_11706[(1)] = (19));

} else {
var statearr_11665_11707 = state_11647__$1;
(statearr_11665_11707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (25))){
var inst_11637 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11666_11708 = state_11647__$1;
(statearr_11666_11708[(2)] = inst_11637);

(statearr_11666_11708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (17))){
var inst_11602 = (state_11647[(10)]);
var inst_11611 = cljs.core.first(inst_11602);
var inst_11612 = cljs.core.async.muxch_STAR_(inst_11611);
var inst_11613 = cljs.core.async.close_BANG_(inst_11612);
var inst_11614 = cljs.core.next(inst_11602);
var inst_11588 = inst_11614;
var inst_11589 = null;
var inst_11590 = (0);
var inst_11591 = (0);
var state_11647__$1 = (function (){var statearr_11667 = state_11647;
(statearr_11667[(12)] = inst_11590);

(statearr_11667[(13)] = inst_11589);

(statearr_11667[(14)] = inst_11591);

(statearr_11667[(15)] = inst_11613);

(statearr_11667[(16)] = inst_11588);

return statearr_11667;
})();
var statearr_11668_11709 = state_11647__$1;
(statearr_11668_11709[(2)] = null);

(statearr_11668_11709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (3))){
var inst_11645 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11647__$1,inst_11645);
} else {
if((state_val_11648 === (12))){
var inst_11622 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11669_11710 = state_11647__$1;
(statearr_11669_11710[(2)] = inst_11622);

(statearr_11669_11710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (2))){
var state_11647__$1 = state_11647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11647__$1,(4),ch);
} else {
if((state_val_11648 === (23))){
var state_11647__$1 = state_11647;
var statearr_11670_11711 = state_11647__$1;
(statearr_11670_11711[(2)] = null);

(statearr_11670_11711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (19))){
var inst_11628 = (state_11647[(11)]);
var inst_11578 = (state_11647[(8)]);
var inst_11630 = cljs.core.async.muxch_STAR_(inst_11628);
var state_11647__$1 = state_11647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11647__$1,(22),inst_11630,inst_11578);
} else {
if((state_val_11648 === (11))){
var inst_11602 = (state_11647[(10)]);
var inst_11588 = (state_11647[(16)]);
var inst_11602__$1 = cljs.core.seq(inst_11588);
var state_11647__$1 = (function (){var statearr_11671 = state_11647;
(statearr_11671[(10)] = inst_11602__$1);

return statearr_11671;
})();
if(inst_11602__$1){
var statearr_11672_11712 = state_11647__$1;
(statearr_11672_11712[(1)] = (13));

} else {
var statearr_11673_11713 = state_11647__$1;
(statearr_11673_11713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (9))){
var inst_11624 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11674_11714 = state_11647__$1;
(statearr_11674_11714[(2)] = inst_11624);

(statearr_11674_11714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (5))){
var inst_11585 = cljs.core.deref(mults);
var inst_11586 = cljs.core.vals(inst_11585);
var inst_11587 = cljs.core.seq(inst_11586);
var inst_11588 = inst_11587;
var inst_11589 = null;
var inst_11590 = (0);
var inst_11591 = (0);
var state_11647__$1 = (function (){var statearr_11675 = state_11647;
(statearr_11675[(12)] = inst_11590);

(statearr_11675[(13)] = inst_11589);

(statearr_11675[(14)] = inst_11591);

(statearr_11675[(16)] = inst_11588);

return statearr_11675;
})();
var statearr_11676_11715 = state_11647__$1;
(statearr_11676_11715[(2)] = null);

(statearr_11676_11715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (14))){
var state_11647__$1 = state_11647;
var statearr_11680_11716 = state_11647__$1;
(statearr_11680_11716[(2)] = null);

(statearr_11680_11716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (16))){
var inst_11602 = (state_11647[(10)]);
var inst_11606 = cljs.core.chunk_first(inst_11602);
var inst_11607 = cljs.core.chunk_rest(inst_11602);
var inst_11608 = cljs.core.count(inst_11606);
var inst_11588 = inst_11607;
var inst_11589 = inst_11606;
var inst_11590 = inst_11608;
var inst_11591 = (0);
var state_11647__$1 = (function (){var statearr_11681 = state_11647;
(statearr_11681[(12)] = inst_11590);

(statearr_11681[(13)] = inst_11589);

(statearr_11681[(14)] = inst_11591);

(statearr_11681[(16)] = inst_11588);

return statearr_11681;
})();
var statearr_11682_11717 = state_11647__$1;
(statearr_11682_11717[(2)] = null);

(statearr_11682_11717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (10))){
var inst_11590 = (state_11647[(12)]);
var inst_11589 = (state_11647[(13)]);
var inst_11591 = (state_11647[(14)]);
var inst_11588 = (state_11647[(16)]);
var inst_11596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11589,inst_11591);
var inst_11597 = cljs.core.async.muxch_STAR_(inst_11596);
var inst_11598 = cljs.core.async.close_BANG_(inst_11597);
var inst_11599 = (inst_11591 + (1));
var tmp11677 = inst_11590;
var tmp11678 = inst_11589;
var tmp11679 = inst_11588;
var inst_11588__$1 = tmp11679;
var inst_11589__$1 = tmp11678;
var inst_11590__$1 = tmp11677;
var inst_11591__$1 = inst_11599;
var state_11647__$1 = (function (){var statearr_11683 = state_11647;
(statearr_11683[(12)] = inst_11590__$1);

(statearr_11683[(13)] = inst_11589__$1);

(statearr_11683[(14)] = inst_11591__$1);

(statearr_11683[(17)] = inst_11598);

(statearr_11683[(16)] = inst_11588__$1);

return statearr_11683;
})();
var statearr_11684_11718 = state_11647__$1;
(statearr_11684_11718[(2)] = null);

(statearr_11684_11718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (18))){
var inst_11617 = (state_11647[(2)]);
var state_11647__$1 = state_11647;
var statearr_11685_11719 = state_11647__$1;
(statearr_11685_11719[(2)] = inst_11617);

(statearr_11685_11719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11648 === (8))){
var inst_11590 = (state_11647[(12)]);
var inst_11591 = (state_11647[(14)]);
var inst_11593 = (inst_11591 < inst_11590);
var inst_11594 = inst_11593;
var state_11647__$1 = state_11647;
if(cljs.core.truth_(inst_11594)){
var statearr_11686_11720 = state_11647__$1;
(statearr_11686_11720[(1)] = (10));

} else {
var statearr_11687_11721 = state_11647__$1;
(statearr_11687_11721[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___11693,mults,ensure_mult,p))
;
return ((function (switch__10278__auto__,c__10459__auto___11693,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_11688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11688[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_11688[(1)] = (1));

return statearr_11688;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_11647){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11647);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11689){if((e11689 instanceof Object)){
var ex__10282__auto__ = e11689;
var statearr_11690_11722 = state_11647;
(statearr_11690_11722[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11723 = state_11647;
state_11647 = G__11723;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_11647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_11647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___11693,mults,ensure_mult,p))
})();
var state__10461__auto__ = (function (){var statearr_11691 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11691[(6)] = c__10459__auto___11693);

return statearr_11691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___11693,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11725 = arguments.length;
switch (G__11725) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11728 = arguments.length;
switch (G__11728) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11731 = arguments.length;
switch (G__11731) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10459__auto___11798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___11798,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___11798,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11770){
var state_val_11771 = (state_11770[(1)]);
if((state_val_11771 === (7))){
var state_11770__$1 = state_11770;
var statearr_11772_11799 = state_11770__$1;
(statearr_11772_11799[(2)] = null);

(statearr_11772_11799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (1))){
var state_11770__$1 = state_11770;
var statearr_11773_11800 = state_11770__$1;
(statearr_11773_11800[(2)] = null);

(statearr_11773_11800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (4))){
var inst_11734 = (state_11770[(7)]);
var inst_11736 = (inst_11734 < cnt);
var state_11770__$1 = state_11770;
if(cljs.core.truth_(inst_11736)){
var statearr_11774_11801 = state_11770__$1;
(statearr_11774_11801[(1)] = (6));

} else {
var statearr_11775_11802 = state_11770__$1;
(statearr_11775_11802[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (15))){
var inst_11766 = (state_11770[(2)]);
var state_11770__$1 = state_11770;
var statearr_11776_11803 = state_11770__$1;
(statearr_11776_11803[(2)] = inst_11766);

(statearr_11776_11803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (13))){
var inst_11759 = cljs.core.async.close_BANG_(out);
var state_11770__$1 = state_11770;
var statearr_11777_11804 = state_11770__$1;
(statearr_11777_11804[(2)] = inst_11759);

(statearr_11777_11804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (6))){
var state_11770__$1 = state_11770;
var statearr_11778_11805 = state_11770__$1;
(statearr_11778_11805[(2)] = null);

(statearr_11778_11805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (3))){
var inst_11768 = (state_11770[(2)]);
var state_11770__$1 = state_11770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11770__$1,inst_11768);
} else {
if((state_val_11771 === (12))){
var inst_11756 = (state_11770[(8)]);
var inst_11756__$1 = (state_11770[(2)]);
var inst_11757 = cljs.core.some(cljs.core.nil_QMARK_,inst_11756__$1);
var state_11770__$1 = (function (){var statearr_11779 = state_11770;
(statearr_11779[(8)] = inst_11756__$1);

return statearr_11779;
})();
if(cljs.core.truth_(inst_11757)){
var statearr_11780_11806 = state_11770__$1;
(statearr_11780_11806[(1)] = (13));

} else {
var statearr_11781_11807 = state_11770__$1;
(statearr_11781_11807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (2))){
var inst_11733 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11734 = (0);
var state_11770__$1 = (function (){var statearr_11782 = state_11770;
(statearr_11782[(7)] = inst_11734);

(statearr_11782[(9)] = inst_11733);

return statearr_11782;
})();
var statearr_11783_11808 = state_11770__$1;
(statearr_11783_11808[(2)] = null);

(statearr_11783_11808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (11))){
var inst_11734 = (state_11770[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11770,(10),Object,null,(9));
var inst_11743 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11734) : chs__$1.call(null,inst_11734));
var inst_11744 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11734) : done.call(null,inst_11734));
var inst_11745 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11743,inst_11744);
var state_11770__$1 = state_11770;
var statearr_11784_11809 = state_11770__$1;
(statearr_11784_11809[(2)] = inst_11745);


cljs.core.async.impl.ioc_helpers.process_exception(state_11770__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (9))){
var inst_11734 = (state_11770[(7)]);
var inst_11747 = (state_11770[(2)]);
var inst_11748 = (inst_11734 + (1));
var inst_11734__$1 = inst_11748;
var state_11770__$1 = (function (){var statearr_11785 = state_11770;
(statearr_11785[(10)] = inst_11747);

(statearr_11785[(7)] = inst_11734__$1);

return statearr_11785;
})();
var statearr_11786_11810 = state_11770__$1;
(statearr_11786_11810[(2)] = null);

(statearr_11786_11810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (5))){
var inst_11754 = (state_11770[(2)]);
var state_11770__$1 = (function (){var statearr_11787 = state_11770;
(statearr_11787[(11)] = inst_11754);

return statearr_11787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11770__$1,(12),dchan);
} else {
if((state_val_11771 === (14))){
var inst_11756 = (state_11770[(8)]);
var inst_11761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11756);
var state_11770__$1 = state_11770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11770__$1,(16),out,inst_11761);
} else {
if((state_val_11771 === (16))){
var inst_11763 = (state_11770[(2)]);
var state_11770__$1 = (function (){var statearr_11788 = state_11770;
(statearr_11788[(12)] = inst_11763);

return statearr_11788;
})();
var statearr_11789_11811 = state_11770__$1;
(statearr_11789_11811[(2)] = null);

(statearr_11789_11811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (10))){
var inst_11738 = (state_11770[(2)]);
var inst_11739 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11770__$1 = (function (){var statearr_11790 = state_11770;
(statearr_11790[(13)] = inst_11738);

return statearr_11790;
})();
var statearr_11791_11812 = state_11770__$1;
(statearr_11791_11812[(2)] = inst_11739);


cljs.core.async.impl.ioc_helpers.process_exception(state_11770__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (8))){
var inst_11752 = (state_11770[(2)]);
var state_11770__$1 = state_11770;
var statearr_11792_11813 = state_11770__$1;
(statearr_11792_11813[(2)] = inst_11752);

(statearr_11792_11813[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___11798,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10278__auto__,c__10459__auto___11798,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_11793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11793[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_11793[(1)] = (1));

return statearr_11793;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_11770){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11770);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11794){if((e11794 instanceof Object)){
var ex__10282__auto__ = e11794;
var statearr_11795_11814 = state_11770;
(statearr_11795_11814[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11815 = state_11770;
state_11770 = G__11815;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_11770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_11770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___11798,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10461__auto__ = (function (){var statearr_11796 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11796[(6)] = c__10459__auto___11798);

return statearr_11796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___11798,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__11818 = arguments.length;
switch (G__11818) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10459__auto___11872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___11872,out){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___11872,out){
return (function (state_11850){
var state_val_11851 = (state_11850[(1)]);
if((state_val_11851 === (7))){
var inst_11829 = (state_11850[(7)]);
var inst_11830 = (state_11850[(8)]);
var inst_11829__$1 = (state_11850[(2)]);
var inst_11830__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11829__$1,(0),null);
var inst_11831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11829__$1,(1),null);
var inst_11832 = (inst_11830__$1 == null);
var state_11850__$1 = (function (){var statearr_11852 = state_11850;
(statearr_11852[(7)] = inst_11829__$1);

(statearr_11852[(8)] = inst_11830__$1);

(statearr_11852[(9)] = inst_11831);

return statearr_11852;
})();
if(cljs.core.truth_(inst_11832)){
var statearr_11853_11873 = state_11850__$1;
(statearr_11853_11873[(1)] = (8));

} else {
var statearr_11854_11874 = state_11850__$1;
(statearr_11854_11874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11851 === (1))){
var inst_11819 = cljs.core.vec(chs);
var inst_11820 = inst_11819;
var state_11850__$1 = (function (){var statearr_11855 = state_11850;
(statearr_11855[(10)] = inst_11820);

return statearr_11855;
})();
var statearr_11856_11875 = state_11850__$1;
(statearr_11856_11875[(2)] = null);

(statearr_11856_11875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11851 === (4))){
var inst_11820 = (state_11850[(10)]);
var state_11850__$1 = state_11850;
return cljs.core.async.ioc_alts_BANG_(state_11850__$1,(7),inst_11820);
} else {
if((state_val_11851 === (6))){
var inst_11846 = (state_11850[(2)]);
var state_11850__$1 = state_11850;
var statearr_11857_11876 = state_11850__$1;
(statearr_11857_11876[(2)] = inst_11846);

(statearr_11857_11876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11851 === (3))){
var inst_11848 = (state_11850[(2)]);
var state_11850__$1 = state_11850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11850__$1,inst_11848);
} else {
if((state_val_11851 === (2))){
var inst_11820 = (state_11850[(10)]);
var inst_11822 = cljs.core.count(inst_11820);
var inst_11823 = (inst_11822 > (0));
var state_11850__$1 = state_11850;
if(cljs.core.truth_(inst_11823)){
var statearr_11859_11877 = state_11850__$1;
(statearr_11859_11877[(1)] = (4));

} else {
var statearr_11860_11878 = state_11850__$1;
(statearr_11860_11878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11851 === (11))){
var inst_11820 = (state_11850[(10)]);
var inst_11839 = (state_11850[(2)]);
var tmp11858 = inst_11820;
var inst_11820__$1 = tmp11858;
var state_11850__$1 = (function (){var statearr_11861 = state_11850;
(statearr_11861[(10)] = inst_11820__$1);

(statearr_11861[(11)] = inst_11839);

return statearr_11861;
})();
var statearr_11862_11879 = state_11850__$1;
(statearr_11862_11879[(2)] = null);

(statearr_11862_11879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11851 === (9))){
var inst_11830 = (state_11850[(8)]);
var state_11850__$1 = state_11850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11850__$1,(11),out,inst_11830);
} else {
if((state_val_11851 === (5))){
var inst_11844 = cljs.core.async.close_BANG_(out);
var state_11850__$1 = state_11850;
var statearr_11863_11880 = state_11850__$1;
(statearr_11863_11880[(2)] = inst_11844);

(statearr_11863_11880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11851 === (10))){
var inst_11842 = (state_11850[(2)]);
var state_11850__$1 = state_11850;
var statearr_11864_11881 = state_11850__$1;
(statearr_11864_11881[(2)] = inst_11842);

(statearr_11864_11881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11851 === (8))){
var inst_11829 = (state_11850[(7)]);
var inst_11820 = (state_11850[(10)]);
var inst_11830 = (state_11850[(8)]);
var inst_11831 = (state_11850[(9)]);
var inst_11834 = (function (){var cs = inst_11820;
var vec__11825 = inst_11829;
var v = inst_11830;
var c = inst_11831;
return ((function (cs,vec__11825,v,c,inst_11829,inst_11820,inst_11830,inst_11831,state_val_11851,c__10459__auto___11872,out){
return (function (p1__11816_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__11816_SHARP_);
});
;})(cs,vec__11825,v,c,inst_11829,inst_11820,inst_11830,inst_11831,state_val_11851,c__10459__auto___11872,out))
})();
var inst_11835 = cljs.core.filterv(inst_11834,inst_11820);
var inst_11820__$1 = inst_11835;
var state_11850__$1 = (function (){var statearr_11865 = state_11850;
(statearr_11865[(10)] = inst_11820__$1);

return statearr_11865;
})();
var statearr_11866_11882 = state_11850__$1;
(statearr_11866_11882[(2)] = null);

(statearr_11866_11882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___11872,out))
;
return ((function (switch__10278__auto__,c__10459__auto___11872,out){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_11867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11867[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_11867[(1)] = (1));

return statearr_11867;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_11850){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11850);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11868){if((e11868 instanceof Object)){
var ex__10282__auto__ = e11868;
var statearr_11869_11883 = state_11850;
(statearr_11869_11883[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11884 = state_11850;
state_11850 = G__11884;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_11850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_11850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___11872,out))
})();
var state__10461__auto__ = (function (){var statearr_11870 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11870[(6)] = c__10459__auto___11872);

return statearr_11870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___11872,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11886 = arguments.length;
switch (G__11886) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10459__auto___11931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___11931,out){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___11931,out){
return (function (state_11910){
var state_val_11911 = (state_11910[(1)]);
if((state_val_11911 === (7))){
var inst_11892 = (state_11910[(7)]);
var inst_11892__$1 = (state_11910[(2)]);
var inst_11893 = (inst_11892__$1 == null);
var inst_11894 = cljs.core.not(inst_11893);
var state_11910__$1 = (function (){var statearr_11912 = state_11910;
(statearr_11912[(7)] = inst_11892__$1);

return statearr_11912;
})();
if(inst_11894){
var statearr_11913_11932 = state_11910__$1;
(statearr_11913_11932[(1)] = (8));

} else {
var statearr_11914_11933 = state_11910__$1;
(statearr_11914_11933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (1))){
var inst_11887 = (0);
var state_11910__$1 = (function (){var statearr_11915 = state_11910;
(statearr_11915[(8)] = inst_11887);

return statearr_11915;
})();
var statearr_11916_11934 = state_11910__$1;
(statearr_11916_11934[(2)] = null);

(statearr_11916_11934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (4))){
var state_11910__$1 = state_11910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11910__$1,(7),ch);
} else {
if((state_val_11911 === (6))){
var inst_11905 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
var statearr_11917_11935 = state_11910__$1;
(statearr_11917_11935[(2)] = inst_11905);

(statearr_11917_11935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (3))){
var inst_11907 = (state_11910[(2)]);
var inst_11908 = cljs.core.async.close_BANG_(out);
var state_11910__$1 = (function (){var statearr_11918 = state_11910;
(statearr_11918[(9)] = inst_11907);

return statearr_11918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11910__$1,inst_11908);
} else {
if((state_val_11911 === (2))){
var inst_11887 = (state_11910[(8)]);
var inst_11889 = (inst_11887 < n);
var state_11910__$1 = state_11910;
if(cljs.core.truth_(inst_11889)){
var statearr_11919_11936 = state_11910__$1;
(statearr_11919_11936[(1)] = (4));

} else {
var statearr_11920_11937 = state_11910__$1;
(statearr_11920_11937[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (11))){
var inst_11887 = (state_11910[(8)]);
var inst_11897 = (state_11910[(2)]);
var inst_11898 = (inst_11887 + (1));
var inst_11887__$1 = inst_11898;
var state_11910__$1 = (function (){var statearr_11921 = state_11910;
(statearr_11921[(8)] = inst_11887__$1);

(statearr_11921[(10)] = inst_11897);

return statearr_11921;
})();
var statearr_11922_11938 = state_11910__$1;
(statearr_11922_11938[(2)] = null);

(statearr_11922_11938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (9))){
var state_11910__$1 = state_11910;
var statearr_11923_11939 = state_11910__$1;
(statearr_11923_11939[(2)] = null);

(statearr_11923_11939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (5))){
var state_11910__$1 = state_11910;
var statearr_11924_11940 = state_11910__$1;
(statearr_11924_11940[(2)] = null);

(statearr_11924_11940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (10))){
var inst_11902 = (state_11910[(2)]);
var state_11910__$1 = state_11910;
var statearr_11925_11941 = state_11910__$1;
(statearr_11925_11941[(2)] = inst_11902);

(statearr_11925_11941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11911 === (8))){
var inst_11892 = (state_11910[(7)]);
var state_11910__$1 = state_11910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11910__$1,(11),out,inst_11892);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___11931,out))
;
return ((function (switch__10278__auto__,c__10459__auto___11931,out){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_11926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11926[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_11926[(1)] = (1));

return statearr_11926;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_11910){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11910);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11927){if((e11927 instanceof Object)){
var ex__10282__auto__ = e11927;
var statearr_11928_11942 = state_11910;
(statearr_11928_11942[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11943 = state_11910;
state_11910 = G__11943;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_11910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_11910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___11931,out))
})();
var state__10461__auto__ = (function (){var statearr_11929 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11929[(6)] = c__10459__auto___11931);

return statearr_11929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___11931,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11945 = (function (f,ch,meta11946){
this.f = f;
this.ch = ch;
this.meta11946 = meta11946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11947,meta11946__$1){
var self__ = this;
var _11947__$1 = this;
return (new cljs.core.async.t_cljs$core$async11945(self__.f,self__.ch,meta11946__$1));
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11947){
var self__ = this;
var _11947__$1 = this;
return self__.meta11946;
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11948 = (function (f,ch,meta11946,_,fn1,meta11949){
this.f = f;
this.ch = ch;
this.meta11946 = meta11946;
this._ = _;
this.fn1 = fn1;
this.meta11949 = meta11949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11950,meta11949__$1){
var self__ = this;
var _11950__$1 = this;
return (new cljs.core.async.t_cljs$core$async11948(self__.f,self__.ch,self__.meta11946,self__._,self__.fn1,meta11949__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11950){
var self__ = this;
var _11950__$1 = this;
return self__.meta11949;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11948.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11948.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11944_SHARP_){
var G__11951 = (((p1__11944_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11944_SHARP_) : self__.f.call(null,p1__11944_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__11951) : f1.call(null,G__11951));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11948.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11946","meta11946",509876440,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11945","cljs.core.async/t_cljs$core$async11945",-1378669323,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11949","meta11949",-618001025,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11948";

cljs.core.async.t_cljs$core$async11948.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async11948");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11948 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11948(f__$1,ch__$1,meta11946__$1,___$2,fn1__$1,meta11949){
return (new cljs.core.async.t_cljs$core$async11948(f__$1,ch__$1,meta11946__$1,___$2,fn1__$1,meta11949));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11948(self__.f,self__.ch,self__.meta11946,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17838__auto__ = ret;
if(cljs.core.truth_(and__17838__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__17838__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__11952 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__11952) : self__.f.call(null,G__11952));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11946","meta11946",509876440,null)], null);
});

cljs.core.async.t_cljs$core$async11945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11945";

cljs.core.async.t_cljs$core$async11945.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async11945");
});

cljs.core.async.__GT_t_cljs$core$async11945 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11945(f__$1,ch__$1,meta11946){
return (new cljs.core.async.t_cljs$core$async11945(f__$1,ch__$1,meta11946));
});

}

return (new cljs.core.async.t_cljs$core$async11945(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11953 = (function (f,ch,meta11954){
this.f = f;
this.ch = ch;
this.meta11954 = meta11954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11955,meta11954__$1){
var self__ = this;
var _11955__$1 = this;
return (new cljs.core.async.t_cljs$core$async11953(self__.f,self__.ch,meta11954__$1));
});

cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11955){
var self__ = this;
var _11955__$1 = this;
return self__.meta11954;
});

cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11953.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async11953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11954","meta11954",-1958440619,null)], null);
});

cljs.core.async.t_cljs$core$async11953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11953";

cljs.core.async.t_cljs$core$async11953.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async11953");
});

cljs.core.async.__GT_t_cljs$core$async11953 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11953(f__$1,ch__$1,meta11954){
return (new cljs.core.async.t_cljs$core$async11953(f__$1,ch__$1,meta11954));
});

}

return (new cljs.core.async.t_cljs$core$async11953(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11956 = (function (p,ch,meta11957){
this.p = p;
this.ch = ch;
this.meta11957 = meta11957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11958,meta11957__$1){
var self__ = this;
var _11958__$1 = this;
return (new cljs.core.async.t_cljs$core$async11956(self__.p,self__.ch,meta11957__$1));
});

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11958){
var self__ = this;
var _11958__$1 = this;
return self__.meta11957;
});

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11956.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11957","meta11957",376227948,null)], null);
});

cljs.core.async.t_cljs$core$async11956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11956";

cljs.core.async.t_cljs$core$async11956.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.core.async/t_cljs$core$async11956");
});

cljs.core.async.__GT_t_cljs$core$async11956 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11956(p__$1,ch__$1,meta11957){
return (new cljs.core.async.t_cljs$core$async11956(p__$1,ch__$1,meta11957));
});

}

return (new cljs.core.async.t_cljs$core$async11956(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11960 = arguments.length;
switch (G__11960) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10459__auto___12000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___12000,out){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___12000,out){
return (function (state_11981){
var state_val_11982 = (state_11981[(1)]);
if((state_val_11982 === (7))){
var inst_11977 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_11983_12001 = state_11981__$1;
(statearr_11983_12001[(2)] = inst_11977);

(statearr_11983_12001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (1))){
var state_11981__$1 = state_11981;
var statearr_11984_12002 = state_11981__$1;
(statearr_11984_12002[(2)] = null);

(statearr_11984_12002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (4))){
var inst_11963 = (state_11981[(7)]);
var inst_11963__$1 = (state_11981[(2)]);
var inst_11964 = (inst_11963__$1 == null);
var state_11981__$1 = (function (){var statearr_11985 = state_11981;
(statearr_11985[(7)] = inst_11963__$1);

return statearr_11985;
})();
if(cljs.core.truth_(inst_11964)){
var statearr_11986_12003 = state_11981__$1;
(statearr_11986_12003[(1)] = (5));

} else {
var statearr_11987_12004 = state_11981__$1;
(statearr_11987_12004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (6))){
var inst_11963 = (state_11981[(7)]);
var inst_11968 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11963) : p.call(null,inst_11963));
var state_11981__$1 = state_11981;
if(cljs.core.truth_(inst_11968)){
var statearr_11988_12005 = state_11981__$1;
(statearr_11988_12005[(1)] = (8));

} else {
var statearr_11989_12006 = state_11981__$1;
(statearr_11989_12006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (3))){
var inst_11979 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11981__$1,inst_11979);
} else {
if((state_val_11982 === (2))){
var state_11981__$1 = state_11981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11981__$1,(4),ch);
} else {
if((state_val_11982 === (11))){
var inst_11971 = (state_11981[(2)]);
var state_11981__$1 = state_11981;
var statearr_11990_12007 = state_11981__$1;
(statearr_11990_12007[(2)] = inst_11971);

(statearr_11990_12007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (9))){
var state_11981__$1 = state_11981;
var statearr_11991_12008 = state_11981__$1;
(statearr_11991_12008[(2)] = null);

(statearr_11991_12008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (5))){
var inst_11966 = cljs.core.async.close_BANG_(out);
var state_11981__$1 = state_11981;
var statearr_11992_12009 = state_11981__$1;
(statearr_11992_12009[(2)] = inst_11966);

(statearr_11992_12009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (10))){
var inst_11974 = (state_11981[(2)]);
var state_11981__$1 = (function (){var statearr_11993 = state_11981;
(statearr_11993[(8)] = inst_11974);

return statearr_11993;
})();
var statearr_11994_12010 = state_11981__$1;
(statearr_11994_12010[(2)] = null);

(statearr_11994_12010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11982 === (8))){
var inst_11963 = (state_11981[(7)]);
var state_11981__$1 = state_11981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11981__$1,(11),out,inst_11963);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___12000,out))
;
return ((function (switch__10278__auto__,c__10459__auto___12000,out){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_11995 = [null,null,null,null,null,null,null,null,null];
(statearr_11995[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_11995[(1)] = (1));

return statearr_11995;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_11981){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_11981);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e11996){if((e11996 instanceof Object)){
var ex__10282__auto__ = e11996;
var statearr_11997_12011 = state_11981;
(statearr_11997_12011[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12012 = state_11981;
state_11981 = G__12012;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_11981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_11981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___12000,out))
})();
var state__10461__auto__ = (function (){var statearr_11998 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_11998[(6)] = c__10459__auto___12000);

return statearr_11998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___12000,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12014 = arguments.length;
switch (G__12014) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10459__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto__){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto__){
return (function (state_12077){
var state_val_12078 = (state_12077[(1)]);
if((state_val_12078 === (7))){
var inst_12073 = (state_12077[(2)]);
var state_12077__$1 = state_12077;
var statearr_12079_12117 = state_12077__$1;
(statearr_12079_12117[(2)] = inst_12073);

(statearr_12079_12117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (20))){
var inst_12043 = (state_12077[(7)]);
var inst_12054 = (state_12077[(2)]);
var inst_12055 = cljs.core.next(inst_12043);
var inst_12029 = inst_12055;
var inst_12030 = null;
var inst_12031 = (0);
var inst_12032 = (0);
var state_12077__$1 = (function (){var statearr_12080 = state_12077;
(statearr_12080[(8)] = inst_12031);

(statearr_12080[(9)] = inst_12054);

(statearr_12080[(10)] = inst_12032);

(statearr_12080[(11)] = inst_12030);

(statearr_12080[(12)] = inst_12029);

return statearr_12080;
})();
var statearr_12081_12118 = state_12077__$1;
(statearr_12081_12118[(2)] = null);

(statearr_12081_12118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (1))){
var state_12077__$1 = state_12077;
var statearr_12082_12119 = state_12077__$1;
(statearr_12082_12119[(2)] = null);

(statearr_12082_12119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (4))){
var inst_12018 = (state_12077[(13)]);
var inst_12018__$1 = (state_12077[(2)]);
var inst_12019 = (inst_12018__$1 == null);
var state_12077__$1 = (function (){var statearr_12083 = state_12077;
(statearr_12083[(13)] = inst_12018__$1);

return statearr_12083;
})();
if(cljs.core.truth_(inst_12019)){
var statearr_12084_12120 = state_12077__$1;
(statearr_12084_12120[(1)] = (5));

} else {
var statearr_12085_12121 = state_12077__$1;
(statearr_12085_12121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (15))){
var state_12077__$1 = state_12077;
var statearr_12089_12122 = state_12077__$1;
(statearr_12089_12122[(2)] = null);

(statearr_12089_12122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (21))){
var state_12077__$1 = state_12077;
var statearr_12090_12123 = state_12077__$1;
(statearr_12090_12123[(2)] = null);

(statearr_12090_12123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (13))){
var inst_12031 = (state_12077[(8)]);
var inst_12032 = (state_12077[(10)]);
var inst_12030 = (state_12077[(11)]);
var inst_12029 = (state_12077[(12)]);
var inst_12039 = (state_12077[(2)]);
var inst_12040 = (inst_12032 + (1));
var tmp12086 = inst_12031;
var tmp12087 = inst_12030;
var tmp12088 = inst_12029;
var inst_12029__$1 = tmp12088;
var inst_12030__$1 = tmp12087;
var inst_12031__$1 = tmp12086;
var inst_12032__$1 = inst_12040;
var state_12077__$1 = (function (){var statearr_12091 = state_12077;
(statearr_12091[(8)] = inst_12031__$1);

(statearr_12091[(10)] = inst_12032__$1);

(statearr_12091[(14)] = inst_12039);

(statearr_12091[(11)] = inst_12030__$1);

(statearr_12091[(12)] = inst_12029__$1);

return statearr_12091;
})();
var statearr_12092_12124 = state_12077__$1;
(statearr_12092_12124[(2)] = null);

(statearr_12092_12124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (22))){
var state_12077__$1 = state_12077;
var statearr_12093_12125 = state_12077__$1;
(statearr_12093_12125[(2)] = null);

(statearr_12093_12125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (6))){
var inst_12018 = (state_12077[(13)]);
var inst_12027 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12018) : f.call(null,inst_12018));
var inst_12028 = cljs.core.seq(inst_12027);
var inst_12029 = inst_12028;
var inst_12030 = null;
var inst_12031 = (0);
var inst_12032 = (0);
var state_12077__$1 = (function (){var statearr_12094 = state_12077;
(statearr_12094[(8)] = inst_12031);

(statearr_12094[(10)] = inst_12032);

(statearr_12094[(11)] = inst_12030);

(statearr_12094[(12)] = inst_12029);

return statearr_12094;
})();
var statearr_12095_12126 = state_12077__$1;
(statearr_12095_12126[(2)] = null);

(statearr_12095_12126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (17))){
var inst_12043 = (state_12077[(7)]);
var inst_12047 = cljs.core.chunk_first(inst_12043);
var inst_12048 = cljs.core.chunk_rest(inst_12043);
var inst_12049 = cljs.core.count(inst_12047);
var inst_12029 = inst_12048;
var inst_12030 = inst_12047;
var inst_12031 = inst_12049;
var inst_12032 = (0);
var state_12077__$1 = (function (){var statearr_12096 = state_12077;
(statearr_12096[(8)] = inst_12031);

(statearr_12096[(10)] = inst_12032);

(statearr_12096[(11)] = inst_12030);

(statearr_12096[(12)] = inst_12029);

return statearr_12096;
})();
var statearr_12097_12127 = state_12077__$1;
(statearr_12097_12127[(2)] = null);

(statearr_12097_12127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (3))){
var inst_12075 = (state_12077[(2)]);
var state_12077__$1 = state_12077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12077__$1,inst_12075);
} else {
if((state_val_12078 === (12))){
var inst_12063 = (state_12077[(2)]);
var state_12077__$1 = state_12077;
var statearr_12098_12128 = state_12077__$1;
(statearr_12098_12128[(2)] = inst_12063);

(statearr_12098_12128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (2))){
var state_12077__$1 = state_12077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12077__$1,(4),in$);
} else {
if((state_val_12078 === (23))){
var inst_12071 = (state_12077[(2)]);
var state_12077__$1 = state_12077;
var statearr_12099_12129 = state_12077__$1;
(statearr_12099_12129[(2)] = inst_12071);

(statearr_12099_12129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (19))){
var inst_12058 = (state_12077[(2)]);
var state_12077__$1 = state_12077;
var statearr_12100_12130 = state_12077__$1;
(statearr_12100_12130[(2)] = inst_12058);

(statearr_12100_12130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (11))){
var inst_12043 = (state_12077[(7)]);
var inst_12029 = (state_12077[(12)]);
var inst_12043__$1 = cljs.core.seq(inst_12029);
var state_12077__$1 = (function (){var statearr_12101 = state_12077;
(statearr_12101[(7)] = inst_12043__$1);

return statearr_12101;
})();
if(inst_12043__$1){
var statearr_12102_12131 = state_12077__$1;
(statearr_12102_12131[(1)] = (14));

} else {
var statearr_12103_12132 = state_12077__$1;
(statearr_12103_12132[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (9))){
var inst_12065 = (state_12077[(2)]);
var inst_12066 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12077__$1 = (function (){var statearr_12104 = state_12077;
(statearr_12104[(15)] = inst_12065);

return statearr_12104;
})();
if(cljs.core.truth_(inst_12066)){
var statearr_12105_12133 = state_12077__$1;
(statearr_12105_12133[(1)] = (21));

} else {
var statearr_12106_12134 = state_12077__$1;
(statearr_12106_12134[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (5))){
var inst_12021 = cljs.core.async.close_BANG_(out);
var state_12077__$1 = state_12077;
var statearr_12107_12135 = state_12077__$1;
(statearr_12107_12135[(2)] = inst_12021);

(statearr_12107_12135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (14))){
var inst_12043 = (state_12077[(7)]);
var inst_12045 = cljs.core.chunked_seq_QMARK_(inst_12043);
var state_12077__$1 = state_12077;
if(inst_12045){
var statearr_12108_12136 = state_12077__$1;
(statearr_12108_12136[(1)] = (17));

} else {
var statearr_12109_12137 = state_12077__$1;
(statearr_12109_12137[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (16))){
var inst_12061 = (state_12077[(2)]);
var state_12077__$1 = state_12077;
var statearr_12110_12138 = state_12077__$1;
(statearr_12110_12138[(2)] = inst_12061);

(statearr_12110_12138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12078 === (10))){
var inst_12032 = (state_12077[(10)]);
var inst_12030 = (state_12077[(11)]);
var inst_12037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12030,inst_12032);
var state_12077__$1 = state_12077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12077__$1,(13),out,inst_12037);
} else {
if((state_val_12078 === (18))){
var inst_12043 = (state_12077[(7)]);
var inst_12052 = cljs.core.first(inst_12043);
var state_12077__$1 = state_12077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12077__$1,(20),out,inst_12052);
} else {
if((state_val_12078 === (8))){
var inst_12031 = (state_12077[(8)]);
var inst_12032 = (state_12077[(10)]);
var inst_12034 = (inst_12032 < inst_12031);
var inst_12035 = inst_12034;
var state_12077__$1 = state_12077;
if(cljs.core.truth_(inst_12035)){
var statearr_12111_12139 = state_12077__$1;
(statearr_12111_12139[(1)] = (10));

} else {
var statearr_12112_12140 = state_12077__$1;
(statearr_12112_12140[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto__))
;
return ((function (switch__10278__auto__,c__10459__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10279__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10279__auto____0 = (function (){
var statearr_12113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12113[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10279__auto__);

(statearr_12113[(1)] = (1));

return statearr_12113;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10279__auto____1 = (function (state_12077){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_12077);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e12114){if((e12114 instanceof Object)){
var ex__10282__auto__ = e12114;
var statearr_12115_12141 = state_12077;
(statearr_12115_12141[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12142 = state_12077;
state_12077 = G__12142;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10279__auto__ = function(state_12077){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10279__auto____1.call(this,state_12077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10279__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10279__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto__))
})();
var state__10461__auto__ = (function (){var statearr_12116 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_12116[(6)] = c__10459__auto__);

return statearr_12116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto__))
);

return c__10459__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12144 = arguments.length;
switch (G__12144) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12147 = arguments.length;
switch (G__12147) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12150 = arguments.length;
switch (G__12150) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10459__auto___12197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___12197,out){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___12197,out){
return (function (state_12174){
var state_val_12175 = (state_12174[(1)]);
if((state_val_12175 === (7))){
var inst_12169 = (state_12174[(2)]);
var state_12174__$1 = state_12174;
var statearr_12176_12198 = state_12174__$1;
(statearr_12176_12198[(2)] = inst_12169);

(statearr_12176_12198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12175 === (1))){
var inst_12151 = null;
var state_12174__$1 = (function (){var statearr_12177 = state_12174;
(statearr_12177[(7)] = inst_12151);

return statearr_12177;
})();
var statearr_12178_12199 = state_12174__$1;
(statearr_12178_12199[(2)] = null);

(statearr_12178_12199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12175 === (4))){
var inst_12154 = (state_12174[(8)]);
var inst_12154__$1 = (state_12174[(2)]);
var inst_12155 = (inst_12154__$1 == null);
var inst_12156 = cljs.core.not(inst_12155);
var state_12174__$1 = (function (){var statearr_12179 = state_12174;
(statearr_12179[(8)] = inst_12154__$1);

return statearr_12179;
})();
if(inst_12156){
var statearr_12180_12200 = state_12174__$1;
(statearr_12180_12200[(1)] = (5));

} else {
var statearr_12181_12201 = state_12174__$1;
(statearr_12181_12201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12175 === (6))){
var state_12174__$1 = state_12174;
var statearr_12182_12202 = state_12174__$1;
(statearr_12182_12202[(2)] = null);

(statearr_12182_12202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12175 === (3))){
var inst_12171 = (state_12174[(2)]);
var inst_12172 = cljs.core.async.close_BANG_(out);
var state_12174__$1 = (function (){var statearr_12183 = state_12174;
(statearr_12183[(9)] = inst_12171);

return statearr_12183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12174__$1,inst_12172);
} else {
if((state_val_12175 === (2))){
var state_12174__$1 = state_12174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12174__$1,(4),ch);
} else {
if((state_val_12175 === (11))){
var inst_12154 = (state_12174[(8)]);
var inst_12163 = (state_12174[(2)]);
var inst_12151 = inst_12154;
var state_12174__$1 = (function (){var statearr_12184 = state_12174;
(statearr_12184[(10)] = inst_12163);

(statearr_12184[(7)] = inst_12151);

return statearr_12184;
})();
var statearr_12185_12203 = state_12174__$1;
(statearr_12185_12203[(2)] = null);

(statearr_12185_12203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12175 === (9))){
var inst_12154 = (state_12174[(8)]);
var state_12174__$1 = state_12174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12174__$1,(11),out,inst_12154);
} else {
if((state_val_12175 === (5))){
var inst_12154 = (state_12174[(8)]);
var inst_12151 = (state_12174[(7)]);
var inst_12158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12154,inst_12151);
var state_12174__$1 = state_12174;
if(inst_12158){
var statearr_12187_12204 = state_12174__$1;
(statearr_12187_12204[(1)] = (8));

} else {
var statearr_12188_12205 = state_12174__$1;
(statearr_12188_12205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12175 === (10))){
var inst_12166 = (state_12174[(2)]);
var state_12174__$1 = state_12174;
var statearr_12189_12206 = state_12174__$1;
(statearr_12189_12206[(2)] = inst_12166);

(statearr_12189_12206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12175 === (8))){
var inst_12151 = (state_12174[(7)]);
var tmp12186 = inst_12151;
var inst_12151__$1 = tmp12186;
var state_12174__$1 = (function (){var statearr_12190 = state_12174;
(statearr_12190[(7)] = inst_12151__$1);

return statearr_12190;
})();
var statearr_12191_12207 = state_12174__$1;
(statearr_12191_12207[(2)] = null);

(statearr_12191_12207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___12197,out))
;
return ((function (switch__10278__auto__,c__10459__auto___12197,out){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_12192 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12192[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_12192[(1)] = (1));

return statearr_12192;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_12174){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_12174);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e12193){if((e12193 instanceof Object)){
var ex__10282__auto__ = e12193;
var statearr_12194_12208 = state_12174;
(statearr_12194_12208[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12209 = state_12174;
state_12174 = G__12209;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_12174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_12174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___12197,out))
})();
var state__10461__auto__ = (function (){var statearr_12195 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_12195[(6)] = c__10459__auto___12197);

return statearr_12195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___12197,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12211 = arguments.length;
switch (G__12211) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10459__auto___12277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___12277,out){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___12277,out){
return (function (state_12249){
var state_val_12250 = (state_12249[(1)]);
if((state_val_12250 === (7))){
var inst_12245 = (state_12249[(2)]);
var state_12249__$1 = state_12249;
var statearr_12251_12278 = state_12249__$1;
(statearr_12251_12278[(2)] = inst_12245);

(statearr_12251_12278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (1))){
var inst_12212 = (new Array(n));
var inst_12213 = inst_12212;
var inst_12214 = (0);
var state_12249__$1 = (function (){var statearr_12252 = state_12249;
(statearr_12252[(7)] = inst_12214);

(statearr_12252[(8)] = inst_12213);

return statearr_12252;
})();
var statearr_12253_12279 = state_12249__$1;
(statearr_12253_12279[(2)] = null);

(statearr_12253_12279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (4))){
var inst_12217 = (state_12249[(9)]);
var inst_12217__$1 = (state_12249[(2)]);
var inst_12218 = (inst_12217__$1 == null);
var inst_12219 = cljs.core.not(inst_12218);
var state_12249__$1 = (function (){var statearr_12254 = state_12249;
(statearr_12254[(9)] = inst_12217__$1);

return statearr_12254;
})();
if(inst_12219){
var statearr_12255_12280 = state_12249__$1;
(statearr_12255_12280[(1)] = (5));

} else {
var statearr_12256_12281 = state_12249__$1;
(statearr_12256_12281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (15))){
var inst_12239 = (state_12249[(2)]);
var state_12249__$1 = state_12249;
var statearr_12257_12282 = state_12249__$1;
(statearr_12257_12282[(2)] = inst_12239);

(statearr_12257_12282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (13))){
var state_12249__$1 = state_12249;
var statearr_12258_12283 = state_12249__$1;
(statearr_12258_12283[(2)] = null);

(statearr_12258_12283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (6))){
var inst_12214 = (state_12249[(7)]);
var inst_12235 = (inst_12214 > (0));
var state_12249__$1 = state_12249;
if(cljs.core.truth_(inst_12235)){
var statearr_12259_12284 = state_12249__$1;
(statearr_12259_12284[(1)] = (12));

} else {
var statearr_12260_12285 = state_12249__$1;
(statearr_12260_12285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (3))){
var inst_12247 = (state_12249[(2)]);
var state_12249__$1 = state_12249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12249__$1,inst_12247);
} else {
if((state_val_12250 === (12))){
var inst_12213 = (state_12249[(8)]);
var inst_12237 = cljs.core.vec(inst_12213);
var state_12249__$1 = state_12249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12249__$1,(15),out,inst_12237);
} else {
if((state_val_12250 === (2))){
var state_12249__$1 = state_12249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12249__$1,(4),ch);
} else {
if((state_val_12250 === (11))){
var inst_12229 = (state_12249[(2)]);
var inst_12230 = (new Array(n));
var inst_12213 = inst_12230;
var inst_12214 = (0);
var state_12249__$1 = (function (){var statearr_12261 = state_12249;
(statearr_12261[(7)] = inst_12214);

(statearr_12261[(8)] = inst_12213);

(statearr_12261[(10)] = inst_12229);

return statearr_12261;
})();
var statearr_12262_12286 = state_12249__$1;
(statearr_12262_12286[(2)] = null);

(statearr_12262_12286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (9))){
var inst_12213 = (state_12249[(8)]);
var inst_12227 = cljs.core.vec(inst_12213);
var state_12249__$1 = state_12249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12249__$1,(11),out,inst_12227);
} else {
if((state_val_12250 === (5))){
var inst_12214 = (state_12249[(7)]);
var inst_12222 = (state_12249[(11)]);
var inst_12217 = (state_12249[(9)]);
var inst_12213 = (state_12249[(8)]);
var inst_12221 = (inst_12213[inst_12214] = inst_12217);
var inst_12222__$1 = (inst_12214 + (1));
var inst_12223 = (inst_12222__$1 < n);
var state_12249__$1 = (function (){var statearr_12263 = state_12249;
(statearr_12263[(11)] = inst_12222__$1);

(statearr_12263[(12)] = inst_12221);

return statearr_12263;
})();
if(cljs.core.truth_(inst_12223)){
var statearr_12264_12287 = state_12249__$1;
(statearr_12264_12287[(1)] = (8));

} else {
var statearr_12265_12288 = state_12249__$1;
(statearr_12265_12288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (14))){
var inst_12242 = (state_12249[(2)]);
var inst_12243 = cljs.core.async.close_BANG_(out);
var state_12249__$1 = (function (){var statearr_12267 = state_12249;
(statearr_12267[(13)] = inst_12242);

return statearr_12267;
})();
var statearr_12268_12289 = state_12249__$1;
(statearr_12268_12289[(2)] = inst_12243);

(statearr_12268_12289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (10))){
var inst_12233 = (state_12249[(2)]);
var state_12249__$1 = state_12249;
var statearr_12269_12290 = state_12249__$1;
(statearr_12269_12290[(2)] = inst_12233);

(statearr_12269_12290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12250 === (8))){
var inst_12222 = (state_12249[(11)]);
var inst_12213 = (state_12249[(8)]);
var tmp12266 = inst_12213;
var inst_12213__$1 = tmp12266;
var inst_12214 = inst_12222;
var state_12249__$1 = (function (){var statearr_12270 = state_12249;
(statearr_12270[(7)] = inst_12214);

(statearr_12270[(8)] = inst_12213__$1);

return statearr_12270;
})();
var statearr_12271_12291 = state_12249__$1;
(statearr_12271_12291[(2)] = null);

(statearr_12271_12291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___12277,out))
;
return ((function (switch__10278__auto__,c__10459__auto___12277,out){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_12272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12272[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_12272[(1)] = (1));

return statearr_12272;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_12249){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_12249);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e12273){if((e12273 instanceof Object)){
var ex__10282__auto__ = e12273;
var statearr_12274_12292 = state_12249;
(statearr_12274_12292[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12293 = state_12249;
state_12249 = G__12293;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_12249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_12249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___12277,out))
})();
var state__10461__auto__ = (function (){var statearr_12275 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_12275[(6)] = c__10459__auto___12277);

return statearr_12275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___12277,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12295 = arguments.length;
switch (G__12295) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10459__auto___12365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10459__auto___12365,out){
return (function (){
var f__10460__auto__ = (function (){var switch__10278__auto__ = ((function (c__10459__auto___12365,out){
return (function (state_12337){
var state_val_12338 = (state_12337[(1)]);
if((state_val_12338 === (7))){
var inst_12333 = (state_12337[(2)]);
var state_12337__$1 = state_12337;
var statearr_12339_12366 = state_12337__$1;
(statearr_12339_12366[(2)] = inst_12333);

(statearr_12339_12366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (1))){
var inst_12296 = [];
var inst_12297 = inst_12296;
var inst_12298 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12337__$1 = (function (){var statearr_12340 = state_12337;
(statearr_12340[(7)] = inst_12298);

(statearr_12340[(8)] = inst_12297);

return statearr_12340;
})();
var statearr_12341_12367 = state_12337__$1;
(statearr_12341_12367[(2)] = null);

(statearr_12341_12367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (4))){
var inst_12301 = (state_12337[(9)]);
var inst_12301__$1 = (state_12337[(2)]);
var inst_12302 = (inst_12301__$1 == null);
var inst_12303 = cljs.core.not(inst_12302);
var state_12337__$1 = (function (){var statearr_12342 = state_12337;
(statearr_12342[(9)] = inst_12301__$1);

return statearr_12342;
})();
if(inst_12303){
var statearr_12343_12368 = state_12337__$1;
(statearr_12343_12368[(1)] = (5));

} else {
var statearr_12344_12369 = state_12337__$1;
(statearr_12344_12369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (15))){
var inst_12327 = (state_12337[(2)]);
var state_12337__$1 = state_12337;
var statearr_12345_12370 = state_12337__$1;
(statearr_12345_12370[(2)] = inst_12327);

(statearr_12345_12370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (13))){
var state_12337__$1 = state_12337;
var statearr_12346_12371 = state_12337__$1;
(statearr_12346_12371[(2)] = null);

(statearr_12346_12371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (6))){
var inst_12297 = (state_12337[(8)]);
var inst_12322 = inst_12297.length;
var inst_12323 = (inst_12322 > (0));
var state_12337__$1 = state_12337;
if(cljs.core.truth_(inst_12323)){
var statearr_12347_12372 = state_12337__$1;
(statearr_12347_12372[(1)] = (12));

} else {
var statearr_12348_12373 = state_12337__$1;
(statearr_12348_12373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (3))){
var inst_12335 = (state_12337[(2)]);
var state_12337__$1 = state_12337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12337__$1,inst_12335);
} else {
if((state_val_12338 === (12))){
var inst_12297 = (state_12337[(8)]);
var inst_12325 = cljs.core.vec(inst_12297);
var state_12337__$1 = state_12337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12337__$1,(15),out,inst_12325);
} else {
if((state_val_12338 === (2))){
var state_12337__$1 = state_12337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12337__$1,(4),ch);
} else {
if((state_val_12338 === (11))){
var inst_12305 = (state_12337[(10)]);
var inst_12301 = (state_12337[(9)]);
var inst_12315 = (state_12337[(2)]);
var inst_12316 = [];
var inst_12317 = inst_12316.push(inst_12301);
var inst_12297 = inst_12316;
var inst_12298 = inst_12305;
var state_12337__$1 = (function (){var statearr_12349 = state_12337;
(statearr_12349[(11)] = inst_12317);

(statearr_12349[(7)] = inst_12298);

(statearr_12349[(8)] = inst_12297);

(statearr_12349[(12)] = inst_12315);

return statearr_12349;
})();
var statearr_12350_12374 = state_12337__$1;
(statearr_12350_12374[(2)] = null);

(statearr_12350_12374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (9))){
var inst_12297 = (state_12337[(8)]);
var inst_12313 = cljs.core.vec(inst_12297);
var state_12337__$1 = state_12337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12337__$1,(11),out,inst_12313);
} else {
if((state_val_12338 === (5))){
var inst_12305 = (state_12337[(10)]);
var inst_12298 = (state_12337[(7)]);
var inst_12301 = (state_12337[(9)]);
var inst_12305__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12301) : f.call(null,inst_12301));
var inst_12306 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12305__$1,inst_12298);
var inst_12307 = cljs.core.keyword_identical_QMARK_(inst_12298,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12308 = (inst_12306) || (inst_12307);
var state_12337__$1 = (function (){var statearr_12351 = state_12337;
(statearr_12351[(10)] = inst_12305__$1);

return statearr_12351;
})();
if(cljs.core.truth_(inst_12308)){
var statearr_12352_12375 = state_12337__$1;
(statearr_12352_12375[(1)] = (8));

} else {
var statearr_12353_12376 = state_12337__$1;
(statearr_12353_12376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (14))){
var inst_12330 = (state_12337[(2)]);
var inst_12331 = cljs.core.async.close_BANG_(out);
var state_12337__$1 = (function (){var statearr_12355 = state_12337;
(statearr_12355[(13)] = inst_12330);

return statearr_12355;
})();
var statearr_12356_12377 = state_12337__$1;
(statearr_12356_12377[(2)] = inst_12331);

(statearr_12356_12377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (10))){
var inst_12320 = (state_12337[(2)]);
var state_12337__$1 = state_12337;
var statearr_12357_12378 = state_12337__$1;
(statearr_12357_12378[(2)] = inst_12320);

(statearr_12357_12378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (8))){
var inst_12305 = (state_12337[(10)]);
var inst_12297 = (state_12337[(8)]);
var inst_12301 = (state_12337[(9)]);
var inst_12310 = inst_12297.push(inst_12301);
var tmp12354 = inst_12297;
var inst_12297__$1 = tmp12354;
var inst_12298 = inst_12305;
var state_12337__$1 = (function (){var statearr_12358 = state_12337;
(statearr_12358[(7)] = inst_12298);

(statearr_12358[(14)] = inst_12310);

(statearr_12358[(8)] = inst_12297__$1);

return statearr_12358;
})();
var statearr_12359_12379 = state_12337__$1;
(statearr_12359_12379[(2)] = null);

(statearr_12359_12379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10459__auto___12365,out))
;
return ((function (switch__10278__auto__,c__10459__auto___12365,out){
return (function() {
var cljs$core$async$state_machine__10279__auto__ = null;
var cljs$core$async$state_machine__10279__auto____0 = (function (){
var statearr_12360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12360[(0)] = cljs$core$async$state_machine__10279__auto__);

(statearr_12360[(1)] = (1));

return statearr_12360;
});
var cljs$core$async$state_machine__10279__auto____1 = (function (state_12337){
while(true){
var ret_value__10280__auto__ = (function (){try{while(true){
var result__10281__auto__ = switch__10278__auto__(state_12337);
if(cljs.core.keyword_identical_QMARK_(result__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10281__auto__;
}
break;
}
}catch (e12361){if((e12361 instanceof Object)){
var ex__10282__auto__ = e12361;
var statearr_12362_12380 = state_12337;
(statearr_12362_12380[(5)] = ex__10282__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12381 = state_12337;
state_12337 = G__12381;
continue;
} else {
return ret_value__10280__auto__;
}
break;
}
});
cljs$core$async$state_machine__10279__auto__ = function(state_12337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10279__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10279__auto____1.call(this,state_12337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10279__auto____0;
cljs$core$async$state_machine__10279__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10279__auto____1;
return cljs$core$async$state_machine__10279__auto__;
})()
;})(switch__10278__auto__,c__10459__auto___12365,out))
})();
var state__10461__auto__ = (function (){var statearr_12363 = (f__10460__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10460__auto__.cljs$core$IFn$_invoke$arity$0() : f__10460__auto__.call(null));
(statearr_12363[(6)] = c__10459__auto___12365);

return statearr_12363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10461__auto__);
});})(c__10459__auto___12365,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


module.exports = cljs.core.async;
