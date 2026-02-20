(()=>{var de=(e,t)=>{for(let r=e.length-1;r>=0;r--)if(t(e[r]))return e[r];return null},ge=[{time:0,duration:594e4,originalLyric:"\u7EAF\u97F3\u4E50\uFF0C\u8BF7\u6B23\u8D4F"}];var Xt={};function ye(e,t){typeof e>"u"&&(e=""),typeof t>"u"&&(t="");let r=`${e}::${t}`;if(Xt[r]!==void 0)return Xt[r];let n=e.length,o=t.length,s=[];for(let a=0;a<=n;a++)s[a]=[],s[a][0]=a;for(let a=0;a<=o;a++)s[0][a]=a;for(let a=1;a<=n;a++)for(let i=1;i<=o;i++)e[a-1]===t[i-1]?s[a][i]=s[a-1][i-1]:s[a][i]=Math.min(s[a-1][i-1]+1,s[a][i-1]+1,s[a-1][i]+1);return s[n][o]}var Pe=e=>!!e.replace(/[\p{P}\p{S}]/gu,"").match(/^[\s\w\u00C0-\u024F]+$/u),Kt=e=>e.replace(/[‘’′]/g,"'").replace(/[“”″]/g,'"').replace(/（/g,"(").replace(/）/g,")").replace(/，/g,",").replace(/！/g,"!").replace(/？/g,"?").replace(/：/g,":").replace(/；/g,";");function Ht(e,t="",r="",n=""){if(n.trim().length===0){let o=et(e).map(a=>({time:a.time,originalLyric:a.lyric,duration:0,...a.unsynced?{unsynced:!0}:{}}));et(t).forEach(a=>{let i=o.find(c=>c.time===a.time);i&&(i.translatedLyric=a.lyric)}),et(r).forEach(a=>{let i=o.find(c=>c.time===a.time);i&&(i.romanLyric=a.lyric)}),o.sort((a,i)=>a.time-i.time);let s=vt(o);for(let a=0;a<s.length;a++)a<s.length-1&&(s[a].duration=s[a+1].time-s[a].time);return vt(o)}else{let o=we(n),s=et(e),a=p=>{let f="equal",m=new Set(p.map(x=>x.time)),h=new Set(s.map(x=>x.time));return new Set([...m].filter(x=>h.has(x))).size/m.size<.1&&(f="closest"),s.forEach(x=>{let g=null;f==="equal"?g=de(p,b=>Math.abs(b.time-x.time)<20):p.forEach(b=>{g?Math.abs(g.time-x.time)>Math.abs(b.time-x.time)&&(g=b):g=b}),g&&(g.originalLyric=g.originalLyric||"",g.originalLyric.length>0&&(g.originalLyric+=" "),g.originalLyric+=x.lyric)}),p},i=(p,f)=>{p.forEach((m,h)=>{let y=0;o.forEach((w,L)=>{Math.abs(o[y].time-m.time)>Math.abs(w.time-m.time)&&(y=L)});let x=[y];for(let w=1;w<=5;w++)y-w>=0&&x.push(y-w),y+w<o.length&&x.push(y+w);x=x.reverse();let g=1e9;for(let w of x){let L=o[w],I=ye(m.originalLyric,L.originalLyric)*1e3+(L[f]?1:0);I<g&&(g=I,y=w)}let b=o[y],M=b[f]??"";b[f]=M.length>0?`${M} ${m.lyric}`:m.lyric})},c=a(et(t)),d=a(et(r)),u=a(et(e));i(c,"translatedLyric"),i(d,"romanLyric"),i(u,"rawLyric");for(let p=0;p<o.length;p++){let f=o[p],m=o[p+1];if(f&&m&&f.originalLyric.trim().length>0&&m.originalLyric.trim().length>0&&f.duration>0){let h=(f?.dynamicLyricTime||f.time)+f.duration,y=m.time;m.dynamicLyricTime&&y>m.dynamicLyricTime&&(y=m.dynamicLyricTime),y-h>=5e3&&o.splice(p+1,0,{time:h,originalLyric:"",duration:y-h})}}for(let p=0;p<o.length;p++){let f=o[p],m=f.rawLyric?.trim()??"",h=f.dynamicLyric||[];for(let y=0;y<h.length;y++){let x=h[y].word.trimEnd();if(m.startsWith(x))m=m.substring(x.length);else break;let g=m.match(/^\s+/);g&&(m=m.substring(g[0].length),h[y].word.match(/\s$/)||(h[y].word+=" "))}}let P=/([\p{Unified_Ideograph}|\u3040-\u309F|\u30A0-\u30FF])/gu;for(let p=0;p<o.length;p++){let m=o[p].dynamicLyric||[];for(let h=0;h<m.length;h++)m[h]?.word?.match(P)&&(m[h].isCJK=!0),m[h]?.word?.match(/\s$/)&&(m[h].endsWithSpace=!0)}for(let p=0;p<o.length;p++){let m=o[p].dynamicLyric||[],h=[-1];for(let y=0;y<m.length-1;y++)(m[y]?.endsWithSpace||m[y]?.word?.match(/[\,\.\，\。\!\?\？\、\；\：\…\—\~\～\·\‘\’\“\”\ﾞ]/))&&(m[y]?.word?.match(/[a-zA-Z]+(\'\‘\’)*[a-zA-Z]*/)||h.push(y));h.push(m.length-1);for(let y=h.length-1;y>=1;y--){let x=null;for(let b=h[y];b>h[y-1];b--){let M=m[b].word.trim();if(!M.match(/[\p{P}\p{S}]/gu)&&!M.match(/^\s*$/)){x=b;break}}if(x===null)continue;let g=m[x];g.duration>=1e3&&(g.trailing=!0)}}return vt(o)}}var be=/^\[(?<time>[0-9]+),(?<duration>[0-9]+)\](?<line>.*)/,xe=/^\((?<time>[0-9]+),(?<duration>[0-9]+),(?<flag>[0-9]+)\)(?<word>[^\(]*)/,Ce=/^\[((?<min>[0-9]+):)?(?<sec>[0-9]+([\.:]([0-9]+))?)\]/,Me=/^\[((?<min>[0-9]+):)?(?<sec>[0-9]+([\.:]([0-9]+))?)\-(?<discriminator>[0-9]+)\]/;function et(e){let t=[];for(let r of e.split(`
`)){let n=r.trim(),o=[];for(;;){let s=n.match(Ce);if(s){let a=Number(s.groups?.min||"0"),i=Number(s.groups?.sec.replace(/:/,".")||"0");o.push(Math.floor((a*60+i)*1e3)),n=n.slice(0,s.index)+n.slice((s.index||0)+s[0].length),n=n.trim()}else break}n=n.trim();for(let s of o)t.push({time:s,lyric:n})}return t.length===0&&e.trim().length>0?Ae(e):t.sort((r,n)=>r.time-n.time)}function Ae(e){let t=[];for(let r of e.split(`
`)){let n=r.trim();n.length&&(n.match(Me)||t.push({time:999999999,lyric:n,unsynced:!0}))}return t.length&&t.unshift({time:0,lyric:"\u6B4C\u8BCD\u4E0D\u652F\u6301\u6EDA\u52A8",unsynced:!0}),t}function we(e){let t=[];for(let r of e.trim().split(`
`)){let n=r.trim(),o=n.match(be);if(o){let s=parseInt(o.groups?.time||"0"),a=parseInt(o.groups?.duration||"0");n=o.groups?.line||"";let i=[];for(;n.length>0;){let d=n.match(xe);if(d){let u=parseInt(d.groups?.time||"0"),P=parseInt(d.groups?.duration||"0"),p=parseInt(d.groups?.flag||"0"),f=d.groups?.word.trimStart(),m=f?.split(/\s+/).filter(h=>h.trim().length>0);if(m){let h=P/m.length;m.forEach((y,x)=>{x===m.length-1?/\s/.test((f??"")[(f??"").length-1])?i.push({time:u+x*h,duration:h,flag:p,word:`${y.trimStart()} `}):i.push({time:u+x*h,duration:h,flag:p,word:y.trimStart()}):x===0?/\s/.test((f??"")[0])?i.push({time:u+x*h,duration:h,flag:p,word:` ${y.trimStart()}`}):i.push({time:u+x*h,duration:h,flag:p,word:y.trimStart()}):i.push({time:u+x*h,duration:h,flag:p,word:`${y.trimStart()} `})})}n=n.slice(d.index||0+d[0].length)}else break}let c={time:s,duration:a,originalLyric:i.map(d=>d.word).join(""),dynamicLyric:i,dynamicLyricTime:s};t.push(c)}}return t.sort((r,n)=>r.time-n.time)}function vt(e){if(e.length>0&&e[e.length-1].time===594e4&&e[e.length-1].duration===0)return ge;let t=[],r=!1;for(e.forEach((n,o,s)=>{if(n.originalLyric.trim().length===0){let a=s[o+1];a&&a.time-n.time>5e3&&!r&&(t.push(n),r=!0)}else r=!1,t.push(n)});t[0]?.originalLyric.length===0;)t.shift();t[0]?.time>5e3&&t.unshift({time:500,duration:t[0]?.time-500,originalLyric:""});for(let n=0;n<t.length;n++){let o=t[n];if(Pe(o?.originalLyric)){if(o?.dynamicLyric)for(let s=0;s<o.dynamicLyric.length;s++)o.dynamicLyric[s].word=Kt(o.dynamicLyric[s].word);o?.originalLyric&&(o.originalLyric=Kt(o.originalLyric))}}return t}var Ie=(e,t=0)=>{let r=3735928559^t,n=1103547991^t;for(let o=0,s;o<e.length;o++)s=e.charCodeAt(o),r=Math.imul(r^s,2654435761),n=Math.imul(n^s,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&n)+(r>>>0)},Zt=window.onProcessLyrics||(()=>{}),ke=e=>{for(let t of e)t.originalLyric==""&&(t.isInterlude=!0);return e},Le=e=>{if(!e)return null;e.lrc||(e.lrc={});let t=(e?.lrc?.lyric??"").replace(/\u3000/g," "),r=e?.ytlrc?.lyric??e?.ttlrc?.lyric??e?.tlyric?.lyric??"",n=e?.yromalrc?.lyric??e?.romalrc?.lyric??"",o=e?.yrc?.lyric??"",s=t.match(/\[(.*?)\]/g)?.length??0,a=Ht(t,r,n,o);return s-a.length>s*.7?Ht(t,r,n):a},Qt=null;window.onProcessLyrics=(e,t)=>{if(!e||e?.data===-400)return Zt(e,t);let r=e;if(typeof e=="string"&&(r={lrc:{lyric:e},source:{name:"\u672C\u5730"}}),(r?.lrc?.lyric??"")!=Qt){console.log("Update Raw Lyrics",r),Qt=r?.lrc?.lyric??"";let n=Le(r);setTimeout(async()=>{let o=await ke(n),s={lyrics:o,contributors:{}};o[0]?.unsynced&&(s.unsynced=!0),r?.lyricUser&&(s.contributors.original={name:r.lyricUser.nickname,userid:r.lyricUser.userid}),r?.transUser&&(s.contributors.translation={name:r.transUser.nickname,userid:r.transUser.userid}),s.contributors.roles=r?.roles??[],s.contributors.roles=s.contributors.roles.filter(a=>!(a.artistMetaList.length==1&&a.artistMetaList[0].artistName=="\u65E0"&&a.artistMetaList[0].artistId==0));for(let a=0;a<s.contributors.roles.length;a++){let i=JSON.stringify(s.contributors.roles[a].artistMetaList);for(let c=a+1;c<s.contributors.roles.length;c++)JSON.stringify(s.contributors.roles[c].artistMetaList)===i&&(s.contributors.roles[a].roleName+=`\u3001${s.contributors.roles[c].roleName}`,s.contributors.roles.splice(c,1),c--)}r?.source&&(s.contributors.lyricSource=r.source),s.hash=`${betterncm.ncm.getPlaying().id}-${Ie(o.map(a=>a.originalLyric).join("\\"))}`,window.currentLyrics=s,console.group("Update Processed Lyrics"),console.log("lyrics",window.currentLyrics.lyrics),console.log("contributors",window.currentLyrics.contributors),console.log("hash",window.currentLyrics.hash),console.groupEnd(),document.dispatchEvent(new CustomEvent("lyrics-updated",{detail:window.currentLyrics}))},0)}return Zt(e,t)};function v(e){return e<0?-1:e===0?0:1}function rt(e,t,r){return(1-r)*e+r*t}function te(e,t,r){return r<e?e:r>t?t:r}function lt(e,t,r){return r<e?e:r>t?t:r}function Mt(e){return e=e%360,e<0&&(e=e+360),e}function j(e){return e=e%360,e<0&&(e=e+360),e}function ee(e,t){return j(t-e)<=180?1:-1}function At(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function mt(e,t){let r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],o=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,o]}var re=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Te=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Ot=[95.047,100,108.883];function It(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function zt(e){let t=nt(e[0]),r=nt(e[1]),n=nt(e[2]);return It(t,r,n)}function ne(e){return e>>24&255}function ot(e){return e>>16&255}function at(e){return e>>8&255}function st(e){return e&255}function Nt(e,t,r){let n=Te,o=n[0][0]*e+n[0][1]*t+n[0][2]*r,s=n[1][0]*e+n[1][1]*t+n[1][2]*r,a=n[2][0]*e+n[2][1]*t+n[2][2]*r,i=nt(o),c=nt(s),d=nt(a);return It(i,c,d)}function De(e){let t=Z(ot(e)),r=Z(at(e)),n=Z(st(e));return mt([t,r,n],re)}function oe(e,t,r){let n=Ot,o=(e+16)/116,s=t/500+o,a=o-r/200,i=wt(s),c=wt(o),d=wt(a),u=i*n[0],P=c*n[1],p=d*n[2];return Nt(u,P,p)}function Ut(e){let t=Z(ot(e)),r=Z(at(e)),n=Z(st(e)),o=re,s=o[0][0]*t+o[0][1]*r+o[0][2]*n,a=o[1][0]*t+o[1][1]*r+o[1][2]*n,i=o[2][0]*t+o[2][1]*r+o[2][2]*n,c=Ot,d=s/c[0],u=a/c[1],P=i/c[2],p=ft(d),f=ft(u),m=ft(P),h=116*f-16,y=500*(p-f),x=200*(f-m);return[h,y,x]}function ae(e){let t=Y(e),r=nt(t);return It(r,r,r)}function pt(e){let t=De(e)[1];return 116*ft(t/100)-16}function Y(e){return 100*wt((e+16)/116)}function dt(e){return ft(e/100)*116-16}function Z(e){let t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function nt(e){let t=e/100,r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,te(0,255,Math.round(r*255))}function se(){return Ot}function ft(e){let t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function wt(e){let t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}var O=class e{static make(t=se(),r=200/Math.PI*Y(50)/100,n=50,o=2,s=!1){let a=t,i=a[0]*.401288+a[1]*.650173+a[2]*-.051461,c=a[0]*-.250268+a[1]*1.204414+a[2]*.045854,d=a[0]*-.002079+a[1]*.048952+a[2]*.953127,u=.8+o/10,P=u>=.9?rt(.59,.69,(u-.9)*10):rt(.525,.59,(u-.8)*10),p=s?1:u*(1-1/3.6*Math.exp((-r-42)/92));p=p>1?1:p<0?0:p;let f=u,m=[p*(100/i)+1-p,p*(100/c)+1-p,p*(100/d)+1-p],h=1/(5*r+1),y=h*h*h*h,x=1-y,g=y*r+.1*x*x*Math.cbrt(5*r),b=Y(n)/t[1],M=1.48+Math.sqrt(b),w=.725/Math.pow(b,.2),L=w,C=[Math.pow(g*m[0]*i/100,.42),Math.pow(g*m[1]*c/100,.42),Math.pow(g*m[2]*d/100,.42)],I=[400*C[0]/(C[0]+27.13),400*C[1]/(C[1]+27.13),400*C[2]/(C[2]+27.13)],D=(2*I[0]+I[1]+.05*I[2])*w;return new e(b,D,w,L,P,f,m,g,Math.pow(g,.25),M)}constructor(t,r,n,o,s,a,i,c,d,u){this.n=t,this.aw=r,this.nbb=n,this.ncb=o,this.c=s,this.nc=a,this.rgbD=i,this.fl=c,this.fLRoot=d,this.z=u}};O.DEFAULT=O.make();var z=class e{constructor(t,r,n,o,s,a,i,c,d){this.hue=t,this.chroma=r,this.j=n,this.q=o,this.m=s,this.s=a,this.jstar=i,this.astar=c,this.bstar=d}distance(t){let r=this.jstar-t.jstar,n=this.astar-t.astar,o=this.bstar-t.bstar,s=Math.sqrt(r*r+n*n+o*o);return 1.41*Math.pow(s,.63)}static fromInt(t){return e.fromIntInViewingConditions(t,O.DEFAULT)}static fromIntInViewingConditions(t,r){let n=(t&16711680)>>16,o=(t&65280)>>8,s=t&255,a=Z(n),i=Z(o),c=Z(s),d=.41233895*a+.35762064*i+.18051042*c,u=.2126*a+.7152*i+.0722*c,P=.01932141*a+.11916382*i+.95034478*c,p=.401288*d+.650173*u-.051461*P,f=-.250268*d+1.204414*u+.045854*P,m=-.002079*d+.048952*u+.953127*P,h=r.rgbD[0]*p,y=r.rgbD[1]*f,x=r.rgbD[2]*m,g=Math.pow(r.fl*Math.abs(h)/100,.42),b=Math.pow(r.fl*Math.abs(y)/100,.42),M=Math.pow(r.fl*Math.abs(x)/100,.42),w=v(h)*400*g/(g+27.13),L=v(y)*400*b/(b+27.13),C=v(x)*400*M/(M+27.13),I=(11*w+-12*L+C)/11,D=(w+L-2*C)/9,T=(20*w+20*L+21*C)/20,H=(40*w+20*L+C)/20,G=Math.atan2(D,I)*180/Math.PI,R=G<0?G+360:G>=360?G-360:G,tt=R*Math.PI/180,bt=H*r.nbb,Q=100*Math.pow(bt/r.aw,r.c*r.z),xt=4/r.c*Math.sqrt(Q/100)*(r.aw+4)*r.fLRoot,Ft=R<20.14?R+360:R,Bt=.25*(Math.cos(Ft*Math.PI/180+2)+3.8),Et=5e4/13*Bt*r.nc*r.ncb*Math.sqrt(I*I+D*D)/(T+.305),Ct=Math.pow(Et,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Yt=Ct*Math.sqrt(Q/100),Wt=Yt*r.fLRoot,he=50*Math.sqrt(Ct*r.c/(r.aw+4)),me=(1+100*.007)*Q/(1+.007*Q),Jt=1/.0228*Math.log(1+.0228*Wt),fe=Jt*Math.cos(tt),pe=Jt*Math.sin(tt);return new e(R,Yt,Q,xt,Wt,he,me,fe,pe)}static fromJch(t,r,n){return e.fromJchInViewingConditions(t,r,n,O.DEFAULT)}static fromJchInViewingConditions(t,r,n,o){let s=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,a=r*o.fLRoot,i=r/Math.sqrt(t/100),c=50*Math.sqrt(i*o.c/(o.aw+4)),d=n*Math.PI/180,u=(1+100*.007)*t/(1+.007*t),P=1/.0228*Math.log(1+.0228*a),p=P*Math.cos(d),f=P*Math.sin(d);return new e(n,r,t,s,a,c,u,p,f)}static fromUcs(t,r,n){return e.fromUcsInViewingConditions(t,r,n,O.DEFAULT)}static fromUcsInViewingConditions(t,r,n,o){let s=r,a=n,i=Math.sqrt(s*s+a*a),d=(Math.exp(i*.0228)-1)/.0228/o.fLRoot,u=Math.atan2(a,s)*(180/Math.PI);u<0&&(u+=360);let P=t/(1-(t-100)*.007);return e.fromJchInViewingConditions(P,d,u,o)}toInt(){return this.viewed(O.DEFAULT)}viewed(t){let r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),a=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,c=a/t.nbb,d=Math.sin(o),u=Math.cos(o),P=23*(c+.305)*n/(23*i+11*n*u+108*n*d),p=P*u,f=P*d,m=(460*c+451*p+288*f)/1403,h=(460*c-891*p-261*f)/1403,y=(460*c-220*p-6300*f)/1403,x=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),g=v(m)*(100/t.fl)*Math.pow(x,1/.42),b=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),M=v(h)*(100/t.fl)*Math.pow(b,1/.42),w=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),L=v(y)*(100/t.fl)*Math.pow(w,1/.42),C=g/t.rgbD[0],I=M/t.rgbD[1],D=L/t.rgbD[2],T=1.86206786*C-1.01125463*I+.14918677*D,H=.38752654*C+.62144744*I-.00897398*D,q=-.0158415*C-.03412294*I+1.04996444*D;return Nt(T,H,q)}static fromXyzInViewingConditions(t,r,n,o){let s=.401288*t+.650173*r-.051461*n,a=-.250268*t+1.204414*r+.045854*n,i=-.002079*t+.048952*r+.953127*n,c=o.rgbD[0]*s,d=o.rgbD[1]*a,u=o.rgbD[2]*i,P=Math.pow(o.fl*Math.abs(c)/100,.42),p=Math.pow(o.fl*Math.abs(d)/100,.42),f=Math.pow(o.fl*Math.abs(u)/100,.42),m=v(c)*400*P/(P+27.13),h=v(d)*400*p/(p+27.13),y=v(u)*400*f/(f+27.13),x=(11*m+-12*h+y)/11,g=(m+h-2*y)/9,b=(20*m+20*h+21*y)/20,M=(40*m+20*h+y)/20,L=Math.atan2(g,x)*180/Math.PI,C=L<0?L+360:L>=360?L-360:L,I=C*Math.PI/180,D=M*o.nbb,T=100*Math.pow(D/o.aw,o.c*o.z),H=4/o.c*Math.sqrt(T/100)*(o.aw+4)*o.fLRoot,q=C<20.14?C+360:C,G=1/4*(Math.cos(q*Math.PI/180+2)+3.8),tt=5e4/13*G*o.nc*o.ncb*Math.sqrt(x*x+g*g)/(b+.305),bt=Math.pow(tt,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),Q=bt*Math.sqrt(T/100),xt=Q*o.fLRoot,Ft=50*Math.sqrt(bt*o.c/(o.aw+4)),Bt=(1+100*.007)*T/(1+.007*T),Rt=Math.log(1+.0228*xt)/.0228,Et=Rt*Math.cos(I),Ct=Rt*Math.sin(I);return new e(C,Q,T,H,xt,Ft,Bt,Et,Ct)}xyzInViewingConditions(t){let r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),a=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,c=a/t.nbb,d=Math.sin(o),u=Math.cos(o),P=23*(c+.305)*n/(23*i+11*n*u+108*n*d),p=P*u,f=P*d,m=(460*c+451*p+288*f)/1403,h=(460*c-891*p-261*f)/1403,y=(460*c-220*p-6300*f)/1403,x=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),g=v(m)*(100/t.fl)*Math.pow(x,1/.42),b=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),M=v(h)*(100/t.fl)*Math.pow(b,1/.42),w=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),L=v(y)*(100/t.fl)*Math.pow(w,1/.42),C=g/t.rgbD[0],I=M/t.rgbD[1],D=L/t.rgbD[2],T=1.86206786*C-1.01125463*I+.14918677*D,H=.38752654*C+.62144744*I-.00897398*D,q=-.0158415*C-.03412294*I+1.04996444*D;return[T,H,q]}};var J=class e{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){let r=t/100,n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){let r=Math.pow(Math.abs(t),.42);return v(t)*400*r/(r+27.13)}static hueOf(t){let r=mt(t,e.SCALED_DISCOUNT_FROM_LINRGB),n=e.chromaticAdaptation(r[0]),o=e.chromaticAdaptation(r[1]),s=e.chromaticAdaptation(r[2]),a=(11*n+-12*o+s)/11,i=(n+o-2*s)/9;return Math.atan2(i,a)}static areInCyclicOrder(t,r,n){let o=e.sanitizeRadians(r-t),s=e.sanitizeRadians(n-t);return o<s}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,o){let s=e.intercept(t[o],r,n[o]);return e.lerpPoint(t,s,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){let n=e.Y_FROM_LINRGB[0],o=e.Y_FROM_LINRGB[1],s=e.Y_FROM_LINRGB[2],a=r%4<=1?0:100,i=r%2===0?0:100;if(r<4){let c=a,d=i,u=(t-c*o-d*s)/n;return e.isBounded(u)?[u,c,d]:[-1,-1,-1]}else if(r<8){let c=a,d=i,u=(t-d*n-c*s)/o;return e.isBounded(u)?[d,u,c]:[-1,-1,-1]}else{let c=a,d=i,u=(t-c*n-d*o)/s;return e.isBounded(u)?[c,d,u]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],o=n,s=0,a=0,i=!1,c=!0;for(let d=0;d<12;d++){let u=e.nthVertex(t,d);if(u[0]<0)continue;let P=e.hueOf(u);if(!i){n=u,o=u,s=P,a=P,i=!0;continue}(c||e.areInCyclicOrder(s,P,a))&&(c=!1,e.areInCyclicOrder(s,r,P)?(o=u,a=P):(n=u,s=P))}return[n,o]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){let n=e.bisectToSegment(t,r),o=n[0],s=e.hueOf(o),a=n[1];for(let i=0;i<3;i++)if(o[i]!==a[i]){let c=-1,d=255;o[i]<a[i]?(c=e.criticalPlaneBelow(e.trueDelinearized(o[i])),d=e.criticalPlaneAbove(e.trueDelinearized(a[i]))):(c=e.criticalPlaneAbove(e.trueDelinearized(o[i])),d=e.criticalPlaneBelow(e.trueDelinearized(a[i])));for(let u=0;u<8&&!(Math.abs(d-c)<=1);u++){let P=Math.floor((c+d)/2),p=e.CRITICAL_PLANES[P],f=e.setCoordinate(o,p,a,i),m=e.hueOf(f);e.areInCyclicOrder(s,r,m)?(a=f,d=P):(o=f,s=m,c=P)}}return e.midpoint(o,a)}static inverseChromaticAdaptation(t){let r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return v(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let o=Math.sqrt(n)*11,s=O.DEFAULT,a=1/Math.pow(1.64-Math.pow(.29,s.n),.73),c=.25*(Math.cos(t+2)+3.8)*(5e4/13)*s.nc*s.ncb,d=Math.sin(t),u=Math.cos(t);for(let P=0;P<5;P++){let p=o/100,f=r===0||o===0?0:r/Math.sqrt(p),m=Math.pow(f*a,1/.9),y=s.aw*Math.pow(p,1/s.c/s.z)/s.nbb,x=23*(y+.305)*m/(23*c+11*m*u+108*m*d),g=x*u,b=x*d,M=(460*y+451*g+288*b)/1403,w=(460*y-891*g-261*b)/1403,L=(460*y-220*g-6300*b)/1403,C=e.inverseChromaticAdaptation(M),I=e.inverseChromaticAdaptation(w),D=e.inverseChromaticAdaptation(L),T=mt([C,I,D],e.LINRGB_FROM_SCALED_DISCOUNT);if(T[0]<0||T[1]<0||T[2]<0)return 0;let H=e.Y_FROM_LINRGB[0],q=e.Y_FROM_LINRGB[1],G=e.Y_FROM_LINRGB[2],R=H*T[0]+q*T[1]+G*T[2];if(R<=0)return 0;if(P===4||Math.abs(R-n)<.002)return T[0]>100.01||T[1]>100.01||T[2]>100.01?0:zt(T);o=o-(R-n)*o/(2*R)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return ae(n);t=j(t);let o=t/180*Math.PI,s=Y(n),a=e.findResultByJ(o,r,s);if(a!==0)return a;let i=e.bisectToLimit(s,o);return zt(i)}static solveToCam(t,r,n){return z.fromInt(e.solveToInt(t,r,n))}};J.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];J.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];J.Y_FROM_LINRGB=[.2126,.7152,.0722];J.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];var S=class e{static from(t,r,n){return new e(J.solveToInt(t,r,n))}static fromInt(t){return new e(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(J.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(J.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(J.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;let r=z.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=pt(t),this.argb=t}setInternalState(t){let r=z.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=pt(t),this.argb=t}inViewingConditions(t){let n=z.fromInt(this.toInt()).xyzInViewingConditions(t),o=z.fromXyzInViewingConditions(n[0],n[1],n[2],O.make());return e.from(o.hue,o.chroma,dt(n[1]))}};var gt=class e{static harmonize(t,r){let n=S.fromInt(t),o=S.fromInt(r),s=At(n.hue,o.hue),a=Math.min(s*.5,15),i=j(n.hue+a*ee(n.hue,o.hue));return S.from(i,n.chroma,n.tone).toInt()}static hctHue(t,r,n){let o=e.cam16Ucs(t,r,n),s=z.fromInt(o),a=z.fromInt(t);return S.from(s.hue,a.chroma,pt(t)).toInt()}static cam16Ucs(t,r,n){let o=z.fromInt(t),s=z.fromInt(r),a=o.jstar,i=o.astar,c=o.bstar,d=s.jstar,u=s.astar,P=s.bstar,p=a+(d-a)*n,f=i+(u-i)*n,m=c+(P-c)*n;return z.fromUcs(p,f,m).toInt()}};var N=class e{static ratioOfTones(t,r){return t=lt(0,100,t),r=lt(0,100,r),e.ratioOfYs(Y(t),Y(r))}static ratioOfYs(t,r){let n=t>r?t:r,o=n===r?t:r;return(n+5)/(o+5)}static lighter(t,r){if(t<0||t>100)return-1;let n=Y(t),o=r*(n+5)-5,s=e.ratioOfYs(o,n),a=Math.abs(s-r);if(s<r&&a>.04)return-1;let i=dt(o)+.4;return i<0||i>100?-1:i}static darker(t,r){if(t<0||t>100)return-1;let n=Y(t),o=(n+5)/r-5,s=e.ratioOfYs(n,o),a=Math.abs(s-r);if(s<r&&a>.04)return-1;let i=dt(o)-.4;return i<0||i>100?-1:i}static lighterUnsafe(t,r){let n=e.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){let n=e.darker(t,r);return n<0?0:n}};var ut=class e{static isDisliked(t){let r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,o=Math.round(t.tone)<65;return r&&n&&o}static fixIfDisliked(t){return e.isDisliked(t)?S.from(t.hue,t.chroma,70):t}};var A=class e{static fromPalette(t){return new e(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,o,s,a,i,c){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=o,this.background=s,this.secondBackground=a,this.contrastCurve=i,this.toneDeltaPair=c,this.hctCache=new Map,!s&&a)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!s&&i)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(s&&!i)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){let r=this.hctCache.get(t);if(r!=null)return r;let n=this.getTone(t),o=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,o),o}getTone(t){let r=t.contrastLevel<0;if(this.toneDeltaPair){let n=this.toneDeltaPair(t),o=n.roleA,s=n.roleB,a=n.delta,i=n.polarity,c=n.stayTogether,u=this.background(t).getTone(t),P=i==="nearer"||i==="lighter"&&!t.isDark||i==="darker"&&t.isDark,p=P?o:s,f=P?s:o,m=this.name===p.name,h=t.isDark?1:-1,y=p.contrastCurve.getContrast(t.contrastLevel),x=f.contrastCurve.getContrast(t.contrastLevel),g=p.tone(t),b=N.ratioOfTones(u,g)>=y?g:e.foregroundTone(u,y),M=f.tone(t),w=N.ratioOfTones(u,M)>=x?M:e.foregroundTone(u,x);return r&&(b=e.foregroundTone(u,y),w=e.foregroundTone(u,x)),(w-b)*h>=a||(w=lt(0,100,b+a*h),(w-b)*h>=a||(b=lt(0,100,w-a*h))),50<=b&&b<60?h>0?(b=60,w=Math.max(w,b+a*h)):(b=49,w=Math.min(w,b+a*h)):50<=w&&w<60&&(c?h>0?(b=60,w=Math.max(w,b+a*h)):(b=49,w=Math.min(w,b+a*h)):h>0?w=60:w=49),m?b:w}else{let n=this.tone(t);if(this.background==null)return n;let o=this.background(t).getTone(t),s=this.contrastCurve.getContrast(t.contrastLevel);if(N.ratioOfTones(o,n)>=s||(n=e.foregroundTone(o,s)),r&&(n=e.foregroundTone(o,s)),this.isBackground&&50<=n&&n<60&&(N.ratioOfTones(49,o)>=s?n=49:n=60),this.secondBackground){let[a,i]=[this.background,this.secondBackground],[c,d]=[a(t).getTone(t),i(t).getTone(t)],[u,P]=[Math.max(c,d),Math.min(c,d)];if(N.ratioOfTones(u,n)>=s&&N.ratioOfTones(P,n)>=s)return n;let p=N.lighter(u,s),f=N.darker(P,s),m=[];return p!==-1&&m.push(p),f!==-1&&m.push(f),e.tonePrefersLightForeground(c)||e.tonePrefersLightForeground(d)?p<0?100:p:m.length===1?m[0]:f<0?0:f}return n}}static foregroundTone(t,r){let n=N.lighterUnsafe(t,r),o=N.darkerUnsafe(t,r),s=N.ratioOfTones(n,t),a=N.ratioOfTones(o,t);if(e.tonePrefersLightForeground(t)){let c=Math.abs(s-a)<.1&&s<r&&a<r;return s>=r||s>=a||c?n:o}else return a>=r||a>=s?o:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return e.tonePrefersLightForeground(t)&&!e.toneAllowsLightForeground(t)?49:t}};var U;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(U||(U={}));var k=class{constructor(t,r,n,o){this.low=t,this.normal=r,this.medium=n,this.high=o}getContrast(t){return t<=-1?this.low:t<0?rt(this.low,this.normal,(t- -1)/1):t<.5?rt(this.normal,this.medium,(t-0)/.5):t<1?rt(this.medium,this.high,(t-.5)/.5):this.high}};var E=class{constructor(t,r,n,o,s){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=o,this.stayTogether=s}};function ht(e){return e.variant===U.FIDELITY||e.variant===U.CONTENT}function B(e){return e.variant===U.MONOCHROME}function Se(e,t,r,n){let o=r,s=S.from(e,t,r);if(s.chroma<t){let a=s.chroma;for(;s.chroma<t;){o+=n?-1:1;let i=S.from(e,t,o);if(a>i.chroma||Math.abs(i.chroma-t)<.4)break;let c=Math.abs(i.chroma-t),d=Math.abs(s.chroma-t);c<d&&(s=i),a=Math.max(a,i.chroma)}}return o}function Fe(e){return O.make(void 0,void 0,e.isDark?30:80,void 0,void 0)}function Vt(e,t){let r=e.inViewingConditions(Fe(t));return A.tonePrefersLightForeground(e.tone)&&!A.toneAllowsLightForeground(r.tone)?A.enableLightForeground(e.tone):A.enableLightForeground(r.tone)}var l=class e{static highestSurface(t){return t.isDark?e.surfaceBright:e.surfaceDim}};l.contentAccentToneDelta=15;l.primaryPaletteKeyColor=A.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});l.secondaryPaletteKeyColor=A.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});l.tertiaryPaletteKeyColor=A.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});l.neutralPaletteKeyColor=A.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});l.neutralVariantPaletteKeyColor=A.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});l.background=A.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});l.onBackground=A.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>l.background,contrastCurve:new k(3,3,4.5,7)});l.surface=A.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});l.surfaceDim=A.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:87,isBackground:!0});l.surfaceBright=A.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?24:98,isBackground:!0});l.surfaceContainerLowest=A.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:100,isBackground:!0});l.surfaceContainerLow=A.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?10:96,isBackground:!0});l.surfaceContainer=A.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?12:94,isBackground:!0});l.surfaceContainerHigh=A.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?17:92,isBackground:!0});l.surfaceContainerHighest=A.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?22:90,isBackground:!0});l.onSurface=A.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>l.highestSurface(e),contrastCurve:new k(4.5,7,11,21)});l.surfaceVariant=A.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});l.onSurfaceVariant=A.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>l.highestSurface(e),contrastCurve:new k(3,4.5,7,11)});l.inverseSurface=A.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});l.inverseOnSurface=A.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>l.inverseSurface,contrastCurve:new k(4.5,7,11,21)});l.outline=A.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>l.highestSurface(e),contrastCurve:new k(1.5,3,4.5,7)});l.outlineVariant=A.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7)});l.shadow=A.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});l.scrim=A.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});l.surfaceTint=A.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});l.primary=A.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>B(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(l.primaryContainer,l.primary,15,"nearer",!1)});l.onPrimary=A.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>B(e)?e.isDark?10:90:e.isDark?20:100,background:e=>l.primary,contrastCurve:new k(4.5,7,11,21)});l.primaryContainer=A.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>ht(e)?Vt(e.sourceColorHct,e):B(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.primaryContainer,l.primary,15,"nearer",!1)});l.onPrimaryContainer=A.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>ht(e)?A.foregroundTone(l.primaryContainer.tone(e),4.5):B(e)?e.isDark?0:100:e.isDark?90:10,background:e=>l.primaryContainer,contrastCurve:new k(4.5,7,11,21)});l.inversePrimary=A.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>l.inverseSurface,contrastCurve:new k(3,4.5,7,11)});l.secondary=A.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(l.secondaryContainer,l.secondary,15,"nearer",!1)});l.onSecondary=A.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>B(e)?e.isDark?10:100:e.isDark?20:100,background:e=>l.secondary,contrastCurve:new k(4.5,7,11,21)});l.secondaryContainer=A.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{let t=e.isDark?30:90;if(B(e))return e.isDark?30:85;if(!ht(e))return t;let r=Se(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark);return r=Vt(e.secondaryPalette.getHct(r),e),r},isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.secondaryContainer,l.secondary,15,"nearer",!1)});l.onSecondaryContainer=A.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>ht(e)?A.foregroundTone(l.secondaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>l.secondaryContainer,contrastCurve:new k(4.5,7,11,21)});l.tertiary=A.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>B(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(l.tertiaryContainer,l.tertiary,15,"nearer",!1)});l.onTertiary=A.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>B(e)?e.isDark?10:90:e.isDark?20:100,background:e=>l.tertiary,contrastCurve:new k(4.5,7,11,21)});l.tertiaryContainer=A.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(B(e))return e.isDark?60:49;if(!ht(e))return e.isDark?30:90;let t=Vt(e.tertiaryPalette.getHct(e.sourceColorHct.tone),e),r=e.tertiaryPalette.getHct(t);return ut.fixIfDisliked(r).tone},isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.tertiaryContainer,l.tertiary,15,"nearer",!1)});l.onTertiaryContainer=A.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>B(e)?e.isDark?0:100:ht(e)?A.foregroundTone(l.tertiaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>l.tertiaryContainer,contrastCurve:new k(4.5,7,11,21)});l.error=A.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(l.errorContainer,l.error,15,"nearer",!1)});l.onError=A.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>l.error,contrastCurve:new k(4.5,7,11,21)});l.errorContainer=A.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.errorContainer,l.error,15,"nearer",!1)});l.onErrorContainer=A.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?90:10,background:e=>l.errorContainer,contrastCurve:new k(4.5,7,11,21)});l.primaryFixed=A.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>B(e)?40:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.primaryFixed,l.primaryFixedDim,10,"lighter",!0)});l.primaryFixedDim=A.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>B(e)?30:80,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.primaryFixed,l.primaryFixedDim,10,"lighter",!0)});l.onPrimaryFixed=A.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>B(e)?100:10,background:e=>l.primaryFixedDim,secondBackground:e=>l.primaryFixed,contrastCurve:new k(4.5,7,11,21)});l.onPrimaryFixedVariant=A.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>B(e)?90:30,background:e=>l.primaryFixedDim,secondBackground:e=>l.primaryFixed,contrastCurve:new k(3,4.5,7,11)});l.secondaryFixed=A.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>B(e)?80:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.secondaryFixed,l.secondaryFixedDim,10,"lighter",!0)});l.secondaryFixedDim=A.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>B(e)?70:80,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.secondaryFixed,l.secondaryFixedDim,10,"lighter",!0)});l.onSecondaryFixed=A.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>l.secondaryFixedDim,secondBackground:e=>l.secondaryFixed,contrastCurve:new k(4.5,7,11,21)});l.onSecondaryFixedVariant=A.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>B(e)?25:30,background:e=>l.secondaryFixedDim,secondBackground:e=>l.secondaryFixed,contrastCurve:new k(3,4.5,7,11)});l.tertiaryFixed=A.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>B(e)?40:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.tertiaryFixed,l.tertiaryFixedDim,10,"lighter",!0)});l.tertiaryFixedDim=A.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>B(e)?30:80,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(l.tertiaryFixed,l.tertiaryFixedDim,10,"lighter",!0)});l.onTertiaryFixed=A.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>B(e)?100:10,background:e=>l.tertiaryFixedDim,secondBackground:e=>l.tertiaryFixed,contrastCurve:new k(4.5,7,11,21)});l.onTertiaryFixedVariant=A.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>B(e)?90:30,background:e=>l.tertiaryFixedDim,secondBackground:e=>l.tertiaryFixed,contrastCurve:new k(3,4.5,7,11)});var F=class e{static fromInt(t){let r=S.fromInt(t);return e.fromHct(r)}static fromHct(t){return new e(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){return new e(t,r,e.createKeyColor(t,r))}constructor(t,r,n){this.hue=t,this.chroma=r,this.keyColor=n,this.cache=new Map}static createKeyColor(t,r){let o=S.from(t,r,50),s=Math.abs(o.chroma-r);for(let a=1;a<50;a+=1){if(Math.round(r)===Math.round(o.chroma))return o;let i=S.from(t,r,50+a),c=Math.abs(i.chroma-r);c<s&&(s=c,o=i);let d=S.from(t,r,50-a),u=Math.abs(d.chroma-r);u<s&&(s=u,o=d)}return o}tone(t){let r=this.cache.get(t);return r===void 0&&(r=S.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return S.fromInt(this.tone(t))}};var kt=class{fromInt(t){return Ut(t)}toInt(t){return oe(t[0],t[1],t[2])}distance(t,r){let n=t[0]-r[0],o=t[1]-r[1],s=t[2]-r[2];return n*n+o*o+s*s}};var Be=10,Re=3,Lt=class{static quantize(t,r,n){let o=new Map,s=new Array,a=new Array,i=new kt,c=0;for(let g=0;g<t.length;g++){let b=t[g],M=o.get(b);M===void 0?(c++,s.push(i.fromInt(b)),a.push(b),o.set(b,1)):o.set(b,M+1)}let d=new Array;for(let g=0;g<c;g++){let b=a[g],M=o.get(b);M!==void 0&&(d[g]=M)}let u=Math.min(n,c);r.length>0&&(u=Math.min(u,r.length));let P=new Array;for(let g=0;g<r.length;g++)P.push(i.fromInt(r[g]));let p=u-P.length;if(r.length===0&&p>0)for(let g=0;g<p;g++){let b=Math.random()*100,M=Math.random()*201+-100,w=Math.random()*201+-100;P.push(new Array(b,M,w))}let f=new Array;for(let g=0;g<c;g++)f.push(Math.floor(Math.random()*u));let m=new Array;for(let g=0;g<u;g++){m.push(new Array);for(let b=0;b<u;b++)m[g].push(0)}let h=new Array;for(let g=0;g<u;g++){h.push(new Array);for(let b=0;b<u;b++)h[g].push(new _t)}let y=new Array;for(let g=0;g<u;g++)y.push(0);for(let g=0;g<Be;g++){for(let C=0;C<u;C++){for(let I=C+1;I<u;I++){let D=i.distance(P[C],P[I]);h[I][C].distance=D,h[I][C].index=C,h[C][I].distance=D,h[C][I].index=I}h[C].sort();for(let I=0;I<u;I++)m[C][I]=h[C][I].index}let b=0;for(let C=0;C<c;C++){let I=s[C],D=f[C],T=P[D],H=i.distance(I,T),q=H,G=-1;for(let R=0;R<u;R++){if(h[D][R].distance>=4*H)continue;let tt=i.distance(I,P[R]);tt<q&&(q=tt,G=R)}G!==-1&&Math.abs(Math.sqrt(q)-Math.sqrt(H))>Re&&(b++,f[C]=G)}if(b===0&&g!==0)break;let M=new Array(u).fill(0),w=new Array(u).fill(0),L=new Array(u).fill(0);for(let C=0;C<u;C++)y[C]=0;for(let C=0;C<c;C++){let I=f[C],D=s[C],T=d[C];y[I]+=T,M[I]+=D[0]*T,w[I]+=D[1]*T,L[I]+=D[2]*T}for(let C=0;C<u;C++){let I=y[C];if(I===0){P[C]=[0,0,0];continue}let D=M[C]/I,T=w[C]/I,H=L[C]/I;P[C]=[D,T,H]}}let x=new Map;for(let g=0;g<u;g++){let b=y[g];if(b===0)continue;let M=i.toInt(P[g]);x.has(M)||x.set(M,b)}return x}},_t=class{constructor(){this.distance=-1,this.index=-1}};var Tt=class{static quantize(t){let r=new Map;for(let n=0;n<t.length;n++){let o=t[n];ne(o)<255||r.set(o,(r.get(o)??0)+1)}return r}};var Dt=5,X=33,yt=35937,V={RED:"red",GREEN:"green",BLUE:"blue"},St=class{constructor(t=[],r=[],n=[],o=[],s=[],a=[]){this.weights=t,this.momentsR=r,this.momentsG=n,this.momentsB=o,this.moments=s,this.cubes=a}quantize(t,r){this.constructHistogram(t),this.computeMoments();let n=this.createBoxes(r);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:yt}).fill(0),this.momentsR=Array.from({length:yt}).fill(0),this.momentsG=Array.from({length:yt}).fill(0),this.momentsB=Array.from({length:yt}).fill(0),this.moments=Array.from({length:yt}).fill(0);let r=Tt.quantize(t);for(let[n,o]of r.entries()){let s=ot(n),a=at(n),i=st(n),c=8-Dt,d=(s>>c)+1,u=(a>>c)+1,P=(i>>c)+1,p=this.getIndex(d,u,P);this.weights[p]=(this.weights[p]??0)+o,this.momentsR[p]+=o*s,this.momentsG[p]+=o*a,this.momentsB[p]+=o*i,this.moments[p]+=o*(s*s+a*a+i*i)}}computeMoments(){for(let t=1;t<X;t++){let r=Array.from({length:X}).fill(0),n=Array.from({length:X}).fill(0),o=Array.from({length:X}).fill(0),s=Array.from({length:X}).fill(0),a=Array.from({length:X}).fill(0);for(let i=1;i<X;i++){let c=0,d=0,u=0,P=0,p=0;for(let f=1;f<X;f++){let m=this.getIndex(t,i,f);c+=this.weights[m],d+=this.momentsR[m],u+=this.momentsG[m],P+=this.momentsB[m],p+=this.moments[m],r[f]+=c,n[f]+=d,o[f]+=u,s[f]+=P,a[f]+=p;let h=this.getIndex(t-1,i,f);this.weights[m]=this.weights[h]+r[f],this.momentsR[m]=this.momentsR[h]+n[f],this.momentsG[m]=this.momentsG[h]+o[f],this.momentsB[m]=this.momentsB[h]+s[f],this.moments[m]=this.moments[h]+a[f]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new Gt);let r=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=X-1,this.cubes[0].g1=X-1,this.cubes[0].b1=X-1;let n=t,o=0;for(let s=1;s<t;s++){this.cut(this.cubes[o],this.cubes[s])?(r[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0,r[s]=this.cubes[s].vol>1?this.variance(this.cubes[s]):0):(r[o]=0,s--),o=0;let a=r[0];for(let i=1;i<=s;i++)r[i]>a&&(a=r[i],o=i);if(a<=0){n=s+1;break}}return new $t(t,n)}createResult(t){let r=[];for(let n=0;n<t;++n){let o=this.cubes[n],s=this.volume(o,this.weights);if(s>0){let a=Math.round(this.volume(o,this.momentsR)/s),i=Math.round(this.volume(o,this.momentsG)/s),c=Math.round(this.volume(o,this.momentsB)/s),d=255<<24|(a&255)<<16|(i&255)<<8|c&255;r.push(d)}}return r}variance(t){let r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),o=this.volume(t,this.momentsB),s=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],a=r*r+n*n+o*o,i=this.volume(t,this.weights);return s-a/i}cut(t,r){let n=this.volume(t,this.momentsR),o=this.volume(t,this.momentsG),s=this.volume(t,this.momentsB),a=this.volume(t,this.weights),i=this.maximize(t,V.RED,t.r0+1,t.r1,n,o,s,a),c=this.maximize(t,V.GREEN,t.g0+1,t.g1,n,o,s,a),d=this.maximize(t,V.BLUE,t.b0+1,t.b1,n,o,s,a),u,P=i.maximum,p=c.maximum,f=d.maximum;if(P>=p&&P>=f){if(i.cutLocation<0)return!1;u=V.RED}else p>=P&&p>=f?u=V.GREEN:u=V.BLUE;switch(r.r1=t.r1,r.g1=t.g1,r.b1=t.b1,u){case V.RED:t.r1=i.cutLocation,r.r0=t.r1,r.g0=t.g0,r.b0=t.b0;break;case V.GREEN:t.g1=c.cutLocation,r.r0=t.r0,r.g0=t.g1,r.b0=t.b0;break;case V.BLUE:t.b1=d.cutLocation,r.r0=t.r0,r.g0=t.g0,r.b0=t.b1;break;default:throw new Error("unexpected direction "+u)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),r.vol=(r.r1-r.r0)*(r.g1-r.g0)*(r.b1-r.b0),!0}maximize(t,r,n,o,s,a,i,c){let d=this.bottom(t,r,this.momentsR),u=this.bottom(t,r,this.momentsG),P=this.bottom(t,r,this.momentsB),p=this.bottom(t,r,this.weights),f=0,m=-1,h=0,y=0,x=0,g=0;for(let b=n;b<o;b++){if(h=d+this.top(t,r,b,this.momentsR),y=u+this.top(t,r,b,this.momentsG),x=P+this.top(t,r,b,this.momentsB),g=p+this.top(t,r,b,this.weights),g===0)continue;let M=(h*h+y*y+x*x)*1,w=g*1,L=M/w;h=s-h,y=a-y,x=i-x,g=c-g,g!==0&&(M=(h*h+y*y+x*x)*1,w=g*1,L+=M/w,L>f&&(f=L,m=b))}return new qt(m,f)}volume(t,r){return r[this.getIndex(t.r1,t.g1,t.b1)]-r[this.getIndex(t.r1,t.g1,t.b0)]-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,r,n){switch(r){case V.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case V.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case V.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,r,n,o){switch(r){case V.RED:return o[this.getIndex(n,t.g1,t.b1)]-o[this.getIndex(n,t.g1,t.b0)]-o[this.getIndex(n,t.g0,t.b1)]+o[this.getIndex(n,t.g0,t.b0)];case V.GREEN:return o[this.getIndex(t.r1,n,t.b1)]-o[this.getIndex(t.r1,n,t.b0)]-o[this.getIndex(t.r0,n,t.b1)]+o[this.getIndex(t.r0,n,t.b0)];case V.BLUE:return o[this.getIndex(t.r1,t.g1,n)]-o[this.getIndex(t.r1,t.g0,n)]-o[this.getIndex(t.r0,t.g1,n)]+o[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,r,n){return(t<<Dt*2)+(t<<Dt+1)+t+(r<<Dt)+r+n}},Gt=class{constructor(t=0,r=0,n=0,o=0,s=0,a=0,i=0){this.r0=t,this.r1=r,this.g0=n,this.g1=o,this.b0=s,this.b1=a,this.vol=i}},$t=class{constructor(t,r){this.requestedCount=t,this.resultCount=r}},qt=class{constructor(t,r){this.cutLocation=t,this.maximum=r}};var Pt=class{static quantize(t,r){let o=new St().quantize(t,r);return Lt.quantize(t,o,r)}};var _=class{constructor(t){this.sourceColorArgb=t.sourceColorArgb,this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.sourceColorHct=S.fromInt(t.sourceColorArgb),this.primaryPalette=t.primaryPalette,this.secondaryPalette=t.secondaryPalette,this.tertiaryPalette=t.tertiaryPalette,this.neutralPalette=t.neutralPalette,this.neutralVariantPalette=t.neutralVariantPalette,this.errorPalette=F.fromHueAndChroma(25,84)}static getRotatedHue(t,r,n){let o=t.hue;if(r.length!==n.length)throw new Error(`mismatch between hue length ${r.length} & rotations ${n.length}`);if(n.length===1)return j(t.hue+n[0]);let s=r.length;for(let a=0;a<=s-2;a++){let i=r[a],c=r[a+1];if(i<o&&o<c)return j(o+n[a])}return o}};var it=class e extends _{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:U.EXPRESSIVE,contrastLevel:n,isDark:r,primaryPalette:F.fromHueAndChroma(j(t.hue+240),40),secondaryPalette:F.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.secondaryRotations),24),tertiaryPalette:F.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.tertiaryRotations),32),neutralPalette:F.fromHueAndChroma(t.hue+15,8),neutralVariantPalette:F.fromHueAndChroma(t.hue+15,12)})}};it.hues=[0,21,51,121,151,191,271,321,360];it.secondaryRotations=[45,95,45,20,45,90,45,45,45];it.tertiaryRotations=[120,120,20,45,20,15,20,120,120];var ct=class e extends _{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:U.VIBRANT,contrastLevel:n,isDark:r,primaryPalette:F.fromHueAndChroma(t.hue,200),secondaryPalette:F.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.secondaryRotations),24),tertiaryPalette:F.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.tertiaryRotations),32),neutralPalette:F.fromHueAndChroma(t.hue,10),neutralVariantPalette:F.fromHueAndChroma(t.hue,12)})}};ct.hues=[0,41,61,101,131,181,251,301,360];ct.secondaryRotations=[18,15,10,12,15,18,15,12,12];ct.tertiaryRotations=[35,30,20,25,30,35,30,25,25];var ve={desired:4,fallbackColorARGB:4282549748,filter:!0};function He(e,t){return e.score>t.score?-1:e.score<t.score?1:0}var K=class e{constructor(){}static score(t,r){let{desired:n,fallbackColorARGB:o,filter:s}={...ve,...r},a=[],i=new Array(360).fill(0),c=0;for(let[f,m]of t.entries()){let h=S.fromInt(f);a.push(h);let y=Math.floor(h.hue);i[y]+=m,c+=m}let d=new Array(360).fill(0);for(let f=0;f<360;f++){let m=i[f]/c;for(let h=f-14;h<f+16;h++){let y=Mt(h);d[y]+=m}}let u=new Array;for(let f of a){let m=Mt(Math.round(f.hue)),h=d[m];if(s&&(f.chroma<e.CUTOFF_CHROMA||h<=e.CUTOFF_EXCITED_PROPORTION))continue;let y=h*100*e.WEIGHT_PROPORTION,x=f.chroma<e.TARGET_CHROMA?e.WEIGHT_CHROMA_BELOW:e.WEIGHT_CHROMA_ABOVE,g=(f.chroma-e.TARGET_CHROMA)*x,b=y+g;u.push({hct:f,score:b})}u.sort(He);let P=[];for(let f=90;f>=15;f--){P.length=0;for(let{hct:m}of u)if(P.find(y=>At(m.hue,y.hue)<f)||P.push(m),P.length>=n)break;if(P.length>=n)break}let p=[];P.length===0&&p.push(o);for(let f of P)p.push(f.toInt());return p}};K.TARGET_CHROMA=48;K.WEIGHT_PROPORTION=.7;K.WEIGHT_CHROMA_ABOVE=.3;K.WEIGHT_CHROMA_BELOW=.1;K.CUTOFF_CHROMA=5;K.CUTOFF_EXCITED_PROPORTION=.01;var le={currentLyrics:null},ue="cpplyrics-topmost-enabled",jt=()=>localStorage.getItem(ue)!=="0",Oe=e=>{localStorage.setItem(ue,e?"1":"0")},ce=e=>{let t=betterncm_native.native_plugin.call("cpplyrics.set_topmost",[e]);t&&typeof t.catch=="function"&&t.catch(r=>console.warn("[CppLyrics] set_topmost not available:",r))};globalThis.CPPLYRICS_INTERNALS=le;plugin.onLoad(e=>{let t="";betterncm.utils.waitForElement("#main-player").then(a=>{let c=a.querySelector(".word").cloneNode(!0);c.style="transform: rotate(120deg) translate(-16px); right: 350px;",c.title="\u6253\u5F00 CppLyrics",a.appendChild(c);let d=document.createElement("span");d.style.cssText=`
            position: absolute;
            right: 288px;
            top: 2px;
            font-size: 11px;
            color: rgba(255, 255, 255, 0.75);
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
            z-index: 2;
        `;let u=()=>{d.textContent=`\u9876\u7F6E:${jt()?"\u5F00":"\u5173"}`};d.onclick=P=>{P.stopPropagation();let p=!jt();Oe(p),u(),ce(p)},u(),a.appendChild(d),c.onclick=()=>{c.remove(),betterncm_native.native_plugin.call("cpplyrics.init",[]),ce(jt())}}),setInterval(()=>{if(currentLyrics.hash===t)return;t=currentLyrics.hash;let a=currentLyrics.lyrics.filter(i=>i.dynamicLyric).map(i=>i.dynamicLyric.map(c=>`(${c.time}:${c.time+c.duration})${c.word.replaceAll("`","'")}`).join("`")+(i.translatedLyric?`|${i.translatedLyric}`:"")).join(`
`);le.currentLyrics=a,a?betterncm_native.native_plugin.call("cpplyrics.set_lyrics",[a]):betterncm_native.native_plugin.call("cpplyrics.set_lyrics",["(0:100000)\u6682\u65E0\u9010\u8BCD\u6B4C\u8BCD"])},1e3);let r=0,n=!0;legacyNativeCmder.appendRegisterCall("PlayProgress","audioplayer",(a,i)=>{r=i*1e3,n=!1}),setInterval(()=>{betterncm_native.native_plugin.call("cpplyrics.set_time",[r,n])},400),legacyNativeCmder.appendRegisterCall("PlayState","audioplayer",(a,i,c)=>{n=c===2,betterncm_native.native_plugin.call("cpplyrics.set_time",[r,c===2])});let o=()=>{let a=betterncm.ncm.getPlayingSong(),i=document.createElement("img");i.src=`orpheus://cache/?${a.data.album.picUrl}?imageView&enlarge=1&thumbnail=48y48`,i.onload=async()=>{let c=document.createElement("canvas"),d=c.getContext("2d");c.width=i.width,c.height=i.height,d.drawImage(i,0,0,i.width,i.height);let u=d.getImageData(0,0,i.width,i.height),p=((M,w)=>M.reduce((L,C,I)=>I%w===0?[...L,[C]]:[...L.slice(0,-1),[...L.slice(-1)[0],C]],[]))(d.getImageData(0,0,i.width,i.height).data,4).map(M=>(M[3]<<24>>>0|M[0]<<16>>>0|M[1]<<8>>>0|M[2])>>>0),f=Pt.quantize(p,64),m=K.score(f),h=(M,w)=>l.onPrimary.getArgb(new w(S.fromInt(M),!0,0)),y=M=>[ot(M),at(M),st(M)],x=`${await betterncm.app.getDataPath()}/cover.jpg`;await betterncm.fs.remove(x),await betterncm.fs.writeFile(x,await fetch(i.src.replace("&thumbnail=48y48","")).then(M=>M.blob())),betterncm_native.native_plugin.call("cpplyrics.set_song_cover",[x]);let g=[h(m[0],ct),h(m[1],it)];g[1]=gt.cam16Ucs(g[0],g[1],.8);let b=M=>console.log(`%c${M[0]}, ${M[1]}, ${M[2]}`,`background-color: rgb(${M[0]}, ${M[1]}, ${M[2]}`);console.log("Primary color:"),b(y(g[0])),console.log("Secondary color:"),b(y(g[1])),betterncm_native.native_plugin.call("cpplyrics.set_song_color",g.map(M=>y(M)).flat()),betterncm_native.native_plugin.call("cpplyrics.set_song_info",[a.data.name,a.data.artists.map(M=>M.name).join(" / ")])}},s=null;setInterval(()=>{let a=document.querySelector("img.j-cover");a&&a!==s&&(a?.complete?o():a?.addEventListener("load",o),s=a)},100)});})();
/*! Bundled license information:

@material/material-color-utilities/utils/math_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/color_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/viewing_conditions.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/cam16.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct_solver.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/blend/blend.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_color.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/variant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/contrast_curve.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/tonal_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/core_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/lab_point_provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wsmeans.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wu.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_celebi.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/dynamic_scheme.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_android.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/temperature/temperature_cache.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_expressive.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_monochrome.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_neutral.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_tonal_spot.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/score/score.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/string_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/image_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/theme_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
