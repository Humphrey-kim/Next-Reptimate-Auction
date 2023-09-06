"use client"
// import { useRouter } from 'next/navigation'
import { useRouter, useParams, usePathname, useSearchParams } from 'next/navigation';

import React, { useCallback, useState, useEffect } from 'react'
// import Sidemenu from "./sidemenu";
import axios from 'axios';
import 'styles/board_search.css'


type Props = {}


export default function chkBoard({ }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const useparams = useParams();
    console.log(useparams.board_obj);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const searchParams = useSearchParams();
    console.log(searchParams.get("num"));


    return (
        <div className='middle_box'>
            {/* <currentName /> */}

            <div>보드 obj</div>

            <div className='list_json'>
                {useparams.board_obj}
            </div>
        </div>

    )
}