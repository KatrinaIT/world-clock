function updateTime() {
  //LA
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesMoment = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesMoment.format("MMMM Do, YYYY");
  losAngelesTime.innerHTML = losAngelesMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoMoment = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoMoment.format("MMMM Do, YYYY");
  tokyoTime.innerHTML = tokyoMoment.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
