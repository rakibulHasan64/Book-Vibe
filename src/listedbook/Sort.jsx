import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from "../ulites/addTo";
import ReadItem from "./ReadItem";
import { ClipLoader } from "react-spinners";

function Sort() {
   const [redata, setRedata] = useState([]);
   const [short, setShort] = useState("");
   const data = useLoaderData();
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const storeredBookDta = getStoreBook();
      const conbartSoteBook = storeredBookDta?.map(id => parseInt(id));
      const myReadList = data.filter(book => conbartSoteBook.includes(book.bookId));
      setRedata(myReadList);
   }, [data]);


   if (redata.length === 0) {
      return (
         <div className="flex justify-center items-center min-h-screen">
            {/* ClipLoader spinner from react-spinners */}
            <ClipLoader color="#23BE0A" loading={true} size={50} />
         </div>
      );
   }

   const handleShort = (type) => {
      setShort(type);

      let sortedData = [...redata];

      if (type === "bookName") {
         sortedData.sort((a, b) => a.bookName.localeCompare(b.bookName));
      } else if (type === "author") {
         sortedData.sort((a, b) => a.author.localeCompare(b.author));
      } else if (type === "yearOfPublishing") {
         sortedData.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      } else if (type === "rating") {
         sortedData.sort((a, b) => b.rating - a.rating); // High to low rating
      }

      setRedata(sortedData);
      setIsOpen(false);
   };


   return (
      <div className="container mx-auto py-10">
         <div className="h-[100px] flex items-center justify-center text-[28px] rounded-2xl font-bold bg-[#131313]/5 text-center">
            Books: {redata.length}
         </div>

         {/* Dropdown Start */}
         <div className="relative text-center py-8 flex items-center justify-center">
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="flex items-center rounded-md justify-center py-3 px-5 bg-[#23BE0A] text-[18px] font-semibold text-white gap-2"
            >
               Sort By <ChevronDown />
            </button>

            {isOpen && (
               <div className="absolute top-20 bg-white shadow-md rounded-md w-40 z-10 text-left">
                  <div className="px-4 py-2 font-semibold">Sort by:</div>
                  <div onClick={() => handleShort('bookName')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Name</div>
                  <div onClick={() => handleShort('author')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Author</div>
                  <div onClick={() => handleShort('yearOfPublishing')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Year</div>
                  <div onClick={() => handleShort('rating')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rating</div>
               </div>
            )}
         </div>
         {/* Dropdown End */}

         {/* Tabs Start */}
         <Tabs>
            <TabList>
               <Tab>All</Tab>
               <Tab>Fantasy</Tab>
               <Tab>Fiction</Tab>
               <Tab>Classic</Tab>
            </TabList>

            {/* All Books */}
            <TabPanel>
               <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                  {redata.map(book => (
                     <ReadItem key={book.bookId} book={book} />
                  ))}
               </div>
            </TabPanel>

            {/* Fantasy */}
            <TabPanel>
               <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                  {redata.filter(book => book.category === "Fantasy").map(book => (
                     <ReadItem key={book.bookId} book={book} />
                  ))}
               </div>
            </TabPanel>

            {/* Fiction */}
            <TabPanel>
               <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                  {redata.filter(book => book.category === "Fiction").map(book => (
                     <ReadItem key={book.bookId} book={book} />
                  ))}
               </div>
            </TabPanel>

            {/* Classic */}
            <TabPanel>
               <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                  {redata.filter(book => book.category === "Classic").map(book => (
                     <ReadItem key={book.bookId} book={book} />
                  ))}
               </div>
            </TabPanel>
         </Tabs>
         {/* Tabs End */}
      </div>
   );
}

export default Sort;
