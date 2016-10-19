(function(){
    var element = Object.create(HTMLElement.prototype);

    element.createdCallback = function() {
        const doc = document.currentScript.ownerDocument;
        const template = doc.querySelector("#button-template");

        this.content = this.innerHTML;
        this.innerHTML = "";

        this._root = this.attachShadow({mode: "open"});
        this._root.appendChild(template.content.cloneNode(true));

        this._content = this._root.querySelector(".content");
        this._content.innerHTML = this.content;
    };
    element.attachedCallback = function() {};
    element.detachedCallback = function() {};
    element.attributeChangedCallback = function(attr, oldVal, newVal) {};

    // We are using "mo-header" here because "header" is already
    // a tag, so instead we use an abbreviation of "meme-organizer header".
    document.registerElement('mo-button', {
        prototype: element
    });
})();
