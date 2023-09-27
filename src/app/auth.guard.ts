import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenVal = localStorage.getItem('token');
  const router = inject(Router);

  if (tokenVal) {
    return true;
  } else {
    router.navigate(['unaccepted']);
    return false;
  }
};
