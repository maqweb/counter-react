(this["webpackJsonptest-2"]=this["webpackJsonptest-2"]||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},3:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(4),l=a.n(u),s=(a(22),a(10)),o=a(15),c=a(11),i=a(16),p=(a(3),function(e){var t=e.value===+e.maxValue?"end":"";return r.a.createElement("div",{className:"display"},e.startValue<0?r.a.createElement("span",{className:"errorText"},e.errorText):0===e.value?r.a.createElement("span",{className:"startText"},e.startText):r.a.createElement("span",{className:t},e.value))}),d=function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn",id:e.id,disabled:e.disabled,onClick:e.onSetValue||e.changeState||e.resetState},e.title))},b=function(e){return r.a.createElement("div",{className:"buttons"},r.a.createElement(d,{id:e.buttons[0].id,title:e.buttons[0].title,changeState:e.changeState,disabled:e.buttons[0].disabled}),r.a.createElement(d,{id:e.buttons[1].id,title:e.buttons[1].title,resetState:e.resetState,disabled:e.buttons[1].disabled}))};var m=function(e){var t=e.startValue<0?"error":"";return r.a.createElement("div",{className:"set-item"},r.a.createElement("label",{className:"label",htmlFor:"control"},r.a.createElement("span",null,e.controlTitle),r.a.createElement("input",{className:t,onClick:e.onSetStartValue||e.onSetMaxValue,type:"number"})))};var v=function(e){return r.a.createElement("div",{className:"set-controls"},r.a.createElement(m,{onSetMaxValue:e.onSetMaxValue,controlTitle:"max value:"}),r.a.createElement(m,{onSetStartValue:e.onSetStartValue,startValue:e.startValue,controlTitle:"start value:"}))},V=a(6),S=a(14);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(S.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T={value:0,startValue:0,startText:"enter values and press 'set' ",errorText:"Incorrect value!",maxValue:0,buttons:[{title:"inc",disabled:!0,id:1},{title:"reset",disabled:!0,id:2},{title:"set",disabled:!0,id:3}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_START_VALUE":return f({},e,{startValue:t.startValue});case"SET_MAX_VALUE":return f({},e,{maxValue:t.maxValue});case"SET_VALUES":return f({},e,{value:t.value});case"DISABLE_SET_BUTTON":return f({},e,{buttons:e.buttons.map((function(e){return+t.value>=0&&3===e.id?f({},e,{disabled:!1}):f({},e,{disabled:!0})}))});case"DISABLE_INC_BUTTON":return f({},e,{buttons:e.buttons.map((function(a){return 1===a.id?+e.maxValue===t.value?f({},a,{disabled:!0}):f({},a,{disabled:!1}):a}))});case"DISABLE_RES_BUTTON":return f({},e,{buttons:e.buttons.map((function(e){return 2===e.id?f({},e,{disabled:!1}):e}))});case"INC_VALUE":case"RESET_INC_VALUE":return f({},e,{value:t.value});default:return e}};window.state=T;var O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,u=new Array(n),l=0;l<n;l++)u[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).changeState=function(){var e=a.props.value;++e>=1&&(e===Number(a.props.maxValue)&&a.props.disableIncButton(e),a.props.disableResButton(e)),a.props.incValue(e)},a.resetState=function(){a.props.resetIncValue(a.props.startValue),a.props.disableIncButton(a.props.maxValue)},a.onSetStartValue=function(e){a.props.setStartValue(e.currentTarget.value),a.onDisableSetButton(e.currentTarget.value)},a.onDisableSetButton=function(e){a.props.disableSetButton(e)},a.onSetMaxValue=function(e){a.props.setMaxValue(e.currentTarget.value)},a.onSetValue=function(){a.props.setValues(a.props.startValue),a.onDisableIncButton(a.props.startValue)},a.onDisableIncButton=function(e){a.props.disableIncButton(e)},a.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"set-counter"},r.a.createElement(v,{onSetStartValue:a.onSetStartValue,onSetMaxValue:a.onSetMaxValue,startValue:a.props.startValue}),r.a.createElement("div",{className:"set-buttons"},r.a.createElement(d,{onSetValue:a.onSetValue,id:a.props.buttons[2].id,title:a.props.buttons[2].title,disabled:a.props.buttons[2].disabled}))),r.a.createElement("div",{className:"main-counter"},r.a.createElement(p,{value:a.props.value,startValue:a.props.startValue,maxValue:a.props.maxValue,startText:a.props.startText,errorText:a.props.errorText}),r.a.createElement(b,{buttons:a.props.buttons,changeState:a.changeState,resetState:a.resetState})))},a}return Object(i.a)(t,e),t}(r.a.Component),_=Object(V.b)((function(e){return{value:e.value,startValue:e.startValue,startText:e.startText,errorText:e.errorText,maxValue:e.maxValue,buttons:e.buttons}}),(function(e){return{setStartValue:function(t){var a=function(e){return{type:"SET_START_VALUE",startValue:e}}(t);e(a)},setMaxValue:function(t){var a=function(e){return{type:"SET_MAX_VALUE",maxValue:e}}(t);e(a)},setValues:function(t){var a=function(e){return{type:"SET_VALUES",value:e}}(t);e(a)},disableSetButton:function(t){var a=function(e){return{type:"DISABLE_SET_BUTTON",value:e}}(t);e(a)},disableIncButton:function(t){var a=function(e){return{type:"DISABLE_INC_BUTTON",value:e}}(t);e(a)},disableResButton:function(t){var a=function(e){return{type:"DISABLE_RES_BUTTON",value:e}}(t);e(a)},incValue:function(t){var a=function(e){return{type:"INC_VALUE",value:e}}(t);e(a)},resetIncValue:function(t){var a=function(e){return{type:"RESET_INC_VALUE",value:e}}(t);e(a)}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(5),N=Object(h.b)(x);l.a.render(r.a.createElement(V.a,{store:N},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a33e7775.chunk.js.map