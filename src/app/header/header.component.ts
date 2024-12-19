import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links = [
    { path: '/albums', label: 'Albums' },
    { path: '/archives', label: 'Archives' },
    { path: '/add-album', label: 'Add Album' }
  ];
}
