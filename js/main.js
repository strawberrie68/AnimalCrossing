//load img

const defulturl = "https://acnhapi.com/v1/songs/"

fetch(defulturl)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  for (let cover in data){
    coverUri = data[cover]['image_uri'] ;
    coverId = data[cover]['id']
    const li = document.createElement('li');
    const img = document.createElement('img');
    const para = document.createElement('p')
    img.src= coverUri;
    para.innerText = coverId
    li.appendChild(img);
    li.appendChild(para)
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

document.querySelector('#search').addEventListener('click', getFetch)
document.querySelector('#random').addEventListener('click', getRandom)


function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://acnhapi.com/v1/songs/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      
        document.querySelector('.trackName').innerText = data.name["name-USen"]

        document.querySelector("audio").src = data.music_uri
        document.querySelector('#musicCover').src = data.image_uri
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
        document.querySelector('#musicCover').src = data.image_uri
        document.querySelector('.trackNum').innerText = `Track ${randomTrack}`
        document.getElementById('music').play();
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.addEventListener('click', (e) =>{
 let elementP = e.target.id
//  if(elementP !== ''){
//  console.log(elementP)
// }
const track = `https://acnhapi.com/v1/songs/${elementP}`

fetch(track)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    
      document.querySelector('.trackName').innerText = data.name["name-USen"]
      document.querySelector("audio").src = data.music_uri
      document.querySelector('#musicCover').src = data.image_uri
      document.querySelector('.trackNum').innerText = `Track ${elementP}`
      document.getElementById('music').play();
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
)