import { Component, Renderer2 } from '@angular/core';
import { faArrowRight, faArrowRightLong, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSearch=faSearch;
  faClose=faClose;
  faarrowright=faArrowRightLong;
  brandlogo:any;
  showinputbox:boolean=false;

  constructor(private renderer:Renderer2){}

  hideElement(id:number){
    this.brandlogo=document.getElementsByClassName('navbar-brand');
    if(id==1){
     for(let i=0;i<this.brandlogo.length;i++){
      const element=this.brandlogo[i];
      this.renderer.addClass(element,'d-none');
     }
      this.showinputbox=true;
    }else if(id==2){
      this.showinputbox=false;
      for(let i=0;i<this.brandlogo.length;i++){
        const element=this.brandlogo[i];
        this.renderer.removeClass(element,'d-none');
       }
    }
    
  }
}
