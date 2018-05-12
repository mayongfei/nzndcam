<template>
  <div>
    <slider></slider>
    <nav-hot></nav-hot>
    <div id="content">
      <div class="row-responsive">
        <div class="responsive">
          <div class="product-item" style="margin-left: 0px;">
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLC-423', 'Click', 'homepage-recommend-RLC-423-en');" href="/product/rlc-423/">
            <img class="product-image show-image" src="../public/images/show-product-1.jpg">
            <img class="product-image hover-image" src="../public/images/product1.jpg">
            <h3>RLC-423</h3>
            <dl>
              <dd>• 5MP/4MP Super HD</dd>
              <dd>• 360° endless pan &amp; 90° tilt</dd>
              <dd>• 4X optical zoom</dd>
              <dd>• Power over Ethernet</dd>
            </dl>
          </a>
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLC-423', 'Click', 'homepage-recommend-RLC-423-en');" href="/product/rlc-423/" class="sk-button empty-button">
            Learn More<span class="ui-icon icon-icon_arrow-right"></span>
          </a>
          </div>
        </div>
        <div class="responsive">
          <div class="product-item">
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLK8-410B4', 'Click', 'homepage-recommend-RLK8-410B4-en');" href="/product/rlk8-410b4/">
            <img class="product-image show-image" src="../public/images/show-product-2.jpg">
            <img class="product-image hover-image" src="../public/images/product2.jpg">
            <h3>RLK8-410B4</h3>
            <dl>
              <dd>• 4 Super HD cameras (RLC-410)</dd>
              <dd>• Pre-installed 2TB HDD in NVR</dd>
              <dd>• 24/7 reliable video recording</dd>
              <dd>• 4MP, PoE and DIY</dd>
            </dl>
          </a>
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLK8-410B4', 'Click', 'homepage-recommend-RLK8-410B4-en');" href="/product/rlk8-410b4/" class="sk-button empty-button">
            Learn More<span class="ui-icon icon-icon_arrow-right"></span>
          </a>
          </div>
        </div>
        <div class="responsive">
          <div class="product-item">
          <a onclick="ga('send', 'event', 'click homepage-recommend-C1 Pro', 'Click', 'homepage-recommend-C1 Pro-en');" href="/product/c1-pro/">
            <img class="product-image show-image" src="../public/images/show-product-3.jpg">
            <img class="product-image hover-image" src="../public/images/product3.jpg">
            <h3>C1 Pro</h3>
            <dl>
              <dd>• 4 megapixels (2560*1440) Super HD</dd>
              <dd>• 355° pan &amp; 105° tilt</dd>
              <dd>• 2.4/5 GHz dual-band WiFi</dd>
              <dd>• Two-way audio</dd>
            </dl>
          </a>
          <a onclick="ga('send', 'event', 'click homepage-recommend-C1 Pro', 'Click', 'homepage-recommend-C1 Pro-en');" href="/product/c1-pro/" class="sk-button empty-button">
            Learn More<span class="ui-icon icon-icon_arrow-right"></span>
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navHot from '@/components/navHot'
import slider from '@/components/slider'

export default {
  name: 'products',
  components: {
    'nav-hot': navHot,
    'slider': slider
  },
  methods: {

  }
}
</script>

<style scoped>
  dl {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #content {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .product-item {
    margin-left: 16px;
    float: left;
    padding-bottom: 38px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
    top: 0;
    text-align: left;
    transition: top .5s;
    -moz-transition: top .5s;
    -webkit-transition: top .5s;
    -o-transition: top .5s;
    -ms-transition: top .5s;
    -o-box-shadow: 0 0 5px #d3d3d3;
    -moz-box-shadow: 0 0 5px #d3d3d3;
    -webkit-box-shadow: 0 0 5px #d3d3d3;
    -ms-box-shadow: 0 0 5px #d3d3d3;
    box-shadow: 0 0 5px #d3d3d3;
    border: 1px solid #fff;
    margin-bottom: .6em;
  }
  .product-item:hover {
    border: 1px solid #00ace6;
    top: -8px;
  }
  .product-item a:first-child {
    display: block;
  }
  .product-item img.product-image {
    width: 100%;
    height: 295px;
    border-radius: 4px;
  }
  .show-image {
    display: inline;
  }
  .hover-image {
    display: none;
  }
  .product-item:hover .show-image {
    display: none;
  }
  .product-item:hover .hover-image {
    display: inline;
  }

  .product-item h3 {
    color: #333;
    font-size: 24px;
    font-weight: 500;
    padding: 20px 40px;
    margin-bottom: 0;
  }
  .product-item dl {
    color: #666;
    font-size: 16px;
    padding: 0 40px;
    margin-bottom: 20px;
    text-transform: unset;
  }
  dl dd {
    display: block;
    margin: 0 5px 0 0;
    line-height: 30px;
  }
  .sk-button {
    margin-left: 40px;
    color: #00ADE5;
    border: 1px solid #00ade5;
    display: inline-block;
    height: 48px;
    box-sizing: border-box;
    padding: 0 24px;
    line-height: 46px;
    text-align: center;
    font-size: 16px;
    border-radius: 30px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    top: 0;
    transition: top .5s;
    -moz-transition: top .5s;
    -webkit-transition: top .5s;
    -o-transition: top .5s;
    -ms-transition: top .5s;
  }
  .sk-button:hover {
    color: #FFFFFF;
    background: #00ade5;
  }
  .sk-button .ui-icon {
    margin-left: 10px;
  }
  .ui-icon {
    font-size: 16px;
    display: inline-block;
    transform: scale(0.7) translateY(20%);
    -ms-transform: scale(0.7) translateY(20%);
    -moz-transform: scale(0.7) translateY(20%);
    -webkit-transform: scale(0.7) translateY(20%);
    font-weight: 600;
  }
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-icon_arrow-right:before {
    content: "\e982";
  }

</style>
