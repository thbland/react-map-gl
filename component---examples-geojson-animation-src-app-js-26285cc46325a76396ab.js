(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{PHfw:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l})),n.d(e,"renderToDom",(function(){return u}));n("E5k/");var o=n("q1tI"),r=n("i8i4"),a=n("+qjn");var i=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){return o.createElement("div",{className:"control-panel"},o.createElement("h3",null,"Animated GeoJSON"),o.createElement("p",null,"Render animation by updating GeoJSON data source."),o.createElement("div",{className:"source-link"},o.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/5.2-release/examples/geojson-animation",target:"_new"},"View Code ↗")))},r}(o.PureComponent);function c(t){var e=t.center,n=t.angle,o=t.radius;return{type:"Point",coordinates:[e[0]+Math.cos(n)*o,e[1]+Math.sin(n)*o]}}var p={type:"circle",paint:{"circle-radius":10,"circle-color":"#007cbf"}},l=function(t){var e,n;function r(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={pointData:null,viewport:{latitude:0,longitude:-100,zoom:3,bearing:0,pitch:0}},e.animation=null,e._animatePoint=function(){e.setState({pointData:c({center:[-100,0],angle:Date.now()/1e3,radius:20})}),e.animation=window.requestAnimationFrame(e._animatePoint)},e._onViewportChange=function(t){return e.setState({viewport:t})},e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var l=r.prototype;return l.componentDidMount=function(){this._animatePoint()},l.componentWillUnmount=function(){window.cancelAnimationFrame(this.animation)},l.render=function(){var t=this.state,e=t.viewport,n=t.pointData;return o.createElement(a.default,Object.assign({},e,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/light-v9",onViewportChange:this._onViewportChange,mapboxApiAccessToken:""}),n&&o.createElement(a.Source,{type:"geojson",data:n},o.createElement(a.Layer,p)),o.createElement(i,{containerComponent:this.props.containerComponent}))},r}(o.Component);function u(t){Object(r.render)(o.createElement(l,null),t)}}}]);