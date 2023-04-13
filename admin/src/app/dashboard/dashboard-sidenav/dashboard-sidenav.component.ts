import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent implements OnInit {
  opened=false;
  constructor(private sideNavService:SidebarServiceService) { }

  ngOnInit(): void {
  }
  clickMenu() { 
    this.sideNavService.toggle();
  }
}
