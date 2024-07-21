const accesskey = "-QY_G-Y4_KOKjaKtpymF_TOprwRH_w5DZvmYW9_yPdo";

const searchform = document.getElementById("searchform");
const searchbox = document.getElementById("searchbox");
const searchresult = document.getElementById("searchResult");
const showmorebtn = document.getElementById("showmorebtn");

    let keyword = "";
    let page = 1;

    async function searchImages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;


    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
    searchresult.innerHTML = "";  
    }


    const results = data.results;

    results.map((result) =>{
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";

    imagelink.appendChild(image);
    searchresult.appendChild(imagelink);
    })

    showmorebtn.style.display ="block";
}

    searchform.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

    showmorebtn.addEventListener("click",() =>{
        page++;
        searchImages();
    })

