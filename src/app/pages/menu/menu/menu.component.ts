import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
  }

  updateLeagues() {
    let i = 1;
    while (i < 4) {
      this.firebaseService.getLeaguesApi(i).subscribe(response => {
        if (response) {
          response.items.forEach((e: any) => {
            this.firebaseService.updateFirestoreLeague(e);
            console.log(e);
            i++;
          });
        }
      })
    }
  }

  async updateClubs() {
    const pages = [29, 28]
    for (let i = 0; i < pages.length; i++) {
      this.firebaseService.getClubsApi(pages[i]).subscribe(response => {
        response.items.forEach(async  (e: any) => {
          await this.firebaseService.updateFirestoreClubs(e);
        });
      })
    }
  }

  async updateFifaPlayers() {
    const pages = [
      530
    ]
    for (let i = 0; i < pages.length; i++) {
      this.firebaseService.updateFifaPlayers(pages[i]).subscribe(response => {
        response.items.forEach(async (e: any) => {
          await this.firebaseService.updateFirestoreFifaPlayers(e);
        });
      })
    }
  }
  
  getFifa22Players() {
    this.firebaseService.getFirestoreFifaPlayers().subscribe(response => {
      console.log(response.length);
    });
  }

  getClubs() {
    this.firebaseService.getFirestoreClubs().subscribe(response => {
      console.log(response.length);
    });
  }


  getFirestoreItems() {
    this.firebaseService.getFirestoreLeagues().subscribe(response => {
      console.log(response.length);
    });
  }

  saveData() {

  }

}
