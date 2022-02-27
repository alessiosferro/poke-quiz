export const getRandomNumber = ({ range = 850 } = { range: 850 }) => {
  return Math.floor(Math.random() * range);
};
