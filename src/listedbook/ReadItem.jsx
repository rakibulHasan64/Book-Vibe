function ReadItem({ book }) {
   // const { bookName, author, image, rating, category } = book;

   return (
      <div
         className={`flex w-full  p-4 border gap-10 rounded-xl shadow-sm  border-blue-50"
            }`}
      >
         <img src={book.image} alt={book.title} className="w-24   h-42 object-cover rounded" />
         <div className="flex flex-col justify-between">
            <div>
               <h2 className="text-lg font-semibold">{book.bookName}</h2>
               <p className="text-sm text-gray-700">
                  By : <span className="font-medium">{book.author}</span>
               </p>
               <div className="flex flex-wrap gap-2 mt-2 text-sm">
                  {book.tags.map((tag, i) => (
                     <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded">
                        #{tag}
                     </span>
                  ))}
               </div>
               <div className="flex gap-3 mt-2 text-sm text-gray-600">
                  <span>📅 Year of Publishing: {book.year}</span>
                  <span>🏢 Publisher: {book.yearOfPublishing}</span>
                  <span>📄 Page: {book.totalPages}</span>
               </div>
            </div>

            <div className="flex items-center justify-between mt-4">
               <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  Category: {book.category}
               </span>
               <span className="text-sm text-orange-500 font-semibold">
                  ⭐ Rating: {book.rating}
               </span>
      

                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                     View Details
                  </button>
         
            </div>
         </div>
      </div>
   );
}

export default ReadItem;
