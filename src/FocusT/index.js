import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {
  btnPlay,
  btnPause,
  btnStop,
  timerMinutes,
  timerSeconds
} from "./elements.js"

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop
})

const timer = Timer({
  timerMinutes,
  timerSeconds,
  resetControls: controls.reset
})

const sounds = Sounds()

Events({controls, timer, sounds})


/* // Events
btnPlay.addEventListener('click', function play() {
  let timerMinutes = Number(timerMinutes.textContent)
  let timerSeconds = Number(timerSeconds.textContent)
})

// Functions
function play() {
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
} */