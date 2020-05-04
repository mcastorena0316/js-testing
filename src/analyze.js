const analyze = (array) => {
  const newObject = {};
  newObject.average = array.reduce((a, b) => a + b, 0) / array.length;
  newObject.min = Math.min(...array);
  newObject.max = Math.max(...array);
  newObject.length = array.length;

  return newObject;
};

export default analyze;