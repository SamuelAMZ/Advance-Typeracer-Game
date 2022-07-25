(()=>{"use strict";class e{constructor(e,t,n,o,l,a,r,s){this.hideControl=e,this.container=t,this.main=n,this.hideControlMobile=o,this.elements=l,this.hideControlBack=a,this.raceType=r,this.test=s}}class t{hideDashboard(e){(e.target.classList.contains("dt")||e.target.classList.contains("hide-controls-panel"))&&(t.callElements().main.classList.toggle("hide-container-dt"),t.callElements().container.classList.toggle("hide-container-padding-dt"));let n=document.documentElement.clientWidth||window.innerWidth;n<=1050&&n>=850&&("30%"!==t.callElements().container.style.width?(t.callElements().container.style.width="30%",t.callElements().container.style.padding="1rem",Array.from(t.callElements().raceType).forEach((e=>{e.style.width="100%"})),t.callElements().elements.style.display="none",t.callElements().hideControlMobile.style.left="30%"):(t.callElements().container.style.width="0%",t.callElements().container.style.padding="0rem",Array.from(t.callElements().raceType).forEach((e=>{e.style.width="100%"})),t.callElements().elements.style.display="none",t.callElements().hideControlMobile.style.left="0%")),n<=850&&("60%"!==t.callElements().container.style.width?(t.callElements().container.style.width="60%",t.callElements().container.style.padding="1rem",Array.from(t.callElements().raceType).forEach((e=>{e.style.width="100%"})),t.callElements().elements.style.display="none",t.callElements().hideControlMobile.style.left="60%"):(t.callElements().container.style.width="0%",t.callElements().container.style.padding="0rem",Array.from(t.callElements().raceType).forEach((e=>{e.style.width="100%"})),t.callElements().elements.style.display="none",t.callElements().hideControlMobile.style.left="0%"))}static callElements(){return new e(document.querySelector(".hide-controls-panel"),document.querySelector(".container"),document.querySelector("main"),document.querySelector(".hide-controls-panel-mb"),document.querySelector(".elements"),document.querySelector(".hide-controls-panel-bc"),document.querySelectorAll(".race-type"),document.querySelector(".test"))}}const n=document.querySelector("body"),o=document.querySelector("#footer");class l{constructor(e,t,n){this.theme1=e,this.theme2=t,this.theme3=n}static getElements(){return new l(document.querySelector(".theme1"),document.querySelector(".theme2"),document.querySelector(".theme3"))}static loadTheme(e){e.target.classList.contains("theme1")&&(n.classList="",n.classList.add("theme-1"),localStorage.setItem("theme","theme-1"),setTimeout((()=>{localStorage.setItem("prevTheme","#0c2852")}),10)),e.target.classList.contains("theme2")&&(n.classList="",n.classList.add("theme-2"),localStorage.setItem("theme","theme-2"),setTimeout((()=>{localStorage.setItem("prevTheme","#212121")}),10)),e.target.classList.contains("theme3")&&(n.classList="",n.classList.add("theme-3"),localStorage.setItem("theme","theme-3"),setTimeout((()=>{localStorage.setItem("prevTheme","#4b2243")}),10))}static loadLocalTheme(){let e=localStorage.getItem("theme");n.classList="",n.classList.add(e)}static themeAnimation(e){const t=document.querySelector(".animation");t.innerHTML="";let n=document.createElement("div");n.classList.add("theme-animation"),t.appendChild(n),setTimeout((()=>{n.classList.add("active")}),1)}static bodyBackground(){const e=localStorage.getItem("prevTheme");n.style.backgroundColor=e}static changeAnimationDivPositionOnDrag(){let e=o.style.left,t=o.style.top;document.querySelector(".theme-animation").style.left=e,document.querySelector(".theme-animation").style.top=t}static changeCarSkin(){let e=document.querySelector("#you-car"),t=localStorage.getItem("theme");e.src="theme-3"===t?"imgs/car2.svg":"imgs/car.svg"}static dragElement(e){var t=0,n=0,o=0,l=0;function a(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=s,document.onmousemove=r}function r(a){(a=a||window.event).preventDefault(),t=o-a.clientX,n=l-a.clientY,o=a.clientX,l=a.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function s(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=a:e.onmousedown=a}}let a,r,s,c;class i{giveTheText(){let e=Math.floor(Math.random()*i.texts().length);return a=i.texts()[e].trim(),a}static texts(){return["Billie Jean is not my lover She's just a girl who claims that I am the one.","Look, if you had, one shot, or one opportunity to seize everything you ever wanted, in one moment, would you capture it, or just let it slip?","It's a long way to the top, if you wanna rock n roll.","We are the champions, my friends And we'll keep on fighting 'til the end.","All the single ladies Now put your hands up.","Oh, I wanna dance with somebody I wanna feel the heat with somebody.","It's the eye of the tiger, it's the dream of the fight.","Don't want to close my eyes I don't want to fall asleep Cause I'd miss you baby And I don't want to miss a thing.","And it seems to me you lived your life Like a candle in the wind Never knowing who to cling to When the rain set in And I would have liked to have known you.","Don't, don't you want me? You know I can't believe it when I hear that you won't see me Don't, don't you want me?","And girls they wanna have fun Oh girls just want to have fun.","Blackbird singing in the dead of night. Take these broken wings and learn to fly.","You shake my nerves and you rattle my brain, too much love drives a man insane. You broke my will, but what a thrill. Goodness gracious, great balls of fire.","Pretty woman, walkin' down the street Pretty woman the kind I like to meet."]}}class d{constructor(e,t,n,o,l,a,r,s,c,i){this.normalContainer=e,this.normalAction=t,this.normalStart=n,this.newStart=o,this.youVsButton=l,this.youVsContainer=a,this.customButton=r,this.customContainer=s,this.youStart=c,this.customStart=i}}let m,u,y=30;class h{loadNormalView(){const e=h.getViewElements();document.querySelector(".test-element").style.display="none",document.querySelector(".section-animation").style.display="none",document.querySelector(".counterTimer").style.display="none",e.youVsContainer.style.display="none",e.customContainer.style.display="none",e.normalContainer.style.display="flex"}loadYouVsView(){const e=h.getViewElements();document.querySelector(".test-element").style.display="none",document.querySelector(".section-animation").style.display="none",document.querySelector(".counterTimer").style.display="none",e.normalContainer.style.display="none",e.customContainer.style.display="none",e.youVsContainer.style.display="flex"}loadCustomView(){const e=h.getViewElements();document.querySelector(".test-element").style.display="none",document.querySelector(".section-animation").style.display="none",document.querySelector(".counterTimer").style.display="none",e.normalContainer.style.display="none",e.youVsContainer.style.display="none",e.customContainer.style.display="flex"}moveYouVsCompCar(){let e=Array.from(document.querySelectorAll(".bot"))[0].children[1].children[0];e.setAttribute("id","youVs");let t=0;console.log(a,"cars");let n=a.split(" ").length;y=Math.round(100*Math.random()),y<20&&(y+=20),setInterval((()=>{t>100&&(e.style.left="100%"),t<=100&&1===f&&(t+=5,e.style.left=`${t}%`,console.log(y))}),1e3/(y/30)*(n/10))}moveCustomCar(){let e=Array.from(document.querySelectorAll(".bot")),t=T.raceText().split(" ").length,n=[],o=[],l=[];e.forEach((e=>{n.push(e.children[1].children[0])})),V.getCustomRaceInfo().forEach((e=>{o.push(e.speed)})),o.forEach((e=>{let n=1e3/(e/30)*(t/10);l.push(n)}));let a=0;n.forEach((e=>{m=setTimeout((()=>{!function(e){let t=0;setInterval((()=>{t>100&&(e.style.left="100%"),t<=100&&1===f&&(t+=5,e.style.left=`${t}%`)}),l[a])}(n[a]),a++}),1)}))}showCustomBotWpmCpm(){let e=Array.from(document.querySelectorAll(".bot-wpm-and-cpm")),t=0;e.forEach((e=>{e.children[0].innerText=V.getCustomRaceInfo()[t].speed+" WPM",t++}));let n=0;e.forEach((e=>{e.children[1].innerText=Math.round(5.2*V.getCustomRaceInfo()[n].speed)+" CPM",n++}));let o=Array.from(document.querySelectorAll(".you-name-bot")),l=0;o.forEach((e=>{e.children[0].innerText=V.getCustomRaceInfo()[l].name,l++}))}showBotWpmCpm(){document.querySelector(".bot-wpm-and-cpm").children[0].innerText=y+" WPM",document.querySelector(".bot-wpm-and-cpm").children[1].innerText=Math.round(5.2*y)+" CPM"}loadBotCars(){const e=new h;"normal"===c&&document.querySelector(".bot")&&Array.from(document.querySelectorAll(".bot")).forEach((e=>{e.remove()})),"you"===c&&(T.loadAutoCar(),e.moveYouVsCompCar(),e.showBotWpmCpm()),"custom"===c&&(V.getCustomRaceInfo().forEach((e=>{T.loadAutoCar()})),e.moveCustomCar(),e.showCustomBotWpmCpm())}loadView(){const e=new h;"normal"===c&&e.loadNormalView(),"you"===c&&e.loadYouVsView(),"custom"===c&&e.loadCustomView()}startActions(){const e=h.getViewElements();c="normal",e.normalContainer.style.display="none",h.loader(2e3),r=setTimeout((()=>{document.querySelector(".counterTimer").style.display="block"}),2e3)}youActions(){const e=h.getViewElements();c="you",e.youVsContainer.style.display="none",h.loader(2e3),r=setTimeout((()=>{document.querySelector(".counterTimer").style.display="block"}),2e3)}customActions(){const e=h.getViewElements();c="custom",e.customContainer.style.display="none",h.loader(2e3),r=setTimeout((()=>{document.querySelector(".counterTimer").style.display="block"}),2e3)}static getViewElements(){return new d(document.querySelector(".normal-race-view"),document.querySelector(".race-type-action-normal"),document.querySelector("#normal-start"),document.querySelector("#new-start"),document.querySelector(".race-type-action-comp"),document.querySelector(".you-vs-race-view"),document.querySelector(".race-type-action-custom"),document.querySelector(".custom-race-view"),document.querySelector("#you-start"),document.querySelector("#custom-start"))}static loader(e){document.querySelector(".section-animation").style.display="flex",s=setTimeout((()=>{document.querySelector(".section-animation").style.display="none",document.querySelector(".test-element").style.display="block"}),e)}static showResultUi(){document.querySelector("#new-start").innerText="Start New Race",document.querySelector("#new-start").style.margin="1rem auto 35rem",document.querySelector("#new-start").style.display="none",document.querySelector(".loader-result").style.display="flex",setTimeout((()=>{document.querySelector(".loader-result").style.display="none",document.querySelector(".results").style.display="grid",document.querySelector("#new-start").style.display="block",document.querySelector("#scoll-to").scrollIntoView({behavior:"smooth"})}),1e3)}static hideResultUi(){document.querySelector(".results").style.display="none",document.querySelector("#new-start").innerText="Leave The Race",document.querySelector("#new-start").style.margin="1rem auto 0"}static showNotification(){"normal"===c&&V.newNotification("Finish"),"normal"!=c&&h.whoWins()}static whoWins(){if("you"===c&&(L>y&&V.newNotification("You Win"),L<y&&V.newNotification("You Lose"),L===y&&V.newNotification("Match null")),"custom"===c){let e=V.getCustomRaceInfo(),t=1;e.forEach((e=>{e.speed>L&&t++})),V.newNotification(`You finish at ${t} place`)}}static chartFunc(){let e=setInterval((()=>{if(0===f){let e=V.calculateChartData(),t=[];e.forEach((e=>{t.push(`${e} wpm`)}));const n={type:"line",data:{labels:t,datasets:[{backgroundColor:"rgba(155, 155, 155, 0.221)",borderColor:"#fff",color:"#fff",fill:!0,data:e,lineTension:.4}]},options:{animation:{duration:0},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{color:"#fff",font:{family:"alataregular"}}},x:{ticks:{color:"#fff",font:{family:"alataregular"}}}}}};new Chart(document.getElementById("chart"),n),u=1}1===u&&clearInterval(e)}),1e3)}}class p{constructor(e,t,n,o){this.car=e,this.typeInput=t,this.textToType=n,this.passed=o}}let g,f,v=[],w=0,E=0,S=0,C=[];class T{loadText(){let e=T.getElmts(),t=T.raceText();e.textToType.innerText=t}move(e){let t=T.getElmts(),n=T.getWidth(e),o=T.verifyLetters(e);const l=new V,a=new b;100===n&&o?(t.car.style.left="100%",A(0),h.showNotification(),l.showResult(),h.chartFunc(),h.showResultUi()):n<100&&o&&(t.car.style.left=n+"%"),T.updateRaceText(e),T.passedFailedIndicator(e),T.fixSpanSpace(e),T.getCurrentTypedValueArr(e),T.words(e),a.inputValideAfterTheGo(f)}static raceText(){return a}static getElmts(){return new p(document.getElementById("you-car"),document.getElementById("type-input"),document.getElementById("text-to-type"),document.getElementById("passed"))}static getCurrentTypedValueArr(e){return T.verifyLetters(e)&&v.push(e.data),v.join("")}static getWidth(e){T.getElmts();let t,n=T.raceText().split("").length;return t=e.target.value.split("").length,Math.round(t/(n/100))}static verifyLetters(e){T.getElmts();let t,n=T.raceText(),o=e.target.value,l=n.split("").splice(0,o.length).join("");return l===o&&(t=!0),l!==o&&(t=!1),t}static passedFailedIndicator(e){let t=T.getElmts(),n=T.verifyLetters(e);e.target.value,n||(t.typeInput.style.background="rgba(219, 57, 73, 1 )",S++),n&&(t.typeInput.style.backgroundColor="var(--bk-second1)",t.passed.innerText=C.join(""))}static updateRaceText(e){let t=T.getElmts(),n=T.raceText(),o=T.verifyLetters(e),l=e.target.value,a=n.split("");if(o){for(let e=0;e<l.length;e++){let e=a.splice(0,1);C.push(e)}if(t.textToType.innerText=a.join(""),C.splice(0,l.length-1),C.length>l.length){let e=C.length-l.length;C.splice(0,e)}}}static fixSpanSpace(e){let t=T.getElmts(),n=T.raceText(),o=T.verifyLetters(e),l=e.target.value.split("").length-1,a=n.split("")[l+1];" "===a&&o&&(t.passed.style.marginRight="5px")," "!==a&&o&&(t.passed.style.marginRight="0px")}static emptyInput(e){T.getElmts(),T.raceText();let t=T.verifyLetters(e);" "===e.data&&t&&(e.target.value="")}static words(e){let t=T.getElmts(),n=t.passed.innerText.split(" ");w=n.length;let o=t.passed.innerText.split("");E=o.length}static loadAutoCar(){let e=Math.floor(6*Math.random()),t=document.createElement("div");t.classList.add("car"),t.classList.add("bot");let n=document.createElement("div");n.classList.add("car-start");let o=document.createElement("div");o.classList.add("car-container");let l=document.createElement("img");l.src=["imgs/car.svg","imgs/car2.svg","imgs/car3.svg","imgs/car4.svg","imgs/car5.svg","imgs/car6.svg"][e];let a=document.createElement("div");a.classList.add("wpm-and-cpm"),a.classList.add("bot-wpm-and-cpm");let r=document.createElement("p");r.setAttribute("id","wpm botWpm");let s=document.createElement("p");s.setAttribute("id","cpm botCpm");let c=document.createElement("div");c.classList.add("you-name"),c.classList.add("you-name-bot");let i=document.createElement("p");i.innerText="Bot",c.appendChild(i),o.appendChild(l),t.appendChild(n),t.appendChild(o),a.appendChild(r),a.appendChild(s),t.appendChild(a),t.appendChild(c),document.querySelector(".type-cars").appendChild(t)}}class b{inputValideAfterTheGo(e){let t=T.getElmts();1!==e&&t.typeInput.setAttribute("readonly","readonly"),1===e&&(t.typeInput.removeAttribute("readonly"),t.typeInput.focus())}static disableCopy(){document.querySelector(".type-text").addEventListener("copy",(e=>{e.preventDefault(),e.clipboardData.setData("text/plain","")}),!1)}}b.disableCopy();class q{constructor(e){this.counterTimer=e}}function A(e){f=e}let k,x=0,L=0,I=0,B=0,M=[];class V{counterTimer(e){let t=V.getElms();const n=new b;g=setInterval((()=>{e--,"block"===t.counterTimer.style.display&&(e>0&&(t.counterTimer.innerText=`Start in ${e}s`),0===e&&(t.counterTimer.innerText="GO !!!",f=1),e<0&&(t.counterTimer.style.display="none",clearInterval(g))),n.inputValideAfterTheGo(f)}),1e3)}showResult(){L=w/(x/60),document.querySelector(".rw").innerText=L.toFixed(2),I=E/(x/60),document.querySelector(".rc").innerText=I.toFixed(2),document.querySelector(".rn").innerText=w,B=100-100*S/E,B<0&&(B=0),document.querySelector(".ra").innerText=B.toFixed(2)+"%",document.querySelector(".rm").innerText=S,document.querySelector(".tc").innerText=document.querySelector(".time-taked p").innerText}static calculateChartData(){let e=M[1],t=M[M.length-1],n=M[Math.round((M.length-1)/2)];return[e,M[Math.round(M.indexOf(n)/2)],n,M[Math.round((M.indexOf(n)+(M.length-1))/2)],t]}static getElms(){return new q(document.querySelector(".counterTimer"))}static minutesCounter(){setInterval((()=>{1===f&&x++}),1e3)}static showWpmAndCpm(){setInterval((()=>{if(1===f){console.log(x);let e=Math.floor(x/60),t=x%60;document.querySelector(".time-taked p").innerText=t<10?"0"+e+":0"+t:"0"+e+":"+t,L=Math.round(w/(x/60)),M.push(L),document.getElementById("wpm").innerText=`${L} WPM`,I=Math.round(E/(x/60)),document.getElementById("cpm").innerText=`${I} CPM`}}),1e3)}static addNewBot(e){let t=document.createElement("select");t.setAttribute("id","bot-name"),[{name:"Choose A Bot Name",value:"choose"},{name:"Sam",value:"sam"},{name:"Mr Robot",value:"robot"},{name:"Rick Grimes",value:"grimes"},{name:"James",value:"james"}].forEach((e=>{let n=document.createElement("option");n.setAttribute("value",e.value),n.innerText=e.name,t.appendChild(n)}));let n=document.createElement("select");n.setAttribute("id","bot-speed"),[{name:"Choose A Bot Speed",value:"choose"},{name:"20 WPM",value:"20"},{name:"30 WPM",value:"30"},{name:"40 WPM",value:"40"},{name:"50 WPM",value:"50"},{name:"60 WPM",value:"60"},{name:"70 WPM",value:"70"},{name:"80 WPM",value:"80"},{name:"90 WPM",value:"90"},{name:"100 WPM",value:"100"},{name:"200 WPM",value:"200"},{name:"300 WPM",value:"300"},{name:"400 WPM",value:"400"},{name:"500 WPM",value:"500"}].forEach((e=>{let t=document.createElement("option");t.setAttribute("value",e.value),t.innerText=e.name,n.appendChild(t)}));let o=document.createElement("button");o.classList.add("add-new"),o.innerText="Add Bot";let l=document.createElement("button");l.classList.add("delete-bot");let a=document.createElement("i");a.setAttribute("class","fa-solid fa-xmark"),l.appendChild(a);let r=document.createElement("div");r.classList.add("a-bot"),r.appendChild(t),r.appendChild(n),r.appendChild(o),r.appendChild(l);let s=document.querySelector(".choice-custom-race");Array.from(document.querySelectorAll(".a-bot")).length>=3?V.newNotification("Not more than 3 bots per race"):V.checkforBotNameAndSpeed(e)?s.appendChild(r):V.newNotification("Fill in the selections")}static checkforBotNameAndSpeed(e){let t=null;return t="choose"!=e.target.parentElement.children[0].value&&"choose"!=e.target.parentElement.children[1].value,t}static checkForDeleteBot(){let e=null,t=Array.from(document.querySelectorAll(".a-bot"));return t.length<=1&&(e=!1),t.length>1&&(e=!0),e}static checkBeforeStartCustomRace(){let e=Array.from(document.querySelectorAll(".a-bot")),t=[0];return e.forEach((e=>{"choose"===e.children[0].value&&t.push(1),"choose"===e.children[1].value&&t.push(1)})),!(t.reduce(((e,t)=>e+t),0)>0)}static getCustomRaceInfo(){let e=[];return Array.from(document.querySelectorAll(".a-bot")).forEach((t=>{e.push({name:t.children[0].value,speed:t.children[1].value})})),console.log(e),e}static newNotification(e){const t=document.querySelector("header");let n=document.createElement("div");n.classList.add("notification"),n.innerText=e,t.appendChild(n);let o=3;Array.from(document.querySelectorAll(".notification")).forEach((e=>{e.style.top=o+5.5+"%",o+=5.5})),k=setTimeout((()=>{document.querySelector(".notification").remove(),n||clearTimeout(k)}),2e3)}}let W=0;class D extends h{startState(){D.getViewElements();const e=D.getMoveElms(),t=new V,n=new T,o=document.querySelector(".chartjs"),l=document.createElement("canvas");l.setAttribute("id","chart"),W++,W>=1&&(e.car.style.left=0,e.typeInput.value="",e.passed.innerText="",(new i).giveTheText(),console.log(a),n.loadText(),t.counterTimer(5),o.appendChild(l),document.querySelector(".time-taked p").innerText="00:00")}endState(){const e=D.getMoveElms(),t=document.querySelector("#chart");W=0,clearInterval(g),clearTimeout(r),clearTimeout(s),clearTimeout(m),A(0),w=0,E=0,S=0,x=0,M.length=0,e.typeInput.style.backgroundColor="var(--bk-second1)",t&&t.remove(),h.hideResultUi(),document.querySelector(".bot")&&Array.from(document.querySelectorAll(".bot")).forEach((e=>{e.remove()}))}static getMoveElms(){return T.getElmts()}}const N=t.callElements(),P=new t;N.hideControl.addEventListener("click",(e=>P.hideDashboard(e))),N.hideControlMobile.addEventListener("click",(e=>P.hideDashboard(e))),N.hideControlBack.addEventListener("click",(e=>P.hideDashboard(e)));const R=document.getElementById("footer");window.addEventListener("DOMContentLoaded",(()=>{l.loadLocalTheme(),l.bodyBackground(),l.changeCarSkin(),l.dragElement(R)})),l.getElements().theme1.addEventListener("click",(e=>{l.themeAnimation(e),l.loadTheme(e),l.bodyBackground(),l.changeAnimationDivPositionOnDrag(),l.changeCarSkin()})),l.getElements().theme2.addEventListener("click",(e=>{l.themeAnimation(e),l.loadTheme(e),l.bodyBackground(),l.changeAnimationDivPositionOnDrag(),l.changeCarSkin()})),l.getElements().theme3.addEventListener("click",(e=>{l.themeAnimation(e),l.loadTheme(e),l.bodyBackground(),l.changeAnimationDivPositionOnDrag(),l.changeCarSkin()}));const Y=D.getViewElements(),F=new D,O=new h;Y.normalStart.addEventListener("click",(()=>{O.startActions(),F.startState(),O.loadBotCars()})),Y.youStart.addEventListener("click",(()=>{O.youActions(),F.startState(),O.loadBotCars()})),Y.customStart.addEventListener("click",(()=>{V.checkBeforeStartCustomRace()?O.customActions():V.newNotification("Before start fill in the missing selections"),V.checkBeforeStartCustomRace()&&(F.startState(),O.loadBotCars())})),Y.normalAction.addEventListener("click",F.endState),Y.newStart.addEventListener("click",F.endState),Y.youVsButton.addEventListener("click",F.endState),Y.customButton.addEventListener("click",F.endState);const j=T.getElmts(),$=new T;document.querySelector("form").addEventListener("submit",(e=>e.preventDefault())),j.typeInput.addEventListener("input",(e=>{$.move(e)})),window.addEventListener("DOMContentLoaded",(()=>{O.loadYouVsView(),V.minutesCounter(),V.showWpmAndCpm()})),document.querySelector(".choice-custom-race").addEventListener("click",(e=>{"add-new"===e.target.className&&V.addNewBot(e),"delete-bot"===e.target.className&&(V.checkForDeleteBot()?(e.target.parentElement.remove(),V.newNotification("Bot removed")):V.newNotification("At leats one bot"))}));const G=h.getViewElements();G.normalAction.addEventListener("click",O.loadNormalView),G.youVsButton.addEventListener("click",O.loadYouVsView),G.customButton.addEventListener("click",O.loadCustomView),G.newStart.addEventListener("click",O.loadView)})();
//# sourceMappingURL=bundle.js.map