class privateChannel{
    constructor(id,name) {
        this.id = id;
        this.name = name;
        this.titleList = [];
        this.inviteCode = id + Math.floor(Math.random() * 101);
    }

    addFile(){
        // addFile to private channel
    }

    searchFile(){
        // search file inside the list
    }

    requestFile(){
        // access file in private channel
    }
}