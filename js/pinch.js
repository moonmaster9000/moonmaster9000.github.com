$('#content').pinchIn(function(){
  var font_size = $(this).css('font-size')
  font_size = font_size.substring(0, font_size.indexOf('p'))
  font_size = font_size * 2
  $(this).css('font-size') = font_size + 'px';
});
