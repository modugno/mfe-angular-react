import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {}

  public toggleColor = false
  public openButton = false

  ngOnInit() {}

  @HostListener('document:changeColor', [])
  onInteractionEvent() {
    this.toggleColor = !this.toggleColor
  }

  onClick() {
    const event = new CustomEvent('openButton', {
      detail: {
        data: !this.openButton
      }
    })

    this.openButton = !this.openButton
    document.dispatchEvent(event)
  }

}
