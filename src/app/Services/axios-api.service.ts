import { Injectable } from '@angular/core';import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AxiosApiService {

  constructor() { }

  getEmployes(){
    return axios.get(
      'https://api-test.sesametime.com/schedule/v1/work-entries',
      { headers: { Authorization: `Bearer 16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f` } },
    )
  }
workEntryIn(id:string) {
  axios.post(
      'https://api-test.sesametime.com/schedule/v1/workentries/clock-in',
      {
          employeeId: id,
          workEntryIn: {
              coordinates: {
                  latitude: 0,
                  longitude: 0
              }
          }
      },
      { headers: { Authorization: `Bearer 16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f` } },
  ).then( (response) =>{
    console.log(response);
  });
}
workEntryOn(id:string) {
  axios.post(
      'https://api-test.sesametime.com/schedule/v1/workentries/clock-on',
      {
          employeeId: id,
          workEntryOn: {
              coordinates: {
                  latitude: 0,
                  longitude: 0
              }
          }
      },
      { headers: { Authorization: `Bearer 16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f` } },
  ).then(function (response) {
      console.log(response);
  });
}

}
