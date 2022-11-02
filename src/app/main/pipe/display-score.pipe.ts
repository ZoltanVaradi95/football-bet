import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayScore',
})
export class DisplayScore implements PipeTransform {
  transform(score: number): number {
    return score ? score : 0;
  }
}
