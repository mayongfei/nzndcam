<template>
  <div id="aboutUs">
    <p>NZNDCam started up in 2016, and ever since then, we’ve been devoted to creating the finest security products for consumers and business owners. Our first product was launched in July, 2016, which received rave reviews from customers who are sensitive to both quality and service. Until now, NZNDCam has helped hundreds of thousands of people from all around the world.</p>
    <p>We have spent years looking for the perfect way to make your home and office more secure and comfortable. And with great efforts, 4 product lines with mature technology are unfolded before your eyes:</p>
    <ul class="circle">
      <li>Indoor Smart Home Cameras: 355° pan & 105° tilt for every angle covered in your home - no blind spots for 24/7 surveillance. Featuring 4MP super HD, dual-band WiFi, 2-way audio, and more.</li>
      <li>Security Camera Systems: WiFi or PoE surveillance video systems to offer 24/7 monitoring and non-stop recording. They even support recording and surveillance all day and night without accessing your router network.</li>
      <li>WiFi/PoE Cameras & NVRs: With 4MP/5MP super HD high resolution, WiFi/PoE cameras keep an eye on what you care about most. The network video recorder (NVR) works perfectly with all these cameras for video storage.</li>
    </ul>
    <p>And we offer accessories for these cameras to well fit in your installation and environment.</p>
    <p>What’s more, NZNDCam’s “Plug and Play” technology brings great convenience for DIY users, without any reconfigurations or adjustments. And the Network Video Recorder (NVR) and IP camera integrated with latest 4K technology provide you with excellent view experience on a smartphone or tablet.</p>
    <p>We strive to develop innovative and progressive technology so that we can provide our customers with intelligent and straightforward solutions. What you think matters is what we care about. We hope a small step we take will lead to a big change in your life.</p>
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #aboutUs {
    display: none;
  }
  ul.circle {
    list-style-type:circle;
    padding: 20px;
  }

  ul.circle li {
    line-height: 25px;
    padding: 5px 0;
  }
  p {
    line-height: 26px;
    padding: 5px 0;
  }

</style>
