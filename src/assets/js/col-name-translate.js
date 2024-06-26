const colNameTranslate = {
    'it': 'inTemperature',
    'et': 'exTemperature',
    'ih': 'inHumidity',
    'eh': 'exHumidity',
    'co2': 'CO2',
    'ill': 'illumination',
    
    'm1_t': 'Temperature',
    'm1_air_t': 'Temperature',
    'm1_air_h': 'Humidity',
    'm1_ap': 'Air_pressure',
    'm1_ill': 'Illumination',
    'm1_bv': 'Battery_voltage',
    'm1_sv': 'Solar_voltage',
    'm1_c': 'Device_current',
    'm1_1': 'Device_power',
    'm1_s_l1_t': 'Temperature',
    'm1_s_l1_w': 'Moisture_content',
    'm1_s_l1_e': 'Electric_conductivity',
    'm1_s_l1_s': 'Salinity',
    'm1_s_l2_t': 'Temperature',
    'm1_s_l2_w': 'Moisture_content',
    'm1_s_l2_e': 'Electric_conductivity',
    'm1_s_l2_s': 'Salinity',
    'm1_s_l3_t': 'Temperature',
    'm1_s_l3_w': 'Moisture_content',
    'm1_s_l3_e': 'Electric_conductivity',
    'm1_s_l3_s': 'Salinity',
    'm1_s_l4_t': 'Temperature',
    'm1_s_l4_w': 'Moisture_content',
    'm1_s_l4_e': 'Electric_conductivity',
    'm1_s_l4_s': 'Salinity',
    'm1_s_l5_t': 'Temperature',
    'm1_s_l5_w': 'Moisture_content',
    'm1_s_l5_e': 'Electric_conductivity',
    'm1_s_l5_s': 'Salinity',
    
    's1_bv': 'Battery_voltage',
    's1_sv': 'Solar_voltage',
    's1_s_l1_t': 'Temperature',
    's1_s_l1_w': 'Moisture_content',
    's1_s_l1_e': 'Electric_conductivity',
    's1_s_l1_s': 'Salinity',
    's1_s_l2_t': 'Temperature',
    's1_s_l2_w': 'Moisture_content',
    's1_s_l2_e': 'Electric_conductivity',
    's1_s_l2_s': 'Salinity',
    's1_s_l3_t': 'Temperature',
    's1_s_l3_w': 'Moisture_content',
    's1_s_l3_e': 'Electric_conductivity',
    's1_s_l3_s': 'Salinity',
    's1_s_l4_t': 'Temperature',
    's1_s_l4_w': 'Moisture_content',
    's1_s_l4_e': 'Electric_conductivity',
    's1_s_l4_s': 'Salinity',
    's1_s_l5_t': 'Temperature',
    's1_s_l5_w': 'Moisture_content',
    's1_s_l5_e': 'Electric_conductivity',
    's1_s_l5_s': 'Salinity',
    
    's2_bv': 'Battery_voltage',
    's2_sv': 'Solar_voltage',
    's2_s_l1_t': 'Temperature',
    's2_s_l1_w': 'Moisture_content',
    's2_s_l1_e': 'Electric_conductivity',
    's2_s_l1_s': 'Salinity',
    's2_s_l2_t': 'Temperature',
    's2_s_l2_w': 'Moisture_content',
    's2_s_l2_e': 'Electric_conductivity',
    's2_s_l2_s': 'Salinity',
    's2_s_l3_t': 'Temperature',
    's2_s_l3_w': 'Moisture_content',
    's2_s_l3_e': 'Electric_conductivity',
    's2_s_l3_s': 'Salinity',
    's2_s_l4_t': 'Temperature',
    's2_s_l4_w': 'Moisture_content',
    's2_s_l4_e': 'Electric_conductivity',
    's2_s_l4_s': 'Salinity',
    's2_s_l5_t': 'Temperature',
    's2_s_l5_w': 'Moisture_content',
    's2_s_l5_e': 'Electric_conductivity',
    's2_s_l5_s': 'Salinity',
    
    's3_bv': 'Battery_voltage',
    's3_sv': 'Solar_voltage',
    's3_s_l1_t': 'Temperature',
    's3_s_l1_w': 'Moisture_content',
    's3_s_l1_e': 'Electric_conductivity',
    's3_s_l1_s': 'Salinity',
    's3_s_l2_t': 'Temperature',
    's3_s_l2_w': 'Moisture_content',
    's3_s_l2_e': 'Electric_conductivity',
    's3_s_l2_s': 'Salinity',
    's3_s_l3_t': 'Temperature',
    's3_s_l3_w': 'Moisture_content',
    's3_s_l3_e': 'Electric_conductivity',
    's3_s_l3_s': 'Salinity',
    's3_s_l4_t': 'Temperature',
    's3_s_l4_w': 'Moisture_content',
    's3_s_l4_e': 'Electric_conductivity',
    's3_s_l4_s': 'Salinity',
    's3_s_l5_t': 'Temperature',
    's3_s_l5_w': 'Moisture_content',
    's3_s_l5_e': 'Electric_conductivity',
    's3_s_l5_s': 'Salinity',
    
    's4_bv': 'Battery_voltage',
    's4_sv': 'Solar_voltage',
    's4_s_l1_t': 'Temperature',
    's4_s_l1_w': 'Moisture_content',
    's4_s_l1_e': 'Electric_conductivity',
    's4_s_l1_s': 'Salinity',
    's4_s_l2_t': 'Temperature',
    's4_s_l2_w': 'Moisture_content',
    's4_s_l2_e': 'Electric_conductivity',
    's4_s_l2_s': 'Salinity',
    's4_s_l3_t': 'Temperature',
    's4_s_l3_w': 'Moisture_content',
    's4_s_l3_e': 'Electric_conductivity',
    's4_s_l3_s': 'Salinity',
    's4_s_l4_t': 'Temperature',
    's4_s_l4_w': 'Moisture_content',
    's4_s_l4_e': 'Electric_conductivity',
    's4_s_l4_s': 'Salinity',
    's4_s_l5_t': 'Temperature',
    's4_s_l5_w': 'Moisture_content',
    's4_s_l5_e': 'Electric_conductivity',
    's4_s_l5_s': 'Salinity',
    
    's5_bv': 'Battery_voltage',
    's5_sv': 'Solar_voltage',
    's5_s_l1_t': 'Temperature',
    's5_s_l1_w': 'Moisture_content',
    's5_s_l1_e': 'Electric_conductivity',
    's5_s_l1_s': 'Salinity',
    's5_s_l2_t': 'Temperature',
    's5_s_l2_w': 'Moisture_content',
    's5_s_l2_e': 'Electric_conductivity',
    's5_s_l2_s': 'Salinity',
    's5_s_l3_t': 'Temperature',
    's5_s_l3_w': 'Moisture_content',
    's5_s_l3_e': 'Electric_conductivity',
    's5_s_l3_s': 'Salinity',
    's5_s_l4_t': 'Temperature',
    's5_s_l4_w': 'Moisture_content',
    's5_s_l4_e': 'Electric_conductivity',
    's5_s_l4_s': 'Salinity',
    's5_s_l5_t': 'Temperature',
    's5_s_l5_w': 'Moisture_content',
    's5_s_l5_e': 'Electric_conductivity',
    's5_s_l5_s': 'Salinity'
}

export default {
    colNameTranslate
}