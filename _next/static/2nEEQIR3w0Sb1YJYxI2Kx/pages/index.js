(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RNiq:function(e,n,t){"use strict";t.r(n);var a,l=t("q1tI"),o=t.n(l),s=t("8Kt/"),r=t.n(s),i=t("Gmd9"),c=t.n(i),u=(t("Xl4x"),o.a.createElement),d=function(e){var n=e.children;return u(o.a.Fragment,null,u(r.a,null,u("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap",rel:"stylesheet"}),u("meta",{name:"viewport",content:"user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"}),u("meta",{name:"mobile-web-app-capable",content:"yes"}),u("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),u("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),u("script",{src:"/scripts/inobounce.js"}),u("script",{src:"/scripts/hammer.min.js"})),u("div",{className:c.a.layout},n))},m=t("8A0K"),h=t.n(m),f=o.a.createElement,p=function(e){var n=e.children,t=Object(l.useState)(null),a=t[0],o=t[1];return Object(l.useEffect)(function(){var e=setInterval(function(){var e=new Date,n="0".concat(e.getMinutes()).slice(-2),t=[e.getHours(),n].join(":");o(t)},1);return window.onback=window.onback||function(){},function(){return clearInterval(e)}},[]),f("div",{className:h.a.phone},f("div",{className:h.a.status_bar},f("span",{className:h.a.item},a)),f("div",{className:h.a.viewport},n),f("div",{className:h.a.buttons},f("div",{className:h.a.button,onClick:function(){return window.onback()}},f("div",{className:h.a.back})),f("div",{className:h.a.button,onClick:function(){return alert("This button is disabled.")}},f("div",{className:h.a.home})),f("div",{className:h.a.button,onClick:function(){return alert("This button is disabled.")}},f("div",{className:h.a.apps}))))},N=t("lCrc"),b=t.n(N),g=o.a.createElement,v=function(e){var n=e.children,t=e.className,a=e.scroll,o=e.title,s=Object(l.useRef)();return Object(l.useEffect)(function(){return s.current.scrollTo(0,a)},[n]),g("div",{ref:s,className:"".concat(b.a.card_layout," ").concat(t)},g("div",{className:b.a.content},o&&g("div",{className:b.a.title},o),n))},y=t("mjCN"),w=t.n(y),k=o.a.createElement,C=function(e){var n=e.children,t=e.className;return k("div",{className:"".concat(w.a.summary," ").concat(t)},n)},x=t("dwco"),S=t.n(x),I=t("dTB/"),F=t.n(I),_=o.a.createElement,Y=function(e){var n=e.children,t=e.channel,a=void 0===t?{}:t,o=e.cardIndex,s=void 0===o?0:o,r=Object(l.useState)(n.map(function(e){return 1})),i=r[0],c=r[1],u=Object(l.useState)(n.map(function(e){return 0})),d=u[0],m=u[1],h=Object(l.useState)(null),f=h[0],p=h[1],N=Object(l.useState)(s),b=N[0],g=N[1],v=Object(l.useRef)(),y=Object(l.useRef)(n.map(function(e){return Object(l.createRef)()})),w=n.map(function(e,n){return _("div",{key:n,ref:function(e){return y.current[n]=e},className:F.a.item,style:{transform:"scale(".concat(i[n],")"),opacity:d[n]}},_("div",{className:F.a.inner},e))}),k=function(){var e=n.map(function(e,n){var t=y.current[n].getBoundingClientRect(),a=v.current.getBoundingClientRect(),l=t.x,o=t.x+t.width,s=t.width,r=a.x,i=a.width,c=Math.max(l-r,0),u=Math.min(o-r,i);return Math.max(u-c,0)/s});c(e.map(function(e){return.88+.12*e})),m(e.map(function(e){return.7+(1-.7)*e}))};Object(l.useEffect)(k,[]),Object(l.useEffect)(function(){var e=y.current[0].getBoundingClientRect();p(e.width),S.a.polyfill();var n=window.addEventListener("keydown",function(e){37===e.keyCode&&C(),39===e.keyCode&&x()});return new Hammer.Manager(v.current,{touchAction:"auto",inputClass:Hammer.SUPPORT_POINTER_EVENTS?Hammer.PointerEventInput:Hammer.TouchInput,recognizers:[[Hammer.Swipe,{direction:Hammer.DIRECTION_HORIZONTAL}]]}).on("swipe",function(e){e.direction===Hammer.DIRECTION_RIGHT&&C(),e.direction===Hammer.DIRECTION_LEFT&&x()}),function(){return window.removeEventListener("keydown",n)}},[]);var C=function(){return g(function(e){return Math.max(e-1,0)})},x=function(){return g(function(e){return Math.min(e+1,n.length-1)})};return a.next=x,Object(l.useEffect)(function(){v.current.scroll({left:b*f,behavior:"smooth"})},[b]),Object(l.useEffect)(function(){v.current.scroll({left:b*f,behavior:"smooth"})},[f]),_("div",{ref:v,className:F.a.gallery,onScroll:k},w)},j=t("S4va"),T=t.n(j),R=o.a.createElement,O=function(e){var n=e.children,t=e.className,a=e.onClick;return R("div",{className:"".concat(T.a.card," ").concat(t," card"),onClick:a},R("div",{className:T.a.colored_bar}),R("div",{className:T.a.content},n))},E=o.a.createElement,H=function(e){var n=e.setView,t=e.setTitle;return Object(l.useEffect)(function(){return t(null)},[]),E(Y,null,E(O,{className:"green",onClick:function(){return n("garden_path")}},E("span",{className:"ordinal"},"1 of 2"),E("h3",null,"A path in the front garden"),E("img",{src:"/images/garden_path.jpg"})),E(O,{className:"red",onClick:function(){return n("fred")}},E("span",{className:"ordinal"},"2 of 2"),E("h3",null,"Looking after Fred"),E("img",{src:"/images/baby.png"})))},A=t("/v5s"),D=t.n(A),L=o.a.createElement,B=function(e){var n=e.children;return L("p",{className:D.a.question_text},n)},P=t("s0gH"),W=t.n(P),V=o.a.createElement,X=function(e){e.text;var n=e.placeholder,t=(e.expected,e.unit),a=Object(l.useRef)(),o=Object(l.useState)(1),s=o[0],r=o[1],i=Object(l.useState)(!1),c=(i[0],i[1],function(){var e=a.current;e.scrollHeight>e.clientHeight&&r(s+1)});return Object(l.useEffect)(c,[s]),V("div",{className:W.a.free_text},V("div",{className:W.a.field},V("span",{className:W.a.unit},t),V("textarea",{ref:a,rows:s,placeholder:n,onChange:function(){r(1),c()}}),V("span",{className:W.a.outer_placeholder},n)))},U=t("n9ft"),M=t.n(U),z=o.a.createElement,q=function(e){var n=e.choices,t=Object(l.useState)(null),a=t[0],o=t[1];return z("ul",{className:M.a.multi_choice},n.map(function(e,n){return z("li",{key:n,onClick:function(){return o(n)},className:a===n?M.a.selected:null},z("div",{className:M.a.radio}),e)}))},G=t("NuTf"),K=t.n(G),J=o.a.createElement,Z=function(e){var n=e.children;return J("p",{className:K.a.expected_value},n)},Q=o.a.createElement,$=function(e){var n=e.setView,t=e.cardIndex,a=e.setCardIndex,s=e.setScroll,r=e.setTitle,i=Object(l.useRef)();Object(l.useEffect)(function(){r(null),t>0&&s(i.current.getBoundingClientRect().top),window.onback=function(){n("projects"),a(0),s(0)}},[]);var c=function(e,t){var l=i.current.getBoundingClientRect().top;window.onback=function(){n("garden_path"),a(t),s(l),r(null)},n(e),a(0),s(0),r({garden_path_remove:"Remove old path",garden_path_foundation:"Lay foundation",garden_path_tiles:"Laying the tiles",garden_path_ongoing:"Using the path"}[e])};return Q(o.a.Fragment,null,Q(C,null,Q("h1",null,"A path in the front garden"),Q("h2",null,"Project summary"),Q("p",null,"The contract states that a black and white mosaic tile pattern will be laid on a foundation made of good quality cement. The path will be 92cm wide and 212 cm long, leading from gate to doorstep. It will be smooth."),Q("img",{src:"/images/map.png"}),Q("button",null,"Project contract"),Q("button",null,"Record an issue"),Q("button",null,"Issues in this project (7)")),Q(Y,{cardIndex:t},Q(O,{className:"green"},Q("span",{ref:i,className:"ordinal"},"1 of 4"),Q("h3",null,"Remove old path"),Q("p",null,"As part of the contract the builder has committed to remove all the old concrete. There will be no rubbish left and you will not have to go to the tip yourself."),Q("button",{className:"alt1",onClick:function(){return c("garden_path_remove",0)}},"Update progress"),Q("button",null,"Record an issue")),Q(O,{className:"red"},Q("span",{className:"ordinal"},"2 of 4"),Q("h3",null,"Lay foundation"),Q("p",null,"A common problem with builders laying foundations is that they use inferior quality cement. Sometimes they even don't use any cement and just use sand. In the long run this results in uneven paths. Another common issue is skimping on materials and making the foundation too short or too narrow."),Q("button",{className:"alt1",onClick:function(){return c("garden_path_foundation",1)}},"Update progress"),Q("button",null,"Record an issue")),Q(O,{className:"blue"},Q("span",{className:"ordinal"},"3 of 4"),Q("h3",null,"Laying the tiles"),Q("p",null,"Key things to look out for during this phase is whether they are using the right tiles, how level the tiles are, and whether they cover the foundation entirely."),Q("button",{className:"alt1",onClick:function(){return c("garden_path_tiles",2)}},"Update progress"),Q("button",null,"Record an issue")),Q(O,{className:"yellow"},Q("span",{className:"ordinal"},"4 of 4"),Q("h3",null,"Using the path"),Q("p",null,"Throughout the course of the first year it is good to assess from time to time how well the path is working for you."),Q("button",{className:"alt1",onClick:function(){return c("garden_path_ongoing",3)}},"Update progress"),Q("button",null,"Record an issue"))))};$.Remove=function(e){var n=e.setView,t=e.cardIndex,l=e.setCardIndex;e.setTitle;return Q(Y,{channel:a={},cardIndex:t},Q(O,{className:"green"},Q("span",{className:"ordinal"},"1 of 3"),Q("h3",null,"Removal"),Q(B,null,"Have all pieces of old path been removed from garden?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"green"},Q("span",{className:"ordinal"},"2 of 3"),Q("h3",null,"Removal"),Q(B,null,"Any comments about removal of old path?"),Q(X,{placeholder:"Add a comment"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"black"},Q("span",{className:"ordinal"},"3 of 3"),Q("h3",null,"Removal"),Q(B,null,"Has this activity been completed?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){l(1),n("garden_path")}},"Submit")))},$.Foundation=function(e){var n=e.setView,t=e.cardIndex,l=e.setCardIndex;return Q(Y,{channel:a={},cardIndex:t},Q(O,{className:"red"},Q("span",{className:"ordinal"},"1 of 3"),Q("h3",null,"Cement"),Q(B,null,"Does the cement float in water? "),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"red"},Q("span",{className:"ordinal"},"2 of 3"),Q("h3",null,"Cement"),Q(B,null,"Does it contain lumps?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"red"},Q("span",{className:"ordinal"},"3 of 3"),Q("h3",null,"Cement"),Q(B,null,"Any comments about the cement?"),Q(X,{placeholder:"Add a comment"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"red-2"},Q("span",{className:"ordinal"},"1 of 6"),Q("h3",null,"Sizes and position"),Q(B,null,"What is the width of the foundation?"),Q(Z,null,"It should be 92 centimeters wide"),Q("em",null,"You measure from the outside border to the other outside border."),Q(X,{placeholder:"Add a value",unit:"cm"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"red-2"},Q("span",{className:"ordinal"},"2 of 6"),Q("h3",null,"Sizes and position"),Q(B,null,"What is the length of the foundation?"),Q(Z,null,"It should be 212 centimeters long"),Q(X,{placeholder:"Add a value",unit:"cm"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"red-2"},Q("span",{className:"ordinal"},"3 of 6"),Q("h3",null,"Sizes and position"),Q(B,null,"Is the foundation going from gate to doorstep?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"red-2"},Q("span",{className:"ordinal"},"4 of 6"),Q("h3",null,"Sizes and position"),Q(B,null,"Is the surface smooth?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"red-2"},Q("span",{className:"ordinal"},"5 of 6"),Q("h3",null,"Sizes and position"),Q(B,null,"Any comments about the foundation?"),Q(X,{placeholder:"Add a comment"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"black"},Q("span",{className:"ordinal"},"6 of 6"),Q("h3",null,"Sizes and position"),Q(B,null,"Has this activity been completed?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){l(2),n("garden_path")}},"Submit")))},$.Tiles=function(e){var n=e.setView,t=e.cardIndex,l=e.setCardIndex;return Q(Y,{channel:a={},cardIndex:t},Q(O,{className:"blue"},Q("span",{className:"ordinal"},"1 of 5"),Q("h3",null,"Tiles"),Q(B,null,"Are the tiles black and white?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue"},Q("span",{className:"ordinal"},"2 of 5"),Q("h3",null,"Tiles"),Q(B,null,"What is the width of the biggest tile?"),Q(X,{placeholder:"Add a value",unit:"cm"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue"},Q("span",{className:"ordinal"},"3 of 5"),Q("h3",null,"Tiles"),Q(B,null,"What is the length of the biggest tile?"),Q(X,{placeholder:"Add a value",unit:"cm"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue"},Q("span",{className:"ordinal"},"4 of 5"),Q("h3",null,"Tiles"),Q(B,null,"Are there any broken tiles?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue"},Q("span",{className:"ordinal"},"5 of 5"),Q("h3",null,"Tiles"),Q(B,null,"Any comments about the tiles?"),Q(X,{placeholder:"Add a comment"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue-2"},Q("span",{className:"ordinal"},"1 of 4"),Q("h3",null,"Laying them"),Q(B,null,"Have the tiles been laid in a mosaic pattern?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue-2"},Q("span",{className:"ordinal"},"2 of 4"),Q("h3",null,"Laying them"),Q(B,null,"Do the tiles cover the foundation entirely?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue-2"},Q("span",{className:"ordinal"},"3 of 4"),Q("h3",null,"Laying them"),Q(B,null,"Is the surface even?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue-2"},Q("span",{className:"ordinal"},"4 of 4"),Q("h3",null,"Laying them"),Q(B,null,"Any comments about laying the tiles?"),Q(X,{placeholder:"Add a comment"}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue-3"},Q("span",{className:"ordinal"},"1 of 3"),Q("h3",null,"Tidy-up"),Q(B,null,"Have all the remaining tiles been handed over?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"blue-3"},Q("span",{className:"ordinal"},"2 of 3"),Q("h3",null,"Tidy-up"),Q(B,null,"Have all the remaining items been removed from the premises?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"black"},Q("span",{className:"ordinal"},"3 of 3"),Q("h3",null,"Tidy-up"),Q(B,null,"Has this activity been completed?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){l(3),n("garden_path")}},"Submit")))},$.Ongoing=function(e){e.setView;var n=e.cardIndex;e.setCardIndex;return Q(Y,{channel:a={},cardIndex:n},Q(O,{className:"yellow"},Q("span",{className:"ordinal"},"1 of 3"),Q("h3",null,"Using the path"),Q(B,null,"Does the new path look good?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"yellow"},Q("span",{className:"ordinal"},"2 of 3"),Q("h3",null,"Using the path"),Q(B,null,"Is the new path slippery in the rain?"),Q(q,{choices:["Yes","No","Not sure"]}),Q("button",{className:"alt1",onClick:function(){return a.next()}},"Submit")),Q(O,{className:"yellow"},Q("span",{className:"ordinal"},"3 of 3"),Q("h3",null,"Using the path"),Q(B,null,"Overall, how happy are you with the new path?"),Q(q,{choices:[1,2,3,4,5,6,7,8,9,10]}),Q("button",{className:"alt1"},"Submit")))};var ee,ne=$,te=o.a.createElement,ae=function(e){var n=e.setView,t=e.cardIndex,a=e.setCardIndex,s=e.setScroll,r=e.setTitle,i=Object(l.useRef)();Object(l.useEffect)(function(){r(null),t>0&&s(i.current.getBoundingClientRect().top),window.onback=function(){n("projects"),a(1),s(0)}},[]);var c=function(e,t){var l=i.current.getBoundingClientRect().top;window.onback=function(){n("fred"),a(t),s(l),r(null)},n(e),a(0),s(0),r({fred_dinner:"Dinner time",fred_bath:"Bath time",fred_play:"Play time"}[e])};return te(o.a.Fragment,null,te(C,null,te("h1",null,"Looking after Fred"),te("h2",null,"Project summary"),te("p",null,"Looking after any child isn't easy, but Fred is a tiny terrorist who plays by his own rules. This project can be re-used daily to allow anyone to herd Fred along in life and enable him to be clean, fed and happy."),te("button",null,"Project contract"),te("button",null,"Record an issue"),te("button",null,"Issues in this project (7)")),te(Y,{cardIndex:t},te(O,{className:"green"},te("span",{ref:i,className:"ordinal"},"1 of 3"),te("h3",null,"Dinner time"),te("p",null,"Fred is hungry, again. He must be fed before he loses it."),te("button",{className:"alt1",onClick:function(){return c("fred_dinner",0)}},"Update progress"),te("button",null,"Record an issue")),te(O,{className:"red"},te("span",{className:"ordinal"},"2 of 3"),te("h3",null,"Bath time"),te("p",null,"Fred is messy from a day of fun in the park. He needs a nice bath to clean him up."),te("button",{className:"alt1",onClick:function(){return c("fred_bath",1)}},"Update progress"),te("button",null,"Record an issue")),te(O,{className:"blue"},te("span",{className:"ordinal"},"3 of 3"),te("h3",null,"Play time"),te("p",null,"Fred's mum wants Fred to sleep through the night so that she can have a glass of wine, a bath and watch RuPaul's Drag Race in peace. Playing with Fred before bed allows his to expel the last bit of energy before his long sleep and makes sure he is a happy baby."),te("button",{className:"alt1",onClick:function(){return c("fred_play",2)}},"Update progress"),te("button",null,"Record an issue"))))};ae.Dinner=function(e){var n=e.setView,t=e.cardIndex,a=e.setCardIndex;e.setTitle;return te(Y,{channel:ee={},cardIndex:t},te(O,{className:"green"},te("span",{className:"ordinal"},"1 of 3"),te("h3",null,"Decide what to make for dinner"),te(B,null,"Has Fred eaten all food groups today?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"2 of 3"),te("h3",null,"Decide what to make for dinner"),te(B,null,"Has Fred had at least 3 portions of fruit and vegetables today?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"3 of 3"),te("h3",null,"Decide what to make for dinner"),te(B,null,"Is Fred in a fussy mood?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green-2"},te("span",{className:"ordinal"},"1 of 3"),te("h3",null,"Gather ingredients"),te(B,null,"What do we have in the fridge?"),te(X,{placeholder:"Add ingredients"}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green-2"},te("span",{className:"ordinal"},"2 of 3"),te("h3",null,"Gather ingredients"),te(B,null,"What do we have in the freezer?"),te(X,{placeholder:"Add ingredients"}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green-2"},te("span",{className:"ordinal"},"3 of 3"),te("h3",null,"Gather ingredients"),te(B,null,"Have we got leftovers?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green-3"},te("span",{className:"ordinal"},"1 of 2"),te("h3",null,"Cook dinner"),te(B,null,"Is the frying pan clean?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green-3"},te("span",{className:"ordinal"},"2 of 2"),te("h3",null,"Cook dinner"),te(B,null,"How much salt is added?"),te("em",null,"There should be no salt added to Fred\u2019s food"),te(X,{placeholder:"Add a value",unit:"grams"}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green-4"},te("span",{className:"ordinal"},"1 of 2"),te("h3",null,"Chase down Fred"),te(B,null,"Where is Fred?"),te(X,{placeholder:"Add a place"}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green-4"},te("span",{className:"ordinal"},"2 of 2"),te("h3",null,"Chase down Fred"),te(B,null,"Is the highchair clean?"),te("em",null,"The highchair should have been cleaned after the last meal"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"1 of 7"),te("h3",null,"Sit Fred in highchair and feed him"),te(B,null,"Is Fred clipped in?"),te("em",null,"Fred should be clipped in now because he keeps standing up in the highchair"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"2 of 7"),te("h3",null,"Sit Fred in highchair and feed him"),te(B,null,"Does Fred\u2019s mum reprimand him for throwing food on the floor?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"3 of 7"),te("h3",null,"Sit Fred in highchair and feed him"),te(B,null,"How much does Fred eat?"),te(q,{choices:["All of it","Some of it","None of it"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"4 of 7"),te("h3",null,"Sit Fred in highchair and feed him"),te(B,null,"Has Fred had some water?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"5 of 7"),te("h3",null,"Sit Fred in highchair and feed him"),te(B,null,"Has Fred\u2019s mum persuaded him to have more?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"green"},te("span",{className:"ordinal"},"6 of 7"),te("h3",null,"Sit Fred in highchair and feed him"),te(B,null,"Has Fred\u2019s mum cleaned him with a wet wipe after he has eaten?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"black"},te("span",{className:"ordinal"},"7 of 7"),te("h3",null,"Sit Fred in highchair and feed him"),te(B,null,"Has this activity been completed?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){a(1),n("fred")}},"Submit")))},ae.Bath=function(e){var n=e.setView,t=e.cardIndex,a=e.setCardIndex;return te(Y,{channel:ee={},cardIndex:t},te(O,{className:"red"},te("span",{className:"ordinal"},"1 of 2"),te("h3",null,"Run the bath"),te(B,null,"Have the taps been turned on?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red"},te("span",{className:"ordinal"},"2 of 2"),te("h3",null,"Run the bath"),te(B,null,"Has the plug been put in?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-2"},te("span",{className:"ordinal"},"1 of 1"),te("h3",null,"Check the temperature"),te(B,null,"Is the temperature below 38 degrees?"),te("em",null,"The water should be below 38 degrees centigrade."),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-3"},te("span",{className:"ordinal"},"1 of 2"),te("h3",null,"Find the bath toys"),te(B,null,"Where are the bath toys?"),te(X,{placeholder:"Add a place"}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-3"},te("span",{className:"ordinal"},"2 of 2"),te("h3",null,"Find the bath toys"),te(B,null,"Which bath toys does Fred want today?"),te(X,{placeholder:"Add toys"}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-4"},te("span",{className:"ordinal"},"1 of 2"),te("h3",null,"Undress Fred"),te(B,null,"Are his buttons undone before the top is pulled over his head?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-4"},te("span",{className:"ordinal"},"2 of 2"),te("h3",null,"Undress Fred"),te(B,null,"Can the clothes be worn another day?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red"},te("span",{className:"ordinal"},"1 of 5"),te("h3",null,"Wash Fred"),te(B,null,"Do you know where the flannel is?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red"},te("span",{className:"ordinal"},"2 of 5"),te("h3",null,"Wash Fred"),te(B,null,"Do you know where the toothbrush is?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red"},te("span",{className:"ordinal"},"3 of 5"),te("h3",null,"Wash Fred"),te(B,null,"Is Fred\u2019s skin clean?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red"},te("span",{className:"ordinal"},"4 of 5"),te("h3",null,"Wash Fred"),te(B,null,"Are Fred\u2019s teeth clean?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red"},te("span",{className:"ordinal"},"5 of 5"),te("h3",null,"Wash Fred"),te(B,null,"Is Fred standing up in the bath?"),te("em",null,"Fred should remain seated in the bath"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-2"},te("span",{className:"ordinal"},"1 of 1"),te("h3",null,"Dry Fred"),te(B,null,"Do you know where Fred\u2019s towel is?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-3"},te("span",{className:"ordinal"},"1 of 4"),te("h3",null,"Dress Fred in warm, clean pyjamas"),te(B,null,"Has Fred got a clean nappy on?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-3"},te("span",{className:"ordinal"},"2 of 4"),te("h3",null,"Dress Fred in warm, clean pyjamas"),te(B,null,"Do you know where his pyjamas are?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"red-3"},te("span",{className:"ordinal"},"3 of 4"),te("h3",null,"Dress Fred in warm, clean pyjamas"),te(B,null,"Does Fred need distraction when getting dressed?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"black"},te("span",{className:"ordinal"},"4 of 4"),te("h3",null,"Dress Fred in warm, clean pyjamas"),te(B,null,"Has this activity been completed?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){a(2),n("fred")}},"Submit")))},ae.Play=function(e){e.setView;var n=e.cardIndex;e.setCardIndex;return te(Y,{channel:ee={},cardIndex:n},te(O,{className:"blue"},te("span",{className:"ordinal"},"1 of 2"),te("h3",null,"Lay out toys and books"),te(B,null,"Which toys and books are already out?"),te(X,{placeholder:"Add items"}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"blue"},te("span",{className:"ordinal"},"2 of 2"),te("h3",null,"Lay out toys and books"),te(B,null,"Where will you play?"),te(q,{choices:["Living room","Fred\u2019s room"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"blue-2"},te("span",{className:"ordinal"},"1 of 3"),te("h3",null,"Make Fred laugh"),te(B,null,"Is Fred having fun?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"blue-2"},te("span",{className:"ordinal"},"2 of 3"),te("h3",null,"Make Fred laugh"),te(B,null,"Is he enjoying reading or playing more?"),te(q,{choices:["Reading books","Playing with toys"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")),te(O,{className:"blue-2"},te("span",{className:"ordinal"},"3 of 3"),te("h3",null,"Make Fred laugh"),te(B,null,"Is Fred playing independently?"),te(q,{choices:["Yes","No","Not sure"]}),te("button",{className:"alt1",onClick:function(){return ee.next()}},"Submit")))};var le=ae,oe=o.a.createElement;n.default=function(){var e=Object(l.useState)("projects"),n=e[0],t=e[1],a=Object(l.useState)(0),o=a[0],s=a[1],r=Object(l.useState)(0),i=r[0],c=r[1],u=Object(l.useState)(null),m=u[0],h={setView:t,cardIndex:o,setCardIndex:s,setScroll:c,setTitle:u[1]};return oe(d,null,oe(p,null,oe(v,{scroll:i,title:m},"projects"===n&&oe(H,h),"garden_path"===n&&oe(ne,h),"garden_path_remove"===n&&oe(ne.Remove,h),"garden_path_foundation"===n&&oe(ne.Foundation,h),"garden_path_tiles"===n&&oe(ne.Tiles,h),"garden_path_ongoing"===n&&oe(ne.Ongoing,h),"fred"===n&&oe(le,h),"fred_dinner"===n&&oe(le.Dinner,h),"fred_bath"===n&&oe(le.Bath,h),"fred_play"===n&&oe(le.Play,h))))}},dwco:function(e,n,t){!function(){"use strict";e.exports={polyfill:function(){var e=window,n=document;if(!("scrollBehavior"in n.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var t,a=e.HTMLElement||e.Element,l=468,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||i,scrollIntoView:a.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(t=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?f.call(e,n.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,n.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,n=arguments[0].top;f.call(this,this,"undefined"===typeof e?this.scrollLeft:~~e,"undefined"===typeof n?this.scrollTop:~~n)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var t=function(e){for(;e!==n.body&&!1===m(e);)e=e.parentNode||e.host;return e}(this),a=t.getBoundingClientRect(),l=this.getBoundingClientRect();t!==n.body?(f.call(this,t,t.scrollLeft+l.left-a.left,t.scrollTop+l.top-a.top),"fixed"!==e.getComputedStyle(t).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,n){this.scrollLeft=e,this.scrollTop=n}function c(e){if(null===e||"object"!==typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"===typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,n){return"Y"===n?e.clientHeight+r<e.scrollHeight:"X"===n?e.clientWidth+r<e.scrollWidth:void 0}function d(n,t){var a=e.getComputedStyle(n,null)["overflow"+t];return"auto"===a||"scroll"===a}function m(e){var n=u(e,"Y")&&d(e,"Y"),t=u(e,"X")&&d(e,"X");return n||t}function h(n){var t,a,o,r,i=(s()-n.startTime)/l;r=i=i>1?1:i,t=.5*(1-Math.cos(Math.PI*r)),a=n.startX+(n.x-n.startX)*t,o=n.startY+(n.y-n.startY)*t,n.method.call(n.scrollable,a,o),a===n.x&&o===n.y||e.requestAnimationFrame(h.bind(e,n))}function f(t,a,l){var r,c,u,d,m=s();t===n.body?(r=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,d=o.scroll):(r=t,c=t.scrollLeft,u=t.scrollTop,d=i),h({scrollable:r,method:d,startTime:m,startX:c,startY:u,x:a,y:l})}}}}()},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,0,6]]]);