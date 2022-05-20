import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

import * as XLSX from 'xlsx'

@Component({
  selector: 'app-upload-members',
  templateUrl: './upload-members.component.html',
  styleUrls: ['./upload-members.component.scss']
})
export class UploadMembersComponent implements OnInit {
  message : any
  data : string[]
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }


  onSubmit(){
    
    if (!this.fileUploadForm.get('myfile').value) {
      alert('Please fill valid details!');
      return false;
    }
  
    const formData = new FormData();
    formData.append('formFile', this.fileUploadForm.get('myfile').value);
    formData.append('agentId', '007');
  
    console.log(formData)
    this.http
      .post<any>(environment.base_url+'/pastors/uploadexcel', formData).subscribe(response => {
        console.log(response);
        this.message = response
        if (response.statusCode === 200) {
          // Reset the file input
          this.uploadFileInput.nativeElement.value = "";
          this.fileInputLabel = undefined;
          this.data = undefined
          setTimeout(function(){
            this.message = {};
          }, 1000);
        }
      }, error => {
        console.log(error);
      });
  }

  onFileChange(evt : any){

    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    

    if (evt.target.files.length > 0) {
      const file = evt.target.files[0];
      // console.log(file);

      if (!_.includes(af, file.type)) {
        alert('Only EXCEL Docs Allowed!');
      } else {
        this.fileInputLabel = file.name;
        this.fileUploadForm.get('myfile').setValue(file);
      }
    }

    const target : DataTransfer = <DataTransfer>(evt.target)

    if(target.files.length !==1) throw new Error('cannot use multiple files')

    const reader : FileReader = new FileReader()
    reader.onload = (e: any) => {
      const bstr: string = e.target.result

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'})

      const wsname : string = wb.SheetNames[0]

      const ws: XLSX.WorkSheet = wb.Sheets[wsname]

      console.log(ws)

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }))

      console.log(this.data)



    }

    reader.readAsBinaryString(target.files[0])


 }



}
