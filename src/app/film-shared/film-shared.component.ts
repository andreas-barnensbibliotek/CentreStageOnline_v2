import { WpApiService } from './../../services/wp-Api/wp-api.service';
import { Global } from './../models/global';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-shared',
  templateUrl: './film-shared.component.html',
  styleUrls: ['./film-shared.component.scss']
})
export class FilmSharedComponent implements OnInit {

  downloadFormgroup:FormGroup;

  tyskablock:boolean= false;
  engelskablock:boolean= true;
  spanskablock:boolean= false;
  franskablock:boolean= false;
  polskablock:boolean= false;
  svenskablock:boolean= false;
  downloadForm:boolean= false;
  hideDownloadbuttons:boolean= true;
  valtSprak:string= "EN";

  filmlinks= {
    DE:{
      fullfilm:"https://vimeo.com/656152637",
      extra1:"https://vimeo.com/678211960",
      extra2:"https://vimeo.com/678212263",
      extra3:"https://vimeo.com/678212581",
      extra4:"https://vimeo.com/678212870",
      extra5:"https://vimeo.com/678213131",
    },
    EN:{
      fullfilm:"https://vimeo.com/656146610",
      extra1:"https://vimeo.com/678208683",
      extra2:"https://vimeo.com/678209006",
      extra3:"https://vimeo.com/678209277",
      extra4:"https://vimeo.com/678209592",
      extra5:"https://vimeo.com/678209858",
    },
    SP:{
      fullfilm:"https://vimeo.com/656161277",
      extra1:"https://vimeo.com/678215600",
      extra2:"https://vimeo.com/678215838",
      extra3:"https://vimeo.com/678216147",
      extra4:"https://vimeo.com/678214956",
      extra5:"https://vimeo.com/678215260",
    },
    FR:{
      fullfilm:"https://vimeo.com/656476588",
      extra1:"https://vimeo.com/678210352",
      extra2:"https://vimeo.com/678210654",
      extra3:"https://vimeo.com/678210921",
      extra4:"https://vimeo.com/678211170",
      extra5:"https://vimeo.com/678211445",
    },
    PL:{
      fullfilm:"",
      extra1:"",
      extra2:"",
      extra3:"",
      extra4:"",
      extra5:"",
    },
    SV:{
      fullfilm:"https://vimeo.com/656489269",
      extra1:"https://vimeo.com/678204417",
      extra2:"https://vimeo.com/678204761",
      extra3:"https://vimeo.com/678205066",
      extra4:"https://vimeo.com/678205326",
      extra5:"https://vimeo.com/678205601",
    }
  }


  constructor(private _wpApi:WpApiService, private fb: FormBuilder, private glb:Global) {

  }


  loadFormSettings(){
    this.downloadFormgroup = this.fb.group({
      txtorg: [localStorage.getItem("filmformtxt1"), Validators.required],
      txtintend: [localStorage.getItem("filmformtxt2"), Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadFormSettings();
  }

  visaSprakBlock(sprakval){
    this.resetSprakBlock();

    switch(sprakval){
      case "DE":
        this.tyskablock= true;
        break;
      case "EN":
        this.engelskablock= true;
        break;
      case "SP":
        this.spanskablock= true;
        break;
      case "FR":
        this.franskablock= true;
        break;
      case "PL":
        this.polskablock= true;
        break;
      case "SV":
        this.svenskablock= true;
        break;
    };
    this.hideDownloadbuttons= true;
  }

  resetSprakBlock(){
    this.tyskablock= false;
    this.engelskablock= false;
    this.spanskablock= false;
    this.franskablock= false;
    this.polskablock= false;
    this.svenskablock= false;
    this.hideDownloadbuttons= true;
    this.downloadForm= false;
  }

  openDownloadFilmForm(sprakval){
    this.resetSprakBlock();
    this.downloadForm= true;
    this.valtSprak = sprakval;

    switch(sprakval){
      case "DE":
        this.tyskablock= true;
        break;
      case "EN":
        this.engelskablock= true;
        break;
      case "SP":
        this.spanskablock= true;
        break;
      case "FR":
        this.franskablock= true;
        break;
      case "PL":
        this.polskablock= true;
        break;
      case "SV":
        this.svenskablock= true;
        break;
    };
    this.hideDownloadbuttons= false;
  }

  gotoVimeoViewfilm(filmtyp){
    let navto;
    switch(this.valtSprak){
      case "DE":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.DE.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.DE.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.DE.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.DE.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.DE.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.DE.extra5;
            break;
        }
        break;
      case "EN":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.EN.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.EN.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.EN.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.EN.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.EN.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.EN.extra5;
            break;
        }
        break;
      case "SP":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.SP.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.SP.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.SP.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.SP.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.SP.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.SP.extra5;
            break;
        }
        break;
      case "FR":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.FR.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.FR.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.FR.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.FR.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.FR.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.FR.extra5;
            break;
        }
        break;
      case "PL":
        // this.polskablock= true;
        break;
      case "SV":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.SV.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.SV.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.SV.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.SV.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.SV.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.SV.extra5;
            break;
        }
        break;
    };

    if(navto){
      window.open(navto, '_blank');
    }

  }
  gotoVimeoDownload(filmtyp){
    let navto;



    switch(this.valtSprak){
      case "DE":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.DE.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.DE.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.DE.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.DE.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.DE.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.DE.extra5;
            break;
        }
        break;
      case "EN":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.EN.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.EN.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.EN.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.EN.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.EN.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.EN.extra5;
            break;
        }
        break;
      case "SP":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.SP.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.SP.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.SP.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.SP.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.SP.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.SP.extra5;
            break;
        }
        break;
      case "FR":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.FR.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.FR.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.FR.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.FR.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.FR.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.FR.extra5;
            break;
        }
        break;
      case "PL":
        // this.polskablock= true;
        break;
      case "SV":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.SV.fullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.SV.extra1;
            break;
          case "ext2":
            navto= this.filmlinks.SV.extra2;
            break;
          case "ext3":
            navto= this.filmlinks.SV.extra3;
            break;
          case "ext4":
            navto= this.filmlinks.SV.extra4;
            break;
          case "ext5":
            navto= this.filmlinks.SV.extra5;
            break;
        }
        break;
    };

    if(navto){
      this.submitForm(navto);
    }

  }

  submitForm(navto:any){

    if (this.downloadFormgroup.valid){

      let registerobj= {
        post_title : "Ny nedladdning - " + this.valtSprak,
        organisation: this.downloadFormgroup.get('txtorg').value,
        omrade: this.downloadFormgroup.get('txtintend').value
      };
      localStorage.setItem("filmformtxt1", registerobj.organisation);
      localStorage.setItem("filmformtxt2", registerobj.omrade);

      this.registerUserDB(navto,registerobj);
    };
  }

  registerUserDB(navto:any ,regData:any){
    if(localStorage.getItem("filmformsent") != "true"){
      this._wpApi.postFilmDownload(JSON.parse(JSON.stringify(regData))).subscribe((response)=>{
        localStorage.setItem("filmformsent", "true");
        window.open(navto, '_blank');
        console.log("dax att rega i stored proc");
      });
    }else{
      window.open(navto, '_blank');
    }
  }
}
