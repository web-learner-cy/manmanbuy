$(function(){
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbrandtitle',
    dataType: 'json',
    success: function( info ) {
      console.log( info );
      $('.mmb_category ul').html(template('catetitleTmp', info));
    }
  })
})