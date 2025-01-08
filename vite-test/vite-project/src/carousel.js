import styles from './carousel.module.css';

export default class carousel {

    constructor(container, position = "center") {
        this.index = 0;
        this.photos = container.querySelectorAll('.photo');
        container.querySelector(".prev").addEventListener('click', () => {
            this.prev_photo();
        });
        container.querySelector(".next").addEventListener('click', () => {
            this.next_photo();
        });
        switch (position) {
            case "top":{
                container.querySelectorAll("button").forEach(button => {
                    button.classList.add(styles.top);
                })
            }break;
            case "bottom":{
                container.querySelectorAll("button").forEach(button => {
                    button.classList.add(styles.bottom);
                })
            }break;
            default:{
                container.querySelectorAll("button").forEach(button => {
                    button.classList.add(styles.center);
                })
            }
        }
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