import { NgModule } from '@angular/core';

// Paginas
import { NofoundpageComponent } from './nofoundpage/nofoundpage.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        NofoundpageComponent,
        HeaderComponent,
    ],
    exports: [
        NofoundpageComponent,
        HeaderComponent,
    ],
})
export class SharedModule { }
