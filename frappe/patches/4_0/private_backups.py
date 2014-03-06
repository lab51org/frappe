# Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals
import frappe
from frappe.installer import make_site_dirs

def execute():
	make_site_dirs()
	if frappe.local.conf.backup and frappe.local.conf.backup.startswith("public"):
		raise Exception, "Backups path in conf set to public directory"
