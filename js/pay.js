// 모델명

let modelName = $('.info h2').text()
let modelCode = $('.info h3').text()
$('.modelName').text(modelName)
$('.modelCode').text(modelCode)


// 이미지 선택 & 출력

$('.imgS .box').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');

    let pic = $(this).html();
    $('.photo .img a').html(pic);
});


// 버튼 선택 & 출력
$('.select1 button').on('click',function(){
    $(this).addClass('active').siblings().removeClass();
});

$('.select3 button').on('click',function(){
    $(this).addClass('active').siblings().removeClass();
    let txt = $(this).text();
    $('.opt2').text(txt)
});
$('.select4 button').on('click',function(){
    $(this).addClass('active').siblings().removeClass();
    let txt = $(this).text();
    $('.opt3').text(txt)
});

$('.select5 button').on('click',function(){
    $(this).addClass('active').siblings().removeClass();
    let txt = $(this).text();
    $('.opt4').text(txt)
});

$('.color_chips').children().on('click',function(){
    $(this).addClass('active').siblings().removeClass();
});



