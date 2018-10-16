$(function(){
  var productId = +getSearch('productId');
  console.log(productId);
  
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data: {
      productid: productId
    },
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.mmb_productDetail').html(template('productDetTmp',info));

      $('.mmb_comment').html(info.result[0].productComment);
    }

  })


})