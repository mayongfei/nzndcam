<template>
  <div id="contactUs">
    <h1>Get in touch with us</h1>
    <h3>Work time: </h3>
    <ul class="disc">
      <li>Monday – Friday UTC+8 08am to 06pm</li>
      <li>Contact: The NZNDCam Support Team</li>
      <li><span class="yellow">Address: ROOM G, 8th FLOOR, KING PALACE PLAZA, 55 KING YIP STREET, KWUN TONG, KOWLOON, HONGKONG</span></li>
      <li><span class="yellow">TEL: +86-18917001578</span></li>
    </ul>
    <p>For technical issues, account assistance, feature suggestions, other problems while using our products or software, and some related info like payment failure or delivery details when placing your order, you can contact us via 2 methods:</p>
    <ul class="disc">
      <li>Online Form</li>
      <li>Email at nzndcamera@gmail.com</li>
    </ul>
    <p>For bloggers or website owners who’re interested in our product and would like to request a free sample for editorial reviews, please contact us at shotimellc@gmail.com.</p>
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
        e.target.style.display = 'none'
        $(e.target).next().children()[0].style.display = 'inline'
      }
    },
    changeImage: function (e) {
      if(e.target.nodeName === 'IMG' && e.target.parentNode.nodeName === 'A') {
        $(e.target).parent().prev()[0].style.display = 'inline'
        e.target.style.display = 'none'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #contactUs {
    display: none;
  }
  .yellow {
    background: yellow;
  }

  ul.disc {
    list-style-type:disc;
    padding: 20px;
  }

  ul.disc li {
    line-height: 25px;
    padding: 5px 0;
  }
  p {
    line-height: 26px;
    padding: 5px 0;
  }

</style>
