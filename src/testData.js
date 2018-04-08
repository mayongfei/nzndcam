
const items = [
  {
    id: 1,
    name: '1home-c1-pro16',
    src: 'home-c1-pro16.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 2,
    name: '2home-rlc-423',
    src: 'eu-rlc-423.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 3,
    name: '3home-c1-pro',
    src: 'home-c1-pro.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 4,
    name: '4rlk8-410b4-home',
    src: 'rlk8-410b4-home.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 5,
    name: '5home-c1-pro',
    src: 'home-c1-pro.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 6,
    name: '2rlk8-410b4-home',
    src: 'rlk8-410b4-home.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 7,
    name: '7home-c1-pro',
    src: 'home-c1-pro.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 8,
    name: '8rlk8-410b4-home',
    src: 'rlk8-410b4-home3.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  }
];

let getProducts = function () {
  let colSize = 3;
  let cols = [];
  let products = [];
  for(let i = 0; i < items.length; i++) {
    cols.push(items[i]);
    if((i + 1)%colSize === 0) {
      products.push(cols);
      cols = [];
    }
    if((items.length)%colSize != 0 && i === items.length-1) {
      products.push(cols);
    }
  }
  return products;
};
module.exports = {
  items,
  getProducts
};
