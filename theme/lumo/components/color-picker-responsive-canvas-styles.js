import '@vaadin/button/src/vaadin-button.js';
import '@vaadin/button/theme/lumo/vaadin-button-styles.js';

import {css, registerStyles} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';


const responsiveCanvas = css`
      :host([disabled]),
      :host([readonly]) {
        pointer-events: none;
      }

      [part="canvas"] {
        @apply --responsive-canvas-background-style;
        border-radius: inherit;
      }

      :host([disabled]) {
        opacity: 0.3;
      }`;
registerStyles('responsive-canvas', responsiveCanvas, {moduleId: 'color-picker-responsive-canvas-styles'});

export {responsiveCanvas};