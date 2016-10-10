/* 二分插入排序思想
 *  1.从第一个元素开始，该元素可以认为已经被排序
 *  2.取出下个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置
 *  3.将新元素插入到该位置后，重复上述步骤
*/

//二分插入排序
function binaryinsertionSort(arr) {
  for( var i = 1; i < arr.length; i++ ) {
    var key = arr[i];
    var left = 0;
    var right = i - 1;
    while(left <= right) {
      var middle = parseInt(left + right);
      if(key <= arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    for( var j = i - 1; j >= left; j-- ) {
      arr[j + 1] = arr[j];
    }
    arr[left] = key;
  }
  return arr;
}

//测试二分插入排序
var testArr = [2,3,4,1,321,112,-33,31];
var sortArr = binaryinsertionSort(testArr);
console.log(sortArr);