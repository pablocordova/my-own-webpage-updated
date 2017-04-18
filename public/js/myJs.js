var video = $('#video-welcome')[0];
video.loop = true;
video.load();

$(document).ready(function() {

    /**
     * To animate the scroll when click in one secction of navbar
     */

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            // It seems like 800 ms is optimum to the movement
            $('html, body').animate({
                scrollTop: $(hash).offset().top    
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    /**
     *  Create all links tags
     */

    $("a").each(function(index, element) {
        var name_tag = $(this).text();
        switch (name_tag) {
            case "MySql":
                $(this).attr('href', 'https://www.mysql.com');
                break;
            case "Java":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/Java_(programming_language)');
                break;
            case "MVC":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller');
                break;
            case "ROS":
                $(this).attr('href', 'http://www.ros.org');
                break;
            case "AngularJS":
                $(this).attr('href', 'https://angularjs.org');
                break;
            case "Bootstrap":
                $(this).attr('href', 'http://getbootstrap.com');
                break;
            case "Docker":
                $(this).attr('href', 'https://www.docker.com');
                break;
            case "Jenkins":
                $(this).attr('href', 'https://jenkins.io');
                break;
            case "Jquery":
                $(this).attr('href', 'https://jquery.com');
                break;
            case "PHP":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/PHP');
                break;
            case "Arduino":
                $(this).attr('href', 'https://www.arduino.cc/');
                break;
            case "GPS":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/Global_Positioning_System');
                break;
            case "GPRS":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/General_Packet_Radio_Service');
                break;
            case "C#":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)');
                break;
            case "Sockets":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/Network_socket');
                break;
            case "C++":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/C%2B%2B');
                break;
            case "OpenCV":
                $(this).attr('href', 'http://opencv.org/about.html');
                break;
            case "Odroid XU-3":
                $(this).attr('href', 'http://www.hardkernel.com/main/products/prdt_info.php?g_code=g140448267127');
                break;
            case "Dspics":
                $(this).attr('href', 'http://www.microchip.com/design-centers/16-bit/products/dspic33f-e');
                break;
            case "IMU":
                $(this).attr('href', 'https://en.wikipedia.org/wiki/Inertial_measurement_unit');
                break;
            case "Flightgear":
                $(this).attr('href', 'http://www.flightgear.org');
                break;
            case "Python":
                $(this).attr('href', 'https://www.python.org');
                break;
            case "Nodejs":
                $(this).attr('href', 'https://nodejs.org/en');
                break;
            case "Express":
                $(this).attr('href', 'https://www.npmjs.com/package/express');
                break;
            case "MongoDB":
                $(this).attr('href', 'https://www.mongodb.com');
                break;
            case "Angular 4":
                $(this).attr('href', 'https://angular.io');
                break;
        }

    });
});



    

