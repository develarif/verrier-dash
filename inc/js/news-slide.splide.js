document.addEventListener( 'DOMContentLoaded', function() {

    // verrierBlog Init
    const verrierBlog = new Splide( '.verrier-blog', {
        type: 'loop',
        speed: 1000,
        perPage: 2,
        perMove: 1,
        pagination: false,
        breakpoints: {
            1280:{
                perPage: 3
            },
            1080: {
                perPage: 2
            },
            520: {
                perPage: 1
            }
        }
    } );
    verrierBlog.mount();


    // cryptoBlog Init
    const cryptoBlog = new Splide( '.crypto-blog', {
        type: 'loop',
        speed: 1000,
        perPage: 2,
        perMove: 1,
        pagination: false,
        breakpoints: {
            1280:{
                perPage: 3
            },
            1080: {
                perPage: 2
            },
            520: {
                perPage: 1
            }
        }
    } );
    cryptoBlog.mount();
} );