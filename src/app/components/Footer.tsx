import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.png";
import Whatsapp from "@/app/assets/icons/Whatsapp";
import Instagram from "@/app/assets/icons/Instagram";
import Facebook from "@/app/assets/icons/Facebook";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary py-4">
      <Container className="text-center">
        <div id="logo" className="flex justify-center items-center">
          <Image src={Logo} alt="Logo" width={120} height={70} />
        </div>
        <div>
          <p>
            Follow us on social media to get the latest updates about our
            products
          </p>
          <ul className="flex justify-center items-center gap-4 pt-4">
            <li>
              <Link href="" title="Whatsapp">
                <Whatsapp />
              </Link>
            </li>
            <li>
              <Link href="" title="Facebook">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="" title="Instagram">
                <Instagram />
              </Link>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
