define(function(e){function t(){return y.isTV?"|":-90==window.orientation||90==window.orientation?"-":"|"}function a(){if(w.notenough){var e=G.shift();e||(e=r(!1)),e.x=R+50*Math.random(),e.y=(k-270)*Math.random()+160,S.players.push(e)}}function r(e){var t=H++%2+1,a=N.create(V.getResult("player_"+t));return a.x=-1e3,O.addChild(a),e!==!1&&G.push(a),a}function n(){x.removeLoading(),o(),createjs.Ticker.addEventListener("tick",v),x.showGuide(function(){_.addEventListener(x.EVENT_TYPE,function(e){e.preventDefault(),e.stopPropagation(),i()},!1)})}function i(){0===P?l():2===P&&s()}function o(){S={},S.players=[],G=[],D=0,H=0,E=!1,M=!1,L=!1,P=0,C=0,w.reset(),p.reset(),createjs.Tween.removeAllTweens(),O.removeAllChildren();var t=S.bg=e("bg").create(V.getResult("bg"),R,k);O.addChild(t);var a=S.squirrel=e("squirrel").create(V.getResult("squirrel"));a.x=Math.max(R/2-60,60),a.y=q,O.addChild(a);var n=S.ball=e("ball").create(V.getResult("ball"));n.x=a.x+38,n.y=a.y,O.addChild(n);for(var i=0,o=R/W+1;o>i;i++)r()}function l(){E||0!==P||(S.squirrel.jump(k),L||(S.ball.gotoAndPlay("run"),L=!0,p.start(),y.game.start()))}function s(){P=3,createjs.Tween.removeAllTweens();var e=S.keeper,t=e.x,a=e.y,r=S.arrow,n=S.ball,i=r.x,o=r.y,l=300,s=a+33>o&&o>a-33,c=o<S.gateLeft.y||o>S.gateRight.y,u=s||c,h=100;c?h=50:e.gotoAndPlay("save"),s?(i=e.x-70,o=e.y,l=100):i=i+r.width+50,createjs.Tween.get(e).to({x:t-h},500,createjs.Ease.quadOut),n.gotoAndPlay("run"),createjs.Tween.get(n).to({x:i,y:o},l,createjs.Ease.linear).call(function(){u?s?(n.gotoAndPlay("back"),createjs.Tween.get(n).to({x:i-200,y:o-100+200*Math.random()},300,createjs.Ease.quadOut).call(function(){g()})):(e.gotoAndStop("stand_lb"),g()):d()}),O.removeChild(r),S.squirrel.shoot(i,o)}function d(){P=3,S.squirrel.gotoAndPlay("win"),S.ball.stop(),p.pause(),setTimeout(function(){M=!0,x.showPanel({onRestart:o})},1e3),y.game.end(w.get(),p.get(),!0)}function g(e,t){P=3,w.die(),p.pause(),S.squirrel.die(),S.ball.die(e,t),setTimeout(function(){E=!0,x.showPanel({isFail:!0,onRestart:o})},1e3),y.game.end(w.get(),p.get(),!1)}function c(){p.pause(),P=1,createjs.Tween.removeAllTweens();var t=e("gate"),a=S.gate=t.create(V.getResult("gate"));a.x=R,O.addChildAt(a,1);var r=S.gateLeft=t.createGateLeft(V.getResult("gate_l"));r.x=R+a.width-75,r.y=q-84,O.addChild(r);var n=S.gateRight=t.createGateRight(V.getResult("gate_r"));n.x=r.x+44,n.y=r.y+152,O.addChild(n);var i=S.keeper=e("keeper").create(V.getResult("keeper"));i.x=R+a.width-120,i.y=q,O.addChild(i);var o=S.squirrel;o.gotoAndPlay("run_rc");var l=Math.max(R-a.width+150,50);createjs.Tween.get(o).to({x:l,y:q},1e3,createjs.Ease.quadIn)}function u(){var t=S.squirrel;t.gotoAndStop("stand_rc"),createjs.Tween.removeTweens(t),S.ball.gotoAndStop(0);var a=S.keeper;a.gotoAndPlay("walk");var r=84,n=22,i=a.x,o=a.y,l=r/n,s=o-i*l;!function(){if(2===P){var e=i+(n-8)*(1-2*Math.random()),t=l*e+s;createjs.Tween.get(a).to({x:e,y:t},2e3,createjs.Ease.linear).call(arguments.callee)}}();var d=S.arrow=e("arrow").create(V.getResult("arrow")),g=d.x=i+30;d.y=o;var c=o-g*l;O.addChild(d),function(){if(2===P){var e=g+(n+20)*(1-2*Math.random()),t=l*e+c;createjs.Tween.get(d).to({x:e,y:t},1e3,createjs.Ease.linear).call(arguments.callee)}}(),p.start()}function h(e){if(L&&!E){var t=.15*e.delta,r=S.squirrel,n=S.ball,i=S.bg;switch(r.currentAnimation){case"run_rt":n.x=r.x+15,n.y=r.y-6;break;case"run_rc":n.x=r.x+38,n.y=r.y;break;case"run_rb":n.x=r.x+20,n.y=r.y+8;break;default:n.x=r.x+38,n.y=r.y}if(r.y<80||r.y>k-30){var o=r.x+25+50*Math.random(),l="run_rt"===r.currentAnimation?-10:15,s=r.y+l-5*Math.random();return void g(o,s)}i.x-=t,i.x<-i.imageWidth&&(i.x=0),D-=t,0>=D&&(D=W,a());for(var d=S.players,u=S.players=[],h=0,m=d.length;m>h;h++){var f=d[h];if(f.x<-25)G.push(f);else{if(u.push(f),f.hitTest(r)){var v=n.x<f.x+10?-75:65;return void g(n.x+v-50*Math.random(),n.y-20+40*Math.random())}f.sliding||(f.slideTest(r)?(C=w.add(),console.log("过人，得分：",C),f.x-=t,f.x<R&&f.stareAt(r)):(f.x-=t,f.x<R&&f.stareAt(r)))}}if(0===u.length)return void c()}O.children.sort(function(e,t){return e.y-t.y}),O.update(e)}function m(e){var t=.15*e.delta,a=S.squirrel,r=S.ball;r.x=a.x+38,r.y=a.y;var n=S.keeper;n.x-=t;var i=S.bg;i.x-=t,i.x<-i.imageWidth&&(i.x=0);var o=S.gate;if(o.x<R-o.width+t)P=2,u();else{var l=S.gateLeft,s=S.gateRight;o.x-=t,s.x-=t,l.x-=t}O.update(e)}function f(e){O.children.sort(function(e,t){return e.y-t.y}),O.update(e)}function v(e){Y[P](e)}var y=e("log");y.pv(),y.time("onload"),window.onunload=function(){y.time("leave")};var w=e("score"),p=e("timer"),x=e("ui");window.addEventListener("orientationchange",function(){return x.$("mask2").style.display="|"===t()?"none":"block",arguments.callee}(),!1);var b=t(),A=document.body,T="-"===b?A.clientHeight:A.clientWidth,j="-"===b?A.clientWidth:A.clientHeight,k=640,R=Math.floor(k*T/j),q=(k-110)/2+80,_=x.$("goal");_.setAttribute("width",R),_.setAttribute("height",k),_.addEventListener("touchmove",function(e){e.stopPropagation(),e.preventDefault()},!1),window.scrollTo(0,1);var E=!1,M=!1,L=!1,P=0,C=0,F=60;window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame?createjs.Ticker.timingMode=createjs.Ticker.RAF:(F=30,createjs.Ticker.setFPS(F),createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED),window.DEFAULT_FRAMERATE=F;var S={},D=0,W=Math.min(R/3,170),G=[],H=0,N=e("player"),O=new createjs.Stage(_),V=new createjs.LoadQueue(!1);V.addEventListener("complete",n),V.addEventListener("progress",x.onLoaded),V.loadManifest([{src:"/hg/football/img/squirrel.png",id:"squirrel"},{src:"/hg/football/img/bg.png",id:"bg"},{src:"/hg/football/img/ball.png",id:"ball"},{src:"/hg/football/img/gate.png",id:"gate"},{src:"/hg/football/img/gate_l.png",id:"gate_l"},{src:"/hg/football/img/gate_r.png",id:"gate_r"},{src:"/hg/football/img/keeper.png",id:"keeper"},{src:"/hg/football/img/arrow.png",id:"arrow"},{src:"/hg/football/img/player_1.png",id:"player_1"},{src:"/hg/football/img/player_2.png",id:"player_2"},{src:"/hg/football/img/guide.png"}]);var Y=[h,m,f,f]});