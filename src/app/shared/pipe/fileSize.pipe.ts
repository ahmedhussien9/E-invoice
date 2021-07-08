import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "fileSize",
    pure: false
})
export class FileSizePipe implements PipeTransform {
    units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    constructor() { }

    niceBytes(x: string) {
        console.log(x);
        let l = 0, n = parseInt(x, 10) || 0;

        while (n >= 1024 && ++l) {
            n = n / 1024;
        }

        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + this.units[l]);
    }

    transform(file: any, size: string): string {
        console.log(file, size);
        return this.niceBytes(file[size])
    }


}