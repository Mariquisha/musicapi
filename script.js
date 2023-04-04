//when user clicks on button 'get new jam' getMusic function is ran
document.querySelector('.button').addEventListener('click', getMusic)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': '48c6fece3cmshada9cfc6c381fb5p1472bcjsn8916ccceaab7'
	}
};


//How music is selected from the API deezer
function getMusic(){
   
    let song = document.querySelector('input').value //the input from the user
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${song}`, options) //getting song choice from API
	.then(response => response.json()) //parse response as JSON
    
	.then(res => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        let songChoice = res.data[getRandomInt(25)];
        console.log(songChoice);
        document.querySelector('h2').innerText = songChoice.title
        document.querySelector('h3').innerText = songChoice.artist.name
        document.querySelector('img').src = songChoice.album.cover_medium
        document.querySelector('audio').src = songChoice.preview
    })
	.catch(err => {
        alert('Oh wow! You got an error. Your emotions are just too obscure for us. Maybe Check Your Spelling and Try again?!? IDK.')
        console.error(err)
    
    });

}
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

