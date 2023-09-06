import Link from "next/link";
import React from "react";
import Image from 'next/image';
import reptimate from './image/reptimate.png';
import 'styles/header.css'
import message_btn from './image/menu_btn.png';

type Props = {};

function Header({ }: Props) {
    return (
        <header className="fixed flex h-24 bg-white top-0 left-0 right-0 z-10 p-2">
            <Link href="/" className="rounded">
                <div className="header_log">
                    <Image
                        src={reptimate}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                    <span className="menu1">REPTIMATE</span>
                </div>
            </Link>
            <nav></nav>
            <nav className="lg_min:flex lg_max:hidden">
                <Link href="/" className="rounded">
                    <div className="menu p-5 text-black">COMMUNITY</div>
                </Link>
                <Link href="/action" className="rounded">
                    <div className="menu p-5 text-black">AUCTION</div>
                </Link>
                <Link href="/management" className="rounded">
                    <div className="menu p-5 text-black">MY</div>
                </Link>
            </nav>

            <nav className="lg_min:hidden lg_max:flex">

                <Image
                    src={message_btn}
                    width={40}
                    height={40}
                    alt="send message"
                    className='m-auto py-[9px]'
                />
            </nav>
            {/* <button className="header_logout">로그아웃</button> */}
        </header>
    );
}

export default Header;