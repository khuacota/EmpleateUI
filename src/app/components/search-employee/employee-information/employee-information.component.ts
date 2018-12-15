import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BasicInformationService } from '../../../services/employee/basic-information.service';
import { AcademicService } from '../../../services/academic/academic.service';
import { BasicEmployee } from '../../../models/basicEmployee';
import { Academic } from '../../../models/academic';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements AfterViewInit{
  public basicInfo: BasicEmployee;
  public academicInfo: Academic;
  private employeeId: string;
  constructor(private basicInfService: BasicInformationService, private academicService: AcademicService, private route: ActivatedRoute, private router: Router) {
    this.basicInfo = new BasicEmployee();
    this.academicInfo = new Academic();
    this.employeeId = '1';
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.employeeId = params.get('id')
      )
    ).subscribe(res => { this.setData() });
    
  }

  showNull(data) {
    let res = false;
    if (data) {
      if (data.length == 0) {
        res = true;
      }
    }
    else {
      res = true;
    }
    return res;
  }

  setData() {
    this.basicInfService.getOne(this.employeeId).subscribe((res: BasicEmployee) => {
      this.basicInfo = res;
    });
    this.academicService.getOne(this.employeeId).subscribe((res: Academic) => {
      console.log(res);
      this.academicInfo = res;
    });
  }

  ngAfterViewInit() {
  }

}
