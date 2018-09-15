import {Component, Input, OnInit} from '@angular/core';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input()
  entry;

  constructor(private entryService: EntryService) {
  }

  ngOnInit() {
  }

}
