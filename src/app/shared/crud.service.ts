import { Injectable } from '@angular/core';
import { Stories } from '../shared/stories';  // Student data type interface class
// tslint:disable-next-line:max-line-length
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  storiesRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  storyRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  // tslint:disable-next-line:typedef
  AddStories(stories: Stories) {
    this.storiesRef.push({
      firstName: stories.firstName,
      lastName: stories.lastName,
      email: stories.email,
      mobileNumber: stories.mobileNumber,
      story: stories.story,
    });
  }

  // Fetch Single stories. Object
  // tslint:disable-next-line:typedef
  GetStories(id: string) {
    this.storyRef = this.db.object('stories-list/' + id);
    return this.storyRef;
  }

  // Fetch stories.s List
  // tslint:disable-next-line:typedef
  GetStoriesList() {
    this.storiesRef = this.db.list('stories-list');
    return this.storiesRef;
  }

  // Update stories. Object
  // tslint:disable-next-line:typedef
  UpdateStories(stories: Stories) {
    this.storyRef.update({
      firstName: stories.firstName,
      lastName: stories.lastName,
      email: stories.email,
      mobileNumber: stories.mobileNumber
    });
  }

  // Delete stories. Object
  // tslint:disable-next-line:typedef
  DeleteStories(id: string) {
    this.storyRef = this.db.object('stories-list/' + id);
    this.storyRef.remove();
  }
}
