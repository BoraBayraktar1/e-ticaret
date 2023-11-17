fetch('https://fakestoreapi.com/products')

.then(function (paket) {
    return paket.json()
})

.then(function (veri) {
    renderCards(veri)
})

.catch(function (hata) {
    console.log(hata)
})

const list = document.getElementById('list')

function renderCards (veri) {
    veri.forEach(function (ürün) {
        console.log(ürün)
        list.innerHTML += `
        <div class="card">
            <img height="150px" src="${ürün.image}"/>
            <h2>${ürün.title}</h2>
            <p>${ürün.category}</p>
            <p>⭐${ürün.rating.rate}</p>
            <button>
                <span>Sepete Ekle</span>
                <p>₺${ürün.price}</p>
            </button>
        </div>`
    })
}