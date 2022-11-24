import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { ItemComponent } from './item/item.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { ErroComponent } from './erro/erro.component';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NovaMovimentacaoComponent } from './nova-movimentacao/nova-movimentacao.component';

@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    MovimentacaoComponent,
    ItemComponent,
    ReservaComponent,
    PrevisaoComponent,
    ErroComponent,
    HomeComponent,
    NovaMovimentacaoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
