import { useEffect, useState } from "react";
import BooksItem from "./BooksItem";
import { ClipLoader } from "react-spinners";



function Book() {


   const [book, setBook] = useState([]);


   

   useEffect(() => {
      fetch("/data.json")
         .then((res) => res.json())
         .then((data) => setBook(data))
   }, []);


   if (book.length === 0) {
      return (
         <div className="flex justify-center items-center min-h-screen">
            {/* ClipLoader spinner from react-spinners */}
            <ClipLoader color="#23BE0A" loading={true} size={50} />
         </div>
      );
   }





   return (
      <>
         
         <div className="py-28 px-4 md:px-12 lg:px-20 ">
            {/* Section Heading */}
            <h3 className="text-center text-[32px] md:text-[40px] font-playfair text-gray-800">
               Book
            </h3>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
               {/* Book Card */}


               {book.map((item) => <BooksItem key={item.bookId} item={item} />)}

            </div>
         </div>

         
      </>
   );
}

export default Book;



// 0
// :
// author
// :
// "F. Scott Fitzgerald"
// bookId
// :
// 1
// bookName
// :
// "The Great Gatsby"
// category
// :
// "Classic"
// image
// :
// "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
// publisher
// :
// "Scribner"
// rating
// :
// 4.5
// review
// :
// "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
// tags
// :
// (2)['Fiction', 'Romance']
// totalPages
// :
// 192
// yearOfPublishing
// :
// 1925