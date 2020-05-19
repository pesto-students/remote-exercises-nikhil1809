function isTriangle(a, b, c) {
// check if some of two sides is less than third side than it is not a triangle
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return true;
}

export {
  isTriangle,
};
