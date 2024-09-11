import React from 'react';
// import logo from "../assets/logo.png";
import { ShoppingCart } from "lucide-react"
import { Leaf } from 'lucide-react';
import { Menu } from 'lucide-react';
import ResponsiveMenu from './ResponsiveMenu';
import { FaLeaf } from 'react-icons/fa';
import { motion } from "framer-motion";
const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Products',
    link: '#',
  },
  {
    id: 3,
    title: 'About',
    link: '#',
  },
  {
    id: 4,
    title: 'Shop',
    link: '#',
  },
  {
    id: 5,
    title: 'Contacts',
    link: '#',
  },
]
const Navbar =() => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <nav>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.5 }}
        
        className='container flex justify-between items-center py-4 md:pt-4'>
        {/* Logo section */}
        <div className='flex text-2xl items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Fruit</p>
          <p className='text-secondary'>Store</p>
          {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
           <FaLeaf className='text-green-500'/>
        </div>
          {/* Menu Section */} 
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
          {NavbarMenu.map((menu) => (
              <li key={menu.id} className='text-xl'> 
                <a href={menu.link}
                className='inline-block px-3 py-1 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>
                  
                  {menu.title}</a>
              </li>
            ))}
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <ShoppingCart />
            </button>
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
            <div className='md:hidden' onClick={() =>
              setOpen(!open)}>

              <Menu className='text-4xl'/>
            </div>
      </motion.div>
    </nav>
      {/* Mobile Menu section */}
      <ResponsiveMenu open={open} />
      </>
  );
};
export default Navbar;