import { useLoaderData, useParams } from "react-router";
import {
   BookOpen,
   Calendar,
   Star,
   FileText
} from "lucide-react";
import { addToStoreDB } from "../ulites/addTo";
import Swal from "sweetalert2";



function SingleBook() {
   const { id } = useParams();
   const bokid = parseInt(id);
   const data = useLoaderData();

   const singleBook = data.find((book) => book.bookId === bokid);

   if (!data || data.length === 0) {
      return <div className="text-center py-24">Loading book data...</div>;
   }

   if (!singleBook) {
      return <div className="text-center py-24">Book not found.</div>;
   }

   const {
      bookName,
      author,
      image,
      category,
      rating,
      totalPages,
      tags,
      review,
      publisher,
      yearOfPublishing,
   } = singleBook;

   const handleMarkRead = (id) => {
      addToStoreDB(id);  
      Swal.fire({
         title: "Good job!",
         text: "You clicked the button!",
         icon: "success"
      });
   }

   return (
      <div className="container mx-auto py-24 px-6 lg:px-12">
         <div className="flex flex-col lg:flex-row justify-between items-start gap-12 ">
            {/* Book Image */}
            <div className="bg-[#131313]/5 rounded-2xl p-6 w-full lg:w-[45%] flex justify-center">
               <img
                  className="h-[500px] object-contain rounded-xl"
                  src={image}
                  alt={bookName}
               />
            </div>

            {/* Book Info */}
            <div className="w-full lg:w-[55%]">
               <h3 className="text-[32px] lg:text-[40px] font-Playfair font-bold text-gray-900">
                  {bookName}
               </h3>
               <p className="text-[20px] font-Playfair text-black border-b border-[#131313]/15 py-4">
                  By: {author}
               </p>
               <p className="text-[18px] text-gray-700 border-b border-[#131313]/15 py-4">
                  Category: <span className="font-semibold">{category}</span>
               </p>

               <p className="text-[16px] text-gray-700 mt-6 leading-7">
                  <span className="font-bold">Review:</span> {review}
               </p>

               {/* Tags */}
               <div className="flex flex-wrap gap-3 mt-6 font-sans border-b border-[#131313]/15 py-5">
                  <h3 className="text-[16px] text-black font-bold">Tags:</h3>
                  {tags?.map((tag, index) => (
                     <span
                        key={index}
                        className="py-1 px-3 text-sm bg-green-100 text-green-600 rounded-lg border border-green-300"
                     >
                        #{tag}
                     </span>
                  ))}
               </div>

               {/* Details with Icons */}
               <ul className="space-y-4 mt-10 text-gray-700">
                  <li className="flex items-center gap-4">
                     <FileText className="w-5 h-5 text-gray-400" />
                     <span>Number of Pages:</span>
                     <p className="font-bold text-black">{totalPages}</p>
                  </li>
                  <li className="flex items-center gap-4">
                     <BookOpen className="w-5 h-5 text-gray-400" />
                     <span>Publisher:</span>
                     <p className="font-bold text-black">{publisher}</p>
                  </li>
                  <li className="flex items-center gap-4">
                     <Calendar className="w-5 h-5 text-gray-400" />
                     <span>Year of Publishing:</span>
                     <p className="font-bold text-black">{yearOfPublishing}</p>
                  </li>
                  <li className="flex items-center gap-4">
                     <Star className="w-5 h-5 text-gray-400" />
                     <span>Rating:</span>
                     <p className="font-bold text-black">{rating}</p>
                  </li>
               </ul>

               {/* Buttons */}
               <div className="flex items-center gap-6 mt-10">
                  <button onClick={() => handleMarkRead(id)} className="bg-[#23BE0A] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1a9907] transition">
                     Read Now
                  </button>
                  <button className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e5c200] transition">
                     Add to Wishlist
                  </button>
               </div>
            </div>
         </div>

      
      </div>
   );
}

export default SingleBook;


