<template>
  <div>
    <slider></slider>
    <nav-hot></nav-hot>
    <div id="content">
      <div class="row-responsive">
        <div class="responsive">
          <div class="product-item" style="margin-left: 0px;">
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLC-423', 'Click', 'homepage-recommend-RLC-423-en');" href="/product/rlc-423/">
            <img class="product-image show-image" src="https://1a3d93a9964ff3229e4a1eed-keeamo9ketico5n4.netdna-ssl.com/wp-content/assets/2018/03/show-product-1.jpg">
            <img class="product-image hover-image" src="https://1a3d93a9964ff3229e4a1eed-keeamo9ketico5n4.netdna-ssl.com/wp-content/assets/2018/03/product1.jpg">
            <h3>RLC-423</h3>
            <dl>
              <dd>• 5MP/4MP Super HD</dd>
              <dd>• 360° endless pan &amp; 90° tilt</dd>
              <dd>• 4X optical zoom</dd>
              <dd>• Power over Ethernet</dd>
            </dl>
          </a>
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLC-423', 'Click', 'homepage-recommend-RLC-423-en');" href="/product/rlc-423/" class="sk-button empty-button">Learn More<span class="ui-icon icon-icon_arrow-right"></span></a>
          </div>
        </div>
        <div class="responsive">
          <div class="product-item">
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLK8-410B4', 'Click', 'homepage-recommend-RLK8-410B4-en');" href="/product/rlk8-410b4/">
            <img class="product-image show-image" src="https://1a3d93a9964ff3229e4a1eed-keeamo9ketico5n4.netdna-ssl.com/wp-content/assets/2018/03/show-product-2.jpg">
            <img class="product-image hover-image" src="https://1a3d93a9964ff3229e4a1eed-keeamo9ketico5n4.netdna-ssl.com/wp-content/assets/2018/03/product2.jpg">
            <h3>RLK8-410B4</h3>
            <dl>
              <dd>• 4 Super HD cameras (RLC-410)</dd>
              <dd>• Pre-installed 2TB HDD in NVR</dd>
              <dd>• 24/7 reliable video recording</dd>
              <dd>• 4MP, PoE and DIY</dd>
            </dl>
          </a>
          <a onclick="ga('send', 'event', 'click homepage-recommend-RLK8-410B4', 'Click', 'homepage-recommend-RLK8-410B4-en');" href="/product/rlk8-410b4/" class="sk-button empty-button">Learn More<span class="ui-icon icon-icon_arrow-right"></span></a>
          </div>
        </div>
        <div class="responsive">
          <div class="product-item">
          <a onclick="ga('send', 'event', 'click homepage-recommend-C1 Pro', 'Click', 'homepage-recommend-C1 Pro-en');" href="/product/c1-pro/">
            <img class="product-image show-image" src="https://1a3d93a9964ff3229e4a1eed-keeamo9ketico5n4.netdna-ssl.com/wp-content/assets/2018/03/show-product-3.jpg">
            <img class="product-image hover-image" src="https://1a3d93a9964ff3229e4a1eed-keeamo9ketico5n4.netdna-ssl.com/wp-content/assets/2018/03/product3.jpg">
            <h3>C1 Pro</h3>
            <dl>
              <dd>• 4 megapixels (2560*1440) Super HD</dd>
              <dd>• 355° pan &amp; 105° tilt</dd>
              <dd>• 2.4/5 GHz dual-band WiFi</dd>
              <dd>• Two-way audio</dd>
            </dl>
          </a>
          <a onclick="ga('send', 'event', 'click homepage-recommend-C1 Pro', 'Click', 'homepage-recommend-C1 Pro-en');" href="/product/c1-pro/" class="sk-button empty-button">Learn More<span class="ui-icon icon-icon_arrow-right"></span></a>
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
    top: -8px;
  }
  .product-item a:first-child {
    display: block;
  }
  .product-item img {
    width: 100%;
    height: auto;
  }

  a.p-title {
    font-size: 26px;
    color: #333;
    font-weight: 500;
    display: inline-block;
    max-width: 270px;
    margin-top: 10px;
  }
  a.p-title:hover {
    color: #0088cc;
  }

  .p-des {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 320px;
    font-weight: 500;
    color: #555555;
    margin-top: 8px;
    margin-bottom: 20px;
    line-height: 26px;
  }

</style>
