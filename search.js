(function(window, document) {
	"use strict";

    const template = `
        <div>
            <input type="text"></input>
            <button>Search</button>
        </div>
    `;
	class Search extends HTMLElement {
		
		// A getter/setter for pressed property.
        get value() {
            return this.shadowRoot.querySelector('input').value;
        };

        set value(value) {
        	this.setAttribute('value', value);
            this.shadowRoot.querySelector('input').value = value;
        };

		constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;

            shadowRoot.querySelector('input').addEventListener('keyup', 
            	function(e) {
            		if (!e) e = window.event;
					var enter_key = e.keyCode || e.which;
					if (enter_key == '13') {
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
        };
    };

    window.customElements.define('search-input', Search);

})(window, document);