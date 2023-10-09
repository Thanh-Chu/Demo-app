import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product3',
  templateUrl: './add-product3.component.html',
  styleUrls: ['./add-product3.component.scss']
})
export class AddProduct3Component implements OnInit {
  public product3Form:FormGroup;
  public isSubmit = false;

  public constructor(private _formBuilder: FormBuilder){}


  ngOnInit(): void {
      this.product3Form= this.createFormProduct3({} as Product);
  }
  
  public createFormProduct3(_:Product):FormGroup{
    return this._formBuilder.group({
      title: this._formBuilder.control('',[Validators.required]),
      sku: this._formBuilder.control('',[Validators.required]),
      color: this._formBuilder.control('',[Validators.required]),
      size: this._formBuilder.control('',[Validators.required]),
      brand: this._formBuilder.control('',[Validators.required]),
      description:this._formBuilder.control('',[Validators.required]),
      images: this._formBuilder.control('',[Validators.required]),
      price: this._formBuilder.control('',[Validators.required]),
      status:this._formBuilder.control('',[Validators.required]),
      tags: this._formBuilder.control('',[Validators.required]),
      categories: this._formBuilder.control([],[Validators.required])
    })
  }

  public updateCategories(event: Event):void{
    const {checked: isChecked, value} = event.target as HTMLInputElement;
    const currentValue = this.product3Form.get('categories').getRawValue() as string[];
    if(isChecked){
      this.product3Form.get('categories').patchValue([...currentValue,value])
    } else{
      this.product3Form.get('categories').patchValue(currentValue.filter((item)=>item != value ))
    }
  }

  public onSubmit():void{
    console.log( this.product3Form.value);
    this.isSubmit = true;
  }
}
