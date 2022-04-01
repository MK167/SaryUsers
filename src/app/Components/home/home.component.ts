import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../Models/Heroes';
import { HeroesService } from '../../Services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
Heroes: Heroes [] = [];
name: any;
Phone: any;
Email: any;
Company: any;
Date: any;
Country: any;
key: string = 'id';
cty:any;
reverse: boolean = false;
p: number = 1;

  constructor(private HeroesService: HeroesService) { }

  GETDATAA() {
    this.HeroesService.GetAllCount().subscribe((data)=> {
      this.cty = data;
      console.log(data);
    });
  }
  GETDATA() {
    this.HeroesService.GetAll().subscribe((data)=> {
      this.Heroes = data;
    });
  }
  ngOnInit(): void {
    this.GETDATA();
    // this.GETDATAA();
  }
SearchName() {
  if(this.name == "")
  {
    this.GETDATA();
  }
  else
  {
    this.Heroes = this.Heroes.filter((res)=> {
      return res.Name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
SearchCompany() {
  if(this.Company == "")
  {
    this.GETDATA();
  }
  else
  {
    this.Heroes = this.Heroes.filter((res)=> {
      return res.Company.toLocaleLowerCase().match(this.Company.toLocaleLowerCase());
    });
  }
}
SearchCountry() {
  if(this.Country == "")
  {
    this.GETDATA();
  }
  else
  {
    this.Heroes = this.Heroes.filter((res)=> {
      return res.Countery.toLocaleLowerCase().match(this.Country.toLocaleLowerCase());
    });
  }
}
SearchDate() {
  if(this.Date == "")
  {
    this.GETDATA();
  }
  else
  {
    this.Heroes = this.Heroes.filter((res)=> {
      return res.Date.toLocaleLowerCase().match(this.Date.toLocaleLowerCase());
    });
  }
}
SearchEmail() {
  if(this.Email == "")
  {
    this.GETDATA();
  }
  else
  {
    this.Heroes = this.Heroes.filter((res)=> {
      return res.Email.toLocaleLowerCase().match(this.Email.toLocaleLowerCase());
    });
  }
}
SearchPhone() {
  if(this.Phone == "")
  {
    this.GETDATA();
  }
  else
  {
    this.Heroes = this.Heroes.filter((res)=> {
      return res.Phone.toLocaleLowerCase().match(this.Phone.toLocaleLowerCase());
    });
  }
}

sort(key: any){
this.key = key;
this.reverse = !this.reverse;
}
}
