var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PROYECTOSORDINARIOS2024TRANSPORTE_1 = new ol.format.GeoJSON();
var features_PROYECTOSORDINARIOS2024TRANSPORTE_1 = format_PROYECTOSORDINARIOS2024TRANSPORTE_1.readFeatures(json_PROYECTOSORDINARIOS2024TRANSPORTE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROYECTOSORDINARIOS2024TRANSPORTE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROYECTOSORDINARIOS2024TRANSPORTE_1.addFeatures(features_PROYECTOSORDINARIOS2024TRANSPORTE_1);
var lyr_PROYECTOSORDINARIOS2024TRANSPORTE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROYECTOSORDINARIOS2024TRANSPORTE_1, 
                style: style_PROYECTOSORDINARIOS2024TRANSPORTE_1,
                popuplayertitle: "PROYECTOS ORDINARIOS 2024 TRANSPORTE",
                interactive: true,
                title: '<img src="styles/legend/PROYECTOSORDINARIOS2024TRANSPORTE_1.png" /> PROYECTOS ORDINARIOS 2024 TRANSPORTE'
            });
var format_PROYECTOSORDINARIOS2024SANEAMIENTO_2 = new ol.format.GeoJSON();
var features_PROYECTOSORDINARIOS2024SANEAMIENTO_2 = format_PROYECTOSORDINARIOS2024SANEAMIENTO_2.readFeatures(json_PROYECTOSORDINARIOS2024SANEAMIENTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROYECTOSORDINARIOS2024SANEAMIENTO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROYECTOSORDINARIOS2024SANEAMIENTO_2.addFeatures(features_PROYECTOSORDINARIOS2024SANEAMIENTO_2);
var lyr_PROYECTOSORDINARIOS2024SANEAMIENTO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROYECTOSORDINARIOS2024SANEAMIENTO_2, 
                style: style_PROYECTOSORDINARIOS2024SANEAMIENTO_2,
                popuplayertitle: "PROYECTOS ORDINARIOS 2024 SANEAMIENTO",
                interactive: true,
                title: '<img src="styles/legend/PROYECTOSORDINARIOS2024SANEAMIENTO_2.png" /> PROYECTOS ORDINARIOS 2024 SANEAMIENTO'
            });
var format_PROYECTOSORDINARIOS2024SALUD_3 = new ol.format.GeoJSON();
var features_PROYECTOSORDINARIOS2024SALUD_3 = format_PROYECTOSORDINARIOS2024SALUD_3.readFeatures(json_PROYECTOSORDINARIOS2024SALUD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROYECTOSORDINARIOS2024SALUD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROYECTOSORDINARIOS2024SALUD_3.addFeatures(features_PROYECTOSORDINARIOS2024SALUD_3);
var lyr_PROYECTOSORDINARIOS2024SALUD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROYECTOSORDINARIOS2024SALUD_3, 
                style: style_PROYECTOSORDINARIOS2024SALUD_3,
                popuplayertitle: "PROYECTOS ORDINARIOS 2024 SALUD",
                interactive: true,
                title: '<img src="styles/legend/PROYECTOSORDINARIOS2024SALUD_3.png" /> PROYECTOS ORDINARIOS 2024 SALUD'
            });
var format_PROYECTOSORDINARIOS2024EDUCACIN_4 = new ol.format.GeoJSON();
var features_PROYECTOSORDINARIOS2024EDUCACIN_4 = format_PROYECTOSORDINARIOS2024EDUCACIN_4.readFeatures(json_PROYECTOSORDINARIOS2024EDUCACIN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROYECTOSORDINARIOS2024EDUCACIN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROYECTOSORDINARIOS2024EDUCACIN_4.addFeatures(features_PROYECTOSORDINARIOS2024EDUCACIN_4);
var lyr_PROYECTOSORDINARIOS2024EDUCACIN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROYECTOSORDINARIOS2024EDUCACIN_4, 
                style: style_PROYECTOSORDINARIOS2024EDUCACIN_4,
                popuplayertitle: "PROYECTOS ORDINARIOS 2024 EDUCACIÓN",
                interactive: true,
                title: '<img src="styles/legend/PROYECTOSORDINARIOS2024EDUCACIN_4.png" /> PROYECTOS ORDINARIOS 2024 EDUCACIÓN'
            });
var format_PROYECTOSORDINARIOS2024AGUA_5 = new ol.format.GeoJSON();
var features_PROYECTOSORDINARIOS2024AGUA_5 = format_PROYECTOSORDINARIOS2024AGUA_5.readFeatures(json_PROYECTOSORDINARIOS2024AGUA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROYECTOSORDINARIOS2024AGUA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROYECTOSORDINARIOS2024AGUA_5.addFeatures(features_PROYECTOSORDINARIOS2024AGUA_5);
var lyr_PROYECTOSORDINARIOS2024AGUA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROYECTOSORDINARIOS2024AGUA_5, 
                style: style_PROYECTOSORDINARIOS2024AGUA_5,
                popuplayertitle: "PROYECTOS ORDINARIOS 2024 AGUA",
                interactive: true,
                title: '<img src="styles/legend/PROYECTOSORDINARIOS2024AGUA_5.png" /> PROYECTOS ORDINARIOS 2024 AGUA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PROYECTOSORDINARIOS2024TRANSPORTE_1.setVisible(true);lyr_PROYECTOSORDINARIOS2024SANEAMIENTO_2.setVisible(true);lyr_PROYECTOSORDINARIOS2024SALUD_3.setVisible(true);lyr_PROYECTOSORDINARIOS2024EDUCACIN_4.setVisible(true);lyr_PROYECTOSORDINARIOS2024AGUA_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PROYECTOSORDINARIOS2024TRANSPORTE_1,lyr_PROYECTOSORDINARIOS2024SANEAMIENTO_2,lyr_PROYECTOSORDINARIOS2024SALUD_3,lyr_PROYECTOSORDINARIOS2024EDUCACIN_4,lyr_PROYECTOSORDINARIOS2024AGUA_5];
lyr_PROYECTOSORDINARIOS2024TRANSPORTE_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'CODIGO_MUN': 'CODIGO_MUN', 'SNIP': 'SNIP', 'NOMBRE_PRO': 'NOMBRE_PRO', 'APORTE_COD': 'APORTE_COD', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'FUNCION': 'FUNCION', 'ESPECIE': 'ESPECIE', 'RSTL_EVA': 'RSTL_EVA', 'MEDIDA_MG': 'MEDIDA_MG', 'META_GLOBA': 'META_GLOBA', });
lyr_PROYECTOSORDINARIOS2024SANEAMIENTO_2.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'CODIGO_MUN': 'CODIGO_MUN', 'SNIP': 'SNIP', 'NOMBRE_PRO': 'NOMBRE_PRO', 'APORTE_COD': 'APORTE_COD', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'FUNCION': 'FUNCION', 'ESPECIE': 'ESPECIE', 'RSTL_EVA': 'RSTL_EVA', 'MEDIDA_MG': 'MEDIDA_MG', 'META_GLOBA': 'META_GLOBA', });
lyr_PROYECTOSORDINARIOS2024SALUD_3.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'CODIGO_MUN': 'CODIGO_MUN', 'SNIP': 'SNIP', 'NOMBRE_PRO': 'NOMBRE_PRO', 'APORTE_COD': 'APORTE_COD', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'FUNCION': 'FUNCION', 'ESPECIE': 'ESPECIE', 'RSTL_EVA': 'RSTL_EVA', 'MEDIDA_MG': 'MEDIDA_MG', 'META_GLOBA': 'META_GLOBA', });
lyr_PROYECTOSORDINARIOS2024EDUCACIN_4.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'CODIGO_MUN': 'CODIGO_MUN', 'SNIP': 'SNIP', 'NOMBRE_PRO': 'NOMBRE_PRO', 'APORTE_COD': 'APORTE_COD', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'FUNCION': 'FUNCION', 'ESPECIE': 'ESPECIE', 'RSTL_EVA': 'RSTL_EVA', 'MEDIDA_MG': 'MEDIDA_MG', 'META_GLOBA': 'META_GLOBA', });
lyr_PROYECTOSORDINARIOS2024AGUA_5.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'CODIGO_MUN': 'CODIGO_MUN', 'SNIP': 'SNIP', 'NOMBRE_PRO': 'NOMBRE_PRO', 'APORTE_COD': 'APORTE_COD', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'FUNCION': 'FUNCION', 'ESPECIE': 'ESPECIE', 'RSTL_EVA': 'RSTL_EVA', 'MEDIDA_MG': 'MEDIDA_MG', 'META_GLOBA': 'META_GLOBA', });
lyr_PROYECTOSORDINARIOS2024TRANSPORTE_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SNIP': 'TextEdit', 'NOMBRE_PRO': 'TextEdit', 'APORTE_COD': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'FUNCION': 'TextEdit', 'ESPECIE': 'TextEdit', 'RSTL_EVA': 'TextEdit', 'MEDIDA_MG': 'TextEdit', 'META_GLOBA': 'TextEdit', });
lyr_PROYECTOSORDINARIOS2024SANEAMIENTO_2.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SNIP': 'TextEdit', 'NOMBRE_PRO': 'TextEdit', 'APORTE_COD': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'FUNCION': 'TextEdit', 'ESPECIE': 'TextEdit', 'RSTL_EVA': 'TextEdit', 'MEDIDA_MG': 'TextEdit', 'META_GLOBA': 'TextEdit', });
lyr_PROYECTOSORDINARIOS2024SALUD_3.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SNIP': 'TextEdit', 'NOMBRE_PRO': 'TextEdit', 'APORTE_COD': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'FUNCION': 'TextEdit', 'ESPECIE': 'TextEdit', 'RSTL_EVA': 'TextEdit', 'MEDIDA_MG': 'TextEdit', 'META_GLOBA': 'TextEdit', });
lyr_PROYECTOSORDINARIOS2024EDUCACIN_4.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SNIP': 'TextEdit', 'NOMBRE_PRO': 'TextEdit', 'APORTE_COD': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'FUNCION': 'TextEdit', 'ESPECIE': 'TextEdit', 'RSTL_EVA': 'TextEdit', 'MEDIDA_MG': 'TextEdit', 'META_GLOBA': 'TextEdit', });
lyr_PROYECTOSORDINARIOS2024AGUA_5.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CODIGO_MUN': 'TextEdit', 'SNIP': 'TextEdit', 'NOMBRE_PRO': 'TextEdit', 'APORTE_COD': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'FUNCION': 'TextEdit', 'ESPECIE': 'TextEdit', 'RSTL_EVA': 'TextEdit', 'MEDIDA_MG': 'TextEdit', 'META_GLOBA': 'TextEdit', });
lyr_PROYECTOSORDINARIOS2024TRANSPORTE_1.set('fieldLabels', {'DEPARTAMEN': 'hidden field', 'MUNICIPIO': 'inline label - visible with data', 'CODIGO_MUN': 'hidden field', 'SNIP': 'inline label - visible with data', 'NOMBRE_PRO': 'inline label - visible with data', 'APORTE_COD': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'FUNCION': 'inline label - visible with data', 'ESPECIE': 'hidden field', 'RSTL_EVA': 'hidden field', 'MEDIDA_MG': 'hidden field', 'META_GLOBA': 'inline label - visible with data', });
lyr_PROYECTOSORDINARIOS2024SANEAMIENTO_2.set('fieldLabels', {'DEPARTAMEN': 'hidden field', 'MUNICIPIO': 'inline label - visible with data', 'CODIGO_MUN': 'hidden field', 'SNIP': 'inline label - visible with data', 'NOMBRE_PRO': 'inline label - visible with data', 'APORTE_COD': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'FUNCION': 'inline label - visible with data', 'ESPECIE': 'hidden field', 'RSTL_EVA': 'hidden field', 'MEDIDA_MG': 'hidden field', 'META_GLOBA': 'inline label - visible with data', });
lyr_PROYECTOSORDINARIOS2024SALUD_3.set('fieldLabels', {'DEPARTAMEN': 'hidden field', 'MUNICIPIO': 'inline label - visible with data', 'CODIGO_MUN': 'hidden field', 'SNIP': 'inline label - visible with data', 'NOMBRE_PRO': 'inline label - visible with data', 'APORTE_COD': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'FUNCION': 'inline label - visible with data', 'ESPECIE': 'hidden field', 'RSTL_EVA': 'hidden field', 'MEDIDA_MG': 'hidden field', 'META_GLOBA': 'inline label - visible with data', });
lyr_PROYECTOSORDINARIOS2024EDUCACIN_4.set('fieldLabels', {'DEPARTAMEN': 'hidden field', 'MUNICIPIO': 'inline label - visible with data', 'CODIGO_MUN': 'hidden field', 'SNIP': 'inline label - visible with data', 'NOMBRE_PRO': 'inline label - visible with data', 'APORTE_COD': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'FUNCION': 'inline label - visible with data', 'ESPECIE': 'hidden field', 'RSTL_EVA': 'hidden field', 'MEDIDA_MG': 'hidden field', 'META_GLOBA': 'inline label - visible with data', });
lyr_PROYECTOSORDINARIOS2024AGUA_5.set('fieldLabels', {'DEPARTAMEN': 'hidden field', 'MUNICIPIO': 'inline label - visible with data', 'CODIGO_MUN': 'hidden field', 'SNIP': 'inline label - visible with data', 'NOMBRE_PRO': 'inline label - visible with data', 'APORTE_COD': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'FUNCION': 'inline label - visible with data', 'ESPECIE': 'hidden field', 'RSTL_EVA': 'hidden field', 'MEDIDA_MG': 'hidden field', 'META_GLOBA': 'inline label - visible with data', });
lyr_PROYECTOSORDINARIOS2024AGUA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});