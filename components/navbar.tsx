import Link from 'next/link';
import Container from './ui/container';
import MainNav from './main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from './navbar-actions';

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center bg-darkBlack">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="text-white">Signature Perfume</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
