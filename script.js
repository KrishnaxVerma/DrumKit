window.addEventListener("keydown",(e)=>{
    let c= e.key.toUpperCase();

    let x= document.querySelectorAll(`[data-btn="${c}"]`);
    let audio=x[1];
    let ele=x[0];

    if(x){
        audio.currentTime=0;
        audio.play()

        var exp=gsap.timeline()
        exp.to(ele,{
            scale:1.5,
            duration:0.2
        })
        exp.to(ele,{
            scale:1,
            duration:0.1
        })
    }
    else{
        console.log("Invalid Key")
    }
})

var tl= gsap.timeline()

tl.from(".main h1",{
    y:-1000,
    duration: 2
})

tl.from(".key", {
    scale: 0,
    duration: 2,
    stagger: 0.2
})