const postsapi = "https://jsonplaceholder.typicode.com/posts";
async function getpostsInfo() {
    try {
        let response = await fetch(postsapi);
        let data =  await response.json();
        document.getElementById("api").innerHTML= data[9].body;
    } catch (error) {
         document.getElementById("api").innerHTML= "Lỗi"
    }
}

getpostsInfo();