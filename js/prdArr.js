

let price = [];

$('#priceLow').on('click',function(){
    $('.items .item').each(function(i){
        
        let dataPrice = $(this).data('price');
        dataPrice = parseInt(dataPrice);
        price.push(dataPrice);
        price.sort(); //정렬
        
        //price의 값들과 item들의 dataPrice값들을 일일이 비교해서
        //일치하는 price의 값의 인덱스넘버를
        //해당 item에게 order값으로 줌 
    });
    
    $('.items .item').each(function(i){ //인덱스 넘버대로 실행
        let dataPrice = $(this).data('price'); //데이터 불러오기
        dataPrice = parseInt(dataPrice); //숫자열로 바꾸기
        
        price.forEach(function(n,m){
            if(dataPrice == n){
                console.log(n,m);
                $('.items .item').eq(i).css({'order' : m});
            }
        });
    });
});



$('#new').on('click',function(){
    $('.items .item').each(function(i){
        $('.items .item').eq(i).css({'order' : 0});
    });
});