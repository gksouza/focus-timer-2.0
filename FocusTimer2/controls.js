export default function Controls({
  btnPlay,
  btnPause,
  btnStop, 
}) {

  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnStop.classList.remove('hide')
  }

    function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  function reset() {  
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    btnStop.classList.add('hide')
  }

  function stop() {
    btnStop.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  return {
    reset,
    play,
    pause,    
  }
}