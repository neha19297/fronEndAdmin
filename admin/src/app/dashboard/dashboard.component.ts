import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // file: File | null = null; // Variable to store file
  // shortLink: string = "";
  // loading: boolean = false; 

  fileName = '';  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onFileSelected(event:any) {  
  
    const file:File = event.target.files[0];  

    if (file) {  

        this.fileName = file.name;  

        const formData = new FormData();  

        formData.append("thumbnail", file);  

        const upload$ = this.http.post("/api/thumbnail-upload", formData);  

        upload$.subscribe();  
    }  
}  
}
    
//   onUpload() {
//     this.loading = !this.loading;
//     console.log(this.file);
//     this.fileUploadService.upload(this.file).subscribe(
//         (event: any) => {
//             if (typeof (event) === 'object') {

//                 this.shortLink = event.link;

//                 this.loading = false; 
//             }
//         }
//     );
// }

