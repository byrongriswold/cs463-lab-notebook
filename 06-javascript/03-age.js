const calculateAge = function (birthDate) {
  const regex = /[0-9]+-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])/;
  if (!birthDate.match(regex)) {
    return "Error: Invalid date format";
  }
  let [year, month, day] = birthDate.split("-");
  [year, month, day] = [year, month, day].map(Number);
  if (
    year > 2026 ||
    (year == 2026 && month > 5) ||
    (year == 2026 && month == 5 && day > 18)
  ) {
    return "Error: Birth date cannot be in the future";
  }
  if (
    year < 1901 ||
    (year == 1901 && month < 5) ||
    (year == 1901 && month == 5 && day < 18)
  ) {
    return "Are you sure you are more than 125 years old?";
  }
  age = month < 5 || (month == 5 && day < 19) ? 2026 - year : 2026 - year - 1;
  return `You are ${age} years old`;
};

console.log(calculateAge("2000-07-01"));
// You are 25 years old
console.log(calculateAge("1988-05-18"));
// You are 38 years old
console.log(calculateAge("2190-01-01"));
// Error: Birth date cannot be in the future
console.log(calculateAge("1800-01-01"));
// Are you sure you are more than 125 years old?
console.log(calculateAge("invalid-date"));
// Error: Invalid date format

// Note: These calculations were done on May 18, 2026.
