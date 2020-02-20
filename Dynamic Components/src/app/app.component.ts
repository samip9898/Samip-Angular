import { Component } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core'
import { DisplayComponent } from './display/display.component'
import { Overlay, OverlayRef } from '@angular/cdk/overlay'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentRef: any;

  title = 'dynamic-component';

  @ViewChild('messageContainer', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DisplayComponent>
  constructor(private resolver: ComponentFactoryResolver, private overlay: Overlay) { }


  createComponent(message) {
    this.entry.clear();
    const ComponentFactory = this.resolver.resolveComponentFactory(DisplayComponent);
    this.componentRef = this.entry.createComponent(ComponentFactory);
    this.componentRef.instance.message = message;
  }

  cdkPortal() {
    this.componentPortal = new ComponentPortal(DisplayComponent);
    this.selectedPortal = this.componentPortal;

  }
  destroyCdk() {
    this.selectedPortal.detach();
  }

  showOverlay() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true

    });
    overlayRef.attach(new ComponentPortal(DisplayComponent));
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    })
  }

  
  destroyComponent() {
    this.componentRef.destroy();
  }
}



