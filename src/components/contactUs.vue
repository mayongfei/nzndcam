<template>
  <div id="contactUs">
    <h1 class="title">Contact Us</h1>
    <div class="contact-banner">
      <div class="content">
        <h2 class="subtitle">Get in touch with us</h2>
        <div class="infos">
          <strong class="work-time">Work time:</strong>
          <ul class="work-info">
            <li class="contact-info">Monday – Friday UTC+8 08am to 06pm</li>
            <li class="contact-info">Contact: The NZNDCam Support Team</li>
            <li class="contact-info">Address: ROOM G, 8th FLOOR, KING PALACE PLAZA, 55 KING YIP STREET, KWUN TONG, KOWLOON, HONGKONG</li>
            <li class="contact-info">TEL: +86-18917001578</li>
          </ul>
        </div>
        <div class="methods">
          <p class="methods-des">For technical issues, account assistance, feature suggestions, other problems while using our products or software, and some related info like payment failure or delivery details when placing your order, you can contact us via 2 methods:</p>
          <ul class="method-wrap">
            <li class="method"><span id="online-form">Online Form</span></li>
            <li class="method"><span>Email at nzndcamera@gmail.com</span></li>
          </ul>
        </div>

        <p class="the-end">For bloggers or website owners who’re interested in our product and would like to request a free sample for editorial reviews, please contact us at shotimellc@gmail.com.</p>
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
    font-family: 'quicksand' !important;
    font-weight: 400;
    font-size: 16px;
    color: #777;
    height: 800px;
    position: relative;
    background: url("../public/images/contact-bg.jpg") center center no-repeat;
    background-size: 100% 100%;
    line-height: 1.6;
  }
  h1.title {
    display: none;
  }
  h1 {
    font-size: 1.7em;
    line-height: 1.3;
  }
  .contact-banner {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 1080px;
    padding: 36px 0 36px 64px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
  }
  .content {
    max-width: 480px;
  }
  .subtitle {
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    color: #777;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    font-style: normal;
  }
  .infos, .methods {
    margin-top: 10px;
  }
  strong {
    font-weight: 500;
    display: inline-block;
    margin: 0;
    padding: 0;
    font-style: normal;
    color: #777;
  }
  .work-info, .methods {
    color: #777;
  }
  .method-wrap {
    list-style-type: disc;
    margin-left: 18px;
  }

</style>
