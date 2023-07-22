import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor() { }

    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Textos y Fechas',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: 'basicos'
                    },
                    {
                        label: 'Numeros',
                        icon: 'pi pi-dollar',
                        routerLink: 'numeros'
                    },
                    {
                        label: 'no Comunes',
                        icon: 'pi pi-globe',
                        routerLink: 'no-comunes'
                    },
                ]
            },
            {
                label: 'Pipes de Personalizados',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Custom Pipes',
                        icon: 'pi pi-box',
                        routerLink: 'perzonalizados'
                    },
                ]
            },
        ];
    }


}
