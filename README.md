Recipe Finder App
Description
The Recipe Finder app is a user-friendly application built with React, Tailwind CSS, and DaisyUI that allows you to explore a wide variety of recipes. The app is personalized by default to fetch chicken recipes, but you can easily fetch recipes from different cuisines by simply changing the search query. It offers a sleek and responsive interface using modern web technologies.

Features
Personalized Default Search: The app starts by fetching chicken recipes, which provides a personalized experience for users interested in chicken dishes.
Cuisine Search: You can search for any cuisine or ingredient, and the app will fetch relevant recipes from a variety of cuisines.
Responsive UI: The app is fully responsive and works seamlessly on both desktop and mobile devices, thanks to Tailwind CSS and DaisyUI.
Favorites: You can save your favorite recipes to local storage and revisit them later.
Technologies Used
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework to style the components.
DaisyUI: A component library built on top of Tailwind CSS for pre-styled components.
MealDB API: Provides the recipe data. You can easily modify the fetch function to fetch different cuisines by changing the search query.
Installation
Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/recipe-finder-app.git
Navigate into the project directory:

bash
Copy
Edit
cd recipe-finder-app
Install the dependencies:

bash
Copy
Edit
npm install
Set up the environment variables:

Create a .env file in the root directory.
Add your MealDB API key (if needed for future use).
Example .env file:

env
Copy
Edit
VITE_API_KEY=your-api-key
Start the development server:

bash
Copy
Edit
npm start
Open the app in your browser at http://localhost:3000.

How It Works
Homepage: Displays a default set of chicken recipes. You can change the search query by typing into the search bar and hitting enter to fetch recipes from other cuisines.

Favorites Page: Users can add recipes to their favorites, and these will be saved in local storage for easy access later.

Responsive Design: The app is responsive, ensuring a smooth experience across both desktop and mobile devices.

Fetching Recipes: Recipes are fetched from the MealDB API. You can customize the search query to fetch recipes from different cuisines by changing the fetch function.

Example of modifying the fetch function for different cuisines:

js
Copy
Edit
const fetchRecipes = async (searchQuery) => {
  setLoading(true);
  setRecipes([]);
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
    const data = await res.json();
    setRecipes(data.meals);
  } catch (error) {
    console.log(error.message);
  } finally {
    setLoading(false);
  }
};
Contributing
Feel free to fork this repository and make any changes you need. If you have any improvements, bug fixes, or new features, open a pull request! Contributions are always welcome.

License
This project is licensed under the MIT License.

