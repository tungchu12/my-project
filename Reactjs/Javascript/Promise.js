//      - Viết một hàm trả về Promise để tải dữ liệu từ một API giả lập
function fakeapi(url) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           let error = Math.random() < 0.5;

            if(error){
                reject("Loi tai du lieu api")
            }
            else{
                resolve(`Tai du lieu api thanh cong tu:${url}`)
            }
        }, 3000)
    }
)
}

fakeapi("afndj.com")
    .then(function(msg){
        console.log(msg)
    })
    .catch(function(msg){
        console.log(msg)
    })











