// helper function, takes a number or string
// outputs a string in "100px" format
function formatPixelValue(value) {
  let _value = typeof value === "number" ? value.toString() : value;
  if (_value && !_value.includes("px")) {
    _value += "px";
  }
  return _value || "";
}

// eslint-disable-next-line import/prefer-default-export
export { formatPixelValue };
