import {Component, OnInit} from '@angular/core';
import {Entry} from '../entry';
import {Router} from '@angular/router';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {


  model = new Entry('Speed', new Date(), 10, 'mg');

  submitted = false;

  constructor(
    private router: Router,
    private entryService: EntryService,
  ) {}

  onSubmit() {
    this.submitted = true;
    this.entryService.addEntry(this.model);
    this.router.navigateByUrl('/');
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
  }

}
