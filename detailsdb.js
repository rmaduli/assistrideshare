
  const dbRef = firebase.database().ref();
  const detailsRef = dbRef.child('details');
  detailsRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  });
  function send(){
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var message = document.getElementById("message").value;
    detailsRef.push().set({
    Name: name,
    Email: email,
    Message: message
  });
  }