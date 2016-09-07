/*
  * 数据结构之链表
  * 链表的抽象数据类型定义
  * 设计的链表包含两个类:
  * * Node 类用来表示节点
  * * LinkedList类提供插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法
  * Node类
  * * 属性
  * * * element       用来保存节点上的数据
  * * * next          用来保存指向下一个节点的链接
  * LinkedList类
  * * 属性
  * * * head          头节点
  * * 方法  
  * * * find          遍历链表寻找节点
  * * * insert        插入新节点
  * * * remove        从链表中删除一个节点
  * * * display       展示链表内的元素
  * * * findPrevious  查找前一个节点(主要用于remove操作时)
*/

//Node类
function Node(element) {
  this.element = element;
  this.next = null;
}

//LinkedList类
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
}

//遍历链表寻找节点
function find(item) {
  var currNode = this.head;
  //进行与操作的顺序不能改变
  while(currNode != null && currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
//插入新节点
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  //判断是否存在插入的节点
  if(current) {
    newNode.next = current.next;
    current.next = newNode;
  } else {
    console.log('该节点不存在\n');
  }
}
//展示链表内的所有元素
function display() {
  var currNode = this.head;
  while(currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
//查找前一个节点
function findPrevious(item) {
  var currNode = this.head;
  while(currNode.next != null && currNode.next.element != item) {
    currNode = currNode.next;
  }
  //判断查找的节点是否存在
  if(!currNode.next) { 
    return null;
  } else {
    return currNode;
  }
}
//从链表中删除一个节点
function remove(item) {
  var prevNode = this.findPrevious(item);
  if(item) {
    prevNode.next = prevNode.next.next;
  } else {
    console.log('该节点不存在');
  }
}
//测试链表类
var s = new LList();
s.insert('CaiShiRan','head');
s.insert('CaiLaoShi','CaiShiRan');
s.insert('XiaoGe','CaiLaoShi');
s.insert('ZhangQiLing','XiaoGe');
s.display();

console.log('-------------------分隔符------------------------');

s.remove('XiaoGe');
s.display();