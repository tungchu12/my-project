    function kiemtratuoi(){
        let tuoi = document.getElementById("tuoi").value;
        let thongbao ="";
        if (document.getElementById("tuoi").value === "") {
        alert("Vui lòng nhập tuổi!");
        return;
        }
        if (tuoi <0){
            thongbao ="Tuoi khong hop le"
        }
        else if(tuoi < 18){
            thongbao ="Tre em"
        }
        else if(tuoi <60){
            thongbao ="nguoi truong thanh"
        }
        else{
            thongbao ="nguoi gia"
        }
    document.getElementById("thongbao").innerHTML = thongbao;   
    }

    //Tính tổng 1 - 50
    let ketqua =""
     for(i =1; i <= 50; i++){
    ketqua += i + "<br>" ;
    }
    document.getElementById("demo").innerHTML =ketqua;

    // Kiểm tra số nguyên tố
     function kiemtrasonguyento() {
            let songuyento = parseInt(document.getElementById("songuyento").value);
            let thongbao = "";
            if (songuyento < 2) {
                thongbao = songuyento + " không phải là số nguyên tố.";
            } else {
                let count = 0;
                for (let i = 1; i <= songuyento; i++) {
                    if (songuyento % i === 0) {
                        count++;
                    }
                }

                thongbao = (count === 2)
                    ? songuyento + " là số nguyên tố."
                    : songuyento + " không phải là số nguyên tố.";
            }

            document.getElementById("demo").innerHTML = thongbao;
        }