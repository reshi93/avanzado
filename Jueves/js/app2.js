
(function(){
    'use strict';
    angular.module("myApp", []).controller("movieCtrl",movieCtrl);

    function movieCtrl(){
        var movie = this;
        //movie.nombre=[{'nombre':'Luis', 'edad':20}, {'nombre': 'Donaldo', 'edad': 21}]

        movie.collection = [
            {
                'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MDM4NTg0NV5BMl5BanBnXkFtZTcwNjI4MTczMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
                'name':'Una serie de Eventos desafortunados',
                'cast':['Jim Carrey', 'tipo1', 'tipo2'],
                'year':2004,
                'category':'fiction'
            },
            {
                'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
                'name':'Resident evil',
                'cast':['Milla Jovovich', 'zombie1', 'zombie2'],
                'year':2017,
                'category':'fiction'
            },
            {
                'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BOTVhMWQ5MDktMGE3OS00MjVlLWExZWYtMzY2MTg4ZGFiZDQ5L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg',
                'name':'whiplash',
                'cast':['Miles Tellez', 'Simmons', 'baterista2'],
                'year':2016,
                'category':'drama'
            }
    ];
}
})();
