      function tinhtong(a , b) {
       return a + b;
      }
      let tong = tinhtong(6 , 10);
      document.getElementById("tong").innerHTML = tong;

      let tinhhieu =(a,b) => a - b;
      let hieu = tinhhieu(7,4);
      document.getElementById("hieu").innerHTML = hieu;

      function tinhtich (a,b){
        return a*b;
      }
      let tich = tinhtich(4,10);
      document.getElementById("tich").innerHTML= tich;

      let tinhthuong =(a,b) => a /b;
      let thuong = tinhthuong(20,5);
      document.getElementById("thuong").innerHTML= thuong;


      //      - Tạo đối tượng mô tả thông tin sinh viên (tên, tuổi, điểm) và viết hàm để in thông tin sinh viên.
    function sinhvien(ho,ten,diem){
        this.ho1 =ho;
        this.ten1 =ten;
        this.diem1 =diem;
    }
    const sv1 =new sinhvien("chu","tung",10);
    const sv2 =new sinhvien("nguyen","a",10);


    function hienthi(sv){
    return   "Họ:" + sv.ho1  +" Tên:" +sv.ten1 + " Điểm:" + sv.diem1;
    }
    document.getElementById("demo").innerHTML =hienthi(sv2);
    document.getElementById("demo2").innerHTML =hienthi(sv1);

    //      - Viết hàm sử dụng rest parameters để nhận vào nhiều số và trả về tổng của chúng.
        function tinhtong(){
            let tong =0;
            let i =0;
            while(i <arguments.length){
                tong += arguments[i];
                i++;
            }
            return tong;
        }
        document.getElementById("demo").innerHTML=tinhtong(6,7,8,10,11,19);