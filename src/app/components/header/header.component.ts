import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  links = ['/focus-input', '/multiple-directives', '/ng-templates', '/subscribe-observable', '/observe-input'];
  labels = ['Focus Input', 'Multiple Directives', 'Ng Templates', 'Subscribe', 'Observe Input'];
  activeLink: string | undefined;

  ngOnInit(): void {
    this.router.events.pipe(untilDestroyed(this)).subscribe(event => {
      if(event instanceof NavigationStart) {
        this.activeLink = event.url;
      }
    });
  }

  navigate(link: string) {
    this.router.navigate([link]).then();
  }
}
