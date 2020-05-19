window.addEventListener('DOMContentLoaded', init);



function init(e){


    const articles = document.querySelectorAll('.article');
    
    articles.forEach(article => {
        article.addEventListener('mouseover', hover);
        article.addEventListener('mouseout', unHover);
    })

    function hover(e){
        this.children[2].style.color = 'var(--lime-green)';
    }


    function unHover(e){
        this.children[2].style.color = 'var(--dark-blue)';
    }




    // menu
    const [open, close, menu] = [document.querySelector('#menu-btn'), document.querySelector('#close'), document.querySelector('#menu')];

    open.addEventListener('click', function(e){
        this.classList.add('hide');
        close.classList.remove('hide');

        menu.classList.remove('hide');
        menu.classList.add('show_menu');

        setTimeout(() => {
            menu.style.transform = 'scale(1)';
            menu.classList.remove('show_menu');
        }, 400);
    })
    
    
    close.addEventListener('click', hide);

    const links = document.querySelectorAll('#menu a');

    links.forEach(link => {
        link.addEventListener('click', hide);
    })
    


    function hide(e){
        close.classList.add('hide');
        open.classList.remove('hide');

        menu.classList.add('hide_menu');

        setTimeout(() => {
            menu.style.transform = 'scale(0)';
            menu.classList.add('hide');
            menu.classList.remove('hide_menu');
        }, 400);
    }
    
    
    
    
}