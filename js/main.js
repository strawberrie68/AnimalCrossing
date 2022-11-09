//load img

const defulturl = `https://acnhapi.com/v1/songs/`

fetch(defulturl)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  for (let cover in data){
    coverUri = data[cover]['image_uri'] ;
    coverId = data[cover]['id']
    trackTitle = data[cover]['name']['name-USen']
    const li = document.createElement('li');
    const img = document.createElement('img');
    const para = document.createElement('p');
    const span = document.createElement('p');
    const heart = document.createElement('p');
    img.src= coverUri;
    para.innerText = coverId;
    span.innerText = trackTitle;
    heart.innerText = 'favorite';
    li.appendChild(img);
    li.appendChild(para);
    li.appendChild(span);
    li.appendChild(heart);
    heart.setAttribute("class", 'heart2 material-symbols-outlined');
    img.setAttribute("id", coverId);
    document.querySelector('#covers2').appendChild(li);
  
  }

  })
 
    


//date

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let time = days[d.getDay()] + " "+ months[d.getMonth()] + " " + d.getDate();
document.getElementById("current_date").innerHTML = time


//Click Events

document.querySelector('#search').addEventListener('click', getFetch)
document.querySelector('#random').addEventListener('click', getRandom)
document.querySelector('.material-symbols-outlined').addEventListener('click', getSmaller)
//document.querySelector('.heart2').addEventListener('click', favorite)

//Function to get song info

function songsFinder(url){

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
  
    document.querySelector('.trackName').innerText = data.name["name-USen"]
    document.querySelector("audio").src = data.music_uri
    document.querySelector('.musicCover').src = data.image_uri
    document.querySelector('.trackNum').innerText = ` Track ${data.id}`
    document.getElementById('music').play();
  
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}

//Convert Click to song link

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://acnhapi.com/v1/songs/${choice}`
  songsFinder(url);

}

function getRandom(){
  let randomTrack = Math.floor(Math.random()*95)
  const url = `https://acnhapi.com/v1/songs/${randomTrack}`
  songsFinder(url);

}

document.addEventListener('click', (e) =>{
 let elementP = e.target.id
const url = `https://acnhapi.com/v1/songs/${elementP}`
songsFinder(url);

})


//Make music player smaller

function getSmaller (){
  document.querySelector(".musicContainer").style.transition = "transform 0.25s ease";
  document.querySelector('.musicContainer').classList.toggle('musicContainer2')
  document.querySelector('.musicCover').classList.toggle('musicCover2')
  document.querySelector('.nowPlaying').classList.toggle('hide')
  document.querySelector('.trackName').classList.toggle('trackName2')

}

//Favorite Songs

function favorite(){

}