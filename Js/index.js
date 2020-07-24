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
    console.log('window onloaded')
    view.setActiveScreen('registerScreen')
    view.setActiveScreen('loginScreen')
    view.setActiveScreen('chatScreen')
}
window.onload = init
