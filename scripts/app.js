(function () {
    let slider = new Slider({
        el: document.querySelector('#slider'),
        slides: [{
                link: '#1',
                image: './images/bichu.jpg'
            },
            {
                link: '#2',
                image: './images/Bomba.jpg'
            },
            {
                link: '#3',
                image: './images/cz.jpg'
            },
            {
                link: '#4',
                image: './images/lyg.jpg'
            },
            {
                link: '#5',
                image: './images/mxy.jpg'
            },
        ]
    })
    window.slider = slider
}
)()