import { Component, OnInit } from '@angular/core';
import { Graduate } from 'src/app/models/graduate';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  graduates:Graduate[] = [
    {id:1,firstname:'Caleb',lastname:'Bii',email:'cal@gmail.com',imageUrl:'',certificate:'M.Sc.'},
    {id:2,firstname:'Gideon',lastname:'Ngetich',email:'gid@gmail.com',imageUrl:'',certificate:'BSc'},
    {id:3,firstname:'Dan',lastname:'Muhadi',email:'dan@gmail.com',imageUrl:'',certificate:'SB'},
    {id:4,firstname:'Maryann',lastname:'ann',email:'ann@gmail.com',imageUrl:'',certificate:'ScB'},
    {id:5,firstname:'Muhamed',lastname:'Abdi',email:'muham@gmail.com',imageUrl:'',certificate:'PhD'},
    {id:6,firstname:'Mercy',lastname:'Meni',email:'Mercy@gmail.com',imageUrl:'',certificate:'AssocDip'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
