import { type Product } from "src/common/types";
import PostItem from "src/components/PostItem";
import { HttpService } from "src/services/HttpService";

export const metadata = {
  title: "Products",
};

async function Products() {
  const { products } = await HttpService.get<{ products: Product[] }>(
    "/products"
  );

  return (
    <main>
      <div className="container mx-auto text-white">
        <section className="mt-20">
          <h2 className="font-semibold text-5xl mb-10 text-center">Products</h2>
          <ul className="list-none grid grid-cols-3 gap-3 mt-10">
            {products.map((item) => (
              <PostItem
                key={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.images[0]}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Products;
