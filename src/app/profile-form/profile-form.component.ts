import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  User = new User();
  Repo = new Repo();
  @Output() getUser = new EventEmitter<User>();
  @Output() getRepo = new EventEmitter<Repo>();

  submitUser() {
    this.getUser.emit(this.User);
  }

  submitRepo() {
    this.getRepo.emit(this.Repo);
  }

  constructor() {}

  ngOnInit(): void {}
}
