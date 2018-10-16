$(function(){

  var titleId = 0;//表示当前的标题

//tab栏渲染
$.ajax({
  url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
  dataType: 'json',
  success: function( info ) {
    // console.log( info );
    $('.mmb_tabs ul').html(template('tapTmp', info));
      
      // $(window).trigger('resize');
      //滑动初始化
      var myScroll = new IScroll('.mmb_tabs',{
        scrollX: true,
        scrollY: false,
      });

      $('.mmb_tabs ul li.current').get(0)
  }
})
//动态监测window屏幕宽度，给ul设置宽度，

$(window).resize(function (){
  //给ul设置宽度

  var ulwidth = 0;
  $lis = $('.mmb_tabs ul li');
  var tmp = 0;
  $lis.each(function( i, v ){
    ulwidth += v.offsetWidth;
    tmp = v.offsetWidth;
    console.log(ulwidth);
  })     
  $('.mmb_tabs ul').width(ulwidth+10);
});

render();
function render() {
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
    data: {
      titleid: titleId
    },
    dataType: 'json',
    success: function(info) {
      console.log( info );
      $('.mmb_bcjproductList').html(template('bgjProductList', info));
    }
  })
}

//给li注册点击事件，获取titleId，切换类
$('.mmb_tabs').on('click','li',function(){
  $(this).addClass('current').siblings().removeClass('current');

  titleId = $(this).data('titleid');
  render();
  
})
})