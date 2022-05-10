import React from 'react';

const Notifications = () => {
    return (
        <div className="auxTable">
            <div className="table_header">
                <h3>
                    <span>Notificación</span>
                    <input type="search" placeholder="Buscar..." className="form-control search-input"
                           data-table="customers-list"/>
                </h3>
            </div>
            <div className="table_section">
                <table className=" customers-list">
                    <thead>
                    <tr>
                        <th>Asunto</th>
                        <th>Remitente</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Brian</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Leído
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Gama</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Leído
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Misael</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Leído
                                    </label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};


(function (document) {
    'use strict';

    var TableFilter = (function (myArray) {
        var search_input;

        function _onInputSearch(e) {
            search_input = e.target;
            var tables = document.getElementsByClassName(search_input.getAttribute('data-table'));
            myArray.forEach.call(tables, function (table) {
                myArray.forEach.call(table.tBodies, function (tbody) {
                    myArray.forEach.call(tbody.rows, function (row) {
                        var text_content = row.textContent.toLowerCase();
                        var search_val = search_input.value.toLowerCase();
                        row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
                    });
                });
            });
        }

        return {
            init: function () {
                var inputs = document.getElementsByClassName('search-input');
                myArray.forEach.call(inputs, function (input) {
                    input.oninput = _onInputSearch;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            TableFilter.init();
        }
    });

})(document);



export default Notifications;