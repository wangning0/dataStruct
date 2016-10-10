/*
 * 合并排序思想
 * * 1.将两个已经排序的数组合并，要比从头开始排序所有元素来的快
 * * 2.将数组拆开，分成n个只有一个元素的数组，然后不断的两两合并，直到全部排序完成
 * 举例说明
 * * 将[3,2,4,5,1]进行从小到大的排序
 * * * 1.将数组分成[3, 2, 4]和[5, 1]两部分
 * * * 2.将[3, 2, 4]分成[3, 2]和[4]两部分
 * * * 3.将[3, 2]分成[3]和[2]两部分，然后合并成[2, 3]
 * * * 4.将[2, 3]和[4]合并成[2, 3, 4]
 * * * 5.将[5, 1]分成[5]和[1]两部分，然后合并成[1, 5]
 * * * 6.将[2, 3, 4]和[1, 5]合并成[1, 2, 3, 4, 5]
*/

//合并两个已经排序的数组
function merge(left, right) {
  var result = [];
  var il = 0;
  var ir = 0;

  while(il < left.length && ir < right.length) {
    if( left[il] < right[ir] ) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

//合并排序
// function mergeSort(myArray) {
//   if(myArray.length < 2) {
//     return myArray;
//   }

//   var middle = Math.floor(myArray.length / 2);
//   var left = myArray.slice(0,middle);
//   var right = myArray.slice(middle);

//   return merge(mergeSort(left),mergeSort(right));
// }

//上述方法会返回一个全新的数组，会多占用空间，可以将上面的函数修改，让它在原地排序，不多占用空间
function mergeSort(myArray) {
  if(myArray.length < 2) {
    return myArray;
  }

  var middle = Math.floor(myArray.length / 2);
  var left = myArray.slice(0,middle);
  var right = myArray.slice(middle);
  var params = merge(mergeSort(left),mergeSort(right));

  params.unshift(0,myArray.length);

  // splice用来替换数组元素，它接受多个参数，
  // 第一个是开始替换的位置，第二个是需要替换的个数，后面就是所有新加入的元素。
  // 因为splice不接受数组作为参数，所以采用apply的写法。
  // 这一句的意思就是原来的myArray数组替换成排序后的myArray

  myArray.splice.apply(myArray,params);

  return myArray;
}

//测试合并排序
var arr = [312,3,43,1232,431,212,324,435,541];
var sortArr = mergeSort(arr);
console.log(sortArr);

