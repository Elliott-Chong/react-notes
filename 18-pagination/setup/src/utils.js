const paginate = (arr) => {
  let paginated = [];
  let temp = [];
  const PEOPLE_PER_PAGE = 9;
  arr.forEach((person, index) => {
    if (index + 1 === arr.length) {
      temp.push(person);
      paginated.push(temp);
    } else if ((index + 1) % PEOPLE_PER_PAGE !== 0) {
      temp.push(person);
    } else if ((index + 1) % PEOPLE_PER_PAGE === 0) {
      temp.push(person);
      paginated.push(temp);
      temp = [];
    }
  });
  return paginated;
};

export default paginate;
