function fakeapi(url) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Tải dữ liệu thành công từ " + url);
        }, 3000);
    });
}

async function callapi() {
    try {
        let response = await fakeapi("https://api.example.com/data");
        console.log(response);
    } catch (error) {
        console.log("Có lỗi xảy ra: " + error);
    }
}

callapi();



function setUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "Nguyễn Văn A", age: 20 },
                { id: 2, name: "Trần Thị B", age: 22 },
                { id: 3, name: "Lê Văn C", age: 25 }
            ];
            resolve(users);
        }, 2000);
    });
}


 async function getUserInfo(){
    try {
        let users = await setUserInfo();
        console.log("User đầu tiên:", users[0].name, "-", users[0].age);
    } catch (error) {
        console.log("Có lỗi:", error);
    }
}

getUserInfo();


