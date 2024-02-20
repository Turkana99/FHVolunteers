import { Component, OnInit } from '@angular/core';
import { VolunteersService } from 'src/app/core/services/volunteers.service';

interface Column {
  field: string;
  header: string;
}
export interface Volunteers {
  id?: number;
  name?: string;
  status?: string;
  gender?: string;
  birthdate?: string;
  fin?: string;
  maritalStatus?: string;
  phone?: string;
  mail?: string;
  startDate?: string;
  endDate?: string
}

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.scss']
})
export class VolunteersListComponent implements OnInit{

  volunteers!: Volunteers[];

  cols!: Column[];

  constructor(private volunteersService: VolunteersService) {}

  ngOnInit() {
      this.volunteersService.getVolunteers().then((data) => {
          this.volunteers = data;
      });

      this.cols = [
          { field: 'id', header: 'No' },
          { field: 'name', header: 'Soyad,ad,atasının adı' },
          { field: 'gender', header: 'Cins' },
          { field: 'birthdate', header: 'Doğum tarixi' },
          { field: 'fin', header: 'FIN kod' },
          { field: 'maritalStatus', header: 'Ailə vəziyyəti' },
          { field: 'phone', header: 'Əlaqə nömrəsi' },
          { field: 'mail', header: 'Elektron-poçt' },
          { field: 'startDate', header: 'Fəaliyyətə başlama tarixi' },
          { field: 'endDate', header: 'Fəaliyyətin bitmə tarixi' },
      ];
  }

}
