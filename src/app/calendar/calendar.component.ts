import { Component, OnInit } from '@angular/core';
import { InsideComponent } from '../inside/inside.component';

import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  zeroBefore = [];
  zeroAfter = [];
  dayWeekRus = ["П", "В", "С", "Ч", "П", "С", "В"];
  arrMonths;
  componentData = null;

  B = []; A = []; arr = []; arrMain = []; VV = [];

  constructor() { }

  generateZeroBefore(firstDay) {
    let B = [];
    if (firstDay != 0) {
      for (let i = 1; i < firstDay; i++) {
        B.push(0);
      }
    } else {
      for (let i = 0; i < 6; i++) {
        B.push(0);
      }
    }
    return B;
  }
  generateZeroAfter(lastDay) {
    let A = [];
    if (lastDay != 0) {
      for (let i = lastDay; i < 7; i++) {
        A.push(0);
      }
    }
    return A;
  }
  generateMonth(lastDay) {
    let arr = [];
    for (let i = 1; i <= lastDay; i++) {
      arr.push({
        id: i
      });
    }
    return arr;
  }
  generateCalendareArr(main) {
    let NN = [];
    let VV = [];

    main.forEach((item, index, arr) => {
      NN.push(item);
      if ((index + 1) % 7 == 0) {
        VV.push(NN);
        NN = [];
      }
    });
    return VV;
  }

  generateClndr(dateIn) {
    let dayWeekFirst = moment().year(dateIn.y).month(dateIn.m).startOf('month').day();
    let dayWeekLast = moment().year(dateIn.y).month(dateIn.m).endOf('month').day();
    let countDayMonth = moment().year(dateIn.y).month(dateIn.m).daysInMonth();

    let zeroBefore = this.generateZeroBefore(dayWeekFirst);
    let zeroAfter = this.generateZeroAfter(dayWeekLast);
    let arr = this.generateMonth(countDayMonth);

    let mainArr = zeroBefore.concat(arr, zeroAfter);
    let mainArrTest = this.generateCalendareArr(mainArr);

    return {
      arrFormat: mainArrTest,
      arrNoFormat: mainArr
    };
  }

  ngOnInit() {
    let date = {
      y: moment().year(),
      m: moment().month()
    };
    this.arrMonths = this.generateClndr(date);
    console.log('arrForMain', this.arrMonths);

  }

  onSelectDay(day): void {
    console.log('day', day);
    // this.dayMonth = day.date_action;
    // this.dayWeekString = moment(day.date_action).format('dddd');
    // this.nextIndex = this.arrNoFormatting.indexOf(day);
    // this.selectedDay = this.arrNoFormatting[this.nextIndex];
    this.createInsideComponent(day.id);
  }

  getCountDay(obj) {
    return Object.keys(obj).length > 1;
  }


  weekendDayStyle(index) {
    return index != 0 && index % 5 == 0 || index != 0 && index % 6 == 0;
  }

  createInsideComponent(value: Number) {
    this.componentData = {
      component: InsideComponent,
      inputs: {
        showNum: value
      }
    }
  }

}
