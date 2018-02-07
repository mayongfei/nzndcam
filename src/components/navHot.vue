<template>
  <div id="navHot">
    <div class="section-content">
      <div class="row-responsive" v-on:mouseover="imageScale" v-on:mouseout="changeImage">
        <div class="responsive-3">
          <div class="img-inner">
            <img src="../public/images/one-01.png" alt="one-01"/>
            <a><img src="../public/images/one-02.png" alt="one-02"/></a>
          </div>
        </div>
        <div class="responsive-3">
          <div class="img-inner">
            <img src="../public/images/two-01.png" alt="two-01"/>
            <a><img src="../public/images/two-02.png" alt="two-02"/></a>
          </div>
        </div>
        <div class="responsive-3">
          <div class="img-inner">
            <img src="../public/images/three-01.png" alt="three-01"/>
            <a><img src="../public/images/three-02.png" alt="three-02"/></a>
          </div>
        </div>
        <div class="responsive-3">
          <div class="img-inner">
            <img src="../public/images/four-01.png" alt="four-01"/>
            <a><img src="../public/images/four-02.png" alt="four-02"/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'navHot',
  data () {
    return {

    }
  },
  methods: {
    imageScale: function (e) {
      if(e.target.nodeName === 'IMG' && e.target.parentNode.nodeName !== 'A') {
        e.target.style.display = 'none';
        $(e.target).next().children()[0].style.display = 'inline';
      }
    },
    changeImage: function (e) {
      if(e.target.nodeName === 'IMG' && e.target.parentNode.nodeName === 'A') {
        $(e.target).parent().prev()[0].style.display = 'inline';
        e.target.style.display = 'none';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
