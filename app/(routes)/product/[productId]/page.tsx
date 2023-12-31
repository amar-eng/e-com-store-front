import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/gallery';
import Container from '@/components/ui/container';
import ProductList from '@/components/product-list';
import Info from '@/components/info';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  const relatedProducts = suggestedProducts.filter(
    (suggestedProduct) => suggestedProduct.id !== product.id
  );
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:col-span-2">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={relatedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
