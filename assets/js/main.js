$(".vid-control").click(function(e){
    $(".vid-control").toggleClass("active")
    $(".about-vid").trigger('play')
    $(".pause-btn").click(function(){
        $(".about-vid").trigger('pause')
    })
})

$(document).ready(function(){
    var video = document.getElementById('about-vid');
    var source = document.createElement('source');

   if(window.innerWidth > 482){
        source.setAttribute('src', './assets/videos/Spot_1200X623.mp4');
   }
   else{
        source.setAttribute('src', './assets/videos/Spot_1200X1200.mp4');
   }
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.load();
})