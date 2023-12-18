const getById = (id) => document.getElementById(id);

const showMessageInfo = (msg) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "info",
    title: msg,
  });
};

const showCountProductCart = (products, hidden = false) => {
  sessionStorage.setItem(
    "cart-count",
    products.map((product) => product.quantity).reduce((a, b) => a + b, 0)
  );
  getById("show-count").innerHTML = products.quantity;
  getById("show-count").innerHTML = sessionStorage.getItem("cart-count");
  getById("show-count").hidden = hidden;
};

const showProductInCart = (products, total) => {
  if (getById("cart-table")) {
    getById("cart-table").innerHTML = null;
    products.forEach(({ id, image, title, price, quantity, discount }) => {
      getById("cart-table").innerHTML += `
    <tr>
        <td class="text-center" scope="row"><img src="/images/products/${image}" alt="" width="100"/></td>
        <td class="text-center">${title}</td>
        <td class="text-center">$ ${(price - (price * discount) / 100) * quantity
        }</td>
        <td>
            <div class="d-flex gap-2 justify-content-center">
                <button class="btn btn-sm btn-danger ${quantity === 1 && "disabled"
        }" onclick="removeItemToCart(${id})"><i class="fa-solid fa-minus"></i></button>
                <input type="text" value=" ${quantity}" style="width:30px"/>
                <button class="btn btn-sm btn-success" onclick="addItemToCart(1,${id})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </td>
        <td class="text-center">
        <h3 style="cursor:pointer" onclick="deleteItemToCart(${id})" class="text-danger"><i class="fa fa-trash"></i></h3>
        </td>
    </tr>
    `;
    });
    getById("show-total").innerHTML = total;
  }
};

const addItemToCart = async (quantity, product) => {
  try {
    const response = await fetch(`/api/cart/`, {
      method: "POST",
      body: JSON.stringify({
        quantity,
        products: +product,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { ok, data, msg } = await response.json();
    if (!ok) {
      throw new Error(msg);
    } else {
      const { products, total } = data;
      // Reproduce el sonido al añadir un producto al carrito
      const cartSound = getById("cartSound");
      cartSound.play();
      showCountProductCart(products);
      showProductInCart(products, total);
      showMessageInfo(msg);
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const removeItemToCart = async (id) => {
  try {
    const response = await fetch(`/api/cart?product=${id}`, {
      method: "DELETE",
    });

    const {
      ok,
      data: { products, total },
      msg,
    } = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      showCountProductCart(products);
      showProductInCart(products, total);
      showMessageInfo(msg);
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const deleteItemToCart = async (id) => {
  try {
    const response = await fetch(`/api/cart/item?product=${id}`, {
      method: "DELETE",
    });

    const {
      ok,
      data: { products, total },
      msg,
    } = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      if (products.length) {
        sessionStorage.setItem("cart-count", products.length);
        getById("show-count").innerHTML = sessionStorage.getItem("cart-count");
        showProductInCart(products, total);
        showMessageInfo(msg);
      } else {
        showCountProductCart(products);
        getById("cart-body").innerHTML =
          '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
        getById("btn-clearCart").classList.add("disabled");
      }
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const clearCart = async () => {
  try {
    const response = await fetch(`/api/cart/all`, {
      method: "DELETE",
    });

    const {
      ok,
      data: { products, total },
      msg,
    } = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      getById("cart-body").innerHTML =
        '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
      showCountProductCart(products, true);

      getById("btn-clearCart").classList.add("disabled");
      showMessageInfo(msg);
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

window.onload = async function () {
  if (!sessionStorage.getItem("cart-count")) {
    sessionStorage.setItem("cart-count", 0);
  }

  if (getById("show-count")) {
    getById("show-count").innerHTML = sessionStorage.getItem("cart-count");
    getById("show-count").hidden =
      sessionStorage.getItem("cart-count") > 0 ? false : true;
      updateCartCountAfterLogin();
  }



  getById("btn-cart") &&
    getById("btn-cart").addEventListener("click", async function (e) {
      try {
        const response = await fetch("/api/cart/");
        const {
          ok,
          data: { products, total },
        } = await response.json();

        if (ok) {
          if (products.length) {
            getById("cart-body").innerHTML = `
            <table class="table table-dark" id="tableCart">
                <thead class="text-center">
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Eliminar Producto</th>
                    </tr>
                </thead>
                <tbody id="cart-table">
                  
                </tbody>
                <caption>
                    <div class="d-flex justify-content-end text-white">
                        <h5>Total: $<span id="show-total">${total}</span></h5> 
                    </div>
                 </caption>
            </table>`;
            showProductInCart(products, total);
            getById("btn-clearCart").classList.remove("disabled");
          } else {
            getById("cart-body").innerHTML =
              '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
            getById("btn-clearCart").classList.add("disabled");
          }
        }
      } catch (error) {
        console.error;
        alert(error.message);
      }
    });
};

const updateCartCountAfterLogin = async () => {
  try {
    const response = await fetch("/api/cart");
    const { ok, data } = await response.json();
    if (ok && data) {
      const { products } = data;
      showCountProductCart(products);
    }
  } catch (error) {
    console.error(error);
  }
};
