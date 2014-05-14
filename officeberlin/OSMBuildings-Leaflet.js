var OSMBuildings=function(){function xa(a,c){var b=a.x-c.x,d=a.y-c.y;return b*b+d*d}function Sa(a){for(var c=Infinity,b=-Infinity,d=Infinity,e=-Infinity,f=0,g=a.length-3;f<g;f+=2)c=U(c,a[f]),b=J(b,a[f]),d=U(d,a[f+1]),e=J(e,a[f+1]);return{x:c+(b-c)/2<<0,y:d+(e-d)/2<<0}}function da(a,c){var b={};a/=V;c/=V;b[Ta]=0>=c?90:1<=c?-90:ya*(2*Ua(Va(t*(1-2*c)))-x);b[Wa]=360*(1===a?1:(a%1+1)%1)-180;return b}function za(a,c,b){function d(a){if("XDomainRequest"in W&&a!==e.readyState&&(e.readyState=a,e.onreadystatechange))e.onreadystatechange()}
a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return c[b]||a});var e="XDomainRequest"in W?new XDomainRequest:new XMLHttpRequest;e.onerror=function(){e.status=500;e.statusText="Error";d(4)};e.ontimeout=function(){e.status=408;e.statusText="Timeout";d(4)};e.onprogress=function(){d(3)};e.onload=function(){e.status=200;e.statusText="Ok";d(4)};e.onreadystatechange=function(){4===e.readyState&&e.status&&!(200>e.status||299<e.status)&&b&&e.responseText&&b(JSON.parse(e.responseText))};d(0);e.open("GET",a);
d(1);e.send(null);d(2);return e}function ka(a){X=Y+a.x;Z=v+a.y}function Aa(a){A=a.w;v=a.h;Y=A/2<<0;la=v/2<<0;X=Y;Z=v;s.setSize(A,v);ma=w-50}function Ba(a){B=a;V=Xa<<B;a=da(r+Y,p+la);Ca=Math.abs(40075040*Da(a.latitude)/na(2,B+8));y=na(0.95,B-K);oa=G.alpha(y)+"";ea=fa.alpha(y)+"";$=Q.alpha(y)+""}var Ea=Ea||Array,Fa=Fa||Array,k=Math,Va=k.exp,Ya=k.log,Za=k.sin,Da=k.cos,Ga=k.tan,Ua=k.atan,H=k.atan2,U=k.min,J=k.max,ga=k.sqrt,Ha=k.ceil,Ia=k.floor,na=k.pow,W=window,pa=document;W.console||(W.console={});var M,
qa=function(a,c,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(c-a)*b:0.5>b?c:b<2/3?a+6*(c-a)*(2/3-b):a},$a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",
darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",
fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",
navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",
sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},R=function(a,c,b,d){this.H=a;this.S=c;this.L=b;this.A=d},k=R.prototype;k.toString=function(){var a=Math.min(360,Math.max(0,this.H)),c=Math.min(1,Math.max(0,this.S)),
b=Math.min(1,Math.max(0,this.L)),d=Math.min(1,Math.max(0,this.A)),e;if(0===c)a=e=c=b;else{var f=0.5>b?b*(1+c):b+c-b*c,b=2*b-f,a=a/360,c=qa(b,f,a+1/3);e=qa(b,f,a);a=qa(b,f,a-1/3)}c*=255;e*=255;a*=255;return 1===d?"#"+(16777216+(c<<16)+(e<<8)+a).toString(16).slice(1,7):"rgba("+[Math.round(c),Math.round(e),Math.round(a),d.toFixed(2)].join()+")"};k.hue=function(a){return new R(this.H*a,this.S,this.L,this.A)};k.saturation=function(a){return new R(this.H,this.S*a,this.L,this.A)};k.lightness=function(a){return new R(this.H,
this.S,this.L*a,this.A)};k.alpha=function(a){return new R(this.H,this.S,this.L,this.A*a)};M=function(a){var c=0,b=0,d=0,e=1,f;a=(""+a).toLowerCase().replace("grey","gray");a=$a[a]||a;if(f=a.match(/^#(\w{2})(\w{2})(\w{2})$/))c=parseInt(f[1],16),b=parseInt(f[2],16),d=parseInt(f[3],16);if(f=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))c=parseInt(f[1],10),b=parseInt(f[2],10),d=parseInt(f[3],10),e=f[4]?parseFloat(f[5]):1;c/=255;b/=255;d/=255;a=Math.max(c,b,d);var g=Math.min(c,b,d),j;f=(a+g)/
2;var h=a-g;if(h){g=0.5<f?h/(2-a-g):h/(a+g);switch(a){case c:j=(b-d)/h+(b<d?6:0);break;case b:j=(d-c)/h+2;break;case d:j=(c-b)/h+4}j*=60}else j=g=0;return new R(j,g,f,e)};var Ja,k=Math,ra=k.PI,z=k.sin,D=k.cos,Ka=k.tan,La=k.asin,Ma=k.atan2,N=ra/180,ha=23.4397*N;Ja=function(a,c,b){b=N*-b;c*=N;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=N*(357.5291+0.98560028*a),e=N*(1.9148*z(d)+0.02*z(2*d)+3E-4*z(3*d)),e=d+e+102.9372*N+ra,d=La(z(0)*D(ha)+D(0)*z(ha)*z(e)),e=Ma(z(e)*D(ha)-Ka(0)*z(ha),D(e));b=N*(280.16+
360.9856235*a)-b-e;return{altitude:La(z(c)*z(d)+D(c)*D(d)*D(b)),azimuth:Ma(z(b),D(b)*z(c)-Ka(d)*D(c))-ra/2}};var n={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",getWinding:function(a){var c,b,d,e,f=0,g,j;g=0;for(j=a.length-3;g<j;g+=2)c=a[g],b=a[g+1],d=a[g+2],e=a[g+3],f+=c*e-d*b;return 0<f/2?this.clockwise:this.counterClockwise},makeWinding:function(a,c){if(this.getWinding(a)===c)return a;for(var b=[],d=a.length-2;0<=d;d-=2)b.push(a[d],
a[d+1]);return b},toMeters:function(a){a=""+a;var c=parseFloat(a);return c===a||~a.indexOf("m")?c<<0:~a.indexOf("yd")?c*this.YARD_TO_METER<<0:~a.indexOf("ft")?c*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+a[1]*this.INCH_TO_METER<<0):c<<0},getRadius:function(a){for(var c=90,b=-90,d=0,e=a.length;d<e;d+=2)c=U(c,a[d]),b=J(b,a[d]);return 6378137*((b-c)/ya)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",
gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",
shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||a]||null}},Na,Oa=function(a){var c,b,d,e,f,g=[],j=[],h=0;d=[];switch(a.type){case "GeometryCollection":c=0;for(b=a.geometries.length;c<b;c++)if(g=Oa(a.geometries[c]))d=d.concat(g);return d;case "Polygon":e=a.coordinates;break;case "MultiPolygon":e=
a.coordinates[0];break;default:return d}f=e[0];c=0;for(b=f.length;c<b;c++)g.push(f[c][1],f[c][0]),void 0!==f[c][2]&&(h+=f[c][2]);c=0;for(b=e.length-1;c<b;c++){f=e[c+1];j[c]=[];a=0;for(d=f.length;a<d;a++)j[c].push(f[a][1],f[a][0]);j[c]=n.makeWinding(j[c],n.counterClockwise)}return[{outer:n.makeWinding(g,n.clockwise),inner:j.length?j:null,height:h/e[0].length}]};Na=function(a,c){var b,d,e,f,g=[],j,h,l,m,u,I,k,E;b=0;for(d=a.length;b<d;b++)if(j=a[b],!("Feature"!==j.type||!1===c(j))){h=j.properties;u=
n.toMeters(h.height)||Pa;I=n.toMeters(h.minHeight);k=h.color||h.wallColor||null;E=h.roofColor||null;l=Oa(j.geometry);e=0;for(f=l.length;e<f;e++)m=l[e].outer,g.push({footprint:m,holes:l[e].inner,height:u||l[e].height,id:j.id||h.id||[m[0],m[1],u,I].join(),minHeight:I,wallColor:k,roofColor:E})}return g};var Qa,Ra=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},ta=function(a){if(a){for(var c=[],b,d=0,e=a.length;d<e;d++)b=sa[a[d]],c.push(b[0],b[1]);c[c.length-
2]!==c[0]&&c[c.length-1]!==c[1]&&c.push(c[0],c[1]);if(!(8>c.length))return c}},ab=function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);return a},ua=function(a,c){var b={},d=a.tags||{};a.id&&(b.id=a.id);c&&(b.footprint=n.makeWinding(c,n.clockwise));d.height&&(b.height=n.toMeters(d.height));!b.height&&d["building:height"]&&(b.height=n.toMeters(d["building:height"]));!b.height&&d.levels&&(b.height=d.levels*n.METERS_PER_LEVEL<<0);!b.height&&d["building:levels"]&&(b.height=d["building:levels"]*
n.METERS_PER_LEVEL<<0);d.min_height&&(b.minHeight=n.toMeters(d.min_height));!b.minHeight&&d["building:min_height"]&&(b.minHeight=n.toMeters(d["building:min_height"]));!b.minHeight&&d.min_level&&(b.minHeight=d.min_level*n.METERS_PER_LEVEL<<0);!b.minHeight&&d["building:min_level"]&&(b.minHeight=d["building:min_level"]*n.METERS_PER_LEVEL<<0);d["building:material"]&&(b.wallColor=n.getMaterialColor(d["building:material"]));d["building:facade:material"]&&(b.wallColor=n.getMaterialColor(d["building:facade:material"]));
d["building:cladding"]&&(b.wallColor=n.getMaterialColor(d["building:cladding"]));d["building:color"]&&(b.wallColor=d["building:color"]);d["building:colour"]&&(b.wallColor=d["building:colour"]);d["roof:material"]&&(b.roofColor=n.getMaterialColor(d["roof:material"]));d["building:roof:material"]&&(b.roofColor=n.getMaterialColor(d["building:roof:material"]));d["roof:color"]&&(b.roofColor=d["roof:color"]);d["roof:colour"]&&(b.roofColor=d["roof:colour"]);d["building:roof:color"]&&(b.roofColor=d["building:roof:color"]);
d["building:roof:colour"]&&(b.roofColor=d["building:roof:colour"]);b.height=b.height||Pa;if("cone"===d["building:shape"]||"dome"===d["building:shape"]||"sphere"===d["building:shape"])b.shape="cone",b.radius=n.getRadius(b.footprint);else if("cylinder"===d["building:shape"]||"cone"===d["roof:shape"]||"dome"===d["roof:shape"])if(b.shape="cylinder",b.radius=n.getRadius(b.footprint),("cone"===d["roof:shape"]||"dome"===d["roof:shape"])&&d["roof:height"])b.roofShape="cone",b.roofHeight=n.toMeters(d["roof:height"]),
b.height=J(0,b.height-b.roofHeight);return b},sa,aa,ia,ja;Qa=function(a,c){sa={};aa={};ia=[];ja=c;for(var b,d=0,e=a.length;d<e;d++)switch(b=a[d],b.type){case "node":sa[b.id]=[b.lat,b.lon];break;case "way":if(Ra(b)){var f=void 0,f=void 0;if((f=ta(b.nodes))&&!1!==ja(b))f=ua(b,f),ia.push(f)}else if(f=b.tags,!f||!f.highway&&!f.railway&&!f.landuse)aa[b.id]=b;break;case "relation":var g=b,j=void 0,h=void 0;b=[];var l=h=void 0,m=void 0,f=void 0;if(Ra(g)&&!("multipolygon"!==g.tags.type&&"building"!==g.tags.type||
!1===ja(g))){for(var j=g.members,h=l=void 0,m=[],u=0,I=j.length;u<I;u++)l=j[u],"way"===l.type&&aa[l.ref]&&(!l.role||"outer"===l.role?h=aa[l.ref]:("inner"===l.role||"enclave"===l.role)&&m.push(aa[l.ref]));j=h?{outer:h,inner:m}:void 0;if(j&&(l=ua(g),h=j.outer))if((m=ta(h.nodes))&&!1!==ja(h)){h=ua(h,m);g=0;for(m=j.inner.length;g<m;g++)(f=ta(j.inner[g].nodes))&&b.push(n.makeWinding(f,n.counterClockwise));b.length&&(h.holes=b);ia.push(ab(h,l))}}}return ia};var t=Math.PI,x=t/2,bb=t/4,ya=180/t,Xa=256,K=
15,Ta="latitude",Wa="longitude",A=0,v=0,Y=0,la=0,r=0,p=0,B,V,G=M("rgba(200, 190, 180)"),fa=G.lightness(0.8),Q=G.lightness(1.2),oa=""+G,ea=""+fa,$=""+Q,S,Ca=1,y=1,ma,Pa=5,X,Z,w=450,ba,va={time:new Date,data:{},add:function(a,c){this.data[c]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},C={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},
getPixelFootprint:function(a){for(var c,b,d=new Ea(a.length),e=0,f=a.length-1;e<f;e+=2)c=a[e+1],b=U(1,J(0,0.5-Ya(Ga(bb+x*a[e]/180))/t/2)),c=(c/360+0.5)*V<<0,b=b*V<<0,d[e]=c,d[e+1]=b;a=d;d=a.length/2;e=new Fa(d);f=0;c=d-1;var g,j,h,l=[],m=[],u=[];for(e[f]=e[c]=1;c;){g=0;for(b=f+1;b<c;b++){j=a[2*b];var I=a[2*b+1],k=a[2*f],E=a[2*f+1],n=a[2*c],r=a[2*c+1],p=n-k,q=r-E,v=void 0;if(0!==p||0!==q)v=((j-k)*p+(I-E)*q)/(p*p+q*q),1<v?(k=n,E=r):0<v&&(k+=p*v,E+=q*v);p=j-k;q=I-E;j=p*p+q*q;j>g&&(h=b,g=j)}2<g&&(e[h]=
1,l.push(f),m.push(h),l.push(h),m.push(c));f=l.pop();c=m.pop()}for(b=0;b<d;b++)e[b]&&u.push(a[2*b],a[2*b+1]);d=u;if(!(8>d.length))return d},createClosure:function(a){var c=this;return function(b){b=c.parse(b);va.add(b,a);c.addRenderItems(b,!0)}},parse:function(a){return!a?[]:"FeatureCollection"===a.type?Na(a.features,this.each):a.osm3s?Qa(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,c){for(var b=this.scale(a),d=0,e=b.length;d<e;d++)this.currentItemsIndex[b[d].id]||
(b[d].scale=c?0:1,this.items.push(b[d]),this.currentItemsIndex[b[d].id]=1);S||(S=setInterval(function(){for(var a=C.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);s.render();b||(clearInterval(S),S=null)},33))},scale:function(a){var c,b,d,e,f=[],g,j,h,l,m,u,k,p,n,r=4/na(2,B-K);c=0;for(b=a.length;c<b;c++)if(g=a[c],j=g.height/r,h=isNaN(g.minHeight)?0:g.minHeight/r,!(h>ma)&&(l=this.getPixelFootprint(g.footprint))){p=[];if(g.holes){d=0;for(e=g.holes.length;d<
e;d++)(n=this.getPixelFootprint(g.holes[d]))&&p.push(n)}e=d=null;if(g.wallColor&&(m=M(g.wallColor)))d=m.alpha(y),e=""+d.lightness(0.8),d=""+d;u=null;if(g.roofColor&&(m=M(g.roofColor)))u=""+m.alpha(y);k=g.roofHeight/r;j<=h&&0>=k||f.push({id:g.id,footprint:l,height:U(j,ma),minHeight:h,wallColor:d,altColor:e,roofColor:u,roofShape:g.roofShape,roofHeight:k,center:Sa(l),holes:p.length?p:null,shape:g.shape,radius:g.radius/Ca})}return f},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=
this.parse(a),!0)},load:function(a){this.url=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),za(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(B<K))if(this.isStatic)this.addRenderItems(this.staticData);
else if(this.url){var a,c,b,d,e=da(r,p);a=da(r+A,p+v);var f=0.0075*Ha(e.latitude/0.0075),g=0.015*Ha(a.longitude/0.015);a=0.0075*Ia(a.latitude/0.0075);for(e=0.015*Ia(e.longitude/0.015);a<=f;a+=0.0075)for(c=e;c<=g;c+=0.015)a=this.cropDecimals(a),c=this.cropDecimals(c),d=a+","+c,(b=va.get(d))?this.addRenderItems(b):za(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(c+0.015),s:a,w:c},this.createClosure(d));va.purge()}},each:function(){}},P={circle:function(a,c,b,d,e){a.fillStyle=e;a.beginPath();
a.arc(c,b,d,0,2*t);a.stroke();a.fill()},draw:function(a,c,b,d,e,f,g,j,h){var l=w/(w-e);e=O.project(c,b,l);var m=d*l;f&&(l=w/(w-f),b=O.project(c,b,l),c=b.x,b=b.y,d*=l);if(l=P.getTangents(c,b,d,e.x,e.y,m))f=H(l[0].y1-b,l[0].x1-c),l=H(l[1].y1-b,l[1].x1-c),a.fillStyle=g,a.beginPath(),a.arc(e.x,e.y,m,x,f,!0),a.arc(c,b,d,f,x),a.closePath(),a.fill(),a.fillStyle=j,a.beginPath(),a.arc(e.x,e.y,m,l,x,!0),a.arc(c,b,d,x,l),a.closePath(),a.fill();P.circle(a,e.x,e.y,m,h)},shadow:function(a,c,b,d,e,f){e=F.project(c,
b,e);var g;f&&(b=F.project(c,b,f),c=b.x,b=b.y);var j=P.getTangents(c,b,d,e.x,e.y,d);j?(f=H(j[0].y1-b,j[0].x1-c),g=H(j[1].y1-b,j[1].x1-c),a.moveTo(j[1].x2,j[1].y2),a.arc(e.x,e.y,d,g,f),a.arc(c,b,d,f,g)):(a.moveTo(c+d,b),a.arc(c,b,d,0,2*t))},footprintMask:function(a,c,b,d){a.moveTo(c+d,b);a.arc(c,b,d,0,2*t)},getTangents:function(a,c,b,d,e,f){var g=a-d,j=c-e,h=b-f,l=g*g+j*j;if(!(l<=h*h)){var l=ga(l),g=-g/l,j=-j/l,h=h/l,l=[],m,u,k;m=ga(J(0,1-h*h));for(var p=1;-1<=p;p-=2)u=g*h-p*m*j,k=j*h+p*m*g,l.push({x1:a+
b*u<<0,y1:c+b*k<<0,x2:d+f*u<<0,y2:e+f*k<<0});return l}}},ca={draw:function(a,c,b,d,e,f,g,j){var h=w/(w-e);e=O.project(c,b,h);var l,m;f&&(h=w/(w-f),b=O.project(c,b,h),c=b.x,b=b.y,d*=h);f=ca.getTangents(c,b,d,e.x,e.y);a.fillStyle=g;a.beginPath();a.moveTo(e.x,e.y);f?(l=H(f[0].y-b,f[0].x-c),a.lineTo(f[0].x,f[0].y),a.arc(c,b,d,l,x)):a.arc(c,b,d,x,t+x,!0);a.closePath();a.fill();a.fillStyle=j;a.beginPath();a.moveTo(e.x,e.y);f?(m=H(f[1].y-b,f[1].x-c),a.lineTo(f[1].x,f[1].y),a.arc(c,b,d,m,x,!0)):a.arc(c,b,
d,t+x,x,!0);a.closePath();a.fill();a.beginPath();f?(a.moveTo(e.x,e.y),a.lineTo(f[0].x,f[0].y),a.arc(c,b,d,l,m)):a.arc(c,b,d,0,2*t);a.closePath();a.stroke()},shadow:function(a,c,b,d,e,f){e=F.project(c,b,e);var g;f&&(b=F.project(c,b,f),c=b.x,b=b.y);var j=ca.getTangents(c,b,d,e.x,e.y);j?(f=H(j[0].y-b,j[0].x-c),g=H(j[1].y-b,j[1].x-c),a.moveTo(e.x,e.y),a.lineTo(j[0].x,j[0].y),a.arc(c,b,d,f,g)):(a.moveTo(c+d,b),a.arc(c,b,d,0,2*t))},getTangents:function(a,c,b,d,e){d=a-d;e=c-e;var f=d*d+e*e;if(!(f<=b*b)){f=
ga(f);d=-d/f;e=-e/f;var f=b/f,g=[],j,h,l;j=ga(J(0,1-f*f));for(var m=1;-1<=m;m-=2)h=d*f-m*j*e,l=e*f+m*j*d,g.push({x:a+b*h<<0,y:c+b*l<<0});return g}}},O={project:function(a,c,b){return{x:(a-X)*b+X<<0,y:(c-Z)*b+Z<<0}},drawSolid:function(a,c,b,d,e){for(var f={x:0,y:0},g={x:0,y:0},j,h,l=[],m=0,u=a.length-3;m<u;m+=2)f.x=a[m]-r,f.y=a[m+1]-p,g.x=a[m+2]-r,g.y=a[m+3]-p,j=this.project(f.x,f.y,c),h=this.project(g.x,g.y,c),b&&(f=this.project(f.x,f.y,b),g=this.project(g.x,g.y,b)),(g.x-f.x)*(j.y-f.y)>(j.x-f.x)*
(g.y-f.y)&&(this.context.fillStyle=f.x<g.x&&f.y<g.y||f.x>g.x&&f.y>g.y?e:d,this.drawFace([g.x,g.y,f.x,f.y,j.x,j.y,h.x,h.y])),l[m]=j.x,l[m+1]=j.y;return l},drawFace:function(a,c,b){var d=this.context,e,f,g,j;if(a.length){d.beginPath();d.moveTo(a[0],a[1]);e=2;for(f=a.length;e<f;e+=2)d.lineTo(a[e],a[e+1]);if(b){e=0;for(f=b.length;e<f;e++){a=b[e];d.moveTo(a[0],a[1]);g=2;for(j=a.length;g<j;g+=2)d.lineTo(a[g],a[g+1])}}d.closePath();c&&d.stroke();d.fill()}},render:function(){this.context.clearRect(0,0,A,
v);if(!(B<K||ba)){var a,c,b,d,e,f,g,j={x:X+r,y:Z+p},h=r,l=r+A,m=p,u=p+v,k,n,q,T,s,t=C.items;t.sort(function(a,b){return a.minHeight-b.minHeight||xa(b.center,j)-xa(a.center,j)||b.height-a.height});a=0;for(c=t.length;a<c;a++)if(e=t[a],!wa.isSimple(e)){f=!1;k=e.footprint;b=0;for(d=k.length-1;b<d;b+=2)f||(f=k[b]>h&&k[b]<l&&k[b+1]>m&&k[b+1]<u);if(f)if(b=1>e.scale?e.height*e.scale:e.height,f=w/(w-b),g=d=0,e.minHeight&&(d=1>e.scale?e.minHeight*e.scale:e.minHeight,g=w/(w-d)),q=e.wallColor||oa,T=e.altColor||
ea,s=e.roofColor||$,this.context.strokeStyle=T,"cone"===e.shape)ca.draw(this.context,e.center.x-r,e.center.y-p,e.radius,b,d,q,T);else if("cylinder"===e.shape)P.draw(this.context,e.center.x-r,e.center.y-p,e.radius,b,d,q,T,s),"cone"===e.roofShape&&ca.draw(this.context,e.center.x-r,e.center.y-p,e.radius,b+e.roofHeight,b,s,""+M(s).lightness(0.9));else{k=this.drawSolid(k,f,g,q,T);n=[];if(e.holes){b=0;for(d=e.holes.length;b<d;b++)n[b]=this.drawSolid(e.holes[b],f,g,q,T)}this.context.fillStyle=s;this.drawFace(k,
!0,n)}}}}},wa={maxZoom:K+2,maxHeight:2,isSimple:function(a){return B<=this.maxZoom&&a.height<this.maxHeight},getFace:function(a){for(var c=[],b=0,d=a.length-3;b<d;b+=2)c[b]=a[b]-r,c[b+1]=a[b+1]-p;return c},drawFace:function(a,c){if(a.length){var b,d,e,f;this.context.beginPath();this.context.moveTo(a[0],a[1]);b=2;for(d=a.length;b<d;b+=2)this.context.lineTo(a[b],a[b+1]);if(c){b=0;for(d=c.length;b<d;b++){a=c[b];this.context.moveTo(a[0],a[1]);e=2;for(f=a.length;e<f;e+=2)this.context.lineTo(a[e],a[e+1])}}this.context.closePath();
this.context.stroke();this.context.fill()}},render:function(){this.context.clearRect(0,0,A,v);if(!(B<K||ba||B>this.maxZoom)){var a,c,b,d,e,f=r,g=r+A,j=p,h=p+v,l,m,k,n=C.items;a=0;for(c=n.length;a<c;a++)if(e=n[a],!(e.height>=this.maxHeight)){k=!1;l=e.footprint;b=0;for(d=l.length-1;b<d;b+=2)k||(k=l[b]>f&&l[b]<g&&l[b+1]>j&&l[b+1]<h);if(k)if(b=e.altColor||ea,k=e.roofColor||$,this.context.strokeStyle=b,"cylinder"===e.shape||"cone"===e.shape)P.circle(this.context,e.center.x-r,e.center.y-p,e.radius,k);else{l=
this.getFace(l);m=[];if(e.holes){b=0;for(d=e.holes.length;b<d;b++)m[b]=this.getFace(e.holes[b])}this.context.fillStyle=k;this.drawFace(l,m)}}}}},F={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,c,b){return{x:a+this.direction.x*b,y:c+this.direction.y*b}},render:function(){var a,c,b;this.context.clearRect(0,0,A,v);if(this.enabled&&!(B<K||ba))if(a=da(r+Y,p+la),a=Ja(this.date,a.latitude,a.longitude),!(0>=a.altitude)){c=1/Ga(a.altitude);
b=5>c?0.75:5*(1/c);this.direction.x=Da(a.azimuth)*c;this.direction.y=Za(a.azimuth)*c;var d,e,f,g,j,h,l,m,k,n,q,s,t,w;a=[];c=[];var x=C.items;this.context.canvas.style.opacity=b/(2*y);this.context.shadowColor=this.blurColor;this.context.shadowBlur=this.blurSize*(y/2);this.context.fillStyle=this.color;this.context.beginPath();b=0;for(d=x.length;b<d;b++){h=x[b];k=!1;l=h.footprint;g=[];e=0;for(f=l.length-1;e<f;e+=2)g[e]=j=l[e]-r,g[e+1]=m=l[e+1]-p,k||(k=0<j&&j<A&&0<m&&m<v);if(k)if(j=1>h.scale?h.height*
h.scale:h.height,l=0,h.minHeight&&(l=1>h.scale?h.minHeight*h.scale:h.minHeight),"cylinder"===h.shape||"cone"===h.shape)a.push({shape:h.shape,center:{x:h.center.x-r,y:h.center.y-p},radius:h.radius,h:j,mh:l}),"cone"===h.roofShape&&a.push({shape:"cone",center:{x:h.center.x-r,y:h.center.y-p},radius:h.radius,h:j+h.roofHeight,mh:j});else{m=null;e=0;for(f=g.length-3;e<f;e+=2)k=g[e],n=g[e+1],q=g[e+2],s=g[e+3],t=this.project(k,n,j),w=this.project(q,s,j),l&&(n=this.project(k,n,l),s=this.project(q,s,l),k=n.x,
n=n.y,q=s.x,s=s.y),(q-k)*(t.y-n)>(t.x-k)*(s-n)?(1===m&&this.context.lineTo(k,n),m=0,e||this.context.moveTo(k,n),this.context.lineTo(q,s)):(0===m&&this.context.lineTo(t.x,t.y),m=1,e||this.context.moveTo(t.x,t.y),this.context.lineTo(w.x,w.y));l||c.push(g);if(h.holes){e=0;for(f=h.holes.length;e<f;e++){m=h.holes[e];k=[m[0]-r,m[1]-p];this.context.moveTo(k[0],k[1]);g=2;for(j=m.length;g<j;g+=2)k[g]=m[g]-r,k[g+1]=m[g+1]-p,this.context.lineTo(k[g],k[g+1]);l||c.push(k)}}}}b=0;for(d=a.length;b<d;b++)h=a[b],
"cylinder"===h.shape&&P.shadow(this.context,h.center.x,h.center.y,h.radius,h.h,h.mh),"cone"===h.shape&&ca.shadow(this.context,h.center.x,h.center.y,h.radius,h.h,h.mh);this.context.closePath();this.context.fill();this.context.shadowBlur=null;this.context.globalCompositeOperation="destination-out";this.context.beginPath();b=0;for(d=c.length;b<d;b++){m=c[b];this.context.moveTo(m[0],m[1]);e=2;for(f=m.length;e<f;e+=2)this.context.lineTo(m[e],m[e+1]);this.context.lineTo(m[0],m[1])}b=0;for(d=a.length;b<
d;b++)h=a[b],("cylinder"===h.shape||"cone"===h.shape)&&!h.mh&&P.footprintMask(this.context,h.center.x,h.center.y,h.radius);this.context.fillStyle="#00ff00";this.context.fill();this.context.globalCompositeOperation="source-over"}}},s={container:pa.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;F.context=this.createContext();wa.context=this.createContext();O.context=
this.createContext()},render:function(){F.render();wa.render();O.render()},createContext:function(){var a=pa.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);return c},appendTo:function(a){a.appendChild(this.container)},
remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,c){for(var b=0,d=this.items.length;b<d;b++)this.items[b].width=a,this.items[b].height=c},screenshot:function(){var a=pa.createElement("CANVAS"),c=a.getContext("2d"),b,d,e;a.width=A;a.height=v;clearInterval(S);S=null;e=C.items;b=0;for(d=e.length;b<d;b++)e[b].scale=1;this.render();b=0;for(d=this.items.length;b<d;b++)e=this.items[b],""!==e.style.opacity&&(c.globalAlpha=parseFloat(e.style.opacity)),c.drawImage(e,
0,0),c.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,c){this.container.style.left=a+"px";this.container.style.top=c+"px"}};s.init();var k=function(a){this.offset={x:0,y:0};a.addLayer(this)},q=k.prototype;q.onAdd=function(a){this.map=a;s.appendTo(a._panes.overlayPane);var c=this.getOffset(),b=a.getPixelOrigin();Aa({w:a._size.x,h:a._size.y});var d=b.y-c.y;r=b.x-c.x;p=d;Ba(a._zoom);s.setPosition(-c.x,-c.y);a.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,
zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);if(a.options.zoomAnimation)a.on("zoomanim",this.onZoom,this);a.attributionControl&&a.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');C.update()};q.onRemove=function(){var a=this.map;a.attributionControl&&a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,
zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);a.options.zoomAnimation&&a.off("zoomanim",this.onZoom,this);s.remove()};q.onMove=function(){var a=this.getOffset();ka({x:this.offset.x-a.x,y:this.offset.y-a.y});O.render()};q.onMoveEnd=function(){if(this.skipMoveEnd)this.skipMoveEnd=!1;else{var a=this.map,c=this.getOffset(),b=a.getPixelOrigin();this.offset=c;s.setPosition(-c.x,-c.y);ka({x:0,y:0});Aa({w:a._size.x,h:a._size.y});a=b.y-c.y;r=b.x-c.x;p=a;s.render();C.update()}};
q.onZoomStart=function(){ba=!0;s.render()};q.onZoom=function(){};q.onZoomEnd=function(){var a=this.map,c=this.getOffset(),b=a.getPixelOrigin(),d=b.y-c.y;r=b.x-c.x;p=d;a=a._zoom;ba=!1;Ba(a);C.update();s.render();this.skipMoveEnd=!0};q.onResize=function(){};q.onViewReset=function(){var a=this.getOffset();this.offset=a;s.setPosition(-a.x,-a.y);ka({x:0,y:0})};q.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};q.setStyle=function(a){a=a||{};var c;if(c=a.color||a.wallColor)G=M(c),oa=
""+G.alpha(y),fa=G.lightness(0.8),ea=""+fa.alpha(y),Q=G.lightness(1.2),$=""+Q.alpha(y);a.roofColor&&(Q=M(a.roofColor),$=""+Q.alpha(y));void 0!==a.shadows&&(F.enabled=!!a.shadows);s.render();return this};q.setDate=function(a){F.date=a;F.render();return this};q.loadData=function(a){C.load(a);return this};q.setData=function(a){C.set(a);return this};q.each=function(a,c){C.each=function(b){return a.call(c,b)};return this};q.screenshot=function(a){var c=s.screenshot();a&&(W.location.href=c.replace("image/png",
"image/octet-stream"));return c};k.VERSION="0.1.9a";k.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return k}();
