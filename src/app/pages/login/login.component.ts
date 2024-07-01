import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasError: boolean = false;
  errorMessage: string = '';
  user: any;
  isAdmin: boolean= true;
  isDoctor: boolean = false;
  constructor(private authService: AuthService,
        private router:Router,
  ){ }
  private docLink = '/doctors';
  // private adminLink ='/admins';
  private adminLink ='/home';
  currentPos: string = '';
  ngOnInit(): void {
  }

    Admin():void{
      this.isDoctor = false;
      this.isAdmin = true;
      console.log(`Admin is ${this.isAdmin} and Doctor is ${this.isDoctor}`)
    }

    Doctor():void{
      this.isAdmin = false;
      this.isDoctor = true;
      console.log(`Admin is ${this.isAdmin} and Doctor is ${this.isDoctor}`)
    }

    loginAdmin(oForm: NgForm): void{
      // console.log(oForm.value)
      this.authService.loginAdmin(oForm.value).subscribe(
        // next:
        (res)=>{
          if(res['status']== 'success'){
            this.authService.authToken = res['data']!['token'];
            // console.log(`TOKEN ${this.authService.authToken}`)
            this.authService.saveAuthToken();
            // let savedToken = this.authService.getToken();
            // console.log(`Saved Token:${savedToken}`)
            this.authService.getCurrentAdmin(()=>{
              this.user = this.authService.admin;
              console.log(`the user info is: ${JSON.stringify(this.user)}`);
              this.currentPos = this.user.position;

              // if(this.currentPos==='head of department/Manager'){
              //   // conditional should be ammended later to accomodate for oficial titleing
              //   this.router.navigate([this.adminLink])  
              //   console.log(`USER:${JSON.stringify(this.user)} you should be logged in now `)              
              //   }else{
              //     this.router.navigate([this.docLink])
              //     console.log(`RESPONSE:${res}`)
              //   }
              this.router.navigate(['/admins'])
            });
          } 
        },
        (err)=>{
          this.hasError = true;
          this.errorMessage= err.error.massage
          // console.log(err)
        }
      );
    }

    loginDoctor(oForm: NgForm): void{
      // console.log(oForm.value)
      this.authService.loginDoc(oForm.value).subscribe(
        // next:
        (res)=>{
          if(res['status']== 'success'){
            this.authService.authToken = res['data']!['token'];
            // console.log(`TOKEN ${this.authService.authToken}`)
            this.authService.saveAuthToken();
            // let savedToken = this.authService.getToken();
            // console.log(`Saved Token:${savedToken}`)
            this.authService.getCurrentdoctor(()=>{
              this.user = this.authService.doc;
              console.log(`the user info is: ${JSON.stringify(this.user)}`);
              this.currentPos = this.user.position;
              this.router.navigate([`/doctorUser/${this.user.id}`]);
            });
            this.user = this.authService.doc
            // console.log(`the user id is (inside if function): ${this.authService.doc}`)
            
          }
          // console.log(`the user id is : ${this.authService.doc}`)
        },
        (err)=>{
          this.hasError = true;
          this.errorMessage= err.error.massage
          // console.log(err)
        }
      );
    }
}
