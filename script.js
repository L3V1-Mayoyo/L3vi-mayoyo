// ======================================
// FOODIE NAVIGATION
// ======================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const sectionId = link.getAttribute("href");

        // LET OTHER HTML PAGES OPEN NORMALLY
        if (sectionId && sectionId.endsWith(".html")) {
            return;
        }

        // HANDLE HOME AND MENU
        if (sectionId && sectionId.startsWith("#")) {

            const section = document.querySelector(sectionId);

            if (section) {

                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


// ======================================
// FOOD INFORMATION
// ======================================

const foodTypes = {

    pizza: {
        title: "Pizza",
        types: [
            {
                name: "Margherita Pizza",
                description: "A classic pizza made with tomato sauce, mozzarella cheese and fresh basil."
            },
            {
                name: "Pepperoni Pizza",
                description: "A popular pizza topped with cheese and spicy pepperoni slices."
            },
            {
                name: "Hawaiian Pizza",
                description: "A sweet and savoury pizza topped with ham and pineapple."
            }
        ]
    },

    burger: {
        title: "Burger",
        types: [
            {
                name: "Cheeseburger",
                description: "A delicious burger containing a beef patty, melted cheese and fresh vegetables."
            },
            {
                name: "Chicken Burger",
                description: "A burger filled with crispy or grilled chicken, lettuce and tasty sauce."
            },
            {
                name: "Veggie Burger",
                description: "A burger made with a vegetable-based patty and fresh toppings."
            }
        ]
    },

    chicken: {
        title: "Chicken",
        types: [
            {
                name: "Fried Chicken",
                description: "Chicken coated in seasoned flour and cooked until crispy."
            },
            {
                name: "Grilled Chicken",
                description: "Chicken cooked on a grill and flavoured with herbs and spices."
            },
            {
                name: "Roast Chicken",
                description: "Chicken cooked in an oven until tender and golden."
            }
        ]
    },

    fish: {
        title: "Fish",
        types: [
            {
                name: "Grilled Fish",
                description: "Fresh fish cooked on a grill and seasoned with herbs and spices."
            },
            {
                name: "Fried Fish",
                description: "Fish coated in a light crispy coating and fried until golden."
            },
            {
                name: "Fish Curry",
                description: "Fish cooked in a delicious sauce made with spices and coconut milk."
            }
        ]
    },

    pasta: {
        title: "Pasta",
        types: [
            {
                name: "Spaghetti Bolognese",
                description: "Spaghetti served with a rich tomato and meat sauce."
            },
            {
                name: "Mac and Cheese",
                description: "Pasta mixed with a creamy melted cheese sauce."
            },
            {
                name: "Chicken Alfredo",
                description: "Pasta served with chicken and a creamy Alfredo sauce."
            }
        ]
    },

    tacos: {
        title: "Tacos",
        types: [
            {
                name: "Beef Tacos",
                description: "Tacos filled with seasoned beef, lettuce and fresh toppings."
            },
            {
                name: "Chicken Tacos",
                description: "Tacos filled with seasoned chicken and tasty vegetables."
            },
            {
                name: "Fish Tacos",
                description: "Tacos filled with fish, fresh vegetables and a delicious sauce."
            }
        ]
    },

    rice: {
        title: "Rice",
        types: [
            {
                name: "Pilau",
                description: "Fragrant rice cooked with spices and seasoned meat."
            },
            {
                name: "Fried Rice",
                description: "Rice stir-fried with vegetables, eggs and tasty seasonings."
            },
            {
                name: "Coconut Rice",
                description: "Rice cooked with coconut milk for a rich and creamy flavour."
            }
        ]
    },

    salads: {
        title: "Salads",
        types: [
            {
                name: "Greek Salad",
                description: "A fresh salad made with cucumber, tomatoes, olives and feta cheese."
            },
            {
                name: "Caesar Salad",
                description: "A salad containing lettuce, croutons, cheese and Caesar dressing."
            },
            {
                name: "Fruit Salad",
                description: "A colourful mixture of fresh seasonal fruits."
            }
        ]
    },

    sandwiches: {
        title: "Sandwiches",
        types: [
            {
                name: "Club Sandwich",
                description: "A layered sandwich filled with chicken, lettuce, tomatoes and cheese."
            },
            {
                name: "Tuna Sandwich",
                description: "A sandwich filled with tuna mixed with a creamy dressing."
            },
            {
                name: "Grilled Cheese Sandwich",
                description: "Toasted bread filled with melted cheese."
            }
        ]
    },

    steak: {
        title: "Steak",
        types: [
            {
                name: "Grilled Steak",
                description: "Steak cooked on a grill and seasoned with herbs and spices."
            },
            {
                name: "Pepper Steak",
                description: "Tender steak prepared with a rich pepper sauce."
            },
            {
                name: "Garlic Butter Steak",
                description: "Steak served with a delicious garlic butter sauce."
            }
        ]
    },

    desserts: {
        title: "Desserts",
        types: [
            {
                name: "Chocolate Cake",
                description: "A soft and delicious cake filled with rich chocolate flavour."
            },
            {
                name: "Ice Cream",
                description: "A cold and creamy dessert available in different flavours."
            },
            {
                name: "Fruit Tart",
                description: "A sweet pastry filled with cream and topped with fresh fruits."
            }
        ]
    },

    hotdogs: {
        title: "Hot Dogs",
        types: [
            {
                name: "Classic Hot Dog",
                description: "A sausage served in a soft bun with your favourite toppings."
            },
            {
                name: "Cheese Hot Dog",
                description: "A hot dog topped with melted cheese and tasty sauce."
            },
            {
                name: "Chilli Hot Dog",
                description: "A hot dog topped with a flavourful chilli sauce."
            }
        ]
    }

};


// ======================================
// MAKE FOOD CARDS CLICKABLE
// ======================================

const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(function(card) {

    card.style.cursor = "pointer";

    card.addEventListener("click", function() {

        const heading = card.querySelector("h3");

        if (heading) {

            // CONVERT FOOD NAME INTO A URL-FRIENDLY KEY
            const foodName = heading.textContent
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "");

            if (foodTypes[foodName]) {

                window.location.href = "food.html?food=" + foodName;

            }

        }

    });

});


// ======================================
// BACK TO TOP BUTTON
// ======================================

const backToTop = document.createElement("button");

backToTop.textContent = "↑";

backToTop.id = "backToTop";

backToTop.title = "Back to Top";

document.body.appendChild(backToTop);


// STYLE THE BUTTON

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "48px";
backToTop.style.height = "48px";
backToTop.style.border = "2px solid #ff8c00";
backToTop.style.borderRadius = "50%";
backToTop.style.backgroundColor = "#171717";
backToTop.style.color = "#ff8c00";
backToTop.style.fontSize = "25px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "1000";
backToTop.style.boxShadow = "0 0 12px #ff8c00";
backToTop.style.transition = "0.3s";


// SHOW BUTTON WHEN SCROLLING

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


// BUTTON HOVER EFFECT

backToTop.addEventListener("mouseenter", function() {

    backToTop.style.backgroundColor = "#ff8c00";
    backToTop.style.color = "black";
    backToTop.style.boxShadow = "0 0 20px #ff8c00";

});


backToTop.addEventListener("mouseleave", function() {

    backToTop.style.backgroundColor = "#171717";
    backToTop.style.color = "#ff8c00";
    backToTop.style.boxShadow = "0 0 12px #ff8c00";

});


// TAKE USER TO THE TOP

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});