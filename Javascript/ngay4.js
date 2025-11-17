//      - Viết hàm nhận vào một mảng số nguyên và trả về tổng của các số trong mảng.
const mang1 = [1,2,3,4,5];
function tinhtong(arr){
    let tong = 0;
    for(let i=0; arr< n.length; i++){
        tong += arr[i];
    }    
    return tong;
}
console.log(tinhtong(mang1)); 

//      - Viết hàm nhận vào một mảng số nguyên và trả về tổng của các số trong mảng.
const mang7 = [10,45,38,49,50];
const tong = mang7.reduce(function(tong,thanhphan){
    return tong +thanhphan;
}, 0);
console.log(tong);

//      - Sử dụng map để tạo ra một mảng mới từ mảng ban đầu, trong đó mỗi giá trị là bình phương của giá trị gốc.
const mang =[10, 20, 30, 40, 50];
const mang2 = mang.map(binhphuong);
function binhphuong(x){
    return x * x;
}
console.log(mang2);

//      - Sử dụng filter để lọc ra các số chẵn trong một mảng.
const mang3 =[1,2,3,4,5,6,7,8,9,10];
const mang4 = mang3.filter(laSoChan);
function laSoChan(x){
    return x % 2 === 0;
}
console.log(mang4);
