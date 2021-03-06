import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab1/detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1-detail/tab1-detail.module').then(m => m.Tab1DetailPageModule)
          }
        ]
      },
      {
        path: 'tab1/detail2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1-detail2/tab1-detail2.module').then(m => m.Tab1Detail2PageModule)
          }
        ]
      },
      {
        path: 'tab1/detail3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1-detail3/tab1-detail3.module').then(m => m.Tab1Detail3PageModule)
          }
        ]
      },
      {
        path: 'tab1/detail4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1-detail4/tab1-detail4.module').then(m => m.Tab1Detail4PageModule)
          }
        ]
      },
      {
        path: 'tab1/detail5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1-detail5/tab1-detail5.module').then(m => m.Tab1Detail5PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
