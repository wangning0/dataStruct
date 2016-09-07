/*
  * 数据结构之栈Stack
  * 数据只能在栈顶添加或删除，操作很快，并且容易实现
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

//定义Stack类
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

//入栈操作
function push(element) {
  this.dataStore[this.top++] = element;
}
//出栈操作
function pop() {
  return this.dataStore[--this.top];
}
//返回栈顶元素
function peek() {
  return this.dataStore[this.top-1];
}
//返回栈内的元素个数
function length() {
  return this.top;
}
//清空栈
function clear() {
  this.top = 0;
}

console.log('-------------------分隔符------------------------')

//测试Stack类的实现

var s = new Stack();

s.push('CaiLaoShi');
s.push('CaiShiRan');
s.push('XiaoGe');
s.push('ZhangQiLing');
s.push('WangNing');
s.push('BaoDing');

console.log('length:%d',s.length());

var poped = s.pop();
console.log('The poped element is : %s',poped);
console.log(s.peek());
console.log('length:%d',s.length());

s.clear();
console.log(s.peek()); //如果一个空栈调用peek方法，结果为undefined
console.log('length:%d',s.length());

console.log('-------------------分隔符------------------------');

//Stack实例运用____判断给定字符串是否是回文

function isPalindrome(word) {
  var s = new Stack();

  for (var i = 0; i < s.length(); i++) {
    s.push(word[i]);
  }

  var rword = '';
  while(s.length() > 0) {
    rword += s.pop();
  }
  if(rword == word) {
    return true;
  } else {
    return false;
  }
}

var word = 'hello';
if(isPalindrome(word)) {
  console.log(word + ' is a isPalindrome');
} else {
  console.log(word + ' is not a isPalindrome');
}

word = 'racecar';
if(isPalindrome(word)) {
  console.log(word + ' is a isPalindrome');
} else {
  console.log(word + ' is not a isPalindrome');
}