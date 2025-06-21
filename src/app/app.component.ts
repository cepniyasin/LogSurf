import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import {parseSpringLogs, SpringLog} from "./util/parse-spring-logs";

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
    { field: 'level', headerName: 'Level', filter: true, sortable: true,
      cellClass: params => this.getLevelClass(params.value)
    },
    // { field: 'thread', headerName: 'Thread', filter: true, sortable: true },
    // { field: 'logger', headerName: 'Logger', filter: true, sortable: true },
    { field: 'message', headerName: 'Message', flex: 2, wrapText: true, autoHeight: true },
    { field: 'exception', headerName: 'Exception', flex: 2, wrapText: true, autoHeight: true }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  ngOnInit() {

    fetch('assets/application.log')
      .then(res => res.text())
      .then(text => {
        this.rowData = parseSpringLogs(text);
      })
      .catch(err => console.error('Failed to load log file', err));
  }

  getLevelClass(level: string): string {
    switch (level?.toUpperCase()) {
      case 'ERROR': return 'log-error';
      case 'WARN': return 'log-warn';
      case 'INFO': return 'log-info';
      case 'DEBUG': return 'log-debug';
      case 'TRACE': return 'log-trace';
      default: return '';
    }
  }
}
