function chanLe() {
    var n = 100 ; 
    var soChan = "" ;
    var soLe = "" ;
    // var n1 = 0  ;
    // while( n1 < n) {
    //     if(n1 % 2 == 0) {
    //         // số chẵn
    //         soChan += " " + n1  ;
    //     } else {
    //         soLe += " " + n1 ;
    //     }
    //    n1++ ; 
    // }
    for(var i = 0 ; i < n ; i++) {
        if(i % 2 == 0) {
                    // số chẵn
                    soChan += " " + i  ;
                } else {
                    soLe += " " + i ;
                }
    }
    console.log(soChan)
    console.log(soLe)
   document.querySelector("#txtNum1").innerHTML = "Số chẵn: " + soChan + "<br>" + " Số Lẻ: " + soLe ;
}
document.querySelector("#btnNum1").onclick = chanLe ;
    
// Bài 2 

function chiaHetCho3() {
    // var n2 = 0 ; 
    var count = 0;
    // while(n2 <= 1000) {
    //    if(n2 % 3 == 0) {     
    //        count++ ;
    //        console.log(count);
    //    }
    //    n2++
    // } 
    for(var i = 0; i <= 1000 ; i++) {
        if (i % 3 == 0 ) {
            count++
            console.log(count);
        }
    }
    document.querySelector("#txtNum2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count
}

document.querySelector("#btnNum2").onclick = chiaHetCho3

// Bài 3

function baiTap3() {
    var sum3 = 0 ;
    var i = 0 ;
    while(sum3<10000){
        i++
        sum3 += i ;
        console.log(i) 
    }
     
    document.querySelector("#txtNum3").innerHTML = "Số nguyên dương nhỏ nhất: " + i 
}

document.querySelector("#btnNum3").onclick = baiTap3

// Bài 4 

function tinhTong() {
    var x = document.querySelector("#xNum").value ;
    var n = document.querySelector("#nNum").value ;
    var luyThua = 1 ;
    var sum4 = 0 ;
    console.log(x,n)
    for(var i = 1 ; i <= n ; i++) {
        luyThua *= x ;
        sum4 += luyThua 
        console.log(luyThua, sum4)
    }

    document.querySelector("#txtNum4").innerHTML = "Tổng: " + sum4
}

document.querySelector("#btnNum4").onclick = tinhTong


// Bài 5

function giaiThua() {
    var number5 = document.querySelector("#giaiThuaNumber").value;
    console.log(number5);
    var sum5 = 0 ;
    var giai = 1;
    for(var i = 1 ; i <number5 ; i++) {
        giai =  giai * i 
        sum5 = giai * number5
        console.log(giai,sum5)  
    }
    document.querySelector("#txtNum5").innerHTML = "Giai thừa: " + sum5
}

document.querySelector("#btnNum5").onclick = giaiThua

// Bài 6 

function divChanLe() {
    var div = document.querySelectorAll("#divChanLe div")
    // hiện các div khi click button
    document.querySelector("#divChanLe").style.display = "block"
    for(var i = 0 ; i < div.length ; i++) {
        if((i+1) % 2 == 0) {
            // div chẵn đổi sang màu đỏ
            div[i].style.background = "red"
            div[i].style.color = "white"
        } else {
            div[i].style.background = "blue"
            div[i].style.color = "white"
        }
    }
    
}

document.querySelector("#btnDiv").onclick = divChanLe


// Bài 7 
function kiemTraSNT(n) {
    // đặt biến  cờ hiệu
    var flag = true ; 
    // nếu n bé hơn 2 thì ko phải là SNT
    if (n < 2 ) {
        flag = false ;
    // n bằng 2 là SNT
    } else if( n == 2) {
        flag = true ;
    // n chia hết cho 2 thì ko phải SNT
    } else if(n % 2 == 0) {
        flag = false ; 
    } else {
        // lặp từ 3 tới n-1 với bước nhảy là 2(i += 2)
        for(var i = 3 ; i <= Math.sqrt(n) ; i+=2) {
            if(n % i == 0 ) {
                flag = false ; 
                break; 
            }
        }         
    }
    return flag ;
}
// Hàm in kết quả ra màn hình
function inKetQua() {
    // lấy giá trị người dùng nhập
    var x = document.querySelector("#sntNumber").value ;
    console.log(x)

    // đổi kiểu số sang kiểu INT
    x = parseInt(x) ;
    var content = "" ;
    for(var i =1 ; i<= x ; i++) {
        // Nếu là số nguyên tố thì hiển thị
        if(kiemTraSNT(i)) {
            content += i + " "
        }
    }
    document.querySelector("#txtNum7").innerHTML = content
}


document.querySelector("#btnNum7").onclick = inKetQua