/*
* Date: 7.25.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
* In My Own Words: 
    Given the length and wideth of a polygon as integers, return the area if the polygon is a square, otherwise return the perimeter.
* Test Conditions: 
    areaOrPerimeter(4 , 4) , 16
    areaOrPerimeter(6 , 10) , 32
* Pseudocode: 
    If inputs are equal return x * y, else return 2x + 2y.
* Notes After Attempt:
    Simple and straightforward.
*/

const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : (2*l) + (2*w)
}
