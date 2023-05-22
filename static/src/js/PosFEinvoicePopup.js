odoo.define('pos_order_to_sale_order.FEinvoicePopup', function(require) {
    'use strict';

    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require('web.custom_hooks');
    const { useState } = owl.hooks;
    const framework = require("web.framework");
    const { _t } = require('web.core');
    var rpc = require("web.rpc");
 
    class FEinvoicePopup extends AbstractAwaitablePopup {
        constructor() {
            super(...arguments);
            useListener('createSaleOrder', this._createSaleOrder);
            }
           
            get currentOrder() {
                return this.env.pos.get_order();
            }
            async createDraftSaleOrder() {
                await this._createSaleOrder("invoiced");
                
            }

            async _createSaleOrder(action) {
                
                var current_order = this.env.pos.get_order();
                // var self = this;
                // this.clear_button_fun();
                if(!this.env.pos.get_order().get_client()) {
                    return this.showPopup('ErrorPopup', {
                      title: _t('Cliente es requerido'),
                    });
                }
               


                rpc.query({
                    model: 'sale.order',
                    method: 'create_order_from_pos',
                    args: [current_order.export_as_JSON(), action] 

                    
                }).finally(function () {
                    console.log("La factura de venta ha sido creada correctamente.");
                    alert("La factura electrónica ha sido creada correctamente.");
                    current_order.destroy();
                    
                }).catch(function (error) {
                    console.error(error);
                    alert('Se ha generado un error');
                });

                //this.env.pos.remove_order(current_order);
               // this.env.pos.add_new_order();
               



                }  
                // clear_button_fun(){
                //     var order = this.env.pos.get_order();
                //     while(order.get_selected_orderline()) {
                //         order.remove_orderline(order.get_selected_orderline())
                //     }    
                //     order.set_client(null);   
                // }   
               
                  
            
        }

    FEinvoicePopup.template = 'FEinvoicePopup';
    Registries.Component.add(FEinvoicePopup);
    return FEinvoicePopup;

 });




 
