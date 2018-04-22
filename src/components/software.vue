<template>
  <div>
    <div class="mod-home">
      <div class="mxw">
        <div class="mod-home-content">
          <div class="mod-home-left">
            <h1>Welcome to NZNDCam</h1>
            <p class="software">To get started please follow the Quick Start Guide to setup the NZNDCam mobile app, Client software and hardware.</p>
            <p><a class="ui-button" href="#download" id="get-start">Get Started<i class="fa-icon-angle-double-down"></i></a></p>
          </div>
        </div>
      </div>
    </div>
    <div id="download">
      <p class="software black">Support:</p>
      <p>For technical support, you may send E-mail to</p>
      <a href="support@nzndcam.com">support@nzndcam.com</a><br/><br/>

      <p class="software black">Manual and software:</p>
      <p>You may download the Software and Manual from</p>
      <a href="https://nzndcam.comsoftware-and-manua">https://nzndcam.comsoftware-and-manua.</a><br/>
      <p>Software (Mobile App, WindowsClient, MacClient)</p>
      <p>Manual (QSG, User Manual)</p><br/>

      <p class="software black">Firmware:</p>
      <p>You may download the firmware from</p>
      <a href="https://nzndcam.comfmwr">https://nzndcam.comfmwr</a><br/><br/><br/>

      <p class="software black">NZNDCam Digital Technology Co,Ltd</p>
      <a href="https://nzndcam.com">https://nzndcam.com</a><br/><br/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'software',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mod-home {
    background: url("../public/images/software-bg.png") no-repeat;
  }
  .mxw {
    max-width: 1050px;
    margin: auto;
  }
  .mod-home-left {
    width: 34em;
    display: inline-block;
  }
  .mod-home-left h1 {
    font-size: 2.1em;
    line-height: 1.2;
    color: #fff;
    font-weight: 800;
    margin-bottom: .8em;
  }
  .mod-home-left p {
    color: #fff;
    margin-bottom: 4.375em;
  }
  h1 {
    font-family: Quicksand;
    font-weight: 400;
  }
  p.software {
    font-family: Quicksand;
    font-size: 1.25em;
    line-height: 1.2;
  }
  .black {
    color: #2c3e50;
  }
  .mod-home-left a {
    font-size: .9em;
    border: 1px solid #fff;
    line-height: 1.2;
    padding: .62em 1.875em;
    color: #fff;
    border-radius: 3px;
    position: relative;
    top: -2em;
  }
  .mod-home-left a:hover {
    background: white;
    color: #00ace6;
  }
  .ui-button {
    line-height: 45px;
    width: 223px;
    border-radius: 30px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    border: none;
    box-shadow: none;
    display: block;
    cursor: pointer;
    position: relative;
    top: 0;
    transition: top .5s;
    -moz-transition: top .5s;
    -webkit-transition: top .5s;
    -o-transition: top .5s;
    -ms-transition: top .5s;
  }
  .fa-icon-angle-double-down {
    margin-left: 7px;
  }

  #download {
    padding-top: 20px;
    padding-bottom: 40px;
    max-width: 1120px;
    margin: auto;
  }
  #download a {
    color: #00ade5;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 400;
    color: #777;
    font-family: Quicksand;
  }

</style>
