import ProductGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductGrid />
    </div>
  );
};

export default FeaturedProducts;
