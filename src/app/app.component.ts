import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import {
  colorSchemeDarkBlue,
  themeQuartz,
} from "ag-grid-community";


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  myTheme = themeQuartz.withPart(colorSchemeDarkBlue);
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
    this.rowData = [
      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },      {
        service: "auth-service",
        level: "INFO",
        message: "User login successful",
        timestamp: "2025-06-18T12:00:00Z"
      },
      {
        service: "db-service",
        level: "WARN",
        message: "Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected Slow query detected ",
        timestamp: "2025-06-18T12:10:00Z"
      },
      {
        service: "payment-service",
        level: "ERROR",
        message: "Payment gateway timeout",
        timestamp: "2025-06-15T12:05:00Z"
      },
    ];
  }
}
