import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Info } from '../shared/types/Info';
import { InfoComponent } from '../shared/info/info.component';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink,InfoComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
 skillsInfo: Info={
  title: 'Jahnavi Skills',
  subTitle: 'Skills I posess',
  paraText: 'One of my greatest strengths is my ability to think logically and solve complex problems. I am also a strong communicator, which allows me to effectively collaborate with team members and stakeholders. In addition, I am constantly learning and staying up-to-date with the latest technologies and best practices in the field.',
  linkItems:[
    { title: 'C programming',url:'https://www.w3schools.com/java/' },
    { title: 'Python programming',url:'https://www.w3schools.com/java/' },
    { title: 'Java',url:'https://www.w3schools.com/java/' },
  ],
 };
}
