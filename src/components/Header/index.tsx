"use client";
import React from "react";
import Link from "next/link";
import { Container } from "./style";
import Image from "next/image";

const links = [
  {
    title: "SHOP",
    href: "/shop",
  },
  {
    title: "NFT",
    href: "/nft",
  },
  {
    title: "Spider-Man: Miles Morales",
    href: "/news",
  },
  {
    title: "Into The Spider-Verse",
    href: "/spider-verse",
  },
];

function Header() {
  return (
    <Container>
      <div className="header__content">
        <Image alt="columbia" src="/columbia.png" width={148} height={40} />
        <div className="header__links">
          {links.map((item, index) => (
            <Link key={index} href={item.href}>
              {item?.title}
            </Link>
          ))}
          <Image alt="search" src="/search.png" width={24} height={24} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
