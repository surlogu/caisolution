import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './secure-routing.module';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

searchList:any=[];
searchData:string='';
routesList=routes;
localSearchData:any=localStorage.getItem('recentSearch')


  constructor( private router: Router) { }

  ngOnInit(): void {



    if(this.localSearchData!=undefined){
      this.localSearchData=JSON.parse(this.localSearchData)
      this.searchList=this.localSearchData;
      console.log(this.searchList)
    }else{

        this.searchList[0]={data:'demo search'};
        this.searchList[1]={data:'test'};
        this.searchList[2]={data:'check'};
        localStorage.setItem('recentSearch', JSON.stringify(this.searchList))
    }


  }

addSearch(){
  if(this.searchData!=null && this.searchData!=''){
  let searchObj={data:this.searchData}
  this.searchList.push(searchObj)
  localStorage.removeItem('recentSearch')
  localStorage.setItem('recentSearch', JSON.stringify(this.searchList))
  alert('Not Found! Try another')
  this.searchData=''
  }
}

rtp(){
  this.router.navigate(['/secure/profile']);
}

logout(){
  localStorage.clear()

          this.router.navigate(['/login']);
}

}
