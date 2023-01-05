import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liastado-noticias',
  templateUrl: './liastado-noticias.component.html',
  styleUrls: ['./liastado-noticias.component.css']
})
export class LiastadoNoticiasComponent implements OnInit {

  @Input() listadoNoticias: any;
  constructor() { }

  ngOnInit(): void {
  }

}
