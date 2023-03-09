let Entry = document.getElementById("save-fold")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    Entry.textContent += countStr
    countEl.textContent = 0
    count = 0
}
