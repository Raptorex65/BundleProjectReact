Upload Multiple Files 
// Then, loop through the files object, which is a FileList object not an actual JavaScript array. 
// So I am using for of to iterate over and upload it to the Cloud Storage.
//forEach() won’t work as they are not an acutal array 

<input type="file" onchange="uploadMultipleImages(e)" multiple />

function uploadMultipleImages(e) {
  let files = e.target.files;

  for (const file of files) {
    firebase
      .storage()
      .ref('images')
      .child(file.name)
      .put(file);
  }
}

Alternatif fakat daha dolambacli bir yol

const UploadPictures = () => {  

const [image, setImage] = useState(null);
const [allImages, setImages] = useState([]);
//Initialize an array called allImages. This array will hold all the image URLs retrieved from Firebase.
const onImageChange = (e) => {

    const reader = new FileReader();
    let file = e.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(file);
          setImage(file);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    // if there is no file, set image back to null
    } else {
      setImage(null);
    }
  };


 const uploadToFirebase = () => {
    if (image) {
      const postId = uuid();
      const storageRef = storage.ref('images/').child(postId);
      const imageRef = storageRef.child(image.name);
      imageRef.put(image)
     .then((url) => {
            if (allImages.indexOf(url) < 0) {
              setImages((allImages) => [...allImages, url]);
              console.log(allImages);
              alert("Image uploaded successfully to Firebase.");
          }
      });
    } else {
      alert("Please upload an image first.");
    }
  };

<Form>
  <Row className="mb-3">
      <Col xs="auto">
  <Form.Group  controlId="formFileMultiple" >
    <Form.Label></Form.Label>
    <Form.Control type="file" accept="image/x-png,image/jpeg" multiple 
    onChange={onImageChange}/>
  </Form.Group>
  </Col>
  
    <Col xs="auto">
<Form.Group controlId="formButton" >
  <Button  variant="info" onClick={(image)=>uploadToFirebase(image)}>
      Upload Pictures
    </Button>
  </Form.Group>
  
</Col>

</Row>
</Form>

//----------------------------------//

Get An Image URL
// The getDownloadURL() method will return a promise, 
// and the actual file URL will be returned to the then() callback function specified in the parameter imgUrl.
firebase
  .storage()
  .ref('images/golden-retriever.jpg')
  .getDownloadURL()
  .then(imgUrl => {
    console.log(imgUrl);
  });

//----------------------------------//
Get All Images
// The listAll() method will get all the file URLs in a given location path.
// Inside the then() callback function, loop through the items array on the snapshot object.
// Then, call getDownloadURL() method on the itemRef object which returns the actual file URLs 
//inside the then() callback function again specified in the parameter imgUrl.
firebase
    .storage()
    .ref('images')
    .listAll()
    .then(snap => {
      snap.items.forEach(itemRef => {
        itemRef.getDownloadURL().then(imgUrl => {
          console.log(imgUrl)
        });
      })
    })

REMOVE
// database.ref("title")
//     .remove()
//     .then(() => {
//         console.log('title silindi.')
//     }).catch((e) => {
//         console.log(e);
//     });

// database.ref("author/name")
//     .remove()
//     .then(() => {
//         console.log('title silindi.')
//     }).catch((e) => {
//         console.log(e);
//     });

Referans objesini komple kaldirmak icin
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('bilgi silindi.')
//     }).catch((e) => {
//         console.log(e);
//     });

VERI OKUMA 
Once metodunda veriyi bir kere okuruz ve db ile baglantimiz kopar
once metoduna tanimlanmis olan value eventi araciligiyla datayi aliyoruz
// database.ref()
//     .once("value") // on
//     .then((snapshot) => {
//         const blog = snapshot.val();
//         console.log(blog);
//     })
//     .catch((e) => {
//         console.log('okuma hatası: ', e);
//     })

On ile veriyi her degisiklikte takip ederek degisikligi okumasi icin kullaniriz
database.ref().on("value", (snapshot) => {
    const blog = snapshot.val();
    console.log(blog);
});


setTimeout(() => {
    database.ref("title").set("updated blog title 1");
}, 3000);

//Baglantiyi koparmak icin
setTimeout(() => {
    database.ref().off();
}, 6000);

Products dizinine veri eklemek icin[otomatik olarak bir id ile klasor olusturarak]
database.ref("products").push({
    name: "Samsung S5",
    price: 3000,
    isApproved: false
});

`child_removed, child_changed ve child_added` tanimli metodlari ile degisiklikleri 
takip edebiliriz
database.ref("products").on("child_removed", (snaphot) => {
    console.log(snaphot.key, snaphot.val());
})

database.ref("products").on("child_changed", (snaphot) => {
    console.log(snaphot.key, snaphot.val());
})

database.ref("products").on("child_added", (snaphot) => {
    console.log(snaphot.key, snaphot.val());
})
