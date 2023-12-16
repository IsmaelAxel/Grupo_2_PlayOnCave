import { useEffect, useState } from "react";

export const LastProductInDb = () => {
  const [lastProduct, setLastProduct] = useState(null);
  const [detailProductData, setDetailProductData] = useState(null);

  useEffect(() => {
    const getLastProduct = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/products?page=1&limit=1&sort=id&order=desc"
        );
        const result = await response.json();

        if (result.ok && result.meta && result.meta.pages.length > 0) {
          const lastPageUrl =
            result.meta.pages[result.meta.pages.length - 1].url;
          const lastPageResponse = await fetch(
            `http://localhost:3000${lastPageUrl}`
          );

          const lastPageResult = await lastPageResponse.json();
          if (
            lastPageResult.ok &&
            lastPageResult.products &&
            lastPageResult.products.length > 0
          ) {
            const lastProductData = lastPageResult.products[0];
            const detailProduct = await fetch(`${lastProductData.detail}`);
            const detailProductData = await detailProduct.json();
            console.log(detailProductData);
            setDetailProductData(detailProductData);

            setLastProduct(lastProductData);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getLastProduct();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último Producto Agregado
          </h5>
        </div>
        <div className="card-body">
          {lastProduct ? (
            <>
              <div className="text-center">
                <h3>{lastProduct.title}</h3>
              </div>
              <div className="text-center">
                <img
                  src={detailProductData.data.images[0]}
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "40rem" }}
                  alt="Product"
                />
              </div>
              <h2>
                $
                {detailProductData.data.discount !== 0
                  ? detailProductData.data.discount -
                    (detailProductData.data.price *
                      detailProductData.data.discount) /
                      100
                  : detailProductData.data.price}
              </h2>
              <p>{lastProduct.description}</p>

              <a
                className="btn btn-danger"
                rel="nofollow"
                href={lastProduct.detail}
              >
                Ver detalle del producto
              </a>
            </>
          ) : (
            <p>No hay productos disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
};
