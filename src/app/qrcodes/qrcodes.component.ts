import { Component, OnInit, ɵConsole } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-qrcodes',
  templateUrl: './qrcodes.component.html',
  styleUrls: ['./qrcodes.component.css']
})
export class QrcodesComponent implements OnInit {

  constructor(public crudservice: CrudService) { }

  itemName = '';
  title = 'qrcode-generator';
  generateStatus = false;
  itemValue = '';
  itemDescription = '';
  itemProductRack = '';
  itemLocation = '';
  itemAisleNumber = '';
  isLocationComplete = "false";
  itemActiveBulky = '';
  finalLocation = '';
  itemItemID = '';
  url = '';
  href = '';
  activateButton = "true";
  countRow = 0;
  display = false;
  message = '';
  generationComplete = false;

  onGenerate(){
    this.itemValue = " ItemName : " + this.itemName + "\n" + " ItemLocation: " + this.finalLocation  + "\n" + "  ItemDescription : " + this.itemDescription;
    if (this.finalLocation != "" && this.itemName != ""){
      this.generateStatus = true;
      this.display = true;
      let Record = {};
      Record['item'] = this.itemName;
      Record['location'] = this.finalLocation;
      Record['description'] = this.itemDescription;
      this.crudservice.createRecord(Record).then(res => {
        this.itemName = '';
        this.itemDescription = '';
        this.finalLocation = '';
        console.log(res);
        this.message = "Data Saved";
      });
    }

  }
  downloadImage(){
    this.href = document.getElementsByTagName('img')[1].src;
  }

//   getImage(event:any) {
//       if (event.target.files && event.target.files[0]) {
//           var reader = new FileReader();

//           reader.onload = (event:any) => {
//               this.url = event.target.result;
//           }

//           reader.readAsDataURL(event.target.files[0]);
//       }
//  }



  locationComplete(){
    if(this.itemProductRack != '' && this.itemActiveBulky != '' && this.itemItemID != '' && this.itemAisleNumber != "" ){
        if(this.finalLocation == ''){
    	     this.finalLocation = this.itemLocation;
         }
        else{
             this.finalLocation = this.finalLocation + "\n" + this.itemLocation;
        }
  this.isLocationComplete="true";
  this.anotherLocation();
    }
  }


  anotherLocation(){
    if(this.isLocationComplete=="true" ){
        this.isLocationComplete="false";
        this.itemAisleNumber = '';
        this.itemActiveBulky = '';
        this.itemItemID = '';
        this.itemProductRack = '';
        this.itemLocation = '';
        this.countRow = this.countRow + 1;
    }
  }

  onReset(){
     this.itemName = '';
     this.finalLocation='';
     this.itemLocation = '';
     this.itemDescription = '';
     this.itemAisleNumber = '';
     this.itemActiveBulky = '';
     this.itemItemID = '';
     this.itemProductRack = '';
     this.itemDescription = '';
     this.url = '';
     this.generateStatus = false;
     this.display = false;
     this.url = '';
  }

  onUpdateActiveBulky(event: Event) {
    this.itemActiveBulky = (event.target as HTMLInputElement).value;
    this.itemLocation = (this.itemActiveBulky + '-' + this.itemAisleNumber + '-'  + this.itemProductRack + '-'  + this.itemItemID).toUpperCase();
  }

  onUpdateAisleNumber(event: Event) {
    this.itemAisleNumber = (event.target as HTMLInputElement).value;
    this.itemLocation = (this.itemActiveBulky + '-' + this.itemAisleNumber + '-'  + this.itemProductRack + '-'  + this.itemItemID).toUpperCase();
  }

  onUpdateProductRack(event: Event) {
    this.itemProductRack = (event.target as HTMLInputElement).value;
    this.itemLocation = (this.itemActiveBulky + '-' + this.itemAisleNumber + '-'  + this.itemProductRack + '-'  + this.itemItemID).toUpperCase();

  }

onUpdateItemID(event: Event) {
    this.itemItemID = (event.target as HTMLInputElement).value;
    this.itemLocation = (this.itemActiveBulky + '-' + this.itemAisleNumber + '-'  + this.itemProductRack + '-'  + this.itemItemID).toUpperCase();
}




  afterGenerate(){
    this.generateStatus = false;
  }

  ngOnInit(): void {

  }

}
