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
    const para = document.createElement('p')
    const span = document.createElement('p')
    img.src= coverUri;
    para.innerText = coverId
    span.innerText = trackTitle
    li.appendChild(img);
    li.appendChild(para)
    li.appendChild(span)
    img.setAttribute("id", coverId)
    document.querySelector('#covers2').appendChild(li);
  
  }

  })
 
    


//date

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let time = days[d.getDay()] + " "+ months[d.getMonth()] + " " + d.getDate();
document.getElementById("current_date").innerHTML = time

//button press

// const search = document.querySelector('#search');
// const random = document.querySelector('#random');
// const clicked = document.addEventListener('click', (e) => elementP = e.target.id);
// const userClicked = [search, random, clicked];

// userClicked.forEach(option => {
//   option.addEventListener('click', getFetch)

// })



document.querySelector('#search').addEventListener('click', getFetch)
document.querySelector('#random').addEventListener('click', getRandom)
document.querySelector('.material-symbols-outlined').addEventListener('click', getSmaller)



function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://acnhapi.com/v1/songs/${choice}`
  const random = 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      
        document.querySelector('.trackName').innerText = data.name["name-USen"]
        document.querySelector("audio").src = data.music_uri
        document.querySelector('.musicCover').src = data.image_uri
        document.querySelector('.trackNum').innerText = ` Track ${choice}`
        document.getElementById('music').play();
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getRandom(){
  let randomTrack = Math.floor(Math.random()*95)
  const track = `https://acnhapi.com/v1/songs/${randomTrack}`

  fetch(track)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      
        document.querySelector('.trackName').innerText = data.name["name-USen"]
        document.querySelector("audio").src = data.music_uri
        document.querySelector('.musicCover').src = data.image_uri
        document.querySelector('.trackNum').innerText = `Track ${randomTrack}`
        document.getElementById('music').play();
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.addEventListener('click', (e) =>{
 let elementP = e.target.id
const track = `https://acnhapi.com/v1/songs/${elementP}`

fetch(track)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    
      document.querySelector('.trackName').innerText = data.name["name-USen"]
      document.querySelector("audio").src = data.music_uri
      document.querySelector('.musicCover').src = data.image_uri
      document.querySelector('.trackNum').innerText = `Track ${elementP}`
      document.getElementById('music').play();
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
)
//Make music cover smaller

function getSmaller (){
  document.querySelector(".musicContainer").style.transition = "transform 0.25s ease";
  document.querySelector('.musicContainer').classList.toggle('musicContainer2')
  document.querySelector('.musicCover').classList.toggle('musicCover2')
  document.querySelector('.nowPlaying').classList.toggle('hide')
  document.querySelector('.trackName').classList.toggle('trackName2')

}