class moblenavbar{
    constructor(moblemenu){
        this.moblemenu = document.querySelector(moblemenu);
        this.navlist = document.querySelector(navlist)
        this.navlinks = document.querySelectorAll(navlinks)
        this.activeClass = "active";
    }
    addClickEvent(){
        this.moblemenu.addEventListener("click", () => console.log("hey"));
    }
    Init(){
        if(this.moblemenu){
         this.addClickEvent();
        }
        return this;
    }
}
const moblenavbar = new moblenavbar(
   ".moble-menu",
   ".nav-list",
   ".nav-list li",
);
moblenavbar.init();