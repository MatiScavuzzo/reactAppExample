import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../contexts/CategoriesContext";

const CategoryItem = () => {
    const {categories} = useContext(CategoriesContext)    
    return ( 
        categories.map(catg =>
                    <div key={catg.key} className="relative w-auto bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] md:h-80 rounded-md">
                        <Link to={`/categories/${catg.key}`}>
                        <div>
                            <img className="object-cover w-full h-60 md:h-72" src={catg.image} alt={catg.categoryName} />
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <span className="font-bold ">{catg.categoryName}</span>
                        </div>
                        </Link>
                    </div>)
    )
}

export default CategoryItem;