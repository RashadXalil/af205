let id = window.location.href.split("=")[1]
const name = document.getElementById("name")
fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then(data => {
    console.log(data)
    name.innerHTML = data.title
    let newImage = document.createElement("img")
    newImage.setAttribute("src", data.thumbnail)
    document.body.append(newImage)
})

