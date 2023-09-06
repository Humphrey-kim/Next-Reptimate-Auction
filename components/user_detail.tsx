"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { createAuthInfo_axios } from '../common/httpconnect/axios';

// const User_detail = (props: any) => {
function User_detail(props: any) {
    // props.parentFunction(buttonResult);

    function changeParent() {
        console.log(123123);
    }

    return (
        <div className='list_json'>
            {props.data.map((element: any, index: number) => (
                < div className='list_obj' key={index} >
                    <span className='nature_idx'>{element.idx}</span>
                    <span className='nature_temp'>{element.currentTemp}</span>

                    <span className='nature_temp' onClick={changeParent}>이동</span>

                </div>
            ))}
        </div>
    );
};

export default User_detail;