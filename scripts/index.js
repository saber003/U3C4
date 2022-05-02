// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML=navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


let myData = async () => {

    try{
      
      let res = await fetch ("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in");

      let data = await res.json();

      console.log(data);
    }

    catch(err){
        console.log(err);
    }
}

myData();

let append = (data) =>{

    let results = document.querySelector("#results");
   
    data.forEach((el)=>{
        
        let p = document.createElement("p");
        p.innerText = el.object.articles.title;


        // let news = document.querySelector(".news");
        
         results.append(p);
    })
  
}



