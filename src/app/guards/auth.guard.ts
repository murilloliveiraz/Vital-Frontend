import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const AuthGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const expectedRoles = route.data['role'];

    const userRole = await authService.getRoleFromToken();

    if (typeof expectedRoles === 'string' && userRole === expectedRoles) {
      return true;
    }

    if (Array.isArray(expectedRoles) && expectedRoles.includes(userRole)) {
      return true;
    }

    router.navigate(['/login']);
    return false;
  } catch (error) {
    router.navigate(['/login']);
    return false;
  }
};
