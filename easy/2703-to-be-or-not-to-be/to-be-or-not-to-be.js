/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const functionsObject = {
    toBe: function (value) {
      if (!value) throw new Error("Not Equal");
      return value === val;
    },
    notToBe: function (value) {
      return value !== val ? true : "Equal";
    },
  };

  return functionsObject;
};
