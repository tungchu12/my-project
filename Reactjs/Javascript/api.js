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

//////---------------------------------------//////////////////
const btn = document.getElementById("sendbtn");

btn.addEventListener("click", function() {

    const data = {
        name: document.getElementById("name").value,
        data: {
            year: Number(document.getElementById("year").value),
            price: Number(document.getElementById("price").value),
            "CPU model": document.getElementById("cpu").value,
            "Hard disk size": document.getElementById("disk").value
        }
    };

    fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(result) {
        document.getElementById("result").innerText =
            JSON.stringify(result, null, 4);
    })
    .catch(function(error) {
        document.getElementById("result").innerText =
            "Có lỗi xảy ra: " + error;
    });

});
