"use client"
// import { useRouter } from 'next/navigation'
import { useRouter, useParams, usePathname, useSearchParams } from 'next/navigation';

import React, { useCallback, useState, useEffect } from 'react'
// import Sidemenu from "./sidemenu";

import { getBoardList_axios } from '../../../../common/httpconnect/axios';
import 'styles/board_search.css'
import Link from 'next/link';


//보드 리스트, 보드 자연 변수 불러오기
// async function getPostsData(): Promise<{ id: number; body: string; title: string }[]> {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     // return response.json();


//     const params = {
//         page: 1,
//         size: 20,
//         order: "DESC",
//         boardIdx: 66,
//         sensor: "default",
//         date: "2023-05-07",
//     };

//     const response = await axios.get('https://www.reptimate.store/iotpersonal/naturelist', {
//         params,
//         headers: { // 요청 헤더
//             'Content-Type': 'application/json',
//             'Authorization': token
//         },
//     });
//     return response.data;
// }

type Props = {}


export default function chkBoard({ }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [BoardList, setBoardList]: any = useState([]);

    // let boardList: any;
    function callback(type: boolean, message: any) {
        // alert(type);
        // alert(message);
        // alert("성공적");
        // console.log(type);
        console.log(message);
        // console.log(message.result.items);
        // console.log(message.result.boardSerial);
        // console.log(message.result.boardTempname);

        // boardSerial = message.result.boardSerial;
        // boardTempname = message.result.boardTempname;

        // alert(boardSerial);
        // alert(boardTempname);
        // setBoardSerial(message.result.boardSerial);
        // setBoardTempname(message.result.boardTempname);


        // boardList = message.result.items;
        setBoardList(message.result.items);

        // console.log(boardList);

        // const listItems = boardList.map((number: string, idx: number) => {
        //     console.log(idx);
        // });
    }



    //component가 처음 생성될때만 실행되도록 함.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        //첫 실행 : 보드 정보 불러오기 
        getBoardList_axios(callback);

        // console.log("CALL THE API...")
        // console.log(BoardList)

    }, []);

    // const pathname = usePathname();
    // const searchParams = useSearchParams();
    // const params = useParams();
    // const router = useRouter();

    // console.log("router");
    // console.log(pathname);
    // console.log(searchParams);
    // console.log(searchParams.get("title"));
    // console.log(searchParams.has("title"));
    // console.log(params);
    // console.log(router);


    // const { currentName } = router.query
    // const currentPost = JSON.parse(name)        
    return (
        <div className='middle_box'>
            {/* <currentName /> */}

            <div>보드 조회</div>



            {/* {boardList} */}
            {/* {BoardList[0]} */}
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
                                pathname: `/management/iot/chk_board/${element.idx}`, // 라우팅 id
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
        </div >

    )
}