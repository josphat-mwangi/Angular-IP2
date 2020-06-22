import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private username: string;

  private clientsecret = '79ca40eb48a12381b2c725e7ff8a0802ba95eacb';

  constructor(private http: HttpClient) {
    console.log('it works!');
    this.username = 'josphat-mwangi';
  }
  getProfileImfo() {
    return this.http.get('https://api.github.com/users/' + this.username);
  }
  getProfileRepos() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.username +
        '/repo?client_secret=' +
        this.clientsecret
    );
  }
}
