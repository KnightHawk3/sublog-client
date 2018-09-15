import {Component, OnInit} from '@angular/core';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-entrylist',
  templateUrl: './entrylist.component.html',
  styleUrls: ['./entrylist.component.css']
})
export class EntrylistComponent implements OnInit {
  entries = [];

  showEntry() {
    this.entryService.getEntries()
      .subscribe((data) => {
        for (const entry in data['_embedded']['calendarEntries']) {
          if (data['_embedded']['calendarEntries'].hasOwnProperty(entry)) {
            this.entries.push(this.entryService.parseEntry(data['_embedded']['calendarEntries'][entry]));
          }
        }
      });
  }

  constructor(private entryService: EntryService) {
  }

  ngOnInit() {
    this.showEntry();
  }

}
