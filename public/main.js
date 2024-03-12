const rollBtn = document.getElementById(`rolling-btn`)

function createCards(arr) {
    const star = `⭐`
    for (let i = 0; i < 10; i++) {
        let catCard = document.createElement(`div`)
        catCard.setAttribute(`class`, `cat-card${arr[i].cat_rarity}`)
        catCard.setAttribute(`id`, `cat-${i+1}`)
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
        document.getElementById(`cat-cards`).appendChild(catCard)
    }
}

function getCats() {
    const rolledCats = {
        curUser: +localStorage.getItem(`curUser`),
        star3: 0,
        star4: 0,
        star5: 0
    }

    for (let i = 0; i < 10; i++) {
        let rngsus = Math.floor(Math.random() * 1000)
        if (rngsus < 10) {
            rolledCats.star5 += 1
        } else if(rngsus > 10 && rngsus < 150) {
            rolledCats.star4 += 1
        } else {
            rolledCats.star3 += 1
        }
    }

    axios.post(`http://localhost:4000/api/rollcats`, rolledCats)
        .then(res => {
            document.getElementById(`cat-cards`).replaceChildren()
            createCards(res.data)
        })
}

rollBtn.addEventListener(`click`, getCats)