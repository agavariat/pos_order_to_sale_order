# -*- coding: utf-8 -*-
from odoo import models, fields, api
from odoo.exceptions import UserError
from odoo.tools.translate import _
from odoo.tools import float_is_zero
from odoo.http import request



class PosCoupons(models.Model):
    _inherit = 'pos.config'
    #category_id = fields.Many2one('pos.category', string="Category")
    #coupon_category = fields.Boolean(string="Coupon Category", default=False)

    #enable_service_charge = fields.Boolean(string='Service Charges')
    iface_create_sale_order = fields.Boolean(
        string="Crear Factura Electrónica",
        compute="_compute_iface_create_sale_order",
        store=True,
    )

    iface_create_delivered_sale_order = fields.Boolean(
        string="Crear Factura Electrónica (FE)",
        default=True,
        help="If checked, the cashier will have the possibility to create"
        " a confirmed sale Order, based on the current draft PoS Order.\n"
        " the according picking will be marked as delivered. Only invoices"
        " process will be possible.",
    )

    restrict_sales_amt2 = fields.Boolean(string='Restricción de monto')
    
    restrict_amt2 = fields.Float(string="Restringir pago por encima de")


    @api.depends("iface_create_delivered_sale_order")
    def _compute_iface_create_sale_order(self):
        for config in self:
            config.iface_create_sale_order = any(
                [config.iface_create_delivered_sale_order]
            )
            

   


