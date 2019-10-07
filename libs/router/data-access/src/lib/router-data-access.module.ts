import { NgModule } from '@angular/core';
import { RouterFacade } from './+state/router.facade';

@NgModule({
  providers: [RouterFacade]
})
export class RouterDataAccessModule {}
