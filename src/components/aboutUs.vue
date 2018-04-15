<template>
  <div>
    <div class="banner aboutUs">
      <div class="header-content">
        <h1>SHARE OUR STORIES</h1>
        <p>
          <a href="javascript:void(0)">
            <img src="../public/images/facebook.png">
          </a>
          <a href="javascript:void(0)">
            <img src="../public/images/twitter.png">
          </a>
          <a href="javascript:void(0)">
            <img src="../public/images/google-plus.png">
          </a>
        </p>
      </div>
    </div>
    <div id="aboutUs">
      <p>NZNDCam started up in 2016, and ever since then, we’ve been devoted to creating the finest security products for consumers and business owners. Our first product was launched in July, 2016, which received rave reviews from customers who are sensitive to both quality and service. Until now, NZNDCam has helped hundreds of thousands of people from all around the world.</p>
      <p>We have spent years looking for the perfect way to make your home and office more secure and comfortable. And with great efforts, 4 product lines with mature technology are unfolded before your eyes:</p>
      <ul class="disc">
        <li>Indoor Smart Home Cameras: 355° pan & 105° tilt for every angle covered in your home - no blind spots for 24/7 surveillance. Featuring 4MP super HD, dual-band WiFi, 2-way audio, and more.</li>
        <li>Security Camera Systems: WiFi or PoE surveillance video systems to offer 24/7 monitoring and non-stop recording. They even support recording and surveillance all day and night without accessing your router network.</li>
        <li>WiFi/PoE Cameras & NVRs: With 4MP/5MP super HD high resolution, WiFi/PoE cameras keep an eye on what you care about most. The network video recorder (NVR) works perfectly with all these cameras for video storage.</li>
      </ul>
      <p>And we offer accessories for these cameras to well fit in your installation and environment.</p>
      <p>What’s more, NZNDCam’s “Plug and Play” technology brings great convenience for DIY users, without any reconfigurations or adjustments. And the Network Video Recorder (NVR) and IP camera integrated with latest 4K technology provide you with excellent view experience on a smartphone or tablet.</p>
      <p>We strive to develop innovative and progressive technology so that we can provide our customers with intelligent and straightforward solutions. What you think matters is what we care about. We hope a small step we take will lead to a big change in your life.</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'aboutUs',
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
  .aboutUs {
    background-image: url("../public/images/about-us.jpg");
  }
  .header-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
  }
  h1 {
    font-size: 26px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center;
    text-transform: uppercase;
  }
  ul.disc {
    list-style-type: disc;
    margin-left: 20px;
  }

  ul.disc li {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: 400;
    color: #777;
    font-family: Quicksand;
  }
  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: 400;
    color: #777;
    font-family: Quicksand;
  }
  #aboutUs {
    padding-top: 20px;
    padding-bottom: 40px;
    max-width: 1120px;
    margin: auto;
  }

</style>
