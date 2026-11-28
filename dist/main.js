var ko="185";var Iu=0,Oc=1,Lu=2;var ta=1,Du=2,Vs=3,ri=0,Ze=1,He=2,qn=0,Ji=1,Le=2,Bc=3,zc=4,Nu=5;var bi=100,Uu=101,Fu=102,Ou=103,Bu=104,zu=200,ku=201,Hu=202,Vu=203,$a=204,Ka=205,Gu=206,Wu=207,Xu=208,qu=209,Yu=210,Zu=211,Ju=212,$u=213,Ku=214,ja=0,Qa=1,to=2,$i=3,eo=4,no=5,io=6,so=7,Ho=0,ju=1,Qu=2,Cn=0,kc=1,Hc=2,Vc=3,Gc=4,Wc=5,Xc=6,qc=7;var Yc=300,Li=301,ns=302,Vo=303,Go=304,ea=306,Ei=1e3,Fn=1001,ro=1002,Ye=1003,td=1004;var na=1005;var $e=1006,Wo=1007;var Di=1008;var an=1009,Zc=1010,Jc=1011,Gs=1012,Xo=1013,Pn=1014,_n=1015,Yn=1016,qo=1017,Yo=1018,Ws=1020,$c=35902,Kc=35899,jc=1021,Qc=1022,vn=1023,zn=1026,Ni=1027,Zo=1028,Jo=1029,Ui=1030,$o=1031;var Ko=1033,ia=33776,sa=33777,ra=33778,aa=33779,jo=35840,Qo=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37488,al=37489,oa=37490,ol=37491,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,xl=37817,_l=37818,vl=37819,yl=37820,Ml=37821,Sl=36492,bl=36494,El=36495,Tl=36283,wl=36284,la=36285,Al=36286;var _r=2300,ao=2301,Ja=2302,bc=2303,Ec=2400,Tc=2401,wc=2402;var ed=3200;var ca=0,nd=1,ci="",Ve="srgb",vr="srgb-linear",yr="linear",me="srgb";var Yi=7680;var Ac=519,id=512,sd=513,rd=514,Rl=515,ad=516,od=517,Cl=518,ld=519,oo=35044;var th="300 es",An=2e3,Cs=2001;function Rf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){let i=Mr("canvas");return i.style.display="block",i}var Zh={},Ps=null;function Sr(...i){let t="THREE."+i.shift();Ps?Ps("log",t,...i):console.log(t,...i)}function hd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=hd(i);let t="THREE."+i.shift();if(Ps)Ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=hd(i);let t="THREE."+i.shift();if(Ps)Ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Zi(...i){let t=i.join(" ");t in Zh||(Zh[t]=!0,Kt(...i))}function ud(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dd={[ja]:Qa,[to]:io,[eo]:so,[$i]:no,[Qa]:ja,[io]:to,[so]:eo,[no]:$i},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=1234567,pr=Math.PI/180,Is=180/Math.PI;function Bn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function eh(i,t){return(i%t+t)%t}function Pf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function If(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function Lf(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function Df(i,t=1){return t-Math.abs(eh(i,t*2)-t)}function Nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ff(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Of(i,t){return i+Math.random()*(t-i)}function Bf(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(Jh=i);let t=Jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(i){return i*pr}function Hf(i){return i*Is}function Vf(i){return(i&i-1)===0&&i!==0}function Gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*f,o*u,o*c);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pl={DEG2RAD:pr,RAD2DEG:Is,generateUUID:Bn,clamp:ce,euclideanModulo:eh,mapLinear:Pf,inverseLerp:If,lerp:mr,damp:Lf,pingpong:Df,smoothstep:Nf,smootherstep:Uf,randInt:Ff,randFloat:Of,randFloatSpread:Bf,seededRandom:zf,degToRad:kf,radToDeg:Hf,isPowerOfTwo:Vf,ceilPowerOfTwo:Gf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:ve,denormalize:wn},oh=class oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var _t=oh,Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],x=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==x){let m=l*h+c*f+u*x+d*y;m<0&&(h=-h,f=-f,x=-x,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,o=Math.sin(o*M)/S,l=l*p+h*o,c=c*p+f*o,u=u*p+x*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+x*o,d=d*p+y*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*f-c*h,t[e+1]=l*x+u*h+c*d-o*f,t[e+2]=c*x+u*f+o*h-l*d,t[e+3]=u*x-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*x,this._y=c*f*d-h*u*x,this._z=c*u*x+h*f*d,this._w=c*u*d-h*f*x;break;case"YXZ":this._x=h*u*d+c*f*x,this._y=c*f*d-h*u*x,this._z=c*u*x-h*f*d,this._w=c*u*d+h*f*x;break;case"ZXY":this._x=h*u*d-c*f*x,this._y=c*f*d+h*u*x,this._z=c*u*x+h*f*d,this._w=c*u*d-h*f*x;break;case"ZYX":this._x=h*u*d-c*f*x,this._y=c*f*d+h*u*x,this._z=c*u*x-h*f*d,this._w=c*u*d+h*f*x;break;case"YZX":this._x=h*u*d+c*f*x,this._y=c*f*d+h*u*x,this._z=c*u*x-h*f*d,this._w=c*u*d-h*f*x;break;case"XZY":this._x=h*u*d-c*f*x,this._y=c*f*d-h*u*x,this._z=c*u*x+h*f*d,this._w=c*u*d+h*f*x;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;var U=lh,$l=new U,$h=new Hn,ch=class ch{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],x=n[8],y=s[0],m=s[3],p=s[6],M=s[1],S=s[4],v=s[7],w=s[2],A=s[5],I=s[8];return r[0]=a*y+o*M+l*w,r[3]=a*m+o*S+l*A,r[6]=a*p+o*v+l*I,r[1]=c*y+u*M+d*w,r[4]=c*m+u*S+d*A,r[7]=c*p+u*v+d*I,r[2]=h*y+f*M+x*w,r[5]=h*m+f*S+x*A,r[8]=h*p+f*v+x*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,x=e*d+n*h+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=d*y,t[1]=(s*c-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;var ne=ch,Kl=new ne,Kh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){let i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:Kh,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Kh,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}var he=qf();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,lo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{us===void 0&&(us=Mr("canvas")),us.width=t.width,us.height=t.height;let s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yf=0,Ls=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jl(s[a].image)):r.push(jl(s[a]))}else r=jl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Zf=0,Ql=new U,rn=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=$e,a=Di,o=vn,l=an,c=i.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Bn(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Yc;rn.DEFAULT_ANISOTROPY=1;var hh=class hh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],x=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(f+1)/2,w=(p+1)/2,A=(u+h)/4,I=(d+y)/4,g=(x+m)/4;return S>v&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=I/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=g/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=g/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(d-y)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hh.prototype.isVector4=!0;var Ie=hh,co=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends co{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},br=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ho=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zo=class zo{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,x,y,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,x,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=x,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,x=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,x=c*u,y=c*d;e[0]=h+y*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-x,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,x=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,x=o*u,y=o*d;e[0]=l*u,e[4]=x*c-f,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=x*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+x,e[10]=h-y*d}else if(t.order==="XZY"){let h=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jf,t,$f)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),xi.crossVectors(n,cn),xi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),xi.crossVectors(n,cn)),xi.normalize(),va.crossVectors(cn,xi),s[0]=xi.x,s[4]=va.x,s[8]=cn.x,s[1]=xi.y,s[5]=va.y,s[9]=cn.y,s[2]=xi.z,s[6]=va.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],x=n[2],y=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],w=n[15],A=s[0],I=s[4],g=s[8],E=s[12],C=s[1],R=s[5],D=s[9],B=s[13],k=s[2],P=s[6],F=s[10],W=s[14],j=s[3],Q=s[7],dt=s[11],nt=s[15];return r[0]=a*A+o*C+l*k+c*j,r[4]=a*I+o*R+l*P+c*Q,r[8]=a*g+o*D+l*F+c*dt,r[12]=a*E+o*B+l*W+c*nt,r[1]=u*A+d*C+h*k+f*j,r[5]=u*I+d*R+h*P+f*Q,r[9]=u*g+d*D+h*F+f*dt,r[13]=u*E+d*B+h*W+f*nt,r[2]=x*A+y*C+m*k+p*j,r[6]=x*I+y*R+m*P+p*Q,r[10]=x*g+y*D+m*F+p*dt,r[14]=x*E+y*B+m*W+p*nt,r[3]=M*A+S*C+v*k+w*j,r[7]=M*I+S*R+v*P+w*Q,r[11]=M*g+S*D+v*F+w*dt,r[15]=M*E+S*B+v*W+w*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],x=t[3],y=t[7],m=t[11],p=t[15],M=l*f-c*h,S=o*f-c*d,v=o*h-l*d,w=a*f-c*u,A=a*h-l*u,I=a*d-o*u;return e*(y*M-m*S+p*v)-n*(x*M-m*w+p*A)+s*(x*S-y*w+p*I)-r*(x*v-y*A+m*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],x=t[12],y=t[13],m=t[14],p=t[15],M=e*o-n*a,S=e*l-s*a,v=e*c-r*a,w=n*l-s*o,A=n*c-r*o,I=s*c-r*l,g=u*y-d*x,E=u*m-h*x,C=u*p-f*x,R=d*m-h*y,D=d*p-f*y,B=h*p-f*m,k=M*B-S*D+v*R+w*C-A*E+I*g;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/k;return t[0]=(o*B-l*D+c*R)*P,t[1]=(s*D-n*B-r*R)*P,t[2]=(y*I-m*A+p*w)*P,t[3]=(h*A-d*I-f*w)*P,t[4]=(l*C-a*B-c*E)*P,t[5]=(e*B-s*C+r*E)*P,t[6]=(m*v-x*I-p*S)*P,t[7]=(u*I-h*v+f*S)*P,t[8]=(a*D-o*C+c*g)*P,t[9]=(n*C-e*D-r*g)*P,t[10]=(x*A-y*v+p*M)*P,t[11]=(d*v-u*A-f*M)*P,t[12]=(o*E-a*R-l*g)*P,t[13]=(e*R-n*E+s*g)*P,t[14]=(y*S-x*w-m*M)*P,t[15]=(u*w-d*S+h*M)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,x=r*d,y=a*u,m=a*d,p=o*d,M=l*c,S=l*u,v=l*d,w=n.x,A=n.y,I=n.z;return s[0]=(1-(y+p))*w,s[1]=(f+v)*w,s[2]=(x-S)*w,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(h+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(x+S)*I,s[9]=(m-M)*I,s[10]=(1-(h+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),bn.copy(this);let c=1/a,u=1/o,d=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,e.setFromRotationMatrix(bn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===An)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Cs)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===An)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Cs)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zo.prototype.isMatrix4=!0;var ge=zo,ds=new U,bn=new ge,Jf=new U(0,0,0),$f=new U(1,1,1),xi=new U,va=new U,cn=new U,Qh=new ge,tu=new Hn,Vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kf=0,eu=new U,fs=new Hn,jn=new ge,ya=new U,ir=new U,jf=new U,Qf=new Hn,nu=new U(1,0,0),iu=new U(0,1,0),su=new U(0,0,1),ru={type:"added"},tp={type:"removed"},ps={type:"childadded",child:null},tc={type:"childremoved",child:null},Ue=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Vn,n=new Hn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ne}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ya.copy(t):ya.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ir,ya,this.up):jn.lookAt(ya,ir,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(jn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),ps.child=t,this.dispatchEvent(ps),ps.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new U(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},ep={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&h>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=eh(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return he.workingToColorSpace(tn.copy(this),t),Math.round(ce(tn.r*255,0,255))*65536+Math.round(ce(tn.g*255,0,255))*256+Math.round(ce(tn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ve){he.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Ma);let n=mr(_i.h,Ma.h,e),s=mr(_i.s,Ma.s,e),r=mr(_i.l,Ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new kt;kt.NAMES=fd;var Tr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ki=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},En=new U,Qn=new U,nc=new U,ti=new U,ms=new U,gs=new U,au=new U,ic=new U,sc=new U,rc=new U,ac=new Ie,oc=new Ie,lc=new Ie,ii=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),Qn.subVectors(n,e),nc.subVectors(t,e);let a=En.dot(En),o=En.dot(Qn),l=En.dot(nc),c=Qn.dot(Qn),u=Qn.dot(nc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ac,r.x),a.addScaledVector(oc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),Qn.subVectors(t,e),En.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ms.subVectors(s,n),gs.subVectors(r,n),ic.subVectors(t,n);let l=ms.dot(ic),c=gs.dot(ic);if(l<=0&&c<=0)return e.copy(n);sc.subVectors(t,s);let u=ms.dot(sc),d=gs.dot(sc);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ms,a);rc.subVectors(t,r);let f=ms.dot(rc),x=gs.dot(rc);if(x>=0&&f<=x)return e.copy(r);let y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(gs,o);let m=u*x-f*d;if(m<=0&&d-u>=0&&f-x>=0)return au.subVectors(r,s),o=(d-u)/(d-u+(f-x)),e.copy(s).addScaledVector(au,o);let p=1/(m+y+h);return a=y*p,o=h*p,e.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(t.matrixWorld),this.union(Sa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),ba.subVectors(this.max,sr),xs.subVectors(t.a,sr),_s.subVectors(t.b,sr),vs.subVectors(t.c,sr),vi.subVectors(_s,xs),yi.subVectors(vs,_s),Gi.subVectors(xs,vs);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Gi.z,Gi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Gi.z,0,-Gi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Gi.y,Gi.x,0];return!cc(e,xs,_s,vs,ba)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,xs,_s,vs,ba))?!1:(Ea.crossVectors(vi,yi),e=[Ea.x,Ea.y,Ea.z],cc(e,xs,_s,vs,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new U,new U,new U,new U,new U,new U,new U,new U],Tn=new U,Sa=new Gn,xs=new U,_s=new U,vs=new U,vi=new U,yi=new U,Gi=new U,sr=new U,ba=new U,Ea=new U,Wi=new U;function cc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ke=new U,Ta=new _t,np=0,ye=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oo&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},ip=new Gn,rr=new U,hc=new U,Wn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(hc)),this.expandByPoint(rr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sp=0,gn=new ge,uc=new Ue,ys=new U,hn=new Gn,ar=new Gn,qe=new U,xe=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rf(t)?Ar:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(hn.min,ar.min),hn.expandByPoint(qe),qe.addVectors(hn.max,ar.max),hn.expandByPoint(qe)):(hn.expandByPoint(ar.min),hn.expandByPoint(ar.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qe.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),qe.add(ys)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new U,l[g]=new U;let c=new U,u=new U,d=new U,h=new _t,f=new _t,x=new _t,y=new U,m=new U;function p(g,E,C){c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),h.fromBufferAttribute(r,g),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,C),u.sub(c),d.sub(c),f.sub(h),x.sub(h);let R=1/(f.x*x.y-x.x*f.y);isFinite(R)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(R),o[g].add(y),o[E].add(y),o[C].add(y),l[g].add(m),l[E].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let g=0,E=M.length;g<E;++g){let C=M[g],R=C.start,D=C.count;for(let B=R,k=R+D;B<k;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new U,v=new U,w=new U,A=new U;function I(g){w.fromBufferAttribute(s,g),A.copy(w);let E=o[g];S.copy(E),S.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(A,E);let R=v.dot(l[g])<0?-1:1;a.setXYZW(g,S.x,S.y,S.z,R)}for(let g=0,E=M.length;g<E;++g){let C=M[g],R=C.start,D=C.count;for(let B=R,k=R+D;B<k;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(t)for(let h=0,f=t.count;h<f;h+=3){let x=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)h[x++]=c[f++]}return new ye(h,u,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},uo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oo,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new U,Rr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rp=0,xn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ji,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ka,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ai=class extends xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ms,or=new U,Ss=new U,bs=new U,Es=new _t,lr=new _t,pd=new ge,wa=new U,cr=new U,Aa=new U,ou=new _t,dc=new _t,lu=new _t,Ti=class extends Ue{constructor(t=new ai){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uo(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Rr(n,3,0,!1)),Ms.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new _t(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),pd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ra(wa.set(-.5,-.5,0),bs,a,Ss,s,r),Ra(cr.set(.5,-.5,0),bs,a,Ss,s,r),Ra(Aa.set(.5,.5,0),bs,a,Ss,s,r),ou.set(0,0),dc.set(1,0),lu.set(1,1);let o=t.ray.intersectTriangle(wa,cr,Aa,!1,or);if(o===null&&(Ra(cr.set(-.5,.5,0),bs,a,Ss,s,r),dc.set(0,1),o=t.ray.intersectTriangle(wa,Aa,cr,!1,or),o===null))return;let l=t.ray.origin.distanceTo(or);l<t.near||l>t.far||e.push({distance:l,point:or.clone(),uv:ii.getInterpolation(or,wa,cr,Aa,ou,dc,lu,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ra(i,t,e,n,s,r){Es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*Es.x-s*Es.y,lr.y=s*Es.x+r*Es.y):lr.copy(Es),i.copy(t),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(pd)}var ni=new U,fc=new U,Ca=new U,Mi=new U,pc=new U,Pa=new U,mc=new U,Ns=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fc.copy(t).add(e).multiplyScalar(.5),Ca.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ca),o=Mi.dot(this.direction),l=-Mi.dot(Ca),c=Mi.lengthSq(),u=Math.abs(1-a*a),d,h,f,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fc).addScaledVector(Ca,h),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){pc.subVectors(e,t),Pa.subVectors(n,t),mc.crossVectors(pc,Pa);let a=this.direction.dot(mc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,t);let l=o*this.direction.dot(Pa.crossVectors(Mi,Pa));if(l<0)return null;let c=o*this.direction.dot(pc.cross(Mi));if(c<0||l+c>a)return null;let u=-o*Mi.dot(mc);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cu=new ge,Xi=new Ns,Ia=new Wn,hu=new U,La=new U,Da=new U,Na=new U,gc=new U,Ua=new U,uu=new U,Fa=new U,Gt=class extends Ue{constructor(t=new xe,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(gc.fromBufferAttribute(d,t),a?Ua.addScaledVector(gc,u):Ua.addScaledVector(gc.sub(e),u))}e.add(Ua)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Ia.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Ia,hu)===null||Xi.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){let m=h[x],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=S;v<w;v+=3){let A=o.getX(v),I=o.getX(v+1),g=o.getX(v+2);s=Oa(this,p,t,n,c,u,d,A,I,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let M=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=Oa(this,a,t,n,c,u,d,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){let m=h[x],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=S;v<w;v+=3){let A=v,I=v+1,g=v+2;s=Oa(this,p,t,n,c,u,d,A,I,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let M=m,S=m+1,v=m+2;s=Oa(this,a,t,n,c,u,d,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ap(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ri,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fa);return c<e.near||c>e.far?null:{distance:c,point:Fa.clone(),object:i}}function Oa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Da),i.getVertexPosition(c,Na);let u=ap(i,t,e,n,La,Da,Na,uu);if(u){let d=new U;ii.getBarycoord(uu,La,Da,Na,d),s&&(u.uv=ii.getInterpolatedAttribute(s,o,l,c,d,new _t)),r&&(u.uv1=ii.getInterpolatedAttribute(r,o,l,c,d,new _t)),a&&(u.normal=ii.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new U,materialIndex:0};ii.getNormal(La,Da,Na,h.normal),u.face=h,u.barycoord=d}return u}var Cr=class extends rn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ye,u=Ye,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pr=class extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new ge,du=new ge,Ba=[],fu=new Gn,op=new ge,hr=new Gt,ur=new Wn,Ir=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),fu.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),ur.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),du.multiplyMatrices(n,Ts),hr.matrixWorld=du,hr.raycast(t,Ba);for(let a=0,o=Ba.length;a<o;a++){let l=Ba[a];l.instanceId=r,l.object=this,e.push(l)}Ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cr(new Float32Array(s*this.count),s,this.count,Zo,_n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xc=new U,lp=new U,cp=new ne,Un=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xc.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cp.getNormalMatrix(t),s=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new Wn,hp=new _t(.5,.5),za=new U,Us=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],x=r[8],y=r[9],m=r[10],p=r[11],M=r[12],S=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,p-x,w-M).normalize(),s[1].setComponents(c+a,f+u,p+x,w+M).normalize(),s[2].setComponents(c+o,f+d,p+y,w+S).normalize(),s[3].setComponents(c-o,f-d,p-y,w-S).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,f-h,p-m,w-v).normalize();else if(s[4].setComponents(c-l,f-h,p-m,w-v).normalize(),e===An)s[5].setComponents(c+l,f+h,p+m,w+v).normalize();else if(e===Cs)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=hp.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fs=class extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fo=new U,po=new U,pu=new ge,dr=new Ns,ka=new Wn,_c=new U,mu=new U,mo=class extends Ue{constructor(t=new xe,e=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fo.fromBufferAttribute(e,s-1),po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fo.distanceTo(po);t.setAttribute("lineDistance",new se(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,t.ray.intersectsSphere(ka)===!1)return;pu.copy(s).invert(),dr.copy(t.ray).applyMatrix4(pu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let y=f,m=x-1;y<m;y+=c){let p=u.getX(y),M=u.getX(y+1),S=Ha(this,t,dr,l,p,M,y);S&&e.push(S)}if(this.isLineLoop){let y=u.getX(x-1),m=u.getX(f),p=Ha(this,t,dr,l,y,m,x-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=f,m=x-1;y<m;y+=c){let p=Ha(this,t,dr,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=Ha(this,t,dr,l,x-1,f,x-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ha(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(fo.fromBufferAttribute(o,s),po.fromBufferAttribute(o,r),e.distanceSqToSegment(fo,po,_c,mu)>n)return;_c.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_c);if(!(c<t.near||c>t.far))return{distance:c,point:mu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var gu=new U,xu=new U,Lr=class extends mo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gu.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(xu);t.setAttribute("lineDistance",new se(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var oi=class extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new ge,Rc=new Ns,Va=new Wn,Ga=new U,wi=class extends Ue{constructor(t=new xe,e=new oi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,t.ray.intersectsSphere(Va)===!1)return;_u.copy(s).invert(),Rc.copy(t.ray).applyMatrix4(_u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=h,y=f;x<y;x++){let m=c.getX(x);Ga.fromBufferAttribute(d,m),vu(Ga,m,l,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=h,y=f;x<y;x++)Ga.fromBufferAttribute(d,x),vu(Ga,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vu(i,t,e,n,s,r,a){let o=Rc.distanceSqToPoint(i);if(o<e){let l=new U;Rc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Dr=class extends rn{constructor(t=[],e=Li,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xn=class extends rn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends rn{constructor(t,e,n=Pn,s,r,a,o=Ye,l=Ye,c,u=zn,d=1){if(u!==zn&&u!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},go=class extends li{constructor(t,e=Pn,n=Li,s,r,a=Ye,o=Ye,l,c=zn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Nr=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ai=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function x(y,m,p,M,S,v,w,A,I,g,E){let C=v/I,R=w/g,D=v/2,B=w/2,k=A/2,P=I+1,F=g+1,W=0,j=0,Q=new U;for(let dt=0;dt<F;dt++){let nt=dt*R-B;for(let yt=0;yt<P;yt++){let ot=yt*C-D;Q[y]=ot*M,Q[m]=nt*S,Q[p]=k,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(yt/I),d.push(1-dt/g),W+=1}}for(let dt=0;dt<g;dt++)for(let nt=0;nt<I;nt++){let yt=h+nt+P*dt,ot=h+nt+P*(dt+1),Ut=h+(nt+1)+P*(dt+1),Ht=h+(nt+1)+P*dt;l.push(yt,ot,Ht),l.push(ot,Ut,Ht),j+=6}o.addGroup(f,j,E),f+=j,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Os=class i extends xe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,x=n*2+r,y=s+1,m=new U,p=new U;for(let M=0;M<=x;M++){let S=0,v=0,w=0,A=0;if(M<=n){let E=M/n,C=E*Math.PI/2;v=-u-t*Math.cos(C),w=t*Math.sin(C),A=-t*Math.cos(C),S=E*d}else if(M<=n+r){let E=(M-n)/r;v=-u+E*e,w=t,A=0,S=d+E*h}else{let E=(M-n-r)/n,C=E*Math.PI/2;v=u+t*Math.sin(C),w=t*Math.cos(C),A=t*Math.sin(C),S=d+h+E*d}let I=Math.max(0,Math.min(1,S/f)),g=0;M===0?g=.5/s:M===x&&(g=-.5/s);for(let E=0;E<=s;E++){let C=E/s,R=C*Math.PI*2,D=Math.sin(R),B=Math.cos(R);p.x=-w*B,p.y=v,p.z=w*D,o.push(p.x,p.y,p.z),m.set(-w*B,A,w*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+g,I)}if(M>0){let E=(M-1)*y;for(let C=0;C<s;C++){let R=E+C,D=E+C+1,B=M*y+C,k=M*y+C+1;a.push(R,D,B),a.push(D,k,B)}}}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ur=class i extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,u=new _t;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],x=0,y=[],m=n/2,p=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function M(){let v=new U,w=new U,A=0,I=(e-t)/n;for(let g=0;g<=r;g++){let E=[],C=g/r,R=C*(e-t)+t;for(let D=0;D<=s;D++){let B=D/s,k=B*l+o,P=Math.sin(k),F=Math.cos(k);w.x=R*P,w.y=-C*n+m,w.z=R*F,d.push(w.x,w.y,w.z),v.set(P,I,F).normalize(),h.push(v.x,v.y,v.z),f.push(B,1-C),E.push(x++)}y.push(E)}for(let g=0;g<s;g++)for(let E=0;E<r;E++){let C=y[E][g],R=y[E+1][g],D=y[E+1][g+1],B=y[E][g+1];(t>0||E!==0)&&(u.push(C,R,B),A+=3),(e>0||E!==r-1)&&(u.push(R,D,B),A+=3)}c.addGroup(p,A,0),p+=A}function S(v){let w=x,A=new _t,I=new U,g=0,E=v===!0?t:e,C=v===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),x++;let R=x;for(let D=0;D<=s;D++){let k=D/s*l+o,P=Math.cos(k),F=Math.sin(k);I.x=E*F,I.y=m*C,I.z=E*P,d.push(I.x,I.y,I.z),h.push(0,C,0),A.x=P*.5+.5,A.y=F*.5*C+.5,f.push(A.x,A.y),x++}for(let D=0;D<s;D++){let B=w+D,k=R+D;v===!0?u.push(k,k+1,B):u.push(k+1,k,B),g+=3}c.addGroup(p,g,v===!0?1:2),p+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class i extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Or=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let S=new U,v=new U,w=new U;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],v),f(e[A+2],w),l(S,v,w,M)}function l(M,S,v,w){let A=w+1,I=[];for(let g=0;g<=A;g++){I[g]=[];let E=M.clone().lerp(v,g/A),C=S.clone().lerp(v,g/A),R=A-g;for(let D=0;D<=R;D++)D===0&&g===A?I[g][D]=E:I[g][D]=E.clone().lerp(C,D/R)}for(let g=0;g<A;g++)for(let E=0;E<2*(A-g)-1;E++){let C=Math.floor(E/2);E%2===0?(h(I[g][C+1]),h(I[g+1][C]),h(I[g][C])):(h(I[g][C+1]),h(I[g+1][C+1]),h(I[g+1][C]))}}function c(M){let S=new U;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){let M=new U;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let v=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(v,1-w)}x(),d()}function d(){for(let M=0;M<a.length;M+=6){let S=a[M+0],v=a[M+2],w=a[M+4],A=Math.max(S,v,w),I=Math.min(S,v,w);A>.9&&I<.1&&(S<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,S){let v=M*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function x(){let M=new U,S=new U,v=new U,w=new U,A=new _t,I=new _t,g=new _t;for(let E=0,C=0;E<r.length;E+=9,C+=6){M.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),A.set(a[C+0],a[C+1]),I.set(a[C+2],a[C+3]),g.set(a[C+4],a[C+5]),w.copy(M).add(S).add(v).divideScalar(3);let R=m(w);y(A,C+0,M,R),y(I,C+2,S,R),y(g,C+4,v,R)}}function y(M,S,v,w){w<0&&M.x===1&&(a[S]=M.x-1),v.x===0&&v.z===0&&(a[S]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new ge;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bs=class extends dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xo=class extends Bs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var yu=new U,Mu=new U,vc=new nh,yc=new nh,Mc=new nh,_o=class extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Mu.subVectors(s[0],s[1]).add(s[0]),c=Mu);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),x<1e-4&&(x=y),m<1e-4&&(m=y),vc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,x,y,m),yc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,x,y,m),Mc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,x,y,m)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),yc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Mc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(vc.calc(l),yc.calc(l),Mc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function up(i,t){let e=1-i;return e*e*t}function dp(i,t){return 2*(1-i)*i*t}function fp(i,t){return i*i*t}function gr(i,t,e,n){return up(i,t)+dp(i,e)+fp(i,n)}function pp(i,t){let e=1-i;return e*e*e*t}function mp(i,t){let e=1-i;return 3*e*e*i*t}function gp(i,t){return 3*(1-i)*i*i*t}function xp(i,t){return i*i*i*t}function xr(i,t,e,n,s){return pp(i,t)+mp(i,e)+gp(i,n)+xp(i,s)}var Br=class extends dn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends dn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y),xr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zr=class extends dn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends dn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends dn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends dn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y),gr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Su(o,l.x,c.x,u.x,d.x),Su(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:xo,CatmullRomCurve3:_o,CubicBezierCurve:Br,CubicBezierCurve3:vo,EllipseCurve:Bs,LineCurve:zr,LineCurve3:yo,QuadraticBezierCurve:kr,QuadraticBezierCurve3:Mo,SplineCurve:Hr}),So=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Cc[s.type]().fromJSON(s))}return this}},ji=class extends So{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new zr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new kr(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Br(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Hr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Bs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ri=class extends ji{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ji().fromJSON(s))}return this}};function _p(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=md(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=bp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=i[h],x=i[h+1];f<o&&(o=f),x<l&&(l=x),f>u&&(u=f),x>d&&(d=x)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Vr(r,a,e,o,l,c,0),a}function md(i,t,e,n,s){let r;if(s===Np(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=bu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=bu(a/n|0,i[a],i[a+1],r);return r&&zs(r,r.next)&&(Wr(r),r=r.next),r}function Qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||De(e.prev,e,e.next)===0)){if(Wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Rp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?yp(i,n,s,r):vp(i)){t.push(l.i,i.i,c.i),Wr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Mp(Qi(i),t),Vr(i,t,e,n,s,r,2)):a===2&&Sp(i,t,e,n,s,r):Vr(Qi(i),t,e,n,s,r,1);break}}}function vp(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=h&&x.y>=d&&x.y<=f&&fr(s,o,r,l,a,c,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function yp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(De(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),x=Math.min(u,d,h),y=Math.max(o,l,c),m=Math.max(u,d,h),p=Pc(f,x,t,e,n),M=Pc(y,m,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=M;){if(S.x>=f&&S.x<=y&&S.y>=x&&S.y<=m&&S!==s&&S!==a&&fr(o,u,l,d,c,h,S.x,S.y)&&De(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=y&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&fr(o,u,l,d,c,h,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=y&&S.y>=x&&S.y<=m&&S!==s&&S!==a&&fr(o,u,l,d,c,h,S.x,S.y)&&De(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=y&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&fr(o,u,l,d,c,h,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!zs(n,s)&&xd(n,e,e.next,s)&&Gr(n,s)&&Gr(s,n)&&(t.push(n.i,e.i,s.i),Wr(e),Wr(e.next),e=i=s),e=e.next}while(e!==i);return Qi(e)}function Sp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ip(a,o)){let l=_d(a,o);a=Qi(a,a.next),l=Qi(l,l.next),Vr(a,t,e,n,s,r,0),Vr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function bp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=md(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(Ep);for(let r=0;r<s.length;r++)e=Tp(s[r],e);return e}function Ep(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Tp(i,t){let e=wp(i,t);if(!e)return t;let n=_d(e,i);return Qi(n,n.next),Qi(e,e.next)}function wp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(zs(i,e))return e;do{if(zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Gr(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Ap(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Ap(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Rp(i,t,e,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cp(s)}function Cp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function fr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&gd(i,t,e,n,s,r,a,o)}function Ip(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lp(i,t)&&(Gr(i,t)&&Gr(t,i)&&Dp(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||zs(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zs(i,t){return i.x===t.x&&i.y===t.y}function xd(i,t,e,n){let s=Xa(De(i,t,e)),r=Xa(De(i,t,n)),a=Xa(De(e,n,i)),o=Xa(De(e,n,t));return!!(s!==r&&a!==o||s===0&&Wa(i,e,t)||r===0&&Wa(i,n,t)||a===0&&Wa(e,i,n)||o===0&&Wa(e,t,n))}function Wa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xa(i){return i>0?1:i<0?-1:0}function Lp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Dp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _d(i,t){let e=Ic(i.i,i.x,i.y),n=Ic(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bu(i,t,e,n){let s=Ic(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ic(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Np(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Lc=class{static triangulate(t,e,n=2){return _p(t,e,n)}},On=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eu(t),Tu(n,t);let a=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Tu(n,e[l]);let o=Lc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xr=class i extends xe{constructor(t=new Ri([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Up,S,v=!1,w,A,I,g;if(p){S=p.getSpacedPoints(u),v=!0,h=!1;let ft=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,ft),A=new U,I=new U,g=new U}h||(m=0,f=0,x=0,y=0);let E=o.extractPoints(c),C=E.shape,R=E.holes;if(!On.isClockWise(C)){C=C.reverse();for(let ft=0,gt=R.length;ft<gt;ft++){let pt=R[ft];On.isClockWise(pt)&&(R[ft]=pt.reverse())}}function B(ft){let pt=10000000000000001e-36,V=ft[0];for(let rt=1;rt<=ft.length;rt++){let vt=rt%ft.length,xt=ft[vt],K=xt.x-V.x,Et=xt.y-V.y,L=K*K+Et*Et,Dt=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(V.x),Math.abs(V.y)),lt=pt*Dt*Dt;if(L<=lt){ft.splice(vt,1),rt--;continue}V=xt}}B(C),R.forEach(B);let k=R.length,P=C;for(let ft=0;ft<k;ft++){let gt=R[ft];C=C.concat(gt)}function F(ft,gt,pt){return gt||Qt("ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(gt,pt)}let W=C.length;function j(ft,gt,pt){let V,rt,vt,xt=ft.x-gt.x,K=ft.y-gt.y,Et=pt.x-ft.x,L=pt.y-ft.y,Dt=xt*xt+K*K,lt=xt*L-K*Et;if(Math.abs(lt)>Number.EPSILON){let T=Math.sqrt(Dt),_=Math.sqrt(Et*Et+L*L),N=gt.x-K/T,O=gt.y+xt/T,q=pt.x-L/_,at=pt.y+Et/_,ut=((q-N)*L-(at-O)*Et)/(xt*L-K*Et);V=N+xt*ut-ft.x,rt=O+K*ut-ft.y;let Y=V*V+rt*rt;if(Y<=2)return new _t(V,rt);vt=Math.sqrt(Y/2)}else{let T=!1;xt>Number.EPSILON?Et>Number.EPSILON&&(T=!0):xt<-Number.EPSILON?Et<-Number.EPSILON&&(T=!0):Math.sign(K)===Math.sign(L)&&(T=!0),T?(V=-K,rt=xt,vt=Math.sqrt(Dt)):(V=xt,rt=K,vt=Math.sqrt(Dt/2))}return new _t(V/vt,rt/vt)}let Q=[];for(let ft=0,gt=P.length,pt=gt-1,V=ft+1;ft<gt;ft++,pt++,V++)pt===gt&&(pt=0),V===gt&&(V=0),Q[ft]=j(P[ft],P[pt],P[V]);let dt=[],nt,yt=Q.concat();for(let ft=0,gt=k;ft<gt;ft++){let pt=R[ft];nt=[];for(let V=0,rt=pt.length,vt=rt-1,xt=V+1;V<rt;V++,vt++,xt++)vt===rt&&(vt=0),xt===rt&&(xt=0),nt[V]=j(pt[V],pt[vt],pt[xt]);dt.push(nt),yt=yt.concat(nt)}let ot;if(m===0)ot=On.triangulateShape(P,R);else{let ft=[],gt=[];for(let pt=0;pt<m;pt++){let V=pt/m,rt=f*Math.cos(V*Math.PI/2),vt=x*Math.sin(V*Math.PI/2)+y;for(let xt=0,K=P.length;xt<K;xt++){let Et=F(P[xt],Q[xt],vt);Ct(Et.x,Et.y,-rt),V===0&&ft.push(Et)}for(let xt=0,K=k;xt<K;xt++){let Et=R[xt];nt=dt[xt];let L=[];for(let Dt=0,lt=Et.length;Dt<lt;Dt++){let T=F(Et[Dt],nt[Dt],vt);Ct(T.x,T.y,-rt),V===0&&L.push(T)}V===0&&gt.push(L)}}ot=On.triangulateShape(ft,gt)}let Ut=ot.length,Ht=x+y;for(let ft=0;ft<W;ft++){let gt=h?F(C[ft],yt[ft],Ht):C[ft];v?(I.copy(w.normals[0]).multiplyScalar(gt.x),A.copy(w.binormals[0]).multiplyScalar(gt.y),g.copy(S[0]).add(I).add(A),Ct(g.x,g.y,g.z)):Ct(gt.x,gt.y,0)}for(let ft=1;ft<=u;ft++)for(let gt=0;gt<W;gt++){let pt=h?F(C[gt],yt[gt],Ht):C[gt];v?(I.copy(w.normals[ft]).multiplyScalar(pt.x),A.copy(w.binormals[ft]).multiplyScalar(pt.y),g.copy(S[ft]).add(I).add(A),Ct(g.x,g.y,g.z)):Ct(pt.x,pt.y,d/u*ft)}for(let ft=m-1;ft>=0;ft--){let gt=ft/m,pt=f*Math.cos(gt*Math.PI/2),V=x*Math.sin(gt*Math.PI/2)+y;for(let rt=0,vt=P.length;rt<vt;rt++){let xt=F(P[rt],Q[rt],V);Ct(xt.x,xt.y,d+pt)}for(let rt=0,vt=R.length;rt<vt;rt++){let xt=R[rt];nt=dt[rt];for(let K=0,Et=xt.length;K<Et;K++){let L=F(xt[K],nt[K],V);v?Ct(L.x,L.y+S[u-1].y,S[u-1].x+pt):Ct(L.x,L.y,d+pt)}}}tt(),Mt();function tt(){let ft=s.length/3;if(h){let gt=0,pt=W*gt;for(let V=0;V<Ut;V++){let rt=ot[V];Xt(rt[2]+pt,rt[1]+pt,rt[0]+pt)}gt=u+m*2,pt=W*gt;for(let V=0;V<Ut;V++){let rt=ot[V];Xt(rt[0]+pt,rt[1]+pt,rt[2]+pt)}}else{for(let gt=0;gt<Ut;gt++){let pt=ot[gt];Xt(pt[2],pt[1],pt[0])}for(let gt=0;gt<Ut;gt++){let pt=ot[gt];Xt(pt[0]+W*u,pt[1]+W*u,pt[2]+W*u)}}n.addGroup(ft,s.length/3-ft,0)}function Mt(){let ft=s.length/3,gt=0;ct(P,gt),gt+=P.length;for(let pt=0,V=R.length;pt<V;pt++){let rt=R[pt];ct(rt,gt),gt+=rt.length}n.addGroup(ft,s.length/3-ft,1)}function ct(ft,gt){let pt=ft.length;for(;--pt>=0;){let V=pt,rt=pt-1;rt<0&&(rt=ft.length-1);for(let vt=0,xt=u+m*2;vt<xt;vt++){let K=W*vt,Et=W*(vt+1),L=gt+V+K,Dt=gt+rt+K,lt=gt+rt+Et,T=gt+V+Et;Bt(L,Dt,lt,T)}}}function Ct(ft,gt,pt){l.push(ft),l.push(gt),l.push(pt)}function Xt(ft,gt,pt){ee(ft),ee(gt),ee(pt);let V=s.length/3,rt=M.generateTopUV(n,s,V-3,V-2,V-1);qt(rt[0]),qt(rt[1]),qt(rt[2])}function Bt(ft,gt,pt,V){ee(ft),ee(gt),ee(V),ee(gt),ee(pt),ee(V);let rt=s.length/3,vt=M.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);qt(vt[0]),qt(vt[1]),qt(vt[3]),qt(vt[1]),qt(vt[2]),qt(vt[3])}function ee(ft){s.push(l[ft*3+0]),s.push(l[ft*3+1]),s.push(l[ft*3+2])}function qt(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Fp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Cc[s.type]().fromJSON(s)),new i(n,t.options)}},Up={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new _t(r,a),new _t(o,l),new _t(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],x=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new _t(a,1-l),new _t(c,1-d),new _t(h,1-x),new _t(y,1-p)]:[new _t(o,1-l),new _t(u,1-d),new _t(f,1-x),new _t(m,1-p)]}};function Fp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qr=class i extends Or{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ts=class i extends xe{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new U,h=new _t,f=new U,x=new U,y=new U,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(x)}for(let M=0;M<=e;M++){let S=n+M*u*s,v=Math.sin(S),w=Math.cos(S);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*v,d.y=t[A].y,d.z=t[A].x*w,a.push(d.x,d.y,d.z),h.x=M/e,h.y=A/(t.length-1),o.push(h.x,h.y);let I=l[3*A+0]*v,g=l[3*A+1],E=l[3*A+0]*w;c.push(I,g,E)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){let v=S+M*t.length,w=v,A=v+t.length,I=v+t.length+1,g=v+1;r.push(w,A,g),r.push(I,g,A)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Yr=class i extends Or{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},fn=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],x=[],y=[],m=[];for(let p=0;p<u;p++){let M=p*h-a;for(let S=0;S<c;S++){let v=S*d-r;x.push(v,-M,0),y.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let S=M+c*p,v=M+c*(p+1),w=M+1+c*(p+1),A=M+1+c*p;f.push(S,v,A),f.push(v,w,A)}this.setIndex(f),this.setAttribute("position",new se(x,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zr=class i extends xe{constructor(t=new Ri([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(a,2));function c(u){let d=s.length/3,h=u.extractPoints(e),f=h.shape,x=h.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=x.length;m<p;m++){let M=x[m];On.isClockWise(M)===!0&&(x[m]=M.reverse())}let y=On.triangulateShape(f,x);for(let m=0,p=x.length;m<p;m++){let M=x[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=y.length;m<p;m++){let M=y[m],S=M[0]+d,v=M[1]+d,w=M[2]+d;n.push(S,v,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Op(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Op(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Fe=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new U,h=new U,f=[],x=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],S=p/n,v=a+S*o,w=t*Math.cos(v),A=Math.sqrt(t*t-w*w),I=0;p===0&&a===0?I=.5/e:p===n&&l===Math.PI&&(I=-.5/e);for(let g=0;g<=e;g++){let E=g/e,C=s+E*r;d.x=-A*Math.cos(C),d.y=w,d.z=A*Math.sin(C),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(E+I,1-S),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let S=u[p][M+1],v=u[p][M],w=u[p+1][M],A=u[p+1][M+1];(p!==0||a>0)&&f.push(S,v,A),(p!==n-1||l<Math.PI)&&f.push(v,w,A)}this.setIndex(f),this.setAttribute("position",new se(x,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rn=class i extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new U,f=new U,x=new U;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),x.subVectors(f,h).normalize(),u.push(x.x,x.y,x.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,S=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,M,v),l.push(M,S,v)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(wu(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=is(i[e]);for(let s in n)t[s]=n[s]}return t}function wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ih(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var vd={clone:is,merge:nn},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bo=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},we=class extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Jr=class extends xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ho,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Eo=class extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},To=class extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var Ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wo=class extends Ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tc:r=t,o=2*e-n;break;case wc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:a=t,l=2*n-e;break;case wc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,m=y*x,p=-h*m+2*h*y-h*x,M=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*x+1,S=(-1-f)*m+(1.5+f)*y+.5*x,v=f*m-f*y;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+M*a[c+w]+S*a[l+w]+v*a[d+w];return r}},Ao=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Ro=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Co=class extends Ci{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(n-e)/(s-e),y=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*x;return r}let h=o*2,f=t-1;for(let x=0;x!==o;++x){let y=a[c+x],m=a[l+x],p=f*h+x*2,M=d[p],S=d[p+1],v=t*h+x*2,w=u[v],A=u[v+1],I=(n-e)/(s-e),g,E,C,R,D;for(let B=0;B<8;B++){g=I*I,E=g*I,C=1-I,R=C*C,D=R*C;let P=D*e+3*R*I*M+3*C*g*w+E*s-n;if(Math.abs(P)<1e-10)break;let F=3*R*(M-e)+6*C*I*(w-M)+3*g*(s-w);if(Math.abs(F)<1e-10)break;I=I-P/F,I=Math.max(0,Math.min(1,I))}r[x]=D*y+3*R*I*S+3*C*g*A+E*m}return r}},pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qa(e,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qa(t.times,Array),values:qa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Co(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case ao:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break;case bc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let x=0;x!==n;++x){let y=e[d+x];if(y!==e[h+x]||y!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ao;var Pi=class extends pn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=_r;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Po.prototype.ValueTypeName="color";var Io=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Io.prototype.ValueTypeName="number";var Lo=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},$r=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends pn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=_r;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Do.prototype.ValueTypeName="vector";var No=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yd=new No,Uo=class{constructor(t){this.manager=t!==void 0?t:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Kr=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sc=new ge,Au=new U,Ru=new U,Fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Cs||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ya=new U,Za=new Hn,Nn=new U,jr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ya,Za,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ya,Za,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new U,Cu=new _t,Pu=new _t,Je=class extends jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Cu,Pu),e.subVectors(Pu,Cu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Dc=class extends Fo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},es=class extends ks{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Hs=class extends jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nc=class extends Fo{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ws=-90,As=1,Oo=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(ws,As,t,e);s.layers=this.layers,this.add(s);let r=new Je(ws,As,t,e);r.layers=this.layers,this.add(r);let a=new Je(ws,As,t,e);a.layers=this.layers,this.add(a);let o=new Je(ws,As,t,e);o.layers=this.layers,this.add(o);let l=new Je(ws,As,t,e);l.layers=this.layers,this.add(l);let c=new Je(ws,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Bo=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var sh="\\[\\]\\.:\\/",Hp=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",Vp="[^"+sh.replace("\\.","")+"]",Gp=/((?:WC+[\/:])*)/.source.replace("WC",rh),Wp=/(WCOD+)?/.source.replace("WCOD",Vp),Xp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),Yp=new RegExp("^"+Gp+Wp+Xp+qp+"$"),Zp=["material","materials","bones","map"],Uc=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let e=Yp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Uc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vv=new Float32Array(1);var uh=class uh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};uh.prototype.isMatrix2=!0;var Fc=uh;function ah(i,t,e,n){let s=Jp(n);switch(e){case jc:return i*t;case Zo:return i*t/s.components*s.byteLength;case Jo:return i*t/s.components*s.byteLength;case Ui:return i*t*2/s.components*s.byteLength;case $o:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Ko:return i*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case el:return Math.max(i,16)*Math.max(t,8)/4;case jo:case tl:return Math.max(i,8)*Math.max(t,8)/2;case nl:case il:case rl:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sl:case oa:case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sl:case bl:case El:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tl:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case la:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jp(i){switch(i){case an:case Zc:return{byteLength:1,components:1};case Gs:case Jc:case Yn:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case Pn:case Xo:case _n:return{byteLength:4,components:1};case $c:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);function Gd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $p(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<d.length;f++){let x=d[h],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,x=d.length;f<x;f++){let y=d[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:Kp,alphahash_pars_fragment:jp,alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:xm,color_pars_vertex:_m,color_vertex:vm,common:ym,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:bm,displacementmap_vertex:Em,emissivemap_fragment:Tm,emissivemap_pars_fragment:wm,colorspace_fragment:Am,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Dm,fog_vertex:Nm,fog_pars_vertex:Um,fog_fragment:Fm,fog_pars_fragment:Om,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:zm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:$m,lights_fragment_maps:Km,lights_fragment_end:jm,lightprobes_pars_fragment:Qm,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:s0,map_pars_fragment:r0,map_particle_fragment:a0,map_particle_pars_fragment:o0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:c0,morphinstance_vertex:h0,morphcolor_vertex:u0,morphnormal_vertex:d0,morphtarget_pars_vertex:f0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:x0,normal_pars_vertex:_0,normal_vertex:v0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:E0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:A0,project_vertex:R0,dithering_fragment:C0,dithering_pars_fragment:P0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:N0,shadowmap_vertex:U0,shadowmask_pars_fragment:F0,skinbase_vertex:O0,skinning_pars_vertex:B0,skinning_vertex:z0,skinnormal_vertex:k0,specularmap_fragment:H0,specularmap_pars_fragment:V0,tonemapping_fragment:G0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:q0,uv_pars_fragment:Y0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:$0,background_vert:K0,background_frag:j0,backgroundCube_vert:Q0,backgroundCube_frag:tg,cube_vert:eg,cube_frag:ng,depth_vert:ig,depth_frag:sg,distance_vert:rg,distance_frag:ag,equirect_vert:og,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:hg,meshbasic_vert:ug,meshbasic_frag:dg,meshlambert_vert:fg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:xg,meshnormal_frag:_g,meshphong_vert:vg,meshphong_frag:yg,meshphysical_vert:Mg,meshphysical_frag:Sg,meshtoon_vert:bg,meshtoon_frag:Eg,points_vert:Tg,points_frag:wg,shadow_vert:Ag,shadow_frag:Rg,sprite_vert:Cg,sprite_frag:Pg},Pt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:nn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:nn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new kt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:nn([Pt.points,Pt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:nn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:nn([Pt.common,Pt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:nn([Pt.sprite,Pt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:nn([Pt.common,Pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:nn([Pt.lights,Pt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Il={r:0,b:0,g:0},Ig=new ge,Wd=new ne;Wd.set(-1,0,0,0,1,0,0,0,1);function Lg(i,t,e,n,s,r){let a=new kt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let v=M.backgroundBlurriness>0;S=t.get(S,v)}return S}function x(M){let S=!1,v=f(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===ea)?(c===void 0&&(c=new Gt(new Ai(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:is(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wd),c.material.toneMapped=he.getTransfer(v.colorSpace)!==me,(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Gt(new fn(2,2),new en({name:"BackgroundMaterial",uniforms:is(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(Il,ih(i)),e.buffers.color.setClear(Il.r,Il.g,Il.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:x,addToRenderList:y,dispose:p}}function Dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(R,D,B,k,P){let F=!1,W=d(R,k,B,D);r!==W&&(r=W,c(r.object)),F=f(R,k,B,P),F&&x(R,k,B,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(R,D,B,k),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,D,B,k){let P=k.wireframe===!0,F=n[D.id];F===void 0&&(F={},n[D.id]=F);let W=R.isInstancedMesh===!0?R.id:0,j=F[W];j===void 0&&(j={},F[W]=j);let Q=j[B.id];Q===void 0&&(Q={},j[B.id]=Q);let dt=Q[P];return dt===void 0&&(dt=h(l()),Q[P]=dt),dt}function h(R){let D=[],B=[],k=[];for(let P=0;P<e;P++)D[P]=0,B[P]=0,k[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:k,object:R,attributes:{},index:null}}function f(R,D,B,k){let P=r.attributes,F=D.attributes,W=0,j=B.getAttributes();for(let Q in j)if(j[Q].location>=0){let nt=P[Q],yt=F[Q];if(yt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),nt===void 0||nt.attribute!==yt||yt&&nt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function x(R,D,B,k){let P={},F=D.attributes,W=0,j=B.getAttributes();for(let Q in j)if(j[Q].location>=0){let nt=F[Q];nt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));let yt={};yt.attribute=nt,nt&&nt.data&&(yt.data=nt.data),P[Q]=yt,W++}r.attributes=P,r.attributesNum=W,r.index=k}function y(){let R=r.newAttributes;for(let D=0,B=R.length;D<B;D++)R[D]=0}function m(R){p(R,0)}function p(R,D){let B=r.newAttributes,k=r.enabledAttributes,P=r.attributeDivisors;B[R]=1,k[R]===0&&(i.enableVertexAttribArray(R),k[R]=1),P[R]!==D&&(i.vertexAttribDivisor(R,D),P[R]=D)}function M(){let R=r.newAttributes,D=r.enabledAttributes;for(let B=0,k=D.length;B<k;B++)D[B]!==R[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function S(R,D,B,k,P,F,W){W===!0?i.vertexAttribIPointer(R,D,B,P,F):i.vertexAttribPointer(R,D,B,k,P,F)}function v(R,D,B,k){y();let P=k.attributes,F=B.getAttributes(),W=D.defaultAttributeValues;for(let j in F){let Q=F[j];if(Q.location>=0){let dt=P[j];if(dt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),dt!==void 0){let nt=dt.normalized,yt=dt.itemSize,ot=t.get(dt);if(ot===void 0)continue;let Ut=ot.buffer,Ht=ot.type,tt=ot.bytesPerElement,Mt=Ht===i.INT||Ht===i.UNSIGNED_INT||dt.gpuType===Xo;if(dt.isInterleavedBufferAttribute){let ct=dt.data,Ct=ct.stride,Xt=dt.offset;if(ct.isInstancedInterleavedBuffer){for(let Bt=0;Bt<Q.locationSize;Bt++)p(Q.location+Bt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Bt=0;Bt<Q.locationSize;Bt++)m(Q.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let Bt=0;Bt<Q.locationSize;Bt++)S(Q.location+Bt,yt/Q.locationSize,Ht,nt,Ct*tt,(Xt+yt/Q.locationSize*Bt)*tt,Mt)}else{if(dt.isInstancedBufferAttribute){for(let ct=0;ct<Q.locationSize;ct++)p(Q.location+ct,dt.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ct=0;ct<Q.locationSize;ct++)m(Q.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let ct=0;ct<Q.locationSize;ct++)S(Q.location+ct,yt/Q.locationSize,Ht,nt,yt*tt,yt/Q.locationSize*ct*tt,Mt)}}else if(W!==void 0){let nt=W[j];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Q.location,nt);break;case 3:i.vertexAttrib3fv(Q.location,nt);break;case 4:i.vertexAttrib4fv(Q.location,nt);break;default:i.vertexAttrib1fv(Q.location,nt)}}}}M()}function w(){E();for(let R in n){let D=n[R];for(let B in D){let k=D[B];for(let P in k){let F=k[P];for(let W in F)u(F[W].object),delete F[W];delete k[P]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let B in D){let k=D[B];for(let P in k){let F=k[P];for(let W in F)u(F[W].object),delete F[W];delete k[P]}}delete n[R.id]}function I(R){for(let D in n){let B=n[D];for(let k in B){let P=B[k];if(P[R.id]===void 0)continue;let F=P[R.id];for(let W in F)u(F[W].object),delete F[W];delete P[R.id]}}}function g(R){for(let D in n){let B=n[D],k=R.isInstancedMesh===!0?R.id:0,P=B[k];if(P!==void 0){for(let F in P){let W=P[F];for(let j in W)u(W[j].object),delete W[j];delete P[F]}delete B[k],Object.keys(B).length===0&&delete n[D]}}}function E(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function Ng(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==vn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let g=I===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==an&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==_n&&!g)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:w,samples:A}}function Fg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Un,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,S=M*4,v=p.clippingState||null;l.value=v,v=u(x,h,S,f);for(let w=0;w!==S;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,x){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let p=f+y*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==y;++S,v+=4)a.copy(d[S]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Fi=4,Md=[.125,.215,.35,.446,.526,.582],ss=20,Og=256,ha=new Hs,Sd=new kt,dh=null,fh=0,ph=0,mh=!1,Bg=new U,Ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Bg}=r;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Yn,format:vn,colorSpace:vr,depthBuffer:!1},s=bd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Hg(r,t,e),this._ggxMaterial=kg(r,t,e)}return s}_compileMaterial(t){let e=new Gt(new xe,t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s,r){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Sd),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Ai,new Ee({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Sd),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let w=this._cubeSize;Xs(s,v*w,S>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:x}=this,y=this._sizeLods[n],m=3*y*(n>x-Fi?n-x+Fi:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=x-e,Xs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Xs(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,ha)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ss-1),y=r/x,m=isFinite(r)?1+Math.floor(u*y):ss;m>ss&&Kt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],M=0;for(let I=0;I<ss;++I){let g=I/y,E=Math.exp(-g*g/2);p.push(E),I===0?M+=E:I<m&&(M+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:S}=this;h.dTheta.value=x,h.mipInt.value=S-n;let v=this._sizeLods[s],w=3*v*(s>S-Fi?s-S+Fi:0),A=4*(this._cubeSize-v);Xs(e,w,A,3*v,2*v),l.setRenderTarget(e),l.render(d,ha)}};function zg(i){let t=[],e=[],n=[],s=i,r=i-Fi+1+Md.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Fi?l=Md[a-i+Fi-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,x=6,y=3,m=2,p=1,M=new Float32Array(y*x*f),S=new Float32Array(m*x*f),v=new Float32Array(p*x*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,g=A>2?0:-1,E=[I,g,0,I+2/3,g,0,I+2/3,g+1,0,I,g,0,I+2/3,g+1,0,I,g+1,0];M.set(E,y*x*A),S.set(h,m*x*A);let C=[A,A,A,A,A,A];v.set(C,p*x*A)}let w=new xe;w.setAttribute("position",new ye(M,y)),w.setAttribute("uv",new ye(S,m)),w.setAttribute("faceIndex",new ye(v,p)),n.push(new Gt(w,null)),s>Fi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function bd(i,t,e){let n=new un(i,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function kg(i,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Hg(i,t,e){let n=new Float32Array(ss),s=new U(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ed(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Td(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dl=class extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:qn});r.uniforms.tEquirect.value=e;let a=new Gt(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=$e),new Oo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Vg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Vo||f===Go)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let y=new Dl(x.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,x=f===Vo||f===Go,y=f===Li||f===ns;if(x||y){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ys(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return x&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Ys(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Vo?h.mapping=Li:f===Go&&(h.mapping=ns),h}function l(h){let f=0,x=6;for(let y=0;y<x;y++)h[y]!==void 0&&f++;return f===x}function c(h){let f=h.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Gg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zi("WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,x=d.attributes.position,y=0;if(x===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let S=0,v=M.length;S<v;S+=3){let w=M[S+0],A=M[S+1],I=M[S+2];h.push(w,A,A,I,I,w)}}else{let M=x.array;y=x.version;for(let S=0,v=M.length/3-1;S<v;S+=3){let w=S+0,A=S+1,I=S+2;h.push(w,A,A,I,I,w)}}let m=new(x.count>=65535?Ar:wr)(h,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Xg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function qg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yg(i,t,e){let n=new WeakMap,s=new Ie;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;f===!0&&(S=1),x===!0&&(S=2),y===!0&&(S=3);let v=o.attributes.position.count*S,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*w*4*d),I=new br(A,v,w,d);I.type=_n,I.needsUpdate=!0;let g=S*4;for(let C=0;C<d;C++){let R=m[C],D=p[C],B=M[C],k=v*w*4*C;for(let P=0;P<R.count;P++){let F=P*g;f===!0&&(s.fromBufferAttribute(R,P),A[k+F+0]=s.x,A[k+F+1]=s.y,A[k+F+2]=s.z,A[k+F+3]=0),x===!0&&(s.fromBufferAttribute(D,P),A[k+F+4]=s.x,A[k+F+5]=s.y,A[k+F+6]=s.z,A[k+F+7]=0),y===!0&&(s.fromBufferAttribute(B,P),A[k+F+8]=s.x,A[k+F+9]=s.y,A[k+F+10]=s.z,A[k+F+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:I,size:new _t(v,w)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Zg(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Jg={[kc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Gc]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[qc]:"NEUTRAL_TONE_MAPPING",[Wc]:"CUSTOM_TONE_MAPPING"};function $g(i,t,e,n,s,r){let a=new un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new li(t,e):void 0}),o=new un(t,e,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new xe;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));let c=new bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Gt(l,c),d=new Hs(-1,1,1,-1,0,1),h=null,f=null,x=!1,y,m=null,p=[],M=!1;this.setSize=function(S,v){a.setSize(S,v),o.setSize(S,v);for(let w=0;w<p.length;w++){let A=p[w];A.setSize&&A.setSize(S,v)}},this.setEffects=function(S){p=S,M=p.length>0&&p[0].isRenderPass===!0;let v=a.width,w=a.height;for(let A=0;A<p.length;A++){let I=p[A];I.setSize&&I.setSize(v,w)}},this.begin=function(S,v){if(x||S.toneMapping===Cn&&p.length===0)return!1;if(m=v,v!==null){let w=v.width,A=v.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return M===!1&&S.setRenderTarget(a),y=S.toneMapping,S.toneMapping=Cn,!0},this.hasRenderPass=function(){return M},this.end=function(S,v){S.toneMapping=y,x=!0;let w=a,A=o;for(let I=0;I<p.length;I++){let g=p[I];if(g.enabled!==!1&&(g.render(S,A,w,v),g.needsSwap!==!1)){let E=w;w=A,A=E}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,c.defines={},he.getTransfer(h)===me&&(c.defines.SRGB_TRANSFER="");let I=Jg[f];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(m),S.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Xd=new rn,_h=new li(1,1),qd=new br,Yd=new ho,Zd=new Dr,wd=[],Ad=[],Rd=new Float32Array(16),Cd=new Float32Array(9),Pd=new Float32Array(4);function Zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fl(i,t){let e=Ad[t];e===void 0&&(e=new Int32Array(t),Ad[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Pd.set(n),i.uniformMatrix2fv(this.addr,!1,Pd),We(e,n)}}function nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Cd.set(n),i.uniformMatrix3fv(this.addr,!1,Cd),We(e,n)}}function ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Rd.set(n),i.uniformMatrix4fv(this.addr,!1,Rd),We(e,n)}}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=e.isReversedDepthBuffer()?Cl:Rl,r=_h):r=Xd,e.setTexture2D(t||r,s)}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yd,s)}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zd,s)}function mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qd,s)}function gx(i){switch(i){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function xx(i,t){i.uniform1fv(this.addr,t)}function _x(i,t){let e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function vx(i,t){let e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function yx(i,t){let e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Mx(i,t){let e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sx(i,t){let e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bx(i,t){let e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ex(i,t){i.uniform1iv(this.addr,t)}function Tx(i,t){i.uniform2iv(this.addr,t)}function wx(i,t){i.uniform3iv(this.addr,t)}function Ax(i,t){i.uniform4iv(this.addr,t)}function Rx(i,t){i.uniform1uiv(this.addr,t)}function Cx(i,t){i.uniform2uiv(this.addr,t)}function Px(i,t){i.uniform3uiv(this.addr,t)}function Ix(i,t){i.uniform4uiv(this.addr,t)}function Lx(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_h:a=Xd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Dx(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yd,r[a])}function Nx(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zd,r[a])}function Ux(i,t,e){let n=this.cache,s=t.length,r=Fl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qd,r[a])}function Fx(i){switch(i){case 5126:return xx;case 35664:return _x;case 35665:return vx;case 35666:return yx;case 35674:return Mx;case 35675:return Sx;case 35676:return bx;case 5124:case 35670:return Ex;case 35667:case 35671:return Tx;case 35668:case 35672:return wx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}var vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gx(e.type)}},yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},Mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function Id(i,t){i.seq.push(t),i.map[t.id]=t}function Ox(i,t,e){let n=i.name,s=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),a=gh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Id(e,c===void 0?new vh(o,i,t):new yh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Mh(o),Id(e,d)),e=d}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ox(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ld(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Bx=37297,zx=0;function kx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Dd=new ne;function Hx(i){he._getMatrix(Dd,he.workingColorSpace,i);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kx(i.getShaderSource(t),o)}else return r}function Vx(i,t){let e=Hx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Gx={[kc]:"Linear",[Hc]:"Reinhard",[Vc]:"Cineon",[Gc]:"ACESFilmic",[Xc]:"AgX",[qc]:"Neutral",[Wc]:"Custom"};function Wx(i,t){let e=Gx[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ll=new U;function Xx(){he.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),t=Ll.y.toFixed(4),e=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function Yx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function da(i){return i!==""}function Ud(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(Jx,Kx)}var $x=new Map;function Kx(i,t){let e=oe[t];if(e===void 0){let n=$x.get(t);if(n!==void 0)e=oe[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Sh(e)}var jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(jx,Qx)}function Qx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var t_={[ta]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function e_(i){return t_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n_={[Li]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function i_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":n_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var s_={[ns]:"ENVMAP_MODE_REFRACTION"};function r_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[Ho]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function o_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a_[i.combine]||"ENVMAP_BLENDING_NONE"}function l_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function c_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=e_(e),c=i_(e),u=r_(e),d=o_(e),h=l_(e),f=qx(e),x=Yx(r),y=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(da).join(`
`),p.length>0&&(p+=`
`)):(m=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Vx("linearToOutputTexel",e.outputColorSpace),Xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Sh(a),a=Ud(a,e),a=Fd(a,e),o=Sh(o),o=Ud(o,e),o=Fd(o,e),a=Od(a),o=Od(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+a,v=M+p+o,w=Ld(s,s.VERTEX_SHADER,S),A=Ld(s,s.FRAGMENT_SHADER,v);s.attachShader(y,w),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(A)||"",P=D.trim(),F=B.trim(),W=k.trim(),j=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,w,A);else{let dt=Nd(s,w,"vertex"),nt=Nd(s,A,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+dt+`
`+nt)}else P!==""?Kt("WebGLProgram: Program Info Log:",P):(F===""||W==="")&&(Q=!1);Q&&(R.diagnostics={runnable:j,programLog:P,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(A),g=new qs(s,y),E=Zx(s,y)}let g;this.getUniforms=function(){return g===void 0&&I(this),g};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,Bx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}var h_=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Eh(t),e.set(t,n)),n}},Eh=class{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}};function u_(i){return i===Ui||i===oa||i===la}function d_(i,t,e,n,s,r){let a=new Er,o=new bh,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,E,C,R,D,B){let k=R.fog,P=D.geometry,F=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,j=t.get(g.envMap||F,W),Q=j&&j.mapping===ea?j.image.height:null,dt=f[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Kt("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let nt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,yt=nt!==void 0?nt.length:0,ot=0;P.morphAttributes.position!==void 0&&(ot=1),P.morphAttributes.normal!==void 0&&(ot=2),P.morphAttributes.color!==void 0&&(ot=3);let Ut,Ht,tt,Mt;if(dt){let Rt=Jn[dt];Ut=Rt.vertexShader,Ht=Rt.fragmentShader}else{Ut=g.vertexShader,Ht=g.fragmentShader;let Rt=o.getVertexShaderStage(g),de=o.getFragmentShaderStage(g);o.update(g,Rt,de),tt=Rt.id,Mt=de.id}let ct=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Xt=D.isInstancedMesh===!0,Bt=D.isBatchedMesh===!0,ee=!!g.map,qt=!!g.matcap,ft=!!j,gt=!!g.aoMap,pt=!!g.lightMap,V=!!g.bumpMap&&g.wireframe===!1,rt=!!g.normalMap,vt=!!g.displacementMap,xt=!!g.emissiveMap,K=!!g.metalnessMap,Et=!!g.roughnessMap,L=g.anisotropy>0,Dt=g.clearcoat>0,lt=g.dispersion>0,T=g.iridescence>0,_=g.sheen>0,N=g.transmission>0,O=L&&!!g.anisotropyMap,q=Dt&&!!g.clearcoatMap,at=Dt&&!!g.clearcoatNormalMap,ut=Dt&&!!g.clearcoatRoughnessMap,Y=T&&!!g.iridescenceMap,et=T&&!!g.iridescenceThicknessMap,St=_&&!!g.sheenColorMap,Ft=_&&!!g.sheenRoughnessMap,wt=!!g.specularMap,bt=!!g.specularColorMap,Yt=!!g.specularIntensityMap,$t=N&&!!g.transmissionMap,te=N&&!!g.thicknessMap,z=!!g.gradientMap,Tt=!!g.alphaMap,ht=g.alphaTest>0,st=!!g.alphaHash,mt=!!g.extensions,it=Cn;g.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(it=i.toneMapping);let At={shaderID:dt,shaderType:g.type,shaderName:g.name,vertexShader:Ut,fragmentShader:Ht,defines:g.defines,customVertexShaderID:tt,customFragmentShaderID:Mt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Bt,batchingColor:Bt&&D._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&D.instanceColor!==null,instancingMorph:Xt&&D.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ee,matcap:qt,envMap:ft,envMapMode:ft&&j.mapping,envMapCubeUVHeight:Q,aoMap:gt,lightMap:pt,bumpMap:V,normalMap:rt,displacementMap:vt,emissiveMap:xt,normalMapObjectSpace:rt&&g.normalMapType===nd,normalMapTangentSpace:rt&&g.normalMapType===ca,packedNormalMap:rt&&g.normalMapType===ca&&u_(g.normalMap.format),metalnessMap:K,roughnessMap:Et,anisotropy:L,anisotropyMap:O,clearcoat:Dt,clearcoatMap:q,clearcoatNormalMap:at,clearcoatRoughnessMap:ut,dispersion:lt,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:et,sheen:_,sheenColorMap:St,sheenRoughnessMap:Ft,specularMap:wt,specularColorMap:bt,specularIntensityMap:Yt,transmission:N,transmissionMap:$t,thicknessMap:te,gradientMap:z,opaque:g.transparent===!1&&g.blending===Ji&&g.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ht,alphaHash:st,combine:g.combine,mapUv:ee&&x(g.map.channel),aoMapUv:gt&&x(g.aoMap.channel),lightMapUv:pt&&x(g.lightMap.channel),bumpMapUv:V&&x(g.bumpMap.channel),normalMapUv:rt&&x(g.normalMap.channel),displacementMapUv:vt&&x(g.displacementMap.channel),emissiveMapUv:xt&&x(g.emissiveMap.channel),metalnessMapUv:K&&x(g.metalnessMap.channel),roughnessMapUv:Et&&x(g.roughnessMap.channel),anisotropyMapUv:O&&x(g.anisotropyMap.channel),clearcoatMapUv:q&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&x(g.sheenRoughnessMap.channel),specularMapUv:wt&&x(g.specularMap.channel),specularColorMapUv:bt&&x(g.specularColorMap.channel),specularIntensityMapUv:Yt&&x(g.specularIntensityMap.channel),transmissionMapUv:$t&&x(g.transmissionMap.channel),thicknessMapUv:te&&x(g.thicknessMap.channel),alphaMapUv:Tt&&x(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(rt||L),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(ee||Tt),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&rt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:ee&&g.map.isVideoTexture===!0&&he.getTransfer(g.map.colorSpace)===me,decodeVideoTextureEmissive:xt&&g.emissiveMap.isVideoTexture===!0&&he.getTransfer(g.emissiveMap.colorSpace)===me,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===He,flipSided:g.side===Ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:mt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&g.extensions.multiDraw===!0||Bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function m(g){let E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(let C in g.defines)E.push(C),E.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(p(E,g),M(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function p(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function M(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){let E=f[g.type],C;if(E){let R=Jn[E];C=vd.clone(R.uniforms)}else C=g.uniforms;return C}function v(g,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new c_(i,E,g,s),c.push(C),u.set(E,C)),C}function w(g){if(--g.usedTimes===0){let E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:I}}function f_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,y,m,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:x,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=x,M.materialVariant=a(h),M.groupOrder=y,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function l(h,f,x,y,m,p){let M=o(h,f,x,y,m,p);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):e.push(M)}function c(h,f,x,y,m,p){let M=o(h,f,x,y,m,p);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f,x){e.length>1&&e.sort(h||p_),n.length>1&&n.sort(f||zd),s.length>1&&s.sort(f||zd),x&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let h=t,f=i.length;h<f;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function m_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new kd,i.set(n,[a])):s>=r.length?(a=new kd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var __=0;function v_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function y_(i){let t=new g_,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ge,a=new ge;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,x=0,y=0,m=0,p=0,M=0,S=0,v=0,w=0,A=0,I=0;c.sort(v_);for(let E=0,C=c.length;E<C;E++){let R=c[E],D=R.color,B=R.intensity,k=R.distance,P=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ui?P=R.shadow.map.texture:P=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*B,d+=D.g*B,h+=D.b*B;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],B);I++}else if(R.isDirectionalLight){let F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,j=e.get(R);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=P,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=F,f++}else if(R.isSpotLight){let F=t.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(D).multiplyScalar(B),F.distance=k,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[y]=F;let W=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,W.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[y]=W.matrix,R.castShadow){let j=e.get(R);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=P,v++}y++}else if(R.isRectAreaLight){let F=t.get(R);F.color.copy(D).multiplyScalar(B),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=F,m++}else if(R.isPointLight){let F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let W=R.shadow,j=e.get(R);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=P,n.pointShadowMatrix[x]=R.shadow.matrix,S++}n.point[x]=F,x++}else if(R.isHemisphereLight){let F=t.get(R);F.skyColor.copy(R.color).multiplyScalar(B),F.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let g=n.hash;(g.directionalLength!==f||g.pointLength!==x||g.spotLength!==y||g.rectAreaLength!==m||g.hemiLength!==p||g.numDirectionalShadows!==M||g.numPointShadows!==S||g.numSpotShadows!==v||g.numSpotMaps!==w||g.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,g.directionalLength=f,g.pointLength=x,g.spotLength=y,g.rectAreaLength=m,g.hemiLength=p,g.numDirectionalShadows=M,g.numPointShadows=S,g.numSpotShadows=v,g.numSpotMaps=w,g.numLightProbes=I,n.version=__++)}function l(c,u){let d=0,h=0,f=0,x=0,y=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Hd(i){let t=new y_(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function M_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Hd(i),t.set(s,[o])):r>=a.length?(o=new Hd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],T_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Vd=new ge,ua=new U,xh=new U;function w_(i,t,e){let n=new Us,s=new _t,r=new _t,a=new Ie,o=new Eo,l=new To,c={},u=e.maxTextureSize,d={[ri]:Ze,[Ze]:ri,[He]:He},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:S_,fragmentShader:b_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new xe;x.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Gt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let p=this.type;this.render=function(A,I,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Du&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ta);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(qn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=p!==this.type;B&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(P=>P.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,P=A.length;k<P;k++){let F=A[k],W=F.shadow;if(W===void 0){Kt("WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let j=W.getFrameExtents();s.multiply(j),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,W.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Q,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Vs){if(F.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new un(s.x,s.y,{format:Ui,type:Yn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),W.map.texture.name=F.name+".shadowMap",W.map.depthTexture=new li(s.x,s.y,_n),W.map.depthTexture.name=F.name+".shadowMapDepth",W.map.depthTexture.format=zn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye}else F.isPointLight?(W.map=new Dl(s.x),W.map.depthTexture=new go(s.x,Pn)):(W.map=new un(s.x,s.y),W.map.depthTexture=new li(s.x,s.y,Pn)),W.map.depthTexture.name=F.name+".shadowMap",W.map.depthTexture.format=zn,this.type===ta?(W.map.depthTexture.compareFunction=Q?Cl:Rl,W.map.depthTexture.minFilter=$e,W.map.depthTexture.magFilter=$e):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye);W.camera.updateProjectionMatrix()}let dt=W.map.isWebGLCubeRenderTarget?6:1;for(let nt=0;nt<dt;nt++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(W.map),i.clear());let yt=W.getViewport(nt);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),D.viewport(a)}if(F.isPointLight){let yt=W.camera,ot=W.matrix,Ut=F.distance||yt.far;Ut!==yt.far&&(yt.far=Ut,yt.updateProjectionMatrix()),ua.setFromMatrixPosition(F.matrixWorld),yt.position.copy(ua),xh.copy(yt.position),xh.add(E_[nt]),yt.up.copy(T_[nt]),yt.lookAt(xh),yt.updateMatrixWorld(),ot.makeTranslation(-ua.x,-ua.y,-ua.z),Vd.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Vd,yt.coordinateSystem,yt.reversedDepth)}else W.updateMatrices(F);n=W.getFrustum(),v(I,g,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===Vs&&M(W,g),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,R)};function M(A,I){let g=t.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new un(s.x,s.y,{format:Ui,type:Yn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,g,h,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,g,f,y,null)}function S(A,I,g,E){let C=null,R=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)C=R;else if(C=g.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let D=C.uuid,B=I.uuid,k=c[D];k===void 0&&(k={},c[D]=k);let P=k[B];P===void 0&&(P=C.clone(),k[B]=P,I.addEventListener("dispose",w)),C=P}if(C.visible=I.visible,C.wireframe=I.wireframe,E===Vs?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:d[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=i.properties.get(C);D.light=g}return C}function v(A,I,g,E,C){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Vs)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let B=t.update(A),k=A.material;if(Array.isArray(k)){let P=B.groups;for(let F=0,W=P.length;F<W;F++){let j=P[F],Q=k[j.materialIndex];if(Q&&Q.visible){let dt=S(A,Q,E,C);A.onBeforeShadow(i,A,I,g,B,dt,j),i.renderBufferDirect(g,null,B,dt,A,j),A.onAfterShadow(i,A,I,g,B,dt,j)}}}else if(k.visible){let P=S(A,k,E,C);A.onBeforeShadow(i,A,I,g,B,P,null),i.renderBufferDirect(g,null,B,P,A,null),A.onAfterShadow(i,A,I,g,B,P,null)}}let D=A.children;for(let B=0,k=D.length;B<k;B++)v(D[B],I,g,E,C)}function w(A){A.target.removeEventListener("dispose",w);for(let g in c){let E=c[g],C=A.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function A_(i,t){function e(){let z=!1,Tt=new Ie,ht=null,st=new Ie(0,0,0,0);return{setMask:function(mt){ht!==mt&&!z&&(i.colorMask(mt,mt,mt,mt),ht=mt)},setLocked:function(mt){z=mt},setClear:function(mt,it,At,Rt,de){de===!0&&(mt*=Rt,it*=Rt,At*=Rt),Tt.set(mt,it,At,Rt),st.equals(Tt)===!1&&(i.clearColor(mt,it,At,Rt),st.copy(Tt))},reset:function(){z=!1,ht=null,st.set(-1,0,0,0)}}}function n(){let z=!1,Tt=!1,ht=null,st=null,mt=null;return{setReversed:function(it){if(Tt!==it){let At=t.get("EXT_clip_control");it?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Tt=it;let Rt=mt;mt=null,this.setClear(Rt)}},getReversed:function(){return Tt},setTest:function(it){it?ct(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(it){ht!==it&&!z&&(i.depthMask(it),ht=it)},setFunc:function(it){if(Tt&&(it=dd[it]),st!==it){switch(it){case ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case so:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=it}},setLocked:function(it){z=it},setClear:function(it){mt!==it&&(mt=it,Tt&&(it=1-it),i.clearDepth(it))},reset:function(){z=!1,ht=null,st=null,mt=null,Tt=!1}}}function s(){let z=!1,Tt=null,ht=null,st=null,mt=null,it=null,At=null,Rt=null,de=null;return{setTest:function(_e){z||(_e?ct(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(_e){Tt!==_e&&!z&&(i.stencilMask(_e),Tt=_e)},setFunc:function(_e,ze,Re){(ht!==_e||st!==ze||mt!==Re)&&(i.stencilFunc(_e,ze,Re),ht=_e,st=ze,mt=Re)},setOp:function(_e,ze,Re){(it!==_e||At!==ze||Rt!==Re)&&(i.stencilOp(_e,ze,Re),it=_e,At=ze,Rt=Re)},setLocked:function(_e){z=_e},setClear:function(_e){de!==_e&&(i.clearStencil(_e),de=_e)},reset:function(){z=!1,Tt=null,ht=null,st=null,mt=null,it=null,At=null,Rt=null,de=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,x=[],y=null,m=!1,p=null,M=null,S=null,v=null,w=null,A=null,I=null,g=new kt(0,0,0),E=0,C=!1,R=null,D=null,B=null,k=null,P=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=j>=2);let dt=null,nt={},yt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Ut=new Ie().fromArray(yt),Ht=new Ie().fromArray(ot);function tt(z,Tt,ht,st){let mt=new Uint8Array(4),it=i.createTexture();i.bindTexture(z,it),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ht;At++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(Tt+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return it}let Mt={};Mt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc($i),V(!1),rt(Oc),ct(i.CULL_FACE),gt(qn);function ct(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Ct(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Xt(z,Tt){return h[z]!==Tt?(i.bindFramebuffer(z,Tt),h[z]=Tt,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Tt),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Bt(z,Tt){let ht=x,st=!1;if(z){ht=f.get(Tt),ht===void 0&&(ht=[],f.set(Tt,ht));let mt=z.textures;if(ht.length!==mt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let it=0,At=mt.length;it<At;it++)ht[it]=i.COLOR_ATTACHMENT0+it;ht.length=mt.length,st=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,st=!0);st&&i.drawBuffers(ht)}function ee(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let qt={[bi]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};qt[Ou]=i.MIN,qt[Bu]=i.MAX;let ft={[zu]:i.ZERO,[ku]:i.ONE,[Hu]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(z,Tt,ht,st,mt,it,At,Rt,de,_e){if(z===qn){m===!0&&(Ct(i.BLEND),m=!1);return}if(m===!1&&(ct(i.BLEND),m=!0),z!==Nu){if(z!==p||_e!==C){if((M!==bi||w!==bi)&&(i.blendEquation(i.FUNC_ADD),M=bi,w=bi),_e)switch(z){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",z);break}else switch(z){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",z);break}S=null,v=null,A=null,I=null,g.set(0,0,0),E=0,p=z,C=_e}return}mt=mt||Tt,it=it||ht,At=At||st,(Tt!==M||mt!==w)&&(i.blendEquationSeparate(qt[Tt],qt[mt]),M=Tt,w=mt),(ht!==S||st!==v||it!==A||At!==I)&&(i.blendFuncSeparate(ft[ht],ft[st],ft[it],ft[At]),S=ht,v=st,A=it,I=At),(Rt.equals(g)===!1||de!==E)&&(i.blendColor(Rt.r,Rt.g,Rt.b,de),g.copy(Rt),E=de),p=z,C=!1}function pt(z,Tt){z.side===He?Ct(i.CULL_FACE):ct(i.CULL_FACE);let ht=z.side===Ze;Tt&&(ht=!ht),V(ht),z.blending===Ji&&z.transparent===!1?gt(qn):gt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let st=z.stencilWrite;o.setTest(st),st&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),xt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(z){R!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),R=z)}function rt(z){z!==Iu?(ct(i.CULL_FACE),z!==D&&(z===Oc?i.cullFace(i.BACK):z===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),D=z}function vt(z){z!==B&&(W&&i.lineWidth(z),B=z)}function xt(z,Tt,ht){z?(ct(i.POLYGON_OFFSET_FILL),(k!==Tt||P!==ht)&&(k=Tt,P=ht,a.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ht))):Ct(i.POLYGON_OFFSET_FILL)}function K(z){z?ct(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Et(z){z===void 0&&(z=i.TEXTURE0+F-1),dt!==z&&(i.activeTexture(z),dt=z)}function L(z,Tt,ht){ht===void 0&&(dt===null?ht=i.TEXTURE0+F-1:ht=dt);let st=nt[ht];st===void 0&&(st={type:void 0,texture:void 0},nt[ht]=st),(st.type!==z||st.texture!==Tt)&&(dt!==ht&&(i.activeTexture(ht),dt=ht),i.bindTexture(z,Tt||Mt[z]),st.type=z,st.texture=Tt)}function Dt(){let z=nt[dt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function _(){try{i.texSubImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function N(){try{i.texSubImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function at(){try{i.texStorage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function ut(){try{i.texStorage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function Y(){try{i.texImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function et(){try{i.texImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function St(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function Ft(z,Tt){d[z]!==Tt&&(i.pixelStorei(z,Tt),d[z]=Tt)}function wt(z){Ut.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ut.copy(z))}function bt(z){Ht.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ht.copy(z))}function Yt(z,Tt){let ht=c.get(Tt);ht===void 0&&(ht=new WeakMap,c.set(Tt,ht));let st=ht.get(z);st===void 0&&(st=i.getUniformBlockIndex(Tt,z.name),ht.set(z,st))}function $t(z,Tt){let st=c.get(Tt).get(z);l.get(Tt)!==st&&(i.uniformBlockBinding(Tt,st,z.__bindingPointIndex),l.set(Tt,st))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},dt=null,nt={},h={},f=new WeakMap,x=[],y=null,m=!1,p=null,M=null,S=null,v=null,w=null,A=null,I=null,g=new kt(0,0,0),E=0,C=!1,R=null,D=null,B=null,k=null,P=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Ct,bindFramebuffer:Xt,drawBuffers:Bt,useProgram:ee,setBlending:gt,setMaterial:pt,setFlipSided:V,setCullFace:rt,setLineWidth:vt,setPolygonOffset:xt,setScissorTest:K,activeTexture:Et,bindTexture:L,unbindTexture:Dt,compressedTexImage2D:lt,compressedTexImage3D:T,texImage2D:Y,texImage3D:et,pixelStorei:Ft,getParameter:St,updateUBOMapping:Yt,uniformBlockBinding:$t,texStorage2D:at,texStorage3D:ut,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:O,compressedTexSubImage3D:q,scissor:wt,viewport:bt,reset:te}}function R_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap,d=new Set,h,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,_){return x?new OffscreenCanvas(T,_):Mr("canvas")}function m(T,_,N){let O=1,q=lt(T);if((q.width>N||q.height>N)&&(O=N/Math.max(q.width,q.height)),O<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(O*q.width),ut=Math.floor(O*q.height);h===void 0&&(h=y(at,ut));let Y=_?y(at,ut):h;return Y.width=at,Y.height=ut,Y.getContext("2d").drawImage(T,0,0,at,ut),Kt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+at+"x"+ut+")."),Y}else return"data"in T&&Kt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function p(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,_,N,O,q,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ut;O&&(ut=t.get("EXT_texture_norm16"),ut||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8),N===i.UNSIGNED_SHORT&&ut&&(Y=ut.R16_EXT),N===i.SHORT&&ut&&(Y=ut.R16_SNORM_EXT)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),_===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8),N===i.UNSIGNED_SHORT&&ut&&(Y=ut.RG16_EXT),N===i.SHORT&&ut&&(Y=ut.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_SHORT&&ut&&(Y=ut.RGB16_EXT),N===i.SHORT&&ut&&(Y=ut.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let et=at?yr:he.getTransfer(q);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=et===me?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ut&&(Y=ut.RGBA16_EXT),N===i.SHORT&&ut&&(Y=ut.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(T,_){let N;return T?_===null||_===Pn||_===Ws?N=i.DEPTH24_STENCIL8:_===_n?N=i.DEPTH32F_STENCIL8:_===Gs&&(N=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pn||_===Ws?N=i.DEPTH_COMPONENT24:_===_n?N=i.DEPTH_COMPONENT32F:_===Gs&&(N=i.DEPTH_COMPONENT16),N}function A(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ye&&T.minFilter!==$e?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function I(T){let _=T.target;_.removeEventListener("dispose",I),E(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function g(T){let _=T.target;_.removeEventListener("dispose",g),R(_)}function E(T){let _=n.get(T);if(_.__webglInit===void 0)return;let N=T.source,O=f.get(N);if(O){let q=O[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(T),Object.keys(O).length===0&&f.delete(N)}n.remove(T)}function C(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let N=T.source,O=f.get(N);delete O[_.__cacheKey],a.memory.textures--}function R(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let q=0;q<_.__webglFramebuffer[O].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[O][q]);else i.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)i.deleteFramebuffer(_.__webglFramebuffer[O]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=T.textures;for(let O=0,q=N.length;O<q;O++){let at=n.get(N[O]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(N[O])}n.remove(T)}let D=0;function B(){D=0}function k(){return D}function P(T){D=T}function F(){let T=D;return T>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){let N=n.get(T);if(T.isVideoTexture&&L(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let O=T.image;if(O===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(N,T,_);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function Q(T,_){let N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ct(N,T,_);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function dt(T,_){let N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ct(N,T,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function nt(T,_){let N=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Xt(N,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}let yt={[Ei]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},ot={[Ye]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},Ut={[id]:i.NEVER,[ld]:i.ALWAYS,[sd]:i.LESS,[Rl]:i.LEQUAL,[rd]:i.EQUAL,[Cl]:i.GEQUAL,[ad]:i.GREATER,[od]:i.NOTEQUAL};function Ht(T,_){if(_.type===_n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===$e||_.magFilter===Wo||_.magFilter===na||_.magFilter===Di||_.minFilter===$e||_.minFilter===Wo||_.minFilter===na||_.minFilter===Di)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,yt[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,yt[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,yt[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ot[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ot[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ut[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ye||_.minFilter!==na&&_.minFilter!==Di||_.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function tt(T,_){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",I));let O=_.source,q=f.get(O);q===void 0&&(q={},f.set(O,q));let at=W(_);if(at!==T.__cacheKey){q[at]===void 0&&(q[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),q[at].usedTimes++;let ut=q[T.__cacheKey];ut!==void 0&&(q[T.__cacheKey].usedTimes--,ut.usedTimes===0&&C(_)),T.__cacheKey=at,T.__webglTexture=q[at].texture}return N}function Mt(T,_,N){return Math.floor(Math.floor(T/N)/_)}function ct(T,_,N,O){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,O,_.data);else{at.sort((Ft,wt)=>Ft.start-wt.start);let ut=0;for(let Ft=1;Ft<at.length;Ft++){let wt=at[ut],bt=at[Ft],Yt=wt.start+wt.count,$t=Mt(bt.start,_.width,4),te=Mt(wt.start,_.width,4);bt.start<=Yt+1&&$t===te&&Mt(bt.start+bt.count-1,_.width,4)===$t?wt.count=Math.max(wt.count,bt.start+bt.count-wt.start):(++ut,at[ut]=bt)}at.length=ut+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,wt=at.length;Ft<wt;Ft++){let bt=at[Ft],Yt=Math.floor(bt.start/4),$t=Math.ceil(bt.count/4),te=Yt%_.width,z=Math.floor(Yt/_.width),Tt=$t,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,te,z,Tt,ht,N,O,_.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function Ct(T,_,N){let O=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=i.TEXTURE_3D);let q=tt(T,_),at=_.source;e.bindTexture(O,T.__webglTexture,i.TEXTURE0+N);let ut=n.get(at);if(at.version!==ut.__version||q===!0){if(e.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ht=he.getPrimaries(he.workingColorSpace),st=_.colorSpace===ci?null:he.getPrimaries(_.colorSpace),mt=_.colorSpace===ci||ht===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let et=m(_.image,!1,s.maxTextureSize);et=Dt(_,et);let St=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),wt=v(_.internalFormat,St,Ft,_.normalized,_.colorSpace,_.isVideoTexture);Ht(O,_);let bt,Yt=_.mipmaps,$t=_.isVideoTexture!==!0,te=ut.__version===void 0||q===!0,z=at.dataReady,Tt=A(_,et);if(_.isDepthTexture)wt=w(_.format===Ni,_.type),te&&($t?e.texStorage2D(i.TEXTURE_2D,1,wt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,wt,et.width,et.height,0,St,Ft,null));else if(_.isDataTexture)if(Yt.length>0){$t&&te&&e.texStorage2D(i.TEXTURE_2D,Tt,wt,Yt[0].width,Yt[0].height);for(let ht=0,st=Yt.length;ht<st;ht++)bt=Yt[ht],$t?z&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,St,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,ht,wt,bt.width,bt.height,0,St,Ft,bt.data);_.generateMipmaps=!1}else $t?(te&&e.texStorage2D(i.TEXTURE_2D,Tt,wt,et.width,et.height),z&&ct(_,et,St,Ft)):e.texImage2D(i.TEXTURE_2D,0,wt,et.width,et.height,0,St,Ft,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$t&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,wt,Yt[0].width,Yt[0].height,et.depth);for(let ht=0,st=Yt.length;ht<st;ht++)if(bt=Yt[ht],_.format!==vn)if(St!==null)if($t){if(z)if(_.layerUpdates.size>0){let mt=ah(bt.width,bt.height,_.format,_.type);for(let it of _.layerUpdates){let At=bt.data.subarray(it*mt/bt.data.BYTES_PER_ELEMENT,(it+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,it,bt.width,bt.height,1,St,At)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,et.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,wt,bt.width,bt.height,et.depth,0,bt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,et.depth,St,Ft,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,wt,bt.width,bt.height,et.depth,0,St,Ft,bt.data)}else{$t&&te&&e.texStorage2D(i.TEXTURE_2D,Tt,wt,Yt[0].width,Yt[0].height);for(let ht=0,st=Yt.length;ht<st;ht++)bt=Yt[ht],_.format!==vn?St!==null?$t?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,wt,bt.width,bt.height,0,bt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?z&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,St,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,ht,wt,bt.width,bt.height,0,St,Ft,bt.data)}else if(_.isDataArrayTexture)if($t){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,wt,et.width,et.height,et.depth),z)if(_.layerUpdates.size>0){let ht=ah(et.width,et.height,_.format,_.type);for(let st of _.layerUpdates){let mt=et.data.subarray(st*ht/et.data.BYTES_PER_ELEMENT,(st+1)*ht/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,et.width,et.height,1,St,Ft,mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,St,Ft,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,et.width,et.height,et.depth,0,St,Ft,et.data);else if(_.isData3DTexture)$t?(te&&e.texStorage3D(i.TEXTURE_3D,Tt,wt,et.width,et.height,et.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,St,Ft,et.data)):e.texImage3D(i.TEXTURE_3D,0,wt,et.width,et.height,et.depth,0,St,Ft,et.data);else if(_.isFramebufferTexture){if(te)if($t)e.texStorage2D(i.TEXTURE_2D,Tt,wt,et.width,et.height);else{let ht=et.width,st=et.height;for(let mt=0;mt<Tt;mt++)e.texImage2D(i.TEXTURE_2D,mt,wt,ht,st,0,St,Ft,null),ht>>=1,st>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),et.parentNode!==ht){ht.appendChild(et),d.add(_),ht.onpaint=st=>{let mt=st.changedElements;for(let it of d)mt.includes(it.image)&&(it.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let mt=i.RGBA,it=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,it,At,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if($t&&te){let ht=lt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,wt,ht.width,ht.height)}for(let ht=0,st=Yt.length;ht<st;ht++)bt=Yt[ht],$t?z&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,St,Ft,bt):e.texImage2D(i.TEXTURE_2D,ht,wt,St,Ft,bt);_.generateMipmaps=!1}else if($t){if(te){let ht=lt(et);e.texStorage2D(i.TEXTURE_2D,Tt,wt,ht.width,ht.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ft,et)}else e.texImage2D(i.TEXTURE_2D,0,wt,St,Ft,et);p(_)&&M(O),ut.__version=at.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Xt(T,_,N){if(_.image.length!==6)return;let O=tt(T,_),q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);let at=n.get(q);if(q.version!==at.__version||O===!0){e.activeTexture(i.TEXTURE0+N);let ut=he.getPrimaries(he.workingColorSpace),Y=_.colorSpace===ci?null:he.getPrimaries(_.colorSpace),et=_.colorSpace===ci||ut===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let St=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,wt=[];for(let it=0;it<6;it++)!St&&!Ft?wt[it]=m(_.image[it],!0,s.maxCubemapSize):wt[it]=Ft?_.image[it].image:_.image[it],wt[it]=Dt(_,wt[it]);let bt=wt[0],Yt=r.convert(_.format,_.colorSpace),$t=r.convert(_.type),te=v(_.internalFormat,Yt,$t,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,Tt=at.__version===void 0||O===!0,ht=q.dataReady,st=A(_,bt);Ht(i.TEXTURE_CUBE_MAP,_);let mt;if(St){z&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,te,bt.width,bt.height);for(let it=0;it<6;it++){mt=wt[it].mipmaps;for(let At=0;At<mt.length;At++){let Rt=mt[At];_.format!==vn?Yt!==null?z?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,Rt.width,Rt.height,Yt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,te,Rt.width,Rt.height,0,Rt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,Rt.width,Rt.height,Yt,$t,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,te,Rt.width,Rt.height,0,Yt,$t,Rt.data)}}}else{if(mt=_.mipmaps,z&&Tt){mt.length>0&&st++;let it=lt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,te,it.width,it.height)}for(let it=0;it<6;it++)if(Ft){z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt[it].width,wt[it].height,Yt,$t,wt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,wt[it].width,wt[it].height,0,Yt,$t,wt[it].data);for(let At=0;At<mt.length;At++){let de=mt[At].image[it].image;z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,de.width,de.height,Yt,$t,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,te,de.width,de.height,0,Yt,$t,de.data)}}else{z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Yt,$t,wt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,Yt,$t,wt[it]);for(let At=0;At<mt.length;At++){let Rt=mt[At];z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,Yt,$t,Rt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,te,Yt,$t,Rt.image[it])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),at.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Bt(T,_,N,O,q,at){let ut=r.convert(N.format,N.colorSpace),Y=r.convert(N.type),et=v(N.internalFormat,ut,Y,N.normalized,N.colorSpace),St=n.get(_),Ft=n.get(N);if(Ft.__renderTarget=_,!St.__hasExternalTextures){let wt=Math.max(1,_.width>>at),bt=Math.max(1,_.height>>at);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,at,et,wt,bt,_.depth,0,ut,Y,null):e.texImage2D(q,at,et,wt,bt,0,ut,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,q,Ft.__webglTexture,0,K(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,q,Ft.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(T,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let O=_.depthTexture,q=O&&O.isDepthTexture?O.type:null,at=w(_.stencilBuffer,q),ut=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K(_),at,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,K(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,T)}else{let O=_.textures;for(let q=0;q<O.length;q++){let at=O[q],ut=r.convert(at.format,at.colorSpace),Y=r.convert(at.type),et=v(at.internalFormat,ut,Y,at.normalized,at.colorSpace);Et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K(_),et,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,K(_),et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,et,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(T,_,N){let O=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,_.depthTexture);let St=r.convert(_.depthTexture.format),Ft=r.convert(_.depthTexture.type),wt;_.depthTexture.format===zn?wt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ni&&(wt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,wt,_.width,_.height,0,St,Ft,null)}}else j(_.depthTexture,0);let at=q.__webglTexture,ut=K(_),Y=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,et=_.depthTexture.format===Ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===zn)Et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Y,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,et,Y,at,0);else if(_.depthTexture.format===Ni)Et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Y,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,et,Y,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(T){let _=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let O=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){let q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",q)};O.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=O}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let O=0;O<6;O++)qt(_.__webglFramebuffer[O],T,O);else{let O=T.texture.mipmaps;O&&O.length>0?qt(_.__webglFramebuffer[0],T,0):qt(_.__webglFramebuffer,T,0)}else if(N){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=i.createRenderbuffer(),ee(_.__webglDepthbuffer[O],T,!1);else{let q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,at)}}else{let O=T.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ee(_.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(T,_,N){let O=n.get(T);_!==void 0&&Bt(O.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ft(T)}function pt(T){let _=T.texture,N=n.get(T),O=n.get(_);T.addEventListener("dispose",g);let q=T.textures,at=T.isWebGLCubeRenderTarget===!0,ut=q.length>1;if(ut||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=_.version,a.memory.textures++),at){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let et=0;et<_.mipmaps.length;et++)N.__webglFramebuffer[Y][et]=i.createFramebuffer()}else N.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)N.__webglFramebuffer[Y]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ut)for(let Y=0,et=q.length;Y<et;Y++){let St=n.get(q[Y]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Et(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let et=q[Y];N.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let St=r.convert(et.format,et.colorSpace),Ft=r.convert(et.type),wt=v(et.internalFormat,St,Ft,et.normalized,et.colorSpace,T.isXRRenderTarget===!0),bt=K(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,wt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Bt(N.__webglFramebuffer[Y][et],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et);else Bt(N.__webglFramebuffer[Y],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Y=0,et=q.length;Y<et;Y++){let St=q[Y],Ft=n.get(St),wt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(wt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Ft.__webglTexture),Ht(wt,St),Bt(N.__webglFramebuffer,T,St,i.COLOR_ATTACHMENT0+Y,wt,0),p(St)&&M(wt)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,O.__webglTexture),Ht(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Bt(N.__webglFramebuffer[et],T,_,i.COLOR_ATTACHMENT0,Y,et);else Bt(N.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&M(Y),e.unbindTexture()}T.depthBuffer&&ft(T)}function V(T){let _=T.textures;for(let N=0,O=_.length;N<O;N++){let q=_[N];if(p(q)){let at=S(T),ut=n.get(q).__webglTexture;e.bindTexture(at,ut),M(at),e.unbindTexture()}}}let rt=[],vt=[];function xt(T){if(T.samples>0){if(Et(T)===!1){let _=T.textures,N=T.width,O=T.height,q=i.COLOR_BUFFER_BIT,at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(T),Y=_.length>1;if(Y)for(let St=0;St<_.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let et=T.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let St=0;St<_.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[St]);let Ft=n.get(_[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,N,O,0,0,N,O,q,i.NEAREST),l===!0&&(rt.length=0,vt.length=0,rt.push(i.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(at),vt.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let St=0;St<_.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,ut.__webglColorRenderbuffer[St]);let Ft=n.get(_[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function K(T){return Math.min(s.maxSamples,T.samples)}function Et(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(T){let _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Dt(T,_){let N=T.colorSpace,O=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==vr&&N!==ci&&(he.getTransfer(N)===me?(O!==vn||q!==an)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",N)),_}function lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=dt,this.setTextureCube=nt,this.rebindTextures=gt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function C_(i,t){function e(n,s=ci){let r,a=he.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===vn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===Qo||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl||n===rl||n===al||n===oa||n===ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rl)return r.COMPRESSED_R11_EAC;if(n===al)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===bl||n===El)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===wl||n===la||n===Al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:P_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,x=null,y=typeof XRWebGLBinding<"u",m=new Th,p={},M=e.getContextAttributes(),S=null,v=null,w=[],A=[],I=new _t,g=null,E=new Je;E.viewport=new Ie;let C=new Je;C.viewport=new Ie;let R=[E,C],D=new Bo,B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Mt=w[tt];return Mt===void 0&&(Mt=new Ds,w[tt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let Mt=w[tt];return Mt===void 0&&(Mt=new Ds,w[tt]=Mt),Mt.getGripSpace()},this.getHand=function(tt){let Mt=w[tt];return Mt===void 0&&(Mt=new Ds,w[tt]=Mt),Mt.getHandSpace()};function P(tt){let Mt=A.indexOf(tt.inputSource);if(Mt===-1)return;let ct=w[Mt];ct!==void 0&&(ct.update(tt.inputSource,tt.frame,c||a),ct.dispatchEvent({type:tt.type,data:tt.inputSource}))}function F(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",W);for(let tt=0;tt<w.length;tt++){let Mt=A[tt];Mt!==null&&(A[tt]=null,w[tt].disconnect(Mt))}B=null,k=null,m.reset();for(let tt in p)delete p[tt];t.setRenderTarget(S),f=null,h=null,d=null,s=null,v=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",F),s.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Ct=null,Xt=null;M.depth&&(Xt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=M.stencil?Ni:zn,Ct=M.stencil?Ws:Pn);let Bt={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Bt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new un(h.textureWidth,h.textureHeight,{format:vn,type:an,depthTexture:new li(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new un(f.framebufferWidth,f.framebufferHeight,{format:vn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(tt){for(let Mt=0;Mt<tt.removed.length;Mt++){let ct=tt.removed[Mt],Ct=A.indexOf(ct);Ct>=0&&(A[Ct]=null,w[Ct].disconnect(ct))}for(let Mt=0;Mt<tt.added.length;Mt++){let ct=tt.added[Mt],Ct=A.indexOf(ct);if(Ct===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=A.length){A.push(ct),Ct=Bt;break}else if(A[Bt]===null){A[Bt]=ct,Ct=Bt;break}if(Ct===-1)break}let Xt=w[Ct];Xt&&Xt.connect(ct)}}let j=new U,Q=new U;function dt(tt,Mt,ct){j.setFromMatrixPosition(Mt.matrixWorld),Q.setFromMatrixPosition(ct.matrixWorld);let Ct=j.distanceTo(Q),Xt=Mt.projectionMatrix.elements,Bt=ct.projectionMatrix.elements,ee=Xt[14]/(Xt[10]-1),qt=Xt[14]/(Xt[10]+1),ft=(Xt[9]+1)/Xt[5],gt=(Xt[9]-1)/Xt[5],pt=(Xt[8]-1)/Xt[0],V=(Bt[8]+1)/Bt[0],rt=ee*pt,vt=ee*V,xt=Ct/(-pt+V),K=xt*-pt;if(Mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(K),tt.translateZ(xt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Xt[10]===-1)tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{let Et=ee+xt,L=qt+xt,Dt=rt-K,lt=vt+(Ct-K),T=ft*qt/L*Et,_=gt*qt/L*Et;tt.projectionMatrix.makePerspective(Dt,lt,T,_,Et,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function nt(tt,Mt){Mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let Mt=tt.near,ct=tt.far;m.texture!==null&&(m.depthNear>0&&(Mt=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),D.near=C.near=E.near=Mt,D.far=C.far=E.far=ct,(B!==D.near||k!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,k=D.far),D.layers.mask=tt.layers.mask|6,E.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;let Ct=tt.parent,Xt=D.cameras;nt(D,Ct);for(let Bt=0;Bt<Xt.length;Bt++)nt(Xt[Bt],Ct);Xt.length===2?dt(D,E,C):D.projectionMatrix.copy(E.projectionMatrix),yt(tt,D,Ct)};function yt(tt,Mt,ct){ct===null?tt.matrix.copy(Mt.matrixWorld):(tt.matrix.copy(ct.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Is*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(tt){return p[tt]};let ot=null;function Ut(tt,Mt){if(u=Mt.getViewerPose(c||a),x=Mt,u!==null){let ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ct=!1;ct.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let qt=0;qt<ct.length;qt++){let ft=ct[qt],gt=null;if(f!==null)gt=f.getViewport(ft);else{let V=d.getViewSubImage(h,ft);gt=V.viewport,qt===0&&(t.setRenderTargetTextures(v,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(v))}let pt=R[qt];pt===void 0&&(pt=new Je,pt.layers.enable(qt),pt.viewport=new Ie,R[qt]=pt),pt.matrix.fromArray(ft.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ft.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(gt.x,gt.y,gt.width,gt.height),qt===0&&(D.matrix.copy(pt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(pt)}let Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let qt=d.getDepthInformation(ct[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(Xt&&Xt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let qt=0;qt<ct.length;qt++){let ft=ct[qt].camera;if(ft){let gt=p[ft];gt||(gt=new Nr,p[ft]=gt);let pt=d.getCameraImage(ft);gt.sourceTexture=pt}}}}for(let ct=0;ct<w.length;ct++){let Ct=A[ct],Xt=w[ct];Ct!==null&&Xt!==void 0&&Xt.update(Ct,Mt,c||a)}ot&&ot(tt,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),x=null}let Ht=new Gd;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(tt){ot=tt},this.dispose=function(){}}},L_=new ge,Jd=new ne;Jd.set(-1,0,0,0,1,0,0,0,1);function D_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function N_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){let A=w.program;n.uniformBlockBinding(v,A)}function c(v,w){let A=s[v.id];A===void 0&&(m(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",M));let I=w.program;n.updateUBOMapping(v,I);let g=t.render.frame;r[v.id]!==g&&(h(v),r[v.id]=g)}function u(v){let w=d();v.__bindingPointIndex=w;let A=i.createBuffer(),I=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let w=s[v.id],A=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let g=0,E=A.length;g<E;g++){let C=A[g];if(Array.isArray(C))for(let R=0,D=C.length;R<D;R++)f(C[R],g,R,I);else f(C,g,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,w,A,I){if(y(v,w,A,I)===!0){let g=v.__offset,E=v.value;if(Array.isArray(E)){let C=0;for(let R=0;R<E.length;R++){let D=E[R],B=p(D);x(D,v.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function x(v,w,A){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,A)}function y(v,w,A,I){let g=v.value,E=w+"_"+A;if(I[E]===void 0)return typeof g=="number"||typeof g=="boolean"?I[E]=g:ArrayBuffer.isView(g)?I[E]=g.slice():I[E]=g.clone(),!0;{let C=I[E];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return I[E]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function m(v){let w=v.uniforms,A=0,I=16;for(let E=0,C=w.length;E<C;E++){let R=Array.isArray(w[E])?w[E]:[w[E]];for(let D=0,B=R.length;D<B;D++){let k=R[D],P=Array.isArray(k.value)?k.value:[k.value];for(let F=0,W=P.length;F<W;F++){let j=P[F],Q=p(j),dt=A%I,nt=dt%Q.boundary,yt=dt+nt;A+=nt,yt!==0&&I-yt<Q.storage&&(A+=I-yt),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=Q.storage}}}let g=A%I;return g>0&&(A+=I-g),v.__size=A,v.__cache={},this}function p(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",v),w}function M(v){let w=v.target;w.removeEventListener("dispose",M);let A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function S(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function F_(){return Zn===null&&(Zn=new Cr(U_,16,16,Ui,Yn),Zn.name="DFG_LUT",Zn.minFilter=$e,Zn.magFilter=$e,Zn.wrapS=Fn,Zn.wrapT=Fn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var Nl=class{constructor(t={}){let{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=an}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let y=f,m=new Set([Ko,$o,Jo]),p=new Set([an,Pn,Gs,Ws,qo,Yo]),M=new Uint32Array(4),S=new Int32Array(4),v=new U,w=null,A=null,I=[],g=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,D=null,B=null,k=null,P=null;this._outputColorSpace=Ve;let F=0,W=0,j=null,Q=-1,dt=null,nt=new Ie,yt=new Ie,ot=null,Ut=new kt(0),Ht=0,tt=e.width,Mt=e.height,ct=1,Ct=null,Xt=null,Bt=new Ie(0,0,tt,Mt),ee=new Ie(0,0,tt,Mt),qt=!1,ft=new Us,gt=!1,pt=!1,V=new ge,rt=new U,vt=new Ie,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function Et(){return j===null?ct:1}let L=n;function Dt(b,X){return e.getContext(b,X)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ze,!1),L===null){let X="webgl2";if(L=Dt(X,b),L===null)throw Dt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Qt("WebGLRenderer: "+b.message),b}let lt,T,_,N,O,q,at,ut,Y,et,St,Ft,wt,bt,Yt,$t,te,z,Tt,ht,st,mt,it;function At(){lt=new Gg(L),lt.init(),st=new C_(L,lt),T=new Ug(L,lt,t,st),_=new A_(L,lt),T.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),B=L.createFramebuffer(),k=L.createFramebuffer(),P=L.createFramebuffer(),N=new qg(L),O=new f_,q=new R_(L,lt,_,O,T,st,N),at=new Vg(C),ut=new $p(L),mt=new Dg(L,ut),Y=new Wg(L,ut,N,mt),et=new Zg(L,Y,ut,mt,N),z=new Yg(L,T,q),Yt=new Fg(O),St=new d_(C,at,lt,T,mt,Yt),Ft=new D_(C,O),wt=new m_,bt=new M_(lt),te=new Lg(C,at,_,et,x,l),$t=new w_(C,et,T),it=new N_(L,N,T,_),Tt=new Ng(L,lt,N),ht=new Xg(L,lt,N),N.programs=St.programs,C.capabilities=T,C.extensions=lt,C.properties=O,C.renderLists=wt,C.shadowMap=$t,C.state=_,C.info=N}At(),y!==an&&(E=new $g(y,e.width,e.height,o,s,r));let Rt=new wh(C,L);this.xr=Rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=lt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=lt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(b){b!==void 0&&(ct=b,this.setSize(tt,Mt,!1))},this.getSize=function(b){return b.set(tt,Mt)},this.setSize=function(b,X,$=!0){if(Rt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=b,Mt=X,e.width=Math.floor(b*ct),e.height=Math.floor(X*ct),$===!0&&(e.style.width=b+"px",e.style.height=X+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(tt*ct,Mt*ct).floor()},this.setDrawingBufferSize=function(b,X,$){tt=b,Mt=X,ct=$,e.width=Math.floor(b*$),e.height=Math.floor(X*$),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(y===an){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(Bt)},this.setViewport=function(b,X,$,Z){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,X,$,Z),_.viewport(nt.copy(Bt).multiplyScalar(ct).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,X,$,Z){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,X,$,Z),_.scissor(yt.copy(ee).multiplyScalar(ct).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){_.setScissorTest(qt=b)},this.setOpaqueSort=function(b){Ct=b},this.setTransparentSort=function(b){Xt=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,$=!0){let Z=0;if(b){let J=!1;if(j!==null){let Nt=j.texture.format;J=m.has(Nt)}if(J){let Nt=j.texture.type,zt=p.has(Nt),Lt=te.getClearColor(),Vt=te.getClearAlpha(),Zt=Lt.r,ae=Lt.g,le=Lt.b;zt?(M[0]=Zt,M[1]=ae,M[2]=le,M[3]=Vt,L.clearBufferuiv(L.COLOR,0,M)):(S[0]=Zt,S[1]=ae,S[2]=le,S[3]=Vt,L.clearBufferiv(L.COLOR,0,S))}else Z|=L.COLOR_BUFFER_BIT}X&&(Z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),te.dispose(),wt.dispose(),bt.dispose(),O.dispose(),at.dispose(),et.dispose(),mt.dispose(),it.dispose(),St.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",kh),Rt.removeEventListener("sessionend",Hh),Vi.stop()};function de(b){b.preventDefault(),Sr("WebGLRenderer: Context Lost."),R=!0}function _e(){Sr("WebGLRenderer: Context Restored."),R=!1;let b=N.autoReset,X=$t.enabled,$=$t.autoUpdate,Z=$t.needsUpdate,J=$t.type;At(),N.autoReset=b,$t.enabled=X,$t.autoUpdate=$,$t.needsUpdate=Z,$t.type=J}function ze(b){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){let X=b.target;X.removeEventListener("dispose",Re),Sn(X)}function Sn(b){os(b),O.remove(b)}function os(b){let X=O.get(b).programs;X!==void 0&&(X.forEach(function($){St.releaseProgram($)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,$,Z,J,Nt){X===null&&(X=xt);let zt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Lt=Tf(b,X,$,Z,J);_.setMaterial(Z,zt);let Vt=$.index,Zt=1;if(Z.wireframe===!0){if(Vt=Y.getWireframeAttribute($),Vt===void 0)return;Zt=2}let ae=$.drawRange,le=$.attributes.position,Jt=ae.start*Zt,Me=(ae.start+ae.count)*Zt;Nt!==null&&(Jt=Math.max(Jt,Nt.start*Zt),Me=Math.min(Me,(Nt.start+Nt.count)*Zt)),Vt!==null?(Jt=Math.max(Jt,0),Me=Math.min(Me,Vt.count)):le!=null&&(Jt=Math.max(Jt,0),Me=Math.min(Me,le.count));let Oe=Me-Jt;if(Oe<0||Oe===1/0)return;mt.setup(J,Z,Lt,$,Vt);let Ne,Se=Tt;if(Vt!==null&&(Ne=ut.get(Vt),Se=ht,Se.setIndex(Ne)),J.isMesh)Z.wireframe===!0?(_.setLineWidth(Z.wireframeLinewidth*Et()),Se.setMode(L.LINES)):Se.setMode(L.TRIANGLES);else if(J.isLine){let je=Z.linewidth;je===void 0&&(je=1),_.setLineWidth(je*Et()),J.isLineSegments?Se.setMode(L.LINES):J.isLineLoop?Se.setMode(L.LINE_LOOP):Se.setMode(L.LINE_STRIP)}else J.isPoints?Se.setMode(L.POINTS):J.isSprite&&Se.setMode(L.TRIANGLES);if(J.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let je=J._multiDrawStarts,Ot=J._multiDrawCounts,ln=J._multiDrawCount,fe=Vt?ut.get(Vt).bytesPerElement:1,mn=O.get(Z).currentProgram.getUniforms();for(let Dn=0;Dn<ln;Dn++)mn.setValue(L,"_gl_DrawID",Dn),Se.render(je[Dn]/fe,Ot[Dn])}else if(J.isInstancedMesh)Se.renderInstances(Jt,Oe,J.count);else if($.isInstancedBufferGeometry){let je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ot=Math.min($.instanceCount,je);Se.renderInstances(Jt,Oe,Ot)}else Se.render(Jt,Oe)};function ls(b,X,$){b.transparent===!0&&b.side===He&&b.forceSinglePass===!1?(b.side=Ze,b.needsUpdate=!0,_a(b,X,$),b.side=ri,b.needsUpdate=!0,_a(b,X,$),b.side=He):_a(b,X,$)}this.compile=function(b,X,$=null){$===null&&($=b),A=bt.get($),A.init(X),g.push(A),$.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),b!==$&&b.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),A.setupLights();let Z=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Nt=J.material;if(Nt)if(Array.isArray(Nt))for(let zt=0;zt<Nt.length;zt++){let Lt=Nt[zt];ls(Lt,$,J),Z.add(Lt)}else ls(Nt,$,J),Z.add(Nt)}),A=g.pop(),Z},this.compileAsync=function(b,X,$=null){let Z=this.compile(b,X,$);return new Promise(J=>{function Nt(){if(Z.forEach(function(zt){O.get(zt).currentProgram.isReady()&&Z.delete(zt)}),Z.size===0){J(b);return}setTimeout(Nt,10)}lt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Hi=null;function bf(b){Hi&&Hi(b)}function kh(){Vi.stop()}function Hh(){Vi.start()}let Vi=new Gd;Vi.setAnimationLoop(bf),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){Hi=b,Rt.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},Rt.addEventListener("sessionstart",kh),Rt.addEventListener("sessionend",Hh),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(b,X);let $=Rt.enabled===!0&&Rt.isPresenting===!0,Z=E!==null&&(j===null||$)&&E.begin(C,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(X),X=Rt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,X,j),A=bt.get(b,g.length),A.init(X),A.state.textureUnits=q.getTextureUnits(),g.push(A),V.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ft.setFromProjectionMatrix(V,An,X.reversedDepth),pt=this.localClippingEnabled,gt=Yt.init(this.clippingPlanes,pt),w=wt.get(b,I.length),w.init(),I.push(w),Rt.enabled===!0&&Rt.isPresenting===!0){let zt=C.xr.getDepthSensingMesh();zt!==null&&Jl(zt,X,-1/0,C.sortObjects)}Jl(b,X,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(Ct,Xt,X.reversedDepth),K=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,K&&te.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&Yt.beginShadows();let J=A.state.shadowsArray;if($t.render(J,b,X),gt===!0&&Yt.endShadows(),(Z&&E.hasRenderPass())===!1){let zt=w.opaque,Lt=w.transmissive;if(A.setupLights(),X.isArrayCamera){let Vt=X.cameras;if(Lt.length>0)for(let Zt=0,ae=Vt.length;Zt<ae;Zt++){let le=Vt[Zt];Gh(zt,Lt,b,le)}K&&te.render(b);for(let Zt=0,ae=Vt.length;Zt<ae;Zt++){let le=Vt[Zt];Vh(w,b,le,le.viewport)}}else Lt.length>0&&Gh(zt,Lt,b,X),K&&te.render(b),Vh(w,b,X)}j!==null&&W===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),Z&&E.end(C),b.isScene===!0&&b.onAfterRender(C,b,X),mt.resetDefaultState(),Q=-1,dt=null,g.pop(),g.length>0?(A=g[g.length-1],q.setTextureUnits(A.state.textureUnits),gt===!0&&Yt.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?w=I[I.length-1]:w=null,D!==null&&D.renderEnd()};function Jl(b,X,$,Z){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ft.intersectsSprite(b)){Z&&vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(V);let zt=et.update(b),Lt=b.material;Lt.visible&&w.push(b,zt,Lt,$,vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ft.intersectsObject(b))){let zt=et.update(b),Lt=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),vt.copy(b.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),vt.copy(zt.boundingSphere.center)),vt.applyMatrix4(b.matrixWorld).applyMatrix4(V)),Array.isArray(Lt)){let Vt=zt.groups;for(let Zt=0,ae=Vt.length;Zt<ae;Zt++){let le=Vt[Zt],Jt=Lt[le.materialIndex];Jt&&Jt.visible&&w.push(b,zt,Jt,$,vt.z,le)}}else Lt.visible&&w.push(b,zt,Lt,$,vt.z,null)}}let Nt=b.children;for(let zt=0,Lt=Nt.length;zt<Lt;zt++)Jl(Nt[zt],X,$,Z)}function Vh(b,X,$,Z){let{opaque:J,transmissive:Nt,transparent:zt}=b;A.setupLightsView($),gt===!0&&Yt.setGlobalState(C.clippingPlanes,$),Z&&_.viewport(nt.copy(Z)),J.length>0&&xa(J,X,$),Nt.length>0&&xa(Nt,X,$),zt.length>0&&xa(zt,X,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Gh(b,X,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Z.id]===void 0){let Jt=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Z.id]=new un(1,1,{generateMipmaps:!0,type:Jt?Yn:an,minFilter:Di,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Nt=A.state.transmissionRenderTarget[Z.id],zt=Z.viewport||nt;Nt.setSize(zt.z*C.transmissionResolutionScale,zt.w*C.transmissionResolutionScale);let Lt=C.getRenderTarget(),Vt=C.getActiveCubeFace(),Zt=C.getActiveMipmapLevel();C.setRenderTarget(Nt),C.getClearColor(Ut),Ht=C.getClearAlpha(),Ht<1&&C.setClearColor(16777215,.5),C.clear(),K&&te.render($);let ae=C.toneMapping;C.toneMapping=Cn;let le=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),A.setupLightsView(Z),gt===!0&&Yt.setGlobalState(C.clippingPlanes,Z),xa(b,$,Z),q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Me=0,Oe=X.length;Me<Oe;Me++){let Ne=X[Me],{object:Se,geometry:je,material:Ot,group:ln}=Ne;if(Ot.side===He&&Se.layers.test(Z.layers)){let fe=Ot.side;Ot.side=Ze,Ot.needsUpdate=!0,Wh(Se,$,Z,je,Ot,ln),Ot.side=fe,Ot.needsUpdate=!0,Jt=!0}}Jt===!0&&(q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt))}C.setRenderTarget(Lt,Vt,Zt),C.setClearColor(Ut,Ht),le!==void 0&&(Z.viewport=le),C.toneMapping=ae}function xa(b,X,$){let Z=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Nt=b.length;J<Nt;J++){let zt=b[J],{object:Lt,geometry:Vt,group:Zt}=zt,ae=zt.material;ae.allowOverride===!0&&Z!==null&&(ae=Z),Lt.layers.test($.layers)&&Wh(Lt,X,$,Vt,ae,Zt)}}function Wh(b,X,$,Z,J,Nt){b.onBeforeRender(C,X,$,Z,J,Nt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(C,X,$,Z,b,Nt),J.transparent===!0&&J.side===He&&J.forceSinglePass===!1?(J.side=Ze,J.needsUpdate=!0,C.renderBufferDirect($,X,Z,J,b,Nt),J.side=ri,J.needsUpdate=!0,C.renderBufferDirect($,X,Z,J,b,Nt),J.side=He):C.renderBufferDirect($,X,Z,J,b,Nt),b.onAfterRender(C,X,$,Z,J,Nt)}function _a(b,X,$){X.isScene!==!0&&(X=xt);let Z=O.get(b),J=A.state.lights,Nt=A.state.shadowsArray,zt=J.state.version,Lt=St.getParameters(b,J.state,Nt,X,$,A.state.lightProbeGridArray),Vt=St.getProgramCacheKey(Lt),Zt=Z.programs;Z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,Z.fog=X.fog;let ae=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Z.envMap=at.get(b.envMap||Z.environment,ae),Z.envMapRotation=Z.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",Re),Zt=new Map,Z.programs=Zt);let le=Zt.get(Vt);if(le!==void 0){if(Z.currentProgram===le&&Z.lightsStateVersion===zt)return qh(b,Lt),le}else Lt.uniforms=St.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,$,Lt),b.onBeforeCompile(Lt,C),le=St.acquireProgram(Lt,Vt),Zt.set(Vt,le),Z.uniforms=Lt.uniforms;let Jt=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Jt.clippingPlanes=Yt.uniform),qh(b,Lt),Z.needsLights=Af(b),Z.lightsStateVersion=zt,Z.needsLights&&(Jt.ambientLightColor.value=J.state.ambient,Jt.lightProbe.value=J.state.probe,Jt.directionalLights.value=J.state.directional,Jt.directionalLightShadows.value=J.state.directionalShadow,Jt.spotLights.value=J.state.spot,Jt.spotLightShadows.value=J.state.spotShadow,Jt.rectAreaLights.value=J.state.rectArea,Jt.ltc_1.value=J.state.rectAreaLTC1,Jt.ltc_2.value=J.state.rectAreaLTC2,Jt.pointLights.value=J.state.point,Jt.pointLightShadows.value=J.state.pointShadow,Jt.hemisphereLights.value=J.state.hemi,Jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Jt.spotLightMatrix.value=J.state.spotLightMatrix,Jt.spotLightMap.value=J.state.spotLightMap,Jt.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=A.state.lightProbeGridArray.length>0,Z.currentProgram=le,Z.uniformsList=null,le}function Xh(b){if(b.uniformsList===null){let X=b.currentProgram.getUniforms();b.uniformsList=qs.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function qh(b,X){let $=O.get(b);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function Ef(b,X){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(X.matrixWorld);for(let $=0,Z=b.length;$<Z;$++){let J=b[$];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function Tf(b,X,$,Z,J){X.isScene!==!0&&(X=xt),q.resetTextureUnits();let Nt=X.fog,zt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?X.environment:null,Lt=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:he.workingColorSpace,Vt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Zt=at.get(Z.envMap||zt,Vt),ae=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,le=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Jt=!!$.morphAttributes.position,Me=!!$.morphAttributes.normal,Oe=!!$.morphAttributes.color,Ne=Cn;Z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=C.toneMapping);let Se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,je=Se!==void 0?Se.length:0,Ot=O.get(Z),ln=A.state.lights;if(gt===!0&&(pt===!0||b!==dt)){let Te=b===dt&&Z.id===Q;Yt.setState(Z,b,Te)}let fe=!1;Z.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ln.state.version||Ot.outputColorSpace!==Lt||J.isBatchedMesh&&Ot.batching===!1||!J.isBatchedMesh&&Ot.batching===!0||J.isBatchedMesh&&Ot.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ot.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ot.instancing===!1||!J.isInstancedMesh&&Ot.instancing===!0||J.isSkinnedMesh&&Ot.skinning===!1||!J.isSkinnedMesh&&Ot.skinning===!0||J.isInstancedMesh&&Ot.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ot.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ot.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ot.instancingMorph===!1&&J.morphTexture!==null||Ot.envMap!==Zt||Z.fog===!0&&Ot.fog!==Nt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Yt.numPlanes||Ot.numIntersection!==Yt.numIntersection)||Ot.vertexAlphas!==ae||Ot.vertexTangents!==le||Ot.morphTargets!==Jt||Ot.morphNormals!==Me||Ot.morphColors!==Oe||Ot.toneMapping!==Ne||Ot.morphTargetsCount!==je||!!Ot.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Ot.__version=Z.version);let mn=Ot.currentProgram;fe===!0&&(mn=_a(Z,X,J),D&&Z.isNodeMaterial&&D.onUpdateProgram(Z,mn,Ot));let Dn=!1,pi=!1,cs=!1,be=mn.getUniforms(),Be=Ot.uniforms;if(_.useProgram(mn.program)&&(Dn=!0,pi=!0,cs=!0),Z.id!==Q&&(Q=Z.id,pi=!0),Ot.needsLights){let Te=Ef(A.state.lightProbeGridArray,J);Ot.lightProbeGrid!==Te&&(Ot.lightProbeGrid=Te,pi=!0)}if(Dn||dt!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),be.setValue(L,"projectionMatrix",b.projectionMatrix),be.setValue(L,"viewMatrix",b.matrixWorldInverse);let gi=be.map.cameraPosition;gi!==void 0&&gi.setValue(L,rt.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&be.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),dt!==b&&(dt=b,pi=!0,cs=!0)}if(Ot.needsLights&&(ln.state.directionalShadowMap.length>0&&be.setValue(L,"directionalShadowMap",ln.state.directionalShadowMap,q),ln.state.spotShadowMap.length>0&&be.setValue(L,"spotShadowMap",ln.state.spotShadowMap,q),ln.state.pointShadowMap.length>0&&be.setValue(L,"pointShadowMap",ln.state.pointShadowMap,q)),J.isSkinnedMesh){be.setOptional(L,J,"bindMatrix"),be.setOptional(L,J,"bindMatrixInverse");let Te=J.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),be.setValue(L,"boneTexture",Te.boneTexture,q))}J.isBatchedMesh&&(be.setOptional(L,J,"batchingTexture"),be.setValue(L,"batchingTexture",J._matricesTexture,q),be.setOptional(L,J,"batchingIdTexture"),be.setValue(L,"batchingIdTexture",J._indirectTexture,q),be.setOptional(L,J,"batchingColorTexture"),J._colorsTexture!==null&&be.setValue(L,"batchingColorTexture",J._colorsTexture,q));let mi=$.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&z.update(J,$,mn),(pi||Ot.receiveShadow!==J.receiveShadow)&&(Ot.receiveShadow=J.receiveShadow,be.setValue(L,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&X.environment!==null&&(Be.envMapIntensity.value=X.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=F_()),pi){if(be.setValue(L,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&wf(Be,cs),Nt&&Z.fog===!0&&Ft.refreshFogUniforms(Be,Nt),Ft.refreshMaterialUniforms(Be,Z,ct,Mt,A.state.transmissionRenderTarget[b.id]),Ot.needsLights&&Ot.lightProbeGrid){let Te=Ot.lightProbeGrid;Be.probesSH.value=Te.texture,Be.probesMin.value.copy(Te.boundingBox.min),Be.probesMax.value.copy(Te.boundingBox.max),Be.probesResolution.value.copy(Te.resolution)}qs.upload(L,Xh(Ot),Be,q)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(qs.upload(L,Xh(Ot),Be,q),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&be.setValue(L,"center",J.center),be.setValue(L,"modelViewMatrix",J.modelViewMatrix),be.setValue(L,"normalMatrix",J.normalMatrix),be.setValue(L,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Te=Z.uniformsGroups;for(let gi=0,hs=Te.length;gi<hs;gi++){let Yh=Te[gi];it.update(Yh,mn),it.bind(Yh,mn)}}return mn}function wf(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Af(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,X,$){let Z=O.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),O.get(b.texture).__webglTexture=X,O.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){let $=O.get(b);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,$=0){j=b,F=X,W=$;let Z=null,J=!1,Nt=!1;if(b){let Lt=O.get(b);if(Lt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,Lt.__webglFramebuffer),nt.copy(b.viewport),yt.copy(b.scissor),ot=b.scissorTest,_.viewport(nt),_.scissor(yt),_.setScissorTest(ot),Q=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(Lt.__hasExternalTextures)q.rebindTextures(b,O.get(b.texture).__webglTexture,O.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ae=b.depthTexture;if(Lt.__boundDepthTexture!==ae){if(ae!==null&&O.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}let Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Nt=!0);let Zt=O.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[X])?Z=Zt[X][$]:Z=Zt[X],J=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?Z=O.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?Z=Zt[$]:Z=Zt,nt.copy(b.viewport),yt.copy(b.scissor),ot=b.scissorTest}else nt.copy(Bt).multiplyScalar(ct).floor(),yt.copy(ee).multiplyScalar(ct).floor(),ot=qt;if($!==0&&(Z=B),_.bindFramebuffer(L.FRAMEBUFFER,Z)&&_.drawBuffers(b,Z),_.viewport(nt),_.scissor(yt),_.setScissorTest(ot),J){let Lt=O.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,$)}else if(Nt){let Lt=X;for(let Vt=0;Vt<b.textures.length;Vt++){let Zt=O.get(b.textures[Vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Vt,Zt.__webglTexture,$,Lt)}}else if(b!==null&&$!==0){let Lt=O.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,$)}Q=-1},this.readRenderTargetPixels=function(b,X,$,Z,J,Nt,zt,Lt=0){if(!(b&&b.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=O.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt){_.bindFramebuffer(L.FRAMEBUFFER,Vt);try{let Zt=b.textures[Lt],ae=Zt.format,le=Zt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Lt),!T.textureFormatReadable(ae)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(le)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-Z&&$>=0&&$<=b.height-J&&L.readPixels(X,$,Z,J,st.convert(ae),st.convert(le),Nt)}finally{let Zt=j!==null?O.get(j).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,X,$,Z,J,Nt,zt,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=O.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt)if(X>=0&&X<=b.width-Z&&$>=0&&$<=b.height-J){_.bindFramebuffer(L.FRAMEBUFFER,Vt);let Zt=b.textures[Lt],ae=Zt.format,le=Zt.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Lt),!T.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,Nt.byteLength,L.STREAM_READ),L.readPixels(X,$,Z,J,st.convert(ae),st.convert(le),0);let Me=j!==null?O.get(j).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Me);let Oe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ud(L,Oe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Nt),L.deleteBuffer(Jt),L.deleteSync(Oe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,$=0){let Z=Math.pow(2,-$),J=Math.floor(b.image.width*Z),Nt=Math.floor(b.image.height*Z),zt=X!==null?X.x:0,Lt=X!==null?X.y:0;q.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,zt,Lt,J,Nt),_.unbindTexture()},this.copyTextureToTexture=function(b,X,$=null,Z=null,J=0,Nt=0){let zt,Lt,Vt,Zt,ae,le,Jt,Me,Oe,Ne=b.isCompressedTexture?b.mipmaps[Nt]:b.image;if($!==null)zt=$.max.x-$.min.x,Lt=$.max.y-$.min.y,Vt=$.isBox3?$.max.z-$.min.z:1,Zt=$.min.x,ae=$.min.y,le=$.isBox3?$.min.z:0;else{let Be=Math.pow(2,-J);zt=Math.floor(Ne.width*Be),Lt=Math.floor(Ne.height*Be),b.isDataArrayTexture?Vt=Ne.depth:b.isData3DTexture?Vt=Math.floor(Ne.depth*Be):Vt=1,Zt=0,ae=0,le=0}Z!==null?(Jt=Z.x,Me=Z.y,Oe=Z.z):(Jt=0,Me=0,Oe=0);let Se=st.convert(X.format),je=st.convert(X.type),Ot;X.isData3DTexture?(q.setTexture3D(X,0),Ot=L.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Ot=L.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Ot=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment);let ln=_.getParameter(L.UNPACK_ROW_LENGTH),fe=_.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=_.getParameter(L.UNPACK_SKIP_PIXELS),Dn=_.getParameter(L.UNPACK_SKIP_ROWS),pi=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Ne.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),_.pixelStorei(L.UNPACK_SKIP_ROWS,ae),_.pixelStorei(L.UNPACK_SKIP_IMAGES,le);let cs=b.isDataArrayTexture||b.isData3DTexture,be=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){let Be=O.get(b),mi=O.get(X),Te=O.get(Be.__renderTarget),gi=O.get(mi.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Te.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let hs=0;hs<Vt;hs++)cs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,O.get(b).__webglTexture,J,le+hs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,O.get(X).__webglTexture,Nt,Oe+hs)),L.blitFramebuffer(Zt,ae,zt,Lt,Jt,Me,zt,Lt,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(J!==0||b.isRenderTargetTexture||O.has(b)){let Be=O.get(b),mi=O.get(X);_.bindFramebuffer(L.READ_FRAMEBUFFER,k),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,P);for(let Te=0;Te<Vt;Te++)cs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,J,le+Te):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Be.__webglTexture,J),be?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,mi.__webglTexture,Nt,Oe+Te):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mi.__webglTexture,Nt),J!==0?L.blitFramebuffer(Zt,ae,zt,Lt,Jt,Me,zt,Lt,L.COLOR_BUFFER_BIT,L.NEAREST):be?L.copyTexSubImage3D(Ot,Nt,Jt,Me,Oe+Te,Zt,ae,zt,Lt):L.copyTexSubImage2D(Ot,Nt,Jt,Me,Zt,ae,zt,Lt);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ot,Nt,Jt,Me,Oe,zt,Lt,Vt,Se,je,Ne.data):X.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,Nt,Jt,Me,Oe,zt,Lt,Vt,Se,Ne.data):L.texSubImage3D(Ot,Nt,Jt,Me,Oe,zt,Lt,Vt,Se,je,Ne):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Nt,Jt,Me,zt,Lt,Se,je,Ne.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Nt,Jt,Me,Ne.width,Ne.height,Se,Ne.data):L.texSubImage2D(L.TEXTURE_2D,Nt,Jt,Me,zt,Lt,Se,je,Ne);_.pixelStorei(L.UNPACK_ROW_LENGTH,ln),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe),_.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),_.pixelStorei(L.UNPACK_SKIP_ROWS,Dn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,pi),Nt===0&&X.generateMipmaps&&L.generateMipmap(Ot),_.unbindTexture()},this.initRenderTarget=function(b){O.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){F=0,W=0,j=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var It=(i,t,e)=>({t:"S",L:i,w:t,...e}),re=(i,t,e,n)=>({t:"T",deg:i,r:t,w:e,...n});var $d=(i,t,e)=>({t:"D",gap:i,dy:t,w:e}),O_=(i,t)=>({t:"P",L:i,w:t}),Ah=()=>({t:"G"}),$n=()=>({t:"C"}),B_=()=>({t:"F"}),Rh=(i,t,e,n,s,r)=>[$d(i,t,6.6),O_(e,6.6),$d(n,s,r)],z_=i=>Rh(18,-20,10,25,-8,i),rs=i=>Rh(26,-28,11,31,-16,i),Bl=i=>Rh(32,-45,12,43,-20,i),k_=[It(46,6.4),$n(),re(34,70,6.2),It(30,6.2),re(-44,62,6),It(26,6),re(52,55,5.8),It(26,5.8),...z_(5.8),It(36,5.8),$n(),re(-62,46,5.4),It(30,5.4,{crm:1}),It(18,5.4),re(70,44,5.2),re(-70,44,5),It(10,2.8),It(42,2.6),It(10,5.4),re(54,52,5.4),It(22,5.4),...rs(5.4),It(34,5.4),re(-63,46,5.2),It(16,5.2),$n(),It(30,5.2,{slope:.2}),It(18,5.2),re(66,42,5),It(14,5),...Bl(5),It(34,5),re(66,46,4.8),It(16,4.8),It(26,5),Ah(),It(34,5),re(-46,50,4.9),re(46,50,4.9),It(24,4.8),re(-54,44,4.7),It(12,3.2),It(34,2.6),It(12,4.6),$n(),re(64,40,4.6),It(22,4.6),...rs(4.6),It(34,4.6),re(-59,46,4.5),It(16,4.5),It(26,4.6,{crm:1}),re(-70,38,4.5),re(70,38,4.5),It(20,4.5),$n(),...Bl(4.4),It(34,4.4),re(73,46,4.3),It(16,4.3),It(30,4.3,{slope:.2}),It(14,4.3),re(58,42,4.3),It(18,4.3),...rs(4.3),It(34,4.3),re(-66,46,4.2),It(18,4.2),re(60,40,4.2),It(22,4.2),Ah(),It(26,4.4),re(-48,34,4.2),re(48,34,4.2),re(-48,34,4.1),It(18,4.1),re(64,33,4),It(14,4),$n(),...rs(4),It(34,4),re(-61,46,3.9),It(16,3.9),It(10,2.8),It(30,2.4),It(10,3.8),$n(),re(60,32,3.8),re(-60,32,3.7),It(18,3.7),...Bl(3.7),It(34,3.7),re(66,46,3.6),It(16,3.6),It(28,3.6,{slope:.19,crm:1}),It(14,3.6),re(-68,32,3.6),re(68,32,3.6),It(14,3.6),$n(),...rs(3.6),It(34,3.6),re(-69,46,3.6),It(18,3.6),re(-54,34,3.5),It(22,3.5),Ah(),It(28,4),re(-60,36,3.8),It(14,3.8),re(60,36,3.6),It(12,2.6),It(34,2.2),It(10,3.8),...rs(3.8),It(34,3.8),re(-63,46,3.7),It(16,3.7),$n(),re(70,34,3.5),It(16,3.5),...Bl(3.5),It(34,3.5),re(73,46,3.4),It(16,3.4),It(30,3.4,{slope:.2,crm:1}),It(14,3.4),re(-59,46,3.4),It(10,2.5),It(26,2.2),It(8,3.4),$n(),...rs(3.3),It(34,3.3),re(-66,46,3.3),It(18,3.3),re(73,46,3.2),It(16,3.2),re(-70,38,3.2),It(24,3.2),re(50,52,3.2),It(60,3.2),B_(),It(60,14)];function zl(i=k_){let t=[],e=[],n=[],s=[],r=[],a=[],o=[],l=[],c=[],u=[],d=.065,h=0,f=[],x=[],y=[],m=0,p=0,M=0,S=0,v=i[0].w,w=0,A=-1,I=(P,F=0)=>{c.push(d),u.push(h),l.push(F),t.push(m),e.push(p),n.push(S),s.push(M),r.push((v*1.15+.5)/2),a.push(P?1:0),o.push(w)};I(1);let g=0;for(let P of i){if(P.t==="G"){f.push(t.length-1),w++,o[o.length-1]=w-1;continue}if(P.t==="C"){x.push(t.length-1);continue}if(P.t==="F"){A=t.length-1;continue}let F=P.t==="T"?Math.abs(P.deg)*Math.PI/180*P.r:P.t==="D"?P.gap:P.L;P.t==="P"&&(l[l.length-1]=1),d=P.slope??.065,h=P.crm?1:0;let W=Math.max(1,Math.round(F/1.5)),j=v,Q=P.w,dt=P.t==="T"?Math.sign(P.deg)*(Math.abs(P.deg)*Math.PI/180)/W:0;for(let nt=1;nt<=W;nt++){let yt=M+dt*.5;m+=Math.sin(yt)*1.5,p+=Math.cos(yt)*1.5,M+=dt,S-=d*1.5;let ot=nt/W;v=j+(Q-j)*ot,P.t==="D"&&nt===W?(S+=P.dy,I(1),y.push({at:t.length-1,dy:P.dy})):I(P.t!=="D",P.t==="P"?1:0)}P.t}let E=t.length,C=P=>Math.sin(s[P]),R=P=>Math.cos(s[P]),D=[];for(let P=1;P<E;P++)if(a[P-1]&&!a[P]){let F=P;for(;F<E&&!a[F];)F++;D.push({from:P-1,to:F})}let B=P=>{let F=0;for(let W of f)P>W&&F++;return F};for(let P=0;P<E;P++)o[P]=B(P);for(let P=0;P<E;P++)o[P]===2&&r[P]<2.5&&(r[P]+=.12);for(let P=0;P<E;P++)o[P]===2&&(r[P]+=.1);let k=[{i:4}].concat(x.map(P=>({i:P}))).concat(f.map(P=>({i:P+3}))).sort((P,F)=>P.i-F.i);return{n:E,X:Float32Array.from(t),Z:Float32Array.from(e),Y:Float32Array.from(n),TH:Float32Array.from(s),W:Float32Array.from(r),SOL:Uint8Array.from(a),PAD:Uint8Array.from(l),SLP:Float32Array.from(c),CRM:Uint8Array.from(u),WLD:Uint8Array.from(o),gates:f,cps:k.map(P=>P.i),gaps:D,finishIdx:A,total:(E-1)*1.5,DS:1.5}}var ie=1/60,Ae={gravity:26,grip:1.55,wMax:1.5,wLag:.15,accel:9,brake:18,vMin:12,vt:[18.5,19.5,20,21],boostMul:1.28,boostTime:1.6,driftAngle:.38,driftNeed:.65,edgeSlack:.45,fallDepth:22,fallTime:2.3,lives:5},H_={9:.8,12:.75};function Ch(i=zl()){i.jumps||(i.jumps=[]);let t=i,e=new Float32Array(t.n);for(let c=t.n-1,u=0;c>=0;c--)t.SOL[c]&&(u=t.Y[c]),e[c]=t.SOL[c]?t.Y[c]:u;let n={c:t,t:0,ev:[],x:0,z:0,y:0,vx:0,vz:0,vy:0,th:0,w:0,hold:0,steer:0,s:0,i:0,d:0,ground:!0,mode:"run",fallT:0,charge:0,boostT:0,lives:Ae.lives,falls:0,maxS:0,runT:0,cp:0,world:0,drift:0,slip:0,speed:0,finished:!1,edgeT:0,airT:0,perfect:0,gatesPassed:0,lastLand:0};n.reset=(c=0,u=!1)=>{let d=t.cps[Math.min(c,t.cps.length-1)]??4;n.cp=c,n.x=t.X[d],n.z=t.Z[d],n.th=t.TH[d],n.y=t.Y[d],n.vy=0,n.w=0,n.hold=0,n.steer=0,n.charge=0,n.boostT=0,n.ground=!0,n.mode="run",n.fallT=0,n.airT=0;let h=c===0?9:Ae.vt[t.WLD[d]]*(H_[c]??.95);n.vx=Math.sin(n.th)*h,n.vz=Math.cos(n.th)*h,n.i=d,n.s=d*1.5,n.d=0,n.world=t.WLD[d],n.finished=!1,n.invul=.8,n.gatesPassed=t.gates.filter(f=>f<d).length},n.reset(0);function s(){let c=Math.max(0,n.i-14),u=Math.min(t.n-2,n.i+30),d=1e18,h=n.i,f=0;for(let p=c;p<=u;p++){let M=t.X[p],S=t.Z[p],v=t.X[p+1]-M,w=t.Z[p+1]-S,A=((n.x-M)*v+(n.z-S)*w)/(v*v+w*w);A=Math.max(0,Math.min(1,A));let I=M+v*A-n.x,g=S+w*A-n.z,E=I*I+g*g;E<d&&(d=E,h=p,f=A)}n.i=h,n.s=(h+f)*1.5;let x=t.TH[h]+(t.TH[h+1]-t.TH[h])*f,y=t.X[h]+(t.X[h+1]-t.X[h])*f,m=t.Z[h]+(t.Z[h+1]-t.Z[h])*f;n.d=(n.x-y)*Math.cos(x)-(n.z-m)*Math.sin(x),n.hw=t.W[h]+(t.W[h+1]-t.W[h])*f,n.surf=t.SOL[h]&&t.SOL[h+1],n.sy=t.Y[h]+(t.Y[h+1]-t.Y[h])*f,n.tth=x,n.floor=e[h]}n.locate=s,n.step=(c,u=0)=>{n.t+=ie,(n.mode==="run"||n.mode==="air")&&(n.runT+=ie),n.invul>0&&(n.invul-=ie);let d=n.th,h=Math.max(-1,Math.min(1,c));h===0?n.hold=0:Math.sign(h)!==Math.sign(n.hold)&&(n.hold=.35*h);let f=Math.abs(h)<.999?h:Math.sign(h)*Math.min(1,Math.abs(n.hold)+ie/.22);if(n.hold=f,n.steer=f,n.mode==="fall")return a();if(n.mode==="done")return o();let x=Math.sin(n.th),y=Math.cos(n.th),m=Math.cos(n.th),p=-Math.sin(n.th),M=Math.hypot(n.vx,n.vz),S=Math.max(0,Math.min(1,(M-18)/14)),v=n.ground?Math.max(0,Math.min(1,u)):0;n.brake=v;let w=(n.ground?1:.35)*n.steer*Ae.wMax*(1-.3*S);n.w+=(w-n.w)*Math.min(1,ie/Ae.wLag),n.th+=n.w*ie;let A=Math.sin(n.th),I=Math.cos(n.th),g=Math.cos(n.th),E=-Math.sin(n.th),C=n.vx*A+n.vz*I,R=n.vx*g+n.vz*E,D=n.world,B=(Ae.vt[Math.min(3,D)]+(t.SLP[n.i]-.065)*60)*(n.boostT>0?Ae.boostMul:1);if(n.ground){R*=Math.exp(-Ae.grip*(1-.28*S+.35*v)*ie),v>0?C=Math.max(Ae.vMin,C-Ae.brake*v*ie):C+=Math.max(-Ae.accel*ie,Math.min(Ae.accel*ie,(B-C)*.9)),n.fixSpeed&&(C=n.fixSpeed);let P=Math.abs(Math.atan2(R,Math.max(.1,C)));P>.9&&(C*=1-(P-.9)*.6*ie)}else R*=Math.exp(-.15*ie);n.vx=A*C+g*R,n.vz=I*C+E*R,n.x+=n.vx*ie,n.z+=n.vz*ie,n.speed=Math.hypot(n.vx,n.vz);let k=Math.atan2(R,Math.max(.1,C));if(n.slip=k,s(),n.s>n.maxS&&(n.maxS=n.s),n.ground){n.y=n.sy,n.vy=0;let P=Math.abs(n.d)-n.hw;if(!n.surf||P>Ae.edgeSlack){n.ground=!1,n.airT=0;let W=Math.max(0,n.i-1),j=Math.min(t.n-1,n.i+1);n.vy=Math.min(0,(t.Y[j]-t.Y[W])/(2*1.5)*n.speed),n.ev.push({t:"leave",edge:!!n.surf})}else n.edgeT=P>-.7?n.edgeT+ie:0,n.edgeT>0&&n.edgeT<ie*1.5&&n.ev.push({t:"edge"});let F=Math.sign(k)===-Math.sign(n.steer)&&Math.abs(n.steer)>.3;Math.abs(k)>Ae.driftAngle&&n.speed>12&&n.boostT<=0&&F?(n.charge+=ie/Ae.driftNeed,n.charge>=1&&(n.charge=0,n.boostT=Ae.boostTime,C+=3,n.vx=A*C+g*R,n.vz=I*C+E*R,n.ev.push({t:"boost",kind:"drift"}))):n.charge=Math.max(0,n.charge-ie*.9),n.drift=Math.abs(k)>.25?k:0}else{n.airT+=ie;let P=!1;if(n.vy-=Ae.gravity*ie,n.y+=n.vy*ie,n.charge=0,n.surf&&Math.abs(n.d)<n.hw+.05&&n.vy<=0&&n.y<=n.sy&&n.y>n.sy-1.4){let F=-n.vy;if(t.PAD[n.i]&&F>7&&!n.fixNoBounce?(n.y=n.sy,n.vy=Math.max(11,F*.58),n.airT=0,n.ev.push({t:"bounce",imp:F}),n.padHit=(n.padHit||0)+1,n.boostT=Math.max(n.boostT,0),P=!0):(n.ground=!0,n.y=n.sy,n.vy=0),!P){let W=Math.abs(k);n.lastLand=F,n.airT>.35&&F>8?W<.2&&Math.abs(n.d)<n.hw*.7?(n.boostT=Math.max(n.boostT,1),n.ev.push({t:"land",imp:F,perfect:!0})):n.ev.push({t:"land",imp:F,perfect:!1}):n.ev.push({t:"touch"})}}else n.y<n.floor-2.6&&r()}n.boostT>0&&(n.boostT-=ie);for(let P=n.gatesPassed;P<t.gates.length;P++)n.i>t.gates[P]&&(n.gatesPassed=P+1,n.world=Math.min(3,P+1),n.ev.push({t:"gate",world:n.world}));t.finishIdx>0&&n.i>=t.finishIdx&&n.mode==="run"&&n.ground&&(n.mode="done",n.finished=!0,n.ev.push({t:"finish"}));for(let P=n.cp+1;P<t.cps.length;P++)n.ground&&n.i>=t.cps[P]+1&&n.surf&&(n.cp=P,n.ev.push({t:"cp",k:P}));n.mode=n.mode==="run"||n.mode==="air"?n.ground?"run":"air":n.mode};function r(){n.mode!=="fall"&&(n.mode="fall",n.fallT=0,n.ev.push({t:"fall"}),n.falls++,n.lives--)}function a(){n.fallT+=ie,n.vy-=Ae.gravity*ie*.9,n.y+=n.vy*ie,n.x+=n.vx*ie,n.z+=n.vz*ie,n.vx*=Math.exp(-.25*ie),n.vz*=Math.exp(-.25*ie),n.th+=n.w*ie*.5,n.w+=(n.w>0?1:-1)*.04,n.fallT>Ae.fallTime&&!n.dead&&(n.dead=!0,n.ev.push({t:"dead"}))}function o(){let c=Math.sin(n.th),u=Math.cos(n.th);n.vx*=Math.exp(-.9*ie),n.vz*=Math.exp(-.9*ie),n.x+=n.vx*ie,n.z+=n.vz*ie,n.th+=n.w*ie*.2,n.w*=.95,s(),n.y=n.sy,n.speed=Math.hypot(n.vx,n.vz)}let l=["t","x","z","y","vx","vz","vy","th","w","hold","steer","s","i","d","ground","mode","fallT","charge","boostT","lives","falls","maxS","runT","cp","world","drift","slip","speed","finished","edgeT","airT","perfect","gatesPassed","lastLand","dead","invul","hw","surf","sy","tth","floor"];return n.snapshot=()=>{let c={};for(let u of l)c[u]=n[u];return c.evn=n.ev.length,c},n.restore=c=>{for(let u of l)n[u]=c[u];n.ev.length=c.evn},n.respawn=()=>{n.dead=!1,n.reset(n.cp)},n}function V_(i,t){let e=i.gaps[t];if(!i.PAD[e.to])return null;let n=i.gaps[t+1];if(!n)return null;let s=[];return{ok:s,one:a=>{let o=Ch(i);o.fixSpeed=a,o.reset(0);let l=Math.max(2,e.from-8);o.x=i.X[l],o.z=i.Z[l],o.th=i.TH[l],o.y=i.Y[l],o.i=l,o.vx=Math.sin(o.th)*a,o.vz=Math.cos(o.th)*a,o.invul=0;let c=!1;for(let u=0;u<60*9&&(o.step(0,0),o.mode!=="fall");u++)if(o.ground&&o.i>n.to+4){c=!0;break}c&&s.push(a)},g:e,g2:n}}var G_=(i,t,e)=>({from:i.from,to:i.to,end:t.to,lo:e.length?e[0]:0,hi:e.length?e[e.length-1]:0});async function Kd(i,t){if(i.jumps&&i.jumps.length)return i.jumps;let e=[];for(let n=0;n<i.gaps.length;n++){let s=V_(i,n);if(s){for(let r=8;r<=36;r+=.5)s.one(r),await t();e.push(G_(s.g,s.g2,s.ok))}}return i.jumps=e,e}var W_=[-1,-.5,0,.5,1],Ph=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i};function X_(i,t){let e=i.c,n=i.i,s=Math.min(e.n-1,n+Math.round(Math.max(10,i.speed*.7)/1.5)),r=e.TH[Math.min(e.n-1,n+6)],a=Math.atan2(i.vx,i.vz),o=r+Math.max(-.5,Math.min(.5,-i.d*.16)),l=Ph(e.TH[s]-e.TH[n])/Math.max(1,(s-n)*1.5)*i.speed,c=Ph(o-a),u=a+Math.max(-.95,Math.min(.95,(t*c+l)/Ae.grip));return Math.max(-1,Math.min(1,Ph(u-i.th)*4/Ae.wMax))}function jd(i,t={}){let e=(t.seed??1)>>>0,n=()=>(e=e*1664525+1013904223>>>0,e/4294967296),s=()=>{let m=0;for(let p=0;p<4;p++)m+=n();return(m-2)*1.73},r=t.delay??.4,a=t.every??.16,o=t.noise??0,l=t.horizon??1.5,c=t.t1??.35,u=[],d=0,h=0,f=0,x=0;function y(m,p,M,S){let v=0,w=!1,A=Math.round(c/ie),I=Math.round(S/ie),g=i.ev.length;for(let E=0;E<I;E++){i.step(E<A?m:p>=50?X_(i,p-100+1.4):p,M);for(let D=i.ev.length-1;D>=g;D--)if(i.ev[D].t==="bounce"){let B=i.i,k=i.i;for(;i.c.PAD[B-1];)B--;for(;i.c.PAD[k+1];)k++;v+=Math.abs(i.i-(B+k)/2)*.35+Math.abs(i.d)*.5,i.ev.length=g+0;break}if(i.mode==="fall"){v+=4e3+2e3*(I-E)/I,w=!0;break}if(i.mode==="done")break;let C=Math.max(1.5,i.hw),R=Math.abs(i.d)/C;(i.ground||i.surf)&&(v+=R*R*6+(R>.8?(R-.8)*80:0)),v+=Math.abs(i.slip)>.9?3:0}return v+=Math.max(0,Ae.vt[Math.min(3,i.world)]*.92-i.speed)*1.6,v}return{act(){let m=i.t;if(m>=f&&i.mode!=="fall"){f=m+a;let p=i.snapshot(),M=u.slice(),S=d,v=0,w=Math.round(r/ie),A=h;for(let P=0;P<w;P++){for(;v<M.length&&M[v][0]<=m+P*ie;)S=M[v][1],A=M[v][2],v++;i.step(S,A)}if(t.eye){let P=s()*t.eye,F=s()*(t.eyeTh??.04);i.x+=Math.cos(i.th)*P,i.z-=Math.sin(i.th)*P,i.th+=F,i.locate()}let I=i.snapshot(),g=1e18,E=0,C=0,R=i.c,D=!1;for(let P of R.gaps)if(i.i<P.from+2&&P.from-i.i<90){D=!0;break}let B=D?4.4:l,k=D||i.speed>22?[0,1]:[0];for(let P of k)for(let F of W_)for(let W of[-1,0,1,100-.4,100.6]){let j=y(F,W,P,B)+Math.abs(F-x)*.15+P*2.5+(o?s()*o:0);i.restore(I),j<g&&(g=j,E=F,C=P)}i.restore(p),x=E,u.push([m+r,E,C])}for(;u.length&&u[0][0]<=m;){let p=u.shift();d=p[1],h=p[2]}return[d,h]}}}function Lh(i){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Oi(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=(n^n>>>13)*1274126177|0,((n^n>>>16)>>>0)/4294967296}var Ih=i=>i*i*(3-2*i);function q_(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),a=Ih(i-n),o=Ih(t-s),l=Ih(e-r),c=(u,d,h)=>u+(d-u)*h;return c(c(c(Oi(n,s,r),Oi(n+1,s,r),a),c(Oi(n,s+1,r),Oi(n+1,s+1,r),a),o),c(c(Oi(n,s,r+1),Oi(n+1,s,r+1),a),c(Oi(n,s+1,r+1),Oi(n+1,s+1,r+1),a),o),l)}function ui(i,t,e,n=4){let s=.5,r=0,a=1;for(let o=0;o<n;o++)r+=s*q_(i*a,t*a,e*a),a*=2.03,s*=.5;return r}var jt=i=>new kt(i),di=[{top:jt(999324),mid:jt(3966684),bot:jt(13625083),fog:jt(11128302),fogD:.0021,hemiS:jt(13625087),hemiG:jt(9416912),hemiI:.95,sun:jt(16773336),sunI:1.5,sunDir:[.5,.42,.75],expo:1,stars:0,aur:0,ember:0,emis:jt(5939152),emisI:.1,lant:0,floorA:jt(15332351),floorB:jt(9417948),floorGlow:0,floorGC:jt(16777215),floorDrop:62,floorScale:.012,flow:.01,env:.95,mote:jt(16777215),moteRise:-.6,moteN:.5,track:jt(12771578)},{top:jt(1378311),mid:jt(6036752),bot:jt(16742952),fog:jt(9056278),fogD:.0048,hemiS:jt(16756864),hemiG:jt(5906960),hemiI:1,sun:jt(16747066),sunI:2,sunDir:[-.4,.16,.9],expo:1.05,stars:0,aur:0,ember:1,emis:jt(3114672),emisI:.26,lant:.5,floorA:jt(5904392),floorB:jt(16747044),floorGlow:2,floorGC:jt(16760912),floorDrop:34,floorScale:.045,flow:.07,env:.55,mote:jt(16751168),moteRise:2.2,moteN:1,track:jt(10475764)},{top:jt(263950),mid:jt(528412),bot:jt(793644),fog:jt(662576),fogD:.0085,hemiS:jt(6989528),hemiG:jt(2767434),hemiI:1.1,sun:jt(8370431),sunI:.3,sunDir:[.2,.8,.3],expo:1.15,stars:0,aur:0,ember:0,emis:jt(3121104),emisI:.22,lant:1,floorA:jt(132620),floorB:jt(664118),floorGlow:.25,floorGC:jt(3854560),floorDrop:50,floorScale:.02,flow:.012,env:.55,mote:jt(9433343),moteRise:.3,moteN:.7,track:jt(11068671)},{top:jt(330278),mid:jt(1780587),bot:jt(5982872),fog:jt(2368618),fogD:.0032,hemiS:jt(9087231),hemiG:jt(2761808),hemiI:.7,sun:jt(13621503),sunI:1.1,sunDir:[-.55,.38,.7],expo:1.1,stars:1,aur:1,ember:0,emis:jt(5691074),emisI:.2,lant:.7,floorA:jt(396584),floorB:jt(1194594),floorGlow:.45,floorGC:jt(4180128),floorDrop:58,floorScale:.03,flow:.02,env:.85,mote:jt(14677759),moteRise:-.3,moteN:.8,track:jt(13497582)}];var Y_=["fogD","hemiI","sunI","expo","stars","aur","ember","emisI","lant","floorGlow","floorDrop","floorScale","flow","env","moteRise","moteN"],Z_=["top","mid","bot","fog","hemiS","hemiG","sun","emis","floorA","floorB","floorGC","mote","track"];function Hl(i,t,e,n={}){for(let s of Y_)n[s]=i[s]+(t[s]-i[s])*e;for(let s of Z_)n[s]=n[s]||new kt,n[s].copy(i[s]).lerp(t[s],e);return n.sunDir=[0,1,2].map(s=>i.sunDir[s]+(t.sunDir[s]-i.sunDir[s])*e),n}var J_=`
varying vec3 vDir;
uniform vec3 uTop,uMid,uBot,uSunC,uSunDir; uniform float uStars,uAur,uEmber,uTime;
float hash(vec3 p){p=fract(p*0.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float hash2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash2(i),hash2(i+vec2(1,0)),f.x),mix(hash2(i+vec2(0,1)),hash2(i+vec2(1,1)),f.x),f.y);}
void main(){
  vec3 d=normalize(vDir); float h=d.y;
  vec3 col=mix(uBot,uMid,smoothstep(-0.3,0.10,h)); col=mix(col,uTop,smoothstep(0.05,0.8,h));
  float sd=max(dot(d,normalize(uSunDir)),0.);
  col+=uSunC*(smoothstep(0.9990,0.9996,sd)*2.2+pow(sd,14.)*0.30+pow(sd,3.)*0.07);
  col+=vec3(1.,.35,.08)*uEmber*smoothstep(0.30,-0.12,h)*0.75;
  if(uStars>0.01&&h>0.02){vec3 p=d*150.;vec3 ip=floor(p);float r=hash(ip);float st=step(0.9955,r);vec3 fr=fract(p)-.5;float m=smoothstep(0.38,0.0,length(fr));col+=vec3(.9,.95,1.)*st*m*uStars*smoothstep(0.02,0.25,h)*(0.55+0.45*sin(uTime*2.+r*60.));}
  if(uAur>0.01){float x=atan(d.z,d.x);float c=0.34+0.10*sin(x*2.+uTime*0.08)+0.05*sin(x*5.-uTime*0.12);float band=exp(-pow((h-c)*5.2,2.));float str=0.45+0.55*vn(vec2(x*7.,uTime*0.12));float up=smoothstep(c-0.06,c+0.35,h);
    vec3 ac=mix(vec3(0.15,1.0,0.55),vec3(0.2,0.55,1.0),smoothstep(0.1,0.6,h)); ac=mix(ac,vec3(0.7,0.3,0.9),smoothstep(0.5,0.85,h)*0.6);
    col+=ac*band*str*uAur*(0.3+0.7*up)*0.55*smoothstep(0.02,0.14,h);}
  gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;function Qd(){return new en({uniforms:{uTop:{value:new kt},uMid:{value:new kt},uBot:{value:new kt},uSunC:{value:new kt},uSunDir:{value:new U(0,1,0)},uStars:{value:0},uAur:{value:0},uEmber:{value:0},uTime:{value:0}},vertexShader:"varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:J_,side:Ze,depthWrite:!1,fog:!1})}function tf(i,t,e){let n=i.uniforms;n.uTop.value.copy(t.top),n.uMid.value.copy(t.mid),n.uBot.value.copy(t.bot),n.uSunC.value.copy(t.sun),n.uSunDir.value.set(...t.sunDir),n.uStars.value=t.stars,n.uAur.value=t.aur,n.uEmber.value=t.ember,n.uTime.value=e}var $_=`
varying vec3 vW;
uniform vec3 uA,uB,uG,uFogC; uniform float uGlow,uFogD,uTime,uFlow,uScale;
float hash2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash2(i),hash2(i+vec2(1,0)),f.x),mix(hash2(i+vec2(0,1)),hash2(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*vn(p);p*=2.07;a*=.5;}return s;}
void main(){
  vec2 p=vW.xz*uScale; vec2 q=p+vec2(uTime*uFlow,uTime*uFlow*.6);
#ifdef LOWQ
  float n=fbm(q+vn(q*1.7+3.)*0.65);
#else
  float n=fbm(q+fbm(q*1.7+3.)*1.3);
#endif
  vec3 col=mix(uA,uB,smoothstep(0.3,0.7,n));
  float crack=smoothstep(0.045,0.0,abs(n-0.52));
  col+=uG*uGlow*(crack*1.6+smoothstep(0.55,0.35,n)*0.55);
  float dd=length(vW-cameraPosition); float f=1.-exp(-pow(dd*uFogD,2.));
  col=mix(col,uFogC,clamp(f,0.,1.));
  gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;async function K_(i){let n=document.createElement("canvas");n.width=256,n.height=512;let s=n.getContext("2d"),r=s.createImageData(256,512),a=r.data;for(let u=0;u<512;u++){u&15||await i();for(let d=0;d<256;d++){let h=ui(d/38,u/38,1.7,4),f=ui(d/9,u/70,5.1,3),x=.8+.14*h+.06*f,y=(u*256+d)*4;a[y]=214*x,a[y+1]=236*x,a[y+2]=255*Math.min(1,x+.05),a[y+3]=255}}s.putImageData(r,0,0);let o=Lh(11);s.lineCap="round";for(let u=0;u<26;u++){s.strokeStyle=`rgba(255,255,255,${.18+o()*.3})`,s.lineWidth=.7+o()*1.3,s.beginPath();let d=o()*256,h=o()*512;s.moveTo(d,h);for(let f=0;f<5;f++)d+=(o()-.5)*60,h+=(o()-.2)*70,s.lineTo(d,h);s.stroke()}for(let u=0;u<70;u++){s.strokeStyle=`rgba(120,170,215,${.12+o()*.2})`,s.lineWidth=.6+o(),s.beginPath();let d=o()*256,h=o()*512;s.arc(d,h,1+o()*4,0,7),s.stroke()}let l=s.createLinearGradient(0,0,256,0);l.addColorStop(0,"rgba(10,50,120,0.95)"),l.addColorStop(.07,"rgba(25,85,160,0.8)"),l.addColorStop(.115,"rgba(235,248,255,0.55)"),l.addColorStop(.15,"rgba(255,255,255,0)"),l.addColorStop(.85,"rgba(255,255,255,0)"),l.addColorStop(.885,"rgba(235,248,255,0.55)"),l.addColorStop(.93,"rgba(25,85,160,0.8)"),l.addColorStop(1,"rgba(10,50,120,0.95)"),s.fillStyle=l,s.fillRect(0,0,256,512);let c=new Xn(n);return c.wrapS=c.wrapT=Ei,c.colorSpace=Ve,c.anisotropy=4,c}var j_=[-1,-.66,-.33,0,.33,.66,1].map(i=>[i,.07*(1-i*i)]),Q_=[[1.04,-.12],[1.02,-.4],[.88,-.8],[.62,-1.2],[.3,-1.5],[0,-1.6],[-.3,-1.5],[-.62,-1.2],[-.88,-.8],[-1.02,-.4],[-1.04,-.12]],kl=j_.concat(Q_);async function tv(i,t,e=()=>{}){let n=new Pe,s=i.n,r=di.map(u=>u.track),a=u=>{let d=i.WLD[u],h=r[d].clone(),f=i.gates[d];return f!==void 0&&f-u<40&&f-u>-2&&h.lerp(r[Math.min(3,d+1)],.7*(1-(f-u)/40)),h},o=[],l=-1;for(let u=0;u<s;u++)i.SOL[u]&&l<0&&(l=u),l>=0&&(!i.SOL[u+1]||u===s-1)&&i.SOL[u]&&(o.push([l,u]),l=-1);let c=new kt(4886480);n.userData.crumble=[];for(let[u,d]of o)for(let h=u;h<=d;){await e();let f=i.CRM[h],x=f?8:56,y=h;for(;y<d&&y-h<x&&i.CRM[y+1]===f;)y++;y===h&&(y=Math.min(d,h+1));let m=[];h===u&&m.push({i:h,w:.6,v:.1,off:-.9},{i:h,w:.96,v:.75,off:-.4});for(let R=h;R<=y;R++)m.push({i:R,w:1,v:1,off:0});y===d&&m.push({i:y,w:.96,v:.75,off:.4},{i:y,w:.6,v:.1,off:.9});let p=m.length,M=kl.length,S=new Float32Array((p*M+2)*3),v=new Float32Array((p*M+2)*3),w=new Float32Array((p*M+2)*3),A=new Float32Array((p*M+2)*2),I=[],g=new kt;for(let R=0;R<p;R++){let D=m[R],B=D.i,k=i.TH[B],P=i.W[B]*D.w,F=Math.cos(k),W=-Math.sin(k),j=Math.sin(k),Q=Math.cos(k),dt=i.X[B]+j*D.off,nt=i.Z[B]+Q*D.off,yt=i.Y[B],ot=a(B);for(let Ut=0;Ut<M;Ut++){let[Ht,tt]=kl[Ut],Mt=tt*(Math.abs(tt)>.07,1)*D.v*(i.PAD[B]?1.1:1),ct=(R*M+Ut)*3,Ct=Ht*P;S[ct]=dt+F*Ct,S[ct+1]=yt+Mt,S[ct+2]=nt+W*Ct;let Xt=kl[(Ut+1)%M],Bt=kl[(Ut-1+M)%M],ee=(Xt[0]-Bt[0])*i.W[B],qt=(Xt[1]-Bt[1])*D.v,ft=Math.hypot(ee,qt)||1,gt=-qt/ft,pt=ee/ft;v[ct]=F*gt,v[ct+1]=pt,v[ct+2]=W*gt,g.copy(ot).lerp(c,Math.min(1,Math.max(0,-tt/1.7))*.85),Ut<7&&g.multiplyScalar((.9+.05*Math.sin(B*.37+Ht*3))*(1-.35*Math.abs(Ht)**3)),w[ct]=g.r,w[ct+1]=g.g,w[ct+2]=g.b;let V=(R*M+Ut)*2;A[V]=Ut<7?(Ht+1)/2:.5+Ht*.5,A[V+1]=B*1.5/7+D.off/7}}for(let R=0;R<p-1;R++)for(let D=0;D<M;D++){let B=R*M+D,k=R*M+(D+1)%M,P=(R+1)*M+D,F=(R+1)*M+(D+1)%M;I.push(B,P,k,k,P,F)}let E=(R,D)=>{let B=p*M+(R===0?0:1),k=m[R],P=k.i,F=i.TH[P],W=0,j=0,Q=0;for(let nt=0;nt<M;nt++){let yt=(R*M+nt)*3;W+=S[yt],j+=S[yt+1],Q+=S[yt+2]}S[B*3]=W/M,S[B*3+1]=j/M,S[B*3+2]=Q/M;let dt=D?-1:1;v[B*3]=Math.sin(F)*dt,v[B*3+1]=0,v[B*3+2]=Math.cos(F)*dt,w[B*3]=.8,w[B*3+1]=.92,w[B*3+2]=1;for(let nt=0;nt<M;nt++){let yt=R*M+nt,ot=R*M+(nt+1)%M;D?I.push(B,ot,yt):I.push(B,yt,ot)}};h===u&&E(0,!0),y===d&&E(p-1,!1);let C=new xe;if(C.setAttribute("position",new ye(S,3)),C.setAttribute("normal",new ye(v,3)),C.setAttribute("color",new ye(w,3)),C.setAttribute("uv",new ye(A,2)),C.setIndex(I),f){let R=0,D=0,B=0,k=S.length/3;for(let F=0;F<k;F++)R+=S[F*3],D+=S[F*3+1],B+=S[F*3+2];R/=k,D/=k,B/=k;for(let F=0;F<k;F++)S[F*3]-=R,S[F*3+1]-=D,S[F*3+2]-=B;C.computeBoundingSphere();let P=new Gt(C,t);P.position.set(R,D,B),n.add(P),n.userData.crumble.push({m:P,a:h,b:y,home:new U(R,D,B),fall:0,spin:[(Math.random()-.5)*1.6,(Math.random()-.5)*1.2,(Math.random()-.5)*1.6]})}else C.computeBoundingSphere(),n.add(new Gt(C,t));if(y>=d)break;h=y}return n}function ev(i=64,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=i/2,r=n.createRadialGradient(s,s,0,s,s,s);for(let[o,l]of t)r.addColorStop(o,l);n.fillStyle=r,n.fillRect(0,0,i,i);let a=new Xn(e);return a.colorSpace=Ve,a}var Dh=()=>ev(64,[[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,.55)"],[1,"rgba(255,255,255,0)"]]);function nv(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.clearRect(0,0,256,256);for(let[s,r,a]of[[118,1,8],[88,.8,6],[58,.7,6],[28,.9,10]])t.strokeStyle=`rgba(190,255,235,${r})`,t.lineWidth=a,t.beginPath(),t.arc(128,128,s,0,7),t.stroke();let e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(140,255,220,.35)"),e.addColorStop(1,"rgba(140,255,220,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);let n=new Xn(i);return n.colorSpace=Ve,n}var as=new Ue;function on(i,t,e,n){let s=new Ir(i,t,e),r=new kt;for(let a=0;a<e;a++){as.position.set(0,0,0),as.rotation.set(0,0,0),as.scale.set(1,1,1),as.quaternion.identity();let o=n(a,as);as.updateMatrix(),s.setMatrixAt(a,as.matrix),o!==void 0&&s.setColorAt(a,r.set(o))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.computeBoundingSphere(),s}function iv(i,t){let e=i.attributes.position,n=new U;for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n,s),e.setXYZ(s,n.x,n.y,n.z);return i.computeVertexNormals(),i}function ef(i,t,e){return new Fe(i,t,e)}function fa(i,t=.55,e=[.34,.38,.5],n=[.95,.97,1],s=.34){let r=new Fe(1,40,28),a=r.attributes.position,o=new U,l=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){o.fromBufferAttribute(a,c);let u=o.y,d=Math.max(0,u),h=1-.7*d;o.x*=h,o.z*=h,o.y=d>0?d*1.9:u*.35;let f=ui(o.x*2.1+i,o.y*1.6,o.z*2.1+i,4),x=1-Math.abs(ui(o.x*3.4+i*2,o.y*2.2,o.z*3.4,3)*2-1),y=1+(f-.5)*.55+x*s*.6;o.x*=y,o.z*=y,o.y+=(f-.5)*.25,a.setXYZ(c,o.x,o.y,o.z);let m=o.y/1.9,p=Math.min(1,Math.max(0,(m-t+(f-.5)*.35)*7)),M=.55+.45*Math.min(1,m*1.5+.2);l[c*3]=(e[0]*(1-p)+n[0]*p)*M,l[c*3+1]=(e[1]*(1-p)+n[1]*p)*M,l[c*3+2]=(e[2]*(1-p)+n[2]*p)*M}return r.setAttribute("color",new ye(l,3)),r.computeVertexNormals(),r}function nf(i){return iv(new qr(1,3),t=>{let e=ui(t.x*1.4+i,t.y*1.4,t.z*1.4+i,3);t.multiplyScalar(.75+e*.55)})}function sf(i){let t=[];for(let o=0;o<=14;o++){let l=o/14,c=(1-.55*l)*(1+.28*Math.sin(l*7+i))*(l>.92?Math.sqrt(Math.max(0,1-(l-.92)/.08)):1);t.push(new _t(Math.max(.02,c),l*5-1))}let n=new ts(t,14),s=n.attributes.position,r=new U,a=new Float32Array(s.count*3);for(let o=0;o<s.count;o++){r.fromBufferAttribute(s,o);let l=1+(ui(r.x*2+i,r.y,r.z*2,3)-.5)*.5;r.x*=l,r.z*=l,s.setXYZ(o,r.x,r.y,r.z);let c=(r.y+1)/5,u=Math.max(0,.35-c)*2.6;a[o*3]=.3+u*.9,a[o*3+1]=.16+u*.3,a[o*3+2]=.12+u*.05}return n.setAttribute("color",new ye(a,3)),n.computeVertexNormals(),n}function sv(i,t,e,n){let s=new Ri,r=i*4;for(let o=0;o<r;o++){let l=o/r*Math.PI*2,c=o%4===1||o%4===2?e:t,u=Math.cos(l)*c,d=Math.sin(l)*c;o?s.lineTo(u,d):s.moveTo(u,d)}let a=new ji;return a.absarc(0,0,t*.55,0,Math.PI*2,!0),s.holes.push(a),new Xr(s,{depth:n,bevelEnabled:!0,bevelSize:.5,bevelThickness:.5,bevelSegments:2,curveSegments:8})}async function rf(i,t,e,n={}){let s=!!n.low,r=n.yield||(()=>{}),a={c:e,atm:{},groups:[]},o=Qd(),l=new Gt(new Fe(700,32,16),o);l.renderOrder=-10,l.frustumCulled=!1,i.add(l),a.dome=l,a.skyM=o,await r();let c=new en({uniforms:{uA:{value:new kt},uB:{value:new kt},uG:{value:new kt},uFogC:{value:new kt},uGlow:{value:0},uFogD:{value:.004},uTime:{value:0},uFlow:{value:.01},uScale:{value:.018}},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:$_,defines:s?{LOWQ:1}:{}}),u=new Gt(new fn(3200,3200,1,1).rotateX(-Math.PI/2),c);u.frustumCulled=!1,i.add(u),a.floor=u;let d=new Kr(16777215,8947848,1),h=new Qr(16777215,2),f=new Ue;h.target=f,i.add(d,h,f),a.hemi=d,a.sun=h,a.sunT=f,i.fog=new Tr(16777215,.004);let x=new es(16763008,0,34,1.4);i.add(x),a.lantern=x,await r();let y=new Ys(t),m=[];for(let V=0;V<4;V++){let rt=new Ki,vt=Qd();tf(vt,di[V],3),rt.add(new Gt(new Fe(10,24,12),vt));let xt=y.fromScene(rt,.02,.1,100);m.push(xt.texture),await r()}a.envs=m,i.environment=m[0],await r();let p=new we({vertexColors:!0,map:await K_(r),roughness:.62,metalness:0,envMapIntensity:.6,emissive:new kt(3833776),emissiveIntensity:.1});a.iceMat=p;let M=await tv(e,p,r);i.add(M),a.track=M,await r(),a.gates=[];let S=new Rn(1,.045,10,72),v=new Ke(.09,.09,46,8,1,!0),w=Dh();if(e.gates.forEach((V,rt)=>{let vt=di[Math.min(3,rt+1)].emis.clone().lerp(new kt(16777215),.55),xt=new Pe,K=e.TH[V],Et=e.W[V],L=Et+2.4;xt.position.set(e.X[V],e.Y[V]+L*.78,e.Z[V]),xt.rotation.y=K;let Dt=new Ee({color:vt,transparent:!0,opacity:.95,blending:Le,depthWrite:!1}),lt=[];for(let N=0;N<3;N++){let O=new Gt(S,Dt);O.scale.setScalar(L*(1-N*.07)),O.rotation.set(0,0,0),O.userData={axis:N},xt.add(O),lt.push(O)}lt[1].rotation.x=Math.PI/3,lt[2].rotation.x=-Math.PI/3;let T=new Ee({color:vt,transparent:!0,opacity:.35,blending:Le,depthWrite:!1,side:He});for(let N of[-1,1]){let O=new Gt(v,T);O.position.set(N*(L+.2),14,0),xt.add(O)}let _=new Ti(new ai({map:w,color:vt,transparent:!0,opacity:.55,blending:Le,depthWrite:!1}));_.scale.setScalar(L*2.6),xt.add(_),xt.userData={rings:lt,k:rt},i.add(xt),a.gates.push(xt)}),e.finishIdx>0){let V=e.finishIdx,rt=new kt(16767370),vt=new Pe,xt=e.W[V]+5.5;vt.position.set(e.X[V],e.Y[V]+xt*.8,e.Z[V]),vt.rotation.y=e.TH[V];let K=new Ee({color:rt,transparent:!0,opacity:.95,blending:Le,depthWrite:!1}),Et=[];for(let lt=0;lt<3;lt++){let T=new Gt(new Rn(1,.05,10,80),K);T.scale.setScalar(xt*(1-lt*.08)),vt.add(T),Et.push(T)}Et[1].rotation.x=Math.PI/3,Et[2].rotation.x=-Math.PI/3;let L=new Ee({color:rt,transparent:!0,opacity:.3,blending:Le,depthWrite:!1,side:He});for(let lt of[-1,1]){let T=new Gt(new Ke(.5,.5,220,10,1,!0),L);T.position.set(lt*(xt+.4),90,0),vt.add(T)}let Dt=new Ti(new ai({map:w,color:rt,transparent:!0,opacity:.6,blending:Le,depthWrite:!1}));Dt.scale.setScalar(xt*3.2),vt.add(Dt),vt.userData={rings:Et,k:9},i.add(vt),a.gates.push(vt)}a.cps=e.cps.map((V,rt)=>{let vt=new Pe,xt=e.TH[V],K=e.W[V],Et=L=>{let Dt=new Pe;Dt.add(new Gt(new Ke(.05,.08,2.2,8),new we({color:2111567,roughness:.6}))),Dt.children[0].position.y=1.1;let lt=new Gt(new Fe(.2,12,8),new Ee({color:16765562}));lt.position.y=2.35,Dt.add(lt);let T=new Ti(new ai({map:w,color:16760928,transparent:!0,opacity:.8,blending:Le,depthWrite:!1}));return T.scale.setScalar(2.2),T.position.y=2.35,Dt.add(T),Dt.position.set(L*(K+.5),-.1,0),Dt};return vt.add(Et(1),Et(-1)),vt.position.set(e.X[V],e.Y[V],e.Z[V]),vt.rotation.y=xt,i.add(vt),vt}),await r(),a.signs=[];{let V=new we({color:992312,roughness:.6,emissive:529439,emissiveIntensity:.6}),rt=new Ee({color:16742989,side:He}),vt=new we({color:2111567,roughness:.6}),xt=Dt=>{let lt=new Ri;return lt.moveTo(-.22*Dt,.5),lt.lineTo(.18*Dt,0),lt.lineTo(-.22*Dt,-.5),lt.lineTo(-.02*Dt,-.5),lt.lineTo(.38*Dt,0),lt.lineTo(-.02*Dt,.5),new Zr(lt)},K=xt(-1),Et=xt(1),L=1;for(;L<e.n-2;){let Dt=e.TH[L+1]-e.TH[L];if(Math.abs(Dt)<.004||!e.SOL[L]){L++;continue}let lt=Math.sign(Dt),T=L;for(;T<e.n-2&&Math.sign(e.TH[T+1]-e.TH[T])===lt&&Math.abs(e.TH[T+1]-e.TH[T])>.004;)T++;let _=Math.abs(e.TH[T]-e.TH[L]);if(_>=1){let N=Math.max(1,L-40);for(;N<L&&!e.SOL[N];)N++;let O=e.TH[N],q=e.W[N],at=-lt*(q+1.7),ut=new Pe;ut.scale.setScalar(1.5),ut.position.set(e.X[N]+Math.cos(O)*at,e.Y[N],e.Z[N]-Math.sin(O)*at),ut.rotation.y=O+Math.PI;let Y=new Gt(new Ke(.06,.09,2.6,8),vt);Y.position.y=1.3,ut.add(Y);let et=new Gt(new Ai(1.7,1.2,.1),V);et.position.y=2.7,ut.add(et);for(let wt of[-.42,.34]){let bt=new Gt(lt>0?K:Et,rt);bt.position.set(wt,2.7,.07),ut.add(bt)}let St=new Gt(new Fe(.13,8,6),new Ee({color:16752736}));St.position.y=3.5,ut.add(St);let Ft=new Ti(new ai({map:w,color:16747088,transparent:!0,opacity:.8,blending:Le,depthWrite:!1}));Ft.scale.setScalar(2.4),Ft.position.y=3.5,ut.add(Ft),i.add(ut),a.signs.push({g:ut,i:N,ang:_,dir:lt})}L=T+1}}await r(),a.pads=[];let A=nv(),I=[];for(let V=0;V<e.n;V++)if(e.PAD[V]&&!e.PAD[V-1]){let rt=V;for(;e.PAD[rt+1];)rt++;let vt=(V+rt)/2,xt=Math.floor(vt),K=(rt-V)*1.5+2,Et=e.W[xt]*2,L=new Pe;L.position.set((e.X[V]+e.X[rt])/2,(e.Y[V]+e.Y[rt])/2,(e.Z[V]+e.Z[rt])/2),L.rotation.y=e.TH[xt];let Dt=new Gt(new Fe(1,28,12),new we({color:10479832,roughness:.35,emissive:2805928,emissiveIntensity:.5,transparent:!0,opacity:.92}));Dt.scale.set(Et/2*.96,.5,K/2),Dt.position.y=-.18,L.add(Dt);let lt=new Gt(new fn(1,1).rotateX(-Math.PI/2),new Ee({map:A,transparent:!0,blending:Le,depthWrite:!1,opacity:.95}));lt.scale.set(Math.min(Et,K)*.95,1,Math.min(Et,K)*.95),lt.position.y=.36,L.add(lt),i.add(L),a.pads.push({g:L,cush:Dt,decal:lt,i:V,j:rt})}a.mark=new Gt(new fn(1,1).rotateX(-Math.PI/2),new Ee({map:A,transparent:!0,blending:Le,depthWrite:!1,depthTest:!1,opacity:0,color:16777215})),a.mark.scale.setScalar(2.6),a.mark.renderOrder=20,a.mark.visible=!1,i.add(a.mark),await r();let g=Lh(7),E=V=>[V===0?0:e.gates[V-1],V===3?e.n-1:e.gates[V]],C=(V,rt,vt=0)=>{let xt=e.TH[V],K=g()<.5?-1:1;return[e.X[V]+Math.cos(xt)*rt*K,e.Y[V]+vt,e.Z[V]-Math.sin(xt)*rt*K,K]};a.zones=[];let R=0,D=(V,rt)=>{i.add(V),a.zones.push({g:V,i:rt,k:R})},B=230,k=[fa(1,.5,[.22,.28,.42]),fa(5.5,.55,[.26,.24,.34]),fa(9.2,.45,[.2,.3,.44])],P=new we({vertexColors:!0,roughness:.9,metalness:0}),F=[fa(2,.35,[.3,.34,.6],[.8,.9,1],.4),fa(7.1,.4,[.26,.34,.55],[.75,.95,.95],.4)],W=(V,rt,vt,xt,K)=>{let Et=1e9;for(let L=0;L<e.n;L+=3){let Dt=e.X[L]-V,lt=e.Z[L]-vt;Dt*Dt+lt*lt<(xt+26)*(xt+26)&&e.Y[L]<Et&&(Et=e.Y[L])}return Et<1e9?Math.min(rt,Et-K-16):rt},j=ef(1,12,8),Q=new Jr({color:16777215,emissive:7180212,emissiveIntensity:.55}),dt=new we({color:13625855,roughness:.25,emissive:3833776,emissiveIntensity:.15}),nt=[nf(1),nf(4)],yt=new Ke(1.5,4.2,70,12,1,!0),ot=[sf(1),sf(3.3)],Ut=new we({vertexColors:!0,roughness:.85,emissive:4198406,emissiveIntensity:.6}),Ht=new we({color:2761248,roughness:.6,metalness:.6}),tt=new Ee({color:16747056}),Mt=new we({color:3950168,roughness:.95,vertexColors:!0,side:Ze}),ct=new Yr(1,0).scale(.22,1,.22),Ct=new Ee({color:16777215}),Xt=new Fr(1,1,7,1,!1).translate(0,-.5,0),Bt=new we({color:4876938,roughness:.9}),ee=ef(.35,8,6),qt=new Ee({color:16769184}),ft=new Rn(1,.035,8,64),gt=[],pt=V=>s?Math.ceil(V*.6):V;for(let V=0;V<4;V++){let[rt,vt]=E(V);R=V;for(let xt=rt;xt<vt;xt+=B){await r();let K=Math.min(vt,xt+B),Et=Math.round((xt+K)/2),L=new Pe,Dt=()=>xt+Math.floor(g()*(K-xt)),lt=(T,_)=>T+g()*(_-T);if(V===0){for(let _=0;_<3;_++)L.add(on(k[_],P,pt(4),(N,O)=>{let q=Dt(),[at,ut,Y]=C(q,lt(230,760));O.position.set(at,ut-95,Y);let et=lt(70,190);return O.scale.set(et,et*lt(.8,1.2),et),O.rotation.y=g()*6,16777215}));L.add(on(j,Q,pt(260),(_,N)=>{let O=Dt(),[q,at,ut]=C(O,lt(-30,420)),Y=lt(14,40),et=Y*lt(.28,.45),St=q+lt(-30,30),Ft=ut+lt(-30,30);N.position.set(St,W(St,at-lt(32,70),Ft,Y*1.2,et),Ft),N.scale.set(Y,et,Y*lt(.8,1.2)),N.rotation.y=g()*6;let wt=lt(.9,1);return new kt(wt,wt,1).getHex()})),L.add(on(nt[0],dt,pt(10),(_,N)=>{let O=Dt(),[q,at,ut]=C(O,lt(24,130));N.position.set(q,at+lt(-28,14),ut);let Y=lt(2.5,9);N.scale.set(Y,Y*.8,Y),N.rotation.set(g()*6,g()*6,g()*6)}));let T=on(yt,dt,Math.floor((K-xt)/36),(_,N)=>{let O=xt+_*36;N.position.set(e.X[O],e.Y[O]-38,e.Z[O])});L.add(T)}else if(V===1){L.add(on(ot[0],Ut,pt(14),(N,O)=>{let q=Dt(),[at,ut,Y]=C(q,lt(60,360));O.position.set(at,ut-lt(48,64),Y);let et=lt(3,8);return O.scale.set(et,et*lt(5,11),et),O.rotation.y=g()*6,16777215})),L.add(on(ot[1],Ut,pt(8),(N,O)=>{let q=Dt(),[at,ut,Y]=C(q,lt(90,420));O.position.set(at,ut-lt(48,64),Y);let et=lt(5,11);return O.scale.set(et,et*lt(7,14),et),O.rotation.y=g()*6,16777215}));let T=[],_=[];for(let N=0;N<pt(6);N++){let O=Dt(),[q,at,ut]=C(O,lt(90,260));T.push([q,at-52,ut,lt(5,9),lt(70,130)])}L.add(on(new Ke(.8,1,1,14),Ht,T.length,(N,O)=>{let q=T[N];O.position.set(q[0],q[1]+q[4]/2,q[2]),O.scale.set(q[3],q[4],q[3])})),L.add(on(new Ke(.83,1.03,1,14),tt,T.length*3,(N,O)=>{let q=T[Math.floor(N/3)],at=[.25,.5,.97][N%3];O.position.set(q[0],q[1]+q[4]*at,q[2]),O.scale.set(q[3]*(1+(.1-at*.1)),3.2,q[3]*(1+(.1-at*.1)))}));for(let N=0;N<2;N++){let O=Dt(),[q,at,ut]=C(O,lt(120,220)),Y=new Gt(sv(22,26,31,7),Ht);Y.position.set(q,at-8,ut),Y.rotation.y=e.TH[O]+Math.PI/2+lt(-.5,.5),Y.scale.setScalar(lt(1,1.6)),L.add(Y),gt.push([Y,lt(-.18,.18)])}for(let N=0;N<pt(7);N++){let O=Dt(),[q,at,ut]=C(O,lt(70,200)),Y=new Gt(new fn(lt(4,9),100),new Ee({color:16742946,transparent:!0,opacity:.72,blending:Le,depthWrite:!1,side:He}));Y.position.set(q,at+4,ut),Y.rotation.y=e.TH[O]+Math.PI/2,L.add(Y)}}else if(V!==2){for(let T=0;T<2;T++)L.add(on(F[T],P,pt(3),(_,N)=>{let O=Dt(),[q,at,ut]=C(O,lt(300,700));N.position.set(q,at-100,ut);let Y=lt(90,170);return N.scale.set(Y,Y*lt(.9,1.4),Y),N.rotation.y=g()*6,16777215}));L.add(on(ee,qt,pt(90),(T,_)=>{let N=Dt(),[O,q,at]=C(N,lt(8,90));_.position.set(O,q+lt(-6,28),at);let ut=lt(.6,1.6);_.scale.setScalar(ut)})),L.add(on(nt[1],new we({color:10471662,roughness:.2,emissive:2779802,emissiveIntensity:.3}),pt(10),(T,_)=>{let N=Dt(),[O,q,at]=C(N,lt(30,150));_.position.set(O,q+lt(-30,10),at);let ut=lt(3,11);_.scale.set(ut,ut*.8,ut),_.rotation.set(g()*6,g()*6,g()*6)}));for(let T=0;T<3;T++){let _=Dt(),[N,O,q]=C(_,lt(70,150)),at=new Gt(ft,new Ee({color:10481888,transparent:!0,opacity:.55,blending:Le,depthWrite:!1}));at.position.set(N,O+lt(18,50),q),at.scale.setScalar(lt(14,34)),at.rotation.set(g()*3,g()*3,0),L.add(at),gt.push([at,lt(-.1,.1),"x"])}}D(L,Et)}}await r();{let[V,rt]=E(2),vt=3,xt=[],K=new Float32Array(e.n),Et=5.3;for(let st of e.gaps)if(e.PAD[st.to]){let mt=e.gaps.find(Rt=>Rt.from>st.to);if(!mt)continue;let it=st.from-16,At=mt.to+16;for(let Rt=Math.max(0,it);Rt<=Math.min(e.n-1,At);Rt++){let de=Math.min(1,Math.min(Rt-it,At-Rt)/14);K[Rt]=Math.max(K[Rt],de*de*(3-2*de))}}let L=-.95,Dt=Math.PI+.95,lt=26,T=[],_=[],N=[],O=[],q=[],at=0;for(let st=V;st<=rt;st+=vt){let mt=e.TH[st],it=Math.cos(mt),At=-Math.sin(mt),Rt=K[st],de=2.9;if(Rt>0){let ze=e.Y[st];for(let Sn=st;Sn<Math.min(e.n,st+90);Sn++)ze=Math.min(ze,e.Y[Sn]);let Re=e.Y[st];for(let Sn=Math.max(0,st-60);Sn<=st;Sn++)Re=Math.max(Re,e.Y[Sn]);de=2.9+Rt*((Re-e.Y[st])*.5+(ze-e.Y[st])*.5-(Re-ze)*0+(Re-ze)*.38)}let _e=Et+Rt*9.5;for(let ze=0;ze<=lt;ze++){let Re=L+(Dt-L)*ze/lt,Sn=ui(st*.06,Re*1.3,2.2,4),os=ui(st*.15,Re*2.5,7.7,3),ls=_e*(.86+Sn*.5)+(os-.5)*1.6;T.push(e.X[st]+it*Math.cos(Re)*ls,e.Y[st]+de+Math.sin(Re)*ls*(1+Rt*.25),e.Z[st]+At*Math.cos(Re)*ls);let Hi=.5+os*.5;_.push(.3*Hi+.04+(os>.62?.25:0),.55*Hi+.08+(os>.62?.3:0),.95*Hi+.12),g()<.13&&Re>.3&&Re<Math.PI-.4&&O.push([T[T.length-3],T[T.length-2],T[T.length-1],_e]),g()<.22&&q.push([T.length-3,mt,Re])}at++}let ut=lt+1;for(let st=0;st<at-1;st++)for(let mt=0;mt<lt;mt++){let it=st*ut+mt,At=it+1,Rt=it+ut,de=Rt+1;N.push(it,Rt,At,At,Rt,de)}let Y=new xe;Y.setAttribute("position",new se(T,3)),Y.setAttribute("color",new se(_,3)),Y.setIndex(N),Y.computeVertexNormals(),Y.computeBoundingSphere();let et=new Gt(Y,new we({vertexColors:!0,roughness:.92,metalness:0,side:He,flatShading:!1,emissive:928328,emissiveIntensity:1.2}));a.tube=et,i.add(et);let St=new Pe;St.add(on(Xt,Bt,O.length,(st,mt)=>{let it=O[st];mt.position.set(it[0],it[1],it[2]);let At=g()*.5+.35;mt.scale.set(At,1.5+g()*5.5,At)}));let Ft=[5826303,8060888,10465535,5826303,11596031],wt=on(ct,Ct,q.length*3,(st,mt)=>{let it=q[Math.floor(st/3)],At=it[0];mt.position.set(T[At],T[At+1],T[At+2]);let Rt=new U(e.X[V]*0,0,0);mt.lookAt(mt.position.x+(Math.random()-.5),mt.position.y-1,mt.position.z+(Math.random()-.5)),mt.rotateX(Math.PI/2*(g()-.5)),mt.rotateZ(g()*1.5);let de=.5+g()*1.1;return mt.scale.set(de,de*(1.3+g()*1.6),de),Ft[Math.floor(g()*Ft.length)]});St.add(wt);let bt=new Float32Array(q.length*3),Yt=new Float32Array(q.length*3),$t=new kt;q.forEach((st,mt)=>{bt[mt*3]=T[st[0]],bt[mt*3+1]=T[st[0]+1],bt[mt*3+2]=T[st[0]+2],$t.setHex(Ft[mt%Ft.length]),Yt[mt*3]=$t.r,Yt[mt*3+1]=$t.g,Yt[mt*3+2]=$t.b});let te=new xe;te.setAttribute("position",new ye(bt,3)),te.setAttribute("color",new ye(Yt,3)),St.add(new wi(te,new oi({size:5,map:w,vertexColors:!0,transparent:!0,opacity:.5,blending:Le,depthWrite:!1,sizeAttenuation:!0})));let z=new Ke(.8,1.3,1,9,1,!0),Tt=[];for(let st=V+6;st<rt-4;st+=10){let mt=e.TH[st],it=g()<.5?-1:1,At=it*(e.W[st]+1.6+g()*1.2);Tt.push([e.X[st]+Math.cos(mt)*At,e.Y[st],e.Z[st]-Math.sin(mt)*At,1.4+g()*.9])}St.add(on(z,new we({color:3493998,roughness:.9,emissive:662060,emissiveIntensity:.8}),Tt.length,(st,mt)=>{let it=Tt[st];mt.position.set(it[0],it[1]+3,it[2]),mt.scale.set(it[3],34,it[3])}));let ht=new Ee({color:8378623,transparent:!0,opacity:.13,blending:Le,depthWrite:!1,side:He});for(let st=V+8;st<rt;st+=14){let mt=e.TH[st],it=(g()-.5)*7,At=new Gt(new Ke(.15,1.7+g(),16,10,1,!0),ht);At.position.set(e.X[st]+Math.cos(mt)*it,e.Y[st]+11,e.Z[st]-Math.sin(mt)*it),At.rotation.z=(g()-.5)*.3,St.add(At)}a.cave=St,i.add(St)}return a.spinners=gt,a.crumble=M.userData.crumble,a.update=(V,rt,vt,xt)=>{for(let K of a.crumble){if(K.fall===0&&V.i>K.b+4&&(K.fall=.001),K.fall>0){K.fall+=rt;let Et=K.fall;K.m.position.y=K.home.y-7*Et*Et,K.m.rotation.x=K.spin[0]*Et,K.m.rotation.y=K.spin[1]*Et,K.m.rotation.z=K.spin[2]*Et,K.m.visible=Et<2.6&&V.i>K.a-4}else K.m.position.copy(K.home),K.m.rotation.set(0,0,0),K.m.visible=!0,V.i>=K.a-2&&V.i<=K.b+3&&(K.m.position.y+=Math.sin(vt*70+K.a)*.05);K.fall>0&&V.i<K.a-30&&(K.fall=0,K.m.visible=!0)}for(let[K,Et,L]of gt)L==="x"?K.rotation.y+=Et*rt:K.rotation.z+=Et*rt;for(let K of a.gates){let Et=K.userData.rings;Et[0].rotation.z+=rt*.7,Et[1].rotation.z-=rt*1.1,Et[2].rotation.y+=rt*.9}for(let K of a.zones)K.g.visible=Math.abs(K.i-V.i)<520&&(K.k===(V.world??K.k)||K.k===(V.world??0)+1&&e.gates[V.world]-V.i<130);a.tube.visible=a.cave.visible=V.i>e.gates[1]-260&&V.i<e.gates[2]+120;for(let K of a.pads){let Et=1+Math.sin(vt*4+K.i)*.05;K.decal.scale.set(K.decal.scale.x,1,K.decal.scale.z),K.decal.material.opacity=.7+.3*Math.sin(vt*5+K.i),K.cush.material.emissiveIntensity=.45+.25*Math.sin(vt*4+K.i)+(K.hit?K.hit:0),K.hit&&(K.hit=Math.max(0,K.hit-rt*2.2)),K.cush.scale.y=.5*(1-(K.squash||0)),K.squash&&(K.squash=Math.max(0,K.squash-rt*4))}},a.setAtm=(V,rt,vt,xt)=>{i.fog.color.copy(V.fog),i.fog.density=V.fogD,d.color.copy(V.hemiS),d.groundColor.copy(V.hemiG),d.intensity=V.hemiI,h.color.copy(V.sun),h.intensity=V.sunI,t.toneMappingExposure=V.expo,tf(o,V,rt);let K=c.uniforms;K.uA.value.copy(V.floorA),K.uB.value.copy(V.floorB),K.uG.value.copy(V.floorGC),K.uGlow.value=V.floorGlow,K.uFogC.value.copy(V.fog),K.uFogD.value=V.fogD,K.uTime.value=rt,K.uFlow.value=V.flow,K.uScale.value=V.floorScale,p.emissive.copy(V.emis),p.emissiveIntensity=V.emisI,i.environmentIntensity=V.env,x.intensity=V.lant*16,l.position.copy(vt.position),h.position.set(vt.position.x+V.sunDir[0]*60,vt.position.y+V.sunDir[1]*60,vt.position.z+V.sunDir[2]*60),f.position.copy(vt.position),a.floor.position.set(vt.position.x,xt.sy!==void 0?Math.min(xt.floor??0,xt.y)-V.floorDrop:-V.floorDrop,vt.position.z)},a.pmrem=y,a}function rv(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#b8824a",t.fillRect(0,0,256,128);for(let n=0;n<256;n+=32)t.fillStyle=`rgba(60,30,10,${.35})`,t.fillRect(n,0,2,128),t.fillStyle="rgba(255,220,160,.12)",t.fillRect(n+2,0,4,128);for(let n=0;n<160;n++){t.strokeStyle=`rgba(80,40,15,${Math.random()*.25})`,t.lineWidth=1;let s=Math.random()*256;t.beginPath(),t.moveTo(s,0),t.lineTo(s+(Math.random()-.5)*6,128),t.stroke()}let e=new Xn(i);return e.colorSpace=Ve,e.wrapS=Ei,e.repeat.set(2,1),e}function af(){let i=new Pe,t=new Pe;i.add(t);let e=[];for(let Q=0;Q<=10;Q++){let dt=Q/10;e.push(new _t(.62+.18*Math.sin(dt*Math.PI*.9)-.05*(1-dt),-.28+dt*.78))}let n=new ts(e,28),s=new we({map:rv(),roughness:.65,metalness:0,side:He,emissive:3809288,emissiveIntensity:.45}),r=new Gt(n,s);r.scale.set(.9,1,1.3),t.add(r);let a=new we({color:7043718,roughness:.35,metalness:.8});for(let Q of[-.05,.36]){let dt=new Gt(new Rn(.76+(Q<0?.01:.02),.03,8,40),a);dt.rotation.x=Math.PI/2,dt.position.y=Q,dt.scale.set(.9,1.3,1),t.add(dt)}let o=new Gt(new Rn(.74,.05,8,40),s);o.rotation.x=Math.PI/2,o.position.y=.5,o.scale.set(.9,1.3,1),t.add(o);let l=new Gt(new Ur(.62,24),new we({color:5913120,roughness:.9}));l.rotation.x=-Math.PI/2,l.position.y=0,l.scale.set(.9,1.3,1),t.add(l);let c=new we({color:9659711,roughness:.85,emissive:4860950,emissiveIntensity:.7}),u=new we({color:14070922,roughness:.9,emissive:6967864,emissiveIntensity:.4}),d=new we({color:1445900,roughness:.4}),h=new Pe;h.position.set(0,.2,.05),t.add(h);let f=new Gt(new Fe(.42,20,14),c);f.scale.set(.95,1.1,1),f.position.y=.4,h.add(f);let x=new Gt(new Fe(.33,16,12),u);x.scale.set(.9,1,.6),x.position.set(0,.38,.22),h.add(x);let y=new Pe;y.position.set(0,.98,.1),h.add(y);let m=new Gt(new Fe(.34,22,16),c);m.scale.set(1.05,.92,1),y.add(m);let p=new Gt(new Fe(.2,16,12),u);p.scale.set(1.15,.8,1),p.position.set(0,-.07,.27),y.add(p);let M=new Gt(new Fe(.07,10,8),d);M.scale.set(1.3,.85,1),M.position.set(0,0,.45),y.add(M);for(let Q of[-1,1]){let dt=new Gt(new Fe(.058,12,10),d);dt.position.set(Q*.15,.07,.3),y.add(dt);let nt=new Gt(new Fe(.02,6,6),new Ee({color:16777215}));nt.position.set(Q*.15+.015,.095,.345),y.add(nt);let yt=new Gt(new Fe(.075,10,8),c);yt.position.set(Q*.25,.27,-.02),yt.scale.set(1,.8,.7),y.add(yt);let ot=new Gt(new Os(.075,.28,6,10),c);ot.position.set(Q*.52,.38,.28),ot.rotation.set(.9,0,Q*.35),h.add(ot);for(let Ut of[-1,1]){let Ht=new Gt(new Ke(.004,.004,.3,4),new Ee({color:16050907}));Ht.position.set(Q*.22,-.06+Ut*.025,.4),Ht.rotation.z=Math.PI/2+Ut*.12+0,y.add(Ht)}}let S=new Pe;S.position.set(0,.28,-.4),h.add(S);let v=new Gt(new Os(.1,.62,6,12),c);v.rotation.x=Math.PI/2+.4,v.position.set(0,0,-.4),S.add(v);let w=.3,A=14,I=new fn(w,2.6,1,A),g=new Gt(I,new we({color:16734780,roughness:.7,side:He,emissive:4198408,emissiveIntensity:.4}));g.frustumCulled=!1,y.add(g),g.position.set(0,-.28,-.05);let E=new Gt(new Rn(.33,.07,8,24),g.material);E.rotation.x=Math.PI/2,E.position.set(0,-.3,0),E.scale.set(1.05,.95,1),y.add(E);let C=new Pe;C.position.set(0,.62,.95),t.add(C);let R=new Gt(new Ke(.025,.025,.5,6),a);R.position.y=-.1,C.add(R);let D=new Gt(new Fe(.14,12,10),new Ee({color:16767120}));D.position.y=.2,C.add(D);let B=new Gt(new Fe(.22,12,10),new Ee({color:16760928,transparent:!0,opacity:.3,blending:Le,depthWrite:!1}));B.position.y=.2,C.add(B);let k=document.createElement("canvas");k.width=k.height=64;let P=k.getContext("2d"),F=P.createRadialGradient(32,32,2,32,32,32);F.addColorStop(0,"rgba(0,10,30,.55)"),F.addColorStop(1,"rgba(0,10,30,0)"),P.fillStyle=F,P.fillRect(0,0,64,64);let W=new Gt(new fn(1,1).rotateX(-Math.PI/2),new Ee({map:new Xn(k),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return W.scale.set(2.3,1,3),W.renderOrder=5,{root:i,body:t,shadow:W,head:y,tail:S,otter:h,scarf:g,lant:C,animate(Q,dt,nt,yt,ot,Ut,Ht=0){t.rotation.z=Pl.lerp(t.rotation.z,-nt*.55+Ht,.25),t.rotation.x=Pl.lerp(t.rotation.x,yt+Ut*.12,.2),h.rotation.z=-nt*.4,y.rotation.x=-.12-ot*.25+Math.sin(Q*8)*.01*dt*.1,y.rotation.z=nt*.3,S.rotation.y=Math.sin(Q*6)*.25+nt*.8;let tt=I.attributes.position,Mt=.9+Math.min(1,dt/28)*1.7;for(let ct=0;ct<=A;ct++){let Ct=ct/A,Xt=-Ct*Mt,Bt=Math.sin(Q*14-Ct*9)*.14*Ct*(.4+dt/30)+nt*.9*Ct*Ct,ee=-Ct*.22+Math.sin(Q*9-Ct*6)*.06*Ct;for(let qt=0;qt<2;qt++){let ft=ct*2+qt;tt.setXYZ(ft,(qt?1:-1)*w/2+Bt,ee,Xt)}}tt.needsUpdate=!0}}}function of(i,t={}){let e=Dh(),n=t.low?160:320,s=new Float32Array(n*3),r=new Float32Array(n*3),a=new Float32Array(n),o=new Float32Array(n),l=new Float32Array(n),c=new Float32Array(n*3);for(let R=0;R<n;R++)a[R]=0,s[R*3+1]=-9999;let u=new xe;u.setAttribute("position",new ye(s,3)),u.setAttribute("color",new ye(c,3));let d=new wi(u,new oi({size:.3,map:e,vertexColors:!0,transparent:!0,opacity:.8,blending:Le,depthWrite:!1,sizeAttenuation:!0}));d.frustumCulled=!1,i.add(d);let h=0,f=(R,D,B,k,P,F,W,j=.85,Q=.95,dt=1)=>{let nt=h;h=(h+1)%n,s[nt*3]=R,s[nt*3+1]=D,s[nt*3+2]=B,r[nt*3]=k,r[nt*3+1]=P,r[nt*3+2]=F,a[nt]=W,o[nt]=0,c[nt*3]=j,c[nt*3+1]=Q,c[nt*3+2]=dt},x=t.low?36:70,y=new Float32Array(x*6),m=[];for(let R=0;R<x;R++)m.push([Math.random(),Math.random(),Math.random()]);let p=new xe;p.setAttribute("position",new ye(y,3));let M=new Fs({color:16777215,transparent:!0,opacity:0,blending:Le,depthWrite:!1}),S=new Lr(p,M);S.frustumCulled=!1,i.add(S);let v=t.low?120:240,w=new Float32Array(v*3),A=[];for(let R=0;R<v;R++)w[R*3]=(Math.random()-.5)*60,w[R*3+1]=(Math.random()-.3)*30,w[R*3+2]=(Math.random()-.3)*80,A.push(Math.random());let I=new xe;I.setAttribute("position",new ye(w,3));let g=new oi({size:.28,map:e,transparent:!0,opacity:.8,blending:Le,depthWrite:!1,color:16777215}),E=new wi(I,g);return E.frustumCulled=!1,i.add(E),{emit:f,sprayAt(R,D,B,k,P,F,W,j){let Q=Math.floor(W);for(let dt=0;dt<Q;dt++){let nt=P,yt=-k,ot=F*(.5+Math.random()*.9);f(R+nt*F*.6,D+.1,B+yt*F*.6,nt*ot*(2+j*4)-k*3+(Math.random()-.5)*1.5,1.5+Math.random()*3,yt*ot*(2+j*4)-P*3+(Math.random()-.5)*1.5,.5+Math.random()*.45)}},burst(R,D,B,k,P,F=.8,W=.95,j=1){for(let Q=0;Q<k;Q++){let dt=Math.random()*6.28,nt=P*(.3+Math.random());f(R,D+.1,B,Math.cos(dt)*nt,2+Math.random()*P*.7,Math.sin(dt)*nt,.6+Math.random()*.7,F,W,j)}},update(R,D,B,k,P,F,W,j){for(let ot=0;ot<n;ot++){if(a[ot]<=0){s[ot*3+1]=-9999;continue}if(o[ot]+=R,o[ot]>a[ot]){a[ot]=0,s[ot*3+1]=-9999;continue}r[ot*3+1]-=9*R,s[ot*3]+=r[ot*3]*R,s[ot*3+1]+=r[ot*3+1]*R,s[ot*3+2]+=r[ot*3+2]*R;let Ut=1-o[ot]/a[ot];c[ot*3]*=1,c[ot*3+0]=Math.max(0,c[ot*3+0]-R*.6),c[ot*3+1]=Math.max(0,c[ot*3+1]-R*.6),c[ot*3+2]=Math.max(0,c[ot*3+2]-R*.5)}u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0;let Q=P[0]/Math.max(1,F),dt=P[1]/Math.max(1,F),nt=Math.max(0,(F-14)/18)*.55+(j?.25:0);M.opacity=Math.min(.8,nt),M.color.copy(W.bot).lerp(new kt(16777215),.6);let yt=F*.05*(j?1.5:1);for(let ot=0;ot<x;ot++){let Ut=m[ot],tt=-10+(Ut[0]+D*(.9+Ut[1]))%1*70,Mt=(Ut[1]-.5)*26,ct=(Ut[2]-.35)*14,Ct=k.x+Q*tt+dt*Mt,Xt=k.y+3+ct,Bt=k.z+dt*tt-Q*Mt;y[ot*6]=Ct,y[ot*6+1]=Xt,y[ot*6+2]=Bt,y[ot*6+3]=Ct-Q*yt,y[ot*6+4]=Xt,y[ot*6+5]=Bt-dt*yt}p.attributes.position.needsUpdate=!0,g.color.copy(W.mote),g.opacity=.35+.5*W.moteN;for(let ot=0;ot<v;ot++){let Ut=A[ot];w[ot*3+1]+=(W.moteRise*(.5+Ut)-.2)*R,w[ot*3]+=Math.sin(D*.7+Ut*20)*.4*R;let Ht=w[ot*3]+0-0,tt=k.x,Mt=-P[0]*R,ct=-P[1]*R;w[ot*3]+=Mt,w[ot*3+2]+=ct,w[ot*3]>30&&(w[ot*3]-=60),w[ot*3]<-30&&(w[ot*3]+=60),w[ot*3+2]>50&&(w[ot*3+2]-=80),w[ot*3+2]<-30&&(w[ot*3+2]+=80),w[ot*3+1]>22&&(w[ot*3+1]-=34),w[ot*3+1]<-12&&(w[ot*3+1]+=34)}I.attributes.position.needsUpdate=!0,E.position.set(k.x,k.y,k.z)}}}var Wt=i=>document.getElementById(i),er=matchMedia("(pointer: coarse)").matches,Wl=er&&Math.min(screen.width,screen.height)<900,zi=(()=>{try{return localStorage.getItem("hk_lang")||(/^ja/.test(navigator.language)?"ja":"en")}catch{return"ja"}})(),Mn=i=>window.TXT[zi][i]??i,Ks={get(i,t){try{let e=localStorage.getItem(i);return e==null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}};function Gl(){document.documentElement.lang=zi,document.querySelectorAll("[data-t]").forEach(t=>{t.textContent=Mn(t.dataset.t)}),Wt("langBtn").textContent=zi==="ja"?"English":"\u65E5\u672C\u8A9E",Wt("muteBtn").textContent=Snd.muted?Mn("sound_off"):Mn("sound_on");let i=Ks.get("hk_best",null);Wt("bestTxt").textContent=i?`${Mn("best")} ${Math.round(i.dist)}m`:"",document.title=zi==="ja"?"\u6C37\u6CB3\u304F\u3060\u308A\uFF5C\u7A7A\u306E\u6C37\u306E\u9053\u3092\u6ED1\u308B3D\u30C9\u30EA\u30D5\u30C8\u30B2\u30FC\u30E0":"Glacier Descent | A 3D ice-drifting game"}Snd.def({land:["snd/land1.mp3","snd/land2.mp3"],bounce:["snd/bounce1.mp3","snd/bounce2.mp3"],tick:["snd/ice_tick1.mp3","snd/ice_tick2.mp3"],crack:"snd/ice_crack.mp3",gate:"snd/gate.mp3",finish:"snd/finish.mp3",cp:"snd/cp.mp3",whoosh:"snd/whoosh.mp3",fall:"snd/fall_ahhh.mp3",squeak:"snd/squeak.mp3"});var av=[null,["snd/fire.mp3",.22],["snd/cave.mp3",.5],["snd/chime.mp3",.4]];function lf(i,t){let e=Snd.loops[i];e&&(e.vol=t,e.g&&Snd.ctx&&e.g.gain.setTargetAtTime(Math.max(1e-4,t),Snd.ctx.currentTime,.12))}var Nh=!1;function js(){Snd.init(),!Nh&&(Nh=!0,Snd.loop("wind","snd/wind.wav",1e-4,.2),Snd.loop("slide","snd/slide.wav",1e-4,.2),mf(G.world))}function mf(i){let t=av[i];Snd.loop("amb",t?t[0]:null,t?t[1]:0,1.2),i===2?Snd.loop("amb2","snd/drip.mp3",.08,1.2):Snd.loop("amb2",null,0,.8)}var yn=zl(),G=Ch(yn),Ln=new Nl({antialias:!Wl,powerPreference:"high-performance",alpha:!1}),$s=Math.min(devicePixelRatio||1,Wl?1.25:er?1.5:2);var cf=er?.6:1;Ln.setPixelRatio($s);Wt("view").appendChild(Ln.domElement);var Kn=new Ki,Xe=new Je(70,1,.3,1800),hf=performance.now(),Bi=async()=>{performance.now()-hf<10||(await new Promise(t=>{let e=new MessageChannel;e.port1.onmessage=()=>t(),e.port2.postMessage(0)}),hf=performance.now())},ki,In,fi,gf,Uh;async function ov(){let i=t=>{let e=Wt("ldFill");e&&(e.style.width=t+"%")};i(8),Yl=await Kd(yn,Bi),i(30),await Bi(),ki=await rf(Kn,Ln,yn,{low:Wl,yield:Bi}),await Bi(),i(80),In=af(),Kn.add(In.root,In.shadow),fi=of(Kn,{low:Wl}),gf=ki.lantern,Uh=new es(16773340,3.5,8,1.8),Kn.add(Uh),await Bi()}function Oh(){let i=innerWidth,t=innerHeight;Ln.setSize(i,t,!1),Xe.aspect=i/t,Xe.updateProjectionMatrix()}addEventListener("resize",Oh);Oh();var H={count:{},state:"title",t:0,shake:0,kick:0,fall:{t:0},camBlend:0,yaw:0,camPos:new U,look:new U,atm:{},atmFrom:null,atmT:1,paused:!1,readyT:0,wl:0,fadeT:0,sprayAcc:0,lastBand:null,markT:0,speedHist:[],newBest:!1,finishT:0},ue={x:0,y:0,z:0,th:0},tr=Hl(di[0],di[0],0,{}),US=Ks.get("hk_best",null),Yl=[],pe={steer:0,brake:0,padL:0,padR:0,padB:0,dragX:0,dragY:0,dragging:!1,keyL:0,keyR:0,keyB:0};function lv(){let i=0,t=0;return pe.dragging?(i=Math.max(-1,Math.min(1,-pe.dragX/55)),t=Math.max(0,Math.min(1,(pe.dragY-14)/60))):pe.padL||pe.padR?i=pe.padL?1:-1:i=(pe.keyL?1:0)-(pe.keyR?1:0),(pe.padB||pe.keyB)&&(t=1),Math.abs(i)<.08&&(i=0),[i,t]}function cv(){let i=(a,o)=>{let l=u=>{u.preventDefault(),js(),pe[o]=1,a.classList.add("on");try{a.setPointerCapture(u.pointerId)}catch{}},c=u=>{pe[o]=0,a.classList.remove("on")};a.addEventListener("pointerdown",l),a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("lostpointercapture",c)};i(Wt("padL"),"padL"),i(Wt("padR"),"padR"),i(Wt("padB"),"padB");let t=Wt("view"),e=0,n=0,s=-1;t.addEventListener("pointerdown",a=>{if(H.state==="play"){js(),s=a.pointerId,e=a.clientX,n=a.clientY,pe.dragging=!0,pe.dragX=0,pe.dragY=0;try{t.setPointerCapture(s)}catch{}}}),t.addEventListener("pointermove",a=>{a.pointerId!==s||!pe.dragging||(pe.dragX=a.clientX-e,pe.dragY=a.clientY-n)});let r=a=>{a.pointerId===s&&(s=-1,pe.dragging=!1,pe.dragX=0,pe.dragY=0)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),addEventListener("keydown",a=>{a.repeat||((a.code==="ArrowLeft"||a.code==="KeyA")&&(pe.keyL=1),(a.code==="ArrowRight"||a.code==="KeyD")&&(pe.keyR=1),(a.code==="ArrowDown"||a.code==="KeyS")&&(pe.keyB=1),["ArrowLeft","ArrowRight","ArrowDown","ArrowUp","Space"].includes(a.code)&&a.preventDefault(),(a.code==="Enter"||a.code==="Space")&&H.state==="title"&&ga(),(a.code==="Enter"||a.code==="Space")&&H.state==="wait"&&zh(),js())}),addEventListener("keyup",a=>{(a.code==="ArrowLeft"||a.code==="KeyA")&&(pe.keyL=0),(a.code==="ArrowRight"||a.code==="KeyD")&&(pe.keyR=0),(a.code==="ArrowDown"||a.code==="KeyS")&&(pe.keyB=0)}),addEventListener("blur",()=>{pe.keyL=pe.keyR=pe.keyB=0})}var hv=Wt("hTubs"),uv='<svg viewBox="0 0 20 20"><ellipse cx="10" cy="11" rx="7" ry="6" fill="#b9854f" stroke="#4a2c14" stroke-width="1"/><ellipse cx="10" cy="7" rx="7" ry="2.4" fill="#6b4524"/></svg>',dv='<svg viewBox="0 0 20 20"><ellipse cx="10" cy="11" rx="7" ry="6" fill="none" stroke="#a9d4ee" stroke-width="1.3" stroke-dasharray="2 2"/></svg>';function Zl(){let i=Math.max(0,G.lives-1);hv.innerHTML=Array.from({length:Ae.lives-1},(t,e)=>e<i?uv:dv).join("")}function Fh(i){let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(1)}`}var uf=-1,df="";function xf(){let i=Math.round(G.maxS);i!==uf&&(uf=i,Wt("hDist").textContent=i);let t=Fh(G.runT);t!==df&&(df=t,Wt("hTime").textContent=t),Wt("hDrift").style.width=(G.charge*100).toFixed(0)+"%";let e=null;if(G.ground&&G.mode==="run"){for(let s of Yl)if(s.from>G.i&&s.from-G.i<120){e=s;break}}let n=Wt("hBand");if(e&&e.hi>0){n.hidden=!1;let s=8,r=34,a=o=>Math.max(0,Math.min(100,(o-s)/(r-s)*100));Wt("bandOk").style.left=a(e.lo)+"%",Wt("bandOk").style.width=a(e.hi)-a(e.lo)+"%",Wt("bandNow").style.left=a(G.speed)+"%"}else n.hidden||(n.hidden=!0)}function Xl(i){let t=Wt("hWorld");t.innerHTML=`<small>${Mn("world_n")} ${i+1}</small>${Mn("world"+i)}`,t.classList.add("on"),clearTimeout(Xl.t),Xl.t=setTimeout(()=>t.classList.remove("on"),2200)}function nr(i,t){H.wl=i,H.atmFrom=Object.assign({},tr);for(let e of["top","mid","bot","fog","hemiS","hemiG","sun","emis","floorA","floorB","floorGC","mote","track"])H.atmFrom[e]=tr[e].clone();H.atmT=t?1:0,Kn.environment=ki.envs[i],mf(i)}function ff(i,t="#fff"){let e=Wt("flash");e.style.background=t,i?e.classList.add("on"):e.classList.remove("on")}function ga(){H.state==="title"&&(js(),H.state="ready",H.readyT=0,Wt("title").hidden=!0,Wt("hud").hidden=!1,document.body.classList.toggle("nopads",!er&&!1),G.reset(0),G.lives=Ae.lives,G.falls=0,G.runT=0,G.maxS=0,G.dead=!1,ue.x=G.x,ue.y=G.y,ue.z=G.z,ue.th=G.th,nr(0,!0),Zl(),H.newBest=!1)}function _f(){H.state="title",Wt("bGo").hidden=!0,Wt("hCount").hidden=!0,Wt("hFell").hidden=!0,Wt("result").hidden=!0,Wt("hud").hidden=!0,Wt("title").hidden=!1,G.reset(0),G.lives=Ae.lives,G.falls=0,G.runT=0,G.maxS=0,G.dead=!1,G.mode="run",ue.x=G.x,ue.y=G.y,ue.z=G.z,ue.th=G.th,nr(0,!0),H.camBlend=0,Gl()}function Bh(i){H.state="result";let t=Math.round(G.maxS),e="hk_best",n=Ks.get(e,null),s=!n||t>n.dist||i&&G.finished&&(!n.time||G.runT<n.time);s&&Ks.set(e,{dist:Math.max(t,n?n.dist:0),time:i?Math.min(G.runT,n&&n.time?n.time:1e9):n?n.time:0});let r=Ks.get(e,null);Wt("rTitle").textContent=Mn(i?"r_title_done":"r_title_over"),Wt("rDist").textContent=t,Wt("rTime").textContent=Fh(G.runT),Wt("rFalls").textContent=G.falls,Wt("rBest").textContent=`${Math.round(r.dist)}m`+(s&&n?" "+Mn("new"):""),Wt("rSteps").innerHTML=[0,1,2,3].map(o=>`<i class="${G.maxS>=(o===0?0:yn.gates[o-1]*1.5)?"on":""}"></i>`).join("");let a=Mn("tweet").replace("{d}",t).replace("{t}",Fh(G.runT));Wt("bShare").href="https://x.com/intent/post?text="+encodeURIComponent(a+" #\u6C37\u6CB3\u304F\u3060\u308A")+"&url="+encodeURIComponent("https://tom3games.com/play/hyouga-kudari/"),Wt("hud").hidden=!0,Wt("result").hidden=!1}function zh(){H.state!=="wait"||Wt("bGo").hidden||(Wt("bGo").hidden=!0,H.state="count",H.countT=0,H.countN=0,js())}function fv(i){H.countT+=i;let t=3-Math.floor(H.countT),e=Wt("hCount");if(t<=0){e.hidden=!0,H.state="play";return}t!==H.countN&&(H.countN=t,e.textContent=t,e.hidden=!1,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),Snd.play("tick",{vol:.7,rate:t===1?1.25:1}))}function vf(){G.respawn(),G.dead=!1,ue.x=G.x,ue.y=G.y,ue.z=G.z,ue.th=G.th,H.yaw=G.th,H.camSnap=!0,H.fall.t=0,Wt("hFell").hidden=!0,Zl(),G.world!==H.wl&&nr(G.world,!0),H.state==="wait"&&(Wt("bGo").hidden=!1)}function pv(i){for(let t of i)switch(H.count[t.t]=(H.count[t.t]||0)+1,t.perfect&&(H.count.perfect=(H.count.perfect||0)+1),t.t){case"boost":Snd.play("whoosh",{vol:.85,rate:1.1}),H.kick=1,H.shake=Math.max(H.shake,.5);break;case"land":H.push=1,Snd.play("land",{vol:Math.min(1,.4+t.imp/30)}),H.shake=Math.max(H.shake,Math.min(1,t.imp/26)),fi.burst(G.x,G.y,G.z,26,5+t.imp*.1),t.perfect&&(Snd.play("cp",{vol:.5,rate:1.3}),H.kick=1);break;case"touch":break;case"bounce":{Snd.play("bounce",{vol:1,rate:1}),Snd.play("squeak",{vol:.55,rate:1.1,delay:.05}),H.shake=1,H.kick=1.3,fi.burst(G.x,G.y,G.z,46,7,.55,1,.85);let e=ki.pads.find(n=>G.i>=n.i-1&&G.i<=n.j+1);e&&(e.hit=1.4,e.squash=.65);break}case"edge":Snd.play("tick",{vol:.5,rate:1.1});break;case"leave":if(!t.edge)break;Snd.play("crack",{vol:.7});break;case"gate":Snd.play("gate",{vol:.9}),Snd.duck(.5,1.5),ff(!0),setTimeout(()=>ff(!1),140),nr(t.world,!1),Xl(t.world),H.shake=.6;break;case"cp":Snd.play("cp",{vol:.35});break;case"fall":Snd.play("fall",{vol:.9,rate:1.45}),Snd.play("squeak",{vol:.5,rate:.8}),H.fall.t=0,H.fall.kind=G.world,Wt("hFell").innerHTML=`${Mn("fell")}<small>${G.lives>0?Mn("cp"):""}</small>`,Wt("hFell").hidden=!1,Zl();break;case"dead":if(G.lives<=0){Bh(!1);break}H.fadeT=1e-4,Qs.on||(H.state="wait");break;case"finish":Snd.play("finish",{vol:.9}),Snd.play("chime",{vol:.5}),H.finishT=1e-4;break}}var FS=new U;function mv(i){if(H.atmT<1){H.atmT=Math.min(1,H.atmT+i/.9);let t=H.atmT*H.atmT*(3-2*H.atmT);Hl(H.atmFrom,di[H.wl],t,tr)}else Hl(di[H.wl],di[H.wl],0,tr)}var pa=0;function ql(i,t){H.t+=i;let e=ue.x+(G.x-ue.x)*t,n=ue.y+(G.y-ue.y)*t,s=ue.z+(G.z-ue.z)*t,r=G.th-ue.th;r=Math.atan2(Math.sin(r),Math.cos(r));let a=ue.th+r*t,o=G.speed;In.root.position.set(e,n,s),In.root.rotation.y=a;let l=!G.ground&&G.mode!=="fall",c=Math.max(-.6,Math.min(.6,G.slip))*(G.ground?1:.3)+(G.mode==="fall"?Math.sin(H.t*9)*.5:0),u=l?Math.max(-.5,Math.min(.5,-G.vy*.025)):-.04,d=G.mode==="fall"?1:G.ground&&Math.abs(G.d)>G.hw-.7?.8:0,h=G.ground&&G.mode==="run"&&G.surf&&Math.abs(G.d)>G.hw-.3;H.danger=(H.danger||0)+((h?1:0)-(H.danger||0))*(1-Math.exp(-i*(h?10:3)));let f=H.danger;if(In.animate(H.t,o,c,u,Math.max(d,f>.4?.8:0),G.brake||0,-Math.sign(G.d||1)*.42*f),h&&H.state==="play"){let Ut=G.tth||a,Ht=Math.sign(G.d),tt=e+Math.cos(Ut)*Ht*.9,Mt=s-Math.sin(Ut)*Ht*.9;Math.random()<.8&&fi.emit(tt,n+.15,Mt,-G.vx*.15+(Math.random()-.5)*2,1+Math.random()*2.5,-G.vz*.15+(Math.random()-.5)*2,.35,1,.75,.35),H.creakT=(H.creakT||0)-i,H.creakT<=0&&(H.creakT=.28,Snd.play("tick",{vol:.45,rate:1.15}))}let x=Wt("vig");x&&(x.style.opacity=H.state==="play"?String(Math.min(1,f*(.5+.4*Math.max(0,Math.sin(H.t*11))))+(G.mode==="fall"?.5:0)):"0"),H.state==="play"&&yn.CRM[G.i]&&G.ground&&(H.shake=Math.max(H.shake,.22),Math.random()<.5&&fi.emit(e-Math.sin(a)*2,n-.2,s-Math.cos(a)*2,(Math.random()-.5)*3,2+Math.random()*3,(Math.random()-.5)*3,.8,.8,.9,1)),G.mode==="fall"&&(In.body.rotation.x+=i*3.5,In.body.rotation.z+=i*1.6),In.shadow.visible=G.ground&&G.mode!=="fall",In.shadow.position.set(e,n+.08,s),In.shadow.rotation.y=a;let y=o>4?Math.atan2(G.vx,G.vz):a;H.camSnap&&(H.yaw=y,H.camSnap=!1,H.snapPos=!0);let m=Math.atan2(Math.sin(y-H.yaw),Math.cos(y-H.yaw));H.yaw+=m*(1-Math.exp(-i*(G.mode==="fall"?.5:4))),H.af=(H.af||0)+((l&&G.airT>.3&&G.mode!=="fall"?1:0)-(H.af||0))*(1-Math.exp(-i*2.2)),H.push=Math.max(0,(H.push||0)-i*1.6);let p=H.af,M=0;if(H.state==="play"&&G.mode!=="fall"){for(let Ut of Yl)if(G.i>=Ut.from-55&&G.i<=Ut.end+2){M=1;break}}H.jc=(H.jc||0)+(M-(H.jc||0))*(1-Math.exp(-i*2.2));let S=H.jc,v=G.world===2?1:0,w=11.2-v*1.6+o*.06+(l?1.4:0)+(G.boostT>0?.8:0)+S*2.6+p*5.5-H.push*2.4,A=6.8-v*1.4+(l?1.4:0)+S*3.4+p*4.2,I,g,E,C,R,D,B=Math.sin(H.yaw),k=Math.cos(H.yaw);if(H.state==="title"||H.camBlend<1){let Ut=a+.62+Math.sin(H.t*.35)*.18,Ht=e+Math.sin(Ut)*6.2,tt=n+2.6,Mt=s+Math.cos(Ut)*6.2,ct=e-B*w,Ct=n+A,Xt=s-k*w,Bt=H.state==="title"?0:H.camBlend,ee=Bt*Bt*(3-2*Bt);I=Ht+(ct-Ht)*ee,g=tt+(Ct-tt)*ee,E=Mt+(Xt-Mt)*ee;let qt=e,ft=n+1,gt=s,pt=e+B*7,V=n+.6,rt=s+k*7;C=qt+(pt-qt)*ee,R=ft+(V-ft)*ee,D=gt+(rt-gt)*ee,H.state==="ready"&&(H.camBlend=Math.min(1,H.camBlend+i/1.3))}else G.mode==="fall"?(I=H.camPos.x+(e-H.camPos.x)*.02,E=H.camPos.z+(s-H.camPos.z)*.02,g=Math.max(H.camPos.y,n+7+H.fall.t*3.2),C=e,R=n,D=s,H.look.set(e,n,s)):(I=e-B*w,g=n+A,E=s-k*w,C=e+B*(7+S*13),R=n+.7-(l?1.5:0)-S*2.5-p*3.5,D=s+k*(7+S*13));let P=!!H.snapPos;H.snapPos&&(H.camPos.set(I,g,E),H.look.set(C,R,D),H.snapPos=!1);let F=1-Math.exp(-i*(G.mode==="fall"?3:12)),W=1-Math.exp(-i*(l?4:8));H.camPos.x+=(I-H.camPos.x)*F,H.camPos.z+=(E-H.camPos.z)*F,H.camPos.y+=(g-H.camPos.y)*W,H.look.x+=(C-H.look.x)*F,H.look.z+=(D-H.look.z)*F,H.look.y+=(R-H.look.y)*W,H.shake=Math.max(0,H.shake-i*2.2),H.kick=Math.max(0,H.kick-i*2);let j=H.shake*.35+(G.boostT>0?.07:0)+Math.max(0,(o-20)/30)*.04;Xe.position.set(H.camPos.x+(Math.random()-.5)*j,H.camPos.y+(Math.random()-.5)*j,H.camPos.z+(Math.random()-.5)*j),Xe.up.set(0,1,0),Xe.lookAt(H.look),Xe.rotateZ(-Math.max(-.35,Math.min(.35,G.slip))*.18*(G.ground?1:0)-Math.sign(G.d||1)*.09*f);let Q=Xe.aspect,nt=(Q<.8?78:Q<1.2?66:58)+Math.min(20,Math.max(0,o-14)*1)+H.kick*6+(G.boostT>0?5:0)+S*5+p*7-H.push*4;Math.abs(Xe.fov-nt)>.05&&(Xe.fov+=(nt-Xe.fov)*Math.min(1,i*6),Xe.updateProjectionMatrix()),mv(i);let yt=G.mode==="fall"||l?G.floor??n:n;if(pa+=(yt-pa)*Math.min(1,i*2.5),P&&(pa=yt),ki.setAtm(tr,H.t,Xe,{sy:1,floor:pa,y:pa}),Uh.position.set(e-Math.sin(H.yaw)*2.2,n+3.2,s-Math.cos(H.yaw)*2.2),gf.position.set(e+Math.sin(a)*1,n+1.4,s+Math.cos(a)*1),ki.update({i:G.i,world:G.world},i,H.t,Xe),G.ground&&Math.abs(G.slip)>.22&&o>10&&G.mode==="run"){H.sprayAcc+=i*(30+Math.abs(G.slip)*90);let Ut=Math.floor(H.sprayAcc);H.sprayAcc-=Ut,Ut>0&&fi.sprayAt(e,n,s,Math.sin(a),Math.cos(a),Math.sign(G.slip),Ut,Math.abs(G.slip))}G.boostT>0&&Math.random()<.7&&fi.emit(e-Math.sin(a)*1.4,n+.5,s-Math.cos(a)*1.4,-G.vx*.2+(Math.random()-.5)*2,.5+Math.random(),-G.vz*.2+(Math.random()-.5)*2,.45,1,.8,.5),fi.update(i,H.t,Xe,{x:e,y:n,z:s},[G.vx,G.vz],o,tr,G.boostT>0);let ot=ki.mark;if(l&&H.state==="play"){if(H.markT-=i,H.markT<=0){H.markT=.05;let Ut=G.snapshot(),Ht=null;for(let tt=0;tt<220;tt++){G.step(0,0);let Mt=G.ev.slice(Ut.evn);if(G.mode==="fall")break;if(Mt.some(ct=>ct.t==="bounce"||ct.t==="land"||ct.t==="touch")){Ht=[G.x,G.sy,G.z];break}}G.restore(Ut),H.mark=Ht}if(H.mark){ot.visible=!0,ot.position.set(H.mark[0],H.mark[1]+.45,H.mark[2]),ot.material.opacity=.65+.3*Math.sin(H.t*9);let Ut=3.2+.4*Math.sin(H.t*9);ot.scale.setScalar(Ut)}else ot.visible=!1}else ot.visible=!1;Nh&&Snd.ctx&&(lf("wind",Math.min(.5,Math.max(0,(o-8)/36))*(G.world===2?.5:1)),lf("slide",G.ground&&G.mode==="run"?Math.min(.5,Math.max(0,(Math.abs(G.slip)-.1)*1.1)+Math.max(0,(o-22)*.01)):0))}var Vl=0,pf=performance.now(),yf=!1,gv=0,ma=0,Js={n:0,sum:0,max:0,over:0},Qs={on:!1,b:null};function Mf(){ue.x=G.x,ue.y=G.y,ue.z=G.z,ue.th=G.th;let i,t;if(Qs.on){let e=Qs.b.act();i=e[0],t=e[1]}else[i,t]=lv();if(H.state!=="play"&&(i=0,t=0),G.step(i,t),G.ev.length){let e=G.ev.slice();G.ev.length=0,pv(e)}}function Sf(i){requestAnimationFrame(Sf);let t=(i-pf)/1e3;if(pf=i,t>.1&&(t=.1),!document.hidden){if(Js.n++,Js.sum+=t,Js.max=Math.max(Js.max,t),t>1/40&&Js.over++,(H.state!=="title"||er)&&(ma+=t>1/40?t:-t*.5,ma<0&&(ma=0),ma>.5&&$s>cf&&($s=Math.max(cf,Math.round(($s-.2)*100)/100),Ln.setPixelRatio($s),Oh(),ma=0)),!yf){if(H.state==="ready"&&(H.readyT+=t,H.readyT>1.1&&(H.state="play",Xl(0))),H.state==="count"&&fv(t),H.state==="play"||H.state==="ready"||H.state==="result"||H.state==="title")for(Vl+=t;Vl>=ie;)Vl-=ie,H.state==="play"?Mf():(ue.x=G.x,ue.y=G.y,ue.z=G.z,ue.th=G.th,H.state==="result"&&G.mode==="done"&&G.step(0,0));if(H.fadeT>0){H.fadeT+=t;let e=Wt("flash");e.style.background="#06101c",e.style.opacity=String(Math.min(1,H.fadeT/.35)),e.style.transition="none",H.fadeT>.5&&(vf(),H.fadeT=0,e.style.transition="opacity .5s",e.style.opacity="0",setTimeout(()=>{e.style.background="#fff",e.style.transition=""},600))}G.mode==="fall"&&(H.fall.t+=t),H.finishT>0&&(H.finishT+=t,H.finishT>2.4&&(H.finishT=0,Bh(!0)))}ql(t,H.state==="play"?Math.min(1,Vl/ie):1),(H.state==="play"||H.state==="ready")&&xf(),Ln.render(Kn,Xe),gv++}}async function xv(){Gl(),cv(),await Bi(),Wt("bStart").onclick=()=>{ga()},Wt("bGo").onclick=()=>{zh()},Wt("howBtn").onclick=()=>{Wt("how").hidden=!1},Wt("howClose").onclick=()=>{Wt("how").hidden=!0},Wt("langBtn").onclick=()=>{zi=zi==="ja"?"en":"ja",Ks.set("hk_lang",zi);try{localStorage.setItem("hk_lang",zi)}catch{}Gl()};let i=()=>{js(),Snd.setMute(!Snd.muted),Gl(),Wt("muteX").hidden=!Snd.muted,Wt("muteW").hidden=Snd.muted};Wt("muteBtn").onclick=i,Wt("hMute").onclick=i,Wt("bAgain").onclick=()=>{_f(),ga()},document.body.classList.toggle("nopads",!er),G.reset(0),ue.x=G.x,ue.y=G.y,ue.z=G.z,ue.th=G.th,H.yaw=G.th,H.snapPos=!0,nr(0,!0),Zl(),await Bi(),ql(.016,1),await Bi();let t=()=>{ql(.016,1),Ln.render(Kn,Xe),Wt("ldFill").style.width="100%",setTimeout(()=>{Wt("loading").hidden=!0,Wt("title").hidden=!1,window.__hkReady=!0},150),requestAnimationFrame(Sf)};Ln.compileAsync?Ln.compileAsync(Kn,Xe).then(t,t):t(),/[?&]auto=1/.test(location.search)&&setTimeout(()=>{ga(),hk.botOn({delay:.3,eye:.2,every:.25,seed:3})},600)}function _v(){window.hk={pr:()=>$s,sim:G,course:yn,G:H,input:pe,jumps:Yl,world:ki,fx:fi,scene:Kn,camera:Xe,renderer:Ln,fps:Js,dbg:{pause(i=!0){yf=i},step(i=1,t=!0){for(let e=0;e<i;e++)H.state==="play"?Mf():G.mode==="done"&&G.step(0,0);t&&(ql(1/60,1),xf(),Ln.render(Kn,Xe))}},start:ga,toTitle:_f,botOn(i={}){Qs.b=jd(G,i),Qs.on=!0},botOff(){Qs.on=!1},teleport(i,t){let e=Math.round(i/1.5);G.x=yn.X[e],G.z=yn.Z[e],G.th=yn.TH[e],G.y=yn.Y[e],G.i=e,G.s=i,G.vx=Math.sin(G.th)*(t||20),G.vz=Math.cos(G.th)*(t||20),G.ground=!0,G.mode="run",G.world=yn.WLD[e],G.gatesPassed=yn.gates.filter(n=>n<e).length,G.maxS=Math.max(G.maxS,i),ue.x=G.x,ue.y=G.y,ue.z=G.z,ue.th=G.th,H.camSnap=!0,G.world!==H.wl&&nr(G.world,!0)},showResult:Bh,doRespawn:vf,resume:zh}}ov().then(()=>(_v(),xv()));
