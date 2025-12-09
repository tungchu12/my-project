//Hàm đảo ngược 
function daonguocchuoi(str){
    return str.split('').reverse().join("");
}
console.log(daonguocchuoi("abcedef"));
//palindrome
function kiemtrapalindrome(str){
    const str1 = str.split('').reverse().join("");
    if (str1 == str){
        console.log("Chuỗi palindrome");
    }else{
        console.log("Không phải chuỗi palindrome");
    };
}
console.log(kiemtrapalindrome("abc"));

//- Sử dụng template literals để hiển thị thông tin sinh viên.

function sinhvien(ten,tuoi,diachi){
    return `Tên ${ten} Tuổi ${tuoi} ${diachi}`;
}

console.log(sinhvien("Tùng",20,"Hà Nội"));

//- Viêt function phương trình bậc 2 in ra nghiệm đầu vào là 3 số a,b,c

function phuongtrinhbac2(a,b,c){
    let delta = b * b - 4*a*c;
    if(delta < 0){
        return `Phương trình vô nghiệm`;
    }else if( delta == 0){
       let x = -b / 2*a;
        return ` Phương trình có 2 nghiệm kép: ${x}`;
    }else{
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
}
console.log(phuongtrinhbac2(1,-6,9));
