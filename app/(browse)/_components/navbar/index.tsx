import Search from "../../search/page";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-20 z-[49] bg-[#252731] lg:px-4 flex justify-between items-center shadow-sm'>
      <Logo />
      <Search />
    </nav>
  );
};
