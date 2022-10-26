
$(`.gnb .li`).on('click',function(e){
  e.preventDefault(); 
});

$(`.ewrap .box`).on('click',function(e){
  e.preventDefault(); 
  $('.view').fadeIn();

  let pic = $(this).find('.pic').html();

  $('.view figure').html(pic);
  $('.view .txtBox').html('');

});
$('.btnClose, .wrapClose').on('click',function(){
  $('.view').hide();
});

$(`.review .item`).on('click',function(e){
  e.preventDefault(); 
  $('.view').fadeIn();

  let pic = $(this).find('.pic').html();
  let txt = $(this).find('.txt').html(); 

  $('.view figure').html(pic);
  $('.view .txtBox').html(txt);
});
$('.btnClose, .wrapClose').on('click',function(){
  $('.view').hide();
});

// slick

$('.bn').slick({
  'arrows':false,  
  'dots':true,
  'autoplay': true,
  'autoplaySpeed': 2500,
});

// 반응형

let bWidth = window.innerWidth;
window.addEventListener("resize", () => {
  const nWidth = window.innerWidth;
  if ((bWidth < 1200 && nWidth >= 1200) || (bWidth > 1199 && nWidth <= 1199)) {
    location.reload();
  }
  beforeWidth = nowWidth;
});


if(matchMedia("screen and (max-width: 1199px)").matches){
    console.log("mobile");
 
    $('.vidCon').slick({
      'slidesToShow': 1, // 넘어가는 효과
      'centerMode' : true,
      'centerPadding': '70px',
      'slidesToScroll': 1, // 몇개씩 넘어가는지
      'dots':true,
      'nextArrow' : false, 
      'prevArrow' : false
    })
    
  }else if(matchMedia("screen and (min-width: 1200px)").matches){
    console.log("desktop");
    
    $('.box2').addClass('active')
    
    $('.vid .con .box').on('mouseover',function(){
        $(this).addClass('active').siblings().removeClass('active')
      }).on('mouseout',function(){
      $('.box2').addClass('active').siblings().removeClass('active')
  });
  }

  


