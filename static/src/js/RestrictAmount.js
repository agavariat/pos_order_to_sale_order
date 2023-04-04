odoo.define('pos_order_to_sale_order.RestrictAmount', function (require) {
  "use strict";

  const KsProductScreen = require('point_of_sale.ProductScreen');
  const { Gui } = require('point_of_sale.Gui');
  const Registries = require('point_of_sale.Registries');

  const ks_product_screen = (KsProductScreen) =>
      class extends KsProductScreen {
          _onClickPay() {  
              var order = this.env.pos.get_order();
              var total = order.get_total_with_tax();
              var restrict_sales_amt = this.env.pos.config.restrict_sales_amt;
              var restrict_amt = this.env.pos.config.restrict_amt;
              if(restrict_sales_amt && total > restrict_amt){ 
                var core = require('web.core');
                var _t = core._t;
                Gui.showPopup("FEinvoicePopup", {
                 title : _t("Ha superado el monto permitido para realizar una factura POS, en su defecto debe de crear una Factura Electrónica (FE)"),
                 confirmText: _t("Salir"),
             });
              } else{
                this.showScreen('PaymentScreen');
            }     
      }
    }

  Registries.Component.extend(KsProductScreen,ks_product_screen);

  return KsProductScreen;
  });


 


