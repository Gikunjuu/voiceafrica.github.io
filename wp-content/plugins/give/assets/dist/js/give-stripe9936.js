!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=683)}({1010:function(e,t,r){"use strict";r.r(t);var i=r(23),n=r.n(i),a=r(31),l=r.n(a),o=function(){function e(t){n()(this,e),t&&(this.formElement=t,this.publishableKey=t.getAttribute("data-publishable-key"),this.accountId=t.getAttribute("data-account")?t.getAttribute("data-account"):"",this.idPrefix=t.getAttribute("data-id")?t.getAttribute("data-id"):"",this.locale=give_stripe_vars.preferred_locale,this.fieldsFormat=give_stripe_vars.cc_fields_format,this.isSingleInputField="single"===this.fieldsFormat,this.isMounted=!1,this.fontStyles=[],0!==Object.keys(give_stripe_vars.element_font_styles).length&&this.fontStyles.push(give_stripe_vars.element_font_styles))}return l()(e,[{key:"setupStripeElement",value:function(){var e={};return 0!==this.accountId.trim().length&&(e={stripeAccount:this.accountId}),Stripe(this.publishableKey,e)}},{key:"getElements",value:function(e){var t={locale:this.locale};return this.fontStyles.length>0&&(t={fonts:this.fontStyles,locale:this.locale}),e.elements(t)}},{key:"createElement",value:function(e,t){var r=[],i=this.getElementsToMountOn(),n={style:this.getElementStyles(),classes:this.getElementClasses()};return i.forEach((function(t,i){"card"===t[0]?n.hidePostalCode=!!give_stripe_vars.checkout_address:"cardNumber"===t[0]?n.placeholder=give_stripe_vars.card_number_placeholder_text:"cardCvc"===t[0]?n.placeholder=give_stripe_vars.card_cvc_placeholder_text:delete n.placeholder,r.push(e.create(t[0],n))})),"cardNumber"===i[0][0]&&r[0].addEventListener("change",(function(e){var r="diners"===e.brand?"dinersclub":e.brand;t.querySelector(".card-type").className="card-type "+r})),r}},{key:"destroyElement",value:function(e){e.forEach((function(e,t){e.destroy()}))}},{key:"getElementStyles",value:function(){return{base:give_stripe_vars.element_base_styles,complete:give_stripe_vars.element_complete_styles,empty:give_stripe_vars.element_empty_styles,invalid:give_stripe_vars.element_invalid_styles}}},{key:"getElementClasses",value:function(){return{focus:"focus",empty:"empty",invalid:"invalid"}}},{key:"getElementsToMountOn",value:function(){var e={cardNumber:"#give-card-number-field-".concat(this.idPrefix),cardCvc:"#give-card-cvc-field-".concat(this.idPrefix),cardExpiry:"#give-card-expiration-field-".concat(this.idPrefix)};return this.isSingleInputField&&(e={card:"#give-stripe-single-cc-fields-".concat(this.idPrefix)}),Object.entries(e)}},{key:"mountElement",value:function(e){var t=this.getElementsToMountOn();Array.from(e).forEach((function(e,r){e.mount(t[r][1])}))}},{key:"unMountElement",value:function(e){var t=this.getElementsToMountOn();Array.from(e).forEach((function(e,r){e.unmount(t[r][1])}))}},{key:"createPaymentMethod",value:function(e,t,r){var i={};if(this.isSingleInputField||(i.name=e.querySelector('input[name="card_name"]').value),!give_stripe_vars.stripe_card_update){var n=e.querySelector('input[name="give_first"]').value,a=e.querySelector('input[name="give_last"]').value,l=e.querySelector('input[name="give_email"]').value;i.name="".concat(n," ").concat(a),i.email=l,e.querySelector("[id^=give-purchase-button]").setAttribute("disabled","disabled")}if(give_stripe_vars.checkout_address&&!give_stripe_vars.stripe_card_update){var o=e.querySelector(".card-address").value,u=e.querySelector(".card-address-2").value,s=e.querySelector(".card-city").value,c=e.querySelector(".card_state").value,d=e.querySelector(".card-zip").value,v=e.querySelector(".billing-country").value;i.address={line1:o||"",line2:u||"",city:s||"",state:c||"",postal_code:d||"",country:v||""}}t.createPaymentMethod({type:"card",card:r[0],billing_details:i}).then((function(t){if(t.error){var r=jQuery(e),i='<div class="give_errors"><p class="give_error">'.concat(t.error.message,"</p></div>"),n=e.getAttribute("data-id");return Give.form.fn.resetDonationButton(r),void(e.querySelector("#give-stripe-payment-errors-".concat(n)).innerHTML=i)}e.querySelector('input[name="give_stripe_payment_method"]').value=t.paymentMethod.id,e.submit()}))}},{key:"triggerStripeModal",value:function(e,t,r,i){var n=e.querySelector('input[name="give-form-id-prefix"]'),a=e.querySelector("#give-stripe-checkout-modal-donate-button-".concat(n.value)),l=e.querySelector('input[name="card_name"]'),o={};i.forEach((function(e){o.cardName=!1,e.addEventListener("ready",(function(e){o[e.elementType]=!1,o.cardName="card"===e.elementType})),e.addEventListener("change",(function(e){o[e.elementType]=e.complete,Object.values(o).every((function(e){return!0===e}))?a.removeAttribute("disabled"):a.setAttribute("disabled","disabled")}))})),null!==l&&l.addEventListener("keyup",(function(e){o.cardName=""!==e.target.value,Object.values(o).every((function(e){return!0===e}))?a.removeAttribute("disabled"):a.setAttribute("disabled","disabled")})),null!==a&&a.addEventListener("click",(function(n){var l=n.target,o=l.nextElementSibling;a.getAttribute("data-is_legacy_form")?(l.value=give_global_vars.purchase_loading,o.style.display="inline-block"):(l.value="",o.classList.add("sequoia-loader"),o.classList.add("spinning"),o.classList.remove("give-loading-animation")),t.createPaymentMethod(e,r,i),n.preventDefault()}))}}]),e}();document.addEventListener("DOMContentLoaded",(function(e){Array.from(document.querySelectorAll(".give-form-wrap")).forEach((function(e){var t=e.querySelector(".give-form");if(null!==t&&t.getAttribute("data-publishable-key")){var r=give_stripe_vars.hasOwnProperty("stripe_card_update")&&parseInt(give_stripe_vars.stripe_card_update),i=t.querySelector('input[name="give-form-id-prefix"]'),n=new o(t),a=n.setupStripeElement(),l=n.getElements(a),u=n.createElement(l,t),s=Give.form.fn.getInfo("stripe-checkout-type",t);d(!1),document.addEventListener("give_gateway_loaded",d),t.onsubmit=function(e){var l=c(),o=l.selectedGatewayId,s=l.isStripeModalCheckoutGateway;if((r||"stripe"===o)&&(n.createPaymentMethod(t,a,u),e.preventDefault()),s){var d=t.querySelector(".give-stripe-checkout-modal"),v=d.querySelector(".give-stripe-checkout-donation-amount"),p=d.querySelector(".give-stripe-checkout-donor-email"),f=t.querySelector(".give-final-total-amount").textContent,m=t.querySelector('input[name="give_email"]').value,y=t.querySelector('input[name="give_validate_stripe_payment_fields"]');d.classList.add("give-stripe-checkout-show-modal"),null!==v&&(v.innerHTML=f),null!==p&&(p.innerHTML=m),y.setAttribute("value","1");var g=t.querySelector(".give-stripe-checkout-modal-close");null!==g&&g.addEventListener("click",(function(e){t.querySelector("#give-stripe-checkout-modal-".concat(i.value)).classList.remove("give-stripe-checkout-show-modal");var r=t.querySelector(".give-submit");null!==r&&(r.value=r.getAttribute("data-before-validation-label"),r.nextElementSibling.style.display="none",r.removeAttribute("disabled"),t.querySelector('input[name="give_validate_stripe_payment_fields"]').setAttribute("value","0")),e.preventDefault()})),e.preventDefault()}}}function c(){var e=t.querySelector('input[name="give-gateway"]'),r=e?e.value:"",i="modal"===s;return{formGateway:e,selectedGatewayId:r,isCheckoutTypeModal:i,isStripeModalCheckoutGateway:e&&"stripe_checkout"===r&&i}}function d(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=c(),l=i.selectedGatewayId,o=i.isStripeModalCheckoutGateway;r||"stripe"===l||o?n.mountElement(u):e&&n.unMountElement(u),o&&n.triggerStripeModal(t,n,a,u)}}))}))},23:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},31:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e},e.exports.default=e.exports,e.exports.__esModule=!0},683:function(e,t,r){e.exports=r(1010)}});