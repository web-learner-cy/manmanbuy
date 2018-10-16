$(function(){
  // 1动态渲染导航
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    type: 'get',
    dataType: 'json',
    success: function( info ) {
      // console.log(info);
      $('.mmb_nav ul').html(template('navTmp',info));
      
      $('.mmb_nav li:nth-child(8)').nextAll().addClass('hide');
    }
  })
})

//点击事件
$('.mmb_nav').on('click', 'li:nth-child(8)',function( e ){
  e.preventDefault();
  $(this).nextAll().toggleClass('hide');
})

// 2渲染折扣列表页
$.ajax({
  url: 'http://127.0.0.1:9090/api/getmoneyctrl',
  type: 'get',
  dataType: 'json',
  success: function( info ) {
    console.log( info );
    $('.mmb_recommd .content').html(template('recommdTmp', info));
  }

})

//点击更多按钮，跳转到省钱控制页面
$('.moreBtn').click(function(){
    location.href = 'moneyCtr.html';
})

// 点击backTop按钮，回到顶部
$('.backTop').click(function(){

  $(window).scrollTop(0);
})