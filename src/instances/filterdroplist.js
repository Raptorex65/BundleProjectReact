
    // ignores case-sensitive
    const getValue = (value) =>
      typeof value === "string" ? value.toUpperCase() : value;
    // Main function filters according to selectedCanton
 const FilterCities = (array, filters) => {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    // filters using the (OR) operator
    return filterKeys.some((key) => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find(
        (filter) => getValue(filter) === getValue(item[key])
      );
    });
  });
};
  
export default FilterCities;
