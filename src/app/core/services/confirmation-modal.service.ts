import { Injectable, ViewContainerRef, ViewChild } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ConfirmationModalComponent } from 'src/app/core/components/confirmation-modal/confirmation-modal.component'
@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {
  @ViewChild(ConfirmationModalComponent,{static:true}) confirmModal:ConfirmationModalComponent

  constructor(public viewContainerRef: ViewContainerRef, private overlay: Overlay) { }

  showDeleteConfirmation(id: number): void {
    console.log(id);
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true

    });
    overlayRef.attach(new ComponentPortal(ConfirmationModalComponent, this.confirmModal.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    })
}
}
