let tl = gsap.timeline({ default : { ease : "power4.inOut", duration : 2}});
        let flagPoles = CSSRulePlugin.getRule(".title")

        tl.to(".title", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
         opacity : 1,
         y : 0,
         duration : 1.5})
         tl.to(".form", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
         opacity : 1,
         y : 0, duration : 0.5})
         tl.to(".box", ({ stagger : .1, duration: 1.2, opacity : 1, y : 0}), "-=2")