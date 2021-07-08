import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { FileType, UploadFileService } from 'src/app/shared/services/upload-file.service';



@Component({
  selector: 'app-invoice-sample',
  templateUrl: './invoice-sample.component.html',
  styleUrls: ['./invoice-sample.component.scss']
})

export class InvoiceSampleComponent implements OnInit {
  firstSampleFiles: File[] = [];
  secondSampleFiles: File[] = [];
  thirdSampleFiles: File[] = [];

  constructor(
    private uploadFileService: UploadFileService
  ) { }

  ngOnInit(): void {
    console.log("Invoice sample init")
  }

  droppedFiles(type: string, files: NgxFileDropEntry[]) {
    this.dropped(type, files)
  }

  dropped(type: string, files: NgxFileDropEntry[]) {
    switch (type) {
      case FileType.FIRST_SAMPLE:
        this.uploadFileService.dropped(type, files);
        this.firstSampleFiles = this.uploadFileService.firstSampleFiles;
        break;
      case FileType.SECOND_SAMPLE:
        this.uploadFileService.dropped(type, files);
        this.secondSampleFiles = this.uploadFileService.secondSampleFiles;
        break;
      case FileType.THIRD_SAMPLE:
        this.uploadFileService.dropped(type, files);
        this.thirdSampleFiles = this.uploadFileService.thirdSampleFiles;;
        break;
      default:
        break;
    }
  }

  deleteFile(type: string, index: number) {
    console.log('clicked');
    switch (type) {
      case FileType.FIRST_SAMPLE:
        this.firstSampleFiles.splice(index, 1);
        break;
      case FileType.SECOND_SAMPLE:
        this.secondSampleFiles.splice(index, 1);
        break;
      case FileType.THIRD_SAMPLE:
        this.thirdSampleFiles.splice(index, 1);
        break;
      default:
        break;
    }
  }
}
