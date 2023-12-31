import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';
import ProductList from '@/components/product-list';
import Hero from '@/components/ui/Hero';
import getCategories from '@/actions/get-categories';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Hero data={categories} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Scents" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
