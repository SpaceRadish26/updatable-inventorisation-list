import json_stream




def read_inventory_json(file_path):
    with open(file_path) as f:
        data = json_stream.load(f)
        inventory = []
        for row in data['rows'].persistent():


            item = {
                'name': row['name'],
                'status': row['status_label']['name'],
                'category': row['category']['name'],
                'location': row['location']['name'],
                'customFieldsBool': {
                    'vr': row['custom_fields'].get('VR', {}).get('value', 'N/A'),
                    'ar': row['custom_fields'].get('AR', {}).get('value', 'N/A'),
                    'passthrough': row['custom_fields'].get('Passthrough AR', {}).get('value', 'N/A'),
                    'tethered': row['custom_fields'].get('Tethered', {}).get('value', 'N/A'),
                },
                'specs': row['custom_fields'].get('Specs', {}).get('value', 'N/A'),
                'tracking': row['custom_fields'].get('Tracking', {}).get('value', 'N/A'),

            }
            inventory.append(item)

    return inventory
