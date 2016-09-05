/*
  * 数据结构之列表List
  * 列表的抽象数据类型定义
  * * 属性
  * * listSize  列表的元素个数
  * * pos       列表的当前位置
  * * length    返回列表中的元素的个数
  * * 方法
  * * clear     清空列表中的所有元素
  * * toString  返回列表的字符串形式 
  * * getElement返回当前位置的元素
  * * insert    在现有元素后插入新元素
  * * append    在列表的末尾添加新元素
  * * remove    从列表中删除元素
  * * front     将列表的当前位置移动到第一个元素
  * * end       将列表的当前位置移动到最后一个元素
  * * prev      将当前元素前移一位
  * * next      将当前元素后移一位
  * * hasNext   判断后一位
  * * hasPrev   判断前一位
  * * currPos   返回列表的当前位置
  * * moveTo    将当前元素移动到指定位置
*/

//实现List类
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //初始化一个空数组来保存列表元素
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.hasNext = hasNext;
  this.hasPrev = hasPrev;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}
//给列表增加元素
function append(element) {
  this.dataStore[this.listSize++] = element;
}
//在列表中查找某一元素
function find(element) {
  for(var i = 0 ;i < this.dataStore.length ;i++){
    if(this.dataStore[i] == element) {
      return i; //表示找到的元素的索引，从0开始
    }
  }
  return -1; //表示没有找到
}
//从列表中删除元素
function remove(element) {
  var fundAt = this.find(element);
  if(fundAt > -1) {
    //可以查询下数组的方法splice的用法，可以从数组中删除指定的项目
    //arrObject.splice(index,hommany,item1,...itemX);
    //index 规定添加／删除的项目数量
    //howmany要删除的项目数量，如果设置为0，则不会删除项目
    this.dataStroe.splice(fundAt,1);
    --this.listSize;
    return true;
  }
  return false;
}
//列表中有多少个元素
function length() {
  return this.listSize;
}
//显示列表中的元素
function toString() {
  return this.dataStore;
}
//向列表中插入一个元素
function insert(element,after) {
  //element 表示插入的元素，after表示插入的位置
  var insertPos = this.find(after);
  if(insertPos > -1) {
    //同上，可以查看下splice的用法
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}
// 清空列表中所有的元素
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
// 判断给定值是否在列表中
function contains(element) {
  for(var i = 0; i < this.dataStroe.length; ++i) {
    if(this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}
//遍历列表
function front() {
  this.pos = 0;
}
function end() {
  this.pos = this.listSize-1;
}
function prev() {
  --this.pos;
}
function next() {
  if(this.pos < this.listSize) {
    ++this.pos;
  }
}
function currPos() {
  return this.pos;
}
function moveTo(position) {
  this.pos = position;
}
function getElement() {
  return this.dataStore[this.pos];
}
function hasNext() {
  return this.pos < this.listSize;
}
function hasPrev() {
  return this.pos >= 0;
}

//举例使用列表
var names = new List(); //创造一个实例

names.append('CaiLaoShi');
names.append('CaiShiRan');
names.append('XiaoGe');
names.append('ZhangQiLing');
names.append('WangNing');
names.append('BaoDing');
console.log(names);
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.next();
names.next();
console.log(names.getElement());
names.prev();
console.log(names.getElement());

console.log('\n');
console.log('\n');
console.log('\n');

//使用迭代器访问列表
for(names.front();names.hasNext();names.next()) {
  console.log(names.getElement());
}