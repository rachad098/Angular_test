import { Component } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts = [
      {
        title : 'Mon premier post',
        content : loremIpsum(),
        loveIts : 5,
        created_at : new Date()
      },
      {
        title : 'Mon deuxième post',
        content : loremIpsum(),
        loveIts : -4,
        created_at : new Date()
      },
      {
        title : 'Encore un post',
        content : loremIpsum(),
        loveIts : 0,
        created_at : new Date()
      }
  ];
}
