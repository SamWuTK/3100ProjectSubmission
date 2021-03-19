class User{
    constructor(id,name,email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.loyaltyPoint = 0;
        this.numberOfPrivateChannel = 0;
    }

    uploadFile(name){
        //uploadFile
    }

    updateLoyaltyPoint(){
        // add or subtract the Loyalty point
    }

    searchFile(){
        // searchFile from database
    }

    requestFile(){
        // request a file
    }

    commentFile(){
        // make a comment to a file
    }

    ratingFile(){
        //rating a File
    }

    createPrivateChannel(){
        //Create a Private Channel
    }

    modifyProfile(name,email){
        // update information
        if(0/*averable*/) {
            this.name = name;
            this.email = email;
        } else {
         alert("Modify unsuccessful")
        }
    }

}