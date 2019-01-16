(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n(278)},116:function(e,t,n){},118:function(e,t,n){},278:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),c=n.n(i),o=(n(116),n(28)),l=n(29),s=n(31),u=n(30),m=n(32),f=(n(118),n(107)),p=n.n(f),d=n(109),h=n.n(d),g=n(108),b=n.n(g),E=n(110),L=n.n(E),y=n(50),v=n.n(y),S=n(33),k=n.n(S),O=n(102),j=n.n(O),C=n(103),w=n.n(C),I=n(104),P=n.n(I),T=n(17),R="INCREMENT_BREAK",B="DECREMENT_BREAK",N="SET_BREAK",_="INCREMENT_SESSION",x="DECREMENT_SESSION",A="SET_SESSION",F="DECREMENT_TIME_LEFT",D="PLAY_PAUSE_CLOCK",z="CHANGE_ACTIVE_SESSION",M=function(e,t,n){return e?{type:F,payload:e-1e3}:V(t,n)},K=function(e){return{type:D,payload:!e}},V=function(e,t){return{type:z,payload:{sessionLength:e,breakLength:t}}},W=function(){return{type:"RESET"}},J=n(16),G=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).interval=null,n.handleButtonClick=function(){n.props.isPaused?n.playClock():n.pauseClock(),n.props.playPauseClock(n.props.isPaused)},n.playClock=function(){n.interval=setInterval(function(){n.props.decrementTimeLeft(n.props.timeLeft,n.props.sessionLength,n.props.breakLength),0===n.props.timeLeft&&(n.audioRef.currentTime=0,n.audioRef.play())},1e3)},n.pauseClock=function(){clearInterval(n.interval)},n.handleReset=function(){n.pauseClock(),n.props.reset(),n.audioRef.currentTime=0,n.audioRef.pause()},n.audioRef=null,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{"aria-label":this.props.isPaused?"Play":"Pause",onClick:this.handleButtonClick,id:"start_stop"},this.props.isPaused?r.a.createElement(j.a,{fontSize:"large"}):r.a.createElement(w.a,{fontSize:"large"})),r.a.createElement(k.a,{"aria-label":"Reset",onClick:this.handleReset,id:"reset"},r.a.createElement(P.a,{fontSize:"large"})),r.a.createElement("audio",{ref:function(t){return e.audioRef=t},id:"beep",src:"http://soundbible.com/mp3/Fire_pager-jason-1283464858.mp3"}))}}]),t}(a.Component),H=Object(T.b)(function(e){var t=e.clock,n=e.sessionLength,a=e.breakLength;return{timeLeft:t.timeLeft,isPaused:t.isPaused,sessionLength:n,breakLength:a}},function(e){return Object(J.a)({decrementTimeLeft:M,playPauseClock:K,reset:W},e)})(G),U=function(e){var t=e.labelText,n=e.labelId;return r.a.createElement("span",{id:n,style:{fontSize:"1.5rem",fontWeight:"400",display:"block"}},t)},Y=n(49),$=n.n(Y),q=n(38),Q=Object(q.withStyles)({input:{fontSize:"4rem",textAlign:"center",width:"12rem"}})(function(e){var t=e.classes,n=e.activeSessionLabel,a=e.timeLeft;return r.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",margin:"1rem"}},r.a.createElement(U,{labelText:n,labelId:"timer-label"}),r.a.createElement($.a,{disabled:!0,margin:"normal",variant:"outlined",InputProps:{classes:{input:t.input}},value:a}),r.a.createElement("div",{style:{margin:0,fontSize:"1px",color:"white"},id:"time-left"},a))}),X=n(106),Z=n.n(X),ee=n(105),te=n.n(ee),ne={marginTop:"9px"},ae=Object(q.withStyles)({input:{fontSize:"2rem",textAlign:"center",width:"4rem",height:"0.75rem"}})(function(e){var t=e.classes,n=e.lengthLabel,a=e.lengthValue,i=e.onIncrement,c=e.onDecrement,o=e.onSet;return r.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",margin:"1rem"}},r.a.createElement(U,{labelText:"".concat(n," Length"),labelId:"".concat(n.toLowerCase(),"-label")}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(k.a,{"aria-label":"Decrement ".concat(n," Length"),style:ne,onClick:c,id:"".concat(n.toLowerCase(),"-decrement")},r.a.createElement(te.a,null)),r.a.createElement($.a,{margin:"normal",variant:"outlined",InputProps:{classes:{input:t.input}},value:a,id:"".concat(n.toLowerCase(),"-length"),onChange:o}),r.a.createElement(k.a,{"aria-label":"Increment ".concat(n," Length"),style:ne,onClick:i,id:"".concat(n.toLowerCase(),"-increment")},r.a.createElement(Z.a,null))))}),re=function(e){return e>60?60:e},ie=function(e){return e<1?1:e},ce=function(e,t){var n=Number(t.match(/[0-9]+/g));if(0!==n){var a=Number(n);return a>60?60:a}return e},oe=function(e){return{type:R,payload:re(e+1)}},le=function(e){return{type:B,payload:ie(e-1)}},se=function(e,t){return{type:N,payload:ce(e,t)}},ue=Object(T.b)(function(e){return{breakLength:e.breakLength}},function(e){return Object(J.a)({incrementBreakLength:oe,decrementBreakLength:le,setBreakLength:se},e)})(function(e){return r.a.createElement(r.a.Fragment,null,e.render("Break",e.breakLength,function(){e.incrementBreakLength(e.breakLength)},function(){e.decrementBreakLength(e.breakLength)},function(t){e.setBreakLength(e.breakLength,t.target.value)}))}),me=function(e){return{type:_,payload:re(e+1)}},fe=function(e){return{type:x,payload:ie(e-1)}},pe=function(e,t){return{type:A,payload:ce(e,t)}},de=Object(T.b)(function(e){return{sessionLength:e.sessionLength}},function(e){return Object(J.a)({incrementSessionLength:me,decrementSessionLength:fe,setSessionLength:pe},e)})(function(e){return r.a.createElement(r.a.Fragment,null,e.render("Session",e.sessionLength,function(){e.incrementSessionLength(e.sessionLength)},function(){e.decrementSessionLength(e.sessionLength)},function(t){e.setSessionLength(e.sessionLength,t.target.value)}))}),he=Object(T.b)(function(e){var t,n=e.clock;return{activeSession:n.activeSession,timeLeft:(t=n.timeLeft,new Date(t).toISOString().slice(14,-5))}})(function(e){return r.a.createElement(r.a.Fragment,null,e.render(e.activeSession,e.timeLeft))}),ge=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(b.a,{style:{textAlign:"center"},title:"Pomodoro Clock"}),r.a.createElement(v.a,null),r.a.createElement(h.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(de,{render:function(e,t,n,a,i){return r.a.createElement(ae,{lengthLabel:e,lengthValue:t,onIncrement:n,onDecrement:a,onSet:i})}}),r.a.createElement(ue,{render:function(e,t,n,a,i){return r.a.createElement(ae,{lengthLabel:e,lengthValue:t,onIncrement:n,onDecrement:a,onSet:i})}})),r.a.createElement(v.a,null),r.a.createElement(he,{render:function(e,t){return r.a.createElement(Q,{activeSessionLabel:e,timeLeft:t})}})),r.a.createElement(v.a,null),r.a.createElement(L.a,{style:{justifyContent:"center"}},r.a.createElement(H,null))))}}]),t}(a.Component),be={breakLength:5,sessionLength:25,clock:{activeSession:"Session",timeLeft:15e5,isPaused:!0,isFirstPlay:!0}};var Ee=n(39),Le=6e4;var ye=Object(J.b)({breakLength:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.breakLength,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:case B:case N:return t.payload;default:return e}},sessionLength:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.sessionLength,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:case x:case A:return t.payload;default:return e}},clock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.clock,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(Ee.a)({},e,{timeLeft:t.payload});case D:return Object(Ee.a)({},e,{isPaused:t.payload,isFirstPlay:!1});case _:case x:case A:return e.isFirstPlay?Object(Ee.a)({},e,{timeLeft:t.payload*Le}):e;case z:return Object(Ee.a)({},e,{activeSession:"Session"===e.activeSession?"Break":"Session",timeLeft:"Session"!==e.activeSession?t.payload.sessionLength*Le:t.payload.breakLength*Le});default:return e}}}),ve=Object(J.c)(function(e,t){return"RESET"===t.type&&(e=void 0),ye(e,t)},be),Se=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(T.a,{store:ve},r.a.createElement(ge,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.e2b75e70.chunk.js.map