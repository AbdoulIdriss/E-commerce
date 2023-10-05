import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../Services/api.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute, private apiService: APIService){}

  infos:any;
  currency = '$'
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {

      console.log(params)

      this.apiService.getOneData(params.id).subscribe((retrieve:any) => {

        console.log(retrieve);

        this.infos = retrieve
        
      })
    });   
  }


}
