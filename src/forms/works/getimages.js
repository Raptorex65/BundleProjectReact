import React, {useState} from 'react'

const [allImages, setImages] = useState([]);

const getFromFirebase = () => {
    //1.
    let storageRef = storage.ref();
    //2.
    storageRef.listAll().then(function (res) {
        //3.
        res.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
              //4.
              setImages((allImages) => [...allImages, url]);
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

return (
 <div id="photos">
     {allImages.map((image) => {
        return (
           <div key={image} className="image">
              <img src={image} alt="" />
           </div>
         );
     })}
</div>
)
    }
export default getFromFirebase