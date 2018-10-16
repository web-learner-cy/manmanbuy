//管理所有页面的ajax请求数据的地址
(function(window){
  var routeUrl = {};

  routeUrl.fn = routeUrl.prototype = {
    constructor: 'routeUrl',
    baseUrl: '127.0.0.1:9090'
  };

  /* 可扩展功能 */
  touteUrl.fn.extend = function(obj) {
    
    for( var k in obj ) {
      //判断原型上是否有这个方法
      this[ k ] = obj[ k ];
    }
  }

  window.routeUrl = routeUrl;
})(window);