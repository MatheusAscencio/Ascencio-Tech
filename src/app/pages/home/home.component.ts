import { Component, OnInit } from '@angular/core';
import { TechCard } from 'src/app/components/models/interfaces/tech-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public siteTypes: string[] = ["HotSites", "Landing Page", "Site"]

  public techs: TechCard[] =[ { title: "Java", link: "https://docs.oracle.com/en/java/" },
                              { title: "Spring", link: "https://spring.io/projects/spring-boot" },
                              { title: "NodeJs", link: "https://nodejs.org/en/docs/" },
                              { title: "Angular", link: "https://angular.io/docs" } ]

  constructor() { }

  ngOnInit(): void {
  }

}
