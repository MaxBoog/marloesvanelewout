function scrollFunction(){const e=document.getElementById("navbar");document.body.scrollTop>50||document.documentElement.scrollTop>80?(e.style.paddingTop="1.5rem",e.style.paddingBottom="1.5rem",e.style.backgroundColor="white"):(e.style.paddingTop="2rem",e.style.paddingBottom="2rem",e.style.backgroundColor="transparent")}window.onscroll=function(){scrollFunction()};const spinner=document.querySelector(".spinner"),fadeEffect=setInterval((()=>{spinner.style.opacity||(spinner.style.opacity=1),spinner.style.opacity>0?spinner.style.opacity-=.1:(clearInterval(fadeEffect),spinner.style.display="none")}),50);window.addEventListener("load",fadeEffect);