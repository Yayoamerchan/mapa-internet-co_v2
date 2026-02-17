var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Cluster_Cias_NET_1 = new ol.format.GeoJSON();
var features_Cluster_Cias_NET_1 = format_Cluster_Cias_NET_1.readFeatures(json_Cluster_Cias_NET_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_Cias_NET_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_Cias_NET_1.addFeatures(features_Cluster_Cias_NET_1);
var lyr_Cluster_Cias_NET_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_Cias_NET_1, 
                style: style_Cluster_Cias_NET_1,
                popuplayertitle: 'Cluster_Cias_NET',
                interactive: true,
    title: 'Cluster_Cias_NET<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_0.png" /> AMAZONAS N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_1.png" /> ANTIOQUIA Bajo Cauca<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_2.png" /> ANTIOQUIA Magdalena Medio<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_3.png" /> ANTIOQUIA Nordeste<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_4.png" /> ANTIOQUIA Norte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_5.png" /> ANTIOQUIA Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_6.png" /> ANTIOQUIA Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_7.png" /> ANTIOQUIA Suroeste<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_8.png" /> ANTIOQUIA Urabá<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_9.png" /> ANTIOQUIA Valle de Aburrá<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_10.png" /> ARAUCA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_11.png" /> ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_12.png" /> ATLÁNTICO Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_13.png" /> ATLÁNTICO Costera<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_14.png" /> ATLÁNTICO Metropolitana<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_15.png" /> ATLÁNTICO Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_16.png" /> ATLÁNTICO Sur<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_17.png" /> BOGOTÁ D.C. Bogotá D.C.<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_18.png" /> BOLÍVAR Dique<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_19.png" /> BOLÍVAR Isla de Mompox<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_20.png" /> BOLÍVAR La Mojana<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_21.png" /> BOLÍVAR Loba<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_22.png" /> BOLÍVAR Magdalena Medio<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_23.png" /> BOLÍVAR Montes de María<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_24.png" /> BOLÍVAR N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_25.png" /> BOYACÁ Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_26.png" /> BOYACÁ Gutiérrez<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_27.png" /> BOYACÁ La Libertad<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_28.png" /> BOYACÁ Lengupá<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_29.png" /> BOYACÁ Márquez<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_30.png" /> BOYACÁ N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_31.png" /> BOYACÁ Neira<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_32.png" /> BOYACÁ Norte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_33.png" /> BOYACÁ Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_34.png" /> BOYACÁ Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_35.png" /> BOYACÁ Ricaurte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_36.png" /> BOYACÁ Sugamuxi<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_37.png" /> BOYACÁ Tundama<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_38.png" /> BOYACÁ Valderrama<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_39.png" /> CALDAS Alto Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_40.png" /> CALDAS Alto Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_41.png" /> CALDAS Bajo Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_42.png" /> CALDAS Centro Sur<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_43.png" /> CALDAS Magdalena Caldense<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_44.png" /> CALDAS Norte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_45.png" /> CAQUETA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_46.png" /> CASANARE N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_47.png" /> CAUCA Bota Caucana<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_48.png" /> CAUCA Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_49.png" /> CAUCA Macizo<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_50.png" /> CAUCA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_51.png" /> CAUCA Norte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_52.png" /> CAUCA Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_53.png" /> CAUCA Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_54.png" /> CAUCA Sur<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_55.png" /> CESAR N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_56.png" /> CHOCÓ N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_57.png" /> CÓRDOBA Alto Sinú<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_58.png" /> CÓRDOBA Bajo Sinú<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_59.png" /> CÓRDOBA Costanera<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_60.png" /> CÓRDOBA Medio Sinú<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_61.png" /> CÓRDOBA Sabanas<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_62.png" /> CÓRDOBA San Jorge<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_63.png" /> CUNDINAMARCA Almeidas<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_64.png" /> CUNDINAMARCA Alto Magdalena<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_65.png" /> CUNDINAMARCA Bajo Magdalena<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_66.png" /> CUNDINAMARCA Gualivá<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_67.png" /> CUNDINAMARCA Guavio<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_68.png" /> CUNDINAMARCA Magdalena Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_69.png" /> CUNDINAMARCA Medina<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_70.png" /> CUNDINAMARCA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_71.png" /> CUNDINAMARCA Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_72.png" /> CUNDINAMARCA Rionegro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_73.png" /> CUNDINAMARCA Sabana Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_74.png" /> CUNDINAMARCA Sabana Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_75.png" /> CUNDINAMARCA Soacha<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_76.png" /> CUNDINAMARCA Sumapaz<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_77.png" /> CUNDINAMARCA Tequendama<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_78.png" /> CUNDINAMARCA Ubaté<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_79.png" /> GUAINÍA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_80.png" /> GUAVIARE N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_81.png" /> HUILA Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_82.png" /> HUILA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_83.png" /> HUILA Norte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_84.png" /> HUILA Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_85.png" /> HUILA Sur<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_86.png" /> LA GUAJIRA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_87.png" /> MAGDALENA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_88.png" /> META N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_89.png" /> NARIÑO Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_90.png" /> NARIÑO Guambuyaco<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_91.png" /> NARIÑO Juanambu<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_92.png" /> NARIÑO La Cordillera<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_93.png" /> NARIÑO La Sabana<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_94.png" /> NARIÑO Los Abades<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_95.png" /> NARIÑO N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_96.png" /> NARIÑO Obando<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_97.png" /> NARIÑO Occidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_98.png" /> NARIÑO Pacifico Sur<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_99.png" /> NARIÑO Piedemonte Costero<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_100.png" /> NARIÑO Rio Mayo<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_101.png" /> NARIÑO Sanquianga<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_102.png" /> NARIÑO Telembi<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_103.png" /> NORTE DE SANTANDER Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_104.png" /> NORTE DE SANTANDER Norte (Catatumbo)<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_105.png" /> NORTE DE SANTANDER Occidente (Ocaña)<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_106.png" /> NORTE DE SANTANDER Oriente (Metropolitana)<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_107.png" /> NORTE DE SANTANDER Suroccidente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_108.png" /> NORTE DE SANTANDER Suroriente (Pamplona)<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_109.png" /> PUTUMAYO N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_110.png" /> QUINDÍO N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_111.png" /> RISARALDA Vertiente Occidental<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_112.png" /> RISARALDA Vertiente Oriental<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_113.png" /> RISARALDA Vertiente Pacífico<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_114.png" /> SANTANDER Comunera<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_115.png" /> SANTANDER García Rovira<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_116.png" /> SANTANDER Guanenta<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_117.png" /> SANTANDER Metropolitana<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_118.png" /> SANTANDER N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_119.png" /> SANTANDER Vélez<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_120.png" /> SANTANDER Yariguies<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_121.png" /> SUCRE N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_122.png" /> TOLIMA Ibague<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_123.png" /> TOLIMA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_124.png" /> TOLIMA Nevados<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_125.png" /> TOLIMA Norte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_126.png" /> TOLIMA Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_127.png" /> TOLIMA Sur<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_128.png" /> TOLIMA Suroriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_129.png" /> VALLE DEL CAUCA Centro<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_130.png" /> VALLE DEL CAUCA Norte<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_131.png" /> VALLE DEL CAUCA Oriente<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_132.png" /> VALLE DEL CAUCA Pacífico<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_133.png" /> VALLE DEL CAUCA Sur<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_134.png" /> VAUPÉS N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_135.png" /> VICHADA N.A<br />\
    <img src="styles/legend/Cluster_Cias_NET_1_136.png" /> <br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Cluster_Cias_NET_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Cluster_Cias_NET_1];
lyr_Cluster_Cias_NET_1.set('fieldAliases', {'fid': 'fid', 'MpCodigo': 'MpCodigo', 'MpNombre': 'MpNombre', 'Depto': 'Depto', 'Mercado': 'Mercado', 'Plaza': 'Plaza', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'Num_Empresas': 'Num_Empresas', 'Accesos_Totales': 'Accesos_Totales', 'Vel_Down_Promedio': 'Vel_Down_Promedio', 'Vel_Up_Promedio': 'Vel_Up_Promedio', 'Accesos_Fibra': 'Accesos_Fibra', 'Porc_Fibra': 'Porc_Fibra', 'Latencia_Promedio': 'Latencia_Promedio', 'Latencia_Display': 'Latencia_Display', 'Tecnologia_Moda': 'Tecnologia_Moda', 'Cluster_Predominante': 'Cluster_Predominante', 'Empresa_Lider': 'Empresa_Lider', 'Accesos_Lider': 'Accesos_Lider', 'Tipo_Empresa_Lider': 'Tipo_Empresa_Lider', 'Categoria_Lider': 'Categoria_Lider', 'Rango_Lider': 'Rango_Lider', 'Cluster_Lider': 'Cluster_Lider', 'Num_Mas_de_100K': 'Num_Mas_de_100K', 'Num_Mas_de_2k_Menos_10K': 'Num_Mas_de_2k_Menos_10K', 'Num_Mas_de_50K_menos_de_100k': 'Num_Mas_de_50K_menos_de_100k', 'Num_Menos_de_2K': 'Num_Menos_de_2K', 'Num_mas_de_10K_menos_de_50K': 'Num_mas_de_10K_menos_de_50K', 'Num_Tipo_ESTATALES': 'Num_Tipo_ESTATALES', 'Num_Tipo_ISP_A': 'Num_Tipo_ISP_A', 'Num_Tipo_ISP_B': 'Num_Tipo_ISP_B', 'Num_Tipo_ISP_C': 'Num_Tipo_ISP_C', 'Num_Tipo_ISP_D': 'Num_Tipo_ISP_D', 'Num_Tipo_LIDER_A': 'Num_Tipo_LIDER_A', 'Num_Tipo_LIDER_B': 'Num_Tipo_LIDER_B', 'Num_Cat_A': 'Num_Cat_A', 'Num_Cat_B': 'Num_Cat_B', 'Num_Cat_C': 'Num_Cat_C', 'Num_Cat_D': 'Num_Cat_D', 'Num_Cat_E': 'Num_Cat_E', 'Popup_HTML': 'Popup_HTML', });
lyr_Cluster_Cias_NET_1.set('fieldImages', {'fid': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'Depto': 'TextEdit', 'Mercado': 'TextEdit', 'Plaza': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPARTAMENTO': 'TextEdit', 'Num_Empresas': 'Range', 'Accesos_Totales': 'Range', 'Vel_Down_Promedio': 'TextEdit', 'Vel_Up_Promedio': 'TextEdit', 'Accesos_Fibra': 'Range', 'Porc_Fibra': 'TextEdit', 'Latencia_Promedio': 'TextEdit', 'Latencia_Display': 'TextEdit', 'Tecnologia_Moda': 'TextEdit', 'Cluster_Predominante': 'TextEdit', 'Empresa_Lider': 'TextEdit', 'Accesos_Lider': 'Range', 'Tipo_Empresa_Lider': 'TextEdit', 'Categoria_Lider': 'TextEdit', 'Rango_Lider': 'TextEdit', 'Cluster_Lider': 'TextEdit', 'Num_Mas_de_100K': 'Range', 'Num_Mas_de_2k_Menos_10K': 'Range', 'Num_Mas_de_50K_menos_de_100k': 'Range', 'Num_Menos_de_2K': 'Range', 'Num_mas_de_10K_menos_de_50K': 'Range', 'Num_Tipo_ESTATALES': 'Range', 'Num_Tipo_ISP_A': 'Range', 'Num_Tipo_ISP_B': 'Range', 'Num_Tipo_ISP_C': 'Range', 'Num_Tipo_ISP_D': 'Range', 'Num_Tipo_LIDER_A': 'Range', 'Num_Tipo_LIDER_B': 'Range', 'Num_Cat_A': 'Range', 'Num_Cat_B': 'Range', 'Num_Cat_C': 'Range', 'Num_Cat_D': 'Range', 'Num_Cat_E': 'Range', 'Popup_HTML': 'TextEdit', });
lyr_Cluster_Cias_NET_1.set('fieldLabels', {'fid': 'no label', 'MpCodigo': 'no label', 'MpNombre': 'no label', 'Depto': 'no label', 'Mercado': 'no label', 'Plaza': 'no label', 'MUNICIPIO': 'no label', 'DEPARTAMENTO': 'no label', 'Num_Empresas': 'no label', 'Accesos_Totales': 'no label', 'Vel_Down_Promedio': 'no label', 'Vel_Up_Promedio': 'no label', 'Accesos_Fibra': 'no label', 'Porc_Fibra': 'no label', 'Latencia_Promedio': 'no label', 'Latencia_Display': 'no label', 'Tecnologia_Moda': 'no label', 'Cluster_Predominante': 'no label', 'Empresa_Lider': 'no label', 'Accesos_Lider': 'no label', 'Tipo_Empresa_Lider': 'no label', 'Categoria_Lider': 'no label', 'Rango_Lider': 'no label', 'Cluster_Lider': 'no label', 'Num_Mas_de_100K': 'no label', 'Num_Mas_de_2k_Menos_10K': 'no label', 'Num_Mas_de_50K_menos_de_100k': 'no label', 'Num_Menos_de_2K': 'no label', 'Num_mas_de_10K_menos_de_50K': 'no label', 'Num_Tipo_ESTATALES': 'no label', 'Num_Tipo_ISP_A': 'no label', 'Num_Tipo_ISP_B': 'no label', 'Num_Tipo_ISP_C': 'no label', 'Num_Tipo_ISP_D': 'no label', 'Num_Tipo_LIDER_A': 'no label', 'Num_Tipo_LIDER_B': 'no label', 'Num_Cat_A': 'no label', 'Num_Cat_B': 'no label', 'Num_Cat_C': 'no label', 'Num_Cat_D': 'no label', 'Num_Cat_E': 'no label', 'Popup_HTML': 'no label', });
lyr_Cluster_Cias_NET_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});