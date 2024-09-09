import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Info } from '../shared/types/Info';
import { InfoComponent } from "../shared/info/info.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, InfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeInfo: Info={
    title: 'Jahnavi Latha Tirumalasetty',
    subTitle: 'Software Developer Traine at UST',
    paraText: 'Hello, I am a software developer with a passion for creating high-quality, user-friendly applications. I have a strong background in several programming languages, including Java, Python, and C++, and I have experience working with a variety of frameworks and tools.Welcome to the Learning and Development page. ',
    linkItems: [
      { title: 'Github Profile', url:'https://github.com/jahnavilatha'},
      { title: 'Leetcode Profile', url:'https://leetcode.com/discuss/interview-question?currentPage=1&orderBy=hot&query='},
    ],
  };

}
