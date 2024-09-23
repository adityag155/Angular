import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

getEmpList()
{
  return[
    {"eno":100,"ename":"Aditya","salary":10000000},
    {"eno":101,"ename":"Anurag","salary":20000000},
    {"eno":102,"ename":"Omkar","salary":30000000}    
  ]

}
}
