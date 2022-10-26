
$('.arr li').on('click',function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
});

$('.reset').on('click',function(){
    $('.ulwrap ul li').removeClass('active');
    $('.ulwrap ul li').removeClass('activeM');
}); 



// 반응형


let bWidth = window.innerWidth;
window.addEventListener("resize", () => {
  const nWidth = window.innerWidth;
  if ((bWidth < 1200 && nWidth >= 1200) || (bWidth > 1199 && nWidth <= 1199)) {
    location.reload();
  }
//   beforeWidth = nowWidth;
});

 if(matchMedia("screen and (max-width: 1199px)").matches){
     console.log("mobile");

        $('.filter').hide();

        $('.fttit').on('click',function(){
            $('.filter').show();
            $('.btn').show();
        });
        
        $('.ok').on('click',function(){
            $('.filter').hide();
        });

        $('.ulwrap ul li').on('click',function(){
            $(this).toggleClass('activeM');
        }); 

        $('.item1').removeClass('itemB');
        

        // 더보기 버튼
        $('.items').css({'height' : '508px'});
        let a = 0;
            $('.more').on('click',function(){
                if(a%2 == 0){
                    $('.items').css({'height' : '1028px'});
                    $(this).text('접기')
                    a++;
                }else{
                    $('.items').css({'height' : '508px'});
                    $(this).text('더보기')
                    a++;
                }
            });
        
   }else if(matchMedia("screen and (min-width: 1200px)").matches){
     console.log("desktop");
     $('.ulwrap ul li').on('click',function(){
        $(this).toggleClass('active');
    });
    
    $('.bwrap .item').on('mouseover',function(){
        $(this).addClass('itemB').siblings().removeClass('itemB');
        $(this).children('.txt').addClass('txtB').removeClass('txtB');
        $(this).siblings().children('.txt').removeClass('txtB');
    }).on('mouseout',function(){
        $('.item1').addClass('itemB').siblings().removeClass('itemB');
    });
    
    // 더보기 버튼
    $('.items').css({'height' : '460px'});
        let a = 0;
        $('.more').on('click',function(){
            if(a%2 == 0){
                $('.items').css({'height' : '960px'});
                $(this).text('접기')
                a++;
            }else{
                $('.items').css({'height' : '460px'});
                $(this).text('더보기')
                a++;
            }
        });
    
   }