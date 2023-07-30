import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-piece-details',
  templateUrl: './piece-details.component.html',
  styleUrls: ['./piece-details.component.scss']
})
export class PieceDetailsComponent implements OnInit{
  id!: string | null;
  formPromo!: FormGroup;
  value!: any;
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    alert(this.id);
    this.createForm();
  }
  
  createForm() {
    this.formPromo = this.formBuilder.group({
      name: [null],
      price: [null],
      factoryPrice: [null],
      netValue: [null],
      pieceType: [null],
      transactionType: [null]
    });
  }

  onSubmit() {    
    alert("Form Submitted!");    
    console.log(this.formPromo.value);
  }

}
