class carousel {
    constructor(photos) {
        this.index = 0;
        this.photos = photos;
    }

    next_photo(){
        this.photos.forEach(photos => {
            photos.classList.remove("show");
        });
        this.index++;
        if(this.index >= this.photos.length)
        { this.index = 0; }
        this.photos[this.index].classList.add("show");
    }
    prev_photo(){
        this.photos.forEach(photos => {
            photos.classList.remove("show");
        });
        this.index--;
        if(this.index < 0)
        { this.index = this.photos.length - 1; }
        this.photos[this.index].classList.add("show");
    }
}