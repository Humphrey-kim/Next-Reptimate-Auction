import Link from "next/link";
import React from "react";
import Image from 'next/image';
import reptimate from '../image/reptimate.png';

type Props = {};

function Header({ }: Props) {
    return (
        // <nav className="flex space-x-4 mb-2">
        <header>
            <Link href="/management" className="rounded">
                <div className="header_log">
                    <Image
                        src={reptimate}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                    <div className="log_title">REPTIMATE</div>
                </div>
            </Link>
            <nav></nav>
            <button className="header_logout">로그아웃</button>

        </header>
        // </nav >
    );
}

export default Header;