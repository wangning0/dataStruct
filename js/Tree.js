/*
二叉树的性质:
  1.二叉树第i层的节点数目最多为2^(i-1)
  2.深度为k的二叉树至多有2^k-1个节点
  3.在任意一颗二叉树中，若叶子节点的个数为n0，度为1的节点数n1,度为2的节点数为n2,则n0=n2+1
  * 数据结构之树Tree
  * 栈的抽象数据类型定义
  * * 属性
  * * top       记录栈顶位置，初识时对应数组的起始位置0。有元素被压入栈后，该变量的值将随之变化
  * * dataStore 保存栈内元素
  * * 方法
  * * pop       出栈操作
  * * push      入栈操作
  * * peek      返回栈顶元素，而不能删除它
  * * length    返回栈内的元素个数 
  * * clear     清空栈
  * 
*/

//二叉树的节点对象
function Node() {
  this.text = '';
  this.leftChild = null;
  this.rightChild = null;
}
//利用递归来构建二叉树
var charcters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function buildTree(node, i) {
  var leftIndex = 2 * i + 1;
  var rightIndex = 2 * i + 2;
  if(leftIndex < charcters.length) {
    var childNode = new Node();
    childNode.text = charcters[leftIndex];
    node.leftChild = childNode;
    buildTree(childNode,leftIndex);
  }
  if(rightIndex < charcters.length) {
    var childNode = new Node();
    childNode.text = charcters[rightIndex];
    node.rightChild = childNode;
    buildTree(childNode,rightIndex);
  }
}
var node = new Node();
node.text = charcters[0];
buildTree(node,0);
//利用非递归方式构建二叉树
var root;
function createBinaryTree() {
  var len = charcters.length;
  var index = 0; //索引从0开始
  var nodes = []; //创建一个临时数组，用于存放二叉树节点
  for(var i = 0; i<charcters.length; i++) {
    var node = new Node();
    node.text = charcters[i];
    nodes.push(node);
  }
  while(index < len) {
    var leftIndex = 2 * index + 1;
    var rightIndex = 2 * index + 2;
    nodes[index].leftChildren = nodes[leftIndex];
    nodes[index].rightChidren = nodes[rightIndex];
    index++;
  }
  root = nodes[0];
}
// createBinaryTree();
/*
 * * 树的三种遍历方式
 * * * 先序遍历  若二叉树为空，则空操作返回，否则先访问根节点，然后前序遍历左子树，再前序遍历右子树
 * * * 中序遍历  若二叉树为空，则空操作返回，否则从根节点开始(只是开始，而不是先访问根结点)，中序遍历根结点的左子树，然后是访问根结点，最后中序遍历右子树
 * * * 后序遍历  若树为空，则空操作返回，否则从左到右先叶子后结点的方式遍历访问左右子树，最后访问根结点。
 * *
*/

//先序遍历的递归方式
function firstIteration(node) {
  console.log(node);//查看遍历的顺序结果
  if(node.leftChild) {
    firstIteration(node.leftChild);
  }
  if(node.rightChild) {
    firstIteration(node.rightChild);
  }
}
//firstIteration(node);

//先序遍历的非递归方式
function notFirstIteration(node) {
  var stack = [];  //模拟栈操作
  var resultText = ''; //存放非递归遍历之后的字母对象
  stack.push(node); //入栈
  resultText += node.text;
  while(stack.length) {
    while(node.leftChild) {
      node = node.leftChild;
      resultText += node.text;
      stack.push(node); //入栈
    }
    stack.pop(); //出栈
    node  = stack.pop().rightChild;
    if(node) {
      resultText += node.text;
      stack.push(node); //入栈
    } else {
      node = stack.pop(); //出栈
    }
  }
  console.log(resultText); 
}
//notFirstIteration(node);


//中序遍历的递归方式
var secondStr = '';
function secondIteration(node) {
  //访问做结点
  if(node.leftChild) {
    if(node.leftChild.leftChild) {
      secondIteration(node.leftChild);
    } else {
      secondStr += node.leftChild.text;
    }
  }
  //访问根结点
  secondStr += node.text;
  //访问右结点
  if(node.rightChild) {
    if(node.rightChild.leftChild) {
      secondIteration(node.rightChild);
    } else {
      secondStr += node.rightChild.text;
    }
  }
}
//secondIteration(node);
//console.log(secondStr);

//中序遍历的非递归方式

function notSecondIteration(node) {
  var resultText = '';
  var stack = [];
  stack.push(node);

  while(stack.length) {
    while(node.leftChild) {
      node = node.leftChild;
      stack.push(node);
    }
    //出栈
    var tempNode = stack.pop();
    resultText += tempNode.text;

    if(tempNode.rightChild) {
      node = tempNode.rightChild;
      stack.push(node);
    }
  }

  console.log(resultText);
}
//notSecondIteration(node);

//后续遍历的递归方式
var thirdText = '';
function lastIteration(node) {
  //首先访问左孩子结点
  if(node.leftChild) {
    if(node.leftChild.leftChild) {
      lastIteration(node.leftChild);
    } else {
      thirdText += node.leftChild.text;
    }
  }
  //再访问右孩子结点
  if(node.rightChild) {
    if(node.rightChild.rightChild) {
      lastIteration(node.rightChild);
    } else {
      thirdText += node.rightChild.text;
    }
  }

  //最后访问根结点
  thirdText += node.text;
}
lastIteration(node);
console.log(thirdText);

//后续遍历的非递归方式
function notLastIteration(node) {
  var strText = '';
  var stack = [];
  // 0 1 2
  //若node的mark = 0，修改当前node的mark为1，左子树入栈
  //若node的mark = 1，修改当前node的mark为2，右子树入栈
  //若node的mark = 2，访问当前node结点的值
  stack.push([node,0]);

  while (stack.length) {
    var a = stack.pop();
    var node = a[0];
    switch (a[1]) {
      case 0:
          stack.push([node, 1]);  // 修改mark域
          if (node.leftChild) stack.push([node.leftChild, 0]);  // 访问左子树
          break;
      case 1:
          stack.push([node, 2]);
          if (node.rightChild) stack.push([node.rightChild, 0]);
          break;
      case 2:
          strText += node.text;
          break;
      default:
          break;
    }
  }
  console.log(strText);
}
notLastIteration(node);

