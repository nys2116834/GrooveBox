let products = [
  {
    "id": 0,
    "albumName": "I Am",
    "artist": "Earth, Wind & Fire",
    "price": "35",
    "img": "assets/Album_Cover_1.jpg",
    "cartLink": "https://www.paypal.com/ncp/payment/64RJYWJ3TZGB2"
  },
  {
    "id": 1,
    "albumName": "H2O",
    "artist": "Daryl Hall & John Oates",
    "price": "40",
    "img": "assets/Album_Cover_2.jpg",
    "cartLink": "https://www.paypal.com/ncp/payment/68T7NGTAC56WS"
  },
  {
    "id": 2,
    "albumName": "Forever Now",
    "artist": "The Psychedelic Furs",
    "price": "27",
    "img": "assets/Album_Cover_3.jpg",
    "cartLink": "https://www.paypal.com/ncp/payment/3J26G8G3SRE7J"
  },
  {
    "id": 3,
    "albumName": "Around the World in a Day",
    "artist": "Prince & The Revolution",
    "price": "25",
    "img": "assets/Album_Cover_4.jpg",
    "cartLink": "https://www.paypal.com/ncp/payment/PK38P3KCR7A92"
  },
  {
    "id": 4,
    "albumName": "Awaken, My Love!",
    "artist": "Childish Gambino",
    "price": "27",
    "img": "assets/Album_Cover_5.png",
    "cartLink": "https://www.paypal.com/ncp/payment/7283CSEHAETDY"
  },
  {
    "id": 5,
    "albumName": "Anti",
    "artist": "Rihanna",
    "price": "35",
    "img": "assets/Album_Cover_6.png",
    "cartLink": "https://www.paypal.com/ncp/payment/YJQHQGWX36NCU"
  },
  {
    "id": 6,
    "albumName": "The Score",
    "artist": "Fugees",
    "price": "27",
    "img": "assets/Album_Cover_7.png",
    "cartLink": "https://www.paypal.com/ncp/payment/QK7JFX6CV7KU8"
  },
  {
    "id": 7,
    "albumName": "Enema of the State",
    "artist": "Blink-182",
    "price": "30",
    "img": "assets/Album_Cover_8.jpg",
    "cartLink": "https://www.paypal.com/ncp/payment/ML9G9ECV4CM9N"
  },
  {
    "id": 8,
    "albumName": "Weezer",
    "artist": "Weezer",
    "price": "27",
    "img": "assets/Album_Cover_9.png",
    "cartLink": "https://www.paypal.com/ncp/payment/87B3BT9DGUKWS"
  }
];

getCards();
closeModal();

function getCards() {
  let cards = document.getElementsByClassName("modalBtn");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      openModal(i);
    });
  }
}

let closeBtn = document.getElementById("btn-close").addEventListener('click', closeModal)

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}


function openModal(index) {
  document.getElementById('modal').style.display = 'flex';

  let item = products[index];

  let image = document.querySelector(".productImg");
  image.src = item.img;

  let albumName = document.getElementById("albumName");
  let artist = document.getElementById("artist");
  let price = document.getElementById("price");;
  let link = document.getElementById("checkout");;

  albumName.innerHTML = item.albumName;
  artist.innerHTML = item.artist;
  price.innerHTML = `$${item.price}`;
  link.href = item.cartLink;
}