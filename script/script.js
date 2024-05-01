$(document).ready(function () {


  const clairdelune = new Audio("./sounds/clairdelune.mp3");
  const soundeffect1 = new Audio("./sounds/pageturnhuhu.mp3");
  const soundeffect2 = new Audio("./sounds/pageturnhuhu.mp3"); 
  const soundeffect3 = new Audio("./sounds/pageturnhuhu.mp3"); 
  const soundeffect4 = new Audio("./sounds/pageturnhuhu.mp3"); 
  const soundeffect5 = new Audio("./sounds/pageturnhuhu.mp3"); 
  const soundeffect6 = new Audio("./sounds/pageturnhuhu.mp3"); 
  
  $("body").click(function(){
    clairdelune.play(); 
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel1",
      start: "top center",
      toggleActions: 'play null play null'
    }
  });

  tl.add(function () {
    soundeffect1.play(); 
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel2",
      start: "top center",
      toggleActions: 'play null play null'
    }
  });

  tl2.add(function () {
    soundeffect2.play(); 
  });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel3",
      start: "top center",
      toggleActions: 'play null play null'
    }
  });

  tl3.add(function () {
    soundeffect3.play(); 
  });

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel4",
      start: "top center",
      toggleActions: 'play null play null'
    }
  });

  tl4.add(function () {
    soundeffect4.play(); 
  });

  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel5",
      start: "top center",
      toggleActions: 'play null play null'
    }
  });

  tl5.add(function () {
    soundeffect5.play(); 
  });
  
  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel7",
      start: "top center",
      toggleActions: 'play null play null'
    }
  });

  tl6.add(function () {
    soundeffect6.play(); 
  });
  
  
  //PANEL 1

  for (i = 0; i < 60; i++) { 
    // console.log (i)
    let randomx = Math.round((Math.random() - 0.5) * 8);
    let randomy = Math.round((Math.random() - 0.5) * 8);
    let randomz = Math.round(Math.random() * 6);   

    $('.star:nth-child(' + i + ')').css("background-image","url('./css/imgs/modified/star" + randomz + ".png')"); 
    $('.star:nth-child(' + i + ')').css("transform","translate(" + randomx + "vw," + randomy + "vw)");
}

var intervalId = window.setInterval(function(){

  for (i = 0; i < 60; i++) { 
    let randomx = Math.round((Math.random() - 0.5) * 8);
    let randomy = Math.round((Math.random() - 0.5) * 8);  
    let randomz = Math.round(Math.random() * 6);   

    $('.star:nth-child(' + i + ')').css("background-image","url('./css/imgs/modified/star" + randomz + ".png')"); 
    $('.star:nth-child(' + i + ')').css("transform","translate(" + randomx + "vw," + randomy + "vw)");
}

}, 5000);


ScrollTrigger.create({
    trigger: ".panel1",
    start: "top top",
    endTrigger: ".panel2",
    end: "top center",
    toggleClass: {targets: ".moon1", className: "showmoon"},
  });

ScrollTrigger.create({
    trigger: ".panel1",
    start: "top top",
    endTrigger: ".panel2",
    end: "top center",
    toggleClass: {targets: ".img1a", className: "showtexta"},
  });

  ScrollTrigger.create({
    trigger: ".panel1",
    start: "top top",
    endTrigger: ".panel2",
    end: "top center",
    toggleClass: {targets: ".img1b", className: "showtextb"},
  });

  ScrollTrigger.create({
    trigger: ".panel1",
    start: "top top",
    endTrigger: ".panel2",
    end: "top center",
    toggleClass: {targets: ".img1c", className: "showtextc"},
  });

  //PANEL 2

  ScrollTrigger.create({
    trigger: ".panel2",
    start: "top center",
    endTrigger: ".panel3",
    end: "top center",
    toggleClass: {targets: ".moon2", className: "showmoon"},
  });

  ScrollTrigger.create({
    trigger: ".panel2",
    start: "top center",
    endTrigger: ".panel3",
    end: "top center",
    toggleClass: {targets: ".img2a", className: "showtexta"},
  });

  ScrollTrigger.create({
    trigger: ".panel2",
    start: "top center",
    endTrigger: ".panel3",
    end: "top center",
    toggleClass: {targets: ".img2b", className: "showtextb"},
  });

  //PANEL 3

  ScrollTrigger.create({
    trigger: ".panel3",
    start: "top center",
    endTrigger: ".panel4",
    end: "top center",
    toggleClass: {targets: ".moon3", className: "showmoon"},
  });

  ScrollTrigger.create({
    trigger: ".panel3",
    start: "top center",
    endTrigger: ".panel4",
    end: "top center",
    toggleClass: {targets: ".img3a", className: "showtexta"},
  });

  ScrollTrigger.create({
    trigger: ".panel3",
    start: "top center",
    endTrigger: ".panel4",
    end: "top center",
    toggleClass: {targets: ".img3b", className: "showtextb"},
  });

  // PANEL 4 

  ScrollTrigger.create({
    trigger: ".panel4",
    start: "top center",
    endTrigger: ".panel5",
    end: "top center",
    toggleClass: {targets: ".moon4", className: "showmoon"},
  });

  ScrollTrigger.create({
    trigger: ".panel4",
    start: "top center",
    endTrigger: ".panel5",
    end: "top center",
    toggleClass: {targets: ".img4a", className: "showtexta"},
  });

  ScrollTrigger.create({
    trigger: ".panel4",
    start: "top center",
    endTrigger: ".panel5",
    end: "top center",
    toggleClass: {targets: ".img4b", className: "showtextb"},
  });

  //PANEL 5 

  ScrollTrigger.create({
    trigger: ".panel5",
    start: "top center",
    endTrigger: ".panel6",
    end: "top center",
    toggleClass: {targets: ".moon5", className: "showmoon"},
  });

  ScrollTrigger.create({
    trigger: ".panel5",
    start: "top center",
    endTrigger: ".panel6",
    end: "top center",
    toggleClass: {targets: ".img5a", className: "showtexta"},
  });

  ScrollTrigger.create({
    trigger: ".panel5",
    start: "top center",
    endTrigger: ".panel6",
    end: "top center",
    toggleClass: {targets: ".img5b", className: "showtextb"},
  });

  ScrollTrigger.create({
    trigger: ".panel5",
    start: "top center",
    endTrigger: ".panel6",
    end: "top center",
    toggleClass: {targets: ".img5c", className: "showtextc"},
  });

  //PANEL 8

  ScrollTrigger.create({
    trigger: ".panel8",
    start: "top center",
    toggleClass: {targets: ".img6a", className: "showtexta"},
  });

  ScrollTrigger.create({
    trigger: ".panel8",
    start: "top center",
    toggleClass: {targets: ".img6b", className: "showtextb"},
  });

  ScrollTrigger.create({
    trigger: ".panel8",
    start: "top center",
    toggleClass: {targets: ".img6c", className: "showtextc"},
  });


    //   PARALAXX STARFIELD
    gsap.to(".allstars", {
      scrollTrigger: {
        trigger: ".panel0",
        scrub: true,
        start: "top top",
        endTrigger: ".panel8",
        end: "top center",
      },
      y: "600vh",
      ease: "none",
    });


});


