import React, { useState } from 'react';
import { Heart, HeartPulse, Soup } from 'lucide-react';

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.strTags ? recipe.strTags.split(',') : []);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.idMeal)
  );

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.idMeal === recipe.idMeal);

    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.idMeal !== recipe.idMeal);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.strMeal} recipe`}
        target='_blank'
        className='relative h-32'
      >
        <div className='skeleton absolute inset-0' />
        <img
          src={recipe.strMealThumb}
          alt='recipe img'
          className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = 'none';
          }}
        />
        <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
          <Soup size={16} /> {recipe.strMeal}
        </div>

        <div
          className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
        >
          {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
          {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
        </div>
      </a>

      <div className='flex mt-1'>
        <p className='font-bold tracking-wide'>{recipe.strMeal}</p>
      </div>
      <p className='my-2'>
        {recipe.strArea ? recipe.strArea : 'Unknown'} Kitchen
      </p>

      <div className='flex gap-2 mt-auto'>
        {healthLabels.map((label, idx) => (
          <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
            <HeartPulse size={16} />
            <span className='text-sm tracking-tighter font-semibold'>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
