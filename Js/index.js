const init = () =>{
    var firebaseConfig = {
        apiKey: "AIzaSyC3ePLhE2qAoFopC5bHtR_-rYVJErvk3_s",
        authDomain: "chatapp-48385.firebaseapp.com",
        databaseURL: "https://chatapp-48385.firebaseio.com",
        projectId: "chatapp-48385",
        storageBucket: "chatapp-48385.appspot.com",
        messagingSenderId: "273891999728",
        appId: "1:273891999728:web:c1a8f171138854d1f3a735"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log(firebase.app().name)
      // firestoreFuntion()
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          if (user.emailVerified) {
            model.currentUser = {
              displayName: user.displayName,
              email: user.email
            }
            view.setActiveScreen('chatScreen')
          } else {
            view.setActiveScreen('loginScreen')
            alert('Please verify your email')
          }
        } else {
          view.setActiveScreen('loginScreen')
        }
      })
    }
    window.onload = init 

// firestoreFuntion = async ()=>{
//   // get one document
//   const documentId='2vC7Y54KKRrqqARrVuIT'
//   const respone = await firebase.firestore().collection('users').doc(documentId).get()
//   const user = getDataFromDoc(respone)
//   // user.id = respone.id
//   console.log(user)
//   // get many document
//   const respone2 = await firebase.firestore().collection('users').get()
//   // console.log(respone2)
//   const listUser = getDataFromDocs(respone2.docs)
//   console.log(listUser)
//   console.log(getDataFromDoc(respone2.docs[1]))
//   // add document 
//   // const userToAdd = {
//   //   name : 'ABC',
//   //   age :23,
//   //   email :'fjdlaj@gmail.com'
//   // }
//   // firebase.firestore().collection('users').add(userToAdd)
//   // update document
//   documentIdUpdate ='sqXxTn0ae9yOVMrPRj9e'
//   const dataToUpdate = {
//     age:29,
//     email:'Manhthuy241@gmail.com',
//     phoneNumber : firebase.firestore.FieldValue.arrayUnion('091')
//   }
//   firebase.firestore().collection('users').doc(documentIdUpdate).update(dataToUpdate)
//   // delete document
//   const documentToDelete = 'YeQmU80tAweE0PKlE4ef'
//   firebase.firestore().collection('users').doc(documentToDelete).delete()

// }
getDataFromDoc =(doc)=>{
  const data =doc.data()
  data.id =doc.id
  return data
}
// getDataFromDocs=(docs)=>{
//    return listData = docs.map(item=>getDataFromDoc(item))
//   // for (let index = 0; index < docs.length; index++) {
//   //   const element = getDataFromDoc(docs[index]);
//   //   listData.push(element)
    
//   // }
//   //return listData

// }
