"use client";

import { usePathname } from "next/navigation";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsTicketPerforated } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import Link from "next/link";
import "./sider.css";
import Image from "next/image";

const Sider = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: AiOutlineHome },
    { href: "/messages", icon: BiMessageSquareDetail },
    { href: "/liked", icon: AiOutlineHeart },
    { href: "/cart", icon: BiShoppingBag },
    { href: "/promokod", icon: BsTicketPerforated },
    { href: "/settings", icon: FiSettings },
  ];

  return (
    <div className="sider w-[100px] min-h-screen bg-[#ffffffcb] p-5 rounded-r-3xl border-r-white">
      <br />
      <Image
        className="mx-auto"
        src="/fire.svg"
        alt="logo"
        width={40}
        height={40}
      />
      <br />
      <br />
      <div className="mt-5 items-center justify-center flex flex-col gap-10">
        {links.map(({ href, icon: Icon }) => (
          <Link key={href} href={href} legacyBehavior>
            <a className={`sidebarLink ${pathname === href ? "active" : ""}`}>
              <Icon size={28} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sider;
