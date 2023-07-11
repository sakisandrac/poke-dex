const getRandomNum = () => {
  return Math.floor(Math.random() * 100)
};

const capitalizeName = (name) => {
  return `${name.split('')[0].toUpperCase()}${name.substring(1)}`
}

export { getRandomNum, capitalizeName }