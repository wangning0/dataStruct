/*
 * 冒泡排序思想
 * 比较相邻元素，如果第一个大比第二个大，就交换他们两个
 * 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对
 * 针对所有的元素重复以上操作，除了最后一个
 * 重复上述步骤，知道排序完成
 * 
*/
//冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for(var i = 0; i < len; i++) {
    for(var j = len - 1; j > i; j--) {
      if( arr[i] > arr[j] ) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

//测试冒泡排序
var testArr = [2,3,4,1,321,112,33,31];
var sortArr = bubbleSort(testArr);
console.log(sortArr);