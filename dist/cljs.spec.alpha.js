var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./goog.object.object.js");
require("./clojure.walk.js");
require("./cljs.spec.gen.alpha.js");
require("./clojure.string.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.spec.alpha.js"] = true;

goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__18183__auto__ = (((spec == null))?null:spec);
var m__18184__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__18184__auto__.call(null,spec,x));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__18184__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__18183__auto__ = (((spec == null))?null:spec);
var m__18184__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__18184__auto__.call(null,spec,y));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__18184__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__18183__auto__ = (((spec == null))?null:spec);
var m__18184__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$5 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__18184__auto__.call(null,spec,path,via,in$,x));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__18184__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__18183__auto__ = (((spec == null))?null:spec);
var m__18184__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$4 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__18184__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__18184__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__18183__auto__ = (((spec == null))?null:spec);
var m__18184__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__18184__auto__.call(null,spec,gfn));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__18184__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__18183__auto__ = (((spec == null))?null:spec);
var m__18184__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__18184__auto__.call(null,spec));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__18184__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__5680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__5680;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__17846__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__17838__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__17838__auto__)){
return x;
} else {
return and__17838__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__17846__auto__ = (function (){var and__17838__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__17838__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__17838__auto__;
}
})();
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
var or__17846__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__17846__auto____$1)){
return or__17846__auto____$1;
} else {
var or__17846__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__17846__auto____$2)){
return or__17846__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name((cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.alpha.regex_spec_impl.call(null,s,null)),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__17846__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__5689 = arguments.length;
switch (G__5689) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__18183__auto__ = (((_ == null))?null:_);
var m__18184__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__18184__auto__.call(null,_));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__18184__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__18183__auto__ = (((_ == null))?null:_);
var m__18184__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__18183__auto__)]);
if(!((m__18184__auto__ == null))){
return (m__18184__auto__.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__18184__auto__.call(null,_,form));
} else {
var m__18184__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__18184__auto____$1 == null))){
return (m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__18184__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__18184__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

var G__5704_5711 = cljs.spec.alpha.specize_STAR_;
var G__5705_5712 = "_";
var G__5706_5713 = ((function (G__5704_5711,G__5705_5712){
return (function() {
var G__5714 = null;
var G__5714__1 = (function (o){
var G__5707 = new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818);
var G__5708 = o;
var G__5709 = null;
var G__5710 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__5707,G__5708,G__5709,G__5710) : cljs.spec.alpha.spec_impl.call(null,G__5707,G__5708,G__5709,G__5710));
});
var G__5714__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__5714 = function(o,form){
switch(arguments.length){
case 1:
return G__5714__1.call(this,o);
case 2:
return G__5714__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__5714.cljs$core$IFn$_invoke$arity$1 = G__5714__1;
G__5714.cljs$core$IFn$_invoke$arity$2 = G__5714__2;
return G__5714;
})()
;})(G__5704_5711,G__5705_5712))
;
goog.object.set(G__5704_5711,G__5705_5712,G__5706_5713);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__5716 = arguments.length;
switch (G__5716) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__17846__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__17846__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__17838__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__17838__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__17838__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = (form instanceof cljs.core.Symbol);
if(and__17838__auto__){
return cljs.core.namespace(form);
} else {
return and__17838__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5457__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__5457__auto__)){
var probs = temp__5457__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__5718_SHARP_){
return (- cljs.core.count(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__5718_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__18453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_5719_5765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_5720_5766 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_5719_5765,_STAR_print_fn_STAR_5720_5766,sb__18453__auto__,problems){
return (function (x__18454__auto__){
return sb__18453__auto__.append(x__18454__auto__);
});})(_STAR_print_newline_STAR_5719_5765,_STAR_print_fn_STAR_5720_5766,sb__18453__auto__,problems))
;

try{var seq__5721_5767 = cljs.core.seq(problems);
var chunk__5722_5768 = null;
var count__5723_5769 = (0);
var i__5724_5770 = (0);
while(true){
if((i__5724_5770 < count__5723_5769)){
var map__5725_5771 = chunk__5722_5768.cljs$core$IIndexed$_nth$arity$2(null,i__5724_5770);
var map__5725_5772__$1 = ((((!((map__5725_5771 == null)))?((((map__5725_5771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5725_5771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5725_5771):map__5725_5771);
var prob_5773 = map__5725_5772__$1;
var path_5774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5725_5772__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_5775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5725_5772__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_5776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5725_5772__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_5777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5725_5772__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_5778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5725_5772__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_5779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5725_5772__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_(in_5779)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_5779], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_5776], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_5778)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_5778)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_5774)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_5774], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_5775)], 0));

if(cljs.core.truth_(reason_5777)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_5777], 0));
} else {
}

var seq__5727_5780 = cljs.core.seq(prob_5773);
var chunk__5728_5781 = null;
var count__5729_5782 = (0);
var i__5730_5783 = (0);
while(true){
if((i__5730_5783 < count__5729_5782)){
var vec__5731_5784 = chunk__5728_5781.cljs$core$IIndexed$_nth$arity$2(null,i__5730_5783);
var k_5785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5731_5784,(0),null);
var v_5786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5731_5784,(1),null);
if(cljs.core.truth_((function (){var fexpr__5734 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__5734.cljs$core$IFn$_invoke$arity$1 ? fexpr__5734.cljs$core$IFn$_invoke$arity$1(k_5785) : fexpr__5734.call(null,k_5785));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_5785], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_5786], 0));
}

var G__5787 = seq__5727_5780;
var G__5788 = chunk__5728_5781;
var G__5789 = count__5729_5782;
var G__5790 = (i__5730_5783 + (1));
seq__5727_5780 = G__5787;
chunk__5728_5781 = G__5788;
count__5729_5782 = G__5789;
i__5730_5783 = G__5790;
continue;
} else {
var temp__5457__auto___5791 = cljs.core.seq(seq__5727_5780);
if(temp__5457__auto___5791){
var seq__5727_5792__$1 = temp__5457__auto___5791;
if(cljs.core.chunked_seq_QMARK_(seq__5727_5792__$1)){
var c__18333__auto___5793 = cljs.core.chunk_first(seq__5727_5792__$1);
var G__5794 = cljs.core.chunk_rest(seq__5727_5792__$1);
var G__5795 = c__18333__auto___5793;
var G__5796 = cljs.core.count(c__18333__auto___5793);
var G__5797 = (0);
seq__5727_5780 = G__5794;
chunk__5728_5781 = G__5795;
count__5729_5782 = G__5796;
i__5730_5783 = G__5797;
continue;
} else {
var vec__5735_5798 = cljs.core.first(seq__5727_5792__$1);
var k_5799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5735_5798,(0),null);
var v_5800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5735_5798,(1),null);
if(cljs.core.truth_((function (){var fexpr__5738 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__5738.cljs$core$IFn$_invoke$arity$1 ? fexpr__5738.cljs$core$IFn$_invoke$arity$1(k_5799) : fexpr__5738.call(null,k_5799));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_5799], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_5800], 0));
}

var G__5801 = cljs.core.next(seq__5727_5792__$1);
var G__5802 = null;
var G__5803 = (0);
var G__5804 = (0);
seq__5727_5780 = G__5801;
chunk__5728_5781 = G__5802;
count__5729_5782 = G__5803;
i__5730_5783 = G__5804;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__5805 = seq__5721_5767;
var G__5806 = chunk__5722_5768;
var G__5807 = count__5723_5769;
var G__5808 = (i__5724_5770 + (1));
seq__5721_5767 = G__5805;
chunk__5722_5768 = G__5806;
count__5723_5769 = G__5807;
i__5724_5770 = G__5808;
continue;
} else {
var temp__5457__auto___5809 = cljs.core.seq(seq__5721_5767);
if(temp__5457__auto___5809){
var seq__5721_5810__$1 = temp__5457__auto___5809;
if(cljs.core.chunked_seq_QMARK_(seq__5721_5810__$1)){
var c__18333__auto___5811 = cljs.core.chunk_first(seq__5721_5810__$1);
var G__5812 = cljs.core.chunk_rest(seq__5721_5810__$1);
var G__5813 = c__18333__auto___5811;
var G__5814 = cljs.core.count(c__18333__auto___5811);
var G__5815 = (0);
seq__5721_5767 = G__5812;
chunk__5722_5768 = G__5813;
count__5723_5769 = G__5814;
i__5724_5770 = G__5815;
continue;
} else {
var map__5739_5816 = cljs.core.first(seq__5721_5810__$1);
var map__5739_5817__$1 = ((((!((map__5739_5816 == null)))?((((map__5739_5816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5739_5816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5739_5816):map__5739_5816);
var prob_5818 = map__5739_5817__$1;
var path_5819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5739_5817__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_5820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5739_5817__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_5821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5739_5817__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_5822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5739_5817__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_5823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5739_5817__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_5824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5739_5817__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_(in_5824)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_5824], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_5821], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_5823)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_5823)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_5819)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_5819], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_5820)], 0));

if(cljs.core.truth_(reason_5822)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_5822], 0));
} else {
}

var seq__5741_5825 = cljs.core.seq(prob_5818);
var chunk__5742_5826 = null;
var count__5743_5827 = (0);
var i__5744_5828 = (0);
while(true){
if((i__5744_5828 < count__5743_5827)){
var vec__5745_5829 = chunk__5742_5826.cljs$core$IIndexed$_nth$arity$2(null,i__5744_5828);
var k_5830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5745_5829,(0),null);
var v_5831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5745_5829,(1),null);
if(cljs.core.truth_((function (){var fexpr__5748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__5748.cljs$core$IFn$_invoke$arity$1 ? fexpr__5748.cljs$core$IFn$_invoke$arity$1(k_5830) : fexpr__5748.call(null,k_5830));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_5830], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_5831], 0));
}

var G__5832 = seq__5741_5825;
var G__5833 = chunk__5742_5826;
var G__5834 = count__5743_5827;
var G__5835 = (i__5744_5828 + (1));
seq__5741_5825 = G__5832;
chunk__5742_5826 = G__5833;
count__5743_5827 = G__5834;
i__5744_5828 = G__5835;
continue;
} else {
var temp__5457__auto___5836__$1 = cljs.core.seq(seq__5741_5825);
if(temp__5457__auto___5836__$1){
var seq__5741_5837__$1 = temp__5457__auto___5836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__5741_5837__$1)){
var c__18333__auto___5838 = cljs.core.chunk_first(seq__5741_5837__$1);
var G__5839 = cljs.core.chunk_rest(seq__5741_5837__$1);
var G__5840 = c__18333__auto___5838;
var G__5841 = cljs.core.count(c__18333__auto___5838);
var G__5842 = (0);
seq__5741_5825 = G__5839;
chunk__5742_5826 = G__5840;
count__5743_5827 = G__5841;
i__5744_5828 = G__5842;
continue;
} else {
var vec__5749_5843 = cljs.core.first(seq__5741_5837__$1);
var k_5844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5749_5843,(0),null);
var v_5845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5749_5843,(1),null);
if(cljs.core.truth_((function (){var fexpr__5752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
return (fexpr__5752.cljs$core$IFn$_invoke$arity$1 ? fexpr__5752.cljs$core$IFn$_invoke$arity$1(k_5844) : fexpr__5752.call(null,k_5844));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_5844], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_5845], 0));
}

var G__5846 = cljs.core.next(seq__5741_5837__$1);
var G__5847 = null;
var G__5848 = (0);
var G__5849 = (0);
seq__5741_5825 = G__5846;
chunk__5742_5826 = G__5847;
count__5743_5827 = G__5848;
i__5744_5828 = G__5849;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__5850 = cljs.core.next(seq__5721_5810__$1);
var G__5851 = null;
var G__5852 = (0);
var G__5853 = (0);
seq__5721_5767 = G__5850;
chunk__5722_5768 = G__5851;
count__5723_5769 = G__5852;
i__5724_5770 = G__5853;
continue;
}
} else {
}
}
break;
}

var seq__5753_5854 = cljs.core.seq(ed);
var chunk__5754_5855 = null;
var count__5755_5856 = (0);
var i__5756_5857 = (0);
while(true){
if((i__5756_5857 < count__5755_5856)){
var vec__5757_5858 = chunk__5754_5855.cljs$core$IIndexed$_nth$arity$2(null,i__5756_5857);
var k_5859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5757_5858,(0),null);
var v_5860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5757_5858,(1),null);
if(cljs.core.truth_((function (){var fexpr__5760 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null);
return (fexpr__5760.cljs$core$IFn$_invoke$arity$1 ? fexpr__5760.cljs$core$IFn$_invoke$arity$1(k_5859) : fexpr__5760.call(null,k_5859));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_5859], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_5860], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__5861 = seq__5753_5854;
var G__5862 = chunk__5754_5855;
var G__5863 = count__5755_5856;
var G__5864 = (i__5756_5857 + (1));
seq__5753_5854 = G__5861;
chunk__5754_5855 = G__5862;
count__5755_5856 = G__5863;
i__5756_5857 = G__5864;
continue;
} else {
var temp__5457__auto___5865 = cljs.core.seq(seq__5753_5854);
if(temp__5457__auto___5865){
var seq__5753_5866__$1 = temp__5457__auto___5865;
if(cljs.core.chunked_seq_QMARK_(seq__5753_5866__$1)){
var c__18333__auto___5867 = cljs.core.chunk_first(seq__5753_5866__$1);
var G__5868 = cljs.core.chunk_rest(seq__5753_5866__$1);
var G__5869 = c__18333__auto___5867;
var G__5870 = cljs.core.count(c__18333__auto___5867);
var G__5871 = (0);
seq__5753_5854 = G__5868;
chunk__5754_5855 = G__5869;
count__5755_5856 = G__5870;
i__5756_5857 = G__5871;
continue;
} else {
var vec__5761_5872 = cljs.core.first(seq__5753_5866__$1);
var k_5873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5761_5872,(0),null);
var v_5874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5761_5872,(1),null);
if(cljs.core.truth_((function (){var fexpr__5764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null);
return (fexpr__5764.cljs$core$IFn$_invoke$arity$1 ? fexpr__5764.cljs$core$IFn$_invoke$arity$1(k_5873) : fexpr__5764.call(null,k_5873));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_5873], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_5874], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__5875 = cljs.core.next(seq__5753_5866__$1);
var G__5876 = null;
var G__5877 = (0);
var G__5878 = (0);
seq__5753_5854 = G__5875;
chunk__5754_5855 = G__5876;
count__5755_5856 = G__5877;
i__5756_5857 = G__5878;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_5720_5766;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_5719_5765;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18453__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__18453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_5879_5881 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_5880_5882 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_5879_5881,_STAR_print_fn_STAR_5880_5882,sb__18453__auto__){
return (function (x__18454__auto__){
return sb__18453__auto__.append(x__18454__auto__);
});})(_STAR_print_newline_STAR_5879_5881,_STAR_print_fn_STAR_5880_5882,sb__18453__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_5880_5882;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_5879_5881;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18453__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__5455__auto__ = (function (){var or__17846__auto__ = (function (){var temp__5457__auto__ = (function (){var or__17846__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__17846__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var gfn = temp__5457__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var g = temp__5455__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5455__auto__,spec__$1){
return (function (p1__5883_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__5883_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__5883_SHARP_));
});})(g,temp__5455__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__5885 = arguments.length;
switch (G__5885) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__17838__auto__ = cljs.core.ident_QMARK_(k);
if(and__17838__auto__){
return cljs.core.namespace(k);
} else {
return and__17838__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__17846__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
var or__17846__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__17846__auto____$1)){
return or__17846__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.alpha.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__5457__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5457__auto__)){
var arg_spec = temp__5457__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__18453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_5887_5889 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_5888_5890 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_5887_5889,_STAR_print_fn_STAR_5888_5890,sb__18453__auto__,ed,arg_spec,temp__5457__auto__,specs){
return (function (x__18454__auto__){
return sb__18453__auto__.append(x__18454__auto__);
});})(_STAR_print_newline_STAR_5887_5889,_STAR_print_fn_STAR_5888_5890,sb__18453__auto__,ed,arg_spec,temp__5457__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_5888_5890;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_5887_5889;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18453__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__17846__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__5893 = arguments.length;
switch (G__5893) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5455__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__5896 = arguments.length;
switch (G__5896) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__5904 = arguments.length;
switch (G__5904) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__5915){
var map__5916 = p__5915;
var map__5916__$1 = ((((!((map__5916 == null)))?((((map__5916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5916):map__5916);
var argm = map__5916__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5916__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__5910_SHARP_){
var or__17846__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__5910_SHARP_) : k__GT_s.call(null,p1__5910_SHARP_));
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return p1__5910_SHARP_;
}
});})(k__GT_s,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha5918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha5918 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,p__5915,argm,opt_keys,req_specs,map__5916,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta5919){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.p__5915 = p__5915;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.map__5916 = map__5916;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta5919 = meta5919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_5920,meta5919__$1){
var self__ = this;
var _5920__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha5918(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.p__5915,self__.argm,self__.opt_keys,self__.req_specs,self__.map__5916,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta5919__$1));
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_5920){
var self__ = this;
var _5920__$1 = this;
return self__.meta5919;
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__5927 = m;
var vec__5928 = G__5927;
var seq__5929 = cljs.core.seq(vec__5928);
var first__5930 = cljs.core.first(seq__5929);
var seq__5929__$1 = cljs.core.next(seq__5929);
var vec__5931 = first__5930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5931,(1),null);
var ks = seq__5929__$1;
var keys = vec__5928;
var ret__$1 = ret;
var G__5927__$1 = G__5927;
while(true){
var ret__$2 = ret__$1;
var vec__5935 = G__5927__$1;
var seq__5936 = cljs.core.seq(vec__5935);
var first__5937 = cljs.core.first(seq__5936);
var seq__5936__$1 = cljs.core.next(seq__5936);
var vec__5938 = first__5937;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5938,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5938,(1),null);
var ks__$1 = seq__5936__$1;
var keys__$1 = vec__5935;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__5957 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__5958 = ks__$1;
ret__$1 = G__5957;
G__5927__$1 = G__5958;
continue;
}
} else {
var G__5959 = ret__$2;
var G__5960 = ks__$1;
ret__$1 = G__5959;
G__5927__$1 = G__5960;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__5944 = cljs.core.keys(m);
var vec__5945 = G__5944;
var seq__5946 = cljs.core.seq(vec__5945);
var first__5947 = cljs.core.first(seq__5946);
var seq__5946__$1 = cljs.core.next(seq__5946);
var k = first__5947;
var ks = seq__5946__$1;
var keys = vec__5945;
var ret__$1 = ret;
var G__5944__$1 = G__5944;
while(true){
var ret__$2 = ret__$1;
var vec__5948 = G__5944__$1;
var seq__5949 = cljs.core.seq(vec__5948);
var first__5950 = cljs.core.first(seq__5949);
var seq__5949__$1 = cljs.core.next(seq__5949);
var k__$1 = first__5950;
var ks__$1 = seq__5949__$1;
var keys__$1 = vec__5948;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__5961 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__5962 = ks__$1;
ret__$1 = G__5961;
G__5944__$1 = G__5962;
continue;
} else {
var G__5963 = ret__$2;
var G__5964 = ks__$1;
ret__$1 = G__5963;
G__5944__$1 = G__5964;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5457__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5457__auto__){
var probs = temp__5457__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__5457__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__5911_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__5911_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5457__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__5951){
var vec__5952 = p__5951;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5952,(1),null);
if(cljs.core.truth_((function (){var or__17846__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__5912_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__5912_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__5955 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__5955) : cljs.spec.alpha.map_spec_impl.call(null,G__5955));
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__5956 = cljs.core.PersistentVector.EMPTY;
var G__5956__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__5956,new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__5956);
var G__5956__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__5956__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__5956__$1);
var G__5956__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__5956__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__5956__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__5956__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__5956__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"p__5915","p__5915",-73198165,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"map__5916","map__5916",-1432078186,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta5919","meta5919",388535344,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha5918.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha5918.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha5918";

cljs.spec.alpha.t_cljs$spec$alpha5918.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha5918");
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha5918 = ((function (k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha5918(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,p__5915__$1,argm__$1,opt_keys__$1,req_specs__$1,map__5916__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta5919){
return (new cljs.spec.alpha.t_cljs$spec$alpha5918(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,p__5915__$1,argm__$1,opt_keys__$1,req_specs__$1,map__5916__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta5919));
});})(k__GT_s,keys__GT_specnames,id,map__5916,map__5916__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha5918(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,p__5915,argm,opt_keys,req_specs,map__5916__$1,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__5966 = arguments.length;
switch (G__5966) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
var G__5967 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__5967,gfn);
} else {
return G__5967;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__5968 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__5968,gfn);
} else {
return G__5968;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha5969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha5969 = (function (form,pred,gfn,cpred_QMARK_,unc,meta5970){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta5970 = meta5970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5971,meta5970__$1){
var self__ = this;
var _5971__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha5969(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta5970__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5971){
var self__ = this;
var _5971__$1 = this;
return self__.meta5970;
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha5969.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha5969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta5970","meta5970",1319476161,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha5969.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha5969.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha5969";

cljs.spec.alpha.t_cljs$spec$alpha5969.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha5969");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha5969 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha5969(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta5970){
return (new cljs.spec.alpha.t_cljs$spec$alpha5969(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta5970));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha5969(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__5979 = arguments.length;
switch (G__5979) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__5973_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__17838__auto__ = cljs.core._get_method(mm,(function (){var fexpr__5981 = cljs.core._dispatch_fn(mm);
return (fexpr__5981.cljs$core$IFn$_invoke$arity$1 ? fexpr__5981.cljs$core$IFn$_invoke$arity$1(p1__5973_SHARP_) : fexpr__5981.call(null,p1__5973_SHARP_));
})());
if(cljs.core.truth_(and__17838__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__5973_SHARP_) : mm.call(null,p1__5973_SHARP_));
} else {
return and__17838__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__5974_SHARP_){
var fexpr__5982 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__5982.cljs$core$IFn$_invoke$arity$1 ? fexpr__5982.cljs$core$IFn$_invoke$arity$1(p1__5974_SHARP_) : fexpr__5982.call(null,p1__5974_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__5975_SHARP_,p2__5976_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__5975_SHARP_,retag,p2__5976_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha5983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha5983 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta5984){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta5984 = meta5984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_5985,meta5984__$1){
var self__ = this;
var _5985__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha5983(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta5984__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_5985){
var self__ = this;
var _5985__$1 = this;
return self__.meta5984;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__5455__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__5986){
var vec__5987 = p__5986;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5987,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5987,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__5987,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__5987,k,f,___$1,id,predx,dval,tag){
return (function (p1__5977_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__5977_SHARP_,k) : self__.tag.call(null,p1__5977_SHARP_,k));
});})(rmap__$1,p,vec__5987,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__18344__auto__ = self__.form;
return cljs.core._conj((function (){var x__18344__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto____$1);
})(),x__18344__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null)))], 0));
});})(rmap__$1,p,vec__5987,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__5990){
var vec__5991 = p__5990;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5991,(0),null);
return cljs.spec.alpha.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null)),(function (){var x__18344__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__18344__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta5984","meta5984",-654813152,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha5983.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha5983.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha5983";

cljs.spec.alpha.t_cljs$spec$alpha5983.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha5983");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha5983 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha5983(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta5984){
return (new cljs.spec.alpha.t_cljs$spec$alpha5983(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta5984));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha5983(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__5999 = arguments.length;
switch (G__5999) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6000 = (function (forms,preds,gfn,specs,cnt,meta6001){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta6001 = meta6001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_6002,meta6001__$1){
var self__ = this;
var _6002__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6000(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta6001__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_6002){
var self__ = this;
var _6002__$1 = this;
return self__.meta6001;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__6012 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__6013 = (i + (1));
ret = G__6012;
i = G__6013;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__6014 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__6015 = (i + (1));
ret = G__6014;
i = G__6015;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null)),(function (){var x__18344__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","count","clojure.core/count",-1284476907,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__18344__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta6001","meta6001",-958373968,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha6000.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6000.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6000";

cljs.spec.alpha.t_cljs$spec$alpha6000.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6000");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha6000 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha6000(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta6001){
return (new cljs.spec.alpha.t_cljs$spec$alpha6000(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta6001));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6000(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
var x6026 = v;
x6026.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x6026.cljs$core$IMapEntry$_key$arity$1 = ((function (x6026){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x6026))
;

x6026.cljs$core$IMapEntry$_val$arity$1 = ((function (x6026){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x6026))
;

return x6026;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__6033 = cljs.core.count(preds);
switch (G__6033) {
case (2):
return ((function (G__6033,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__6033,id,kps,specs))

break;
case (3):
return ((function (G__6033,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$2))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__6033,id,kps,specs))

break;
default:
return ((function (G__6033,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var G__6050 = (i + (1));
i = G__6050;
continue;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});
;})(G__6033,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6034 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta6035){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta6035 = meta6035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_6036,meta6035__$1){
var self__ = this;
var _6036__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6034(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta6035__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_6036){
var self__ = this;
var _6036__$1 = this;
return self__.meta6035;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__6037){
var self__ = this;
var vec__6038 = p__6037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6038,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6038,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta6035","meta6035",-913521678,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6034.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6034.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6034";

cljs.spec.alpha.t_cljs$spec$alpha6034.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6034");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha6034 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha6034(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta6035){
return (new cljs.spec.alpha.t_cljs$spec$alpha6034(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta6035));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6034(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__6057 = preds;
var vec__6059 = G__6057;
var seq__6060 = cljs.core.seq(vec__6059);
var first__6061 = cljs.core.first(seq__6060);
var seq__6060__$1 = cljs.core.next(seq__6060);
var pred = first__6061;
var preds__$1 = seq__6060__$1;
var G__6058 = forms;
var vec__6062 = G__6058;
var seq__6063 = cljs.core.seq(vec__6062);
var first__6064 = cljs.core.first(seq__6063);
var seq__6063__$1 = cljs.core.next(seq__6063);
var form = first__6064;
var forms__$1 = seq__6063__$1;
var ret__$1 = ret;
var G__6057__$1 = G__6057;
var G__6058__$1 = G__6058;
while(true){
var ret__$2 = ret__$1;
var vec__6065 = G__6057__$1;
var seq__6066 = cljs.core.seq(vec__6065);
var first__6067 = cljs.core.first(seq__6066);
var seq__6066__$1 = cljs.core.next(seq__6066);
var pred__$1 = first__6067;
var preds__$2 = seq__6066__$1;
var vec__6068 = G__6058__$1;
var seq__6069 = cljs.core.seq(vec__6068);
var first__6070 = cljs.core.first(seq__6069);
var seq__6069__$1 = cljs.core.next(seq__6069);
var form__$1 = first__6070;
var forms__$2 = seq__6069__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__6071 = nret;
var G__6072 = preds__$2;
var G__6073 = forms__$2;
ret__$1 = G__6071;
G__6057__$1 = G__6072;
G__6058__$1 = G__6073;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__6080 = forms;
var vec__6082 = G__6080;
var seq__6083 = cljs.core.seq(vec__6082);
var first__6084 = cljs.core.first(seq__6083);
var seq__6083__$1 = cljs.core.next(seq__6083);
var form = first__6084;
var forms__$1 = seq__6083__$1;
var G__6081 = preds;
var vec__6085 = G__6081;
var seq__6086 = cljs.core.seq(vec__6085);
var first__6087 = cljs.core.first(seq__6086);
var seq__6086__$1 = cljs.core.next(seq__6086);
var pred = first__6087;
var preds__$1 = seq__6086__$1;
var ret__$1 = ret;
var G__6080__$1 = G__6080;
var G__6081__$1 = G__6081;
while(true){
var ret__$2 = ret__$1;
var vec__6088 = G__6080__$1;
var seq__6089 = cljs.core.seq(vec__6088);
var first__6090 = cljs.core.first(seq__6089);
var seq__6089__$1 = cljs.core.next(seq__6089);
var form__$1 = first__6090;
var forms__$2 = seq__6089__$1;
var vec__6091 = G__6081__$1;
var seq__6092 = cljs.core.seq(vec__6091);
var first__6093 = cljs.core.first(seq__6092);
var seq__6092__$1 = cljs.core.next(seq__6092);
var pred__$1 = first__6093;
var preds__$2 = seq__6092__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__6098 = nret;
var G__6099 = forms__$2;
var G__6100 = preds__$2;
ret__$1 = G__6098;
G__6080__$1 = G__6099;
G__6081__$1 = G__6100;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__6109 = cljs.core.count(preds);
switch (G__6109) {
case (2):
return ((function (G__6109,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__6109,specs))

break;
case (3):
return ((function (G__6109,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
;})(G__6109,specs))

break;
default:
return ((function (G__6109,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__6127 = nret;
var G__6128 = (i + (1));
ret = G__6127;
i = G__6128;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__6109,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6117 = (function (forms,preds,gfn,specs,cform,meta6118){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta6118 = meta6118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_6119,meta6118__$1){
var self__ = this;
var _6119__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6117(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta6118__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_6119){
var self__ = this;
var _6119__$1 = this;
return self__.meta6118;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__6102_SHARP_,p2__6101_SHARP_){
return cljs.spec.alpha.unform(p2__6101_SHARP_,p1__6102_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta6118","meta6118",1526737351,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha6117.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6117.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6117";

cljs.spec.alpha.t_cljs$spec$alpha6117.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6117");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha6117 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha6117(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta6118){
return (new cljs.spec.alpha.t_cljs$spec$alpha6117(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta6118));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6117(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__17846__auto__ = kfn;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__17846__auto__ = kform;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return new cljs.core.Symbol("clojure.core","coll?","clojure.core/coll?",1311547908,null);
}
})();
if(cljs.core.not(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = count;
if(cljs.core.truth_(and__17838__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__17838__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null)),(function (){var x__18344__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__18344__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = (function (){var or__17846__auto__ = min_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__17838__auto__)){
return !((((function (){var or__17846__auto__ = min_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__17846__auto__ = max_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (9007199254740991);
}
})())));
} else {
return and__17838__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","<=","clojure.core/<=",2044132390,null)),(function (){var x__18344__auto__ = (function (){var or__17846__auto__ = min_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__18344__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),(function (){var x__18344__auto__ = (function (){var or__17846__auto__ = max_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (9007199254740991);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = distinct;
if(cljs.core.truth_(and__17838__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__17838__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6137 = (function (forms,preds,gfn,meta6138){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta6138 = meta6138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6139,meta6138__$1){
var self__ = this;
var _6139__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6137(self__.forms,self__.preds,self__.gfn,meta6138__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6139){
var self__ = this;
var _6139__$1 = this;
return self__.meta6138;
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__6129_SHARP_,p2__6130_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__6129_SHARP_,x,p2__6130_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__6131_SHARP_){
return cljs.spec.alpha.unform(p1__6131_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__6132_SHARP_,p2__6133_SHARP_){
return cljs.spec.alpha.explain_1(p1__6132_SHARP_,p2__6133_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$1){
return (function (p1__6134_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__6134_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__6135_SHARP_,p2__6136_SHARP_){
return cljs.spec.alpha.gensub(p1__6135_SHARP_,overrides,path,rmap,p2__6136_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha6137.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha6137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta6138","meta6138",-628174915,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha6137.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6137.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6137";

cljs.spec.alpha.t_cljs$spec$alpha6137.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6137");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha6137 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha6137(forms__$1,preds__$1,gfn__$1,meta6138){
return (new cljs.spec.alpha.t_cljs$spec$alpha6137(forms__$1,preds__$1,gfn__$1,meta6138));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6137(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__6145 = arguments.length;
switch (G__6145) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__6146,gfn){
var map__6147 = p__6146;
var map__6147__$1 = ((((!((map__6147 == null)))?((((map__6147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6147):map__6147);
var opts = map__6147__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6147__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6147__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__6140_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__6140_SHARP_);
});})(conform_into,spec,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var kfn__$1 = (function (){var or__17846__auto__ = kfn;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return ((function (or__17846__auto__,conform_into,spec,check_QMARK_,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__17846__auto__,conform_into,spec,check_QMARK_,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__17838__auto__ = cljs.core.map_QMARK_(x);
if(and__17838__auto__){
var or__17846__auto__ = (function (){var and__17838__auto____$1 = kind;
if(cljs.core.truth_(and__17838__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__17838__auto____$1;
}
})();
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__17838__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__6141_SHARP_){
return cljs.core.empty((function (){var or__17846__auto__ = conform_into;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return p1__6141_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6149 = (function (form,max_count,check_QMARK_,gfn,gen_max,p__6146,pred,cpred,map__6147,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta6150){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.p__6146 = p__6146;
this.pred = pred;
this.cpred = cpred;
this.map__6147 = map__6147;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta6150 = meta6150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_6151,meta6150__$1){
var self__ = this;
var _6151__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6149(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.p__6146,self__.pred,self__.cpred,self__.map__6147,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta6150__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_6151){
var self__ = this;
var _6151__$1 = this;
return self__.meta6150;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__6153 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__6159 = cljs.core.seq(x);
var vec__6160 = G__6159;
var seq__6161 = cljs.core.seq(vec__6160);
var first__6162 = cljs.core.first(seq__6161);
var seq__6161__$1 = cljs.core.next(seq__6161);
var v = first__6162;
var vs = seq__6161__$1;
var vseq = vec__6160;
var ret__$1 = ret;
var i__$1 = i;
var G__6159__$1 = G__6159;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__6163 = G__6159__$1;
var seq__6164 = cljs.core.seq(vec__6163);
var first__6165 = cljs.core.first(seq__6164);
var seq__6164__$1 = cljs.core.next(seq__6164);
var v__$1 = first__6165;
var vs__$1 = seq__6164__$1;
var vseq__$1 = vec__6163;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__6211 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__6212 = (i__$2 + (1));
var G__6213 = vs__$1;
ret__$1 = G__6211;
i__$1 = G__6212;
G__6159__$1 = G__6213;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__17930__auto__ = (1);
var y__17931__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__17930__auto__ > y__17931__auto__) ? x__17930__auto__ : y__17931__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
var G__6214 = (i + step);
i = G__6214;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__6169 = cljs.core.seq(x);
var vec__6170 = G__6169;
var seq__6171 = cljs.core.seq(vec__6170);
var first__6172 = cljs.core.first(seq__6171);
var seq__6171__$1 = cljs.core.next(seq__6171);
var v = first__6172;
var vs = seq__6171__$1;
var vseq = vec__6170;
var i__$1 = i;
var G__6169__$1 = G__6169;
while(true){
var i__$2 = i__$1;
var vec__6173 = G__6169__$1;
var seq__6174 = cljs.core.seq(vec__6173);
var first__6175 = cljs.core.first(seq__6174);
var seq__6174__$1 = cljs.core.next(seq__6174);
var v__$1 = first__6175;
var vs__$1 = seq__6174__$1;
var vseq__$1 = vec__6173;
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
var G__6215 = (i__$2 + (1));
var G__6216 = vs__$1;
i__$1 = G__6215;
G__6169__$1 = G__6216;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
var vec__6177 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6177,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6177,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6177,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__6183 = cljs.core.seq(x);
var vec__6186 = G__6183;
var seq__6187 = cljs.core.seq(vec__6186);
var first__6188 = cljs.core.first(seq__6187);
var seq__6187__$1 = cljs.core.next(seq__6187);
var v = first__6188;
var vs = seq__6187__$1;
var vseq = vec__6186;
var ret__$1 = ret;
var i__$1 = i;
var G__6183__$1 = G__6183;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__6189 = G__6183__$1;
var seq__6190 = cljs.core.seq(vec__6189);
var first__6191 = cljs.core.first(seq__6190);
var seq__6190__$1 = cljs.core.next(seq__6190);
var v__$1 = first__6191;
var vs__$1 = seq__6190__$1;
var vseq__$1 = vec__6189;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__6217 = (function (){var G__6192 = ret__$2;
var G__6193 = i__$2;
var G__6194 = v__$1;
var G__6195 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__6192,G__6193,G__6194,G__6195) : add.call(null,G__6192,G__6193,G__6194,G__6195));
})();
var G__6218 = (i__$2 + (1));
var G__6219 = vs__$1;
ret__$1 = G__6217;
i__$1 = G__6218;
G__6183__$1 = G__6219;
continue;
}
break;
}
} else {
return x;
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__17846__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__6197 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__17846__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__17846__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__6196 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__6196.cljs$core$IFn$_invoke$arity$1 ? fexpr__6196.cljs$core$IFn$_invoke$arity$1(G__6197) : fexpr__6196.call(null,G__6197));
})());
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__6142_SHARP_){
if(cljs.core.empty_QMARK_(p1__6142_SHARP_)){
return p1__6142_SHARP_;
} else {
return cljs.core.empty(p1__6142_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__6143_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__6143_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__6143_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__17846__auto__ = self__.min_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__17846__auto__ = self__.max_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
var x__17930__auto__ = self__.gen_max;
var y__17931__auto__ = ((2) * (function (){var or__17846__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__17846__auto____$1)){
return or__17846__auto____$1;
} else {
return (0);
}
})());
return ((x__17930__auto__ > y__17931__auto__) ? x__17930__auto__ : y__17931__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__17846__auto__ = self__.min_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__17846__auto__ = self__.min_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (0);
}
})(),(function (){var or__17846__auto__ = self__.max_count;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
var x__17930__auto__ = self__.gen_max;
var y__17931__auto__ = ((2) * (function (){var or__17846__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__17846__auto____$1)){
return or__17846__auto____$1;
} else {
return (0);
}
})());
return ((x__17930__auto__ > y__17931__auto__) ? x__17930__auto__ : y__17931__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__17846__auto__ = self__.describe_form;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null)),(function (){var x__18344__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"p__6146","p__6146",1681710699,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"map__6147","map__6147",745143440,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta6150","meta6150",1568848749,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha6149.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6149.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6149";

cljs.spec.alpha.t_cljs$spec$alpha6149.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6149");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha6149 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha6149(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,p__6146__$1,pred__$1,cpred__$1,map__6147__$2,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta6150){
return (new cljs.spec.alpha.t_cljs$spec$alpha6149(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,p__6146__$1,pred__$1,cpred__$1,map__6147__$2,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta6150));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__6147,map__6147__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6149(form,max_count,check_QMARK_,gfn,gen_max,p__6146,pred,cpred,map__6147__$1,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__6235){
var map__6236 = p__6235;
var map__6236__$1 = ((((!((map__6236 == null)))?((((map__6236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6236):map__6236);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6236__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__6240){
var map__6241 = p__6240;
var map__6241__$1 = ((((!((map__6241 == null)))?((((map__6241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6241):map__6241);
var vec__6242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__6243 = cljs.core.seq(vec__6242);
var first__6244 = cljs.core.first(seq__6243);
var seq__6243__$1 = cljs.core.next(seq__6243);
var p1 = first__6244;
var pr = seq__6243__$1;
var ps = vec__6242;
var vec__6245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__6246 = cljs.core.seq(vec__6245);
var first__6247 = cljs.core.first(seq__6246);
var seq__6246__$1 = cljs.core.next(seq__6246);
var k1 = first__6247;
var kr = seq__6246__$1;
var ks = vec__6245;
var vec__6248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__6249 = cljs.core.seq(vec__6248);
var first__6250 = cljs.core.first(seq__6249);
var seq__6249__$1 = cljs.core.next(seq__6249);
var f1 = first__6250;
var fr = seq__6249__$1;
var forms = vec__6248;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__6253 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__6253) : cljs.spec.alpha.pcat_STAR_.call(null,G__6253));
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__18532__auto__ = [];
var len__18529__auto___6262 = arguments.length;
var i__18530__auto___6263 = (0);
while(true){
if((i__18530__auto___6263 < len__18529__auto___6262)){
args__18532__auto__.push((arguments[i__18530__auto___6263]));

var G__6264 = (i__18530__auto___6263 + (1));
i__18530__auto___6263 = G__6264;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq6259){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6259));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__18344__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),(function (){var x__18344__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(function (){var x__18344__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__17846__auto__ = ks;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6270_SHARP_){
var G__6274 = cljs.core.first(p1__6270_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__6274) : f.call(null,G__6274));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__17846__auto__ = cljs.core.seq(ks);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__17846__auto__ = cljs.core.seq(forms);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__6271_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__6271_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__6275 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__6278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275,(0),null);
var seq__6279 = cljs.core.seq(vec__6278);
var first__6280 = cljs.core.first(seq__6279);
var seq__6279__$1 = cljs.core.next(seq__6279);
var p1 = first__6280;
var pr = seq__6279__$1;
var ps__$1 = vec__6278;
var vec__6281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6281,(0),null);
var ks__$1 = vec__6281;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__18532__auto__ = [];
var len__18529__auto___6285 = arguments.length;
var i__18530__auto___6286 = (0);
while(true){
if((i__18530__auto___6286 < len__18529__auto___6285)){
args__18532__auto__.push((arguments[i__18530__auto___6286]));

var G__6287 = (i__18530__auto___6286 + (1));
i__18530__auto___6286 = G__6287;
continue;
} else {
}
break;
}

var argseq__18533__auto__ = ((((0) < args__18532__auto__.length))?(new cljs.core.IndexedSeq(args__18532__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__18533__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq6284){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6284));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__17838__auto__ = p1;
if(cljs.core.truth_(and__17838__auto__)){
return p2;
} else {
return and__17838__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__17846__auto__ = p1;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__17846__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__17846__auto__){
return or__17846__auto__;
} else {
var or__17846__auto____$1 = (function (){var and__17838__auto__ = (function (){var G__6310 = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__6309 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null);
return (fexpr__6309.cljs$core$IFn$_invoke$arity$1 ? fexpr__6309.cljs$core$IFn$_invoke$arity$1(G__6310) : fexpr__6309.call(null,G__6310));
})();
if(cljs.core.truth_(and__17838__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__17838__auto__;
}
})();
if(cljs.core.truth_(or__17846__auto____$1)){
return or__17846__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__6317 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6317__$1 = ((((!((map__6317 == null)))?((((map__6317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6317):map__6317);
var p__$1 = map__6317__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6317__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6317__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6317__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6317__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6317__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__6319 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6319)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6319)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6319)){
var and__17838__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__17838__auto__)){
var or__17846__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
var ret = cljs.spec.alpha.and_preds((cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(ret));
}
} else {
return and__17838__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6319)){
var or__17846__auto__ = (p1 === p2);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6319)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6319)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6319)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__6326 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6326__$1 = ((((!((map__6326 == null)))?((((map__6326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6326):map__6326);
var p__$1 = map__6326__$1;
var vec__6327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6326__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__6328 = cljs.core.seq(vec__6327);
var first__6329 = cljs.core.first(seq__6328);
var seq__6328__$1 = cljs.core.next(seq__6328);
var p0 = first__6329;
var pr = seq__6328__$1;
var ps = vec__6327;
var vec__6330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6326__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(0),null);
var ks = vec__6330;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6326__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6326__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6326__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6326__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__6335 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6335)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6335)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6335)){
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6335)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6335)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6335)){
var vec__6337 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__6340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6337,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6340,(0),null);
var vec__6343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6337,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6343,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6335)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__6359 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6359__$1 = ((((!((map__6359 == null)))?((((map__6359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6359):map__6359);
var p__$1 = map__6359__$1;
var vec__6360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__6361 = cljs.core.seq(vec__6360);
var first__6362 = cljs.core.first(seq__6361);
var seq__6361__$1 = cljs.core.next(seq__6361);
var p0 = first__6362;
var pr = seq__6361__$1;
var ps = vec__6360;
var vec__6366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6366,(0),null);
var ks = vec__6366;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap(ks,ps);
var G__6372 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6372)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6372)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6372)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__6354_SHARP_,p2__6353_SHARP_){
return cljs.spec.alpha.unform(p2__6353_SHARP_,p1__6354_SHARP_);
});})(G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6372)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__6355_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__6355_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__6355_SHARP_));
});})(G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6372)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__6357_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__6357_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__6357_SHARP_));
});})(G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__6376 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__6377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__6376,G__6377) : cljs.spec.alpha.op_unform.call(null,G__6376,G__6377));
} else {
return null;
}
});})(G__6372,map__6359,map__6359__$1,p__$1,vec__6360,seq__6361,first__6362,seq__6361__$1,p0,pr,ps,vec__6366,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6372)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__6378 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6378,(1),null);
var G__6381 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__6382 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__6381,G__6382) : cljs.spec.alpha.op_unform.call(null,G__6381,G__6382));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6372)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__6388 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6388__$1 = ((((!((map__6388 == null)))?((((map__6388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6388):map__6388);
var p__$1 = map__6388__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6388__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6388__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6388__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__6388,map__6388__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
var G__6391 = r;
var G__6392 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__6390 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__6390.cljs$core$IFn$_invoke$arity$2 ? fexpr__6390.cljs$core$IFn$_invoke$arity$2(G__6391,G__6392) : fexpr__6390.call(null,G__6391,G__6392));
}
});})(map__6388,map__6388__$1,p__$1,op,ps,splice))
;
var G__6393 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6393)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6393)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6393)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6393)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6393)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6393)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6393)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__6404 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6404__$1 = ((((!((map__6404 == null)))?((((map__6404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6404):map__6404);
var p__$1 = map__6404__$1;
var vec__6405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__6406 = cljs.core.seq(vec__6405);
var first__6407 = cljs.core.first(seq__6406);
var seq__6406__$1 = cljs.core.next(seq__6406);
var p0 = first__6407;
var pr = seq__6406__$1;
var ps = vec__6405;
var vec__6408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__6409 = cljs.core.seq(vec__6408);
var first__6410 = cljs.core.first(seq__6409);
var seq__6409__$1 = cljs.core.next(seq__6409);
var k0 = first__6410;
var kr = seq__6409__$1;
var ks = vec__6408;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__6413 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6413)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6413)){
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6413)){
var temp__5457__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__5457__auto__)){
var p1__$1 = temp__5457__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6413)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__6414 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next(forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__6415 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__6414,G__6415) : cljs.spec.alpha.deriv.call(null,G__6414,G__6415));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6413)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__6413,map__6404,map__6404__$1,p__$1,vec__6405,seq__6406,first__6407,seq__6406__$1,p0,pr,ps,vec__6408,seq__6409,first__6410,seq__6409__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__6403_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__6403_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__6403_SHARP_,x));
});})(G__6413,map__6404,map__6404__$1,p__$1,vec__6405,seq__6406,first__6407,seq__6406__$1,p0,pr,ps,vec__6408,seq__6409,first__6410,seq__6409__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6413)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__6416 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__6417 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__6416,G__6417) : cljs.spec.alpha.deriv.call(null,G__6416,G__6417));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6413)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__6426 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6426__$1 = ((((!((map__6426 == null)))?((((map__6426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6426):map__6426);
var p__$1 = map__6426__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6426__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__6428 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6428)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6428)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6428)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6428)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__18344__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__17846__auto__ = cljs.core.seq(ks);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6428)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__18344__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6428)){
var x__18344__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null));
return cljs.core._conj((function (){var x__18344__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto____$1);
})(),x__18344__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6428)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__6436 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6436,(0),null);
var input__$1 = vec__6436;
var map__6439 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6439__$1 = ((((!((map__6439 == null)))?((((map__6439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6439):map__6439);
var p__$1 = map__6439__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__6436,x,input__$1,map__6439,map__6439__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__6436,x,input__$1,map__6439,map__6439__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__6441 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6441)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6441)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6441)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,cljs.spec.alpha.op_describe(p1));
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__5455__auto__)){
var p1__$1 = temp__5455__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
var G__6442 = cljs.spec.alpha.op_describe(p1);
var G__6443 = p1;
var G__6444 = path;
var G__6445 = via__$1;
var G__6446 = in$;
var G__6447 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__6442,G__6443,G__6444,G__6445,G__6446,G__6447) : cljs.spec.alpha.op_explain.call(null,G__6442,G__6443,G__6444,G__6445,G__6446,G__6447));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6441)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__17846__auto__ = cljs.core.seq(ks);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__17846__auto__ = cljs.core.seq(forms);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__6454 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__6441,vec__6436,x,input__$1,map__6439,map__6439__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__6464){
var vec__6465 = p__6464;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6465,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__6441,vec__6436,x,input__$1,map__6439,map__6439__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6454,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6454,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6454,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__17846__auto__ = form__$1;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6441)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__6441,vec__6436,x,input__$1,map__6439,map__6439__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__6468 = (function (){var or__17846__auto__ = form__$1;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
var G__6469 = pred;
var G__6470 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__6471 = via__$1;
var G__6472 = in$;
var G__6473 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__6468,G__6469,G__6470,G__6471,G__6472,G__6473) : cljs.spec.alpha.op_explain.call(null,G__6468,G__6469,G__6470,G__6471,G__6472,G__6473));
});})(G__6441,vec__6436,x,input__$1,map__6439,map__6439__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__17846__auto__ = cljs.core.seq(ks);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__17846__auto__ = cljs.core.seq(forms);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6441)){
var G__6474 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__6475 = p1;
var G__6476 = path;
var G__6477 = via__$1;
var G__6478 = in$;
var G__6479 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__6474,G__6475,G__6476,G__6477,G__6478,G__6479) : cljs.spec.alpha.op_explain.call(null,G__6474,G__6475,G__6476,G__6477,G__6478,G__6479));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6441)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__6495 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__6495__$1 = ((((!((map__6495 == null)))?((((map__6495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6495):map__6495);
var p__$1 = map__6495__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6495__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__17838__auto__ = rmap__$1;
if(cljs.core.truth_(and__17838__auto__)){
var and__17838__auto____$1 = id;
if(cljs.core.truth_(and__17838__auto____$1)){
var and__17838__auto____$2 = k;
if(cljs.core.truth_(and__17838__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__17838__auto____$2;
}
} else {
return and__17838__auto____$1;
}
} else {
return and__17838__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__6504 = p__$2;
var G__6505 = overrides;
var G__6506 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__6507 = rmap__$1;
var G__6508 = (function (){var or__17846__auto__ = f__$1;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__6504,G__6505,G__6506,G__6507,G__6508) : cljs.spec.alpha.re_gen.call(null,G__6504,G__6505,G__6506,G__6507,G__6508));
});})(map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__6509 = p__$2;
var G__6510 = overrides;
var G__6511 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__6512 = rmap__$1;
var G__6513 = (function (){var or__17846__auto__ = f__$1;
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__6509,G__6510,G__6511,G__6512,G__6513) : cljs.spec.alpha.re_gen.call(null,G__6509,G__6510,G__6511,G__6512,G__6513));
}
}
});})(map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__17846__auto__ = cljs.core.seq(ks__$1);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__17846__auto__ = cljs.core.seq(forms__$1);
if(or__17846__auto__){
return or__17846__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__17846__auto__ = (function (){var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
var G__6515 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept","accept",1874130431),G__6515)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6515)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
var or__17846__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__17846__auto____$1)){
return or__17846__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__6516 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__6516)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__6516)){
var temp__5457__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__6516)){
var G__6519 = p1;
var G__6520 = overrides;
var G__6521 = path;
var G__6522 = rmap__$1;
var G__6523 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__6519,G__6520,G__6521,G__6522,G__6523) : cljs.spec.alpha.re_gen.call(null,G__6519,G__6520,G__6521,G__6522,G__6523));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__6516)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__6516)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__6516)){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__5457__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5457__auto__,G__6516,or__17846__auto____$1,or__17846__auto__,map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__6494_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__6494_SHARP_);
});})(g,temp__5457__auto__,G__6516,or__17846__auto____$1,or__17846__auto__,map__6495,map__6495__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6516)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__6535){
while(true){
var vec__6536 = p__6535;
var seq__6537 = cljs.core.seq(vec__6536);
var first__6538 = cljs.core.first(seq__6537);
var seq__6537__$1 = cljs.core.next(seq__6537);
var x = first__6538;
var xs = seq__6537__$1;
var data = vec__6536;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__5455__auto__)){
var dp = temp__5455__auto__;
var G__6539 = dp;
var G__6540 = xs;
p = G__6539;
p__6535 = G__6540;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__6546 = input;
var vec__6547 = G__6546;
var seq__6548 = cljs.core.seq(vec__6547);
var first__6549 = cljs.core.first(seq__6548);
var seq__6548__$1 = cljs.core.next(seq__6548);
var x = first__6549;
var xs = seq__6548__$1;
var data = vec__6547;
var i = (0);
var p__$1 = p;
var G__6546__$1 = G__6546;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__6550 = G__6546__$1;
var seq__6551 = cljs.core.seq(vec__6550);
var first__6552 = cljs.core.first(seq__6551);
var seq__6551__$1 = cljs.core.next(seq__6551);
var x__$1 = first__6552;
var xs__$1 = seq__6551__$1;
var data__$1 = vec__6550;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var dp = temp__5455__auto__;
var G__6555 = dp;
var G__6556 = xs__$1;
var G__6557 = (i__$2 + (1));
p__$1 = G__6555;
G__6546__$1 = G__6556;
i__$1 = G__6557;
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe(re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__17846__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe(p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6562 = (function (re,gfn,meta6563){
this.re = re;
this.gfn = gfn;
this.meta6563 = meta6563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6564,meta6563__$1){
var self__ = this;
var _6564__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6562(self__.re,self__.gfn,meta6563__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6564){
var self__ = this;
var _6564__$1 = this;
return self__.meta6563;
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe(self__.re),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha6562.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha6562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta6563","meta6563",-1905271727,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha6562.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6562.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6562";

cljs.spec.alpha.t_cljs$spec$alpha6562.cljs$lang$ctorPrWriter = (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6562");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha6562 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha6562(re__$1,gfn__$1,meta6563){
return (new cljs.spec.alpha.t_cljs$spec$alpha6562(re__$1,gfn__$1,meta6563));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6562(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__17838__auto__ = cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cret));
if(and__17838__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__17838__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__6574_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__6574_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__5455__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__6575 = temp__5455__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6575,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha6578 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta6579){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta6579 = meta6579;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_6580,meta6579__$1){
var self__ = this;
var _6580__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6578(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta6579__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_6580){
var self__ = this;
var _6580__$1 = this;
return self__.meta6579;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e6583){if((e6583 instanceof Error)){
var t = e6583;
return t;
} else {
throw e6583;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cret))){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$3,specs){
return (function() { 
var G__6594__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__18453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_6585_6595 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_6586_6596 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_6585_6595,_STAR_print_fn_STAR_6586_6596,sb__18453__auto__,___$3,specs){
return (function (x__18454__auto__){
return sb__18453__auto__.append(x__18454__auto__);
});})(_STAR_print_newline_STAR_6585_6595,_STAR_print_fn_STAR_6586_6596,sb__18453__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_6586_6596;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_6585_6595;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18453__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__6594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6597__i = 0, G__6597__a = new Array(arguments.length -  0);
while (G__6597__i < G__6597__a.length) {G__6597__a[G__6597__i] = arguments[G__6597__i + 0]; ++G__6597__i;}
  args = new cljs.core.IndexedSeq(G__6597__a,0,null);
} 
return G__6594__delegate.call(this,args);};
G__6594.cljs$lang$maxFixedArity = 0;
G__6594.cljs$lang$applyTo = (function (arglist__6598){
var args = cljs.core.seq(arglist__6598);
return G__6594__delegate(args);
});
G__6594.cljs$core$IFn$_invoke$arity$variadic = G__6594__delegate;
return G__6594;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__18344__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__18344__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__18344__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta6579","meta6579",1499948942,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha6578.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6578.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6578";

cljs.spec.alpha.t_cljs$spec$alpha6578.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6578");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha6578 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha6578(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta6579){
return (new cljs.spec.alpha.t_cljs$spec$alpha6578(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta6579));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6578(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__6599#","p1__6599#",1155221723,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__6599#","p1__6599#",1155221723,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__6599#","p1__6599#",1155221723,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__6600#","p1__6600#",1375721073,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__6600#","p1__6600#",1375721073,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__6599_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__6599_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__6599_SHARP_));
}),null,true,(function (p1__6600_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6601){
var vec__6602 = p__6601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__6600_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6609 = (function (spec,meta6610){
this.spec = spec;
this.meta6610 = meta6610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_6611,meta6610__$1){
var self__ = this;
var _6611__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6609(self__.spec,meta6610__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_6611){
var self__ = this;
var _6611__$1 = this;
return self__.meta6610;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__6612 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__6612) : cljs.spec.alpha.nonconforming.call(null,G__6612));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null)),(function (){var x__18344__auto__ = cljs.spec.alpha.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})())));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta6610","meta6610",-1683298322,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha6609.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6609.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6609";

cljs.spec.alpha.t_cljs$spec$alpha6609.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6609");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha6609 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha6609(spec__$2,meta6610){
return (new cljs.spec.alpha.t_cljs$spec$alpha6609(spec__$2,meta6610));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6609(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha6622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha6622 = (function (form,pred,gfn,spec,meta6623){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta6623 = meta6623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_6624,meta6623__$1){
var self__ = this;
var _6624__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha6622(self__.form,self__.pred,self__.gfn,self__.spec,meta6623__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_6624){
var self__ = this;
var _6624__$1 = this;
return self__.meta6623;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__17846__auto__ = cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__17846__auto__)){
return or__17846__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null)),(function (){var x__18344__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__18344__auto__);
})())));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta6623","meta6623",316620292,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha6622.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha6622.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha6622";

cljs.spec.alpha.t_cljs$spec$alpha6622.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__18129__auto__,writer__18130__auto__,opt__18131__auto__){
return cljs.core._write(writer__18130__auto__,"cljs.spec.alpha/t_cljs$spec$alpha6622");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha6622 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha6622(form__$1,pred__$1,gfn__$1,spec__$1,meta6623){
return (new cljs.spec.alpha.t_cljs$spec$alpha6622(form__$1,pred__$1,gfn__$1,spec__$1,meta6623));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha6622(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__6627 = arguments.length;
switch (G__6627) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6625_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__6625_SHARP_,cljs.spec.alpha.conform(spec,p1__6625_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__17838__auto__ = cljs.core.inst_QMARK_(inst);
if(and__17838__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__17838__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__17838__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__17838__auto__)){
return val.lessThan(end);
} else {
return and__17838__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__17838__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__17838__auto__)){
return val.lessThan(end);
} else {
return and__17838__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477))], 0));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__18453__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_6629_6631 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_6630_6632 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_6629_6631,_STAR_print_fn_STAR_6630_6632,sb__18453__auto__,ed){
return (function (x__18454__auto__){
return sb__18453__auto__.append(x__18454__auto__);
});})(_STAR_print_newline_STAR_6629_6631,_STAR_print_fn_STAR_6630_6632,sb__18453__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_6630_6632;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_6629_6631;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18453__auto__)].join('');
})())].join('')));
}
});

module.exports = cljs.spec.alpha;
