var x = 3
var foo ={x:2,
  baz:{x:1,
    bar:function(){return this.x;}


  }
}
var go  = foo.baz.bar;
console.log(go())
console.log(foo.baz.bar())
console.log(this.x)
// console.log(window.x)
// @梅俊涛 你复制跑一遍

var globalvar = 'a';
function test(){
  console.log(window.globalvar);
}
test()
