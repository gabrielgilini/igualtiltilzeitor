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
    var initialized;
    var strings;


    return {
        onLoad: function onLoad() {
            // initialization code
            initialized = true;
            strings = document.getElementById("igualtiltilzeitor-strings");
          },
        onMenuItemCommand: function onMenuItemCommand(e) {
            var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                            .getService(Components.interfaces.nsIPromptService);
            promptService.alert(window, strings.getString("helloMessageTitle"),
                                        strings.getString("helloMessage"));
        },
        onToolbarButtonCommand: function onToolbarButtonCommand(e) {
            // just reuse the function above.  you can change this, obviously!
            onMenuItemCommand(e);
        }
    };

})();

window.addEventListener("DOMContentLoaded", function(e) { igualtiltilzeitor.onLoad(e); }, false);
