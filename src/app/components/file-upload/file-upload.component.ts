import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {

  @Input() currentUser: [] = null;
  @Input() size = "md";
  @Input() showSelectionColumn = false;
  @Input() enableSingleSelect = false;
  @Input() striped = true;
  @Input() isDataGrid = true;
  @Input() noData = true;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() sortable = true;
  @Input() title = "Data";
  @Input() description = "";
  @Input() disabled = false;

  @Input() theme = ""

  @ViewChild("overflowMenuItemTemplate", { static: false }) overflowMenuItemTemplate: TemplateRef<any>;

  model = new TableModel();
  loading: boolean = false;
  placeholder = "placeholder"
  invalid = false;
  label = "Add the Dataset";
  helperText = "";
  invalidText = "";
  autocomplete = false;
  csv: string | ArrayBuffer = '';
  fileName = "";
  csvArray: any[] = [];
  csvdata: string | ArrayBuffer;
  header:any;
  searchModel: "Initial search value";
  offset: {
    x: -9,
    y: 0
  }
  previewTitle="Preview Dataset"
  tableContent=[]

  constructor() { }

  ngOnInit(): void {

    this.model.header = [
      new TableHeaderItem({
        data: "rd"
      }),
      new TableHeaderItem({
        data: "vols iops total"
      }),
      new TableHeaderItem({
        data: "vols mbps total"
      }),
      new TableHeaderItem({
        data: "vols ms total"
      }),
      new TableHeaderItem({
        data: "vols ms read"
      }),
      new TableHeaderItem({
        data: "vols ms write"
      }),
      new TableHeaderItem({
        data: "mdisks ms total"
      }),
      new TableHeaderItem({
        data: "mdisks ms read"
      }),
      new TableHeaderItem({
        data: "mdisks ms write"
      }),
      new TableHeaderItem({
        data: "cache perc read"
      }),
      new TableHeaderItem({
        data: "cache perc write"
      }),
      new TableHeaderItem({
        data: "cpu perc max"
      }),
      new TableHeaderItem({
        data: "bus mbps total"
      }),
      new TableHeaderItem({
        data: "comm ms local"
      }),
      new TableHeaderItem({
        data: "cache perc write valid intervals"
      }),
      new TableHeaderItem({
        data: "cache perc write median"
      })
    ];
  }

  onSelectFile(event: any) {
    this.loading=true
    if (event.target.files && event.target.files.length > 0) {
      let file: File = event.target.files.item(0);
      let fileReader: FileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = ev => {
        this.csvdata = fileReader.result.toString();
        let body = { data: this.csvdata };

        const list = fileReader.result.toString().split('\n');

        for(let i=1;i<list.length;i++){
          this.csvArray.push(list[i])
        }

        let dataset=[]
    

            for(let i=0; i<this.csvArray.length;i++){

              this.tableContent = [
                new TableItem({'data': this.csvArray[i].split(',')[0]}),
                new TableItem({'data': this.csvArray[i].split(',')[1]}),
                new TableItem({'data': this.csvArray[i].split(',')[2]}),
                new TableItem({'data': this.csvArray[i].split(',')[3]}),
                new TableItem({'data': this.csvArray[i].split(',')[4]}),
                new TableItem({'data': this.csvArray[i].split(',')[5]}),
                new TableItem({'data': this.csvArray[i].split(',')[6]}),
                new TableItem({'data': this.csvArray[i].split(',')[7]}),
                new TableItem({'data': this.csvArray[i].split(',')[8]}),
                new TableItem({'data': this.csvArray[i].split(',')[9]}),
                new TableItem({'data': this.csvArray[i].split(',')[10]}),
                new TableItem({'data': this.csvArray[i].split(',')[11]}),
                new TableItem({'data': this.csvArray[i].split(',')[12]}),
                new TableItem({'data': this.csvArray[i].split(',')[13]}),
                new TableItem({'data': this.csvArray[i].split(',')[14]}),
                new TableItem({'data': this.csvArray[i].split(',')[15]}),
              ]
              dataset.push(this.tableContent)
    
            }
            this.model.data = dataset;
            this.noData=false
            this.loading=false
      };

    }
  }


}
