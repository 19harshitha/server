import React, { useState } from "react";
import "./CountDown.css";
import timeBtn from "../../assets/time-btn.png";
import sound from "../../assets/sound.wav"

const CountDown = () => {
  const [hours, setHours] = useState(5);
  const [minutes, setMinutes] = useState(8);
  const [seconds, setSeconds] = useState(56);
  const [countDown, setCountDown] = useState(false);
  const [total, setTotal] = useState(0);
  const [timer, setTimer] = useState(null);
  const [audio] = useState(new Audio(sound));
  const [timerDisplay, setTimerDisplay] = useState("05:09:00");
  const [timerDisplay2, setTimerDisplay2] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",

  });

  function startTimer() {
    setTimerDisplay2({
      hours: hours < 10 ? "0" + hours : hours,
      minutes: minutes < 10 ? "0" + minutes : minutes,
      seconds: seconds < 10 ? "0" + seconds : seconds,
    });
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTotal(totalSeconds);

    setCountDown((prev) => !prev);

    let timer = setInterval(function () {
      let hoursLeft = Math.floor(totalSeconds / 3600);
      let minutesLeft = Math.floor((totalSeconds % 3600) / 60);
      let secondsLeft = totalSeconds % 60;

      hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
      minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
      secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
      setTimerDisplay(`${hoursLeft}:${minutesLeft}:${secondsLeft}`);

      if (totalSeconds === 0) {
        clearInterval(timer);
        setCountDown((prev) => !prev);

        // Audio
        audio.play();
        
        
      } else {
        totalSeconds--;
      }
    }, 1000);
    setTimer(timer);
  }

  function stopTimer() {
    clearInterval(timer);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimerDisplay("00:00:00");
    setTimerDisplay2({
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
    setCountDown((prev) => !prev);
  }



  const handleIncrease = (value) => {
    if (!countDown) {
      switch (value) {
        case "hours":
          hours < 23 && setHours((hours) => hours + 1);
          break;
        case "minutes":
          minutes < 59 && setMinutes((minutes) => minutes + 1);
          break;
        case "seconds":
          seconds < 59 && setSeconds((seconds) => seconds + 1);
          break;
        default:
          break;
      }
    }
  };

  const handleDecrease = (value) => {
    if (!countDown) {
      switch (value) {
        case "hours":
          hours > 0 && setHours((hours) => hours - 1);
          break;
        case "minutes":
          minutes > 0 && setMinutes((minutes) => minutes - 1);
          break;
        case "seconds":
          seconds > 0 && setSeconds((seconds) => seconds - 1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="countdown">
      <div className="countdown-left">
        <div className="timer-div">
          {/* <div className="timer-div-inner"> */}
          <svg className="countdown-timer__svg" viewBox="0 0 120 120">
            <circle
              className="countdown-timer__circle"
              r="50"
              cx="60"
              cy="60"
              strokeWidth="8"
              fill="none"
              stroke="#ff6b6b"
              strokeDasharray={283}
              strokeDashoffset={
                283 - (283 * (hours * 3600 + minutes * 60 + seconds)) / total
              }
            />
          </svg>

          <p className="timer">{timerDisplay}</p>

          {/* </div> */}
        </div>
      </div>
      <div className="countdown-right">
        <div className="time-container">
          <div className="hours times">
            <p className="time-title">Hours</p>

            <img
              src={timeBtn}
              alt="increase"
              className="increase"
              onClick={() => handleIncrease("hours")}
            />

            <input
              type="number"
              className="time-input"
              min="0"
              max="23"
              value={countDown ? timerDisplay2.hours : hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <img
              src={timeBtn}
              alt="decrease"
              className="decrease"
              onClick={() => handleDecrease("hours")}
            />
          </div>

          <div className="minutes times">
            <p className="time-title">Minutes</p>
            <img
              src={timeBtn}
              alt="increase"
              className="increase"
              lassName="increase"
              onClick={() => handleIncrease("minutes")}
            />
            <input
              type="number"
              className="time-input"
              min="0"
              max="59"
              value={countDown ? timerDisplay2.minutes : minutes}
              onChange={(e) => setHours(e.target.value)}
            />
            <img
              src={timeBtn}
              alt="decrease"
              className="decrease"
              onClick={() => handleDecrease("minutes")}
            />
          </div>

          <div className="seconds times">
            <p className="time-title">Seconds</p>
            <img
              src={timeBtn}
              alt="increase"
              className="increase"
              onClick={() => handleIncrease("seconds")}
            />
            <input
              type="number"
              className="time-input"
              min="0"
              max="59"
              value={countDown ? timerDisplay2.seconds : seconds}
              onChange={(e) => setHours(e.target.value)}
            />
            <img
              src={timeBtn}
              alt="decrease"
              className="decrease"
              onClick={() => handleDecrease("seconds")}
            />
          </div>
        </div>
        <button
          className="start-btn"
          onClick={() => (countDown && total > 0  ? stopTimer() : startTimer())}
        >
          {countDown ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default CountDown;
