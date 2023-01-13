import './style.css';

const oldCost = document.querySelector('.old-cost');
const newCost = document.querySelector('.new-cost');

function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    const rate = 49.75;
    return `$${rate} x ${weight} = ${rate * weight}`;
  };
}

function AdvancedShipping() {
  this.login = function (credentials) {};

  this.setStart = function (start) {};

  this.setDestination = function (destination) {};

  this.calculate = function (weight) {
    const rate = 39.5;
    return `$${rate} x ${weight} = ${rate * weight}`;
  };
}

function ShippingAdapter(credentials) {
  const shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}

function getCost() {
  const shipping = new Shipping();
  const credentials = {
    token: '30a8-6ee1',
  };
  const adapter = new ShippingAdapter(credentials);

  let cost = shipping.request('78701', '10010', 2);
  oldCost.textContent = `${oldCost.textContent} ${cost}`;

  cost = adapter.request('78701', '10010', 2);
  newCost.textContent = `${newCost.textContent} ${cost}`;
}

getCost();
