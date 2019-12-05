const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
 var newPost = snapshot.val();
});
function send(){
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email= document.getElementById("email").value;
    var phone = document.getElementById("tel").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;
    detailsRef.push().set({
    Name: name,
    lname: lname,
    Email: email,
    tel: phone,
    password: password,
    Message: message
  });
  }