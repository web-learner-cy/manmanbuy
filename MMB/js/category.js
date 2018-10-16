$(function(){
  //渲染页面
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    type: 'get',
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.mmb_category ul').html(template('catetitleTmp', info));
    }
  })

  //给标题注册点击事件（事件委托）
  $('.mmb_category').on('click','.title', function(){
    $self = $(this);
    if( $self.hasClass('current') ) {
      $self.parent().find('.content').toggleClass('hide');
      return;
    }
    var titleId = $(this).data('id');
   
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getcategory',
      data: {
        titleid: titleId
      },
      dataType: 'json',
      success: function( info ) {
        console.log( info );  
        $self.parent().append(template('catecontentTmp', info));

        $self.addClass('current');
        
      }
    })
  })
  
  //分页
  
})