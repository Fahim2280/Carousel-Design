document.addEventListener("DOMContentLoaded", async () => {
  const carouselTrack = document.querySelector(".carousel-track");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pagination = document.querySelector(".pagination");
  const visibleCards = 1;
  let currentIndex = 0;

  const response = await fetch("./Model/book-description.json");
  const cards = await response.json();

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  cards.forEach(({ photo, title, description }) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
  
    <div class = "card_image">
      <img src="Image/${photo}" alt="${title}">
    
       <div class = "card_descripton">
      <h3>${title}</h3>
      <p>${truncateText(description, 150)}</p> <!-- Truncate text for design -->
     </div>
    </div> 
  `;
    carouselTrack.appendChild(card);
  });

  const totalCards = cards.length;

  carouselTrack.style.width = `${(totalCards / visibleCards) * 100}%`;

  cards.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      moveToIndex(index);
    });
    pagination.appendChild(dot);
  });

  const dots = document.querySelectorAll(".pagination span");

  const updateDots = () => {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  };

  const moveToIndex = (index) => {
    currentIndex = (index + totalCards) % totalCards;
    carouselTrack.style.transform = `translateX(-${
      currentIndex * (100 / visibleCards)
    }%)`;
    updateDots();
  };

  prevButton.addEventListener("click", () =>
    moveToIndex(currentIndex - visibleCards)
  );
  nextButton.addEventListener("click", () =>
    moveToIndex(currentIndex + visibleCards)
  );

  updateDots();
});
