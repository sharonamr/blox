const prioritySet = new Set([
  'Welcome',
]);
export default (arr) => arr.sort((a, b) => {
  if (prioritySet.has(a)) return -1;
  return a > b ? 1 : (a < b ? - 1 : 0);
});