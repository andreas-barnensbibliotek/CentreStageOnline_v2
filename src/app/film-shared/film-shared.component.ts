import { Title } from '@angular/platform-browser';
import { WpApiService } from './../../services/wp-Api/wp-api.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-shared',
  templateUrl: './film-shared.component.html',
  styleUrls: ['./film-shared.component.scss']
})
export class FilmSharedComponent implements OnInit {

  downloadFormgroup:FormGroup;
  downloadFormgroup1:FormGroup;
  downloadFormgroup2:FormGroup;
  downloadFormgroup3:FormGroup;
  downloadFormgroup4:FormGroup;

  tyskablock:boolean= false;
  engelskablock:boolean= true;
  spanskablock:boolean= false;
  franskablock:boolean= false;
  polskablock:boolean= false;
  svenskablock:boolean= false;
  downloadForm:boolean= false;
  hideDownloadbuttons:boolean= false;
  valtSprak:string= "EN";

  filmlinks= {
    DE:{
      fullfilm:"https://vimeo.com/manage/videos/690445398/40369acb03",
      extra1:"https://vimeo.com/manage/videos/690448229/64f76fc7f2",
      extra2:"https://vimeo.com/manage/videos/690448801/94078b5411",
      extra3:"https://vimeo.com/manage/videos/690449446/ab755f2c92",
      extra4:"https://vimeo.com/manage/videos/690449907/8ea5391a5a",
      extra5:"https://vimeo.com/manage/videos/690450700/8e4eb14393",
      downfullfilm:"https://vimeo.com/656152637",
      downextra1:"https://vimeo.com/678211960",
      downextra2:"https://vimeo.com/678212263",
      downextra3:"https://vimeo.com/678212581",
      downextra4:"https://vimeo.com/678212870",
      downextra5:"https://vimeo.com/678213131",
    },
    EN:{
      fullfilm:"https://vimeo.com/manage/videos/689636030/26cb8b1cd2",
      extra1:"https://vimeo.com/manage/videos/689638936/73328288c7",
      extra2:"https://vimeo.com/manage/videos/689639480/96eb461c91",
      extra3:"https://vimeo.com/manage/videos/689639996/0a703d1112",
      extra4:"https://vimeo.com/manage/videos/689640472/ecf29e2f50",
      extra5:"https://vimeo.com/manage/videos/689641160/a4704b25a5",
      downfullfilm:"https://vimeo.com/656146610",
      downextra1:"https://vimeo.com/678208683",
      downextra2:"https://vimeo.com/678209006",
      downextra3:"https://vimeo.com/678209277",
      downextra4:"https://vimeo.com/678209592",
      downextra5:"https://vimeo.com/678209858",
    },
    SP:{
      fullfilm:"https://vimeo.com/manage/videos/690468019/db9be4c417",
      extra1:"https://vimeo.com/manage/videos/690464788/c4b6cf3ed7",
      extra2:"https://vimeo.com/manage/videos/690465435/fdb4317672",
      extra3:"https://vimeo.com/manage/videos/690466014/e96a7ed5a5",
      extra4:"https://vimeo.com/manage/videos/690466593/ea49a8298a",
      extra5:"https://vimeo.com/manage/videos/690467369/074debf761",
      downfullfilm:"https://vimeo.com/656161277",
      downextra1:"https://vimeo.com/678215600",
      downextra2:"https://vimeo.com/678215838",
      downextra3:"https://vimeo.com/678216147",
      downextra4:"https://vimeo.com/678214956",
      downextra5:"https://vimeo.com/678215260",
    },
    FR:{
      fullfilm:"https://vimeo.com/manage/videos/689616680/a961e5b1d7",
      extra1:"https://vimeo.com/manage/videos/689619351/82bd0fe713",
      extra2:"https://vimeo.com/manage/videos/689619892/571bfe829c",
      extra3:"https://vimeo.com/manage/videos/689620506/51f4d3ffa5",
      extra4:"https://vimeo.com/manage/videos/689621001/691ec3f939",
      extra5:"https://vimeo.com/manage/videos/689621727/dc8c083dd3",
      downfullfilm:"https://vimeo.com/656476588",
      downextra1:"https://vimeo.com/678210352",
      downextra2:"https://vimeo.com/678210654",
      downextra3:"https://vimeo.com/678210921",
      downextra4:"https://vimeo.com/678211170",
      downextra5:"https://vimeo.com/678211445",
    },
    PL:{
      fullfilm:"",
      extra1:"",
      extra2:"",
      extra3:"",
      extra4:"",
      extra5:"",
      downfullfilm:"",
      downextra1:"",
      downextra2:"",
      downextra3:"",
      downextra4:"",
      downextra5:"",
    },
    SV:{
      fullfilm:"https://vimeo.com/manage/videos/689676049/eb45a2367b",
      extra1:"https://vimeo.com/manage/videos/689689952/359e5d3f32",
      extra2:"https://vimeo.com/manage/videos/689691421/3042c48c65",
      extra3:"https://vimeo.com/manage/videos/689692964/d01c8068c6",
      extra4:"https://vimeo.com/manage/videos/689694238/e5cae85168",
      extra5:"https://vimeo.com/manage/videos/689695922/5f01855ca0",
      downfullfilm:"https://vimeo.com/656489269",
      downextra1:"https://vimeo.com/678204417",
      downextra2:"https://vimeo.com/678204761",
      downextra3:"https://vimeo.com/678205066",
      downextra4:"https://vimeo.com/678205326",
      downextra5:"https://vimeo.com/678205601",
    }
  }


  constructor(private _wpApi:WpApiService, private fb: FormBuilder, private titleService:Title ) {

  }


  loadFormSettings(){
    this.downloadFormgroup = this.fb.group({
      txtorg: [localStorage.getItem("filmformtxt1"), Validators.required],
      txtintend: [localStorage.getItem("filmformtxt2"), Validators.required],
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Centre Stage | Reflective film");
    this.loadFormSettings();
  }

  visaSprakBlock(sprakval){
    this.resetSprakBlock();
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

  resetSprakBlock(){
    this.tyskablock= false;
    this.engelskablock= false;
    this.spanskablock= false;
    this.franskablock= false;
    this.polskablock= false;
    this.svenskablock= false;
    this.hideDownloadbuttons= false;
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
            navto= this.filmlinks.DE.downfullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.DE.downextra1;
            break;
          case "ext2":
            navto= this.filmlinks.DE.downextra2;
            break;
          case "ext3":
            navto= this.filmlinks.DE.downextra3;
            break;
          case "ext4":
            navto= this.filmlinks.DE.downextra4;
            break;
          case "ext5":
            navto= this.filmlinks.DE.downextra5;
            break;
        }
        break;
      case "EN":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.EN.downfullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.EN.downextra1;
            break;
          case "ext2":
            navto= this.filmlinks.EN.downextra2;
            break;
          case "ext3":
            navto= this.filmlinks.EN.downextra3;
            break;
          case "ext4":
            navto= this.filmlinks.EN.downextra4;
            break;
          case "ext5":
            navto= this.filmlinks.EN.downextra5;
            break;
        }
        break;
      case "SP":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.SP.downfullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.SP.downextra1;
            break;
          case "ext2":
            navto= this.filmlinks.SP.downextra2;
            break;
          case "ext3":
            navto= this.filmlinks.SP.downextra3;
            break;
          case "ext4":
            navto= this.filmlinks.SP.downextra4;
            break;
          case "ext5":
            navto= this.filmlinks.SP.downextra5;
            break;
        }
        break;
      case "FR":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.FR.downfullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.FR.downextra1;
            break;
          case "ext2":
            navto= this.filmlinks.FR.downextra2;
            break;
          case "ext3":
            navto= this.filmlinks.FR.downextra3;
            break;
          case "ext4":
            navto= this.filmlinks.FR.downextra4;
            break;
          case "ext5":
            navto= this.filmlinks.FR.downextra5;
            break;
        }
        break;
      case "PL":
        // this.polskablock= true;
        break;
      case "SV":
        switch(filmtyp){
          case "full":
            navto= this.filmlinks.SV.downfullfilm;
            break;
          case "ext1":
            navto= this.filmlinks.SV.downextra1;
            break;
          case "ext2":
            navto= this.filmlinks.SV.downextra2;
            break;
          case "ext3":
            navto= this.filmlinks.SV.downextra3;
            break;
          case "ext4":
            navto= this.filmlinks.SV.downextra4;
            break;
          case "ext5":
            navto= this.filmlinks.SV.downextra5;
            break;
        }
        break;
    };

    if(navto){
      this.submitForm(navto);
      window.open(navto, '_blank');
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
