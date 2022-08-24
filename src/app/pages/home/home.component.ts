import { Component, OnInit } from '@angular/core';
import { SiteCard } from 'src/app/components/models/interfaces/site-card.interface';
import { TechCard } from 'src/app/components/models/interfaces/tech-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public siteTypes: SiteCard[] = [ { title: "HotSite", link: "https://docs.oracle.com/en/java/" },
                                   { title: "Landing Page", link: "https://spring.io/projects/spring-boot" },
                                   { title: "Site", link: "https://nodejs.org/en/docs/" } ]

  public techs: TechCard[] =[ { title: "Java", link: "https://docs.oracle.com/en/java/" },
                              { title: "Spring", link: "https://spring.io/projects/spring-boot" },
                              { title: "NodeJs", link: "https://nodejs.org/en/docs/" },
                              { title: "Angular", link: "https://angular.io/docs" } ]

  constructor() { }

  ngOnInit(): void {
  }

}
