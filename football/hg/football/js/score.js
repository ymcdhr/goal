define("score",function(n,e){var t=0,o=5,i=!0,r=document.getElementById("slided");r.innerHTML=t,e.notenough=!0,e.reset=function(){i=!0;var n=t;return this.notenough=!0,r.innerHTML=t=0,n},e.get=function(){return t},e.getMax=function(){return o},e.add=function(n){return n=n||1,t+=n,r.innerHTML=t,i&&this.notenough&&t>=o&&(this.notenough=!1),t},e.die=function(){i=!1}});