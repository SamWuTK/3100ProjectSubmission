firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        // User is signed in.
        alert("success");
    } else {
        // No user is signed in.
        alert("fail");
    }
});

var System = {
    numberOfUser: 0,
    numberOfAdministrator: 0,
    numberOfPublicChannel: 0,

    createUsers: function (){
        // create user
    },
    createAdministrator: function (){
        // create Administrator
    },
    userLogin: function(userID,userPassword){
        var userEmail = document.getElementById("userEmail").value;
        var userPassword = document.getElementById("userPassword").value;

        alert(userEmail + " " + userPassword);

    }
}
