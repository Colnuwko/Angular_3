import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const confirmGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    return confirm('Вы уверенны, что хотите перейти?');
}