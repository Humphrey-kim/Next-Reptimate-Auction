import Link from "next/link";
import React from "react";

type Props = {};

function Sidemenu({ }: Props) {


    return (
        <div className="sidemenu">
            {/* <div>menu1</div>
            <div>menu2</div>
            <div>menu3</div> */}

            <ul className="side_ul">
                <li className="list_obj obj1" >
                    <input id="check-btn1" type="checkbox" />
                    <label htmlFor="check-btn1">통계</label>
                </li>

                <li className="list_obj obj2" >
                    <input id="check-btn2" type="checkbox" />
                    <label htmlFor="check-btn2">회원관리</label>

                    <ul className="side_ul_obj2">
                        <li className="list_obj_obj2 obj2_1" >
                            <Link href="/management/user/manage1" className="rounded">
                                관리 1
                            </Link>
                        </li>
                        <li className="list_obj_obj2 obj2_2" >
                            <Link href="/management/user/manage2" className="rounded">
                                관리 2
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="list_obj obj3" >
                    <input id="check-btn3" type="checkbox" />
                    <label htmlFor="check-btn3">신고 관리</label>
                </li>

                <li className="list_obj obj4" >
                    <input id="check-btn4" type="checkbox" />
                    <label htmlFor="check-btn4">게시글 관리</label>
                </li>

                <li className="list_obj obj5" >
                    <input id="check-btn5" type="checkbox" />
                    <label htmlFor="check-btn5">IOT 관리</label>



                    <ul className="side_ul_obj5">
                        <li className="list_obj_obj5 obj5_1" >
                            <Link href="/management/iot/save_board" className="rounded">
                                보드 등록
                            </Link>
                        </li>
                        <li className="list_obj_obj5 obj5_2" >
                            <Link href="/management/iot/chk_board" className="rounded">
                                보드 조회
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>





            {/* <ul className="side_list">
                <li className="list_obj obj1" >
                    <Link href="/management" className="rounded px-4 py-2">
                        IOT 관리
                    </Link>
                </li>
                <li className="list_obj obj2" >
                    <Link href="/management/save_board" className="rounded px-4 py-2">
                        보드 등록
                    </Link>
                </li>
                <li className="list_obj obj3" >
                    <Link href="/management/chk_board" className="rounded px-4 py-2">
                        보드 조회
                    </Link>
                </li>
            </ul> */}

            {/* <button>
                <Link to="/management"> HOME </Link>
            </button>
            <button>
                <Link to="/management/page1"> ABOUT </Link>
            </button>
            <button>
                <Link to="/management/page2"> PRODUCTS </Link>
            </button> */}
        </div>
    );
}

export default Sidemenu;