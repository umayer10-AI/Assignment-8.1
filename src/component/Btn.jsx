"use client"
import React from 'react';
import { Flip, toast } from 'react-toastify';

const Btn = () => {

    const a = () => {
        toast.success('Confirm Successfull', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
        });
    }

    return <button onClick={a} className="mt-6 px-6 py-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition">
            Borrow This Book
          </button>
};

export default Btn;