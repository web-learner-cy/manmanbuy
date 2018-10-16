//根据参数，获取url的搜索键值
function getSearch( name ) {
  var search = location.search;

  // 解码成中文
  search = decodeURI( search );

  var search = search.slice(1);//获取？后面的数据
  //console.log(search);
  var arr = search.split('&');//分解成数组

  var obj = {};
  arr.forEach(function( v, i ){
    var key = v.split('=')[0];
    var value = v.split('=')[1];
    obj[key] = value;
  })
  return obj[name];
}

// 发送ajax函数封装
