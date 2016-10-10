/*
 * 快速排序思想
 * * 基本思想: 先确定一个支点，将所有小于‘支点’的值都放在该点的左侧，大于‘支点’的值都放在该点的右值，然后对左右两侧不断重复这个过程，直到所有排序完全
 * * * 1. 确定'支点',虽然数组中任意一个值都能作为‘支点’
 * * * 2. 建立两端的指针。左侧的指针指向数组的第一个元素，右侧的指针指向数组的最后一个元素
 * * * 3. 左侧指针的当前值与‘支点’进行比较，如果小于‘支点’则指针向后移动一位，否则指针停在原地
 * * * 4. 右侧指针的当前值与‘支点’进行比较，如果大于‘支点’则指针向前移动一位，否则指针停在原地
 * * * 5. 左侧指针的位置与右侧指针的位置进行比较，如果前者大于等于后者，则本次排序结束，否则，左侧指针的值与右值指针的值相交换
 * * * 6. 对左右两侧重复第2至5步
 * 
*/

//  swap函数，用于互换两个位置的值
function swap(myArray, firstIndex, secondIndex) {
  var temp = myArray[firstIndex];
  myArray[firstIndex] = myArray[secondIndex];
  myArray[secondIndex] = temp;
}

//  partition函数，用于完成一轮排序
function partition(myArray, left, right) {

    var pivot   = myArray[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (myArray[i] < pivot) {
            i++;
        }

        while (myArray[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(myArray, i, j);
            i++;
            j--;
        }
    }

    return i;
}

//快速排序算法
function quickSort(myArray, left, right) {

  if (myArray.length < 2) return myArray;

  left = (typeof left !== "number" ? 0 : left);

  right = (typeof right !== "number" ? myArray.length - 1 : right);

  var index  = partition(myArray, left, right);

   if (left < index - 1) {
            quickSort(myArray, left, index - 1);
     }

   if (index < right) {
            quickSort(myArray, index, right);
      }

   return myArray;

}

//测试选择排序
var testArr = [2,3,4,1,321,112,-33,131,-12121,1311212,31414];
var sortArr = quickSort(testArr);
console.log(sortArr);