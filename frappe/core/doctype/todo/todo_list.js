frappe.listview_settings['ToDo'] = {
	onload: function(me) {
		frappe.route_options = {
			"owner": user,
			"status": "Open"
		};
	},
	fields: ["status", "priority", "due_date", "assigned_to"],
	filters: [["status","=","Open"]],
	set_title_left: function() {
		frappe.set_route();
	},
	prepare_data: function(data) {
		data["user_for_avatar"] = data.owner;
		data["Assigned To"] = data.owner===user ? null : (frappe.boot.user_info[data.owner] || {}).fullname;
	}
}
