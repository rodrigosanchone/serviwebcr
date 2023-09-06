import { Component, OnInit} from '@angular/core';
import * as Aos from 'aos';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators,FormGroup,  FormControl, } from '@angular/forms';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  });

  submitted = false; // Agrega la propiedad submitted
  nombre: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  email: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.email]);
  mensaje: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.maxLength(256)]);
  telefono: UntypedFormControl = new UntypedFormControl("", [Validators.required]);

  responseMessage!: string; // the response message to show to the user
  responseMessage2!: string; // the response message to show to the user
  responseMessage3!: string; // the response message to show to the user
  responseMessage4!: string; // the response message to show to the user
  constructor(private formBuilder: UntypedFormBuilder) {
  
    this.form = this.formBuilder.group({
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje,
      telefono: this.telefono,
    });
  }
  ngOnInit() {
    Aos.init();
  }
  onSubmit(e:Event){
    console.log(this.nombre)
    this.submitted= true;
     e.preventDefault()
     if(this.nombre.value.length < 3){
       this.responseMessage= "El nombre debe tener más de 3 letras";
       setInterval(()=>{
         this.responseMessage = "";
       }, 5000);
     }
     if(this.email.value.length<1){
      this.responseMessage2= "Debe ingresar un correo valido";
      setInterval(()=>{
        this.responseMessage2 = "";
      }, 5000);
    }
    if(this.telefono.value<1){
      this.responseMessage3= "Debe ingresar un teléfono";
      setInterval(()=>{
        this.responseMessage3 = "";
      }, 5000);
    }
    if(this.mensaje.value.length<1){
      this.responseMessage4= "No dejes tu mensaje vacio ";
      setInterval(()=>{
        this.responseMessage4 = "";
      }, 5000);
    }
    if(this.nombre.value.length < 3 || this.email.value.length<1 || this.telefono.value<1 || this.mensaje.value.length<1){
      Swal.fire({
        title: 'Error!',
        text: 'Faltan datos que rellenar',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
     }else{
      emailjs.sendForm('service_umtfh0f', 'template_321yetp', e.target as HTMLFormElement, 'o7jPDOKhjIuN6mYNL')
      .then((result: EmailJSResponseStatus) => {
         
      }, (error) => {
    
      });
      Swal.fire({
        title: 'Enviado!',
        text: 'Gracias por contactarme, pronto te contactara',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      this.form.reset()
     }
 }

 
}
