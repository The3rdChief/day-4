/* eslint-disable react/prop-types */
import imgOne from "../assets/images/Rectangle 4.png";
import imgTwo from "../assets/images/Rectangle 5.png";
import imgThree from "../assets/images/Rectangle 6.png";

const Products = () => {
  return (
    <section className="w-full min-w-full mx-auto grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
      <Product src={imgOne} title={"skin products"} />
      <Product src={imgTwo} title={"hair products"} />
      <Product src={imgThree} title={"lipsticks and gloss"} />
    </section>
  );
};

const Product = ({ src, title }) => {
  return (
    <div className="h-[450px] grid grid-cols-1 grid-rows-1 overflow-hidden group">
      <img
        src={src}
        alt="product image"
        className="w-full h-full scale-[1.025] object-cover col-start-1 row-start-1 group-hover:scale-110 transition-transform duration-300"
      />
      <p className="uppercase text-white col-start-1 row-start-1 self-end p-10 z-10">
        {title}
      </p>
    </div>
  );
};

export default Products;
