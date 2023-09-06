"use client"
// import { useRouter } from 'next/navigation'
import { useRouter, useParams, usePathname, useSearchParams } from 'next/navigation';

import React, { useCallback, useState, useEffect } from 'react'
// import Sidemenu from "./sidemenu";
import axios from 'axios';
import 'styles/board_search.css'
import Link from 'next/link';
import { getBoardList_axios } from '../../../../common/httpconnect/axios';


type Props = {}


export default function chkBoard({ }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [BoardList, setBoardList]: any = useState([]);

    //component가 처음 생성될때만 실행되도록 함.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        function callback(type: boolean, message: any) {
            console.log(message);
            setBoardList(message.result.items);
        }

        //첫 실행 : 보드 정보 불러오기 
        getBoardList_axios(callback);

        // console.log("CALL THE API...")
        // console.log(BoardList)

    }, []);

    return (
        <div className='middle_box'>
            {/* <currentName /> */}

            <div>manage2</div>



            <div className='list_json'>
                {BoardList.map((element: any, index: number) => (
                    // { index }
                    < div className='list_obj' key={index} >
                        <span className='nature_idx'>{element.idx}</span>
                        <span className='nature_temp'>{element.currentTemp}</span>

                        {/* <button className='move_btn' >이동</button> */}
                        {/* <button type="button" onClick={() => router.push('/management/chk_board/board_obj')}>
                            Dashboard
                        </button> */}
                        <Link
                            href={{
                                pathname: `/management/user/manage2/${element.idx}`, // 라우팅 id
                                // query: { currentName: JSON.stringify(post) }, // props 
                                query: {
                                    num: `${index}`,
                                },
                            }}
                        // as={`/management/chk_board/`} //url에 표시할 query
                        >이동</Link>
                    </div>
                ))}
            </div>
        </div>

    )
}