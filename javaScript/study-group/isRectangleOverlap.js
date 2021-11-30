// An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner,   and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

// Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.  Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

// Example 1:
// Input: rec1 = [0, 0,  2, 2], rec2 = [1,1,    3,  3]
//  Output: true

//  Example 2:
//  Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1][2,2,3,3]
//  Output: false

function isRectangleOverlap(rec1, rec2) {
  //create coordinate for each rectange variable
  //check if any of the corners overlap, or if they are a line
  let [x1, y1, x2, y2] = rec1;
  let [x3, y3, x4, y4] = rec2;
  if (x3 >= x2 || x4 <= x1 || y3 >= y2 || y4 <= y1) {
    return false;
  }
  return true;
}

console.log(
  "expected result: true >>",
  isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])
);
console.log(
  "expected result: false >>",
  isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3])
);
