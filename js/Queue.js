/*
  * 数据结构之队列Queue
  * 队列是一种列表，队列只能在队尾插入元素，在队首删除元素，队列用于存储按顺序排列的数据，先进先出。队列是一种先进先出的数据结构(First-In-First-Out,FIFO)
  * 可以将队列想象成食堂排队的人群，排在前面的人先吃饭，排在后面的人后吃饭,
  * 队列的抽象数据类型定义
  * * 属性
  * * dataStore 保存队列内元素
  * * 方法
  * * enqueue       入队操作
  * * dequeue       出队操作
  * * front         读取队首元素
  * * back          读取队尾元素
  * * toString      显示队列内的所有元素
  * * empty         判断队列是否为空
  * 
*/

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

//入队操作
function enqueue(element) {
  this.dataStore.push(element);
}
//出队操作
function dequeue() {
  return this.dataStore.shift();
}
//读取队首元素
function front() {
  return this.dataStore[0];
}
//读取队尾元素
function back() {
  return this.dataStore[this.dataStore.length - 1];
}
//显示队列内的所有元素
function toString() {
  var retStr = '';
  for(var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}
//判断队列是否为空
function empty() {
  if(this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log('-------------------分隔符------------------------')

//测试Queue类

var q = new Queue();

q.enqueue('CaiLaoShi');
q.enqueue('CaiShiRan');
q.enqueue('XiaoGe');
q.enqueue('ZhangQiLing');

console.log(q.toString());

q.dequeue();
console.log(q.toString());

var f = q.front();
var b = q.back();
console.log('The first element is %s',f);
console.log('The end element is %s',b);

console.log('-------------------分隔符------------------------')

//queue的运用_________基数排序
