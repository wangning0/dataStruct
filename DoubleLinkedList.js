/*
  * 数据结构之双向链表
  * 双向链表链表的抽象数据类型定义
  * 设计的链表包含两个类:
  * * Node 类用来表示节点
  * * LinkedList类提供插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法
  * Node类
  * * 属性
  * * * element       用来保存节点上的数据
  * * * next          用来保存指向下一个节点的节点
  * * * previous      用来保存指向上一个节点的节点
  * LinkedList类
  * * 属性
  * * * head          头节点
  * * 方法  
  * * * find          遍历链表寻找节点
  * * * insert        插入新节点
  * * * remove        从链表中删除一个节点
  * * * display       展示链表内的元素
  * * * findPrevious  查找前一个节点(主要用于remove操作时)
  * * * findLast      查找链表的最后一个节点
  * * * dispReverse   反序显示双向链表的元素
*/

//Node类
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

//LinkedList类
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
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

//查找链表的最后一个节点
function findLast() {
  var currNode = this.head;
  while(currNode.next != null) {
    currNode = currNode.next;
  }
  return currNode;
}

//反序显示双向链表的元素
function dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while(currNode.previous != null) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}

//插入新节点
function insert(newElement,item) {
  var newNode = new Node(newElement);
  var currNode = this.find(item);
  newNode.next = currNode.next;
  newNode.previous = currNode;
  currNode.next = newNode;
}

//展示链表内的所有元素
function display() {
  var currNode = this.head;
  while(currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

//从链表中删除一个节点
function remove(item) {
  var currNode = this.find(item);
  if(currNode.next != null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

//测试双向链表类
var s = new LList();
s.insert('CaiShiRan','head');
s.insert('CaiLaoShi','CaiShiRan');
s.insert('XiaoGe','CaiLaoShi');
s.insert('ZhangQiLing','XiaoGe');
s.display();

console.log('-------------------分隔符------------------------');

s.remove('XiaoGe');
s.display();

console.log('-------------------分隔符------------------------');
s.dispReverse();
