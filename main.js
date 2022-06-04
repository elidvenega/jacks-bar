const modal = document.getElementById("myModal");
let i;

const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
