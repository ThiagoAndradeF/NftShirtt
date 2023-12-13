import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'DASHBOARD',
                items: [
                    { label: 'Pedidos', icon: 'pi pi-fw pi-truck', routerLink: ['/'] },
                    { label: 'Produtos', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/produto'] },
                    { label: 'Serviços Adicionais', icon: 'pi pi-cart-plus', routerLink: ['/uikit/input'] },
                    { label: 'Qr Code', icon: 'pi pi-cart-plus', routerLink: ['/uikit/qrReader'] },
                ]
            },

        ];
    }
}
