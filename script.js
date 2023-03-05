




  let naslov = document.querySelector("#naslov").value;
  let ime = document.querySelector("#ime").value;
  let mail = document.querySelector("#mail").value;
  let broj = document.querySelector("#broj").value;
  let poruka = document.querySelector("#poruka").value;

  let ispis = `Ime: ${ime} <br> Mail: ${mail} <br> Broj: ${broj} <br> Poruka: <br> ${poruka}`;


 


function sendMail()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "erzanatjelah@gmail.com",
        Password : "CAFF8C5A4918F580A74335E946A4D1284860",
        To : 'erzanatjelah@gmail.com',
        From : "erzanatjelah@gmail.com",
        Subject : document.querySelector("#naslov").value,
        Body : "Ime: " + document.querySelector("#ime").value + "<br> Mail: " + document.querySelector("#mail").value + "<br> Broj: " + document.querySelector("#broj").value + "<br> Poruka: <br>" + document.querySelector("#poruka").value,
      }).then(() => {
        let onsub = document.querySelector(".onsub");
        onsub.childNodes[1].style.display = "none";
        onsub.childNodes[3].style.display = "block";
      }
      );
}


const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  warp: false,
  keyboard: true
})


console.log("FIRMOOO");