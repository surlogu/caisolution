import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['id', 'title', 'body', 'view'];

  constructor(  private http: HttpClient, public dialog: MatDialog) { }

 ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe(res => {
       console.log(res)
       let data:any=res;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

 }

 viewPost(element:any){
   this.dialog.open(ViewPageComponent, { data: element, width: '100%', height:"auto" }).afterClosed().subscribe((data: any) => {
      if (data) {

        console.log('After Closed:' + JSON.stringify(data));
      }
    });
 }


}

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ViewPageComponent implements OnInit {

postData:any;

  constructor( public dialogRef: MatDialogRef<ViewPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
this.postData=data;
    }

 ngOnInit() {


 }

 closeDialog(): void {
    this.dialogRef.close();
  }


}

