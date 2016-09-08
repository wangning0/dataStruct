/*
 * 哈夫曼树的JS实现
*/

//构造树的结点类Node
function Node(data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
}

//利用原型prototype在Array类中添加自定义方法createHufuTree(构建哈夫曼树)
Array.prototype.createHufuTree = function() {
  var nodes = [];

  //初始化结点
  for( var i = 0; i < this.length; i++ ) {
    //思考:此处的this指针指向哪里？代表什么?
    nodes.push(new Node(this[i]));
  }

  //生成哈夫曼树
  while(nodes.length > 1) {
    //先排序，按照升序
    //思考：降序怎么写？
    nodes.sort(function(a,b) {
      return a.data - b.data;
    })
    var first = nodes.shift();
    var second = nodes.shift();
    //思考：有哪些数组的操作是不会改变原数组,记住些常用的就可以了
    var newNodeData = first.data + second.data;
    var newNode = new Node(newNodeData);
    newNode.leftChild = first;
    newNode.rightChild = second;
    nodes.unshift(newNode);
  }

  return nodes[0];
}

//测试用例
var dataArr = [1,3,7,8,5,12,10];
//var dataArr = [7,5,4,2];
var res = dataArr.createHufuTree();
console.log(res.data);