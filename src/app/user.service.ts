import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: Observable<firebase.User | null>;

  constructor(private firebaseAuth: AngularFireAuth, private http: HttpClient) {
    this.user = firebaseAuth.authState;
    console.log(
      'User Id token is in service',
      localStorage.getItem('userIdToken')
    );
    this.user.subscribe((userInfo) => {
      console.log('User Info is available', userInfo!.getIdToken());
      this.storeIdToken(userInfo!.getIdToken());
    });
  }

  storeIdToken(idToken: Promise<string> | undefined) {
    idToken!.then((idTokenValue) => {
      localStorage.setItem('userIdToken', idTokenValue);

      console.log('Id token value: ', localStorage.getItem('userIdToken'));
    });
  }

  signup(email: string, password: string) {
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log('Success!', value);
      })
      .catch((err: { message: any }) => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log('Nice, it worked!');
      })
      .catch((err: { message: any }) => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    localStorage.clear();
    this.firebaseAuth.auth.signOut();
  }

  getAllUsers() {
    var headers = this.getHeaders();
    this.http
      .get('http://localhost:8080/api/users/all', { headers })
      .toPromise();
  }

  getHeaders() {
    var headers = {
      userIdToken: localStorage.getItem('userIdToken'),
    };

    return headers;
  }
}
