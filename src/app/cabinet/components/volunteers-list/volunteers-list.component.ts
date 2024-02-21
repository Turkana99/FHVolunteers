import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
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
  // @ViewChild('dataTable') dataTable: Table;

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
//   calculateTableHeight(): string {
//     const windowHeight = window.innerHeight;
//     const headerHeight = this.dataTable.el.nativeElement.querySelector('.p-datatable-scrollable-header').clientHeight;
//     const footerHeight = this.dataTable.el.nativeElement.querySelector('.p-datatable-scrollable-footer').clientHeight;
//     const tableHeight = windowHeight - headerHeight - footerHeight - 50; // 50 piksellik boşluq üçün
//     return tableHeight + 'px';
// }
}
