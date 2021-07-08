import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { NgxFileDropModule } from "ngx-file-drop";
import { UploadFileDetailsComponent } from './components/upload-file-details/upload-file-details.component';
import { FileSizePipe } from "./pipe/fileSize.pipe";
import { RouterModule } from "@angular/router";
import { ArabicNumberPipe } from "./pipe/numbers.pipe";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxFileDropModule,
        RouterModule
    ],

    declarations: [
        // Pipe
        FileSizePipe,
        ArabicNumberPipe,
        NavbarComponent,
        UploadFileComponent,
        UploadFileDetailsComponent,

    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxFileDropModule,
        RouterModule,
        // Pipe
        FileSizePipe,
        ArabicNumberPipe,
        // components
        NavbarComponent,
        UploadFileComponent,
        UploadFileDetailsComponent,

    ],
    entryComponents: [],

})
export class SharedModule {
}
