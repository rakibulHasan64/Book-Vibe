
import Swal from "sweetalert2";

const getStoreBook = () => {
   const storeBookSTR = localStorage.getItem("readList");

   if (storeBookSTR) {
      const storedBookData = JSON.parse(storeBookSTR);
      return storedBookData;
   } else {
      return []
   }
}


const addToStoreDB = (id) => {
   const storedBookData = getStoreBook();

   if (storedBookData.includes(id)) {
      Swal.fire({
               title: "Bad job!",
               text: "You alredy the add!",
               icon: "success"
            });
   } else {
      storedBookData.push(id);
      const data = JSON.stringify(storedBookData)
      localStorage.setItem('readList', data)
   }
}

export { addToStoreDB,getStoreBook };