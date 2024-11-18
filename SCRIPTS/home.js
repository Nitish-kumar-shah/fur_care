document.getElementById("toggleButton").addEventListener("click", function () {
  const sidebar = document.getElementById("login-bar");
  sidebar.classList.add("show");
});

document.getElementById("closeButton").addEventListener("click", function () {
  const sidebar = document.getElementById("login-bar");
  sidebar.classList.remove("show"); // Hide the sidebar
});

const pets = [
  {
    a: "Dog.html",
    image: "/IMAGES/dp-dog2.jpg",
  },
  {
    a: "cat.html",
    image: "/IMAGES/dp-cat2.webp",
  },
  {
    a: "rabbit.html",
    image: "/IMAGES/dp-rabbit.jpg",
  },
  {
    a: "",
    image: "/IMAGES/dp-cow2.jpg",
  },
  {
    a: "",
    image: "/IMAGES/dp-parrot.jpg",
  },
  {
    a: "",
    image: "/IMAGES/dp-turtle.webp",
  },
];

let petsHTML = "";
pets.forEach((pet) => {
  petsHTML += `<div class="dp">
            <a href="${pet.a}"
              ><img href="#" src="${pet.image}" alt=""
            /></a>
          </div>`;
});

document.querySelector(".js-dp-link-box").innerHTML = petsHTML;
