import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input() data: any[] = [];
  input: any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]); // Initialize dataSource with an empty array
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Add '!' to assert that these properties will be defined
  @ViewChild(MatSort) sort!: MatSort; // Add '!' to assert that these properties will be defined

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.displayedColumns = Object.keys(this.data[0]);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter($event: any) {
    let filterValue= $event.target?.value
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  navigateTo(route:string){
    this.router.navigate(['/consentDetails']);
  }
}


