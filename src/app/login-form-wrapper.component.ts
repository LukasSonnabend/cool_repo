import { Component } from '@angular/core';
import { LoginForm } from "./login-form.component";

@Component({
  selector: 'app-login-form-wrapper',
  standalone: true,
  template: `
    <div class="flex flex-col items-center md:items-stretch md:flex-row w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
      <div class="block md:hidden w-72 h-72 md:w-1/2 md:h-auto rounded-lg relative overflow-hidden justify-center">
        <!-- Background image -->
        <div class="absolute inset-0" style="background-image: url('{{ imageUrl }}'); background-size: cover;"></div>

        <!-- Overlay lines -->
        <div class="absolute inset-0" style="overflow: hidden;">
          <div class="absolute top-1/3 left-0 w-full h-2 bg-dark transform -translate-y-1/2"></div>
          <div class="absolute top-2/3 left-0 w-full h-2 bg-dark transform -translate-y-1/2"></div>
          <div class="absolute top-0 left-1/3 h-full w-2 bg-dark transform -translate-x-1/2"></div>
          <div class="absolute top-0 left-2/3 h-full w-2 bg-dark transform -translate-x-1/2"></div>
        </div>
      </div>

      <div class="hidden md:block md:w-1/2 md:h-auto rounded-lg relative overflow-hidden justify-center">
        <!-- Background image -->
        <div class="absolute inset-0" style="background-image: url('{{ imageUrl }}'); background-size: cover;"></div>

        <!-- Overlay lines -->
        <div class="absolute inset-0" style="overflow: hidden;">
          <div class="absolute top-1/3 left-0 w-full h-2 bg-dark transform -translate-y-1/2"></div>
          <div class="absolute top-2/3 left-0 w-full h-2 bg-dark transform -translate-y-1/2"></div>
          <div class="absolute top-0 left-1/3 h-full w-2 bg-dark transform -translate-x-1/2"></div>
          <div class="absolute top-0 left-2/3 h-full w-2 bg-dark transform -translate-x-1/2"></div>
        </div>
      </div>

      <div class="w-full xl:w-1/2 px-4 py-4 text-center">
        <app-login-form></app-login-form>
      </div>
    </div>
  `,
  imports: [LoginForm]
})
export class LoginFormWrapper {
  imageUrl = 'https://images.unsplash.com/photo-1550367088-9eb46b0ed5f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
}
