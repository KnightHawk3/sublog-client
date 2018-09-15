import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entry} from './entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {


  constructor(private http: HttpClient) {
  }

  getEntry(num: Number) {
    return this.http.get('api/calendarEntries/' + num);
  }

  addEntry(entry: Entry) {
    return this.http.post('/api/calendarEntries', entry).subscribe((value) => console.log(value));
  }

  parseEntry(data) {
    return {
        substance: data['substance'],
        date: data['datetime'],
        amount: data['amount'],
        unit: data['unit']
      };
  }

  getEntries() {
    return this.http.get('api/calendarEntries/');
  }
}
