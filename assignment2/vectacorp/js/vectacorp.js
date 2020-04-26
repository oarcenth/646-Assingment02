$(function(){
    $(document).tooltip(); 
    $('#tabs').tabs();
    $('#accordion').accordion({
        collapsible: true
    });
    $('#aboutustabs').tabs().addClass('ui-tabs-vertical ui-helper-clearfix'); 
    $('#aboutustabs li').removeClass('ui-corner-top').addClass('ui-corner-left');
    $('input[type=radio]').button();
    $('input[type=checkbox]').checkboxradio();
    $('.companysize').selectmenu();
    $('.media').menu();
    $('#submit').button();

});

$(function () {
    $("input[type=submit]").button();
    $("#submitbtn").button();
});


$(function(){
    $("#solutionsnav").sticky({topSpacing:100});
  });
