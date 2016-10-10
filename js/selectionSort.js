/*
 * 选择排序思想
 * 1. 从未排序队列中选择最小的数，存放到排序序列的首部
 * 2. 从剩下的未排序队列中选择最小的数，存放到排序序列的尾部，重复该操作，直至未排序序列为空
*/

//选择排序
function selectionSort(arr) {
  var len = arr.length;
  var temp; //临时变量
  for(var i = 0; i < len; i++) {
    var min = arr[i];
    for(var j = i + 1; j < len; j++) {
      if(min > arr[j]) {
        temp = min;
        min = arr[j];
        arr[j] = temp;
      }
    }
    arr[i] = min;
  }
  return arr;
}

//测试选择排序
var testArr = [2,3,4,1,321,112,-33,31];
var sortArr = selectionSort(testArr);
console.log(sortArr);