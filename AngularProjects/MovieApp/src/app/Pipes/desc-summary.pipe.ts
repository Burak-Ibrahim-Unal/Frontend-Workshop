import { Pipe, PipeTransform } from '@angular/core';

// This pipe is made for description to constrict details string length..


@Pipe({
  name: 'descSummary'
})
export class DescSummaryPipe implements PipeTransform {

  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    limit = limit ? limit : 20;
    if (limit > value.length) {
      return value;
    }
    return value.substring(0, limit) + "...";
  }

}
