import Btn from '@/component/Btn';
import { getPost } from '@/lib/fetching';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const page = async ({params}) => {

    const {id} = await params
    const f = await getPost()
    const book = f.find(v => v.id === Number(id))
    console.log(book)

    return (
        <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={book.image_url}
            alt={book.title}
            width={500}
            height={500}
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl font-bold mb-3 bg-linear-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            {book.title}
          </h1>

          <p className="text-lg mb-2 text-gray-300">
            ✍️ Author: <span className="text-white">{book.author}</span>
          </p>

          <p className="text-sm mb-2">
            📚 Category:{" "}
            <span className="bg-blue-600 px-2 py-1 rounded text-xs">
              {book.category}
            </span>
          </p>

          <p className="text-sm mb-4">
            📦 Available:{" "}
            <span className="text-green-400">
              {book.available_quantity} copies
            </span>
          </p>

          <p className="text-gray-400 leading-relaxed">
            {book.description}
          </p>

          <Btn></Btn>
          <div className='mt-5'>
            <Link href={'/'}><Button className={'bg-linear-to-r from-orange-500 to-red-600'}><FaArrowLeftLong />Back</Button></Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default page;