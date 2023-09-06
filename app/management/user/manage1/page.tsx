"use client"
// import axios from 'axios';
import 'styles/board_search.css'
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// import { getServerSideProps } from '../../../../common/httpconnect/server_axios';
// import User_detail from '../../../../components/user_detail';


type Props = {}

type Props_data2 = {
    idx: number,
    currentTemp: number,
    currentHumid: number
    currentTemp2: number
    currentHumid2: number
    type: number
}


export default async function chkBoard({ }: Props) {
    let data: Props_data2;



    //데이터 받아오는 부분
    function callback(message: Props_data2): void {

        // console.log("111111!!!");
        // // console.log(type);
        // console.log(message);
        console.log(message);
        // console.log("111111!!!");

        data = message;
    }

    //서버 사이드 렌더링으로 데이터 가져오기
    // await getServerSideProps(callback);

    return (
        <div className='middle_box'>
            {/* <currentName /> */}

            <div>manage1</div>
            {/* <div onClick={changeChild}>부모버튼</div> */}


            {/* <User_detail data={data2} /> */}


            {/* <div className='list_json'>
                {data.map((element: Props_data2, index: number) => (
                    < div className='list_obj' key={index} >
                        <span className='nature_idx'>{element.idx}</span>
                        <span className='nature_temp'>{element.currentTemp}</span>
                        {index}
                    </div>
                ))}
            </div> */}
        </div>

    )
}