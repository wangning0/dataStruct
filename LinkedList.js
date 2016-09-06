/*
  * 数据结构之链表
  * 链表的抽象数据类型定义
  * 设计的链表包含两个类:
  * * Node 类用来表示节点
  * * LinkedList类提供插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法
  * Node类
  * * 属性
  * * * element 用来保存节点上的数据
  * * * next    用来保存指向下一个节点的链接
  * LinkedList类
  * * 属性
  * * * head    头节点
  * * 方法
  * * * find    遍历链表
  * * * insert  插入新节点
  * * * remove  从链表中删除一个节点
  * * * display 输出链表内的元素
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
}

//遍历链表
function find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}