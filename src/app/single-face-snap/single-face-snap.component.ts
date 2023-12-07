import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snape.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!:FaceSnap;
  buttonText !:string;
  
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {} 
  ngOnInit()
  {
    this.buttonText="Oh Snap!";
    const faceSnapId = +this.route.snapshot.params['id']
    this.faceSnap=this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onAddSnap() {
    this.faceSnap.snaps++;
  }
  onSnap(){
    if(this.buttonText=='Oh Snap!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText ='Oops, unSnap!';

    }else{
     this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText="Oh Snap!";

    }
  }

}
