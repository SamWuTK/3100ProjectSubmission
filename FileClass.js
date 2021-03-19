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

    readFileContent(doc){
        // show file data
        const fileList = document.querySelector('#fileList');
        let li = document.createElement('li');
        let topic = document.createElement('span');
        let like = document.createElement('span');
        let comment = document.createElement('content');

        li.setAttribute('data-id', doc.id);
        topic.textContent = doc.data().topic;
        like.textContent = doc.data().like

        li.appendChild(topic);
        li.appendChild(like);
        fileList.appendChild(li);

        // getting data
        db.collection('publicFile').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                this.readFileContent(doc);
            });
        });
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
