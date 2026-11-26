const params = new URLSearchParams(window.location.search);
const foodName = params.get("food");

const heading = document.getElementById("food-heading");
const description = document.getElementById("food-description");

const pizzaImage = document.getElementById("pizza-image-container");
const burgerImage = document.getElementById("burger-image-container");
const chickenImage = document.getElementById("chicken-image-container");

const typesContainer = document.getElementById("food-types");

// Three types for every food
const foodTypes = {
    pizza: [
        "Margherita Pizza",
        "Pepperoni Pizza",
        "BBQ Chicken Pizza"
    ],

    burger: [
        "Classic Cheeseburger",
        "Double Beef Burger",
        "Chicken Burger"
    ],

    chicken: [
        "Fried Chicken",
        "Grilled Chicken",
        "Chicken Wings"
    ],

    fish: [
        "Grilled Fish",
        "Fried Fish",
        "Fish Curry"
    ],

    pasta: [
        "Spaghetti Bolognese",
        "Mac and Cheese",
        "Chicken Alfredo"
    ],

    tacos: [
        "Beef Tacos",
        "Chicken Tacos",
        "Fish Tacos"
    ],

    rice: [
        "Pilau",
        "Fried Rice",
        "Coconut Rice"
    ],

    salads: [
        "Greek Salad",
        "Caesar Salad",
        "Fruit Salad"
    ],

    sandwiches: [
        "Club Sandwich",
        "Tuna Sandwich",
        "Grilled Cheese Sandwich"
    ],

    steak: [
        "Grilled Steak",
        "Pepper Steak",
        "Garlic Butter Steak"
    ],

    desserts: [
        "Chocolate Cake",
        "Ice Cream",
        "Fruit Tart"
    ],

    hotdogs: [
        "Classic Hot Dog",
        "Cheese Hot Dog",
        "Chilli Hot Dog"
    ]
};

// Hide all trio images first
pizzaImage.style.display = "none";
burgerImage.style.display = "none";
chickenImage.style.display = "none";

// Clear previous cards
typesContainer.innerHTML = "";

if (foodTypes[foodName]) {

    const foodTitle =
        foodName.charAt(0).toUpperCase() + foodName.slice(1);

    heading.textContent = "Our Delicious " + foodTitle;
    heading.style.display = "block";

    description.textContent =
        "Explore our delicious " + foodTitle.toLowerCase() +
        " favourites. Choose your favourite!";
    description.style.display = "block";

    // Show original trio images for the first three foods
    if (foodName === "pizza") {
        pizzaImage.style.display = "block";
    }

    if (foodName === "burger") {
        burgerImage.style.display = "block";
    }

    if (foodName === "chicken") {
        chickenImage.style.display = "block";
    }

    // Create text-only cards for every other food
    if (!["pizza", "burger", "chicken"].includes(foodName)) {

        typesContainer.style.display = "grid";
        typesContainer.style.gridTemplateColumns =
            "repeat(auto-fit, minmax(280px, 1fr))";
        typesContainer.style.gap = "30px";
        typesContainer.style.width = "90%";
        typesContainer.style.maxWidth = "1100px";
        typesContainer.style.margin = "40px auto";
        typesContainer.style.padding = "10px";

        foodTypes[foodName].forEach((type, index) => {

            const card = document.createElement("div");

            card.style.backgroundColor = "#171717";
            card.style.border = "2px solid #ff8c00";
            card.style.borderRadius = "18px";
            card.style.padding = "35px 25px";
            card.style.minHeight = "160px";
            card.style.textAlign = "center";
            card.style.boxShadow = "0 0 12px rgba(255,140,0,0.2)";

            const title = document.createElement("h2");
            title.textContent = type;
            title.style.color = "#ff8c00";
            title.style.marginBottom = "15px";

            const note = document.createElement("p");
            note.textContent =
                "Enjoy our delicious " + type.toLowerCase() +
                ", freshly prepared and full of flavour!";
            note.style.color = "white";
            note.style.lineHeight = "1.6";

            card.appendChild(title);
            card.appendChild(note);

            typesContainer.appendChild(card);
        });

    } else {
        typesContainer.style.display = "none";
    }

} else {

    heading.textContent = "Welcome to Foodie!";
    heading.style.display = "block";

    description.textContent =
        "Explore our delicious food favourites.";
    description.style.display = "block";

    typesContainer.style.display = "none";
}