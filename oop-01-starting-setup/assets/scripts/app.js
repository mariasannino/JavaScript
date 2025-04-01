class Product {
  title = "DEFAULT";
  imageURL;
  description;
  price;
}

console.log(new Product());

const productList = {
  products: [
    /*  new Product() */
    {
      title: "A Pillow",
      imageUrl:
        "https://th.bing.com/th/id/OIP.n0EpWqrR3PWOXQjTvvfPiQHaHa?rs=1&pid=ImgDetMain",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://th.bing.com/th/id/OIP.n_CjPi8BvuGDTHsnrtcdpQHaHa?rs=1&pid=ImgDetMain",
      price: 89.99,
      description: "A carpet which you might like -- or not",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}">
      <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to Cart</button>
      </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
