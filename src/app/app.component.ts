import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridModule} from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import logs from '../assets/log.json';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  rowData: any[] = [];

  colDefs: ColDef[] = [
    {
      field: 'timestamp',
      headerName: 'Timestamp',
      filter: 'agDateColumnFilter',
      sortable: true,
      valueFormatter: (params) =>
        params.value ? new Date(params.value).toLocaleString() : '',
      filterParams: {
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          const cellDate = new Date(cellValue);
          const filterDate = new Date(filterLocalDateAtMidnight);
          cellDate.setHours(0, 0, 0, 0);
          filterDate.setHours(0, 0, 0, 0);
          return cellDate.getTime() - filterDate.getTime();
        }
      }
    },
    { field: 'service', headerName: 'Service', sortable: true, filter: true },
    { field: 'level', headerName: 'Level', sortable: true, filter: true },
    { field: 'message', headerName: 'Message', flex: 2, wrapText: true, autoHeight: true }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  ngOnInit() {
    // Simulated external fetch — replace with real HTTP call
    this.rowData = logs;
  }
}
