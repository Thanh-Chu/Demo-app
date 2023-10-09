import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product2',
  templateUrl: './add-product2.component.html',
  styleUrls: ['./add-product2.component.scss']
})
export class AddProduct2Component implements OnInit {
  public product2Form:FormGroup;
  public isSubmit = false;

  public constructor(private _formBuilder: FormBuilder){}


  ngOnInit(): void {
      this.product2Form= this.createFormProduct4({} as Product);
  }
  
  public createFormProduct4(_:Product):FormGroup{
    return this._formBuilder.group({
      title: this._formBuilder.control('',[Validators.required]),
      description:this._formBuilder.control('',[Validators.required]),
      brand: this._formBuilder.control('',[Validators.required]),
      price: this._formBuilder.control('',[Validators.required]),
      category: this._formBuilder.control('',[Validators.required]),
      images: this._formBuilder.control('',[Validators.required]),
    })
  }

  public onSubmit():void{
    console.log( this.product2Form.value);
    this.isSubmit = true;
  }
}
