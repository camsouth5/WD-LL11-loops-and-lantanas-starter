// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  // TODO: Refactor this loop using map() or forEach()
  for (let i = 0; i < stations.length; i++) {
    addStationElement(stations[i]);
  }
}

// Wishlist items array
const wishlist = [
  "Picnic Tables",
  "Water Fountain",
  "Butterfly Garden"
];

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  const wishlistSection = document.getElementById("wishlist");
  // Remove any previous list
  const oldList = wishlistSection.querySelector("ul");
  if (oldList) oldList.remove();
  // Create a new list
  const ul = document.createElement("ul");
  wishlist.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.cursor = "pointer";
    li.addEventListener("click", function() {
      const popup = document.getElementById("wishlist-info-popup");
      document.getElementById("wishlist-info-text").innerHTML = getWishlistItemInfo(item);
      popup.style.display = "block";
    });
    ul.appendChild(li);
  });
  wishlistSection.appendChild(ul);
}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
renderWishlist();

// Add event listener for wishlist submit
const wishlistInput = document.getElementById("wishlist-input");
const wishlistSubmit = document.getElementById("wishlist-submit");

wishlistSubmit.addEventListener("click", function() {
  const value = wishlistInput.value.trim();
  if (value) {
    wishlist.push(value);
    renderWishlist();
    wishlistInput.value = "";
  }
});

wishlistInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    wishlistSubmit.click();
  }
});

// Add a div for wishlist info popup
document.addEventListener("DOMContentLoaded", function() {
  if (!document.getElementById("wishlist-info-popup")) {
    const popup = document.createElement("div");
    popup.id = "wishlist-info-popup";
    popup.style.display = "none";
    popup.style.position = "fixed";
    popup.style.left = "50%";
    popup.style.top = "30%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#fffbe7";
    popup.style.border = "2px solid #ffe066";
    popup.style.borderRadius = "10px";
    popup.style.padding = "1.2rem 2rem";
    popup.style.boxShadow = "0 2px 16px rgba(0,0,0,0.18)";
    popup.style.zIndex = 1000;
    popup.innerHTML = '<span id="wishlist-info-text"></span><br><button id="wishlist-info-close">Close</button>';
    document.body.appendChild(popup);
    document.getElementById("wishlist-info-close").onclick = function() {
      popup.style.display = "none";
    };
  }
});

function getWishlistItemInfo(item) {
  // You can expand this with more info per item if desired
  return `More info about <strong>${item}</strong>:<br>This is a community wishlist item. Suggest details or improvements!`;
}
