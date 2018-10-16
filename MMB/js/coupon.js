$(function(){
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcoupon',
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.mmb_main ul').html(template('mainTmp',info));
      
      
    }
  })
})
//将标题存储到本地
// 给每一个li注册点击事件，将标题存储在本地
$('.mmb_main').on('click', 'a', function( e ){
  e.preventDefault();
  var coupontitle = $(this).find('p').text();
  var couponId = $(this).data('couponid');
  localStorage.setItem('coupontitle',coupontitle); 
  
  location.href = "couponproduct.html?couponId=" + couponId;
})