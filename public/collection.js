const getAllCatsBtn = document.getElementById(`get-all-cats`)
const getOwnedCatsBtn = document.getElementById(`get-owned-cats`)
const get5StarBtn = document.getElementById(`get-five-stars`)
const get4StarBtn = document.getElementById(`get-four-stars`)
const get3StarBtn = document.getElementById(`get-three-stars`)

const info = {
    curUser: +localStorage.getItem(`curUser`)
}

function createCards(arr) {
    const star = `⭐`
    for (let i = 0; i < arr.length; i++) {
        let catCard = document.createElement(`div`)
        catCard.setAttribute(`class`, `cat-card${arr[i].cat_rarity}`)
        catCard.setAttribute(`id`, `bad-practice`)
        catCard.innerHTML = (`
        <div class="card-header">
            <p class="cat-text${arr[i].cat_rarity}">${arr[i].cat_name}</p>
        </div>
        <div class="cat-image-cont">
            <img src="${arr[i].cat_image}" alt="cat image" class="cat-image">
        </div>
        <div class="cat-rarity${arr[i].cat_rarity}">
            <p class="cat-text${arr[i].cat_rarity}">${star.repeat(arr[i].cat_rarity)}</p>
        </div>
        `)
        document.getElementById(`card-section`).appendChild(catCard)
    }
}

function getAllCats() {
    axios.get(`http://localhost:4000/api/getallcats`)
        .then(res => {
            document.getElementById(`card-section`).replaceChildren()
            createCards(res.data)
        })
}

function get5Stars() {
    axios.get(`http://localhost:4000/api/get5stars`)
        .then(res => {
            document.getElementById(`card-section`).replaceChildren()
            createCards(res.data)
        })
}

function get4Stars() {
    axios.get(`http://localhost:4000/api/get4stars`)
        .then(res => {
            document.getElementById(`card-section`).replaceChildren()
            createCards(res.data)
        })
}

function get3Stars() {
    axios.get(`http://localhost:4000/api/get3stars`)
        .then(res => {
            document.getElementById(`card-section`).replaceChildren()
            createCards(res.data)
        })
}

function getOwnedCats() {
    axios.post(`http://localhost:4000/api/getownedcats`, info)
    .then(res => {
        document.getElementById(`card-section`).replaceChildren()
        createCards(res.data)
    })
}

getAllCatsBtn.addEventListener(`click`, getAllCats)
getOwnedCatsBtn.addEventListener(`click`, getOwnedCats)
get5StarBtn.addEventListener(`click`, get5Stars)
get4StarBtn.addEventListener(`click`, get4Stars)
get3StarBtn.addEventListener(`click`, get3Stars)

