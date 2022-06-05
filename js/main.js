const modal = document.getElementById("myModal");
const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

// span tag to close the picture
const span = document.getElementsByClassName("close")[0];

span.onclick = () => {
  modal.style.display = "none";
};
