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

//图类Graph
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  //边的信息比较复杂，采用的是邻接矩阵表示图边的方法，可以查一下邻接矩阵,下面是用初始化邻接矩阵
  for(var i = 0; i< this.vertices; ++i) {
    this.adj[i] = [];
  }
  //产生了一个二维数组adj[[],[],[],[],[]];
  this.addEdge = addEdge;
  this.showGraph = showGraph;
}

//增加边，v和w表示该边连接的两个结点
function addEdge(v,w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

//打印出图的所有顶点,方式为打印所有顶点及其相邻顶点列表的方式
function showGraph() {
  for(var i = 0; i < this.vertices; i++) {
    console.log(i + '->');
    for(var j = 0; j < this.vertices; j++) {
      if(this.adj[i][j] != undefined) {
        console.log(this.adj[i][j]);
      }
    }
  }
}

//测试
// var g = new Graph(5);
// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,2);
// g.showGraph();

/*
 * * 图的三种搜索方式
*/

//深度优先搜索(DFS),由于要确定该结点是否被访问，在Graph类加一个数组，用于存储已访问过的顶点

function GraphS(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  //边的信息比较复杂，采用的是邻接矩阵表示图边的方法，可以查一下邻接矩阵,下面是用初始化邻接矩阵
  for(var i = 0; i< this.vertices; ++i) {
    this.adj[i] = [];
  }
  //产生了一个二维数组adj[[],[],[],[],[]];
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  //新加内容
  //深度优先搜索
  this.dfs = dfs;
  this.bfs = bfs;
  //this.topSort = topSort;
  this.marked = [];
  for(var i =0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
}

function dfs(v) {
  this.marked[v] = true;
  if(this.adj[v] != undefined) {
    console.log('Visited vertex is ' + v);
  }
  for(var w in this.adj[v]) {
    if(!this.marked[this.adj[v][w]]) {
      this.dfs(this.adj[v][w]);
    }
  }
}
//DFS测试
// var ng = new GraphS(5);
// ng.addEdge(0,1);
// ng.addEdge(1,4);
// ng.addEdge(0,2);
// ng.addEdge(2,3);
// ng.dfs(0);

//广度优先搜索BFS
function bfs(v) {
  var queue = [];
  this.marked[v] = true;
  queue.push(v);//入队
  while(queue.length) {
    var qTop = queue.shift();//出队
    if(this.adj[v] != undefined) {
      console.log('Visited vertex is ' + qTop);
    }
    for(var w in this.adj[qTop]) {
      if(!this.marked[this.adj[qTop][w]]) {
        this.marked[this.adj[qTop][w]] = true;
        queue.push(this.adj[qTop][w]);
      }
    }
  }
}
//BFS测试
var ng = new GraphS(5);
ng.addEdge(0,1);
ng.addEdge(1,4);
ng.addEdge(0,2);
ng.addEdge(2,3);
//ng.bfs(0);


//拓扑排序topSort
function newGraph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  //边的信息比较复杂，采用的是邻接矩阵表示图边的方法，可以查一下邻接矩阵,下面是用初始化邻接矩阵
  for(var i = 0; i< this.vertices; ++i) {
    this.adj[i] = [];
  }
  //产生了一个二维数组adj[[],[],[],[],[]];
  this.addEdge = addHasSignEdge;
  this.showGraph = showGraph;
  this.topSort = topSort;
  this.topSortHelper = topSortHelper;
}
//有向图的边的增加
function addHasSignEdge(v,w) {
  this.adj[v].push(w);
  this.edges++;
}
//topSort方法
function topSort() {
  var visited = [];
  var stack = [];
  for( var i = 0; i < this.vertices; i++ ) {
    visited[i] = false;
  }
  for( var i = 0; i < this.vertices; i++ ) {
    if(visited[i] == false) {
      this.topSortHelper(i, visited, stack);
    }
  }
  var al = stack.pop();
  while(al != null) {
    console.log(al);
    al = stack.pop();
  }
}

function topSortHelper(v, visited, stack) {
  visited[v] = true;
  for(var w in this.adj[v]) {
    if(!visited[this.adj[v][w]]) {
      this.topSortHelper(this.adj[v][w],visited,stack);
    }
  }
  stack.push(v);
}

//top排序测试
var topSortTest = new newGraph(6);
topSortTest.addEdge(0,2);
topSortTest.addEdge(1,2);
topSortTest.addEdge(2,3);
topSortTest.addEdge(3,4);
topSortTest.addEdge(3,5);
topSortTest.topSort();