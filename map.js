var map;
//初始化地图
function initMap() {
    var mapOption = {
        center: new google.maps.LatLng(51.508742, -0.120850), //地图中心点
        zoom: 11, //地图级别
        disableDefaultUI: true, //禁止使用控件
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        // scrollwheel: false    禁止地图滚动，放大缩小
    }
    map = new google.maps.Map(document.getElementById('map'), mapOption);
}
//设置地图类型
function setMapType(type) {
    if (type == 1) {
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP); //用于显示默认的道路地图视图。这是默认地图类型
    } else if (type == 2) {
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE); //用于显示 Google Earth 卫星图像。
    } else if (type == 3) {
        map.setMapTypeId(google.maps.MapTypeId.HYBRID); //用于同时显示正常视图和卫星视图
    } else if (type == 4) {
        map.setMapTypeId(google.maps.MapTypeId.TERRAIN); //基于地面信息显示物理地图
    }
}

//画标注
/*
 *Lat 纬度
 *lng 经度
 *label  标注内容
 *img 使用图片替换标注
 */
function drawMarker(lat, lng, label, img) {
    label ? label : "";
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map,
        label: {
            color: "#fff",
            fontSize: "12px",
            text: label
        },
        icon: {
            url: img,
            size: new google.maps.Size(10, 10)
        }
        // draggable:true   标注可拖动
    });
    return marker;
}

/*
 *设置地图中心点
 *Lat 纬度
 *lng 经度
 */
function setMapCenter(lat, lng) {
    map.setCenter(new google.maps.LatLng(lat, lng));
}

//缩小
function zoomIn() {
    map.setZoom(map.getZoom() - 1);
}
//放大
function zoomOut() {
    map.setZoom(map.getZoom() + 1);
}

/*
 *画面标注
 *coords 图边角所有点的集合  一个数组类型
 */
//coords  如：  [new google.maps.LatLng(1,2),new google.maps.LatLng(11,22),new google.maps.LatLng(111,222)]
function drawPolygon(coords) {
    var p = new google.maps.Polygon({
        paths: coords,
        strokeColor: '#79ca29',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#000000',
        fillOpacity: 0.7,
        editable: false
    });
    p.setMap(map);

    return p;
}

/*
 *设置信息窗口
 *contentString   信息窗口内容
 */
function infowindow(contentString) {
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    return infowindow
}

// 信息窗口调用  如：
// marker.addListener('click', function() {
//     infowindow.open(map, marker);
// });


// points.addEventListener("mouseover", function (e) {
// 	points.addEventListener("mouseout", function (e) {
// 		var aa = new BMap.Point(e.point.lng, e.point.lat);
// 		map.closeInfoWindow(infoWindow, aa)
// 	})
// 	var aa = new BMap.Point(e.point.lng, e.point.lat);
// 	map.openInfoWindow(infoWindow, aa)
// });
