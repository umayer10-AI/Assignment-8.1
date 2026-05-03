"use client"
import React from 'react';

const Btn = () => {
    return <button onClick={() => alert("Confirm!")} className="mt-6 px-6 py-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition">
            Borrow This Book
          </button>
};

export default Btn;