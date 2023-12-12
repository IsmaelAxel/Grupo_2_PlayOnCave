import { useEffect, useState } from "react";

export const CategoriesInDb = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let response = await fetch(`${import.meta.env.VITE_APP_API_URL}categories`);
    const result = await response.json();
    setCategories(result.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias:
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            { categories.map((category, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {  
                      category.name === "featured" ? "Destacados" : category.name === "new releases" ? "Nuevos lanzamientos" : category.name === "best sellers" ? "Mas vendidos" : "null"
                  }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
