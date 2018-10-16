$(function(){
  var index = 0;//记录当前显示图片的索引
  var coupontitle = localStorage.getItem('coupontitle');
  var couponid = +getSearch('couponId');
  console.log(couponid);
  
  //渲染标题
  $('.mmb_header h3').text(coupontitle+'优惠券');
  //渲染列表
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcouponproduct',
    data: {
      couponid: couponid
    },
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.couponList').html(template('couponListTmp', info));
    }
  })

  //点击li,显示模态框,将该图片显示在模态框中
  $('.couponList').on('click','li', function(e){
    e.preventDefault();
    var img = $(this).find('.pic').html();
    
    $('#modal').addClass('show');
    $('#modal .pic').html(img);

    //获取该索引
    index = $(this).data('index');
    // console.log(index);
    
  })
 
  //轮播图 右箭头
  $('.arrowright').click(function(){
    index++;
    if( index >=$('.couponList li').length - 1) {
      index = 0;
    }
    var img = $('.couponList li').eq(index).find('.pic').html();
    $('#modal .pic').html(img);
    return false;
  })

  $('.arrowleft').click(function(){
    index--;
    if( index < 0) {
      index = $('.couponList li').length - 2;
    }
    var img = $('.couponList li').eq(index).find('.pic').html();
    $('#modal .pic').html(img);
    return false;
  })

  // 点击模态框中图片.跳转到当前图片
    
  
    $('.pic').click(function(){
      var top = $('.couponList').eq(0).offset().top;
      console.log(top);

      //计算当前li距离顶部的高度
      var lis = $('.couponList li');
      var lisHeight = 0;
      for(var i = 0; i < index; i++) {
        lisHeight += lis[i].offsetHeight;
      }

      // console.log(liheight);
      $(window).scrollTop(top + lisHeight);
    })
  //  //给模态框注册点击事件，隐藏
   $('#modal').click(function( ){     
    $('#modal').removeClass('show');
   })
})