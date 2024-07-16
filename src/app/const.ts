import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

export const Slide = [
    trigger('slideInOut', [
        transition(':enter', [
          style({ transform: 'translateX(100%)' }),
          style({opacity: 0.0}),
          animate('200ms ease-in', style({transform: 'translateX(0%)', opacity: 1})),
        ]),
        transition(':leave', [
          animate('200ms ease-in', style({transform: 'translatex(-100%)', opacity: 0.0}))
        ])
      ])
];


export const APP: any = {
    ApiUrl: 'http://190.68.154.214:8383/restlmC/'
}