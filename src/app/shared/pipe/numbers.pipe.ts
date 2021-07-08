import { IfStmt } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'anp', pure: false
})
export class ArabicNumberPipe implements PipeTransform {
    transform(n: number): string {
        const formatNumbers = new Intl.NumberFormat(`ar-EG`, {
        }).format(n); 
        if (n === null || n === undefined) {
            return '';
        }
        return formatNumbers;
    }
}