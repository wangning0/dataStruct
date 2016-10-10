/* 插入排序思想
 *  1.从第一个元素开始，该元素可以认为已经被排序
 *  2.取出第二个元素，在已经排序的元素序列中从后往前扫描
 *  3.如果已排序中的元素大于新元素，将新元素移动到下一位置
 *  4.重复步骤3，知道找到已排序的元素小于或者等于新元素的位置
 *  5.将新元素插入到该位置
 *  6.重复步骤2-5
*/ 

//插入排序
function insertionSort(array) {
  for(var i = 1; i < array.length; i++) {
    var key = array[i];
    var j = i - 1;
    while(j >= 0 && array[j] > key) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = key;
  }
  return array;
}

//测试插入排序
var arr = [1,32,12,323,211,31];
var arrSort = insertionSort(arr);
console.log(arrSort);