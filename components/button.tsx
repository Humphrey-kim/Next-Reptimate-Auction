"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { createAuthInfo_axios } from '../common/httpconnect/axios';

const Button = (props: any) => {
  // props.parentFunction(buttonResult);

  return (
    <button onClick={() => createAuthInfo_axios(props.callback)}>
      {props.name}
    </button>
  );
};

export default Button;