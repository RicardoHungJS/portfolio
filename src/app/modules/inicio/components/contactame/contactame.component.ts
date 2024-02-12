import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialMedia } from 'src/interfaces/contactMeInterfaces';
import { MailService } from 'src/services/mail/mail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.scss'],
})
export class ContactameComponent implements OnInit {
  socialMedia: Array<SocialMedia>;
  contactForm!: FormGroup;
  isLoading: boolean = false;

  Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly mailService: MailService
  ) {
    this.socialMedia = [
      {
        icon: './assets/img/social-media/linkedin.png',
        url: 'https://www.linkedin.com/in/rjh92',
      },
      {
        icon: './assets/img/social-media/github.png',
        url: 'https://github.com/RicardoHungJS',
      },
    ];
  }

  ngOnInit(): void {
    this.createContactForm();
  }

  public redirigir(url: string): void {
    window.open(url, '_blank');
  }

  private createContactForm(): void {
    this.contactForm = this.fb.group({
      names: ['', Validators.required],
      lastNames: [''],
      phoneNumber: ['', [Validators.required, Validators.min(7)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public clearForm(): void {
    this.contactForm.reset();
  }

  public onFormSubmit(): void {
    if (this.contactForm.valid) {
      this.isLoading = true;

      this.mailService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          this.Toast.fire({
            icon: 'success',
            text: 'Se ha enviado tu mensaje correctamente',
          });
          this.clearForm();
        },
        error: (err) => {
          this.isLoading = false;
          this.Toast.fire({
            icon: 'error',
            text: 'Ha ocurrido un error al enviar el correo',
          });
          console.error(
            `Ha ocurrido un error al enviar el correo: ${err.message}`
          );
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
