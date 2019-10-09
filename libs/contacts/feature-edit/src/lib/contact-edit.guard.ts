import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditComponent } from './edit/edit.component';

/**
 * Prevents users from exiting the edit/create page when they have made changes.
 */
@Injectable({
  providedIn: 'root'
})
export class ContactEditGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent): boolean {
    const hasUnsavedChanges = component.form.dirty && !component.hasSaved;
    if (hasUnsavedChanges) {
      if (confirm('You have unsaved changes! If you leave without saving, your changes will be lost.')) return true;
      else return false;
    }
    return true;
  }
}
