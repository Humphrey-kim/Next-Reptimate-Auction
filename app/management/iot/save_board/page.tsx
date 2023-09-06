"use client"
// import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { title } from 'process';
// import Sidemenu from "./sidemenu";
import axios from 'axios';
import Button from '../../../../components/button';

type Props = {}


// const params = {
//     page: 1,
//     size: 20,
//     order: "DESC",
//     boardIdx: 66,
//     sensor: "default",
//     date: "2023-05-07",
// };

//보드 리스트, 보드 자연 변수 불러오기
// async function getPostsData(): Promise<{ id: number; body: string; title: string }[]> {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     // return response.json();

//     const response = await axios.get('https://www.reptimate.store/iotpersonal/naturelist', {
//         params,
//         headers: { // 요청 헤더
//             'Content-Type': 'application/json',
//             'Authorization': token
//         },
//     });
//     return response.data;
// }

//보드 인증 시리얼 번호 추가하기
// async function createAuthInfo(): Promise<{ id: number; body: string; title: string }[]> {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     // return response.json();

//     const response: any = axios({
//         url: 'http://localhost:3001/iotpersonal/creat_serialboard',
//         method: 'post',
//         headers: { // 요청 헤더
//             'Content-Type': 'application/json',
//             'Authorization': token
//         },
//     })
//     return response;
// }

// 자식 전달 받는 부분
// const parentFunction = (x: boolean) => {
//     console.log("x");
//     console.log(x);
// };



function Heading(props: any) {
    const variable = "red";
    return (
        <div className="title">
            <h1>{props.heading}</h1>
            <style jsx>
                {`
            h1 {
              color: ${variable};
            }
          `}
            </style>
        </div>
    );
}



//{ }: Props
export default function SaveBoard({ }: Props) {
    const [BoardSerial, setBoardSerial] = useState("");
    const [BoardTempname, setBoardTempname] = useState("");

    // let boardSerial: string = "-";
    // let boardTempname: string = "-";

    function callback(type: boolean, message: any) {
        // alert(type);
        // alert(message);
        // alert("성공적");
        // console.log(type);
        // console.log(message);
        // console.log(message.result.boardSerial);
        // console.log(message.result.boardTempname);

        // boardSerial = message.result.boardSerial;
        // boardTempname = message.result.boardTempname;

        // alert(boardSerial);
        // alert(boardTempname);
        setBoardSerial(message.result.boardSerial);
        setBoardTempname(message.result.boardTempname);

    }

    // posts.map((element, index) => (
    //     <div key={index}>{index}</div>
    //     // console.log(index);
    // ));

    // const updateSearchParams = (newData: string) => {
    //     const params = new URLSearchParams();
    //     params.set('data', newData);

    //     router.push(`?${params.toString()}`);
    // };

    // const create_serial_board = (newData: string) => {

    //http 통신 
    // axios.get('/api/todos')
    // .then(res => {
    //   console.log(res.data)
    // })

    // axios.get('https://www.reptimate.store/iotpersonal/boardlist').then(response => {
    //     console.log(response.data);
    // });


    // const params = new URLSearchParams();
    // params.set('data', newData);

    // router.push(`?${params.toString()}`);
    // };

    // const createQueryString = useCallback(
    //     (name: string, value: string) => {
    //         const params = new URLSearchParams(searchParams);
    //         params.set(name, value);

    //         return params.toString();
    //     },
    //     [searchParams],
    // );


    return (

        <div className='middle_box'>

            <div className='title_box'>
                등록하기

                {/* {boardlist[0].idx} */}
                {/* {boardlist.map((element: any, index: number) => (
                    <div key={index}>{element.currentHumid}</div>
                ))} */}
            </div>



            <div className='form_box'>
                <div className='input_docu'>
                    {/* <Heading heading="heading" /> */}
                    <div className='title'>보드 이름</div>

                    <input type="text" value={BoardSerial} disabled />
                </div>

                <div className='input_docu'>
                    <div className='title'>시리얼 넘버</div>
                    <input type="text" value={BoardTempname} disabled />
                </div>
                {/* </div> */}
            </div>

            <div className='button_box'>

                <Button name="등록" callback={callback} />


                {/* <button type="button"
                    // onClick={() => router.push(
                    //     '/management/chk_board' + "?" + createQueryString('title', post.title),
                    // )}
                    onClick={() => createAuthInfo()}
                > */}


                {/* <button
                    type="button"
                    onClick={() => {
                        router.push({
                            pathname: '/post/[pid]',
                            query: { pid: post.id },
                        });
                    }}
                > */}



                {/* <Link href="/about"
                        onClick={handleClick("/about")}
                    >등록</Link> */}

                {/* <Link
                        href={{
                            pathname: `/management/chk_board`, // 라우팅 id
                            // query: { currentName: JSON.stringify(post) }, // props 
                            query: {
                                title: post.title,
                            },
                        }}
                        as={`/management/chk_board`} //url에 표시할 query
                    >등록</Link> */}

                {/* 등록
                </button> */}
            </div>
        </div>
    )
}
    // export default Management