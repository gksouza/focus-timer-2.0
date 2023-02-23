import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus
} from "./elements.js"

export default function({controls, timer, sound,}) {
btnPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressButton()
  })

btnPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.pressButton() 
  })

btnStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()
  })

btnPlus.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
btnMinus.classList.remove('hide')
  sound.bgAudio.pause()
  })

  buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.play()
  })

  buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
  }) 
}