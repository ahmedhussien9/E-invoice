import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
    HttpClientModule,
} from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
        HttpClientModule,
    ],
    declarations: [UserlayoutComponent],
    providers: [
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        SharedModule

    ]
})
export class CoreModule { }
