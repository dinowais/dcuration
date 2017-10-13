/**
 * Created by owaismushtaq on 12/10/17.
 */
function myFunc(container) {
    var progress_obj = new ProgressBar.Circle(container, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 15,
        trailWidth: 15,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {color: '#aaa', width: 15},
        to: {color: '#333', width: 15},
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    progress_obj.text.style.color = '#000000';
    progress_obj.text.style.fontSize = '9px';
    progress_obj.text.style.top = '43%';
    return progress_obj;
}