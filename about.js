window.addEventListener("scroll",shadow);

function shadow(){
    var h = window.innerHeight / 4
    var f = document.getElementById("abc");
    var n = f.getBoundingClientRect().top
    if(n<h)
    {
        var d = document.getElementById("DoneHtml");
        d.style.width = d.getAttribute("data-done");

        var j = document.getElementById("DoneCss");
        j.style.width = d.getAttribute("data-done");

        var g = document.getElementById("DoneReact");
        g.style.width = d.getAttribute("data-done");

        var e = document.getElementById("DoneBootstrap");
        e.style.width = d.getAttribute("data-done");

        var w = document.getElementById("DoneSass");
        w.style.width = d.getAttribute("data-done");

        var r = document.getElementById("DoneJavascript");
        r.style.width = d.getAttribute("data-done");

        
    }
}


const counters = document.querySelectorAll('.counter')  
 counters.forEach(counter => {  
   counter.innerText = '0'  
   const updateCounter = () => {  
     const target = +counter.getAttribute('data-target')  
     const c = +counter.innerText  
     const increment = target / 400  
     if(c < target) {  
       counter.innerText = `${Math.ceil(c + increment)}`  
       setTimeout(updateCounter, 1)  
     } 
     else 
     {  
       counter.innerText = target  
     }  
   }  
   updateCounter()  
 }) 






