import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    SharedModule,
    StoreDevtoolsModule.instrument({logOnly: environment.production})
  ]
})
export class AuthModule {}
