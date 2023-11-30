import Link from 'next/link';
import Container from './ui/container';
import MainNav from './main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from './navbar-actions';
import Image from 'next/image';

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center bg-white">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src="/transparent.svg"
              alt="branstudios logo"
              width={150}
              height={90}
              color="red"
            />
          </Link>
          {/* <MainNav data={categories} /> */}
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
