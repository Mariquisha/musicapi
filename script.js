document.querySelector('button').addEventListener('click', getMusic)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': '48c6fece3cmshada9cfc6c381fb5p1472bcjsn8916ccceaab7'
	}
};

function getMusic(){
    let song = document.querySelector('input').value
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${song}`, options)
	.then(response => response.json()) //parse response as JSON
	.then(res => {
        console.log(res.data[0])
        document.querySelector('h2').innerText = res.data[0].title
        document.querySelector('h3').innerText = res.data[0].artist.name
        document.querySelector('img').src = res.data[0].album.cover_medium
        document.querySelector('audio').src = res.data[0].preview
    })
	.catch(err => {
        alert('Oh No! You got an error. Check Spelling and Try again!')
        console.error(err)
    
    });

}
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}

