/*
* Copyright (c) 2009 Gabriel 'punisher' Gilini
*
* Permission to use, copy, modify, and distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* */

var igualtiltilzeitor = (function(){
    var initialized = false;
    var strings;
    var isDS = false;
    var doc;


    function init()
    {
        var appcontent = document.getElementById("appcontent");   // browser
        if(appcontent)
        {
            appcontent.addEventListener("DOMContentLoaded", onLoad, false);
        }
    }

    function onLoad(e)
    {

        strings = document.getElementById("igualtiltilzeitor-strings");
        doc = window.content.document;
        var href = doc.location.href;
        isDS = (href.indexOf('forum.darkside.com.br/vb') === -1)
                ? false
                : true;
        if(isDS)
        {
            igualTilTilzate(getSmilies());
        }
    }

    function igualTilTilzate(smilies)
    {
        initialized = true;
        var textNode;
        for(var l = smilies.length; --l >= 0;)
        {
            textNode = doc.createTextNode('=~~');
            smilies[l].parentNode.insertBefore(textNode, smilies[l]);
            smilies[l].parentNode.removeChild(smilies[l]);
        }
    }

    function getSmilies()
    {
        var smilieRegExp = /images\/smilies\_ds\//ig;
        return Array.filter(
            doc.getElementsByClassName('inlineimg'),
            function(elm)
            {
                return smilieRegExp.test(elm.src);
            }
        );
    }

    function onMenuItemCommand(e)
    {

    }

    function onToolbarButtonCommand(e)
    {

        onMenuItemCommand(e);
    }

    return {
        'init': init,
        'onLoad': onLoad,
        'onMenuItemCommand': onMenuItemCommand,
        'onToolbarButtonCommand': onToolbarButtonCommand
    };

})();

window.addEventListener("load", function(e) { igualtiltilzeitor.init(e); }, false);
