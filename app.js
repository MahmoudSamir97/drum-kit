const keys = document.querySelectorAll('.key');
function playSound(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return
    audio.play();
    audio.currentTime = 0;
    key.classList.add('active');

}
window.addEventListener('keydown', playSound);



keys.forEach(key=>{
    key.addEventListener('transitionend', ()=>{
        key.classList.remove('active')
    })
})
