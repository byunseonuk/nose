/**
 * Created by Yoon Yong (Andy) Shin on 23/12/2016
 * As part of Nosework
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & Yoon Yong (Andy) Shin - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yoon Yong (Andy) Shin <andy.shin@applicat.co.kr>, 23/12/2016
 *
 */

// Browser Lib

// Angular
import {
  Component, Input, Output, EventEmitter, Renderer, ElementRef, ChangeDetectionStrategy, SimpleChange, OnChanges
} from '@angular/core';

// Angular Third Party Lib

// Project Sources


@Component({
  selector: 'pager',
  template: `
    <ul class="pager">
      <li class="action" [class.disabled]="!canPrevious()">
        <button
          (click)="selectPage(1)">
          <i class="{{pagerPreviousIcon}}"></i>
        </button>
      </li>
      <li class="action" [class.disabled]="!canPrevious()">
        <button
          (click)="prevPage($event)">
          <i class="{{pagerLeftArrowIcon}}"></i>
        </button>
      </li>
      
      <li
        *ngFor="let pg of pages"
        [class.active]="pg.number === page">
        <button
          (click)="selectPage(pg.number)">
          {{pg.text}}
        </button>
      </li>
      
      <li class="action" [class.disabled]="!canNext()">
        <button
          (click)="nextPage($event)">
          <i class="{{pagerRightArrowIcon}}"></i>
        </button>
      </li>
      <li  class="action"[class.disabled]="!canNext()">
        <button
          (click)="selectPage(totalPages)">
          <i class="{{pagerNextIcon}}"></i>
        </button>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerComponent implements OnChanges {

  @Input() size: number = 0;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;

  @Output() change: EventEmitter<any> = new EventEmitter();

  @Input()
  set count(val: number) {
    this._count = val;
    this.pages = this.calcPages();
  }

  get count(): number {
    return this._count;
  }

  @Input()
  set page(val: number) {
    this._page = val;
    this.pages = this.calcPages();
  }

  get page(): number {
    return this._page;
  }


  get totalPages(): number {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }

  private _count: number;
  private _page: number;
  pages: any;

  constructor(element: ElementRef, renderer: Renderer) {
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
  }


  canPrevious(): boolean {
    return this.page > 1;
  }

  canNext(): boolean {
    return this.page < this.totalPages;
  }

  prevPage(event): void {
    if (this.page > 1) {
      this.selectPage(--this.page);
    }
  }

  nextPage(event): void {
    if (this.page < this.totalPages)
      this.selectPage(++this.page);
  }

  selectPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.page = page;

      this.change.emit({
        page
      });
    }
  }

  calcPages(page?: number): any[] {
    let pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    let maxSize = 5;
    const isMaxSized = maxSize < this.totalPages;

    page = page || this.page;

    if (isMaxSized) {
      startPage = ((Math.ceil(page / maxSize) - 1) * maxSize) + 1;
      endPage = Math.min(startPage + maxSize - 1, this.totalPages);
    }

    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: num
      });
    }

    return pages;
  }

}
