odoo.define('pos_order_to_sale_order.FEButton', function (require) {
    "use strict";

      const { Gui } = require('point_of_sale.Gui');
      const PosComponent  = require('point_of_sale.PosComponent');
      const Registries = require('point_of_sale.Registries');
      const ProductScreen = require('point_of_sale.ProductScreen');
   
      class FEButton extends PosComponent{

         display_popup_FE() {
         var core = require('web.core');
         var _t = core._t;
          Gui.showPopup("FEinvoicePopup", {
          title : _t("Crear Factura Electrónica (FE)"),
          confirmText: _t("Salir")
             });
         }
      }

     //Add coupon button and set visibility
         ProductScreen.addControlButton({
         component: FEButton,
         condition: function() {
             return (
                
                 this.env.pos.config.iface_create_sale_order
            );
         },
     });
     Registries.Component.add(FEButton);
     return FEButton;
   });



