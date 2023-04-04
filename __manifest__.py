# -*- coding: utf-8 -*-

{
    'name': 'Pos Order to Sale Order',
    'version': '14.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Create FE invocie from POS',
    'description': """Service charges in pos""",
    'depends': ['point_of_sale'],
    'author': 'Odoo Mates, Sempai Space',
    'company': 'Odoo Mates, Sempai Space',
    'maintainer': 'Odoo Mates, Sempai Space',
    'website': 'http://odoomates.tech, https://www.sempai.space',
    'support': 'odoomates@gmail.com, sempaispace@gmail.com',
    'data': [
        'views/pos.xml',
        'views/pos_templates.xml'
    ],
    'qweb': [
        'static/src/xml/PosFEinvoiceButton.xml',
        'static/src/xml/PosFEinvoicePopup.xml',
        
    ],
    'images': ['static/description/banner.png'],
    'license': 'LGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
