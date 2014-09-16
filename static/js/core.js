/* Author: Lee Owen @iedesign.co.uk  / Bob Wright @iedesign.co.uk

	Protyping code
*/


function loadScript() {

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=mapinitialize";
    document.body.appendChild(script);
}


loadScript();


$(document).ready(function () {


    var theMap = false;
    /// UGly ass protoype JS

    window.mapinitialize = function () {
        //var sw = document.body.clientWidth;

        google.maps.visualRefresh = true;

        var mapOptions = {
            center           : new google.maps.LatLng(13, 12),
            zoom             : 3,
            minZoom          : 2,
            zoomControl      : true,
            disableDefaultUI : true,
            scrollwheel      : false,
            mapTypeId        : google.maps.MapTypeId.SATELLITE,
            mapTypeControl   : false

        };

        //load map
        if ($('#map3d').length === 1) {
            theMap = new google.maps.Map(document.getElementById('map3d'), mapOptions);
        }

    };

    function checkResize() {

        var center = theMap.getCenter(),
            args = [].slice.call(arguments);

        google.maps.event.trigger(theMap, 'resize');

        if(args[0] === 'uk') {

            theMap.setCenter(new google.maps.LatLng(-52, 0));

        } else {

            theMap.setCenter(center);
        }

    }


    if ($('#map3d').length == 1) {
        $(window).resize(function () {

            var sw = document.body.clientWidth;

            google.maps.event.trigger(theMap, "resize");

            google.maps.event.addListener(theMap, "resize", function () {

                theMap.setCenter(new google.maps.LatLng(52, 0));

            });


        });
    }


    $('#select-view-mode').change(function (e) {

        if ('sat' == $(this).val()) {

            theMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);

        } else {

            theMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);

        }


    });


    //chart
    if ($('#shares-insight-chart').length != 0) {


        //var chart = new google.visualization.PieChart();

        //   chart.draw(data, options);

        var data = google.visualization.arrayToDataTable([


            ['PLATFORMS', 'percentage'],
            ['Social Networks', 120],
            ['Blogging Platforms', 50],
            ['Email/IM Services', 26],
            ['Other', 10]
        ]);

        var options = {
            backgroundColor : 'none', legend : 'none', colors : ['#cd1123', '#7c125e', '#c8057f', '#ee7202'], chartArea : { width : "80%", height : "80%"}, tooltip : {
                text : 'value'
            }

        };


        var chart = new google.visualization.PieChart($('#shares-insight-chart .graph')[0]);

        chart.draw(data, options);

        $(window).resize(function () {

            chart.draw(data, options);

        });


    }

    if(!!$('#insight-reach-graph').length) {


        var insightReachGraphData = google.visualization.arrayToDataTable([

            ['m', 'Reach'],
            ['1',  254],
            ['2',  698],
            ['3',  834],
            ['4',  1030]

        ]);

        var insightReachGraphOptions = {

    //        title: 'None',
    //        hAxis: {title: 'None',  titleTextStyle: {color: '#333'}},
    //        vAxis: {minValue: 0}
              backgroundColor: '#efefef',
              colors: ['#F47920', '#0F90C0', '#90AC30']

        };

        var insightReachGraphOptionsChart = new google.visualization.AreaChart( $('#insight-reach-graph .graph')[0] );

        insightReachGraphOptionsChart.draw(insightReachGraphData, insightReachGraphOptions);


        $(window).resize(function() {

            insightReachGraphOptionsChart.draw(insightReachGraphData, insightReachGraphOptions);

        });
    }

    if(!!$('#locations-map').length) {


            var locationsMapData = google.visualization.arrayToDataTable([
                ['Country', 'Popularity'],
                ['Germany', 0.2],
                ['United States', 0.3],
                ['Brazil', 0.4],
                ['Canada', 0.5],
                ['France', 0.6],
                ['RU', 0.7]

            ]);

        var locationsMapOptions = {
//            region: 'IT',
//            displayMode: 'markers',
            colorAxis: { minValue: 0,  colors: ['#F4CAA0', '#F47920'] },
            backgroundColor: '#efefef',
            datalessRegionColor: '#F4CAA0',
            legend: {numberFormat:'##%'}
        };

        var locationsMapChart = new google.visualization.GeoChart($('#locations-map .map')[0]);

        locationsMapChart.draw(locationsMapData, locationsMapOptions);

        $(window).resize(function() {
            locationsMapChart.draw(locationsMapData, locationsMapOptions);

        });
    }

    if(!!$('#CM-graph').length) {


        var cmGraphData = google.visualization.arrayToDataTable([

            ['m', 'Contact'],
            ['1',  24254],
            ['2',  45698],
            ['3',  67834],
            ['4',  120030]

        ]);

        var cmGraphOptions = {

            //        title: 'None',
            //        hAxis: {title: 'None',  titleTextStyle: {color: '#333'}},
            //        vAxis: {minValue: 0}
            backgroundColor: '#efefef',
            colors: ['#0F90C0', '#90AC30', '#F47920']

        };

        var cmGraphChart = new google.visualization.AreaChart( $('#CM-graph')[0] );

        cmGraphChart.draw(cmGraphData, cmGraphOptions);


        $(window).resize(function() {

            cmGraphChart.draw(cmGraphData, cmGraphOptions);

        });
    }

    // Main insights combo graph
    if(!!$('#graph').length) {

        var graphData = google.visualization.arrayToDataTable([
            ['Time', 'Yesterday', 'Today'],
            ['00.00',  165,      138],
            ['01.00',  235,      210],
            ['02.00',  257,      233],
            ['03.00',  239,      456],
            ['04.00',  136,      320],
            ['05.00',  266,      523],
            ['06.00',  324,      667],
            ['07.00',  456,      null],
            ['08.00',  523,      null],
            ['09.00',  234,      null],
            ['10.00',  190,      null],
            ['11.00',  278,      null],
            ['12.00',  378,      null],
            ['13.00',  456,      null],
            ['14.00',  768,      null],
            ['15.00',  976,      null],
            ['16.00',  900,      null],
            ['17.00',  1023,     null],
            ['18.00',  1230,     null],
            ['19.00',  1342,     null],
            ['20.00',  1532,     null],
            ['21.00',  1065,     null],
            ['22.00',  734,      null],
            ['23.00',  236,      null]
        ]);

        var graphOptions = {
            seriesType: "area",
            series: {1: {type: "line"}},
            chartArea: {width: '92%', height: '70%', bottom: 0, right: 0},
            colors: ['#444', '#FFFFFF', '#F47920'],
            fontSize: 10,
            backgroundColor: '#262626',
            vAxis: {gridlines:  {color: '#000', count: 5},
                   textStyle: {color: '#efefef'},
                   textPosition: 'out'},
            hAxis: {textStyle: {color: '#efefef'},
                    textPosition: 'out'},
            legend: {position: 'top', alignment: 'end', textStyle: {color: '#efefef'}}

        };

        var graphChart = new google.visualization.ComboChart( $('#graph')[0] );

        graphChart.draw(graphData, graphOptions);


        $(window).resize(function() {

            graphChart.draw(graphData, graphOptions);

        });
    }

    //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\\
    //\/\/\/\/\/\//\/\/\/\/\//\/\ZIPPER//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\/((O yk [])/\\
    //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\\

    // Toggle class
    function toggleClass(el, className){
        "use strict";

        el.classList.toggle(className);
    }

    // active states
    // @clickable = element to click
    // @classable = element to add class to
    function makeActive(clickable, classable, icon) {
        "use strict";

        var hasRollover = !!$($(classable)).find('.info-rollover').length;
        if(hasRollover) {
            $(clickable).on('click touchend', function(){

                toggleClass(classable, 'active');

                if (icon !== undefined) {

                    if($(classable).hasClass('active')) {

                        icon.text('delete');

                    } else {

                        icon.text('info');

                    }
                }

            });
         }
    }

    // Stat boxes on click show info overlay
    var statsWrapper = $('#stats'),
        stats = statsWrapper.find('.stat-box');

    stats.each(function(){
        "use strict";

         makeActive(this, this);

    });


    // Insights panels on click show info
    var _panels = $('.panel-header');

    _(_panels).map(function(panelheader){
            "use strict";

            var panelwrapper = $(panelheader).parent('.panel')[0],
                panelicon = $(panelheader).find('i');

            makeActive(panelheader, panelwrapper, panelicon);

        }
    );

    // Full screen button
    var fsButton = $('#full-screen-button'),
        page = $('#page'),
        langForm = $('#stats-language'),
        moveIt = langForm.detach(),
        moveTo = $('#fs-wrapper'),
        statsControl = $('.stats-controls'),
        mq = $('html').css('z-index');

    statsControl.prepend(moveIt);

    fsButton.on('click touchend', function() {
        "use strict";

        if(page.hasClass('not-full-screen')) {

            $(this).text("delete");

            page.removeClass('not-full-screen').addClass('full-screen');

            moveTo.prepend(moveIt);

            checkResize('uk');


        } else if(page.hasClass('full-screen')) {

            $(this).text("move");

            page.removeClass('full-screen').addClass('not-full-screen');

            statsControl.prepend(moveIt);

            checkResize();

        }

            if(page.hasClass('full-screen') && +mq < 1024) {

                moveTo.prepend('<div id="show-stats" class="ss-icon show-stats"><h3 class="ss-up"> Show stats</h3></div>');

                // TODO: Refactor crappy JS!
                $('#show-stats').on('click touchend', function(){

                    if(!$(this).parent('.full-screen-wrapper').hasClass('active')) {

                        $(this).parent('.full-screen-wrapper').addClass('active');
                        $(this).find('h3').removeClass().addClass('ss-down').text(' Hide stats');

                    } else if(!!$(this).parent('.full-screen-wrapper').hasClass('active')) {

                        $(this).parent('.full-screen-wrapper').removeClass('active');
                        $(this).find('h3').removeClass().addClass('ss-up').text(' Show stats');

                    }
                });

            } else {

                $('#show-stats').remove();

            }

        // Flexslider -needs re-initialising after DOM change!
        $('.flexslider').flexslider({
            animation: "slide"
        });


    });


    $(window).resize(function() {

        mq = $('html').css('z-index');

        if(+mq >= 1024 || +mq <= 640) {

            if(!!$('#show-stats').length) {$('#show-stats').remove();}
        }

        checkResize();

    });


    // Login popup
    var login = $('#login'),
        loginoverlay = $('#overlay'),
        popuplogin = $('.user-login-box-wrapper');

    login.on('click touchend', function() {
        "use strict";

        loginoverlay.addClass('active');
        popuplogin.addClass('active');

    });

    var closebutton = popuplogin.find('.login-box-header i');

    closebutton.on('click touchend', function() {

        loginoverlay.removeClass('active');
        popuplogin.removeClass('active');

    });

    // Flexslider
    $('.flexslider').flexslider({
        animation: "slide"
    });

});
