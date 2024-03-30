// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const itemPrices = {
  "Garlic Bread": 25,
  "Bruschetta": 70,
  "Margherita Pizza": 114,
  "Spaghetti Carbonara": 140,
  "Tiramisu": 90,
  "Cheesecake": 95
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuElement = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (let category in menu) {
      // Create an element to represent the category
      const categoryElement = document.createElement("h2");

      // Set the text content of the category element to the category name
      categoryElement.textContent = category;

      
      // Append the category element to the menu container
      menuElement.appendChild(categoryElement);

      // Create an element to represent a list of items
      const itemList = document.createElement("ul");

      // Append a list of items element to the menu container
      menuElement.appendChild(itemList);

      // Loop through the items in the category and create list items
      menu[category].forEach(item => {
        // Create a list item element
        const listItem = document.createElement("li");

        // Set the text content of the list item element to the item name
        listItem.textContent = item;

        // Attach a click event listener to the list item to add it to the order
        listItem.addEventListener("click", () => {
         addToOrder(item)
          console.log(`Clicked on ${item}`);
        })

        // Append the list item to the list of items
        itemList.appendChild(listItem);

      })
            
    }          
}

displayMenuItems(menu);

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");

    // Create a list item for the order
    const orderListItem = document.createElement("li");

    // Set the text content of the list item to the item name
    const itemPrice = itemPrices[itemName];
    orderListItem.textContent = `${itemName} - R${itemPrice}`;

    // Append the list item to the order items list
    orderItems.appendChild(orderListItem);

    // Calculate and update the total price
    let totalPrice = 0;
    // Loop through each item in the order items list to calculate the total price
    orderItems.querySelectorAll("li").forEach(item => {
       
      const itemText = item.textContent.trim();
      // Find the index of "R" in the text
      const randIndex = itemText.lastIndexOf("R");
      // Extract the price string from the text starting from the index of "R"
      const priceString = itemText.substring(randIndex + 1);
      // Convert the price string to a number using parseFloat
      const itemPrice = parseFloat(priceString);
      // Add the price to the total
      totalPrice += itemPrice;

      item.addEventListener("click", () => {
        item.remove();
        
        // Recalculate total price when item is removed
        updateTotalPrice();
    });
    });

    // Update the text content of the order total element with the new total
    orderTotal.textContent = totalPrice
    
}

function updateTotalPrice () {
  const orderItems = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");
    let totalPrice = 0;
    // Loop through each item in the order items list to calculate the total price
    orderItems.querySelectorAll("li").forEach(item => {
        // Extract the price from the text content
        const priceString = item.textContent.substring(randIndex + 1);
        // Add the price to the total
        totalPrice += parseFloat(priceString);
    });
    // Update the text content of the order total element with the new total
    orderTotal.textContent = totalPrice;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems();
}

// Start the menu system by calling the init function
initMenuSystem(menu);

