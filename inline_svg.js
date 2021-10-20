Reveal.getSlides().forEach(function(s){
    setTimeout(function () {
        s.querySelectorAll("object").forEach(function(e) {
        if (e.contentDocument)
            setTimeout(function () {
                e.parentElement.replaceChild(e.contentDocument.documentElement.cloneNode(true), e);
            }, 2000);
            
        });
    }, 2000);
});