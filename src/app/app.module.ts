import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{path:"",component:HomeComponent},
                       {path:"home",component:HomeComponent},
                      {path:"edit",component:EditComponent},
                    {path:"**",component:HomeComponent}
                   ])
  ],  
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
