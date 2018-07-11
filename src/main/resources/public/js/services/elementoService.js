function elementoService($http) {

    function cadastraElemento(elemento) {
        return $http({
            method: 'post',
            url: 'http://localhost:8080/elemento',
        });
    }

    return this;
}