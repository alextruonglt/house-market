import React from 'react'
import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

const Explore = () => {


  return (
    <div className="explore">
      <header>
        <p className="pageHeader">
          Explore
        </p>
      </header>

      <main>
        {/* Slider */}

        <p className="exploreCategoryHeading">
          Categories
        </p>
        <p className="exploreCategories">
          <Link to="/category/rent">
            <img className='exploreCategoryImg' src={rentCategoryImage} alt="rent" />
            <p className="exploreCategroyName">Paces for rent</p>
          </Link>
          <Link to="/category/sale">
            <img className='exploreCategoryImg' src={sellCategoryImage} alt="sell" />
            <p className="exploreCategroyName">Places for sale</p>
          </Link>
        </p>
      </main>
    </div>
  )
}

export default Explore