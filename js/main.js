//Example fetch using pokemonapi.co
document.querySelector('#generateImage').addEventListener('click', getFetch);

function getFetch(){
  const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&count=1`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        if(data[0].media_type === "video"){
          getFetch()
        }
        document.querySelector('img').src = data[0].hdurl;
        document.querySelector('.image').classList.remove('hidden')
        document.querySelector('.imageInfo').classList.remove('hidden')
        document.querySelector('#aboutImage').textContent = data[0].explanation;
        document.querySelector('#date').textContent = `Date: ${data[0].date}`;
        document.querySelector('#title').textContent = `${data[0].title}`;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

