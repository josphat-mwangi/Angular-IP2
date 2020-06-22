import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  users: User[] = [
    { login: 1, followers: 7, following: 8, avatar_url: 'john' },
  ];
  repos: Repo[] = [
    {
      id: 1,
      name: 'Tom',
      description: 'happy',
      html_url: 'poa',
      repos_url: '30',
    },
  ];
  getNewUser() {}
  getNewRepo() {}

  constructor() {}

  ngOnInit(): void {}
}
