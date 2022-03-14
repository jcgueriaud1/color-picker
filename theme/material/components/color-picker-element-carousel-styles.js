import '@vaadin/icons/vaadin-icons.js';
import '@vaadin/button/theme/material/vaadin-button.js';
import {css, registerStyles} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const elementCarousel = css`
      [part="switch-button"] {
        min-width: 0;
        height: 32px;
        width: 32px;
        margin: 8px 0;
      }
`;

const switchButton = css`
      :host([part="switch-button"]) [part="prefix"] ::slotted(iron-icon) {
        margin-right: 0;
        margin-left: 0;
      }
`;

registerStyles('vaadin-button', switchButton, {moduleId: 'material-color-picker-element-carousel-switch-button'});
registerStyles('element-carousel', elementCarousel, {moduleId: 'material-color-picker-element-carousel'});

export {switchButton, elementCarousel};
