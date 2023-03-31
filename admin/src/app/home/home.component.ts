import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  constructor() { }

  ngOnInit(): void {
  }
//   searchProduct(query:KeyboardEvent){
//     if(query){
//       const element = query.target as HTMLInputElement;
//       this.products.searchProducts(element.value).subscribe((result)=>{
       
//         if(result.length>5){
//           result.length=length
//         }
//         this.searchResult=result;
//       })
//     }
//   }
//    hideSearch(){
//     this.searchResult=undefined;
//    }
//    redirectToDetails(id:number){
//     this.route.navigate(['/details/'+id])
//   }
// submitSearch(val:string){
//   console.log(val);
//   this.route.navigate(['search/$(val)'])
// }

}
