import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) {}

  getLeaguesApi(page: number): Observable<any> {
    const httpHeaders = new HttpHeaders().set("X-AUTH-TOKEN", "08f7e2ee-a7c1-4f7f-b935-de365513db0f")
    return this.http.get<any>(`https://futdb.app/api/leagues?page=${page}`, { headers: httpHeaders });
  }

  getClubsApi(page: number): Observable<any> {
    const httpHeaders = new HttpHeaders().set("X-AUTH-TOKEN", "576d78bf-c3eb-405b-9f52-a8ec5fb3cbf2")
    return this.http.get<any>(`https://futdb.app/api/clubs?page=${page}`, { headers: httpHeaders });
  }

  updateFifaPlayers(page: number): Observable<any> {
    const httpHeaders = new HttpHeaders().set("X-AUTH-TOKEN", "576d78bf-c3eb-405b-9f52-a8ec5fb3cbf2")
    return this.http.get<any>(`https://futdb.app/api/players?page=${page}`, { headers: httpHeaders });
  }

  getFirestoreLeagues(): Observable<any> {
    return this.firestore.collection<any>('leagues').valueChanges();
  }
  
  updateFirestoreLeague(league: any) {
    return this.firestore.collection('leagues').doc(String(league.id)).set(league);
  }

  getFirestoreClubs(): Observable<any> {
    return this.firestore.collection<any>('clubs').valueChanges();
  }

  updateFirestoreClubs(club: any) {
    return this.firestore.collection('clubs').doc(String(club.id)).set(club);
  }

  getFirestoreFifaPlayers() {
    return this.firestore.collection<any>('fifa22players').valueChanges();
  }

  updateFirestoreFifaPlayers(player: any) {
    return this.firestore.collection('fifa22players').doc(String(player.id)).set(player);
  }
}