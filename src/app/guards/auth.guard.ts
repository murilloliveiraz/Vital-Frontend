import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const AuthGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const expectedRole = route.data['role'];

    const userRole = await authService.getRoleFromToken();

    if (userRole === expectedRole) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    router.navigate(['/login']);
    return false;
  }
};
