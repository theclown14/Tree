function tree_toggle(event) {
            event = event || window.event
            let clickedElem = event.target || event.srcElement
            if (!hasClass(clickedElem, 'folder__expand')) {
                return 
            }
            let node = clickedElem.parentNode
            if (hasClass(node, 'last__file')) {
                return 
            }
            let newClass = hasClass(node, 'folder__expandOpen') ? 'folder__expandClosed' : 'folder__expandOpen'
            let re = /(^|\s)(folder__expandOpen|folder__expandClosed)(\s|$)/
            node.className = node.className.replace(re, '$1' + newClass + '$3')
        }

        function hasClass(elem, className) {
            return new RegExp("(^|\\s)" + className + "(\\s|$)").test(elem.className)
        }