import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})

export class SobreComponent implements OnInit {

  // para añadir un video de youtube la SRC entre CCORCHETES y el Transformer para la URL con ''
  constructor(private backend: BackendService, private sanitizer: DomSanitizer) { }

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

  }

}
