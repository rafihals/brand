import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {


  displayColumn = ['id', 'user_name', 'password'];
  titlePage = "test"
  dataList: any;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.getDataList()
  }

  getDataList(){
    this.serviceService.getDataList().subscribe((data) => {
      this.dataList = data;
      console.log(data)
    });
  }
  
}
