(function(window, document, undefined) {
	"use strict";

    const template = `
        <div>
            <input type="text" id="search-input"></input>
            <button id="search-button">Search</button>
        </div>
    `;
	class Search extends HTMLElement {
		
		// A getter/setter for pressed property.
        get search_value() {
            return shadowRoot.querySelector('input').hasAttribute('value');
        }

        set search_value(value) {
            if (value) {
                shadowRoot.querySelector('input').setAttribute('value', value);
            } else {
                shadowRoot.querySelector('input').removeAttribute('value');
            }
        }

		constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;

            shadowRoot.querySelector('input').addEventListener('keydown', 
            	function(e) {
            		if (!e) e = window.event;
		        	// console.log(e.keyCode);
					var enter_key = e.keyCode || e.which;
					if (enter_key == "13") {
						search();
					}
            	}
        	);
            shadowRoot.querySelector('button').addEventListener('click',
            	function() {
            		search();
            	}
        	);
            var search = function() {
				console.log(shadowRoot.querySelector('input').value);
			}
        }
    };

    window.customElements.define('search-pane', Search);

})(window, document);