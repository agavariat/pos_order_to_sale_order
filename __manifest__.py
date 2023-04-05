# -*- coding: utf-8 -*-

{
    'name': 'Pos Order to Sale Order',
    'version': '14.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Create FE invoice from POS',
    'description': """Service charges in pos""",
    'depends': ['point_of_sale'],
    'author': 'IntrescoSAS',
    'company': 'IntrescoSAS',
    'maintainer': 'IntrescoSAS',
    'website': 'http://intresco.co',
    'support': 'info@intresco.co',
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
