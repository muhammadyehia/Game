import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rate',
    templateUrl: 'rate.component.html',
    styleUrls: ['rate.component.css']
})
export class RateComponent {
    @Input() rate: number;
    @Output() rateClick: EventEmitter<number> = new EventEmitter<number>();
    ngOnInit() {
  
    }
    onClick(rating: number): void {
        this.rate = rating;
        this.rateClick.emit(rating);
    }
}

