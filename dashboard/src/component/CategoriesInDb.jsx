import { useEffect, useState } from "react";

export const CategoriesInDb = () => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    let response = await fetch(`${import.meta.env.VITE_APP_API_URL}categories`);
    const result = await response.json();
    setGenres(result.data);
  };
  useEffect(() => {
    getGenres();
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias :
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            { genres.map((genre, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{genre.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
