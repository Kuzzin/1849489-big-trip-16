const OFFERS = [
  {
    title: 'Upgrade to comfort class',
    price: 100,
  },
  {
    title: 'Add luggage',
    price: 30,
  },
  {
    title: 'Add meal',
    price: 15,
  },
  {
    title: 'Choose seats',
    price: 5,
  },
  {
    title: 'Travel by train',
    price: 40,
  },
];

const generateOffers = (number) => {
  if (number === 0) {
    return [];
  }
  return OFFERS.slice(0, number);
};

export { generateOffers, OFFERS };
