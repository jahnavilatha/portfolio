import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Info } from '../shared/types/Info';
import { InfoComponent } from '../shared/info/info.component';
@Component({
  selector: 'app-back',
  standalone: true,
  imports: [RouterLink,InfoComponent],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
  backInfo: Info={
    title: 'Thanks For Visiting!!',
    subTitle: ' Have a Good Day!',
  }
}
