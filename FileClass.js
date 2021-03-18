class FileClass{
    constructor(id,title,content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.loyaltyPoint = 0;
        this.status = 0; // 0 = private | 1 = public
        this.comment = [];
        this.like = 0;
        this.dislike = 0;
    }

    readFileContent(){
        // show file data
    }

    updateLoyaltyPoint(newPoint){
        this.loyaltyPoint = newPoint;
    }

    displayResultOfUpload(){
        if(1/*data in database*/){
            alert("Upload Successful");
        } else {
            alert("Upload Unsuccessful");
        }
    }

    displayTitle(){
        //Display Title
    }

    displayComment(){
        //Display Comment
    }

    displayRating(){
        //Display Rating
    }
}

class PrivateFile{
    constructor(id,title,content) {
        this.id = id;
        this.title = title;
        this.content = content
    }
    displayResultOfUpload(){
        //display Result Of Upload
    }
    displayTitle(){
        //display Title
    }
    readFileContent(){
        // read File Content
    }
}