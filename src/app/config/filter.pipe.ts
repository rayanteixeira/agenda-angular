import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter((el: any) => {
                return el.nome.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    }
}