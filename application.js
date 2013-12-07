/*jslint browser: true*/
/*global $, jQuery*/



(function () {
    "use strict";

    $(function () {
        $('.basecamp').mouseenter(function () {
            $('#default').removeClass('visible').addClass('hidden');
            $('#one').removeClass('hidden').addClass('visible');
            $('#arrow_left').removeClass('hidden').addClass('visible');
        });
        
        $('.basecamp').mouseleave(function () {
            $('#one').removeClass('visible').addClass('hidden');
            $('#default').removeClass('hidden').addClass('visible');
            $('#arrow_left').removeClass('visible').addClass('hidden');
        });
    });
    
    $(document).ready(function () {
        $('.highrise').mouseenter(function () {
            $('#default').removeClass('visible').addClass('hidden');
            $('#two').removeClass('hidden').addClass('visible');
            $('#arrow_left_again').removeClass('hidden').addClass('visible');
        });
        
        $('.highrise').mouseleave(function () {
            $('#two').removeClass('visible').addClass('hidden');
            $('#default').removeClass('hidden').addClass('visible');
            $('#arrow_left_again').removeClass('visible').addClass('hidden');
        });
    });
    
    $(document).ready(function () {
        $('.campfire').mouseenter(function () {
            $('#default').removeClass('visible').addClass('hidden');
            $('#three').removeClass('hidden').addClass('visible');
            $('#arrow_right').removeClass('hidden').addClass('visible');
        });
        
        $('.campfire').mouseleave(function () {
            $('#three').removeClass('visible').addClass('hidden');
            $('#default').removeClass('hidden').addClass('visible');
            $('#arrow_right').removeClass('visible').addClass('hidden');
        });
    });
    
    
}());