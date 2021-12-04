import dayjs from 'dayjs';
import { generateOffers } from './offers';


const POINT_TYPES = ['Check-in', 'Sightseeing', 'Restaurant', 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight'];
const DESTINATIONS = ['Amsterdam', 'Chamonix', 'Geneva'];
const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const PHOTOS = ['http://picsum.photos/248/152?r=1', 'http://picsum.photos/248/152?r=2', 'http://picsum.photos/248/152?r=3', 'http://picsum.photos/248/152?r=4', 'http://picsum.photos/248/152?r=5'];
const MAX_OFFERS = 5;
const MAX_PRICE = 1000;
const MAX_DURATION = 59;

const getRandomNumber = function (min, max) {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  throw new RangeError('Ошибочные значения диапазона: первое значение должно быть меньше второго, а также диапазон может быть только положительный, включая ноль');
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayFull = (ArrayFull) => ArrayFull.slice(0, getRandomNumber(1, ArrayFull.length));

const MIN_DATE_IN_MS = 1635724800000; // 1/11/2021
const MAX_DATE_IN_MS = 1639958400000; // 20/12/2021

const startDate = new Date(getRandomNumber(MIN_DATE_IN_MS, MAX_DATE_IN_MS));
// eslint-disable-next-line no-unused-vars
const endDate = new Date(getRandomNumber(startDate, MAX_DATE_IN_MS));


const generateDate = () => {
  const maxDaysGap = 5;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

// const generateStartTime = () => {
//   const maxHoursGap = 5;
//   const maxMinGap = 5;

//   const hoursGap = getRandomInteger(-maxHoursGap, maxHoursGap);
//   const minGap = getRandomInteger(-maxMinGap, maxMinGap);

//   return dayjs().add(hoursGap, 'hour').add(minGap, 'minute').format('HH:mm');
// };

// const generateEndTime = () => {
//   const maxHoursGap = 5;
//   const maxMinGap = 5;

//   const hoursGap = getRandomInteger(-maxHoursGap, maxHoursGap);
//   const minGap = getRandomInteger(-maxMinGap, maxMinGap);

//   return dayjs().add(hoursGap, 'hour').add(minGap, 'minute').format('HH:mm');
// };


export const generatePoint = () => {
  const dateTime = generateDate(); //generateStartTime();
  const startTime = generateDate(); ////generateEndTime();
  const endTime = generateDate();

  return {
    pointType: POINT_TYPES[getRandomInteger(0, POINT_TYPES.length - 1)],
    destination: DESTINATIONS[getRandomInteger(0, DESTINATIONS.length - 1)],
    destinationInfo: {
      descriptions: getRandomArrayFull(DESCRIPTIONS),
      photos: getRandomArrayFull(PHOTOS),
    },
    dateTime,
    startTime,
    endTime,
    eventDuration: getRandomInteger(1, MAX_DURATION),
    price: getRandomInteger(1, MAX_PRICE),
    offers: generateOffers(getRandomInteger(0, MAX_OFFERS)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};


