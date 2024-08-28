const playBtn = document.querySelectorAll('#play');
const name = document.querySelectorAll('.name');
const audioElement = document.querySelector('.audio');
const musicView = document.querySelector('.viewImage');
const posterImg = document.querySelectorAll('.cardImg')


playBtn.forEach((song,index) => {
    song.addEventListener('click',function(){
            const Text = name[index].innerText;
            const musicSrc ='music/'+ Text + '.mp3';
            audioElement.src = musicSrc;
            audioElement.load(); // Ensure the audio is loaded

            const viewSrc ='Images/'+ Text + '.jpeg';
            musicView.src = viewSrc;

            audioElement.addEventListener('canplaythrough', function() {
            audioElement.play();


        })
    })
    

})


posterImg.forEach((poster,index) => {
    const Text = name[index].innerText;
    const viewSrc ='Images/'+ Text + '.jpeg';
    poster.src = viewSrc;
})


