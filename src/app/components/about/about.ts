import { Component, Inject, LOCALE_ID } from '@angular/core';
import { environment } from '../../data/environments';
import { CommonModule } from '@angular/common';
// Import Bootstrap JS
import * as bootstrap from 'bootstrap';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  parcours = environment.parcours;
  allSkills = environment.allSkills
  projects = environment.projects;
  hardSkills = environment.hardSkills;
  selectedParcours: any = null;
  selectedProject: any = null;

  constructor(
    @Inject(LOCALE_ID) public locale: string) {}

  showModal = false;

  getParcours(): any {
    return this.parcours;
  }
  getParcoursById(id: string) {
    return this.parcours.find(p => p.id === id);
  }

  getSkillsById(id: string) {
    return this.allSkills.find(s => s.id === id);
  }

  isValidLogo(url: string): boolean {
    return !!url && typeof url === 'string' && !url.includes('undefined') && !url.includes('null');
  }
  openParcoursModal(p: any) {
    this.selectedParcours = p;
    this.showModal = true;
  }

  filteredProjectsByCompany(company: string): any {
    return this.projects.filter(p => p.company === company);
  }
}
