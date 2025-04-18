import { Link } from "react-router";


function Nver() {
   return (
      <>
         <div className="container mx-auto py-4">
            <div className="flex items-center justify-between">
               <h3 className="text-2xl font-Playfair">Book Vibe</h3>

               <div className="">
                  <ul className="flex justify-between items-center text-xl  gap-10">
                     <Link to={'/home'}>
                        <li className="py-2 px-4 rounded-md hover:border hover:text-[#23BE0A] hover:border-[#23BE0A]">Home</li></Link>
                     <Link to={'/about'}>
                        <li className="py-2 px-4 rounded-md hover:border hover:text-[#23BE0A] hover:border-[#23BE0A]">Listed Books</li>
                     </Link>
               
                     <Link to={"/data"}>
                        <li className="py-2 px-4 rounded-md hover:border hover:text-[#23BE0A] hover:border-[#23BE0A]">Pages to Read</li>
                     </Link>
                     
                     
                     
                     

                  </ul>
               </div>

               <div className="flex items-center gap-5 font-Playfair">
                  <Link to={'/logine'}><button className="py-2 px-4 rounded-md text-white bg-[#23BE0A]">Sign In</button></Link>
                  <Link to={"/register"}><button className="py-2 px-4 rounded-md text-white bg-[#59C6D2]">Sign Up</button></Link>
               </div>

            </div>
         </div>
         
      </>
   );
}

export default Nver;