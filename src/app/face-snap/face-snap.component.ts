import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from 'src/models/face-snap.model';
import { FaceSnapsService } from '../services/face-snape.service';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

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