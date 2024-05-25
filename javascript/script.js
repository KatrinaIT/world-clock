function updateTime() {
  //LA
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let losAngelesMoment = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesMoment.format("MMMM Do, YYYY");
    losAngelesTime.innerHTML = losAngelesMoment.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyoMoment = moment().tz("Asia/Tokyo");

    tokyoDate.innerHTML = tokyoMoment.format("MMMM Do, YYYY");
    tokyoTime.innerHTML = tokyoMoment.format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
	if(cityTimeZone === 'current') {
		cityTimeZone = moment.tz.guess();
	}
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  citiesElement.innerHTML = `
		<div class="city">
			<div>
				<h2>${cityName}</h2>
				<div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
			</div>

			<div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format(
    "A"
  )}</small></div>
		</div>`;
}

let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
