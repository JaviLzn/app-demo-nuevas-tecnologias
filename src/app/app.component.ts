import { Component, OnInit } from '@angular/core';
import { SampleService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sampleService: SampleService) { }

  title = 'App-Tecnologias';

  hostName: string | undefined;

  ngOnInit() {
    this.hostName = this.sampleService.getHostname();
  }

}
