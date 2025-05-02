import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [CommonModule],
})
export class NavBarComponent implements OnInit {
  logoUrl: string | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    const brandName = 'brandA'; // You can change this dynamically or make it configurable
    const branding = this.configService.getBranding(brandName);
    this.logoUrl = branding?.logoUrl;
  }
}
