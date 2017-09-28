$(document).ready(function(){
    
    
    $('#beach').hover(function(){
        $('#wrapper').css('background-image','url(images/beach.jpg)')
    });
    
    $('#snow').hover(function(){
        $('#wrapper').css('background-image','url(images/snow.jpg)')
    });
    
    $('#planet').hover(function(){
        $('#wrapper').css('background-image','url(images/earth.jpg)')
    });

    $('#dojo').hover(function(){
        $('#wrapper').css('background-image','url(images/dojo.jpg)')
    });

    $('#forest').hover(function(){
        $('#wrapper').css('background-image','url(images/forest.jpg)')
    });

    $('#matrix').hover(function(){
        $('#wrapper').css('background-image','url(images/matrix.jpg)')
    });

    
    $('.arenas').click(function(){
        $('#arena').toggleClass('#players')
        $('#players').toggle();
        $('#arena').toggle();
    });

    $('#ninja1').change(function(){
        var value1 = $('#ninja1').val();
        $('#left').html('<img src="./images/' + value1 + '.png" alt="Donny">');
    })

    $('#ninja2').change(function(){
        var value2 = $('#ninja2').val();
        $('#right').html('<img src="./images/' + value2 + '.png" alt="Donny">');
    })
    
})