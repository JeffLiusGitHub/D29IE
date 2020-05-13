$(document).ready(function () {
    //var pbar = document.getElementById('pbar');

    // q0 control
    var q0checkC = document.getElementById('q0checkC');
    //var q0checkN = document.getElementById('q0checkN');
    //var q0explain = document.getElementById('q0explain');
    //var q0visualization = document.getElementById('q0visualization');

    //$("input[name='q0']:radio").change(function () {
    //    var $in = $(this);

    //    //pbar.textContent = '1 / 5';
    //    //pbar.style.width = '20%';
    //    var q0answer = $("input[name='q0']:checked").val();

    //    if (q0answer == 't') {
    //        q0checkC.style.display = 'block';
    //        q0checkN.style.display = 'none';
    //    } else {
    //        q0checkC.style.display = 'none';
    //        q0checkN.style.display = 'block';
    //    }

    //    q0explain.style.display = 'block'
    //    q0visualization.style.display = 'block';


    //    $in.parents('.choice')
    //        .addClass('active')
    //        .parents('.choices')
    //        .addClass('done')
    //        .find(':radio')
    //        .attr('disabled', true);

    //    checkQuestionNum();
    //});

    //// q1 control
    //var q1checkC = document.getElementById('q1checkC');
    //var q1checkN = document.getElementById('q1checkN');
    //var q1explain = document.getElementById('q1explain');
    //var q1visualization = document.getElementById('q1visualization');

    //$("input[name='q1']:radio").change(function () {
    //    var $in = $(this);

    //    //pbar.textContent = '2 / 5';
    //    //pbar.style.width = '40%';
    //    var q1answer = $("input[name='q1']:checked").val();

    //    if (q1answer == 't') {
    //        q1checkC.style.display = 'block';
    //        q1checkN.style.display = 'none';
    //    } else {
    //        q1checkC.style.display = 'none';
    //        q1checkN.style.display = 'block';
    //    }
    //    //$("input[name='q1']").attr('disabled', true);
    //    q1explain.style.display = 'block'
    //    q1visualization.style.display = 'block';

    //    console.log($in[0]);


    //    $in.parents('.choice')
    //        .addClass('active')
    //        .parents('.choices')
    //        .addClass('done')
    //        .find(':radio')
    //        .attr('disabled', true);

    //    checkQuestionNum();
    //});

    //// q2 control
    //var q2checkC = document.getElementById('q2checkC');
    //var q2checkN = document.getElementById('q2checkN');
    //var q2explain = document.getElementById('q2explain');
    //var q2visualization = document.getElementById('q2visualization');

    //$("input[name='q2']:radio").change(function () {
    //    var $in = $(this);

    //    //pbar.textContent = '3 / 5';
    //    //pbar.style.width = '60%';
    //    var q2answer = $("input[name='q2']:checked").val();

    //    if (q2answer == 't') {
    //        q2checkC.style.display = 'block';
    //        q2checkN.style.display = 'none';
    //    } else {
    //        q2checkC.style.display = 'none';
    //        q2checkN.style.display = 'block';
    //    }
    //    //$("input[name='q2']").attr('disabled', true);
    //    q2explain.style.display = 'block'
    //    q2visualization.style.display = 'block';

    //    $in.parents('.choice')
    //        .addClass('active')
    //        .parents('.choices')
    //        .addClass('done')
    //        .find(':radio')
    //        .attr('disabled', true);

    //    checkQuestionNum();
    //});

    //// q3 control
    //var q3checkC = document.getElementById('q3checkC');
    //var q3checkN = document.getElementById('q3checkN');
    //var q3explain = document.getElementById('q3explain');
    //var q3visualization = document.getElementById('q3visualization');

    //$("input[name='q3']:radio").change(function () {
    //    var $in = $(this);

    //    //pbar.textContent = '4 / 5';
    //    //pbar.style.width = '80%';
    //    var q3answer = $("input[name='q3']:checked").val();

    //    if (q3answer == 't') {
    //        q3checkC.style.display = 'block';
    //        q3checkN.style.display = 'none';
    //    } else {
    //        q3checkC.style.display = 'none';
    //        q3checkN.style.display = 'block';
    //    }
    //    //$("input[name='q3']").attr('disabled', true);
    //    q3explain.style.display = 'block'
    //    q3visualization.style.display = 'block';

    //    $in.parents('.choice')
    //        .addClass('active')
    //        .parents('.choices')
    //        .addClass('done')
    //        .find(':radio')
    //        .attr('disabled', true);

    //    checkQuestionNum();
    //});

    //// q4 control
    //var q4checkC = document.getElementById('q4checkC');
    //var q4checkN = document.getElementById('q4checkN');
    //var q4explain = document.getElementById('q4explain');
    //var q4visualization = document.getElementById('q4visualization');

    //$("input[name='q4']:radio").change(function () {
    //    var $in = $(this)

    //    //pbar.textContent = '5 / 5';
    //    //pbar.style.width = '100%';
    //    var q4answer = $("input[name='q4']:checked").val();

    //if (q4answer == 't') {
    //    q4checkC.style.display = 'block';
    //    q4checkN.style.display = 'none';
    //} else {
    //    q4checkC.style.display = 'none';
    //    q4checkN.style.display = 'block';
    //}
    ////$("input[name='q4']").attr('disabled', true);
    //q4explain.style.display = 'block'
    //q4visualization.style.display = 'block';

    //    $in.parents('.choice')
    //        .addClass('active')
    //        .parents('.choices')
    //        .addClass('done')
    //        .find(':radio')
    //        .attr('disabled', true);

    //    checkQuestionNum();
    //});


    $('#questions :radio').on('change', function (e) {

        var $in = $(this);
        var _id = $in.attr('name');

        console.log(_id);

        if ($in.val() == 't') {
            $('#' + _id + 'checkC').show();
            $('#' + _id + 'checkN').hide();
        } else {
            $('#' + _id + 'checkC').hide();
            $('#' + _id + 'checkN').show();
        }
        $('#' + _id + 'explain').show();
        $('#' + _id + 'visualization').show();

        var $choices = $in.parents('.choices');
        $choices.addClass('done');

        var $cs = $choices.find('.choice');
        $cs.each(function () {
            var $c = $(this);
            var $r = $c.find(':radio');

            if ($r.val() == 'f')
                $c.addClass('ans_false');
            else
                $c.addClass('ans_true');

            $r.attr('disabled', true);
        })

        $in.parents('.choice')
            .addClass('ans_select');



        //$in.parents('.choice')
        //    .addClass('active')
        //    .parents('.choices')
        //    .addClass('done')
        //    .find(':radio')
        //    .attr('disabled', true);

        checkQuestionNum();
    });


    function checkQuestionNum() {
        $('#pbar').html(_questionIndex + ' / ' + _totalQuestion)
            .css('width', (_rate * _questionIndex) + '%');
        if (_questionIndex >= _totalQuestion) {
            $('#questions .ftco-section .visualization').hide();
            $('#finalVisualization').show();
        }
    }

})