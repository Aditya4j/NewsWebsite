const ApiKey = "53e3f303ad1e41d1a7bf5b860b002056";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>fetchNews("India"));

async function fetchNews(query){
    const response = await fetch(`${url}${query}&apikey=${ApiKey}`);
    const data = await response.json();
    binddata(data.articles);
}

function binddata(articles){
    const cardc = document.querySelector(".card-container");
    cardc.innerHTML = ""
   
    articles.forEach(element => {
        if(!element.urlToImage) return;
        const cardhtml = `<div class="card">
                <div class="card-header">
                    <img src="${element.urlToImage}" alt="news-img" class="news-img" data-url="${element.url}"
                </div>
                <div class="card-content">
                    <h2 class="new-title">${element.title}</h2>
                    <h6 class="new-source">${element.source.name}:${element.publishedAt}</h6>
                    <p class="new-desc">${element.description}</p>
                </div>
            </div>`;
        cardc.innerHTML+=cardhtml;
        
    });
    const clk = document.querySelectorAll(".news-img");
    clk.forEach(url=>{
        url.addEventListener("click",(event)=>{
            const url = event.target.getAttribute("data-url");
            window.open(url,"_blank");
        })

    })
        
    
}
window.addEventListener("load",()=>{
    click();
})
function click(){
    const clk = document.querySelectorAll(".links");
    clk.forEach(id=>{
        id.addEventListener("click",()=>{
            fetchNews(id.innerText);
         
    });
});
}

window.addEventListener("load",()=>{
    search();
})
function search(){
    const select = document.querySelector("#news-input");
    const btn = document.querySelector(".search-button")
    btn.addEventListener("click",()=>{
        const val = select.value.trim();
        if(val){
            console.log(val);
            fetchNews(val);
        }
        else{
            console.log("Enter Search Item");
        }
    })
}