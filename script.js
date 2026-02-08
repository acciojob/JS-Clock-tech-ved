//your code here
function runClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate degrees
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;   // 360/12 = 30
  const minuteDeg = minutes * 6;                        // 360/60 = 6
  const secondDeg = seconds * 6;

  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
}

// update every second
setInterval(runClock, 1000);

// initial call
runClock();

