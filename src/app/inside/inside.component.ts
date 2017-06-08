import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {
  showNum = 0;

  constructor(private injector: Injector) { 
    this.showNum = this.injector.get('showNum');
  }

  ngOnInit() {
    console.log('showNum', this.showNum);
  }

}
