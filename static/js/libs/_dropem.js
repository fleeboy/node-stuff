/**
 * Drop 'em
 * Creates custom drop down select lists from a normal select list
 * @dependency underscore.js
 *
 * Created with JetBrains PhpStorm.
 * User: leeowen
 * Date: 30/09/13
 * Time: 16:56
 *
 */

var DropEm = DropEm || {};

DropEm = (function(_, window, undefined) {
    "use strict";

    var config = {},
        theSelectFew = [];

    var boSelecta = function(selector) {

        try {
            return Array.prototype.slice.call(

                document.querySelectorAll( selector ) );

        } catch(e){

            console.log({'Error':e});
        }

    };

    theSelectFew = boSelecta('select');

    _(theSelectFew).map(function(el) {

//        console.log(el);
        // First we check if the object is not empty, if the object has child elements
        if (el.children.length) {
            var children = el.children;
            for (var i = 0, l = children.length; i < l; i++) {
                // Do something with each child element as children[i]
                console.log(children[i]);
            }
        }

    });

}(_, this));
