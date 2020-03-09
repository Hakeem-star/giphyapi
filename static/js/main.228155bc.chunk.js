(window.webpackJsonpgiphyapi=window.webpackJsonpgiphyapi||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=(a(19),a(6)),l=a(9),s=a(10),u=a(12),m=a(11),h=a(13),d=a(1),p=a.n(d),g=a(4),f=a(2),v=a(5);a(21);function y(e){return r.a.createElement("div",{className:"search_inputs"},r.a.createElement("input",{onChange:e.handleInput,type:"text",placeholder:"Enter a search term",onKeyPress:function(t){("Enter"===t.key||13===t.keyCode)&&e.handleSearch(t)}}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:e.handleSearch},"Search"),r.a.createElement("button",{onClick:e.handleRemove},"Start again")))}var b=a(3),E=a.n(b);function w(e){var t=e.propsWidth,a=e.propsHeight,i=e.index,c=void 0===i?"Change_image":i,o=e.removeImage,l=e.changeImage,s=e.imageURL,u=e.source,m=e.title,h=Object(n.useState)(""),d=Object(f.a)(h,2),p=d[0],g=d[1];return r.a.createElement("div",{className:"hover_options ".concat(c),style:{position:"absolute",width:t||"auto",height:a||"auto"},title:m},r.a.createElement("ul",null,"Change_image"===c?r.a.createElement("li",{onClick:function(){l()}},"Change image"):r.a.createElement("li",{onClick:function(){o(c)}},"Remove"),r.a.createElement("li",{onClick:function(){}},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"".concat(u)},"Source")),r.a.createElement("li",{className:"copy ".concat(p),onClick:function(){var e=document.createElement("textarea");e.value=s,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),g(""===p?"copied":"")}})))}function k(e){var t=e.result;if(void 0===t.images)return null;try{var a=t.images.original.url,n=t.images.original,i=t.source,c=t.title,o=r.a.createRef();return r.a.createElement("div",{ref:o,className:"gotd",style:{display:"none"}},r.a.createElement("h2",null,"Gif of the day!"),r.a.createElement("div",{className:"gif"},r.a.createElement("div",{className:"_image_group"},r.a.createElement(w,Object.assign({},e.hoverOptions,{propsWidth:n.width+"px",propsHeight:n.height+"px",imageURL:n.url,source:i})),r.a.createElement("img",{onLoad:function(e){o.current.style.display="block"},style:{borderImage:"url(".concat(E.a,") 30"),borderImageRepeat:"stretch",maxWidth:"20rem"},src:a,alt:"gif of the day"}))),r.a.createElement("label",null,c))}catch(l){return null}}function O(e){if(e.results&&e.results.length>0){console.log(e.results);var t=e.results.map((function(t,a){var n=t.images.fixed_width,i=t.source,c=t.title,o=r.a.createRef(),l=a?"":"new";return r.a.createElement("div",{key:t.id+(e.results.length-a),className:"image_frame ".concat(l),ref:o,style:{display:"none",width:Number(n.width)+60+"px"}},r.a.createElement("div",{className:"gif"},r.a.createElement(w,Object.assign({},e.hoverOptions,{index:a,propsWidth:n.width+"px",propsHeight:n.height+"px",imageURL:n.url,source:i,title:c})),r.a.createElement("img",{onLoad:function(e){o.current.style.display="inherit"},title:c,alt:"giphy_image",style:{borderImage:"url(".concat(E.a,") 30"),borderImageRepeat:"stretch"},src:n.url})),r.a.createElement("label",null,c))}));return r.a.createElement("div",{className:"images"},t)}return null}var x=function(e){return fetch("https://api.giphy.com/v1/gifs/search?q="+e+"&api_key=dc6zaTOxFJmzC")},S=function(e,t){if("API rate limit exceeded"===e.message)throw e.message;if(console.log(e.data.length),e.data.length>0){var a=(n=e,Math.floor(Math.random()*n.data.length));return[t,e.data[a]]}var n;alert("Nothing was found. Try another Search term")};function j(e,t){return x(e).then((function(e){return e.json()})).then((function(e){return S(e,t)})).catch((function(e){console.error(e),alert(e,"Please wait a minute before trying again")}))}var C=function(){var e=this;return{changeImage:function(){var t=Object(v.a)(p.a.mark((function t(){var a,n,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j("gif of the day","gotd");case 2:a=t.sent,n=Object(f.a)(a,2),r=n[0],i=n[1],e.setState(Object(g.a)({},r,i));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),removeImage:function(t){return e.removeImage(t)},openShareDialogue:function(){return e.openShareDialogue}}},I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={inputValue:"",imagesFromSearch:[],gotd:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t,a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("gif of the day","gotd");case 2:t=e.sent,a=Object(f.a)(t,2),n=a[0],r=a[1],this.setState(Object(g.a)({},n,r));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeAllGifs",value:function(e){this.setState({imagesFromSearch:[]})}},{key:"inputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"removeImage",value:function(e){var t=Object(o.a)(this.state.imagesFromSearch).filter((function(t,a){return e!==a}));this.setState({imagesFromSearch:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"GIPHY PARTY"),r.a.createElement(y,{handleInput:function(t){return e.inputValue(t)},handleSearch:function(){var t=Object(v.a)(p.a.mark((function t(a){var n,r,i,c,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e.state.inputValue,"imagesFromSearch");case 3:n=t.sent,r=Object(f.a)(n,2),i=r[0],c=r[1],l=[c].concat(Object(o.a)(e.state.imagesFromSearch)),e.setState(Object(g.a)({},i,l)),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),handleRemove:function(t){return e.removeAllGifs(t)}})),r.a.createElement("main",{className:"container"},r.a.createElement(k,{result:this.state.gotd,hoverOptions:C.call(this)}),r.a.createElement(O,{hoverOptions:C.call(this),results:this.state.imagesFromSearch})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,a){e.exports=a.p+"static/media/Brown_Frame_l.0ad9567b.png"}},[[14,1,2]]]);
//# sourceMappingURL=main.228155bc.chunk.js.map