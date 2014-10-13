define("amber-poly/Poly", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Poly');
$core.packages["Poly"].transport = {"type":"amd","amdNamespace":"amber-poly"};

$core.addClass('Poly', $globals.Object, ['widget'], 'Poly');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Poly.comment="After page load, all about the app starts here.  This is the object for the application.\x0a\x0aAn instance of this class gets created once all is loaded. It knows a PolyWidget instance which is the presenter so you can view and control things.\x0a\x0aGo to the class side to the #main method.\x0a\x0aFollow the rabbit! You'll get it";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "gravity:",
protocol: 'accessing',
fn: function (anAccelerationValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@widget"])._gravity_(anAccelerationValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gravity:",{anAccelerationValue:anAccelerationValue},$globals.Poly)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAccelerationValue"],
source: "gravity: anAccelerationValue\x0a\x0a\x09widget gravity: anAccelerationValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["gravity:"]
}),
$globals.Poly);

$core.addMethod(
$core.method({
selector: "invertedGravity",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($recv(window)._app())._widget())._gravity_($globals.HashedCollection._newFromPairs_(["x",(0),"y",(-0.0004)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invertedGravity",{},$globals.Poly)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "invertedGravity\x0a\x0a\x09window app widget gravity: #{'x'->0.'y'-> -0.0004}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["gravity:", "widget", "app"]
}),
$globals.Poly);

$core.addMethod(
$core.method({
selector: "normalGravity",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($recv(window)._app())._widget())._gravity_($globals.HashedCollection._newFromPairs_(["x",(0),"y",(0.0004)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normalGravity",{},$globals.Poly)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normalGravity\x0a\x0a\x09window app widget gravity: #{'x'->0.'y'-> 0.0004}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["gravity:", "widget", "app"]
}),
$globals.Poly);

$core.addMethod(
$core.method({
selector: "onOpen",
protocol: 'reactions',
fn: function (){
var self=this;
function $PolyWidget(){return $globals.PolyWidget||(typeof PolyWidget=="undefined"?nil:PolyWidget)}
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@widget"]=$recv($PolyWidget())._new();
$recv(self["@widget"])._renderOn_($recv($HTMLCanvas())._onJQuery_("body"._asJQuery()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onOpen",{},$globals.Poly)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onOpen\x0a\x09\x22The app is starting! let's do things...\x22\x0a\x09\x0a\x09\x22Create a presenter that draw things and controls them\x22\x0a\x09widget := PolyWidget new.\x0a\x09\x0a\x09\x22Render it in a canvas that will use jQuery to paint html tags in the page body.\x0a\x09Next? check comments in PolyWidget>>renderOn: \x22\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)",
referencedClasses: ["PolyWidget", "HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["new", "renderOn:", "onJQuery:", "asJQuery"]
}),
$globals.Poly);

$core.addMethod(
$core.method({
selector: "widget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@widget"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "widget\x0a\x09^ widget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Poly);


$core.addMethod(
$core.method({
selector: "main",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(window)._at_put_("app",$recv(self._new())._onOpen());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.Poly.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x09\x22When this Amber app is fully loaded in the DOM, we expect to \x0a\x09have this message sent (if you check the index.html file \x0a\x09you should find the reference in the callback that gets executed when all is loaded)\x22\x0a\x09\x0a\x09\x22Here we create a new instance for this app, make it react to \x0a\x09this important 'open' moment and make it to be known by the window for future reference.\x0a\x09Next? check #onOpen\x22\x0a\x09window at: #app put: self new onOpen",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "onOpen", "new"]
}),
$globals.Poly.klass);


$core.addClass('PolyWidget', $globals.Widget, ['physics', 'gravity', 'renderer', 'world', 'stuff', 'canvas', 'log', 'worldWrapper', 'counters'], 'Poly');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PolyWidget.comment="##PolyWidget is the Presenter for this little demo application.\x0aIt basically renders the PhysicsJS canvas, adds some buttons and wire up the needed observations/reactions for them.\x0a\x0aSome commands to have fun with:\x0a\x0a - addStuff\x0a - addMotion\x0a - addGravity";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addCounter",
protocol: 'actions',
fn: function (){
var self=this;
function $Counter(){return $globals.Counter||(typeof Counter=="undefined"?nil:Counter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($Counter())._new())._appendToJQuery_("#log"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addCounter",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addCounter\x0a\x09\x22Appends a counter to the log\x22\x0a\x09\x0a\x09Counter new appendToJQuery: '#log' asJQuery",
referencedClasses: ["Counter"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "addGravity",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAddGravity();
$recv($recv($HTMLCanvas())._onJQuery_($recv(self["@log"])._asJQuery()))._p_("GeronimOOOooo...");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addGravity",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addGravity\x0a\x09\x22Adds gravity and logs the action\x22\x0a\x09self basicAddGravity.\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'GeronimOOOooo...'",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["basicAddGravity", "p:", "onJQuery:", "asJQuery"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "addMotion",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAddMotion();
$recv($recv($HTMLCanvas())._onJQuery_($recv(self["@log"])._asJQuery()))._p_("Things are moving! Watch out!...");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addMotion",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addMotion\x0a\x09\x22Adds motion and logs the action\x22\x0a\x09self basicAddMotion.\x0a\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'Things are moving! Watch out!...'",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["basicAddMotion", "p:", "onJQuery:", "asJQuery"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "addRenderer",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
window.Physics(function(w){
	physics=window.Physics;
	var r=window.Physics.renderer('canvas',{
			el: 'viewport',
			width: 500,
			height: 500
			});
	renderer=r;
	world=w;
	world.add(renderer)});

	world.add( Physics.behavior('body-impulse-response') );
	world.add( Physics.behavior('body-collision-detection') );
	world.add( Physics.behavior('sweep-prune') );  

	var bounds=Physics.aabb(0, 0, 500, 500);
    world.add( Physics.behavior('edge-collision-detection', {
   		aabb: bounds,
    	restitution: 0.2
	}) );


	return world;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addRenderer",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addRenderer\x0a\x09\x22When I see code like this first thing I want to know is how do they know what to put there!\x0a\x09And to put this code here the source was this:\x0a\x09http://wellcaffeinated.net/PhysicsJS/tutorials/creating-a-scene-of-interacting-polygons\x0a\x09Only I've adapted it to render the way I wanted for this app, which was:\x0a\x09colliding polygons that move and react to gravity and respect the limits of the canvas.\x22\x0a\x09\x0a\x09<window.Physics(function(w){\x0a\x09physics=window.Physics;\x0a\x09var r=window.Physics.renderer('canvas',{\x0a\x09\x09\x09el: 'viewport',\x0a\x09\x09\x09width: 500,\x0a\x09\x09\x09height: 500\x0a\x09\x09\x09});\x0a\x09renderer=r;\x0a\x09world=w;\x0a\x09world.add(renderer)});\x0a\x0a\x09world.add( Physics.behavior('body-impulse-response') );\x0a\x09world.add( Physics.behavior('body-collision-detection') );\x0a\x09world.add( Physics.behavior('sweep-prune') );  \x0a\x0a\x09var bounds=Physics.aabb(0, 0, 500, 500);\x0a    world.add( Physics.behavior('edge-collision-detection', {\x0a   \x09\x09aabb: bounds,\x0a    \x09restitution: 0.2\x0a\x09}) );\x0a\x0a\x0a\x09return world>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "addStuff",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._createThing();
return $recv(self["@world"])._add_($recv(self._stuff())._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._tryCatch_((function(){

}));
$recv(self["@world"])._render();
$recv($recv($HTMLCanvas())._onJQuery_($recv(self["@log"])._asJQuery()))._p_("A thing was added...");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addStuff",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addStuff\x0a\x0a\x09[self createThing.\x0a\x09world add: self stuff first] tryCatch:[\x22ignoring non polygons, click again and better luck!\x22].\x0a\x09\x0a\x09world render.\x0a\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'A thing was added...'",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["tryCatch:", "createThing", "add:", "first", "stuff", "render", "p:", "onJQuery:", "asJQuery"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "addThing:",
protocol: 'actions',
fn: function (aThing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._stuff())._add_(aThing);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addThing:",{aThing:aThing},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "addThing: aThing\x0a\x0a\x09self stuff add: aThing",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "stuff"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "basicAddGravity",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var g = Physics.behavior('constant-acceleration', {
    	acc: { x : 0, y: 0.0004 }
		});
	self['@gravity']=g;
	world.add(g);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddGravity",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicAddGravity\x0a\x09\x22Adds gravity to the world.\x0a\x09Note 1: it adds the default gravity value (vertical positive acceleration of 0.0004)\x0a\x09Note 2: notice that we are storing the gravity js g variable in the #gravity instVar\x0a\x09by accessing with self['@gravity']. That's the way you can make javascript code to hack an amber object.\x22\x0a\x09\x0a\x09<var g = Physics.behavior('constant-acceleration', {\x0a    \x09acc: { x : 0, y: 0.0004 }\x0a\x09\x09});\x0a\x09self['@gravity']=g;\x0a\x09world.add(g);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "basicAddMotion",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
window.Physics.util.ticker.subscribe(function( time, dt ){
    world.step( time )});

	window.Physics.util.ticker.start();
    
    world.subscribe('step', function(){
    	world.render();});;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddMotion",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicAddMotion\x0a\x09\x22Here you see more PhysicsJS than Amber but what this does is\x0a\x09to subscribe to the PhysicsJS ticker event a callback that will render the world (in each step).\x0a\x09Without this you wouldn't have animation.\x0a\x09All that is explained in the PhysicsJS docs and start to go beyond this demo\x22\x0a\x09\x0a\x09<window.Physics.util.ticker.subscribe(function( time, dt ){\x0a    world.step( time )});\x0a\x0a\x09window.Physics.util.ticker.start();\x0a    \x0a    world.subscribe('step', function(){\x0a    \x09world.render();});>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "counters",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@counters"];
if(($receiver = $2) == null || $receiver.isNil){
self["@counters"]=$recv($Array())._new();
$1=self["@counters"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"counters",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "counters\x0a\x0a\x09^ counters ifNil:[counters := Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "createThing",
protocol: 'actions',
fn: function (){
var self=this;
var newThing;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
newThing=self._createThingIn_vx_from_to_(self._randomPoint(),self._randomSpeed(),(0),(200));
$recv(self._stuff())._addFirst_(newThing);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createThing",{newThing:newThing},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createThing\x0a\x09\x22Create a polygon and add it to the stuff collection\x22\x0a\x09\x0a\x09| newThing |\x0a\x0a\x09\x22Makes sense?\x22\x0a\x09newThing := self createThingIn: self randomPoint \x0a\x09\x09vx: self randomSpeed\x0a\x09\x09from: 0 \x0a\x09\x09to: 200.\x0a\x0a\x09\x22It's okay to have questions...\x0a\x09Join https://groups.google.com/forum/#!forum/amber-lang \x0a\x09and ask to other developers.\x0a\x09Also you have the IRC channel   #amber-lang on freenode\x22\x0a\x09\x0a\x09self stuff addFirst: newThing",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createThingIn:vx:from:to:", "randomPoint", "randomSpeed", "addFirst:", "stuff"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "createThingIn:vx:from:to:",
protocol: 'actions',
fn: function (aPoint,aSpeed,minimum,maximum){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return physics.body('convex-polygon', {
    x: 250,
    y: 250,
    vx: 0.01,
    vertices: [
        {x: 0, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},
        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},
        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: 0},
        {x: 0, y: 0}
    ]
});;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createThingIn:vx:from:to:",{aPoint:aPoint,aSpeed:aSpeed,minimum:minimum,maximum:maximum},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aSpeed", "minimum", "maximum"],
source: "createThingIn: aPoint vx: aSpeed from: minimum to: maximum\x0a\x09\x22Not the best example of how things are done.\x0a\x09Lame justification: this app started as a quick hack for a screencast about amber init\x22\x0a\x09<return physics.body('convex-polygon', {\x0a    x: 250,\x0a    y: 250,\x0a    vx: 0.01,\x0a    vertices: [\x0a        {x: 0, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},\x0a        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},\x0a        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: 0},\x0a        {x: 0, y: 0}\x0a    ]\x0a});>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "createWorld",
protocol: 'actions',
fn: function (){
var self=this;
var html;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
html=self._newCanvas();
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("row");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($3)._class_("span6");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._renderCanvasOn_(html);
self["@world"]=self._addRenderer();
return self["@world"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($5)._class_("span3");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self["@log"]=$recv($recv(html)._div())._id_("log");
return self["@log"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@worldWrapper"]=$2;
$recv($recv($HTMLCanvas())._onJQuery_($recv(self["@log"])._asJQuery()))._p_("World created...");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createWorld",{html:html},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createWorld\x0a\x09\x22Creates the html5 canvas tag and initializes PhysicsJS into it.\x0a\x09This is what guided us to know how to create this world:\x0a\x09http://wellcaffeinated.net/PhysicsJS/tutorials/creating-a-scene-of-interacting-polygons\x22\x0a\x09\x0a\x09\x0a\x09| html |\x0a\x09\x0a\x09html := self newCanvas.\x0a\x0a\x09worldWrapper := html div\x0a\x09\x09class: 'row';\x0a\x09\x09with:[\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'span6';\x0a\x09\x09\x09\x09with:[\x0a\x09\x09\x09\x09\x09self renderCanvasOn: html.\x0a\x09\x09\x09\x09\x09\x22Always navigate code by following implementors to understand Smalltalk things..\x0a\x09\x09\x09\x09\x09What about #addRenderer now?\x22\x0a\x09\x09\x09\x09\x09world := self addRenderer].\x0a\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'span3';\x0a\x09\x09\x09\x09with: [log := html div id: 'log']].\x0a\x09\x09\x09\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'World created...'",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["newCanvas", "class:", "div", "with:", "renderCanvasOn:", "addRenderer", "id:", "p:", "onJQuery:", "asJQuery"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "gravity:",
protocol: 'accessing',
fn: function (anAcceleration){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@gravity"])._setAcceleration_(anAcceleration);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gravity:",{anAcceleration:anAcceleration},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAcceleration"],
source: "gravity: anAcceleration\x0a\x09\x22Set a new value for the acceleration.\x0a\x09Oh hacking this can be fun...\x0a\x09Be responsible and don't collapse the Multiverse!!! \x22\x0a\x0a\x09gravity setAcceleration: anAcceleration",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setAcceleration:"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "newCanvas",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($HTMLCanvas())._onJQuery_("body"._asJQuery());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newCanvas\x0a\x09\x22Returns a new canvas to 'paint' tags in the body\x22\x0a\x09^ HTMLCanvas onJQuery: 'body' asJQuery",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["onJQuery:", "asJQuery"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "randomFrom:to:",
protocol: 'accessing',
fn: function (min,max){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Math.floor(Math.random() * (max - min + 1)) + min;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"randomFrom:to:",{min:min,max:max},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["min", "max"],
source: "randomFrom: min to: max\x0a\x09\x22If you have to do something in js directly you can.\x0a\x09Just be sure you don't mix languages.\x0a\x09It's either Smalltalk or Javascript.\x0a\x09If you're feeling you need to mix, thing in a way to refactor that!\x0a\x09It's always a way to get them nicely separated.\x0a\x09\x0a\x09Ah, BTW, as suggested by its name, this method returns a random integer between min and max :) \x22\x0a\x09<return Math.floor(Math.random() * (max - min + 1)) + min>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "randomPoint",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._randomFrom_to_((10),(400));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["randomFrom:to:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__at(self._randomFrom_to_((10),(400)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"randomPoint",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "randomPoint \x0a\x09\x22Answer a random point\x22\x0a\x09^ (self randomFrom: 10 to: 400) @ (self randomFrom: 10 to: 400)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "randomFrom:to:"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "randomSpeed",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._randomFrom_to_((5),(70))).__slash((1000));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"randomSpeed",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "randomSpeed \x0a\x09\x22Answers a random speed.\x0a\x0a\x09Did you notice how in Smalltalk you make the method names so close to what they do that comments are barely needed?\x0a\x09That's the smell of good code!\x0a\x09Of course good comments are always friendly and specially when your code can have subtle consequences.\x0a\x09Pro tip:  with comments describe intention and what's the answer, like the first line of this comment.\x0a\x09Pro tip 2: comments are a chance to play in team if you use them to increase empathy with who is /not/ very familiar with it. \x0a\x09If you do pro tip 2 right your future-self will be infinitely tankful to your past-self.\x22\x0a\x09^ (self randomFrom: 5 to: 70) / 1000",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "randomFrom:to:"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$2;
$1=$recv(html)._div();
$recv($1)._class_("btn-group");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($3)._at_put_("type","button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("btn btn-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addCounter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_("Add counter");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($5)._at_put_("type","button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($5)._class_("btn btn-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addStuff();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$6=$recv($5)._with_("Add Stuff");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6;
$7=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($7)._at_put_("type","button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($7)._class_("btn btn-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addMotion();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$8=$recv($7)._with_("Add Motion");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["button"]=4;
//>>excludeEnd("ctx");
$recv($9)._at_put_("type","button");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($9)._class_("btn btn-default");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._addGravity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=4;
//>>excludeEnd("ctx");
$10=$recv($9)._with_("Add Gravity");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$10;
$11=$recv(html)._button();
$recv($11)._at_put_("type","button");
$recv($11)._class_("btn btn-default btn-warning");
$recv($11)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._reset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
$12=$recv($11)._with_("Reset");
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a\x09\x22Some buttons to control the behaviour of this app\x22\x0a\x09\x0a\x09html div\x0a\x09\x09class: 'btn-group'; \x22<- why that? I'll pretend you didn't ask. You should already be familiar with this: http://getbootstrap.com/\x22\x0a\x09\x09with:[\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addCounter]; \x22 <- observe button clicks and react adding a counter\x22\x0a\x09\x09\x09\x09with: 'Add counter'.\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addStuff]; \x22 <- observe button clicks and react adding thigns\x22\x0a\x09\x09\x09\x09with: 'Add Stuff'.\x0a\x0a\x09\x09\x09\x22So it's canvas, then what tag, then attributes and observations, then content... see?\x22\x0a\x09\x09\x09\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addMotion]; \x22 <- observe button clicks and react adding motion\x22\x0a\x09\x09\x09\x09with: 'Add Motion'.\x0a\x0a\x09\x09\x09\x22makes sense so far?\x22\x0a\x09\x09\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addGravity]; \x22 <- observe button clicks and react adding gravity\x22\x0a\x09\x09\x09\x09with: 'Add Gravity'.\x0a\x0a\x09\x09\x09\x22awesome, you get the point  :)  \x22\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default btn-warning';\x0a\x09\x09\x09\x09onClick: [self reset];  \x22 <- observe button clicks and react reseting the presenter\x22\x0a\x09\x09\x09\x09with: 'Reset'.\x0a\x09\x09]   \x0a\x09\x09\x22Note that you're having all this properly factored in the right presenter/controller by design, so it's easy to prevent the problem of template mess\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "at:put:", "button", "onClick:", "addCounter", "addStuff", "addMotion", "addGravity", "reset"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "renderCanvasOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._canvas();
$recv($1)._id_("viewport");
$recv($1)._at_put_("width","500");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("height","500");
$2=$recv($1)._yourself();
self["@canvas"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderCanvasOn:",{html:html},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderCanvasOn: html\x0a\x09\x22Nothing too fancy, just the canvas tag with an id in case we need to get it referenced and a specific size.\x0a\x09We keep it in a variable for future use\x22\x0a\x0a\x09canvas := html canvas\x0a\x09\x09id: 'viewport'; \x0a\x09\x09at: 'width' put:'500';\x0a\x09\x09at: 'height' put: '500';\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "canvas", "at:put:", "yourself"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderButtonsOn_(html);
self._createWorld();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render this presenter in the given canvas...\x22\x0a\x09\x0a\x09\x22Lets render some buttons\x22\x0a\x09self renderButtonsOn: html.\x0a\x09\x0a\x09\x22Now create the <canvas>  html5 thing so PhysicsJS can do its job.\x0a\x09Next? take a look at how #createWorld works\x22\x0a\x09self createWorld.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderButtonsOn:", "createWorld"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@canvas"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove();
$recv($recv(self["@worldWrapper"])._asJQuery())._empty();
self._createWorld();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09\x22Gets rid of state, and start brand new\x22\x0a\x0a\x09\x22Remove the canvas element\x22\x0a\x09canvas asJQuery remove.\x0a\x09\x0a\x09\x22removes all children of the log\x22\x0a\x09worldWrapper asJQuery empty.\x0a\x09\x0a\x09\x22Create a fresh world\x22\x0a\x09self createWorld",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "asJQuery", "empty", "createWorld"]
}),
$globals.PolyWidget);

$core.addMethod(
$core.method({
selector: "stuff",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@stuff"];
if(($receiver = $2) == null || $receiver.isNil){
self["@stuff"]=$recv($Array())._new();
$1=self["@stuff"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stuff",{},$globals.PolyWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stuff\x0a\x0a\x09^ stuff ifNil:[stuff := Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.PolyWidget);


});
