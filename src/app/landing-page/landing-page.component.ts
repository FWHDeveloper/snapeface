import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snape.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

constructor(private router :Router){}
  goto(){
this.router.navigateByUrl('facesnaps');
  }
}
