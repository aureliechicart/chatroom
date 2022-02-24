
export const getHighestId = (dataArray) => {
  // getting all ids of an array's elements
  const tabIds = dataArray.map((task) => task.id);

  // identifying the higher one
  const idMax = Math.max(...tabIds);

  return idMax;
};