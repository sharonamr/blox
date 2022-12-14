function createBreakpoints(breakpoints = {}) {
  const values = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    ...breakpoints,
  };

  return {
    values,
    above(key) {
      return `@media screen and (min-width: ${values[key]})`;
    },
    between(start, end) {
      return `@media screen and (min-width: ${values[start]}) and (max-width: ${
        values[end] - 1
      })`;
    },
  };
}

export default createBreakpoints;
