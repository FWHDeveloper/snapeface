import { Component } from '@angular/core';
import { FaceSnap } from 'src/models/face-snap.model';
import { FaceSnapsService } from '../services/face-snape.service'
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapService:FaceSnapsService){}
  ngOnInit() {
    this.faceSnaps = this.faceSnapService.faceSnaps;
  }
}
