import React from "react";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiHeart, HiShoppingCart } from "react-icons/hi";
import { HiHome, HiHomeModern } from "react-icons/hi2";
import NumberItems from "../NavBarComponents/NumberItems";
import { BiHeart, BiHome, BiLogoStackOverflow } from "react-icons/bi";





const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <HiHome className="icon nav-icon ms-2" />

  },
  {
    id: 2,
    url: "/cart",
    text: 'Carrello',
    icon: <HiShoppingCart className="icon nav-icon ms-2" />,
    number: <small className='border border-2 border-dark rounded-circle px-1 py-1 mx-1 nav-number'><NumberItems itemTitle={'cart'} /></small>,

  },
  {
    id: 7,
    url: "/wishlist",
    text: 'WishList',
    icon: <HiHeart className="icon nav-icon ms-2" />,
    number: <small className='border border-2 border-dark rounded-circle px-1 py-1 mx-1 nav-number'><NumberItems itemTitle={'wishlist'} /></small>,

  },
  {
    id: 3,
    url: "https://iadicola.netsons.org/portfolio",
    text: "chi siamo",
    target: '_blank'
  },
  {
    id: 4,
    url: "https://iadicola.netsons.org/progetti",
    text: "progetti",
    target: '_blank'
  },
  {
    id: 5,
    url: "https://iadicola.netsons.org/",
    text: "contattaci",
    target: '_blank'
  },

  /*   {
      id: 5,
      url: "https://iadicola.netsons.org/",
      text: "contattaci",
      target:'_blank'
    },
    {
      id: 6,
      url: "https://iadicola.netsons.org/",
      text: "contattaci",
      target:'_blank'
    }, */

];

const socialLinks = [

  {
    id: 1,
    url: "https://www.facebook.com/people/Tech-CraftCode/61566532360263/?locale=it_IT",
    icon: <FaFacebook className="icon" />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/luigi-iadicola/",
    icon: <FaLinkedinIn className="icon" />,
  },
  {
    id: 3,
    url: "https://github.com/AndroLuix",
    icon: <FaGithub className="icon" />,
  },
];

const SocialBar = () => {


  return (
      <div className="col-6 col-md-6">
        <div className="text-center mb-4">
        <h5 className="">Tech CraftCode - Luigi Iadicola</h5>
      </div>
      <ul className="social d-flex flex-row gap-5 justify-content-between my-3">

        {socialLinks.map((el) => {
          const { id, url, icon } = el;
          return (
            <li key={id}>
              <a href={url} alt="social" rel="noreferrer" target="_blank">
                {icon}

              </a>
            </li>
          );
        })}
      </ul>
      </div>
      );
};

      export {links, SocialBar};