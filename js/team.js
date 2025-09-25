var dragTimer,
    dragged = false;

$(document).ready(function(){
    var depActive = "";
    getDragMove($(".pixelbox"));

    var floor_thumbs = $("#floor_thumbs .floor");
    floor_thumbs.click(function(){
        var rel = $(this).attr("data-floor");
        $(".greeting").removeClass("greeting");
        $(".textbox").removeClass("visible");
        $("#draggable").removeClass("active");
        $(".textbox p").removeClass("description");
        floor_thumbs.removeClass("active");
        $("#floor_viewer > div").hide();
        $(this).addClass("active");
        $("#floor_viewer #" + rel).fadeIn("slow");
        if ($(this).attr("data-floor").search("floor") != -1) {
            loaded("#" + $(this).attr("data-floor"));
        }

        clearTimeout(dragTimer);
        if ($(this).attr("data-floor") != "video-container") {
            getDragMove($(".pixelbox"));
        }
    });

    var departments = $("#departments li");
    var people = $("#people li");
    departments.click(function(){
        if ($(this).hasClass("active")) {
            departments.removeClass("active");
            people.removeClass("deactivated");
            $("#departments").removeClass("active");
            depActive = "";
        } else {
            departments.removeClass("active");
            $(this).addClass("active");
            $("#departments").addClass("active");
            depActive = $(this).attr("id");
            people.each(function(){
                $(this).removeClass("deactivated");
                if ($(this).attr("data-department") != depActive) $(this).addClass("deactivated");
            });
        }
    });

    people.click(function(){
        if(depActive == "") {
            depActive = $(this).attr("data-department");
            departments.each(function(){
                if ($(this).attr("id") == depActive) $(this).addClass("active");
            });
            people.each(function(){
                if ($(this).attr("data-department") != depActive) $(this).addClass("deactivated");
            });
            $("#departments").addClass("active");
        } else {
            if ($(this).attr("data-department") == depActive) {
                depActive = "";
                departments.removeClass("active");
                people.removeClass("deactivated");
                $("#departments").removeClass("active");
            } else {
                depActive = $(this).attr("data-department");
                departments.removeClass("active");
                departments.each(function(){
                    if ($(this).attr("id") == depActive) $(this).addClass("active");
                });
                people.each(function(){
                    $(this).removeClass("deactivated");
                    if ($(this).attr("data-department") != depActive) $(this).addClass("deactivated");
                });
            }
        }
    });

    /*** iScroll ***/
    var myScroll;
    loaded(".pixelbox.active");

    document.getElementById('floor_viewer').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    $("#floor_viewer").mousewheel(function() { return false; });

    function loaded (id) {
        myScroll = new IScroll(id, {
            scrollX: true,
            freeScroll: true,
            mouseWheel: true,
            scrollbars: false,
            wheelAction: 'zoom',
            zoom: true
        });
        myScroll.scrollTo(0, -400);
    }

    $(".pixelbox > div > *").click(function(){
        $(".greeting").removeClass("greeting");
        $(".textbox").removeClass("visible");
        $(".textbox p").removeClass("description");
        $(".textbox p").removeClass("texthover");
        if ($(this).hasClass("sprite")) {
            $(this).addClass("greeting");
            var pos = e_position($(this), 100, 150);
            $(".textbox").css({top: pos.top, left: pos.left});
            $(".textbox").addClass("visible");
            $(".textbox p").addClass("description");
            $(".textbox p").html($(this).attr("data-description"));
        }
    });
    $(".pixelbox > div > *").hover(function(){
        if($(".textbox.visible .description").length == 0) {
            //$(this).removeClass("hover");
            $(".textbox").removeClass("visible");
            $(".textbox p").removeClass("texthover");
            if ($(".textbox.visible").length == 0) {
                if($(this).attr("data-texthover")) {
                    var pos = e_position($(this), 35, 0);
                    //$(this).addClass("hover");
                    $(".textbox").css({top: pos.top, left: pos.left});
                    $(".textbox").addClass("visible");
                    $(".textbox p").addClass("texthover");
                    $(".textbox p").html($(this).attr("data-texthover"));
                }
            }
        }
    });
    $(".pixelbox > div > *").each(function(){
        if($(this).attr("data-texthover")) {
            $(this).addClass("hover");
        }
    });

    $(".akcatcher").click(function(){
        $(".ak").addClass("greeting");
    });
    $(".ak-doubt-catcher").click(function(){
        $(".ak").addClass("disabled");
        $(".ak-standup").addClass("active");
        $(".ak-doubt-catcher").addClass("disabled");
        $(".akcatcher").addClass("disabled");
        $(".mjcatcher").addClass("disabled");
    });
    $(".ak-standup").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".ak-standup").removeClass("active");
        $(".ak-rest").addClass("active");
        $(".char-ak").addClass("active");
    });

    $(".archive-catcher").click(function(){
        $(".archive").addClass("active");
    });
    $(".archive").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".chair1-catcher").click(function(){
        $(".chair1").addClass("active");
    });
    $(".chair1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });
    $(".chair2-catcher").click(function(){
        $(".chair2").addClass("active");
    });
    $(".chair2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".char-ak").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-ak").removeClass("active");
        $(".char-ak-1").addClass("active");
    });
    $(".char-ak-1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-ak-1").removeClass("active");
        $(".ak-talking").addClass("active");
        $(".mj-talking").addClass("active");
        $(".mj").addClass("disabled");
    });
    $(".ak-talking").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".ak-talking").removeClass("active");
        $(".mj-talking").removeClass("active");
        $(".mj").removeClass("disabled");
        $(".char-ak-2").addClass("active");
        $(".mjcatcher").removeClass("disabled");
    });
    $(".char-ak-2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-ak-2").removeClass("active");
        $(".char-ak-3").addClass("active");
    });
    $(".char-ak-3").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-ak-3").removeClass("active");
        $(".ak-rest").removeClass("active");
        $(".ak-sitdown").addClass("active");
    });
    $(".ak-sitdown").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".ak-sitdown").removeClass("active");
        $(".ak").removeClass("disabled");
        $(".ak-doubt-catcher").removeClass("disabled");
        $(".akcatcher").removeClass("disabled");
    });

    $(".blackboardcatcher").click(function(){
        if($(".bg.greeting").length == 0) {
            $(".blackboard").addClass("active");
            $(".bg").addClass("bg_rest");
            $(".bg_rest").removeClass("bg");
        }
    });
    $(".blackboard").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".blackboard").removeClass("active");
        $(".bg_rest").addClass("bg");
        $(".bg").removeClass("bg_rest");
    });
    $("#fancatcher").click(function(){
        if($(".mr.greeting").length == 0) {
            $(".fan").addClass("active");
            $(".mr").addClass("mr_rest");
            $(".mr_rest").removeClass("mr");
        }
    });
    $(".fan").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".fan").removeClass("active");
        $(".mr_rest").addClass("mr");
        $(".mr").removeClass("mr_rest");
    });
    $(".tdcatcher").click(function(){
        $(".telephone").removeClass("active");
        $(".tdtalking").removeClass("active");
        $(".td_rest").addClass("td");
        $(".td").removeClass("td_rest");
        $(".td").addClass("greeting");
    });
    $(".telephonecatcher").click(function(){
        if($(".td.greeting").length == 0) {
            $(".telephone").addClass("active");
            $(".td").addClass("td_rest");
            $(".td_rest").removeClass("td");
        }
    });
    $(".telephone").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".telephone").removeClass("active");
        $(".td_rest").addClass("td");
        $(".td").removeClass("td_rest");
    });
    $(".printer").click(function(){
        $(this).addClass("active");
        $(this).removeClass("hover");
    });
    $(".printer").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(this).addClass("hover");
    });
    $(".bgcatcher").click(function(){
        $(".bg").removeClass("idea");
        $(".bg").addClass("greeting");
    });
    $(".ctcatcher").click(function(){
        $(".ct").removeClass("gatherup");
        $(".ct").addClass("greeting");
    });
    $(".ct_filecatcher").click(function(){
        $(".ct_file").addClass("active");
        $(".ct").addClass("ct_rest");
        $(".ct").removeClass("ct");
    });
    $(".ct_file").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".ct_rest").addClass("ct");
        $(".ct").removeClass("ct_rest");
    });
    $(".dbcatcher").click(function(){
        $(".db").addClass("greeting");
    });
    $(".elcatcher").click(function(){
        $(".el").addClass("greeting");
    });
    $(".fscatcher").click(function(){
        $(".fs").addClass("greeting");
    });
    var stampTimer;
    $(".fs_stampcatcher, .ss_stampcatcher").click(function(){
        if (($(".fs").length > 0)&&($(".ss").length > 0)) {
            $(".stamp").addClass("active");
            clearTimeout(stampTimer);
            stampTimer = setTimeout (function(){
                $(".stamp").removeClass("active");
            }, 1500);
            $(".fs_stamp").addClass("active");
            setTimeout (function(){
                $(".char-stamp").addClass("active");
            }, 2500);
            setTimeout (function(){
                $(".ss_stamp").addClass("active");
                $(".ss").addClass("ss_rest");
                $(".ss").removeClass("ss");
            }, 3000);
            $(".fs").addClass("fs_rest");
            $(".fs").removeClass("fs");
        }
    });
    $(".fs_stamp").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".fs_stamp_b").addClass("active");
    });
    $(".char-stamp").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        stampTimer = setTimeout (function(){
            $(".char-stampback").addClass("active");
        }, 2225);
    });
    $(".ss_stamp").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".fs_stamp_b").removeClass("active");
        $(".fs_stamp_c").addClass("active");
        $(".ss_rest").addClass("ss");
        $(".ss_rest").removeClass("ss_rest");
    });
    $(".char-stampback").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });
    $(".fs_stamp_c").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".fs_rest").addClass("fs");
        $(".fs_rest").removeClass("fs_rest");
    });
    $(".meetingcacher").click(function(){
        if (($(".meetingcacher.inaction").length == 0)&&($(".fs").length > 0)&&($(".ss").length > 0)) {
            $(this).addClass("inaction");
            $("div[class*=fs_]").removeClass("active");
            $("div[class*=ss_]").removeClass("active");
            $(".fs_standup").addClass("active");
            $(".fs").addClass("fs_rest");
            $(".fs").removeClass("fs");
            $(".ss_standup").addClass("active");
            $(".stamp").addClass("active");
            $(".ss").addClass("ss_rest");
            $(".ss").removeClass("ss");
        }
    });
    $(".endmeetingcacher").click(function(){
        if($(".endmeetingcacher.inaction").length == 0) {
            $(this).addClass("inaction");
            $(".fs_havingmeeting").removeClass("active");
            $(".ss_havingmeeting").removeClass("active");
            $('.fs-standingupmeeting').addClass("active");
            $('.ss-standingupmeeting').addClass("active");
        }
    });
    $(".fs_standup").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".fs_rest").addClass("fs_desk");
        $(".fs_rest").removeClass("fs_rest");
        $(".char-fs1").addClass("active");
        $(".fscatcher").removeClass("sprite");
        $(".stamp").removeClass("active");
    });
    $(".char-fs1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-fs2").addClass("active");
    });
    $(".char-fs2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-fs3").addClass("active");
    });
    $(".char-fs3").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-fs4").addClass("active");
    });
    $(".char-fs4").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-fs5").addClass("active");
    });
    $(".char-fs5").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.fs_meeting').addClass("fs_meeting_rest");
        $('.fs_meeting').removeClass("fs_meeting");
        $(".fs-sittingmeeting").addClass("active");
    });
    $(".fs-sittingmeeting").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".fs_havingmeeting").addClass("active");
        $(".endmeetingcacher").addClass("active");
        $(".meetingcacher").removeClass("inaction"); //Maybe at the end
    });
    $(".fs-standingupmeeting").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-fs6").addClass("active");
        $(".fs_meeting_rest").addClass("fs_meeting");
        $('.fs_meeting_rest').removeClass("fs_meeting_rest");
    });
    $(".char-fs6").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-fs7').addClass("active");
    });
    $(".char-fs7").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-fs8').addClass("active");
    });
    $(".char-fs8").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-fs9').addClass("active");
    });
    $(".char-fs9").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-fs10').addClass("active");
    });
    $(".char-fs10").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.fs_sitting').addClass("active");
        $(".fs_desk").addClass("fs_rest");
        $(".fs_desk").removeClass("fs_desk");
    });
    $(".fs_sitting").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".fs_rest").addClass("fs");
        $(".fs_rest").removeClass("fs_rest");
        $(".fscatcher").addClass("sprite");
        $(".endmeetingcacher").removeClass("active");
        $(".endmeetingcacher").removeClass("inaction");
    });
    $(".ss_standup").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".ss_rest").addClass("ss_desk");
        $(".ss_rest").removeClass("ss_rest");
        $(".char-ss1").addClass("active");
        $(".ss_desk").removeClass("sprite");
    });
    $(".char-ss1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-ss2").addClass("active");
    });
    $(".char-ss2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-ss3").addClass("active");
    });
    $(".char-ss3").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-ss4").addClass("active");
    });
    $(".char-ss4").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-ss5").addClass("active");
    });
    $(".char-ss5").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.ss_meeting').addClass("ss_meeting_rest");
        $('.ss_meeting').removeClass("ss_meeting");
        $(".ss-sittingmeeting").addClass("active");
    });
    $(".ss-sittingmeeting").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".ss_havingmeeting").addClass("active");
    });
    $(".ss-standingupmeeting").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-ss6").addClass("active");
        $('.ss_meeting_rest').addClass("ss_meeting");
        $('.ss_meeting_rest').removeClass("ss_meeting_rest");
    });
    $(".char-ss6").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-ss7').addClass("active");
    });
    $(".char-ss7").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-ss8').addClass("active");
    });
    $(".char-ss8").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-ss9').addClass("active");
    });
    $(".char-ss9").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-ss10').addClass("active");
    });
    $(".char-ss10").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.char-ss11').addClass("active");
    });
    $(".char-ss11").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $('.ss_sitting').addClass("active");
        $(".ss_desk").addClass("ss_rest");
        $(".ss_desk").removeClass("ss_desk");
    });
    $(".ss_sitting").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".ss_rest").addClass("ss");
        $(".ss_rest").removeClass("ss_rest");
        $(".ss").addClass("sprite");
    });

    $(".devplant-catcher").click(function(){
        $(".devplant").addClass("active");
    });
    $(".devplant").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".gremlin01-catcher").click(function(){
        $(".gremlin01").addClass("active");
    });
    $(".gremlin01").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".gremlin02-catcher").click(function(){
        $(".gremlin02").addClass("active");
    });
    $(".gremlin02").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".main-garbage-catcher").click(function(){
        $(".main-garbage").addClass("active");
    });
    $(".main-garbage").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".np").click(function(){
        $(".mk").removeClass("shooting");
        $(".np").removeClass("dodging");
    });

    $(".npcpu-catcher").click(function(){
        $(".np-computer").addClass("active");
    });
    $(".np-computer").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".mhcatcher").click(function(){
        $(".mhshot").addClass("active");
        $(".mh").addClass("rest");
        stampTimer = setTimeout (function(){
            $(".char-paperball").addClass("active");
        }, 1500);
    });
    $(".mhshot").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        //$(".char-paperball").addClass("active");
        $(".mh").removeClass("rest");
    });
    $(".char-paperball").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".garbage").addClass("active");
    });
    $(".garbage").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });


    $(".mhacatcher").click(function(){
        $(".mha").addClass("greeting");
    });
    $(".dc_switchcatcher").click(function(){
        $(".mha").addClass("mha_rest");
        $(".mha").removeClass("mha");
        $(".mha_standup").addClass("active");
        $(".mhacatcher").removeClass("sprite");
        $(".dc_switch").addClass("switched");
        $(".dc_trockenbau_01").addClass("dark");
        $(".dc_trockenbau_02").addClass("dark");
        $(".dc_racks_03").addClass("dark");
        $(".dc_racks_04").addClass("dark");
        $(".dc_racks_05").addClass("dark");
        $(".dc_trockenbau_06").addClass("dark");
        $(".dc_racks_07").addClass("dark");
        $(".dc_trockenbau_08").addClass("dark");
        $(".dc_racks_09").addClass("dark");
        $(".dc_racks_10").addClass("dark");
        $(".dc_racks_11").addClass("dark");
        $(".dark_room").addClass("active");
        $("#floorc").addClass("dark");
        $(".dc_switchcatcher").addClass("disabled");
    });
    $(".mha_standup").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".mha_standup").removeClass("active");
        $(".char-mha1").addClass("active");
        $(".mha_rest").addClass("dark");
    });
    $(".char-mha1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-mha1").removeClass("active");
        $(".char-mha2").addClass("active");
    });
    $(".char-mha2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-mha2").removeClass("active");
        $(".mha_switch_on").addClass("active");
        setTimeout (function(){
            $(".dc_trockenbau_01").removeClass("dark");
            $(".dc_trockenbau_02").removeClass("dark");
            $(".dc_racks_03").removeClass("dark");
            $(".dc_racks_04").removeClass("dark");
            $(".dc_racks_05").removeClass("dark");
            $(".dc_trockenbau_06").removeClass("dark");
            $(".dc_racks_07").removeClass("dark");
            $(".dc_trockenbau_08").removeClass("dark");
            $(".dc_racks_09").removeClass("dark");
            $(".dc_racks_10").removeClass("dark");
            $(".dc_racks_11").removeClass("dark");
            $(".dark_room").removeClass("active");
            $("#floorc").removeClass("dark");
            $(".mha_rest").removeClass("dark");
            $(".mha_rest").addClass("light");
        }, 1000);
    });
    $(".mha_switch_on").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".mha_switch_on").removeClass("active");
        $(".char-mha4").addClass("active");
        $(".dc_switch").removeClass("switched");
    });
    $(".char-mha4").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-mha4").removeClass("active");
        $(".char-mha5").addClass("active");
    });
    $(".char-mha5").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-mha5").removeClass("active");
        $(".mha").removeClass("light");
        $(".mha_sitdown").addClass("active");
        $(".mha_rest").removeClass("light");
    });
    $(".mha_sitdown").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".mha_sitdown").removeClass("active");
        $(".mha_rest").addClass("mha");
        $(".mha_rest").removeClass("mha_rest");
        $(".dc_switchcatcher").removeClass("disabled");
        $(".mhacatcher").addClass("sprite");
    });
    $(".mkcatcher").click(function(){
        $(".mk").removeClass("shooting");
        $(".np").removeClass("dodging");
        $(".mk").addClass("greeting");
    });

    $(".mm-askcatcher").click(function(){
        $(".mm-standup").addClass("active");
        $(".mm").addClass("disabled");
        $(".mm").removeClass("sprite");
        $(this).addClass("disabled");
        $(".telephonecatcher").addClass("disabled");
        $(".tdcatcher").addClass("disabled");
    });
    $(".mm-standup").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".mm-table").addClass("active");
        $(".char-mm1").addClass("active");
    });
    $(".char-mm1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-mm2").addClass("active");
    });
    $(".char-mm2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-mm3").addClass("active");
    });
    $(".char-mm3").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".mm-talking").addClass("active");
        $(".td").addClass("rest");
        $(".tdtalking").addClass("active");
    });
    $(".mm-talking").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".tdtalking").removeClass("active");
        $(".td").removeClass("rest");
        $(".char-mm4").addClass("active");
    });
    $(".char-mm4").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-mm5").addClass("active");
    });
    $(".char-mm5").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-mm6").addClass("active");
    });
    $(".char-mm6").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".mm-sitdown").addClass("active");
        $(".mm-table").removeClass("active");
    });
    $(".mm-sitdown").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".mm").removeClass("disabled");
        $(".mm").addClass("sprite");
        $(".mm-askcatcher").removeClass("disabled");
        $(".telephonecatcher").removeClass("disabled");
        $(".tdcatcher").removeClass("disabled");
    });

    $(".shotcatcher").click(function(){
        if($(".mk.greeting").length == 0) {
            $(".shot").addClass("active");
            $(".mk").addClass("mk_rest");
            $(".mk_rest").removeClass("mk");
            setTimeout (function(){
                $(".char-shot").addClass("active");
                $(".dodge").addClass("active");
                $(".np").addClass("np_rest");
                $(".np_rest").removeClass("np");
            }, 2750);
        }
    });
    $(".shot").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".mk_rest").addClass("mk");
        $(".mk").removeClass("mk_rest");
    });
    $(".char-shot").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });
    $(".dodge").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".np_rest").addClass("np");
        $(".np").removeClass("np_rest");
    });
    $(".mjcatcher").click(function(){
        $(".mj").addClass("greeting");
    });
    $(".mrcatcher").click(function(){
        $(".mr").addClass("greeting");
    });
    $(".jocatcher").click(function(){
        $(".jo").addClass("greeting");
    });
    $(".sacatcher").click(function(){
        $(".sa").addClass("greeting");
    });

    $(".papers").click(function(){
        $(this).addClass("active");
    });
    $(".papers").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-paperplane").addClass("active");
    });
    $(".char-paperplane").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".garbage2").addClass("active");
    });
    $(".garbage2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });

    $(".bbq_meetcatcher").click(function(){
        $(".bbq_meet").toggleClass("jump");
    });
    $(".bbq_meet_2catcher").click(function(){
        $(".bbq_meet_2").toggleClass("jump");
    });
    $(".robot").click(function(){
        $(this).addClass("active");
        $(this).removeClass("hover");
        $(this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("active");
            $(this).class("hover");
        });
    });
    $(".cookingcatcher").click(function(){
        $(".oven").addClass("cooking");
        $(".cooking").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("cooking");
        });
    });
    $(".herdcatcher").click(function(){
        $(".oven").addClass("herd");
        $(".herd").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("herd");
        });
    });
    $(".cactus").click(function(){
        $(this).addClass("active");
        $(this).removeClass("hover");
        $(this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("active");
            $(this).addClass("hover");
        });
    });
    $(".sofacatcher").click(function(){
        $(".sofa_2f").addClass("active");
        $(".sofa_2f").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("active");
        });
    });
    $(".plantcatcher").click(function(){
        $(".plant").addClass("active");
        $(".plant").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("active");
        });
    });
    $(".upper_archive").click(function(){
        $(this).addClass("active");
        $(this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("active");
        });
    });
    $(".heatingcatcher").click(function(){
        $(".heating").addClass("active");
        $(".heating").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("active");
        });
    });
    setInterval (function(){
        $(".screen1").toggleClass("active");
        $(".screen2").toggleClass("active");
    }, 18000);
    setInterval (function(){
        $(".solitair1").toggleClass("active");
    }, 11000);
    setInterval (function(){
        $(".solitair2").toggleClass("active");
    }, 18000);

    var npTimer;
    //dbcoffee
    $(".coffeecatcher").click(function(){
        if ($(".db").length > 0) {
            $(".db").addClass("db_rest");
            $(".db_rest").removeClass("db");
            $(".char-db").addClass("active");
        }
    });
    $(".char-db").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-db").removeClass("active");
        $(".char-db1").addClass("active");
    });
    $(".char-db1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-db1").removeClass("active");
        $(".char-db2").addClass("active");
    });
    $(".char-db2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-db2").removeClass("active");
        $(".char-db3").addClass("active");
    });
    $(".char-db3").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-db3").removeClass("active");
        $(".char-db4").addClass("active");
    });
    $(".char-db4").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-db4").removeClass("active");
        $(".char-db5").addClass("active");
    });
    $(".char-db5").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".char-db5").removeClass("active");
        $(".db_rest").addClass("db");
        $(".db").removeClass("db_rest");
    });

    //pacman
    $(".pacman-catcher").click(function(){
        $(".char-pacman10").addClass("active");
        $(".char-ghost10").addClass("active");
        $(".pacman-catcher").addClass("disabled");
    });
    $(".char-pacman10").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-pacman20").addClass("active");
    });
    $(".char-pacman20").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-pacman40").addClass("active");
    });
    $(".char-pacman40").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-returning-ghost10").addClass("active");
    });
    $(".char-returning-ghost10").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-returning-ghost30").addClass("active");
    });
    $(".char-returning-ghost30").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-returning-ghost40").addClass("active");
    });
    $(".char-returning-ghost40").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
    });
    $(".char-ghost10").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-ghost20").addClass("active");
    });
    $(".char-ghost20").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-ghost40").addClass("active");
    });
    $(".char-ghost40").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-returning-pacman10").addClass("active");
    });
    $(".char-returning-pacman10").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-returning-pacman30").addClass("active");
    });
    $(".char-returning-pacman30").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".char-returning-pacman40").addClass("active");
    });
    $(".char-returning-pacman40").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("active");
        $(".pacman-catcher").removeClass("disabled");
    });

    $("#draggable #dr_close").on("click", function(){
        $(this).parent().removeClass("active");
        dragged = true;
    });

    var $points = $("#show-points input");
    if ($points.length > 0){
        $points.on("click", function(){
            if($(this).prop('checked')) {
                $(".hover").addClass("indicator");
            } else {
                $(".hover").removeClass("indicator");
            }
        });
    }

    $("#team_scenes #floor_viewer")
        .mousedown(function(){
            $("#floor_viewer").addClass("move");
        })
        .mouseup(function(){
            $("#floor_viewer").removeClass("move");
        });
});

$("#floora").load(function() {
    console.log("loaded");
    $(this).addClass("active");
});

function e_position(element, top, left) {
    if(typeof(top)==='undefined') top = 50;
    if(typeof(left)==='undefined') left = 150;
    var pos = element.position();
    if(pos.left < left){
        pos.left = 50;
    } else {
        pos.left = pos.left - left;
    }
    if(pos.top < 0) pos.top = 0;
    else pos.top = pos.top-top;
    return pos;
}
function getDragMove (elem) {
    if (!dragged) {
        var isDragging = false;
        elem
            .mousedown(function() {
                $(window).mousemove(function() {
                    isDragging = true;
                    dragged = true;
                    $("#draggable").removeClass("active");
                    $(window).unbind("mousemove");
                });
            })
            .mouseup(function() {
                var wasDragging = isDragging;
                isDragging = false;
                $(window).unbind("mousemove");
                if (!wasDragging) {
                    $("#throbble").show();
                }
            });

        dragTimer = setTimeout (function(){
            if (!dragged) {
                $("#draggable").addClass("active");
            }
        }, 3000);
    }
}