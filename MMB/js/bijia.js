$(function() {

  var category = localStorage.getItem('category');
  var productId = +getSearch('productId')
  console.log(productId);

  $.ajax({
    url:'http://127.0.01:9090/api/getproduct',
    data: {
      productid: productId
    },
    dataType: 'json',
    success: function( info ) {
      
      info.category = category;
      console.log( info );
      
      // 三级导航渲染
      $('.sitenav').html(template('brandTmp',info));
      // 商品详情渲染
      $('.renderBox').html(template('detailTmp', info));

      
    }
  })
  
  // 渲染评论
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
      productid: productId
    },
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.mmb_netComment .info ul').html(template('comTmp', info));
      
    }
  })
})