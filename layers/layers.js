var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CasosConfirmadosPeru_1 = new ol.format.GeoJSON();
var features_CasosConfirmadosPeru_1 = format_CasosConfirmadosPeru_1.readFeatures(json_CasosConfirmadosPeru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasosConfirmadosPeru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasosConfirmadosPeru_1.addFeatures(features_CasosConfirmadosPeru_1);
var lyr_CasosConfirmadosPeru_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasosConfirmadosPeru_1, 
                style: style_CasosConfirmadosPeru_1,
                interactive: true,
    title: 'CasosConfirmadosPeru<br />\
    <img src="styles/legend/CasosConfirmadosPeru_1_0.png" /> 189 - 1000 <br />\
    <img src="styles/legend/CasosConfirmadosPeru_1_1.png" /> 1001 - 4000 <br />\
    <img src="styles/legend/CasosConfirmadosPeru_1_2.png" /> 4001 - 7000 <br />\
    <img src="styles/legend/CasosConfirmadosPeru_1_3.png" /> 7001 - 10000 <br />\
    <img src="styles/legend/CasosConfirmadosPeru_1_4.png" /> 10001 - 103020 <br />'
        });
var format_CasosConfirmadosPeru_2 = new ol.format.GeoJSON();
var features_CasosConfirmadosPeru_2 = format_CasosConfirmadosPeru_2.readFeatures(json_CasosConfirmadosPeru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasosConfirmadosPeru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasosConfirmadosPeru_2.addFeatures(features_CasosConfirmadosPeru_2);
var lyr_CasosConfirmadosPeru_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasosConfirmadosPeru_2, 
                style: style_CasosConfirmadosPeru_2,
                interactive: true,
                title: '<img src="styles/legend/CasosConfirmadosPeru_2.png" /> CasosConfirmadosPeru'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_CasosConfirmadosPeru_1.setVisible(true);lyr_CasosConfirmadosPeru_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_CasosConfirmadosPeru_1,lyr_CasosConfirmadosPeru_2];
lyr_CasosConfirmadosPeru_1.set('fieldAliases', {});
lyr_CasosConfirmadosPeru_2.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', 'DEPARTAMENTOS': 'DEPARTAMENTOS', '06-mar': '06-mar', '07-mar': '07-mar', '08-mar': '08-mar', '09-mar': '09-mar', '10-mar': '10-mar', '11-mar': '11-mar', '12-mar': '12-mar', '13-mar': '13-mar', '14-mar': '14-mar', '15-mar': '15-mar', '16-mar': '16-mar', '17-mar': '17-mar', '18-mar': '18-mar', '19-mar': '19-mar', '20-mar': '20-mar', '21-mar': '21-mar', '22-mar': '22-mar', '23-mar': '23-mar', '24-mar': '24-mar', '25-mar': '25-mar', '26-mar': '26-mar', '27-mar': '27-mar', '28-mar': '28-mar', '29-mar': '29-mar', '30-mar': '30-mar', '31-mar': '31-mar', '01-abr': '01-abr', '02-abr': '02-abr', '03-abr': '03-abr', '04-abr': '04-abr', '05-abr': '05-abr', '06-abr': '06-abr', '07-abr': '07-abr', '08-abr': '08-abr', '09-abr': '09-abr', '10-abr': '10-abr', '11-abr': '11-abr', '12-abr': '12-abr', '13-abr': '13-abr', '14-abr': '14-abr', '15-abr': '15-abr', '16-abr': '16-abr', '17-abr': '17-abr', '18-abr': '18-abr', '19-abr': '19-abr', '20-abr': '20-abr', '21-abr': '21-abr', '22-abr': '22-abr', '23-abr': '23-abr', '24-abr': '24-abr', '25-abr': '25-abr', '26-abr': '26-abr', '27-abr': '27-abr', '28-abr': '28-abr', '29-abr': '29-abr', '30-abr': '30-abr', '01-may': '01-may', '02-may': '02-may', '03-may': '03-may', '04-may': '04-may', '05-may': '05-may', '06-may': '06-may', '07-may': '07-may', '08-may': '08-may', '09-may': '09-may', '10-may': '10-may', '11-may': '11-may', '12-may': '12-may', '13-may': '13-may', '14-may': '14-may', '15-may': '15-may', '16-may': '16-may', '17-may': '17-may', '18-may': '18-may', '19-may': '19-may', '20-may': '20-may', '21-may': '21-may', '22-may': '22-may', '23-may': '23-may', '24-may': '24-may', '25-may': '25-may', '26-may': '26-may', '27-may': '27-may', '28-may': '28-may', '29-may': '29-may', '30-may': '30-may', '31-may': '31-may', 'IMAGEN': 'IMAGEN', });
lyr_CasosConfirmadosPeru_1.set('fieldImages', {});
lyr_CasosConfirmadosPeru_2.set('fieldImages', {'fid': '', 'NOMBDEP': '', 'COUNT': '', 'FIRST_IDDP': '', 'HECTARES': '', 'DEPARTAMENTOS': '', '06-mar': '', '07-mar': '', '08-mar': '', '09-mar': '', '10-mar': '', '11-mar': '', '12-mar': '', '13-mar': '', '14-mar': '', '15-mar': '', '16-mar': '', '17-mar': '', '18-mar': '', '19-mar': '', '20-mar': '', '21-mar': '', '22-mar': '', '23-mar': '', '24-mar': '', '25-mar': '', '26-mar': '', '27-mar': '', '28-mar': '', '29-mar': '', '30-mar': '', '31-mar': '', '01-abr': '', '02-abr': '', '03-abr': '', '04-abr': '', '05-abr': '', '06-abr': '', '07-abr': '', '08-abr': '', '09-abr': '', '10-abr': '', '11-abr': '', '12-abr': '', '13-abr': '', '14-abr': '', '15-abr': '', '16-abr': '', '17-abr': '', '18-abr': '', '19-abr': '', '20-abr': '', '21-abr': '', '22-abr': '', '23-abr': '', '24-abr': '', '25-abr': '', '26-abr': '', '27-abr': '', '28-abr': '', '29-abr': '', '30-abr': '', '01-may': '', '02-may': '', '03-may': '', '04-may': '', '05-may': '', '06-may': '', '07-may': '', '08-may': '', '09-may': '', '10-may': '', '11-may': '', '12-may': '', '13-may': '', '14-may': '', '15-may': '', '16-may': '', '17-may': '', '18-may': '', '19-may': '', '20-may': '', '21-may': '', '22-may': '', '23-may': '', '24-may': '', '25-may': '', '26-may': '', '27-may': '', '28-may': '', '29-may': '', '30-may': '', '31-may': '', 'IMAGEN': '', });
lyr_CasosConfirmadosPeru_1.set('fieldLabels', {});
lyr_CasosConfirmadosPeru_2.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', 'DEPARTAMENTOS': 'no label', '06-mar': 'no label', '07-mar': 'no label', '08-mar': 'no label', '09-mar': 'no label', '10-mar': 'no label', '11-mar': 'no label', '12-mar': 'no label', '13-mar': 'no label', '14-mar': 'no label', '15-mar': 'no label', '16-mar': 'no label', '17-mar': 'no label', '18-mar': 'no label', '19-mar': 'no label', '20-mar': 'no label', '21-mar': 'no label', '22-mar': 'no label', '23-mar': 'no label', '24-mar': 'no label', '25-mar': 'no label', '26-mar': 'no label', '27-mar': 'no label', '28-mar': 'no label', '29-mar': 'no label', '30-mar': 'no label', '31-mar': 'no label', '01-abr': 'no label', '02-abr': 'no label', '03-abr': 'no label', '04-abr': 'no label', '05-abr': 'no label', '06-abr': 'no label', '07-abr': 'no label', '08-abr': 'no label', '09-abr': 'no label', '10-abr': 'no label', '11-abr': 'no label', '12-abr': 'no label', '13-abr': 'no label', '14-abr': 'no label', '15-abr': 'no label', '16-abr': 'no label', '17-abr': 'no label', '18-abr': 'no label', '19-abr': 'no label', '20-abr': 'no label', '21-abr': 'no label', '22-abr': 'no label', '23-abr': 'no label', '24-abr': 'no label', '25-abr': 'no label', '26-abr': 'no label', '27-abr': 'no label', '28-abr': 'no label', '29-abr': 'no label', '30-abr': 'no label', '01-may': 'no label', '02-may': 'no label', '03-may': 'no label', '04-may': 'no label', '05-may': 'no label', '06-may': 'no label', '07-may': 'no label', '08-may': 'no label', '09-may': 'no label', '10-may': 'no label', '11-may': 'no label', '12-may': 'no label', '13-may': 'no label', '14-may': 'no label', '15-may': 'no label', '16-may': 'no label', '17-may': 'no label', '18-may': 'no label', '19-may': 'no label', '20-may': 'no label', '21-may': 'no label', '22-may': 'no label', '23-may': 'no label', '24-may': 'no label', '25-may': 'no label', '26-may': 'no label', '27-may': 'no label', '28-may': 'no label', '29-may': 'no label', '30-may': 'no label', '31-may': 'no label', 'IMAGEN': 'no label', });
lyr_CasosConfirmadosPeru_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});