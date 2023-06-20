"use client";
import React from "react";
import { Container } from "./style";
import Image from "next/image";

function Footer() {
  return (
    <Container>
      <div className="footer__content">
        <div className="footer__options">
          <Image
            alt="footer"
            src="/sonyLogo.png"
            width={184.5}
            height={106.5}
          />
          <div className="footer__spiders">
            <Image alt="miles" src="/miles.png" width={160} height={263} />

            <Image
              alt="spiderman"
              src="/spiderman.png"
              width={160}
              height={263}
            />

            <Image alt="gwen" src="/gwen.png" width={160} height={263} />
          </div>
          <Image
            className="footer__button"
            alt="button"
            src="/button.png"
            width={205}
            height={72}
          />
        </div>
      </div>
    </Container>
  );
}

export default Footer;
