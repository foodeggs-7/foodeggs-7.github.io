var clicks = 0
var combo = 1
var nextCombo = 100
let Debounce = false

const turtel = document.getElementById('Swimming-Turtel')
const points = document.getElementById('points')

//const localStorage = document.localStorage

var savedClicks = localStorage.getItem("clicks")

if (savedClicks) {
    clicks = Number(savedClicks)
}

var savedCombo = localStorage.getItem("combo")

if (savedCombo) {
    combo = Number(savedCombo)
}

var savedNextCombo = localStorage.getItem("nextCombo")

if (savedNextCombo) {
    nextCombo = Number(savedNextCombo)
}

function Wait(time){
    if (time + 2 * 1000 <= Date.now()){
       // console.log("debounce done")
        Debounce = false
    } else {
       // console.log("wait")
        setTimeout(() => Wait(time), 100);
    }
}

turtel.addEventListener('click', () => {
    if (Debounce) {
        return
    }
    let time = Date.now()
    //console.log(time)
    clicks += 1 * combo

    if (clicks >= nextCombo){
        combo += 1
        nextCombo = nextCombo * 2

        localStorage.setItem("combo", combo)
        localStorage.setItem("nextCombo", nextCombo)
    }
    localStorage.setItem("clicks", clicks)
    points.querySelector('p').querySelector('span').textContent = clicks
    points.style.display = "flex"
    Wait(time)
})