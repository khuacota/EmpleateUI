import { Component, OnInit } from '@angular/core';
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
export class EmployeeInformationComponent implements OnInit {
  private basicInfo: BasicEmployee;
  private academicInfo: Academic;
  private employeeId: string;
  constructor(private basicInfService: BasicInformationService, private academicSerice: AcademicService, private route: ActivatedRoute, private router: Router) {
    this.basicInfo = new BasicEmployee();
    this.academicInfo = new Academic();
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.employeeId = params.get('id')
      )
    );
  }

}
