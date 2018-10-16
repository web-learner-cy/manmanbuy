$(function(){
  var brandtitleid = +getSearch('brandtitleid');
  console.log(brandtitleid);
  var productid = 1;
  var productName;
  var productImg;
  
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbrand',
    data: {
      brandtitleid: brandtitleid
    },
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.mmb_brand .list').html(template('brandlistTmp', info));
    }
  })

  //商品
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbrandproductlist',
    data: {
      brandtitleid: brandtitleid,
      pagesize: 4
    },
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.mmb_product .list').html(template('productListTmp',info));
      productid = info.result[0].productId;
      productName = info.result[0].productName;
      productImg = info.result[0].productImg;
      // console.log(productImg);
      
      //评论渲染
      $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
          productid: productid
        },
        dataType: 'json',
        success: function( info ) {
          info.productid = productid;
          info.productName = productName;
          info.productImg = productImg;
          console.log( info );
          $('.productCom').html(template('comTmp',info));
        }
      })
    }
  })
 
})