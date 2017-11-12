var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./goog.object.object.js");
require("./cljs.tools.reader.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.cljs.devtools.client.env.js"] = true;

goog.provide('shadow.cljs.devtools.client.env');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
if(typeof shadow.cljs.devtools.client.env.client_id !== 'undefined'){
} else {
shadow.cljs.devtools.client.env.client_id = cljs.core.random_uuid();
}

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.enabled",false);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.autoload",true);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.module_format","goog");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.before_load","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.before_load_async","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.after_load","");

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.reload_with_state",false);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.build_id","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.proc_id","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.repl_host","");

/** @define {number} */
goog.define("shadow.cljs.devtools.client.env.repl_port",(8200));

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.ssl",false);
shadow.cljs.devtools.client.env.ws_url = (function shadow$cljs$devtools$client$env$ws_url(var_args){
var G__10410 = arguments.length;
switch (G__10410) {
case 1:
return shadow.cljs.devtools.client.env.ws_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.env.ws_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.env.ws_url.cljs$core$IFn$_invoke$arity$1 = (function (client_type){
return shadow.cljs.devtools.client.env.ws_url.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.repl_host,client_type);
});

shadow.cljs.devtools.client.env.ws_url.cljs$core$IFn$_invoke$arity$2 = (function (host,client_type){
if((client_type instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? client-type)"));
}

return ["ws",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/ws/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.client_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(client_type))].join('');
});

shadow.cljs.devtools.client.env.ws_url.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.env.ws_listener_url = (function shadow$cljs$devtools$client$env$ws_listener_url(){
return ["ws",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/listener-ws/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.client_id)].join('');
});
shadow.cljs.devtools.client.env.files_url = (function shadow$cljs$devtools$client$env$files_url(){
return ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/files/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.client_id)].join('');
});
shadow.cljs.devtools.client.env.repl_print_fn = cljs.core.pr_str;
shadow.cljs.devtools.client.env.repl_call = (function shadow$cljs$devtools$client$env$repl_call(repl_expr,repl_error){
var result = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","result","repl/result",1421065572)], null);
try{var ret = (repl_expr.cljs$core$IFn$_invoke$arity$0 ? repl_expr.cljs$core$IFn$_invoke$arity$0() : repl_expr.call(null));
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = ret;

try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"value","value",305978217),(shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1(ret) : shadow.cljs.devtools.client.env.repl_print_fn.call(null,ret)));
}catch (e10414){var e = e10414;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED");
}}catch (e10412){var e = e10412;
cljs.core._STAR_e = e;

return (repl_error.cljs$core$IFn$_invoke$arity$2 ? repl_error.cljs$core$IFn$_invoke$arity$2(result,e) : repl_error.call(null,result,e));
}});
shadow.cljs.devtools.client.env.process_ws_msg = (function shadow$cljs$devtools$client$env$process_ws_msg(e,handler){
var _STAR_default_data_reader_fn_STAR_10416 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = ((function (_STAR_default_data_reader_fn_STAR_10416){
return (function (tag,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tagged-literal","tagged-literal",1758013066),tag,value], null);
});})(_STAR_default_data_reader_fn_STAR_10416))
;

try{var text = e.data;
var msg = (function (){try{return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
}catch (e10418){var e__$1 = e10418;
return console.warn("failed to parse websocket message",text,e__$1);
}})();
if(cljs.core.truth_(msg)){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(msg) : handler.call(null,msg));
} else {
return null;
}
}finally {cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR_10416;
}});

module.exports = shadow.cljs.devtools.client.env;
