import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styles: []
})
export class BreadcrumpsComponent implements OnInit {

  label: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta,
    ) {

    this.getDataRoute()
    .subscribe(event => {
        console.log(event);
        this.label = event.titulo;
        this.title.setTitle('Admin | ' + this.label);

        let metaTaq: MetaDefinition = {
          name: 'description',
          content: this.label
        };

        this.meta.updateTag(metaTaq);
      });
  }

  ngOnInit() {
  }

  getDataRoute() {

    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map((evento: ActivationEnd) => evento.snapshot.data));
  }

}
