import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'produto', data: { breadcrumb: 'Produto' }, loadChildren: () => import('../dashboard/componts/produto/produto.module').then(m => m.ProdutoModule) },
        { path: 'qrReader', data: { breadcrumb: 'qrReader' }, loadChildren: () => import('../dashboard/componts/qr-reader/qr-reader.module').then(m => m.QrReaderModule) },
        { path: 'input', data: { breadcrumb: 'Input' }, loadChildren: () => import('../dashboard/componts/input/inputdemo.module').then(m => m.InputDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
