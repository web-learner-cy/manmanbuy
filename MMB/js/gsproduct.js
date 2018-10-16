$(function(){
  var shopid = 0;
  var areaid = 0;
  //商店下拉框渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshop',
    dataType: 'json',
    success: function( info ) {
      console.log(info);
      $('#shop ul').html(template('shopdropdownTmp',info));
    }
  })

  //地址下拉框渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshoparea',
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('#area ul').html(template('areadropdownTmp',info));
    }
  })

  //点击店铺，显示下拉框
  $('.gs_tabs .shop').click(function(){
    $('#shop').toggleClass('show');
    $('#area').removeClass('show');
  })

  //点击地址，显示下拉框
  $('.gs_tabs .area').click(function(){
    $('#area').toggleClass('show');
    $('#shop').removeClass('show');
  })

  //商店文本填充
  $('#shop ul').on('click','a', function(){
    var txt = $(this).text();
    shopid = $(this).data('shopid');

    console.log(shopid);
    $('.shop span').text(txt);
    //隐藏下拉框
    $('#shop').removeClass('show'); 
    //重新渲染 
    render();
  })

  //地址文本填充
  $('#area ul').on('click','a', function(){
    var txt = $(this).text().split('（')[0];
    areaid = $(this).data('areaid');
    console.log(areaid);
    
    $('.area span').text(txt);
    //隐藏下拉框
    $('#area').removeClass('show');  

    //重新渲染
    render();
  })

  //商品渲染
  render();
  function render() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      data: {
        shopid: shopid,
        areaid: areaid
      },
      dataType: 'json',
      success: function( info ) {
        console.log( info );
        $('.gs_productlist ul').html(template('productlist', info));
      }
    })
  }
  

})