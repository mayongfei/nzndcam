
const items = [
  {
    id: 1,
    name: '1home-c1-pro',
    src: 'home-c1-pro.jpg'
  },
  {
    id: 2,
    name: '2home-rlc-423',
    src: 'home-rlc-423.jpg'
  },
  {
    id: 3,
    name: '3home-c1-pro',
    src: 'home-c1-pro.jpg'
  },
  {
    id: 4,
    name: '4rlk8-410b4-home',
    src: 'rlk8-410b4-home.jpg'
  },
  {
    id: 5,
    name: '5home-c1-pro',
    src: 'home-c1-pro.jpg'
  },
  {
    id: 6,
    name: '6home-rlc-423',
    src: 'home-rlc-423.jpg'
  },
  {
    id: 7,
    name: '7home-c1-pro',
    src: 'home-c1-pro.jpg'
  },
  {
    id: 8,
    name: '8home-c1-pro',
    src: 'home-c1-pro.jpg'
  },
  {
    id: 9,
    name: '9rlk8-410b4-home',
    src: 'rlk8-410b4-home.jpg'
  },
  {
    id: 10,
    name: '10home-c1-pro',
    src: 'home-c1-pro.jpg'
  },
  {
    id: 11,
    name: '11rlk8-410b4-home',
    src: 'rlk8-410b4-home.jpg'
  },
  {
    id: 12,
    name: '12home-c1-pro',
    src: 'home-c1-pro.jpg'
  }
];

let getProducts = function () {
  let colSize = 4;
  let cols = [];
  let products = [];
  for(let i = 0; i < items.length; i++) {
    cols.push(items[i]);
    if((i + 1)%colSize === 0) {
      products.push(cols);
      cols = [];
    }
  }
  return products;
};
module.exports = {
  items,
  getProducts
};
