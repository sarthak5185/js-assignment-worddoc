const jokeBtn = document.querySelector("#jokeBtn");
const jokePara = document.querySelector("#joke");
const authpara=document.querySelector("#author");
jokeBtn.addEventListener("click", getJoke);
async function getJoke()
{
  const url="https://api.quotable.io/random"
  // let p1=fetch(url);
  // p1.then((response)=>{
  //   return response.json();
  // }).then((data)=>{
  //    jokePara.innerText = data.content;
  //    authpara.innerText="Author :"+data.author;
  // });

  const response=await fetch(url);
  const data=await response.json();
  jokePara.innerText = data.content;
  authpara.innerText="Author :"+data.author;
}
// function getJoke()
// {
//   const url="https://api.quotable.io/random"
//   let p1=fetch(url);
//   p1.then((response)=>{
//     return response.json();
//   }).then((data)=>{
//      jokePara.innerText = data.content;
//      authpara.innerText="Author :"+data.author;
//   });
// }