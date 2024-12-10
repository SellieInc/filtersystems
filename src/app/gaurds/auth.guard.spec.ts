import { TestBed } from '@angular/core/testing';
import { CanActivate, Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard]
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true for a logged-in user', () => {
    spyOn(authGuard, 'canActivate').and.returnValue(true);
    expect(authGuard.canActivate()).toBe(true);
  });

  it('should navigate to /login for a logged-out user', () => {
    spyOn(authGuard, 'canActivate').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');

    expect(authGuard.canActivate()).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
