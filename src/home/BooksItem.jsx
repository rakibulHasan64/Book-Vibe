import { Link } from "react-router";

function BooksItem({ item }) {
   const {
      bookName,
      author,
      image,
      category,
      rating,
      tags,
   } = item;

   
   

   return (
      <Link to={`/data/${item.bookId}`}>


         
         <div className="border border-[#131313]/15 rounded-2xl shadow-md bg-white hover:shadow-xl transition duration-300">
            <div className="p-6">

               {/* Image Box */}
               <div className="bg-[#F3F3F3] rounded-xl py-12 flex items-center justify-center">
                  <img className="h-32 object-contain" src={image} alt={bookName} />
               </div>

               {/* Tags */}
               <div className="flex flex-wrap gap-3 mt-6 font-sans">
                  {tags?.map((tag, index) => (
                     <span
                        key={index}
                        className="py-1.5 px-4 text-sm bg-[#23BE0A]/10 text-[#23BE0A] rounded-full"
                     >
                        {tag}
                     </span>
                  ))}
               </div>

               {/* Title & Author */}
               <div className="mt-5 py-3 space-y-1 border-b border-dashed border-gray-300">
                  <h3 className="text-xl font-semibold text-gray-800">{bookName}</h3>
                  <p className="text-sm text-gray-500">By: {author}</p>
               </div>

               {/* Category & Rating */}
               <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-gray-600">{category}</span>
                  <span className="text-sm font-semibold text-yellow-500">⭐ {rating}</span>
               </div>
            </div>
         </div>
      </Link>
   );
}

export default BooksItem;
