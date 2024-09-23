import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isNavOpen: boolean = false;
  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize(window.innerWidth);
    }
  }

  // Toggle menu in mobile view
  navToggling() {
    this.isNavOpen = !this.isNavOpen;
  }

  // this code for if mobile and resize to desktop will make menu return to normal case
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize(event.target.innerWidth);
    }
  }

  checkWindowSize(width: number) {
    this.isMobile = width < 768;
  }

}
