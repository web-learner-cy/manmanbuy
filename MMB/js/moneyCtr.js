$(function(){
  var pageid = 0;
  render();
  function render() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: pageid
      },
      success: function( info ) {
        console.log( info );
        $('.mmb_monCtrList').html(template('monCtrTmp',info));
  
        //分页渲染
        totalPage = Math.ceil(info.totalCount/info.pagesize);
        htmlStr = '';
        for (var i = 0; i < totalPage; i++) {
          var select = pageid == i? 'selected':'';
          htmlStr += ' <option '+ select +' value="'+(i+1)+'">'+(i+1)+'/'+ totalPage+ '</option>';
        }
        // console.log(htmlStr);
        $('#select').html(htmlStr);
        
      }
    })
  }

  //分页
  $('#select').change(function(){
    pageid = +$(this).val();
    console.log(pageid);
    render();
  })

  //上一页
  $('#prev').click(function(){
    pageid++;
    if(pageid > totalPage-1) {
      pageid = totalPage-1;
      return;
    }
    // $('#select').
    render();
  })
  //下一页
  $('#next').click(function(){
    pageid--;
    if(pageid < 0) {
      pageid = 0;
      return;
    }
    render();
  })
})