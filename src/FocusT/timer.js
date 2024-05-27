import state from './state.js'
import * as elements from "./elements.js"
import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls  
}) {

  let timerTimeOut
  let minutes = Number(elements.minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    timerMinutes.textContent = String(newMinutes).padStart(2, "0")
    timerSeconds.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(timerSeconds.textContent)
      let minutes = Number(timerMinutes.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      
      updateDisplay(minutes, 0)
      
      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }
      
      if (seconds <= 0) {
        seconds = 60      
        --minutes
      }
      
      updateDisplay(minutes, String(seconds - 1))
      
      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}