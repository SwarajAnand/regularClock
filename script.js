const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const watch = () => {
  const date = new Date();

  let sec =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  // dateDiv.innerHTML = `
  //   <p>The time is : ${date.getHours()}:${min}:${sec}</p>
  //   `;

  hours.innerHTML = `
  <div>${date.getHours()}</div>
  <p>HOURS</p>
  `;

  minutes.innerHTML = `
  <div>${min}</div>
  <p>MINUTES</p>
  `;

  seconds.innerHTML = `
    <div>${sec}</div>
    <p>SECONDS</p>
  `;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.innerHTML = `
    <div>${daysOfWeek[date.getDay()]}</div>
    <p>TODAY</p>
  `;
};

setInterval(watch, 1000);
