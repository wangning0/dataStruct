/*
  * 数据结构之图Graph
  * 图的抽象数据类型定义
  * Vertex类 表示顶点
  * * 属性
  * * * label         用来标识顶点
  * * * wasVisited    表明这个顶点是否被访问过
  * Graphl类 
  * * 属性
  * * * vertices      至高点，即图中顶点最多的个数
  * * * edges         边的条数
  * * * adj           用来保存边的信息
  * * 方法
  * * * addEdge       在图中增加一条边
  * * * showGraph     打印出图的所有顶点
  * 
*/

//顶点类Vertex
function Vertex(label, wasVisited) {
  this.label =  label;
  this.wasVisited = wasVisited;
}

