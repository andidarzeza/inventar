import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isOpened = false;
  constructor(public sharedService: SharedService) { }
  items = [
    {
      icon: 'book',
      text: 'Librat',
      link: '/librat'
    },
    {
      icon: 'supervised_user_circle',
      text: 'Anetaret',
      link: '/anetaresimet'
    },
    {
      icon: 'bar_chart',
      text: 'Statistikat',
      link: '/statistics'
    },
    {
      icon: 'settings',
      text: 'Cilesimet',
      link: '/cilesimet'
    }

  ];

  ngOnInit(): void {
  }

  toggleSideBar(): void {
    if(this.isOpened) {
      this.closeSideBar();
    } else {
      this.openSideBar();
    }
    this.isOpened = !this.isOpened;
  }

  openSideBar(): void {
    const sideBar = document.getElementById('sidebar') as HTMLElement;
    const application = document.getElementById('application-body') as HTMLElement;
    const toggle = document.getElementById('toggle-id') as HTMLElement;
    sideBar.style.width = '18%';
    application.style.width = '82%';
    toggle.style.right = '0';
    toggle.style.left = 'auto';
    toggle.style.transform =  'none';
    const items = document.getElementsByClassName('opened-menu-item') as HTMLCollection;
    for(var i = 0;i<items.length;i++) {
      const item = items[i] as HTMLElement;
      item.style.padding = '10px 25px';
    }
  }

  closeSideBar(): void {
    const sideBar = document.getElementById('sidebar') as HTMLElement;
    const application = document.getElementById('application-body') as HTMLElement;
    const toggle = document.getElementById('toggle-id') as HTMLElement;
    sideBar.style.width =   '60px';
    application.style.width = '100%';
    toggle.style.left = '50%';
    toggle.style.transform =  'translateX(-50%)';
    const items = document.getElementsByClassName('opened-menu-item') as HTMLCollection;
    for(var i = 0;i<items.length;i++) {
      const item = items[i] as HTMLElement;
      item.style.padding = '10px 18px';
    }
  }

  changePaddingOfItems(className: string): void {
    const items = document.getElementsByClassName(className) as HTMLCollection;
    for(var i = 0;i<items.length;i++) {
      const item = items[i] as HTMLElement;
      if(this.isOpened) {
        item.style.padding = '10px 18px';
      } else {
        item.style.padding = '10px 25px';
      } 
    }
  }

}
