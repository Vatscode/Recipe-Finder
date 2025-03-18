\# Recipe Finder App

## Description

A React app built with Tailwind CSS and DaisyUI that allows users to find recipes. The app defaults to fetching chicken recipes, but you can search for any cuisine by modifying the search query.

## Features

- **Personalized Default Search** for chicken recipes.
- **Cuisine Search**: Easily search for different cuisines.
- **Responsive Design** with Tailwind CSS and DaisyUI.
- **Favorites**: Save your favorite recipes locally.

## Technologies Used

- **React**
- **Tailwind CSS**
- **DaisyUI**
- **MealDB API** for fetching recipes.

## Installation

1. Clone the repo:

    ```bash
    git clone https://github.com/your-username/recipe-finder-app.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open the app in your browser: [http://localhost:3000](http://localhost:3000)

## How It Works

1. **Search Recipes:** By default, chicken recipes are shown. Modify the search query to fetch other cuisines.
2. **Favorites:** Save recipes to local storage.
3. **Responsive:** Works seamlessly on desktop and mobile.

### Example: Changing Fetch Function for Different Cuisines

To change the cuisine, simply modify the `fetchRecipes` function to use any cuisine you want. Here’s an example of how to change it:

```javascript
const fetchRecipes = async (searchQuery) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
  const data = await res.json();
  setRecipes(data.meals);
};
