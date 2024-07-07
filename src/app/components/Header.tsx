import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.png";
import Container from "./Container";
import Search from "../assets/icons/Search";
import Cart from "./Cart";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-primary">
      <Container className="flex items-center justify-between">
        <Link href="/" id="logo">
          <Image src={Logo} alt="Logo" width={120} height={70} />
        </Link>
        <nav className="">
          <ul className="flex w-full gap-4 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
          </ul>
        </nav>
        <div className="text-lg relative">
          <input className="px-2 py-1 pr-12 rounded-3xl" type="text" />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
            <Search />
          </button>
        </div>
        <Cart />
      </Container>
    </header>
  );
};

export default Header;
