var video = videojs('my-video', {

    // enable playback speed
    playbackRates: [.5, 1, 1.5, 2, 2.5],
    

    plugins: {

        // enable keyboard hotkeys
        hotkeys: {
            seekStep: 10,
            enableNumbers: false,
        }
    }


});