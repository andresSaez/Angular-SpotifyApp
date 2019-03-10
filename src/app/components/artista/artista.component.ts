import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.getArtista(this.route.snapshot.params.id);
    this.getTopTracks(this.route.snapshot.params.id);
  }

  ngOnInit() {
  }

  getArtista( id: string ) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe( data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks(id)
      .subscribe( topTracks => this.topTracks = topTracks );
  }
}
