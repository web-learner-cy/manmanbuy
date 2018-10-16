$(function(){

  var pageid = 1;
  //面包屑导航
  var totalPage;
  var categoryName = getSearch('category');
  var categoryId = +getSearch('categoryId');
  
  localStorage.setItem('category',categoryName);

  // 面包屑导航渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorybyid',
    data: {
      categoryid: categoryId
    },
    dataType: 'json',
    success: function( info ) {
      console.log(info);
      $('.sitenav').html(template('brandTmp',info));
    }
  })
  // $('.catagoryName').text(catagoryName);

  render();
  function render() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: categoryId,
        pageid: pageid
      },
      success: function( info ) {
        console.log( info );
        $('.mmb_products ul').html(template('productTmp',info));
        
        //分页渲染
        totalPage = Math.ceil(info.totalCount/info.pagesize);
        htmlStr = '';
        for (var i = 0; i < totalPage; i++) {
          var select = pageid == i+1? 'selected':'';
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
    if(pageid > totalPage) {
      pageid = totalPage;
      return;
    }
    // $('#select').
    render();
  })
  //下一页
  $('#next').click(function(){
    pageid--;
    if(pageid < 1) {
      pageid = 1;
      return;
    }
    render();
  })

})