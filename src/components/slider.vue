<template>
  <div id="slider" draggable="true">
    <div class="owl-nav">
      <div class="owl-prev">
        <div class="banner-arrow-left" v-on:click="sliderImage($event, 'prev')"></div>
      </div>
      <div class="owl-next">
        <div class="banner-arrow-right" v-on:click="sliderImage($event, 'next')"></div>
      </div>
    </div>
    <div class="owl-dots">
      <div class="owl-dot active" v-on:click="changeImage($event, 0)">
        <span></span>
      </div>
      <div class="owl-dot" v-on:click="changeImage($event, 1)">
        <span></span>
      </div>
      <div class="owl-dot" v-on:click="changeImage($event, 2)">
        <span></span>
      </div>
      <div class="owl-dot" v-on:click="changeImage($event, 3)">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>

var sliderTimer;
var sliderInterval = 5000;

export default {
  name: 'slider',
  data () {
    return {

    }
  },
  methods: {
    changeImage: function(e, index) {
      clearInterval(sliderTimer)
      document.querySelectorAll("#slider .owl-dots .owl-dot").forEach(function(node, i){
        if(node.classList.contains('active')) {
          node.setAttribute('class', 'owl-dot')
        }
      })
      e.currentTarget.setAttribute('class', 'owl-dot active')
      document.getElementById('slider').style.backgroundImage = 'url("./src/public/images/home-banner'+index+'.jpg")'
      sliderTimer = setInterval(function () {
        getImage('next')
      }, sliderInterval)
    },
    sliderImage: function(e, type) {
      clearInterval(sliderTimer)
      getImage(type)
      sliderTimer = setInterval(function () {
        getImage('next')
      }, sliderInterval)
    }
  }
}

sliderTimer = setInterval(function () {
  getImage('next')
}, sliderInterval)
function getImage(type) {
  var sliders = document.querySelectorAll("#slider .owl-dots .owl-dot")
  for(var i = 0; i < sliders.length; i++){
    if(sliders[i].classList.contains('active')){
      sliders[i].setAttribute('class', 'owl-dot')
      var next = (i === sliders.length - 1) ? 0 : (i + 1)
      var prev = (i === 0) ? (sliders.length - 1) : (i - 1)
      var index = (type === 'next') ? next : prev
      document.getElementById('slider').style.backgroundImage = 'url("./src/public/images/home-banner' + index + '.jpg")'
      sliders[index].setAttribute('class', 'owl-dot active')
      break
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
